import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { DoctorPatientAssignment } from '../../types';

export const DoctorPatientMapping: React.FC = () => {
  const [assignments, setAssignments] = useState<DoctorPatientAssignment[]>([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const res = await api.get('/assignments/');
      setAssignments(res.data);
    };
    fetchAssignments();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Doctor - Patient Assignment Matrix</h1>
        <p className="text-sm text-slate-500">Active clinical supervisory relationships across the platform</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-3">Assigned Doctor</th>
              <th className="px-6 py-3">Patient Name</th>
              <th className="px-6 py-3">Assignment Status</th>
              <th className="px-6 py-3">Assigned Date</th>
              <th className="px-6 py-3">Clinical Context</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {assignments.map(a => (
              <tr key={a.id} className="hover:bg-slate-50">
                <td className="px-6 py-3.5 font-semibold text-sky-700">{a.doctor_name}</td>
                <td className="px-6 py-3.5 font-medium text-slate-900">{a.patient_name}</td>
                <td className="px-6 py-3.5">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {a.status}
                  </span>
                </td>
                <td className="px-6 py-3.5 text-slate-500 text-xs">{new Date(a.assigned_at).toLocaleDateString()}</td>
                <td className="px-6 py-3.5 text-slate-600 text-xs">{a.notes || 'Routine supervisory monitoring'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
