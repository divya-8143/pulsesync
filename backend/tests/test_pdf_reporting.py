import os
from datetime import date
from unittest.mock import MagicMock
from app.models.patient import PatientProfile
from app.models.user import User
from app.services.pdf_generator import PDFGenerator

def test_generate_pdf_report_file_integrity():
    patient = MagicMock(spec=PatientProfile)
    patient.id = "patient-12345"
    patient.user = MagicMock(spec=User)
    patient.user.full_name = "Jane Doe"
    patient.user.email = "jane@example.com"
    patient.date_of_birth = date(1990, 5, 20)
    patient.gender = "Female"
    patient.blood_type = "O+"
    patient.height_cm = 168.0

    file_path = PDFGenerator.generate_health_dossier(
        patient=patient,
        metrics=[],
        alerts=[],
        start_date=date(2026, 1, 1),
        end_date=date(2026, 1, 31),
        report_title="Monthly Clinical Review"
    )

    assert os.path.exists(file_path), "PDF report file should exist on disk"
    assert os.path.getsize(file_path) > 0, "PDF file must be non-empty"
