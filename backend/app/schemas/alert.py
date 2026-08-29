from typing import Optional
from uuid import UUID
from datetime import datetime
from pydantic import BaseModel
from app.models.alert import AlertSeverity

class AlertBase(BaseModel):
    severity: AlertSeverity
    title: str
    message: str
    metric_type: str
    recorded_value: str
    threshold_breached: str

class AlertCreate(AlertBase):
    patient_id: UUID
    metric_id: Optional[UUID] = None

class AlertAcknowledgeRequest(BaseModel):
    action_taken: Optional[str] = None

class AlertResponse(AlertBase):
    id: UUID
    patient_id: UUID
    metric_id: Optional[UUID] = None
    is_acknowledged: bool
    acknowledged_by_user_id: Optional[UUID] = None
    acknowledged_at: Optional[datetime] = None
    action_taken: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True
