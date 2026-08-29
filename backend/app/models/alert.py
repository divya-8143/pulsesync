import uuid
import enum
from datetime import datetime, timezone
from sqlalchemy import Column, String, DateTime, ForeignKey, Enum, Boolean, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.core.database import Base

class AlertSeverity(str, enum.Enum):
    INFO = "INFO"
    WARNING = "WARNING"
    CRITICAL = "CRITICAL"

class HealthAlert(Base):
    __tablename__ = "health_alerts"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    patient_id = Column(UUID(as_uuid=True), ForeignKey("patient_profiles.id", ondelete="CASCADE"), nullable=False, index=True)
    metric_id = Column(UUID(as_uuid=True), ForeignKey("health_metrics.id", ondelete="CASCADE"), nullable=True)
    
    severity = Column(Enum(AlertSeverity, name="alert_severity_enum"), default=AlertSeverity.WARNING, nullable=False, index=True)
    title = Column(String(200), nullable=False)
    message = Column(Text, nullable=False)
    metric_type = Column(String(50), nullable=False)
    recorded_value = Column(String(100), nullable=False)
    threshold_breached = Column(String(100), nullable=False)
    
    is_acknowledged = Column(Boolean, default=False, nullable=False, index=True)
    acknowledged_by_user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    acknowledged_at = Column(DateTime(timezone=True), nullable=True)
    action_taken = Column(Text, nullable=True)
    
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False, index=True)

    patient = relationship("PatientProfile", back_populates="alerts")
    metric = relationship("HealthMetric", back_populates="alerts")
