import React, { useState, useEffect } from 'react';
import { alertService } from '../../services/alertService';
import { HealthAlert } from '../../types';
import { AlertItem } from '../../components/alerts/AlertItem';

export const AlertsCenter: React.FC = () => {
  const [alerts, setAlerts] = useState<HealthAlert[]>([]);

  const fetchAlerts = async () => {
    const data = await alertService.getAlerts({ limit: 100 });
    setAlerts(data);
  };

  useEffect(() => { fetchAlerts(); }, []);

  const handleAcknowledge = async (id: string) => {
    await alertService.acknowledgeAlert(id, "Acknowledged by user via portal.");
    fetchAlerts();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Clinical Alerts & Warnings</h1>
        <p className="text-sm text-slate-500">Threshold violations triggered across all biometric parameters</p>
      </div>

      <div className="space-y-3">
        {alerts.length === 0 ? (
          <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-400">
            No threshold breach alerts. All telemetry within safe clinical ranges.
          </div>
        ) : (
          alerts.map(a => <AlertItem key={a.id} alert={a} onAcknowledge={handleAcknowledge} />)
        )}
      </div>
    </div>
  );
};
