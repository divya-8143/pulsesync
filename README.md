# PulseSync - Patient Health Monitoring & Telemetry Platform

PulseSync is an enterprise-grade, full-stack biometric telemetry and clinical patient monitoring platform. It enables patients to track essential vital signs, provides doctors with real-time clinical dashboards and automated threshold alerting, and equips administrators with comprehensive audit logs and doctor-patient assignment controls.

---

## 🌟 Key Features

- **Multi-Role Portals (RBAC)**:
  - **Patient Portal**: Daily vital signs logging (Blood Pressure, Heart Rate, Blood Glucose, Temperature, Weight), interactive historical trend charts (Weekly, Monthly, Yearly), customizable threshold alerts, and PDF health dossier generation.
  - **Doctor Portal**: Real-time roster of assigned patients, clinical summary cards, priority threshold alerts feed, and clinical notes authoring.
  - **Admin Portal**: User account governance, Doctor-Patient supervisory mapping matrix, and immutable HIPAA-compliant audit trails.
- **Biometric Health Tracking & Trends**:
  - Full CRUD operations with rich metadata (meal context, activity context, timestamps, clinical notes).
  - Multi-series time-series charts powered by Recharts with moving averages and baseline comparison.
- **Automated Clinical Threshold Alert Engine**:
  - Instant evaluation against AHA / WHO clinical reference standards (Hypertensive Crisis, Tachycardia, Bradycardia, Hyperglycemia, Fever).
  - Warning vs. Critical classification with real-time status banners and acknowledgment tracking.
- **Server-Side PDF Health Reports**:
  - Export formatted PDF clinical summaries with demographic tables, threshold breach histories, and telemetry logs.
- **Security & Compliance**:
  - JWT Authentication, Argon2/Bcrypt password hashing, granular role guards, and structured JSON audit logging.

---

## 🏗️ Architecture Overview

```
+-----------------------------------------------------------------------+
|                             PulseSync                                 |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   |         Frontend: React 18 + TypeScript + Tailwind CSS         |   |
|   |        (Patient Portal | Doctor Portal | Admin Portal)        |   |
|   +-------------------------------+-------------------------------+   |
|                                   |  HTTPS / REST APIs                |
|   +-------------------------------v-------------------------------+   |
|   |          API Gateway & Reverse Proxy (Nginx Container)        |   |
|   +-------------------------------+-------------------------------+   |
|                                   |                                   |
|   +-------------------------------v-------------------------------+   |
|   |             Backend: FastAPI (Python 3.11 + Async)            |   |
|   |     (Auth / RBAC | Metrics Engine | Alerts | PDF Generator)   |   |
|   +---------------+-------------------------------+---------------+   |
|                   |                               |                   |
|   +---------------v---------------+   +-----------v---------------+   |
|   |   PostgreSQL 16 (Relational)  |   | Redis 7 & Celery Workers  |   |
|   |     (Indexed Telemetry DB)    |   |  (Async Tasks & Alerts)   |   |
|   +-------------------------------+   +---------------------------+   |
+-----------------------------------------------------------------------+
```

---

## 🚀 Quick Start with Docker

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) & [Docker Compose](https://docs.docker.com/compose/)

### 1. Clone & Navigate
```bash
git clone https://github.com/divya-8143/pulsesync.git
cd pulsesync
```

### 2. Launch All Services
```bash
docker-compose up --build -d
```

### 3. Access Services
- **Frontend Web Portal**: [http://localhost:3000](http://localhost:3000)
- **Backend API & Swagger Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🔐 Default Demo Accounts

| Role | Email | Password | Access / Capabilities |
| :--- | :--- | :--- | :--- |
| **Patient** | `john.doe@example.com` | `password123` | Log vitals, view trend charts, download PDF health reports |
| **Doctor** | `dr.sarah@pulsesync.health` | `password123` | View assigned patients, priority alerts, add clinical notes |
| **Admin** | `admin@pulsesync.health` | `password123` | User directory, doctor-patient assignment matrix, audit trails |

---

## 💻 Local Development Setup (Manual)

### Backend Setup
```bash
cd backend
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
python scripts/seed_data.py
uvicorn app.main:app --reload --port 8000
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Automated Testing

Run the automated test suite with pytest:
```bash
cd backend
pytest tests/ -v
```

---

## 📄 License
PulseSync is released under the MIT License.
