import { MetricType } from '../types';

export interface VitalsRangeMeta {
  name: string;
  unit: string;
  normalRange: string;
  badgeColor: string;
}

export const VITALS_META: Record<MetricType, VitalsRangeMeta> = {
  BLOOD_PRESSURE: {
    name: 'Blood Pressure',
    unit: 'mmHg',
    normalRange: '< 120/80 mmHg',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
  },
  HEART_RATE: {
    name: 'Heart Rate',
    unit: 'bpm',
    normalRange: '60 - 100 bpm',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  WEIGHT: {
    name: 'Body Weight',
    unit: 'kg',
    normalRange: 'Target BMI 18.5 - 24.9',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  TEMPERATURE: {
    name: 'Temperature',
    unit: '°C',
    normalRange: '36.1 - 37.2 °C',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  BLOOD_GLUCOSE: {
    name: 'Blood Glucose',
    unit: 'mg/dL',
    normalRange: '70 - 99 mg/dL (Fasting)',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  }
};
