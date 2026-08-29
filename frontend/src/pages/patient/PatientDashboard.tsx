import React, { useState, useEffect } from 'react';
import { metricService } from '../../services/metricService';
import { alertService } from '../../services/alertService';
import { MetricStats, MetricTrendPoint, HealthAlert, MetricType } from '../../types';
import { StatCard } from '../../components/common/StatCard';
import { VitalsTrendChart } from '../../components/charts/VitalsTrendChart';
import { AlertItem } from '../../components/alerts/AlertItem';
import { Activity, Heart, Thermometer, Droplet, Scale } from 'lucide-react';

export const PatientDashboard: React.FC = () => {
  const [stats, setStats] = useState<MetricStats[]>([]);
  const [activeMetric, setActiveMetric] = useState<MetricType>('BLOOD_PRESSURE');
  const [timeframe, setTimeframe] = useState('monthly');
  const [trends, setTrends] = useState<MetricTrendPoint[]>([]);
  const [alerts, setAlerts] = useState<HealthAlert[]>([]);

  const loadData = async () => {
    try {
      const [statsData, trendData, alertsData] = await Promise.all([
        metricService.getSummary(),
        metricService.getTrends(activeMetric, timeframe),
        alertService.getAlerts({ limit: 5 })
      ]);
      setStats(statsData);
      setTrends(trendData);
      setAlerts(alertsData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => { loadData(); }, [activeMetric, timeframe]);

  const getStat = (type: MetricType) => stats.find(s => s.metric_type === type);
  const bpStat = getStat('BLOOD_PRESSURE');
  const hrStat = getStat('HEART_RATE');
  const gluStat = getStat('BLOOD_GLUCOSE');
  const tempStat = getStat('TEMPERATURE');
  const wtStat = getStat('WEIGHT');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Patient Health Dashboard</h1>
        <p className="text-sm text-slate-500">Live biometric telemetry summary and threshold monitoring</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <button onClick={() => setActiveMetric('BLOOD_PRESSURE')} className="text-left">
          <StatCard
            title="Blood Pressure"
            value={bpStat?.latest_systolic ? `${bpStat.latest_systolic}/${bpStat.latest_diastolic}` : '--/--'}
            unit="mmHg" subtitle="Target: < 120/80" icon={Activity}
            colorClass={activeMetric === 'BLOOD_PRESSURE' ? 'bg-sky-600 text-white' : 'bg-rose-50 text-rose-600'}
          />
        </button>
        <button onClick={() => setActiveMetric('HEART_RATE')} className="text-left">
          <StatCard
            title="Heart Rate" value={hrStat?.latest_value ? `${hrStat.latest_value}` : '--'}
            unit="bpm" subtitle="Resting: 60-100" icon={Heart}
            colorClass={activeMetric === 'HEART_RATE' ? 'bg-sky-600 text-white' : 'bg-emerald-50 text-emerald-600'}
          />
        </button>
        <button onClick={() => setActiveMetric('BLOOD_GLUCOSE')} className="text-left">
          <StatCard
            title="Blood Glucose" value={gluStat?.latest_value ? `${gluStat.latest_value}` : '--'}
            unit="mg/dL" subtitle="Fasting: 70-99" icon={Droplet}
            colorClass={activeMetric === 'BLOOD_GLUCOSE' ? 'bg-sky-600 text-white' : 'bg-purple-50 text-purple-600'}
          />
        </button>
        <button onClick={() => setActiveMetric('TEMPERATURE')} className="text-left">
          <StatCard
            title="Temperature" value={tempStat?.latest_value ? `${tempStat.latest_value}` : '--'}
            unit="°C" subtitle="Normal: 36.1-37.2" icon={Thermometer}
            colorClass={activeMetric === 'TEMPERATURE' ? 'bg-sky-600 text-white' : 'bg-amber-50 text-amber-600'}
          />
        </button>
        <button onClick={() => setActiveMetric('WEIGHT')} className="text-left">
          <StatCard
            title="Body Weight" value={wtStat?.latest_value ? `${wtStat.latest_value}` : '--'}
            unit="kg" subtitle="Weekly tracking" icon={Scale}
            colorClass={activeMetric === 'WEIGHT' ? 'bg-sky-600 text-white' : 'bg-blue-50 text-blue-600'}
          />
        </button>
      </div>

      <VitalsTrendChart data={trends} metricType={activeMetric} timeframe={timeframe} onTimeframeChange={setTimeframe} />

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800 text-base">Threshold Alerts Feed</h3>
          <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-2.5 py-1 rounded-full">{alerts.length} Total</span>
        </div>
        {alerts.length === 0 ? (
          <p className="text-sm text-slate-400 italic">No threshold breaches reported.</p>
        ) : (
          <div className="space-y-3">{alerts.map(a => <AlertItem key={a.id} alert={a} />)}</div>
        )}
      </div>
    </div>
  );
};
