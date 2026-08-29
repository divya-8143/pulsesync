.PHONY: help install seed run backend frontend test docker-up docker-down

help:
	@echo "PulseSync Telemetry Platform - Commands:"
	@echo "  make install     Install backend and frontend dependencies"
	@echo "  make seed        Seed the database with 60 days of clinical telemetry"
	@echo "  make run         Run full platform locally (backend & frontend)"
	@echo "  make backend     Run FastAPI backend service on port 8000"
	@echo "  make frontend    Run React frontend service on port 3000"
	@echo "  make test        Run all automated backend unit & integration tests"
	@echo "  make docker-up   Build and start all Docker containers"
	@echo "  make docker-down Stop all Docker containers"

install:
	cd backend && pip install -r requirements.txt
	cd frontend && npm install

seed:
	cd backend && python scripts/seed_data.py

run:
	python run.py

backend:
	cd backend && uvicorn app.main:app --reload --port 8000

frontend:
	cd frontend && npm run dev

test:
	cd backend && pytest tests/ -v

docker-up:
	docker-compose up --build -d

docker-down:
	docker-compose down
