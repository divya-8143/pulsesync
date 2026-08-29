export type UserRole = 'PATIENT' | 'DOCTOR' | 'ADMIN';

export type MetricType = 'BLOOD_PRESSURE' | 'HEART_RATE' | 'WEIGHT' | 'TEMPERATURE' | 'BLOOD_GLUCOSE';

export type AlertSeverity = 'INFO' | 'WARNING' | 'CRITICAL';

export type ReportType = 'WEEKLY_SUMMARY' | 'MONTHLY_TREND' | 'YEARLY_OVERVIEW' | 'CLINICAL_DOSSIER';

export type ReportStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';

export type AssignmentStatus = 'ACTIVE' | 'INACTIVE' | 'TRANSFERRED';

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  role: UserRole;
  is_active: boolean;
  is_verified: boolean;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface PatientProfile {
  id: string;
  user_id: string;
  date_of_birth?: string;
  gender?: string;
  blood_type?: string;
  height_cm?: number;
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  medical_history?: string;
  allergies?: string[];
  chronic_conditions?: string[];
  created_at: string;
  updated_at: string;
  user?: User;
}

export interface DoctorProfile {
  id: string;
  user_id: string;
  specialization: string;
  license_number: string;
  department?: string;
  hospital_affiliation?: string;
  biography?: string;
  office_phone?: string;
  is_accepting_patients: boolean;
  user?: User;
}

export interface HealthMetric {
  id: string;
  patient_id: string;
  metric_type: MetricType;
  value?: number;
  systolic?: number;
  diastolic?: number;
  unit: string;
  meal_context?: string;
  activity_context?: string;
  notes?: string;
  measured_at: string;
  created_at: string;
}

export interface MetricStats {
  metric_type: MetricType;
  count: number;
  latest_value?: number;
  latest_systolic?: number;
  latest_diastolic?: number;
  avg_value?: number;
  min_value?: number;
  max_value?: number;
  avg_systolic?: number;
  avg_diastolic?: number;
  unit: string;
  last_measured_at?: string;
}

export interface MetricTrendPoint {
  date: string;
  avg_value?: number;
  min_value?: number;
  max_value?: number;
  avg_systolic?: number;
  avg_diastolic?: number;
  count: number;
}

export interface HealthAlert {
  id: string;
  patient_id: string;
  metric_id?: string;
  severity: AlertSeverity;
  title: string;
  message: string;
  metric_type: string;
  recorded_value: string;
  threshold_breached: string;
  is_acknowledged: boolean;
  acknowledged_by_user_id?: string;
  acknowledged_at?: string;
  action_taken?: string;
  created_at: string;
}

export interface HealthReport {
  id: string;
  patient_id: string;
  generated_by_user_id: string;
  report_type: ReportType;
  title: string;
  status: ReportStatus;
  start_date: string;
  end_date: string;
  file_path?: string;
  file_size_bytes?: string;
  summary_text?: string;
  error_message?: string;
  created_at: string;
}

export interface DoctorPatientAssignment {
  id: string;
  doctor_id: string;
  patient_id: string;
  assigned_by_user_id?: string;
  status: AssignmentStatus;
  notes?: string;
  assigned_at: string;
  doctor_name?: string;
  patient_name?: string;
}

export interface ClinicalNote {
  id: string;
  doctor_id: string;
  patient_id: string;
  title: string;
  diagnosis?: string;
  prescription?: string;
  recommendations?: string;
  follow_up_date?: string;
  created_at: string;
}

export interface AuditLog {
  id: string;
  user_id?: string;
  action: string;
  entity_type: string;
  entity_id?: string;
  ip_address?: string;
  user_agent?: string;
  details?: Record<string, any>;
  created_at: string;
}
