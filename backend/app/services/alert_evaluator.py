from typing import Optional, Tuple
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models.metric import HealthMetric, MetricType
from app.models.alert import HealthAlert, AlertSeverity
from app.models.patient import ThresholdSetting

class AlertEvaluator:
    @staticmethod
    async def evaluate_metric(db: AsyncSession, metric: HealthMetric) -> Optional[HealthAlert]:
        stmt = select(ThresholdSetting).where(
            ThresholdSetting.patient_id == metric.patient_id,
            ThresholdSetting.metric_type == metric.metric_type
        )
        result = await db.execute(stmt)
        custom_thresh = result.scalars().first()

        alert_info: Optional[Tuple[AlertSeverity, str, str, str, str]] = None

        if metric.metric_type == MetricType.BLOOD_PRESSURE:
            alert_info = AlertEvaluator._eval_blood_pressure(metric, custom_thresh)
        elif metric.metric_type == MetricType.HEART_RATE:
            alert_info = AlertEvaluator._eval_heart_rate(metric, custom_thresh)
        elif metric.metric_type == MetricType.TEMPERATURE:
            alert_info = AlertEvaluator._eval_temperature(metric, custom_thresh)
        elif metric.metric_type == MetricType.BLOOD_GLUCOSE:
            alert_info = AlertEvaluator._eval_glucose(metric, custom_thresh)

        if alert_info:
            severity, title, msg, recorded_val, breached = alert_info
            alert = HealthAlert(
                patient_id=metric.patient_id,
                metric_id=metric.id,
                severity=severity,
                title=title,
                message=msg,
                metric_type=metric.metric_type.value,
                recorded_value=recorded_val,
                threshold_breached=breached,
                is_acknowledged=False
            )
            db.add(alert)
            await db.flush()
            return alert
        return None

    @staticmethod
    def _eval_blood_pressure(m: HealthMetric, c: Optional[ThresholdSetting]):
        sys = m.systolic or 0.0
        dia = m.diastolic or 0.0
        crit_sys = c.systolic_max_critical if c and c.systolic_max_critical else 180.0
        crit_dia = c.diastolic_max_critical if c and c.diastolic_max_critical else 120.0
        warn_sys = c.systolic_max_warning if c and c.systolic_max_warning else 140.0
        warn_dia = c.diastolic_max_warning if c and c.diastolic_max_warning else 90.0

        recorded_val = f"{sys:.0f}/{dia:.0f} mmHg"

        if sys >= crit_sys or dia >= crit_dia:
            return (
                AlertSeverity.CRITICAL,
                "Hypertensive Crisis Alert",
                f"Severe Blood Pressure spike: {recorded_val}. Exceeds critical limit (Sys: {crit_sys}, Dia: {crit_dia}). Immediate clinical attention required.",
                recorded_val,
                f"Critical Max: {crit_sys}/{crit_dia}"
            )
        elif sys >= warn_sys or dia >= warn_dia:
            return (
                AlertSeverity.WARNING,
                "Stage 2 Hypertension Alert",
                f"Elevated Blood Pressure: {recorded_val}. Above standard warning threshold (Sys: {warn_sys}, Dia: {warn_dia}).",
                recorded_val,
                f"Warning Max: {warn_sys}/{warn_dia}"
            )
        return None

    @staticmethod
    def _eval_heart_rate(m: HealthMetric, c: Optional[ThresholdSetting]):
        val = m.value or 0.0
        c_min = c.min_critical if c and c.min_critical else 40.0
        c_max = c.max_critical if c and c.max_critical else 140.0
        w_min = c.min_warning if c and c.min_warning else 50.0
        w_max = c.max_warning if c and c.max_warning else 120.0
        rec = f"{val:.0f} bpm"

        if val <= c_min:
            return (AlertSeverity.CRITICAL, "Critical Bradycardia Alert", f"Heart Rate critically low: {rec} (<= {c_min} bpm).", rec, f"Min Critical: {c_min}")
        elif val >= c_max:
            return (AlertSeverity.CRITICAL, "Critical Tachycardia Alert", f"Heart Rate critically high: {rec} (>= {c_max} bpm).", rec, f"Max Critical: {c_max}")
        elif val <= w_min:
            return (AlertSeverity.WARNING, "Low Heart Rate Warning", f"Heart Rate below target: {rec} (<= {w_min} bpm).", rec, f"Min Warning: {w_min}")
        elif val >= w_max:
            return (AlertSeverity.WARNING, "High Heart Rate Warning", f"Heart Rate above target: {rec} (>= {w_max} bpm).", rec, f"Max Warning: {w_max}")
        return None

    @staticmethod
    def _eval_temperature(m: HealthMetric, c: Optional[ThresholdSetting]):
        val = m.value or 0.0
        c_max = c.max_critical if c and c.max_critical else 39.5
        w_max = c.max_warning if c and c.max_warning else 38.3
        rec = f"{val:.1f} °C"

        if val >= c_max:
            return (AlertSeverity.CRITICAL, "Severe Hyperpyrexia Alert", f"Body temperature dangerously high: {rec} (>= {c_max} °C).", rec, f"Max Critical: {c_max}")
        elif val >= w_max:
            return (AlertSeverity.WARNING, "Elevated Fever Warning", f"Body temperature elevated: {rec} (>= {w_max} °C).", rec, f"Max Warning: {w_max}")
        return None

    @staticmethod
    def _eval_glucose(m: HealthMetric, c: Optional[ThresholdSetting]):
        val = m.value or 0.0
        is_fasting = (m.meal_context or "").upper() == "FASTING"
        rec = f"{val:.0f} mg/dL"
        crit_max = 180.0 if is_fasting else 250.0
        warn_max = 125.0 if is_fasting else 199.0

        if val >= crit_max:
            return (AlertSeverity.CRITICAL, "Critical Hyperglycemia Alert", f"Blood Glucose critically elevated: {rec} ({m.meal_context or 'Random'}).", rec, f"Max Critical: {crit_max}")
        elif val >= warn_max:
            return (AlertSeverity.WARNING, "Elevated Glucose Warning", f"Blood Glucose above optimal range: {rec}.", rec, f"Max Warning: {warn_max}")
        elif val <= 60.0:
            return (AlertSeverity.CRITICAL, "Hypoglycemia Alert", f"Blood Glucose critically low: {rec} (<= 60 mg/dL).", rec, "Min Critical: 60.0")
        return None
