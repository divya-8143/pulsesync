from typing import Optional, Dict, Any
from uuid import UUID
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.audit import AuditLog

class AuditService:
    @staticmethod
    async def log_action(
        db: AsyncSession,
        action: str,
        entity_type: str,
        entity_id: Optional[str] = None,
        user_id: Optional[UUID] = None,
        ip_address: Optional[str] = None,
        user_agent: Optional[str] = None,
        details: Optional[Dict[str, Any]] = None
    ) -> AuditLog:
        audit = AuditLog(
            user_id=user_id,
            action=action,
            entity_type=entity_type,
            entity_id=str(entity_id) if entity_id else None,
            ip_address=ip_address,
            user_agent=user_agent,
            details=details or {}
        )
        db.add(audit)
        await db.flush()
        return audit
