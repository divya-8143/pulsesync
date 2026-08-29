import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Activity, LogOut } from 'lucide-react';

interface NavbarProps {
  onOpenLogModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogModal }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-sky-600 text-white p-2 rounded-lg shadow-sm">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Pulse<span className="text-sky-600">Sync</span></span>
            <span className="hidden sm:inline-block ml-2 text-xs font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
              {user?.role}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {user?.role === 'PATIENT' && onOpenLogModal && (
            <button
              onClick={onOpenLogModal}
              className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition flex items-center space-x-2"
            >
              <span>+ Log Vitals</span>
            </button>
          )}

          <div className="flex items-center space-x-3 border-l border-slate-200 pl-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                {user?.first_name?.[0] || 'U'}
              </div>
              <div className="hidden md:block text-left text-xs">
                <p className="font-semibold text-slate-800">{user?.first_name} {user?.last_name}</p>
                <p className="text-slate-500">{user?.email}</p>
              </div>
            </div>

            <button
              onClick={logout}
              title="Sign Out"
              className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
