import os
import uuid
from datetime import datetime, date
from typing import List
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from app.models.patient import PatientProfile
from app.models.metric import HealthMetric, MetricType
from app.models.alert import HealthAlert
from app.core.config import settings

class PDFGenerator:
    @staticmethod
    def generate_health_dossier(
        patient: PatientProfile,
        metrics: List[HealthMetric],
        alerts: List[HealthAlert],
        start_date: date,
        end_date: date,
        report_title: str
    ) -> str:
        os.makedirs(settings.REPORT_DIR, exist_ok=True)
        filename = f"report_{patient.id}_{uuid.uuid4().hex[:8]}.pdf"
        file_path = os.path.join(settings.REPORT_DIR, filename)

        doc = SimpleDocTemplate(
            file_path,
            pagesize=letter,
            rightMargin=36, leftMargin=36,
            topMargin=36, bottomMargin=36
        )

        styles = getSampleStyleSheet()
        title_style = ParagraphStyle(
            'ReportTitle',
            parent=styles['Heading1'],
            fontSize=20,
            textColor=colors.HexColor("#0284c7"),
            spaceAfter=4
        )
        subtitle_style = ParagraphStyle(
            'ReportSubtitle',
            parent=styles['Normal'],
            fontSize=9,
            textColor=colors.HexColor("#64748b"),
            spaceAfter=12
        )
        section_heading = ParagraphStyle(
            'SectionHead',
            parent=styles['Heading2'],
            fontSize=12,
            textColor=colors.HexColor("#0f172a"),
            spaceBefore=12,
            spaceAfter=6
        )
        body_style = styles['Normal']

        story = []

        # 1. Header
        story.append(Paragraph("PulseSync Health Telemetry Report", title_style))
        p_name = patient.user.full_name if patient.user else "Patient"
        p_email = patient.user.email if patient.user else "N/A"
        date_str = f"Coverage Period: {start_date.strftime('%b %d, %Y')} - {end_date.strftime('%b %d, %Y')} | Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}"
        story.append(Paragraph(date_str, subtitle_style))
        story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#0284c7"), spaceAfter=10))

        # 2. Patient Demographics Table
        dob_str = patient.date_of_birth.strftime('%Y-%m-%d') if patient.date_of_birth else 'N/A'
        demo_data = [
            [Paragraph("<b>Patient Name:</b>", body_style), Paragraph(p_name, body_style), Paragraph("<b>Gender:</b>", body_style), Paragraph(patient.gender or "N/A", body_style)],
            [Paragraph("<b>Email:</b>", body_style), Paragraph(p_email, body_style), Paragraph("<b>Blood Group:</b>", body_style), Paragraph(patient.blood_type or "N/A", body_style)],
            [Paragraph("<b>Date of Birth:</b>", body_style), Paragraph(dob_str, body_style), Paragraph("<b>Height:</b>", body_style), Paragraph(f"{patient.height_cm} cm" if patient.height_cm else "N/A", body_style)]
        ]
        t_demo = Table(demo_data, colWidths=[110, 160, 100, 170])
        t_demo.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor("#f8fafc")),
            ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
            ('INNERGRID', (0, 0), (-1, -1), 0.25, colors.HexColor("#e2e8f0")),
            ('TOPPADDING', (0, 0), (-1, -1), 3),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ]))
        story.append(t_demo)

        # 3. Clinical Alerts Section
        story.append(Paragraph("Clinical Threshold Alerts Summary", section_heading))
        if alerts:
            alert_rows = [["Severity", "Metric", "Recorded Value", "Trigger Threshold", "Timestamp"]]
            for a in alerts[:10]:
                alert_rows.append([
                    a.severity.value,
                    a.metric_type,
                    a.recorded_value,
                    a.threshold_breached,
                    a.created_at.strftime('%Y-%m-%d %H:%M')
                ])
            t_alerts = Table(alert_rows, colWidths=[70, 100, 110, 130, 130])
            t_alerts.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#ef4444")),
                ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#fca5a5")),
            ]))
            story.append(t_alerts)
        else:
            story.append(Paragraph("<i>No critical or warning thresholds were breached in this period.</i>", body_style))

        # 4. Recent Health Telemetry Log
        story.append(Paragraph("Biometric Measurements Recorded", section_heading))
        if metrics:
            metric_rows = [["Date & Time", "Metric Type", "Reading", "Context", "Notes"]]
            for m in metrics[:25]:
                if m.metric_type == MetricType.BLOOD_PRESSURE:
                    val_str = f"{m.systolic:.0f}/{m.diastolic:.0f} {m.unit}"
                else:
                    val_str = f"{m.value:.1f} {m.unit}" if m.value is not None else "N/A"
                
                ctx = m.meal_context or m.activity_context or "General"
                metric_rows.append([
                    m.measured_at.strftime('%Y-%m-%d %H:%M'),
                    m.metric_type.value.replace("_", " "),
                    val_str,
                    ctx,
                    (m.notes[:20] + "...") if m.notes and len(m.notes) > 20 else (m.notes or "-")
                ])
            t_metrics = Table(metric_rows, colWidths=[110, 120, 110, 80, 120])
            t_metrics.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#0284c7")),
                ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
                ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor("#f0f9ff")]),
                ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#bae6fd")),
            ]))
            story.append(t_metrics)
        else:
            story.append(Paragraph("<i>No telemetry records found for this period.</i>", body_style))

        doc.build(story)
        return file_path
