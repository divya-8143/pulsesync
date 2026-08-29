import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  History,
  AlertTriangle,
  FileText,
  Users,
  UserCheck,
  ShieldCheck
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const role = user?.role;

  const patientNav = [
    { to: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { to: '/history', label: 'Vitals History', icon: History },
    { to: '/alerts', label: 'Health Alerts', icon: AlertTriangle },
    { to: '/reports', label: 'PDF Reports', icon: FileText },
  ];

  const doctorNav = [
    { to: '/doctor/dashboard', label: 'Clinical Overview', icon: LayoutDashboard },
    { to: '/doctor/patients', label: 'Assigned Patients', icon: Users },
    { to: '/doctor/alerts', label: 'Patient Alerts', icon: AlertTriangle },
  ];

  const adminNav = [
    { to: '/admin/dashboard', label: 'Admin Metrics', icon: LayoutDashboard },
    { to: '/admin/users', label: 'User Directory', icon: Users },
    { to: '/admin/assignments', label: 'Doctor-Patient Map', icon: UserCheck },
    { to: '/admin/audit', label: 'Audit Logs', icon: ShieldCheck },
  ];

  const links = role === 'ADMIN' ? adminNav : role === 'DOCTOR' ? doctorNav : patientNav;

  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-4rem)] p-4 flex flex-col justify-between">
      <nav className="space-y-1">
        <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          {role} Workspace
        </p>
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                isActive
                  ? 'bg-sky-50 text-sky-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-500">
        <p className="font-medium text-slate-700">PulseSync v1.0</p>
        <p className="mt-0.5">Continuous Clinical Telemetry</p>
      </div>
    </aside>
  );
};
