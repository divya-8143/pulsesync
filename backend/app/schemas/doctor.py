from typing import Optional
from uuid import UUID
from datetime import datetime
from pydantic import BaseModel

class DoctorProfileBase(BaseModel):
    specialization: str
    license_number: str
    department: Optional[str] = None
    hospital_affiliation: Optional[str] = None
    biography: Optional[str] = None
    office_phone: Optional[str] = None
    is_accepting_patients: bool = True

class DoctorProfileCreate(DoctorProfileBase):
    pass

class DoctorProfileUpdate(BaseModel):
    specialization: Optional[str] = None
    department: Optional[str] = None
    hospital_affiliation: Optional[str] = None
    biography: Optional[str] = None
    office_phone: Optional[str] = None
    is_accepting_patients: Optional[bool] = None

class DoctorProfileResponse(DoctorProfileBase):
    id: UUID
    user_id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class ClinicalNoteBase(BaseModel):
    title: str
    diagnosis: Optional[str] = None
    prescription: Optional[str] = None
    recommendations: Optional[str] = None
    follow_up_date: Optional[datetime] = None

class ClinicalNoteCreate(ClinicalNoteBase):
    patient_id: UUID

class ClinicalNoteResponse(ClinicalNoteBase):
    id: UUID
    doctor_id: UUID
    patient_id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
