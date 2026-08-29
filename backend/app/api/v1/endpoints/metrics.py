from typing import List, Optional
from uuid import UUID
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.models.user import User, UserRole
from app.models.patient import PatientProfile
from app.models.metric import MetricType
from app.schemas.metric import MetricCreate, MetricResponse, MetricStatsResponse, MetricTrendPoint
from app.api.deps import get_current_user
from app.services.metric_service import MetricService
from app.services.trend_analyzer import TrendAnalyzer
from app.services.doctor_service import DoctorService

router = APIRouter()

async def resolve_patient_id(db: AsyncSession, current_user: User, requested_patient_id: Optional[UUID]) -> UUID:
    if current_user.role == UserRole.PATIENT:
        stmt = select(PatientProfile).where(PatientProfile.user_id == current_user.id)
        profile = (await db.execute(stmt)).scalars().first()
        if not profile:
            raise HTTPException(status_code=404, detail="Patient profile not found")
        return profile.id
    
    if not requested_patient_id:
        raise HTTPException(status_code=400, detail="patient_id is required for doctors and admins")
        
    if current_user.role == UserRole.DOCTOR:
        is_assigned = await DoctorService.is_assigned(db, current_user.id, requested_patient_id)
        if not is_assigned:
            raise HTTPException(status_code=403, detail="You are not assigned to this patient.")
            
    return requested_patient_id

@router.post("/", response_model=MetricResponse, status_code=status.HTTP_201_CREATED)
async def log_health_metric(
    data: MetricCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    patient_id = await resolve_patient_id(db, current_user, data.patient_id)
    metric = await MetricService.log_metric(db, patient_id, data)
    await db.commit()
    await db.refresh(metric)
    return metric

@router.get("/", response_model=List[MetricResponse])
async def get_health_metrics(
    patient_id: Optional[UUID] = None,
    metric_type: Optional[MetricType] = None,
    start_date: Optional[datetime] = None,
    end_date: Optional[datetime] = None,
    limit: int = 100,
    offset: int = 0,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    pid = await resolve_patient_id(db, current_user, patient_id)
    return await MetricService.get_patient_metrics(
        db, pid, metric_type=metric_type,
        start_date=start_date, end_date=end_date,
        limit=limit, offset=offset
    )

@router.get("/summary", response_model=List[MetricStatsResponse])
async def get_metrics_summary(
    patient_id: Optional[UUID] = None,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    pid = await resolve_patient_id(db, current_user, patient_id)
    return await MetricService.get_summary_stats(db, pid)

@router.get("/trends", response_model=List[MetricTrendPoint])
async def get_metrics_trends(
    metric_type: MetricType,
    timeframe: str = Query("monthly", regex="^(weekly|monthly|yearly)$"),
    patient_id: Optional[UUID] = None,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    pid = await resolve_patient_id(db, current_user, patient_id)
    return await TrendAnalyzer.get_trend_series(db, pid, metric_type, timeframe)
