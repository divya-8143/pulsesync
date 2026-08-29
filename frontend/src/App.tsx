import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { Login } from './pages/auth/Login';
import { DashboardLayout } from './layouts/DashboardLayout';
import { PatientDashboard } from './pages/patient/PatientDashboard';
import { VitalsHistory } from './pages/patient/VitalsHistory';
import { AlertsCenter } from './pages/patient/AlertsCenter';
import { HealthReports } from './pages/patient/HealthReports';
import { DoctorDashboard } from './pages/doctor/DoctorDashboard';
import { AssignedPatients } from './pages/doctor/AssignedPatients';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { UserManagement } from './pages/admin/UserManagement';
import { DoctorPatientMapping } from './pages/admin/DoctorPatientMapping';
import { AuditLogsViewer } from './pages/admin/AuditLogsViewer';

const ProtectedRoute: React.FC<{ children: React.ReactNode; roles?: string[] }> = ({ children, roles }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <div className="min-h-screen flex items-center justify-center text-slate-500">Loading PulseSync...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) {
    if (user.role === 'ADMIN') return <Navigate to="/admin/dashboard" replace />;
    if (user.role === 'DOCTOR') return <Navigate to="/doctor/dashboard" replace />;
    return <Navigate to="/dashboard" replace />;
  }
  return <>{children}</>;
};

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Patient Routes */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<ProtectedRoute roles={['PATIENT', 'ADMIN']}><PatientDashboard /></ProtectedRoute>} />
        <Route path="history" element={<ProtectedRoute roles={['PATIENT', 'ADMIN']}><VitalsHistory /></ProtectedRoute>} />
        <Route path="alerts" element={<ProtectedRoute roles={['PATIENT', 'ADMIN']}><AlertsCenter /></ProtectedRoute>} />
        <Route path="reports" element={<ProtectedRoute roles={['PATIENT', 'ADMIN']}><HealthReports /></ProtectedRoute>} />

        {/* Doctor Routes */}
        <Route path="doctor/dashboard" element={<ProtectedRoute roles={['DOCTOR', 'ADMIN']}><DoctorDashboard /></ProtectedRoute>} />
        <Route path="doctor/patients" element={<ProtectedRoute roles={['DOCTOR', 'ADMIN']}><AssignedPatients /></ProtectedRoute>} />
        <Route path="doctor/alerts" element={<ProtectedRoute roles={['DOCTOR', 'ADMIN']}><AlertsCenter /></ProtectedRoute>} />

        {/* Admin Routes */}
        <Route path="admin/dashboard" element={<ProtectedRoute roles={['ADMIN']}><AdminDashboard /></ProtectedRoute>} />
        <Route path="admin/users" element={<ProtectedRoute roles={['ADMIN']}><UserManagement /></ProtectedRoute>} />
        <Route path="admin/assignments" element={<ProtectedRoute roles={['ADMIN']}><DoctorPatientMapping /></ProtectedRoute>} />
        <Route path="admin/audit" element={<ProtectedRoute roles={['ADMIN']}><AuditLogsViewer /></ProtectedRoute>} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
