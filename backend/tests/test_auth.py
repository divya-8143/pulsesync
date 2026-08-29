from app.core.security import verify_password, get_password_hash, create_access_token, decode_access_token

def test_password_hashing():
    pwd = "SecurePassword2026!"
    hashed = get_password_hash(pwd)
    assert hashed != pwd
    assert verify_password(pwd, hashed) is True
    assert verify_password("WrongPassword", hashed) is False

def test_jwt_token_generation_and_decoding():
    user_id = "11111111-2222-3333-4444-555555555555"
    token = create_access_token(subject=user_id, role="PATIENT")
    payload = decode_access_token(token)
    assert payload is not None
    assert payload.get("sub") == user_id
    assert payload.get("role") == "PATIENT"

def test_invalid_jwt_token():
    payload = decode_access_token("invalid.jwt.token.string")
    assert payload is None
