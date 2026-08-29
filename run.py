#!/usr/bin/env python3
"""
PulseSync Platform Launcher
Orchestrates FastAPI backend and Vite frontend services.
"""
import os
import sys
import subprocess
import signal
import time

def main():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    backend_dir = os.path.join(root_dir, "backend")
    frontend_dir = os.path.join(root_dir, "frontend")

    print("=" * 60)
    print("  PulseSync Patient Health Monitoring Platform")
    print("=" * 60)

    # 1. Start Backend
    print("[1/2] Starting FastAPI backend service on http://127.0.0.1:8000 ...")
    backend_cmd = [sys.executable, "-m", "uvicorn", "app.main:app", "--host", "127.0.0.1", "--port", "8000", "--reload"]
    backend_proc = subprocess.Popen(backend_cmd, cwd=backend_dir)

    # 2. Start Frontend
    print("[2/2] Starting React Vite frontend on http://localhost:3000 ...")
    npm_cmd = "npm.cmd" if os.name == "nt" else "npm"
    frontend_proc = subprocess.Popen([npm_cmd, "run", "dev"], cwd=frontend_dir)

    print("\nServices active:")
    print("  - Frontend UI:     http://localhost:3000")
    print("  - Backend API:     http://127.0.0.1:8000")
    print("  - Swagger Docs:    http://127.0.0.1:8000/docs")
    print("\nPress Ctrl+C to gracefully stop all services.")

    def signal_handler(sig, frame):
        print("\nStopping services...")
        backend_proc.terminate()
        frontend_proc.terminate()
        sys.exit(0)

    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        signal_handler(None, None)

if __name__ == "__main__":
    main()
