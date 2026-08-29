from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from app.core.database import get_db
from app.models.user import User
from app.models.doctor import DoctorPatientAssignment, DoctorProfile, AssignmentStatus
from app.models.patient import PatientProfile
from app.schemas.assignment import AssignmentCreate, AssignmentResponse
from app.api.deps import get_current_admin

router = APIRouter()

@router.get("/", response_model=List[AssignmentResponse])
async def get_all_assignments(
    db: AsyncSession = Depends(get_db),
    admin: User = Depends(get_current_admin)
):
    stmt = select(DoctorPatientAssignment).options(
        selectinload(DoctorPatientAssignment.doctor).selectinload(DoctorProfile.user),
        selectinload(DoctorPatientAssignment.patient).selectinload(PatientProfile.user)
    ).order_by(DoctorPatientAssignment.assigned_at.desc())
    assignments = (await db.execute(stmt)).scalars().all()
    
    output = []
    for a in assignments:
        d_name = a.doctor.user.full_name if a.doctor and a.doctor.user else "Doctor"
        p_name = a.patient.user.full_name if a.patient and a.patient.user else "Patient"
        item = AssignmentResponse.model_validate(a)
        item.doctor_name = d_name
        item.patient_name = p_name
        output.append(item)
    return output

@router.post("/", response_model=AssignmentResponse)
async def create_assignment(
    data: AssignmentCreate,
    db: AsyncSession = Depends(get_db),
    admin: User = Depends(get_current_admin)
):
    assignment = DoctorPatientAssignment(
        doctor_id=data.doctor_id,
        patient_id=data.patient_id,
        assigned_by_user_id=admin.id,
        notes=data.notes,
        status=AssignmentStatus.ACTIVE
    )
    db.add(assignment)
    await db.commit()
    await db.refresh(assignment)
    return assignment
