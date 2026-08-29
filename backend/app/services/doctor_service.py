from typing import List, Optional
from uuid import UUID
from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from app.models.doctor import DoctorProfile, DoctorPatientAssignment, ClinicalNote, AssignmentStatus
from app.models.patient import PatientProfile

class DoctorService:
    @staticmethod
    async def get_assigned_patients(db: AsyncSession, doctor_user_id: UUID) -> List[PatientProfile]:
        doc_stmt = select(DoctorProfile).where(DoctorProfile.user_id == doctor_user_id)
        doc = (await db.execute(doc_stmt)).scalars().first()
        if not doc:
            return []

        stmt = select(DoctorPatientAssignment).where(
            DoctorPatientAssignment.doctor_id == doc.id,
            DoctorPatientAssignment.status == AssignmentStatus.ACTIVE
        ).options(
            selectinload(DoctorPatientAssignment.patient).selectinload(PatientProfile.user),
            selectinload(DoctorPatientAssignment.patient).selectinload(PatientProfile.metrics),
            selectinload(DoctorPatientAssignment.patient).selectinload(PatientProfile.alerts)
        )
        assignments = (await db.execute(stmt)).scalars().all()
        return [a.patient for a in assignments if a.patient]

    @staticmethod
    async def is_assigned(db: AsyncSession, doctor_user_id: UUID, patient_id: UUID) -> bool:
        doc_stmt = select(DoctorProfile).where(DoctorProfile.user_id == doctor_user_id)
        doc = (await db.execute(doc_stmt)).scalars().first()
        if not doc:
            return False

        stmt = select(DoctorPatientAssignment).where(
            DoctorPatientAssignment.doctor_id == doc.id,
            DoctorPatientAssignment.patient_id == patient_id,
            DoctorPatientAssignment.status == AssignmentStatus.ACTIVE
        )
        res = (await db.execute(stmt)).scalars().first()
        return res is not None

    @staticmethod
    async def add_clinical_note(
        db: AsyncSession,
        doctor_user_id: UUID,
        patient_id: UUID,
        title: str,
        diagnosis: Optional[str] = None,
        prescription: Optional[str] = None,
        recommendations: Optional[str] = None,
        follow_up_date: Optional[datetime] = None
    ) -> ClinicalNote:
        doc_stmt = select(DoctorProfile).where(DoctorProfile.user_id == doctor_user_id)
        doc = (await db.execute(doc_stmt)).scalars().first()
        if not doc:
            raise ValueError("Doctor profile not found for user")

        note = ClinicalNote(
            doctor_id=doc.id,
            patient_id=patient_id,
            title=title,
            diagnosis=diagnosis,
            prescription=prescription,
            recommendations=recommendations,
            follow_up_date=follow_up_date
        )
        db.add(note)
        await db.flush()
        return note
