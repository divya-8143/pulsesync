import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import { Activity, Lock, Mail, ArrowRight } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const res = await api.post('/auth/login', { email, password });
      const { access_token, role, user_id, full_name } = res.data;
      login(access_token, {
        id: user_id,
        email,
        first_name: full_name.split(' ')[0] || 'User',
        last_name: full_name.split(' ')[1] || '',
        role: role as any,
        is_active: true,
        is_verified: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });
      if (role === 'ADMIN') navigate('/admin/dashboard');
      else if (role === 'DOCTOR') navigate('/doctor/dashboard');
      else navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="bg-sky-600 p-3 rounded-2xl shadow-lg text-white">
            <Activity className="h-10 w-10" />
          </div>
        </div>
        <h2 className="mt-4 text-center text-3xl font-extrabold text-slate-900 tracking-tight">
          Pulse<span className="text-sky-600">Sync</span>
        </h2>
        <p className="mt-1 text-center text-sm text-slate-600">
          Patient Biometric Health Telemetry Platform
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-200">
          <form className="space-y-5" onSubmit={handleLogin}>
            {error && (
              <div className="p-3 bg-rose-50 text-rose-700 text-xs rounded-lg border border-rose-200">
                {error}
              </div>
            )}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address</label>
              <div className="relative">
                <Mail className="h-5 w-5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john.doe@example.com"
                  className="pl-10 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Password</label>
              <div className="relative">
                <Lock className="h-5 w-5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-sm text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 disabled:opacity-50 transition"
            >
              {isLoading ? 'Signing In...' : 'Sign In'} <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
          <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">Demo Accounts:</p>
            <div>Patient: <b>john.doe@example.com</b> / password123</div>
            <div>Doctor: <b>dr.sarah@pulsesync.health</b> / password123</div>
            <div>Admin: <b>admin@pulsesync.health</b> / password123</div>
          </div>
        </div>
      </div>
    </div>
  );
};
