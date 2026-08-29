from typing import Optional
from uuid import UUID
from datetime import date, datetime
from pydantic import BaseModel
from app.models.report import ReportType, ReportStatus

class ReportCreateRequest(BaseModel):
    patient_id: Optional[UUID] = None
    report_type: ReportType
    start_date: date
    end_date: date
    title: Optional[str] = None

class ReportResponse(BaseModel):
    id: UUID
    patient_id: UUID
    generated_by_user_id: UUID
    report_type: ReportType
    title: str
    status: ReportStatus
    start_date: date
    end_date: date
    file_path: Optional[str] = None
    file_size_bytes: Optional[str] = None
    summary_text: Optional[str] = None
    error_message: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
