import api from './api';
import { HealthReport, ReportType } from '../types';

export const reportService = {
  generateReport: async (data: { report_type: ReportType; start_date: string; end_date: string; patient_id?: string; title?: string }) => {
    const res = await api.post<HealthReport>('/reports/generate', data);
    return res.data;
  },
  getReports: async (patient_id?: string) => {
    const res = await api.get<HealthReport[]>('/reports/', { params: { patient_id } });
    return res.data;
  },
  getDownloadUrl: (reportId: string) => `/api/v1/reports/${reportId}/download`
};
