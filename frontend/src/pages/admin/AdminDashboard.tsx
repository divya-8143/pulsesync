import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { StatCard } from '../../components/common/StatCard';
import { Users, UserCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminDashboard: React.FC = () => {
  const [userCount, setUserCount] = useState(0);
  const [assignmentCount, setAssignmentCount] = useState(0);
  const [auditLogs, setAuditLogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [uRes, aRes, audRes] = await Promise.all([
          api.get('/users/'),
          api.get('/assignments/'),
          api.get('/audit/?limit=5')
        ]);
        setUserCount(uRes.data.length);
        setAssignmentCount(aRes.data.length);
        setAuditLogs(audRes.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">System Administration</h1>
        <p className="text-sm text-slate-500">Platform telemetry infrastructure, user governance, and audit trails</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Registered Accounts" value={userCount} subtitle="All clinical and patient roles" icon={Users} colorClass="bg-sky-50 text-sky-600" />
        <StatCard title="Active Clinical Mappings" value={assignmentCount} subtitle="Doctor-to-Patient links" icon={UserCheck} colorClass="bg-emerald-50 text-emerald-600" />
        <StatCard title="HIPAA Audit Events" value={auditLogs.length} subtitle="Immutable security records" icon={ShieldCheck} colorClass="bg-purple-50 text-purple-600" />
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800 text-base">Recent System Audit Trails</h3>
          <Link to="/admin/audit" className="text-xs font-semibold text-sky-600 hover:text-sky-700">View Full Log</Link>
        </div>
        <div className="divide-y divide-slate-100 text-xs">
          {auditLogs.length === 0 ? (
            <p className="text-slate-400 py-4 text-center">No recent audit logs.</p>
          ) : (
            auditLogs.map(l => (
              <div key={l.id} className="py-2.5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-800">{l.action}</span>
                  <span className="text-slate-400 ml-2">({l.entity_type} {l.entity_id})</span>
                </div>
                <span className="text-slate-500">{new Date(l.created_at).toLocaleString()}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
