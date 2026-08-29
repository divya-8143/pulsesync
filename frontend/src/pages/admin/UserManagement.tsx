import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { User } from '../../types';
import { CheckCircle } from 'lucide-react';

export const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [roleFilter, setRoleFilter] = useState<string>('ALL');

  useEffect(() => {
    const fetchUsers = async () => {
      const params = roleFilter === 'ALL' ? {} : { role: roleFilter };
      const res = await api.get('/users/', { params });
      setUsers(res.data);
    };
    fetchUsers();
  }, [roleFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">User Account Governance</h1>
          <p className="text-sm text-slate-500">Manage Patient, Doctor, and Administrator identities</p>
        </div>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white"
        >
          <option value="ALL">All Roles</option>
          <option value="PATIENT">Patients Only</option>
          <option value="DOCTOR">Doctors Only</option>
          <option value="ADMIN">Admins Only</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Email Address</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Registered At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map(u => (
              <tr key={u.id} className="hover:bg-slate-50">
                <td className="px-6 py-3.5 font-semibold text-slate-900">{u.first_name} {u.last_name}</td>
                <td className="px-6 py-3.5 text-slate-600">{u.email}</td>
                <td className="px-6 py-3.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded border ${
                    u.role === 'ADMIN' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                    u.role === 'DOCTOR' ? 'bg-sky-50 text-sky-700 border-sky-200' :
                    'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-6 py-3.5">
                  <span className="flex items-center space-x-1 text-xs text-emerald-700 font-medium">
                    <CheckCircle className="h-4 w-4" /><span>Active</span>
                  </span>
                </td>
                <td className="px-6 py-3.5 text-slate-500 text-xs">{new Date(u.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
