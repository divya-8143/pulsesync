from typing import List, Optional
from uuid import UUID
from datetime import datetime, timezone
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, desc
from app.core.database import get_db
from app.models.user import User, UserRole
from app.models.alert import HealthAlert, AlertSeverity
from app.models.patient import PatientProfile
from app.schemas.alert import AlertResponse, AlertAcknowledgeRequest
from app.api.deps import get_current_user

router = APIRouter()

@router.get("/", response_model=List[AlertResponse])
async def get_alerts(
    patient_id: Optional[UUID] = None,
    severity: Optional[AlertSeverity] = None,
    is_acknowledged: Optional[bool] = None,
    limit: int = 50,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    query = select(HealthAlert)
    if current_user.role == UserRole.PATIENT:
        stmt = select(PatientProfile).where(PatientProfile.user_id == current_user.id)
        p = (await db.execute(stmt)).scalars().first()
        if not p:
            return []
        query = query.where(HealthAlert.patient_id == p.id)
    elif patient_id:
        query = query.where(HealthAlert.patient_id == patient_id)
        
    if severity:
        query = query.where(HealthAlert.severity == severity)
    if is_acknowledged is not None:
        query = query.where(HealthAlert.is_acknowledged == is_acknowledged)

    query = query.order_by(desc(HealthAlert.created_at)).limit(limit)
    res = await db.execute(query)
    return list(res.scalars().all())

@router.put("/{alert_id}/acknowledge", response_model=AlertResponse)
async def acknowledge_alert(
    alert_id: UUID,
    data: AlertAcknowledgeRequest,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    stmt = select(HealthAlert).where(HealthAlert.id == alert_id)
    alert = (await db.execute(stmt)).scalars().first()
    if not alert:
        raise HTTPException(status_code=404, detail="Alert not found")

    alert.is_acknowledged = True
    alert.acknowledged_by_user_id = current_user.id
    alert.acknowledged_at = datetime.now(timezone.utc)
    if data.action_taken:
        alert.action_taken = data.action_taken

    await db.commit()
    await db.refresh(alert)
    return alert
