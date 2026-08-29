import uuid
from app.models.user import UserRole
from app.api.deps import require_roles
from fastapi import HTTPException

def test_require_roles_allows_matching_role():
    class DummyUser:
        role = UserRole.DOCTOR
    
    checker = require_roles(UserRole.DOCTOR, UserRole.ADMIN)
    user = checker(DummyUser())
    assert user.role == UserRole.DOCTOR

def test_require_roles_blocks_unauthorized_role():
    class DummyUser:
        role = UserRole.PATIENT
    
    checker = require_roles(UserRole.DOCTOR, UserRole.ADMIN)
    try:
        checker(DummyUser())
        assert False, "Should raise 403 Forbidden exception"
    except HTTPException as e:
        assert e.status_code == 403
