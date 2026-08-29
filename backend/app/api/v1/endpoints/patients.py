from typing import List, Optional
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.models.user import User
from app.models.patient import PatientProfile, ThresholdSetting
from app.schemas.patient import PatientProfileResponse, PatientProfileUpdate, ThresholdSettingResponse, ThresholdSettingCreate
from app.api.deps import get_current_user

router = APIRouter()

@router.get("/profile", response_model=PatientProfileResponse)
async def get_my_patient_profile(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    stmt = select(PatientProfile).where(PatientProfile.user_id == current_user.id)
    profile = (await db.execute(stmt)).scalars().first()
    if not profile:
        raise HTTPException(status_code=404, detail="Patient profile not found")
    return profile

@router.put("/profile", response_model=PatientProfileResponse)
async def update_my_patient_profile(
    data: PatientProfileUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    stmt = select(PatientProfile).where(PatientProfile.user_id == current_user.id)
    profile = (await db.execute(stmt)).scalars().first()
    if not profile:
        raise HTTPException(status_code=404, detail="Patient profile not found")

    for k, v in data.model_dump(exclude_unset=True).items():
        setattr(profile, k, v)

    await db.commit()
    await db.refresh(profile)
    return profile

@router.get("/thresholds", response_model=List[ThresholdSettingResponse])
async def get_patient_thresholds(
    patient_id: Optional[UUID] = None,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    target_pid = patient_id
    if not target_pid:
        stmt = select(PatientProfile).where(PatientProfile.user_id == current_user.id)
        p = (await db.execute(stmt)).scalars().first()
        if not p:
            raise HTTPException(status_code=404, detail="Patient profile not found")
        target_pid = p.id

    stmt = select(ThresholdSetting).where(ThresholdSetting.patient_id == target_pid)
    thresholds = (await db.execute(stmt)).scalars().all()
    return list(thresholds)

@router.post("/thresholds", response_model=ThresholdSettingResponse)
async def set_patient_threshold(
    data: ThresholdSettingCreate,
    patient_id: Optional[UUID] = None,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    target_pid = patient_id
    if not target_pid:
        stmt = select(PatientProfile).where(PatientProfile.user_id == current_user.id)
        p = (await db.execute(stmt)).scalars().first()
        target_pid = p.id

    stmt = select(ThresholdSetting).where(
        ThresholdSetting.patient_id == target_pid,
        ThresholdSetting.metric_type == data.metric_type
    )
    thresh = (await db.execute(stmt)).scalars().first()
    if not thresh:
        thresh = ThresholdSetting(patient_id=target_pid, metric_type=data.metric_type)
        db.add(thresh)

    for k, v in data.model_dump(exclude_unset=True).items():
        setattr(thresh, k, v)
    thresh.is_custom = True
    thresh.set_by_user_id = current_user.id

    await db.commit()
    await db.refresh(thresh)
    return thresh
