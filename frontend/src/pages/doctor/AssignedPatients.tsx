import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { PatientProfile } from '../../types';
import { Search } from 'lucide-react';

export const AssignedPatients: React.FC = () => {
  const [patients, setPatients] = useState<PatientProfile[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      const res = await api.get('/doctors/patients');
      setPatients(res.data);
    };
    fetchPatients();
  }, []);

  const filtered = patients.filter(p => {
    const name = `${p.user?.first_name} ${p.user?.last_name}`.toLowerCase();
    const email = (p.user?.email || '').toLowerCase();
    return name.includes(search.toLowerCase()) || email.includes(search.toLowerCase());
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Assigned Patients Roster</h1>
          <p className="text-sm text-slate-500">Monitor and review assigned patient cohorts</p>
        </div>
        <div className="relative">
          <Search className="h-4 w-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search patient by name/email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-3">Patient Name</th>
              <th className="px-6 py-3">Email & Contact</th>
              <th className="px-6 py-3">Blood Type</th>
              <th className="px-6 py-3">Conditions</th>
              <th className="px-6 py-3">Allergies</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.length === 0 ? (
              <tr><td colSpan={5} className="px-6 py-8 text-center text-slate-400">No matching patients found.</td></tr>
            ) : (
              filtered.map(p => (
                <tr key={p.id} className="hover:bg-slate-50">
                  <td className="px-6 py-3.5 font-semibold text-slate-900">{p.user?.first_name} {p.user?.last_name}</td>
                  <td className="px-6 py-3.5 text-slate-600">{p.user?.email}<br/><span className="text-xs text-slate-400">{p.user?.phone_number || '-'}</span></td>
                  <td className="px-6 py-3.5 font-medium text-slate-800">{p.blood_type || 'N/A'}</td>
                  <td className="px-6 py-3.5 text-slate-600">{p.chronic_conditions?.join(', ') || 'None'}</td>
                  <td className="px-6 py-3.5 text-slate-600">{p.allergies?.join(', ') || 'None'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
