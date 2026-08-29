import api from './api';
import { HealthMetric, MetricStats, MetricTrendPoint, MetricType } from '../types';

export const metricService = {
  logMetric: async (data: Partial<HealthMetric>) => {
    const res = await api.post<HealthMetric>('/metrics/', data);
    return res.data;
  },
  getMetrics: async (params?: { patient_id?: string; metric_type?: MetricType; limit?: number }) => {
    const res = await api.get<HealthMetric[]>('/metrics/', { params });
    return res.data;
  },
  getSummary: async (patient_id?: string) => {
    const res = await api.get<MetricStats[]>('/metrics/summary', { params: { patient_id } });
    return res.data;
  },
  getTrends: async (metric_type: MetricType, timeframe: string = 'monthly', patient_id?: string) => {
    const res = await api.get<MetricTrendPoint[]>('/metrics/trends', {
      params: { metric_type, timeframe, patient_id }
    });
    return res.data;
  }
};
