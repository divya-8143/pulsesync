import uuid
import enum
from datetime import datetime, timezone
from sqlalchemy import Column, String, DateTime, ForeignKey, Enum, Float, Text, Index
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.core.database import Base

class MetricType(str, enum.Enum):
    BLOOD_PRESSURE = "BLOOD_PRESSURE"
    HEART_RATE = "HEART_RATE"
    WEIGHT = "WEIGHT"
    TEMPERATURE = "TEMPERATURE"
    BLOOD_GLUCOSE = "BLOOD_GLUCOSE"

class HealthMetric(Base):
    __tablename__ = "health_metrics"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    patient_id = Column(UUID(as_uuid=True), ForeignKey("patient_profiles.id", ondelete="CASCADE"), nullable=False, index=True)
    metric_type = Column(Enum(MetricType, name="metric_type_enum"), nullable=False, index=True)
    
    # Generic Value (for HR, Weight, Temp, Glucose)
    value = Column(Float, nullable=True)
    
    # Dual values for Blood Pressure (e.g., 120 / 80)
    systolic = Column(Float, nullable=True)
    diastolic = Column(Float, nullable=True)
    
    unit = Column(String(30), nullable=False)
    meal_context = Column(String(50), nullable=True)
    activity_context = Column(String(50), nullable=True)
    notes = Column(Text, nullable=True)
    
    measured_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False, index=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)

    # Relationships
    patient = relationship("PatientProfile", back_populates="metrics")
    alerts = relationship("HealthAlert", back_populates="metric", cascade="all, delete-orphan")

    __table_args__ = (
        Index("ix_metrics_patient_type_measured", "patient_id", "metric_type", "measured_at"),
    )
