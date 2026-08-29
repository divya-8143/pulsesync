from typing import Optional, List
from uuid import UUID
from datetime import datetime
from pydantic import BaseModel
from app.models.metric import MetricType

class MetricBase(BaseModel):
    metric_type: MetricType
    value: Optional[float] = None
    systolic: Optional[float] = None
    diastolic: Optional[float] = None
    unit: str
    meal_context: Optional[str] = None
    activity_context: Optional[str] = None
    notes: Optional[str] = None
    measured_at: Optional[datetime] = None

class MetricCreate(MetricBase):
    patient_id: Optional[UUID] = None

class MetricBulkCreate(BaseModel):
    metrics: List[MetricCreate]

class MetricResponse(MetricBase):
    id: UUID
    patient_id: UUID
    created_at: datetime

    class Config:
        from_attributes = True

class MetricStatsResponse(BaseModel):
    metric_type: MetricType
    count: int
    latest_value: Optional[float] = None
    latest_systolic: Optional[float] = None
    latest_diastolic: Optional[float] = None
    avg_value: Optional[float] = None
    min_value: Optional[float] = None
    max_value: Optional[float] = None
    avg_systolic: Optional[float] = None
    avg_diastolic: Optional[float] = None
    unit: str
    last_measured_at: Optional[datetime] = None

class MetricTrendPoint(BaseModel):
    date: str
    avg_value: Optional[float] = None
    min_value: Optional[float] = None
    max_value: Optional[float] = None
    avg_systolic: Optional[float] = None
    avg_diastolic: Optional[float] = None
    count: int
