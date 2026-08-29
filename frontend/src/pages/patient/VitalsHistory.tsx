import React, { useState, useEffect } from 'react';
import { metricService } from '../../services/metricService';
import { HealthMetric, MetricType } from '../../types';
import { format, parseISO } from 'date-fns';

export const VitalsHistory: React.FC = () => {
  const [metrics, setMetrics] = useState<HealthMetric[]>([]);
  const [filterType, setFilterType] = useState<string>('ALL');

  useEffect(() => {
    const fetchMetrics = async () => {
      const typeParam = filterType === 'ALL' ? undefined : (filterType as MetricType);
      const data = await metricService.getMetrics({ metric_type: typeParam, limit: 100 });
      setMetrics(data);
    };
    fetchMetrics();
  }, [filterType]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Biometric Measurement History</h1>
          <p className="text-sm text-slate-500">Comprehensive timeline of all recorded vital readings</p>
        </div>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white">
          <option value="ALL">All Vitals</option>
          <option value="BLOOD_PRESSURE">Blood Pressure</option>
          <option value="HEART_RATE">Heart Rate</option>
          <option value="BLOOD_GLUCOSE">Blood Glucose</option>
          <option value="TEMPERATURE">Temperature</option>
          <option value="WEIGHT">Weight</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-3">Timestamp</th>
              <th className="px-6 py-3">Metric</th>
              <th className="px-6 py-3">Reading</th>
              <th className="px-6 py-3">Context</th>
              <th className="px-6 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {metrics.length === 0 ? (
              <tr><td colSpan={5} className="px-6 py-8 text-center text-slate-400">No records found.</td></tr>
            ) : (
              metrics.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50">
                  <td className="px-6 py-3.5 text-slate-600">{format(parseISO(m.measured_at), 'yyyy-MM-dd HH:mm')}</td>
                  <td className="px-6 py-3.5 font-medium text-slate-800">{m.metric_type.replace('_', ' ')}</td>
                  <td className="px-6 py-3.5 font-bold text-sky-700">
                    {m.metric_type === 'BLOOD_PRESSURE' ? `${m.systolic}/${m.diastolic} ${m.unit}` : `${m.value} ${m.unit}`}
                  </td>
                  <td className="px-6 py-3.5 text-slate-500">{m.meal_context || m.activity_context || '-'}</td>
                  <td className="px-6 py-3.5 text-slate-500">{m.notes || '-'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
