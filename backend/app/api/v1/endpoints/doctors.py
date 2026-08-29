from typing import List
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.models.user import User
from app.models.doctor import DoctorProfile, ClinicalNote
from app.schemas.doctor import DoctorProfileResponse, ClinicalNoteCreate, ClinicalNoteResponse
from app.schemas.patient import PatientProfileResponse
from app.api.deps import get_current_user, get_current_doctor
from app.services.doctor_service import DoctorService

router = APIRouter()

@router.get("/profile", response_model=DoctorProfileResponse)
async def get_my_doctor_profile(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_doctor)
):
    stmt = select(DoctorProfile).where(DoctorProfile.user_id == current_user.id)
    doc = (await db.execute(stmt)).scalars().first()
    if not doc:
        raise HTTPException(status_code=404, detail="Doctor profile not found")
    return doc

@router.get("/patients", response_model=List[PatientProfileResponse])
async def get_my_assigned_patients(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_doctor)
):
    patients = await DoctorService.get_assigned_patients(db, current_user.id)
    return patients

@router.post("/clinical-notes", response_model=ClinicalNoteResponse)
async def create_clinical_note(
    data: ClinicalNoteCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_doctor)
):
    note = await DoctorService.add_clinical_note(
        db=db,
        doctor_user_id=current_user.id,
        patient_id=data.patient_id,
        title=data.title,
        diagnosis=data.diagnosis,
        prescription=data.prescription,
        recommendations=data.recommendations,
        follow_up_date=data.follow_up_date
    )
    await db.commit()
    await db.refresh(note)
    return note

@router.get("/clinical-notes/{patient_id}", response_model=List[ClinicalNoteResponse])
async def get_patient_clinical_notes(
    patient_id: UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    stmt = select(ClinicalNote).where(ClinicalNote.patient_id == patient_id).order_by(ClinicalNote.created_at.desc())
    notes = (await db.execute(stmt)).scalars().all()
    return list(notes)
