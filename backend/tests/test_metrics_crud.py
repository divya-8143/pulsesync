from app.models.metric import MetricType
from app.schemas.metric import MetricCreate

def test_metric_create_schema_validation():
    data = {
        "metric_type": MetricType.BLOOD_PRESSURE,
        "systolic": 120.0,
        "diastolic": 80.0,
        "unit": "mmHg"
    }
    schema = MetricCreate(**data)
    assert schema.metric_type == MetricType.BLOOD_PRESSURE
    assert schema.systolic == 120.0
    assert schema.diastolic == 80.0
    assert schema.unit == "mmHg"

def test_heart_rate_metric_schema():
    data = {
        "metric_type": MetricType.HEART_RATE,
        "value": 75.0,
        "unit": "bpm",
        "activity_context": "RESTING"
    }
    schema = MetricCreate(**data)
    assert schema.value == 75.0
    assert schema.activity_context == "RESTING"
