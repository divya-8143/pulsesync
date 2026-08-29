import os
import sys

# Ensure backend root is in PYTHONPATH
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import asyncio
import random
from datetime import datetime, timedelta, timezone, date
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from app.core.config import settings
from app.core.security import get_password_hash
from app.core.database import Base
from app.models.user import User, UserRole
from app.models.patient import PatientProfile
from app.models.doctor import DoctorProfile, DoctorPatientAssignment, ClinicalNote, AssignmentStatus
from app.models.metric import HealthMetric, MetricType
from app.models.alert import HealthAlert, AlertSeverity
from app.models.audit import AuditLog

async def seed():
    engine = create_async_engine(settings.SQLALCHEMY_DATABASE_URI, echo=False)
    async_session = async_sessionmaker(engine, expire_on_commit=False)

    print(f"Connecting to database: {settings.SQLALCHEMY_DATABASE_URI}")
    print("Initializing database schema...")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)

    async with async_session() as db:
        print("Seeding default authentication accounts...")
        pw_hash = get_password_hash("password123")

        # 1. Admin User
        admin_user = User(
            email="admin@pulsesync.health",
            hashed_password=pw_hash,
            first_name="System",
            last_name="Administrator",
            phone_number="+1-555-0100",
            role=UserRole.ADMIN,
            is_active=True,
            is_verified=True
        )
        db.add(admin_user)

        # 2. Doctors
        doc_sarah = User(
            email="dr.sarah@pulsesync.health",
            hashed_password=pw_hash,
            first_name="Sarah",
            last_name="Jenkins, M.D.",
            phone_number="+1-555-0120",
            role=UserRole.DOCTOR,
            is_active=True,
            is_verified=True
        )
        doc_david = User(
            email="dr.david@pulsesync.health",
            hashed_password=pw_hash,
            first_name="David",
            last_name="Chen, M.D.",
            phone_number="+1-555-0121",
            role=UserRole.DOCTOR,
            is_active=True,
            is_verified=True
        )
        db.add_all([doc_sarah, doc_david])
        await db.flush()

        doc_profile_1 = DoctorProfile(
            user_id=doc_sarah.id,
            specialization="Cardiology & Internal Medicine",
            license_number="MD-CAR-84920",
            department="Cardiovascular Health Unit",
            hospital_affiliation="Metropolitan Medical Center",
            biography="Board-certified cardiologist specializing in hypertension control and biometric monitoring."
        )
        doc_profile_2 = DoctorProfile(
            user_id=doc_david.id,
            specialization="Endocrinology & Metabolic Disorders",
            license_number="MD-END-55129",
            department="Endocrine Care Center",
            hospital_affiliation="University Hospital",
            biography="Specialist in Type 1 & 2 Diabetes telemetry and glycemic variability optimization."
        )
        db.add_all([doc_profile_1, doc_profile_2])

        # 3. Patients
        patient_john = User(
            email="john.doe@example.com",
            hashed_password=pw_hash,
            first_name="John",
            last_name="Doe",
            phone_number="+1-555-0199",
            role=UserRole.PATIENT,
            is_active=True,
            is_verified=True
        )
        patient_emma = User(
            email="emma.watson@example.com",
            hashed_password=pw_hash,
            first_name="Emma",
            last_name="Watson",
            phone_number="+1-555-0198",
            role=UserRole.PATIENT,
            is_active=True,
            is_verified=True
        )
        db.add_all([patient_john, patient_emma])
        await db.flush()

        p_prof_1 = PatientProfile(
            user_id=patient_john.id,
            date_of_birth=date(1985, 6, 15),
            gender="Male",
            blood_type="O+",
            height_cm=178.0,
            emergency_contact_name="Jane Doe",
            emergency_contact_phone="+1-555-0197",
            medical_history="Mild essential hypertension diagnosed 2021. Managed with daily telemetry.",
            allergies=["Penicillin"],
            chronic_conditions=["Hypertension", "Pre-diabetes"]
        )
        p_prof_2 = PatientProfile(
            user_id=patient_emma.id,
            date_of_birth=date(1992, 11, 23),
            gender="Female",
            blood_type="A-",
            height_cm=165.0,
            emergency_contact_name="Robert Watson",
            emergency_contact_phone="+1-555-0196",
            medical_history="Routine postpartum telemetry tracking.",
            allergies=["Sulfa drugs"],
            chronic_conditions=["Asthma"]
        )
        db.add_all([p_prof_1, p_prof_2])
        await db.flush()

        # Assignments
        assign_1 = DoctorPatientAssignment(
            doctor_id=doc_profile_1.id,
            patient_id=p_prof_1.id,
            assigned_by_user_id=admin_user.id,
            status=AssignmentStatus.ACTIVE,
            notes="Assigned for cardiovascular and blood pressure stabilization."
        )
        assign_2 = DoctorPatientAssignment(
            doctor_id=doc_profile_2.id,
            patient_id=p_prof_2.id,
            assigned_by_user_id=admin_user.id,
            status=AssignmentStatus.ACTIVE,
            notes="Assigned for glucose monitoring and preventive wellness."
        )
        db.add_all([assign_1, assign_2])

        # Clinical Notes
        note_1 = ClinicalNote(
            doctor_id=doc_profile_1.id,
            patient_id=p_prof_1.id,
            title="Initial Telehealth Consultation & BP Protocol",
            diagnosis="Essential Stage 1 Hypertension with circadian nocturnal dip anomalies.",
            prescription="Amlodipine 5mg OD, daily morning and evening BP log.",
            recommendations="Reduce sodium intake to < 2000mg/day. Maintain 30 min daily brisk walking.",
            follow_up_date=datetime.now(timezone.utc) + timedelta(days=30)
        )
        db.add(note_1)

        print("Generating 60 days of historical vitals telemetry...")
        now = datetime.now(timezone.utc)
        metrics_to_add = []
        alerts_to_add = []

        for days_ago in range(60, -1, -1):
            day_dt = now - timedelta(days=days_ago)
            m_time = day_dt.replace(hour=8, minute=random.randint(0, 45), second=0)
            
            # Blood Pressure for John (occasional elevation)
            sys_val = round(random.gauss(128, 8))
            dia_val = round(random.gauss(82, 5))
            if days_ago in [5, 22, 45]:
                sys_val = 148
                dia_val = 94
            
            bp_metric = HealthMetric(
                patient_id=p_prof_1.id,
                metric_type=MetricType.BLOOD_PRESSURE,
                systolic=sys_val, diastolic=dia_val,
                unit="mmHg", activity_context="RESTING",
                notes="Morning resting measurement",
                measured_at=m_time
            )
            metrics_to_add.append(bp_metric)

            if sys_val >= 140 or dia_val >= 90:
                alerts_to_add.append(HealthAlert(
                    patient_id=p_prof_1.id,
                    severity=AlertSeverity.WARNING if sys_val < 170 else AlertSeverity.CRITICAL,
                    title="Elevated Blood Pressure Alert",
                    message=f"Blood Pressure reading {sys_val}/{dia_val} mmHg exceeded target warning limit.",
                    metric_type="BLOOD_PRESSURE",
                    recorded_value=f"{sys_val}/{dia_val} mmHg",
                    threshold_breached="Warning Max: 140/90 mmHg",
                    is_acknowledged=(days_ago > 7),
                    created_at=m_time
                ))

            # Heart Rate
            metrics_to_add.append(HealthMetric(
                patient_id=p_prof_1.id,
                metric_type=MetricType.HEART_RATE,
                value=round(random.gauss(72, 6)), unit="bpm", activity_context="RESTING",
                measured_at=m_time
            ))

            # Blood Glucose
            metrics_to_add.append(HealthMetric(
                patient_id=p_prof_1.id,
                metric_type=MetricType.BLOOD_GLUCOSE,
                value=round(random.gauss(95, 8)), unit="mg/dL", meal_context="FASTING",
                measured_at=m_time
            ))

            # Weight
            if days_ago % 3 == 0:
                wt = round(84.5 - (60 - days_ago) * 0.03 + random.uniform(-0.3, 0.3), 1)
                metrics_to_add.append(HealthMetric(
                    patient_id=p_prof_1.id,
                    metric_type=MetricType.WEIGHT,
                    value=wt, unit="kg", activity_context="MORNING_FASTED",
                    measured_at=m_time
                ))

            # Temperature
            metrics_to_add.append(HealthMetric(
                patient_id=p_prof_1.id,
                metric_type=MetricType.TEMPERATURE,
                value=round(random.gauss(36.6, 0.2), 1), unit="°C",
                measured_at=m_time
            ))

        db.add_all(metrics_to_add)
        db.add_all(alerts_to_add)

        # Audit Logs
        db.add(AuditLog(
            user_id=admin_user.id,
            action="SYSTEM_INIT_SEED",
            entity_type="Database",
            entity_id="ALL",
            details={"seeded_records": len(metrics_to_add)}
        ))

        await db.commit()
        print("Database successfully seeded with 60 days of realistic patient telemetry!")

if __name__ == "__main__":
    asyncio.run(seed())
