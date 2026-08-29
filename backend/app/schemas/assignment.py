from typing import Optional
from uuid import UUID
from datetime import datetime
from pydantic import BaseModel, ConfigDict
from app.models.doctor import AssignmentStatus

class AssignmentBase(BaseModel):
    doctor_id: UUID
    patient_id: UUID
    notes: Optional[str] = None

class AssignmentCreate(AssignmentBase):
    pass

class AssignmentUpdate(BaseModel):
    status: AssignmentStatus
    notes: Optional[str] = None

class AssignmentResponse(AssignmentBase):
    model_config = ConfigDict(from_attributes=True)
    id: UUID
    status: AssignmentStatus
    assigned_by_user_id: Optional[UUID] = None
    assigned_at: datetime
    updated_at: datetime
    doctor_name: Optional[str] = None
    patient_name: Optional[str] = None
