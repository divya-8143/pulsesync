from typing import List, Optional
from uuid import UUID
from datetime import datetime, timezone
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, desc
from app.models.metric import HealthMetric, MetricType
from app.schemas.metric import MetricCreate, MetricStatsResponse
from app.services.alert_evaluator import AlertEvaluator

class MetricService:
    @staticmethod
    async def log_metric(db: AsyncSession, patient_id: UUID, data: MetricCreate) -> HealthMetric:
        measured = data.measured_at or datetime.now(timezone.utc)
        metric = HealthMetric(
            patient_id=patient_id,
            metric_type=data.metric_type,
            value=data.value,
            systolic=data.systolic,
            diastolic=data.diastolic,
            unit=data.unit,
            meal_context=data.meal_context,
            activity_context=data.activity_context,
            notes=data.notes,
            measured_at=measured
        )
        db.add(metric)
        await db.flush()
        
        # Evaluate for clinical threshold breaches
        await AlertEvaluator.evaluate_metric(db, metric)
        return metric

    @staticmethod
    async def get_patient_metrics(
        db: AsyncSession,
        patient_id: UUID,
        metric_type: Optional[MetricType] = None,
        start_date: Optional[datetime] = None,
        end_date: Optional[datetime] = None,
        limit: int = 100,
        offset: int = 0
    ) -> List[HealthMetric]:
        query = select(HealthMetric).where(HealthMetric.patient_id == patient_id)
        if metric_type:
            query = query.where(HealthMetric.metric_type == metric_type)
        if start_date:
            query = query.where(HealthMetric.measured_at >= start_date)
        if end_date:
            query = query.where(HealthMetric.measured_at <= end_date)
        
        query = query.order_by(desc(HealthMetric.measured_at)).limit(limit).offset(offset)
        result = await db.execute(query)
        return list(result.scalars().all())

    @staticmethod
    async def get_summary_stats(db: AsyncSession, patient_id: UUID) -> List[MetricStatsResponse]:
        stats_list = []
        for m_type in MetricType:
            stmt = select(
                func.count(HealthMetric.id).label("count"),
                func.avg(HealthMetric.value).label("avg_val"),
                func.min(HealthMetric.value).label("min_val"),
                func.max(HealthMetric.value).label("max_val"),
                func.avg(HealthMetric.systolic).label("avg_sys"),
                func.avg(HealthMetric.diastolic).label("avg_dia")
            ).where(
                HealthMetric.patient_id == patient_id,
                HealthMetric.metric_type == m_type
            )
            res = (await db.execute(stmt)).first()
            
            latest_stmt = select(HealthMetric).where(
                HealthMetric.patient_id == patient_id,
                HealthMetric.metric_type == m_type
            ).order_by(desc(HealthMetric.measured_at)).limit(1)
            latest = (await db.execute(latest_stmt)).scalars().first()

            if latest:
                unit = latest.unit
                stats_list.append(MetricStatsResponse(
                    metric_type=m_type,
                    count=res.count or 0,
                    latest_value=latest.value,
                    latest_systolic=latest.systolic,
                    latest_diastolic=latest.diastolic,
                    avg_value=round(res.avg_val, 1) if res.avg_val is not None else None,
                    min_value=round(res.min_val, 1) if res.min_val is not None else None,
                    max_value=round(res.max_val, 1) if res.max_val is not None else None,
                    avg_systolic=round(res.avg_sys, 1) if res.avg_sys is not None else None,
                    avg_diastolic=round(res.avg_dia, 1) if res.avg_dia is not None else None,
                    unit=unit,
                    last_measured_at=latest.measured_at
                ))
        return stats_list
