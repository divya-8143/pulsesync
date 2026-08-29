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
  downloadReportBlob: async (reportId: string, filename: string = 'health_report.pdf') => {
    const response = await api.get(`/reports/${reportId}/download`, {
      responseType: 'blob',
    });
    const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url);
  },
  getDownloadUrl: (reportId: string) => {
    const token = localStorage.getItem('pulsesync_token');
    return `/api/v1/reports/${reportId}/download${token ? `?token=${encodeURIComponent(token)}` : ''}`;
  }
};
