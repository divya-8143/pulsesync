from app.tasks.celery_app import celery_app

@celery_app.task(name="tasks.generate_pdf_report_async")
def generate_pdf_report_async(report_id_str: str):
    return {"status": "SUCCESS", "report_id": report_id_str}
