import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { PatientProfile, HealthAlert } from '../../types';
import { StatCard } from '../../components/common/StatCard';
import { AlertItem } from '../../components/alerts/AlertItem';
import { Users, AlertTriangle, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DoctorDashboard: React.FC = () => {
  const [patients, setPatients] = useState<PatientProfile[]>([]);
  const [alerts, setAlerts] = useState<HealthAlert[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pRes, aRes] = await Promise.all([
          api.get('/doctors/patients'),
          api.get('/alerts/?limit=10')
        ]);
        setPatients(pRes.data);
        setAlerts(aRes.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const criticalAlerts = alerts.filter(a => a.severity === 'CRITICAL' && !a.is_acknowledged);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Clinical Monitoring Center</h1>
        <p className="text-sm text-slate-500">Overview of assigned patients and active threshold alerts</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Assigned Patients" value={patients.length} subtitle="Active monitored cohorts" icon={Users} colorClass="bg-sky-50 text-sky-600" />
        <StatCard title="Active Critical Alerts" value={criticalAlerts.length} subtitle="Immediate clinical attention" icon={AlertTriangle} colorClass="bg-rose-50 text-rose-600" />
        <StatCard title="Total Alerts Logged" value={alerts.length} subtitle="All time telemetry flags" icon={Activity} colorClass="bg-amber-50 text-amber-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-800 text-base">Assigned Patient Roster</h3>
            <Link to="/doctor/patients" className="text-xs font-semibold text-sky-600 hover:text-sky-700">View All</Link>
          </div>
          <div className="divide-y divide-slate-100">
            {patients.length === 0 ? (
              <p className="text-sm text-slate-400 italic">No assigned patients found.</p>
            ) : (
              patients.slice(0, 5).map(p => (
                <div key={p.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{p.user?.first_name} {p.user?.last_name}</p>
                    <p className="text-xs text-slate-500">DOB: {p.date_of_birth || 'N/A'} • Blood: {p.blood_type || 'N/A'}</p>
                  </div>
                  <span className="text-xs bg-sky-50 text-sky-700 font-semibold px-2.5 py-1 rounded-full border border-sky-200">Active</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 text-base mb-4">Recent Priority Alerts</h3>
          <div className="space-y-3">
            {alerts.length === 0 ? (
              <p className="text-sm text-slate-400 italic">No active priority alerts.</p>
            ) : (
              alerts.slice(0, 4).map(a => <AlertItem key={a.id} alert={a} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
