from typing import Optional, List
from uuid import UUID
from datetime import date, datetime
from pydantic import BaseModel
from app.models.metric import MetricType

class PatientProfileBase(BaseModel):
    date_of_birth: Optional[date] = None
    gender: Optional[str] = None
    blood_type: Optional[str] = None
    height_cm: Optional[float] = None
    emergency_contact_name: Optional[str] = None
    emergency_contact_phone: Optional[str] = None
    medical_history: Optional[str] = None
    allergies: Optional[List[str]] = []
    chronic_conditions: Optional[List[str]] = []

class PatientProfileCreate(PatientProfileBase):
    pass

class PatientProfileUpdate(PatientProfileBase):
    pass

class PatientProfileResponse(PatientProfileBase):
    id: UUID
    user_id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class ThresholdSettingBase(BaseModel):
    metric_type: MetricType
    min_normal: Optional[float] = None
    max_normal: Optional[float] = None
    min_warning: Optional[float] = None
    max_warning: Optional[float] = None
    min_critical: Optional[float] = None
    max_critical: Optional[float] = None
    systolic_max_warning: Optional[float] = None
    systolic_max_critical: Optional[float] = None
    diastolic_max_warning: Optional[float] = None
    diastolic_max_critical: Optional[float] = None

class ThresholdSettingCreate(ThresholdSettingBase):
    pass

class ThresholdSettingResponse(ThresholdSettingBase):
    id: UUID
    patient_id: UUID
    is_custom: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
