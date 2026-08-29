import os
from typing import List, Optional
from uuid import UUID
from datetime import datetime, timezone, time
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import FileResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from app.core.database import get_db
from app.models.user import User, UserRole
from app.models.patient import PatientProfile
from app.models.metric import HealthMetric
from app.models.alert import HealthAlert
from app.models.report import HealthReport, ReportStatus
from app.schemas.report import ReportCreateRequest, ReportResponse
from app.api.deps import get_current_user
from app.services.pdf_generator import PDFGenerator

router = APIRouter()

@router.post("/generate", response_model=ReportResponse)
async def generate_report(
    req: ReportCreateRequest,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    target_pid = req.patient_id
    if current_user.role == UserRole.PATIENT or not target_pid:
        stmt = select(PatientProfile).where(PatientProfile.user_id == current_user.id)
        p = (await db.execute(stmt)).scalars().first()
        if not p:
            raise HTTPException(status_code=404, detail="Patient profile not found")
        target_pid = p.id

    p_stmt = select(PatientProfile).where(PatientProfile.id == target_pid).options(selectinload(PatientProfile.user))
    patient = (await db.execute(p_stmt)).scalars().first()
    if not patient:
        raise HTTPException(status_code=404, detail="Target patient not found")

    start_dt = datetime.combine(req.start_date, time.min).replace(tzinfo=timezone.utc)
    end_dt = datetime.combine(req.end_date, time.max).replace(tzinfo=timezone.utc)

    m_stmt = select(HealthMetric).where(
        HealthMetric.patient_id == target_pid,
        HealthMetric.measured_at >= start_dt,
        HealthMetric.measured_at <= end_dt
    ).order_by(HealthMetric.measured_at.desc())
    metrics = (await db.execute(m_stmt)).scalars().all()

    a_stmt = select(HealthAlert).where(
        HealthAlert.patient_id == target_pid,
        HealthAlert.created_at >= start_dt,
        HealthAlert.created_at <= end_dt
    ).order_by(HealthAlert.created_at.desc())
    alerts = (await db.execute(a_stmt)).scalars().all()

    title = req.title or f"PulseSync Clinical Summary ({req.start_date} to {req.end_date})"
    pdf_path = PDFGenerator.generate_health_dossier(
        patient=patient,
        metrics=list(metrics),
        alerts=list(alerts),
        start_date=req.start_date,
        end_date=req.end_date,
        report_title=title
    )
    file_size = f"{round(os.path.getsize(pdf_path) / 1024, 1)} KB"

    report = HealthReport(
        patient_id=target_pid,
        generated_by_user_id=current_user.id,
        report_type=req.report_type,
        title=title,
        status=ReportStatus.COMPLETED,
        start_date=req.start_date,
        end_date=req.end_date,
        file_path=pdf_path,
        file_size_bytes=file_size,
        summary_text=f"Compiled {len(metrics)} vitals entries and {len(alerts)} alerts."
    )
    db.add(report)
    await db.commit()
    await db.refresh(report)
    return report

@router.get("/", response_model=List[ReportResponse])
async def list_reports(
    patient_id: Optional[UUID] = None,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    query = select(HealthReport)
    if current_user.role == UserRole.PATIENT:
        p_stmt = select(PatientProfile).where(PatientProfile.user_id == current_user.id)
        p = (await db.execute(p_stmt)).scalars().first()
        if not p:
            return []
        query = query.where(HealthReport.patient_id == p.id)
    elif patient_id:
        query = query.where(HealthReport.patient_id == patient_id)

    query = query.order_by(HealthReport.created_at.desc())
    res = await db.execute(query)
    return list(res.scalars().all())

@router.get("/{report_id}/download")
async def download_report(
    report_id: UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    stmt = select(HealthReport).where(HealthReport.id == report_id)
    report = (await db.execute(stmt)).scalars().first()
    if not report or not report.file_path or not os.path.exists(report.file_path):
        raise HTTPException(status_code=404, detail="Report file not found")

    return FileResponse(report.file_path, media_type="application/pdf", filename=os.path.basename(report.file_path))
