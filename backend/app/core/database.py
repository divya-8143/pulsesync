import os
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base
from app.core.config import settings

# Graceful async engine fallback for local testing & postgres
db_uri = settings.SQLALCHEMY_DATABASE_URI
if "sqlite" in db_uri:
    engine = create_async_engine(db_uri, echo=False, future=True)
else:
    try:
        engine = create_async_engine(
            db_uri,
            echo=settings.DEBUG,
            future=True,
            pool_pre_ping=True,
            pool_size=10,
            max_overflow=20
        )
    except Exception:
        # Fallback to local in-memory async SQLite if Postgres driver not installed in local environment
        engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False, future=True)

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False
)

Base = declarative_base()

async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
