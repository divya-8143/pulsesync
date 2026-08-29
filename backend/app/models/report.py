import uuid
import enum
from datetime import datetime, timezone, date
from sqlalchemy import Column, String, DateTime, Date, ForeignKey, Enum, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.core.database import Base

class ReportType(str, enum.Enum):
    WEEKLY_SUMMARY = "WEEKLY_SUMMARY"
    MONTHLY_TREND = "MONTHLY_TREND"
    YEARLY_OVERVIEW = "YEARLY_OVERVIEW"
    CLINICAL_DOSSIER = "CLINICAL_DOSSIER"

class ReportStatus(str, enum.Enum):
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

class HealthReport(Base):
    __tablename__ = "health_reports"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    patient_id = Column(UUID(as_uuid=True), ForeignKey("patient_profiles.id", ondelete="CASCADE"), nullable=False, index=True)
    generated_by_user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    
    report_type = Column(Enum(ReportType, name="report_type_enum"), nullable=False)
    title = Column(String(200), nullable=False)
    status = Column(Enum(ReportStatus, name="report_status_enum"), default=ReportStatus.PENDING, nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    file_path = Column(String(500), nullable=True)
    file_size_bytes = Column(String(50), nullable=True)
    summary_text = Column(Text, nullable=True)
    error_message = Column(Text, nullable=True)
    
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)

    patient = relationship("PatientProfile", back_populates="reports")
