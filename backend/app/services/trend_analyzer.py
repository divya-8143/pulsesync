from typing import List
from uuid import UUID
from datetime import datetime, timedelta, timezone
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, cast, Date
from app.models.metric import HealthMetric, MetricType
from app.schemas.metric import MetricTrendPoint

class TrendAnalyzer:
    @staticmethod
    async def get_trend_series(
        db: AsyncSession,
        patient_id: UUID,
        metric_type: MetricType,
        timeframe: str = "monthly" # weekly, monthly, yearly
    ) -> List[MetricTrendPoint]:
        now = datetime.now(timezone.utc)
        if timeframe == "weekly":
            start_date = now - timedelta(days=7)
        elif timeframe == "yearly":
            start_date = now - timedelta(days=365)
        else: # monthly
            start_date = now - timedelta(days=30)

        date_col = cast(HealthMetric.measured_at, Date).label("metric_date")
        stmt = select(
            date_col,
            func.avg(HealthMetric.value).label("avg_val"),
            func.min(HealthMetric.value).label("min_val"),
            func.max(HealthMetric.value).label("max_val"),
            func.avg(HealthMetric.systolic).label("avg_sys"),
            func.avg(HealthMetric.diastolic).label("avg_dia"),
            func.count(HealthMetric.id).label("count")
        ).where(
            HealthMetric.patient_id == patient_id,
            HealthMetric.metric_type == metric_type,
            HealthMetric.measured_at >= start_date
        ).group_by(date_col).order_by(date_col.asc())

        results = (await db.execute(stmt)).all()
        
        points = []
        for r in results:
            points.append(MetricTrendPoint(
                date=r.metric_date.strftime("%Y-%m-%d"),
                avg_value=round(r.avg_val, 1) if r.avg_val is not None else None,
                min_value=round(r.min_val, 1) if r.min_val is not None else None,
                max_value=round(r.max_val, 1) if r.max_val is not None else None,
                avg_systolic=round(r.avg_sys, 1) if r.avg_sys is not None else None,
                avg_diastolic=round(r.avg_dia, 1) if r.avg_dia is not None else None,
                count=r.count or 0
            ))
        return points
