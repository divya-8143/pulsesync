from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, users, patients, doctors,
    metrics, alerts, reports, assignments, audit
)

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(users.router, prefix="/users", tags=["Users"])
api_router.include_router(patients.router, prefix="/patients", tags=["Patients"])
api_router.include_router(doctors.router, prefix="/doctors", tags=["Doctors"])
api_router.include_router(metrics.router, prefix="/metrics", tags=["Health Metrics"])
api_router.include_router(alerts.router, prefix="/alerts", tags=["Health Alerts"])
api_router.include_router(reports.router, prefix="/reports", tags=["Health Reports"])
api_router.include_router(assignments.router, prefix="/assignments", tags=["Assignments"])
api_router.include_router(audit.router, prefix="/audit", tags=["Audit Trail"])
