import api from './api';
import { HealthAlert } from '../types';

export const alertService = {
  getAlerts: async (params?: { patient_id?: string; is_acknowledged?: boolean; limit?: number }) => {
    const res = await api.get<HealthAlert[]>('/alerts/', { params });
    return res.data;
  },
  acknowledgeAlert: async (alertId: string, action_taken?: string) => {
    const res = await api.put<HealthAlert>(`/alerts/${alertId}/acknowledge`, { action_taken });
    return res.data;
  }
};
