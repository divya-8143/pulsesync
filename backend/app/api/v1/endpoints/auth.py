from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.core.security import verify_password, get_password_hash, create_access_token
from app.models.user import User, UserRole
from app.models.patient import PatientProfile, ThresholdSetting
from app.models.doctor import DoctorProfile
from app.models.metric import MetricType
from app.schemas.auth import Token, LoginRequest, RegisterRequest
from app.schemas.user import UserResponse
from app.api.deps import get_current_user
from app.services.audit_service import AuditService

router = APIRouter()

@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register(
    req: RegisterRequest,
    request: Request,
    db: AsyncSession = Depends(get_db)
):
    stmt = select(User).where(User.email == req.email.lower().strip())
    existing = (await db.execute(stmt)).scalars().first()
    if existing:
        raise HTTPException(status_code=400, detail="An account with this email already exists.")

    hashed_pw = get_password_hash(req.password)
    user = User(
        email=req.email.lower().strip(),
        hashed_password=hashed_pw,
        first_name=req.first_name,
        last_name=req.last_name,
        phone_number=req.phone_number,
        role=req.role
    )
    db.add(user)
    await db.flush()

    # Automatically create profile based on role
    if req.role == UserRole.PATIENT:
        patient_profile = PatientProfile(user_id=user.id)
        db.add(patient_profile)
        await db.flush()
        # Seed default clinical thresholds
        for m_type in MetricType:
            thresh = ThresholdSetting(patient_id=patient_profile.id, metric_type=m_type, is_custom=False)
            db.add(thresh)
    elif req.role == UserRole.DOCTOR:
        doctor_profile = DoctorProfile(
            user_id=user.id,
            specialization=req.specialization or "General Medicine",
            license_number=req.license_number or f"MED-{user.id.hex[:6].upper()}"
        )
        db.add(doctor_profile)

    await AuditService.log_action(
        db, action="USER_REGISTER", entity_type="User", entity_id=str(user.id),
        user_id=user.id, ip_address=request.client.host if request.client else None,
        details={"role": user.role.value, "email": user.email}
    )
    await db.commit()
    return user

@router.post("/login", response_model=Token)
async def login(
    req: LoginRequest,
    request: Request,
    db: AsyncSession = Depends(get_db)
):
    stmt = select(User).where(User.email == req.email.lower().strip())
    user = (await db.execute(stmt)).scalars().first()
    
    if not user or not verify_password(req.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password.")
    
    if not user.is_active:
        raise HTTPException(status_code=400, detail="Account has been suspended. Please contact administrator.")

    access_token = create_access_token(subject=str(user.id), role=user.role.value)
    
    await AuditService.log_action(
        db, action="USER_LOGIN", entity_type="User", entity_id=str(user.id),
        user_id=user.id, ip_address=request.client.host if request.client else None
    )
    await db.commit()

    return Token(
        access_token=access_token,
        token_type="bearer",
        role=user.role.value,
        user_id=str(user.id),
        email=user.email,
        full_name=user.full_name
    )

@router.get("/me", response_model=UserResponse)
async def get_me(current_user: User = Depends(get_current_user)):
    return current_user
