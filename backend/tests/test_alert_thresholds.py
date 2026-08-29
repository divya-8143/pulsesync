from unittest.mock import MagicMock
from app.models.metric import HealthMetric, MetricType
from app.models.alert import AlertSeverity
from app.services.alert_evaluator import AlertEvaluator

def test_blood_pressure_normal_evaluation():
    metric = MagicMock(spec=HealthMetric)
    metric.metric_type = MetricType.BLOOD_PRESSURE
    metric.systolic = 118.0
    metric.diastolic = 76.0
    res = AlertEvaluator._eval_blood_pressure(metric, None)
    assert res is None, "Normal BP should not trigger an alert"

def test_blood_pressure_hypertensive_crisis():
    metric = MagicMock(spec=HealthMetric)
    metric.metric_type = MetricType.BLOOD_PRESSURE
    metric.systolic = 185.0
    metric.diastolic = 115.0
    res = AlertEvaluator._eval_blood_pressure(metric, None)
    assert res is not None
    severity, title, msg, rec, thresh = res
    assert severity == AlertSeverity.CRITICAL
    assert "Crisis" in title

def test_heart_rate_tachycardia_critical():
    metric = MagicMock(spec=HealthMetric)
    metric.metric_type = MetricType.HEART_RATE
    metric.value = 145.0
    res = AlertEvaluator._eval_heart_rate(metric, None)
    assert res is not None
    severity, title, msg, rec, thresh = res
    assert severity == AlertSeverity.CRITICAL
    assert "Tachycardia" in title

def test_heart_rate_bradycardia_critical():
    metric = MagicMock(spec=HealthMetric)
    metric.metric_type = MetricType.HEART_RATE
    metric.value = 38.0
    res = AlertEvaluator._eval_heart_rate(metric, None)
    assert res is not None
    severity, title, msg, rec, thresh = res
    assert severity == AlertSeverity.CRITICAL
    assert "Bradycardia" in title

def test_glucose_hyperglycemia_critical():
    metric = MagicMock(spec=HealthMetric)
    metric.metric_type = MetricType.BLOOD_GLUCOSE
    metric.value = 260.0
    metric.meal_context = "POST_MEAL"
    res = AlertEvaluator._eval_glucose(metric, None)
    assert res is not None
    severity, title, msg, rec, thresh = res
    assert severity == AlertSeverity.CRITICAL
