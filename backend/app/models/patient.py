import uuid
from datetime import datetime, timezone, date
from sqlalchemy import Column, String, Date, DateTime, ForeignKey, Enum, Float, Boolean, Text, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.core.database import Base
from app.models.metric import MetricType

class PatientProfile(Base):
    __tablename__ = "patient_profiles"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    
    date_of_birth = Column(Date, nullable=True)
    gender = Column(String(20), nullable=True)
    blood_type = Column(String(10), nullable=True)
    height_cm = Column(Float, nullable=True)
    emergency_contact_name = Column(String(150), nullable=True)
    emergency_contact_phone = Column(String(50), nullable=True)
    medical_history = Column(Text, nullable=True)
    allergies = Column(JSON, default=list, nullable=True)
    chronic_conditions = Column(JSON, default=list, nullable=True)
    
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)

    # Relationships
    user = relationship("User", back_populates="patient_profile")
    metrics = relationship("HealthMetric", back_populates="patient", cascade="all, delete-orphan", order_by="desc(HealthMetric.measured_at)")
    alerts = relationship("HealthAlert", back_populates="patient", cascade="all, delete-orphan", order_by="desc(HealthAlert.created_at)")
    assignments = relationship("DoctorPatientAssignment", back_populates="patient", cascade="all, delete-orphan")
    threshold_settings = relationship("ThresholdSetting", back_populates="patient", cascade="all, delete-orphan")
    reports = relationship("HealthReport", back_populates="patient", cascade="all, delete-orphan")
    clinical_notes = relationship("ClinicalNote", back_populates="patient", cascade="all, delete-orphan")

class ThresholdSetting(Base):
    __tablename__ = "threshold_settings"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    patient_id = Column(UUID(as_uuid=True), ForeignKey("patient_profiles.id", ondelete="CASCADE"), nullable=False, index=True)
    metric_type = Column(Enum(MetricType, name="metric_type_enum"), nullable=False)
    
    # Range bounds
    min_normal = Column(Float, nullable=True)
    max_normal = Column(Float, nullable=True)
    min_warning = Column(Float, nullable=True)
    max_warning = Column(Float, nullable=True)
    min_critical = Column(Float, nullable=True)
    max_critical = Column(Float, nullable=True)
    
    # Blood Pressure specific (Systolic / Diastolic)
    systolic_max_warning = Column(Float, nullable=True)
    systolic_max_critical = Column(Float, nullable=True)
    diastolic_max_warning = Column(Float, nullable=True)
    diastolic_max_critical = Column(Float, nullable=True)

    is_custom = Column(Boolean, default=False, nullable=False)
    set_by_user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)

    patient = relationship("PatientProfile", back_populates="threshold_settings")
