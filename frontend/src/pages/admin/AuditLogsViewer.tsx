import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { AuditLog } from '../../types';

export const AuditLogsViewer: React.FC = () => {
  const [logs, setLogs] = useState<AuditLog[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await api.get('/audit/?limit=100');
      setLogs(res.data);
    };
    fetchLogs();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Security & HIPAA Audit Trail</h1>
        <p className="text-sm text-slate-500">Immutable chronological audit log of all system access and telemetry events</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-3">Timestamp (UTC)</th>
              <th className="px-6 py-3">Action</th>
              <th className="px-6 py-3">Entity Type</th>
              <th className="px-6 py-3">User IP / Agent</th>
              <th className="px-6 py-3">Audit Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-mono text-xs">
            {logs.map(l => (
              <tr key={l.id} className="hover:bg-slate-50">
                <td className="px-6 py-3 text-slate-500">{new Date(l.created_at).toISOString()}</td>
                <td className="px-6 py-3 font-semibold text-slate-800">{l.action}</td>
                <td className="px-6 py-3 text-sky-700">{l.entity_type} {l.entity_id ? `(#${l.entity_id.slice(0, 8)})` : ''}</td>
                <td className="px-6 py-3 text-slate-500">{l.ip_address || 'Local / Service'}</td>
                <td className="px-6 py-3 text-slate-600 truncate max-w-xs">{JSON.stringify(l.details || {})}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
