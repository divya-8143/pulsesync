from typing import Optional, Any, Dict
from uuid import UUID
from datetime import datetime
from pydantic import BaseModel, ConfigDict

class AuditLogResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: UUID
    user_id: Optional[UUID] = None
    action: str
    entity_type: str
    entity_id: Optional[str] = None
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None
    details: Optional[Dict[str, Any]] = None
    created_at: datetime
