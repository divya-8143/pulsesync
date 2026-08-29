import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Area, AreaChart } from 'recharts';
import { MetricTrendPoint, MetricType } from '../../types';

interface VitalsTrendChartProps {
  data: MetricTrendPoint[];
  metricType: MetricType;
  timeframe: string;
  onTimeframeChange: (tf: string) => void;
}

export const VitalsTrendChart: React.FC<VitalsTrendChartProps> = ({
  data,
  metricType,
  timeframe,
  onTimeframeChange
}) => {
  const isBP = metricType === 'BLOOD_PRESSURE';

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-4 border-b border-slate-100 gap-4">
        <div>
          <h3 className="font-bold text-slate-800 text-base">Telemetry Trend & Analytics</h3>
          <p className="text-xs text-slate-500 mt-0.5">Historical biometric aggregated curves</p>
        </div>
        <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg text-xs font-medium text-slate-600">
          {(['weekly', 'monthly', 'yearly'] as const).map((tf) => (
            <button
              key={tf}
              onClick={() => onTimeframeChange(tf)}
              className={`px-3 py-1.5 rounded-md capitalize transition ${
                timeframe === tf ? 'bg-white text-sky-700 font-semibold shadow-sm' : 'hover:text-slate-900'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="h-72 w-full">
        {data.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-400 text-sm">
            No telemetry records for this timeframe.
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            {isBP ? (
              <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="date" stroke="#94a3b8" fontSize={11} tickLine={false} />
                <YAxis domain={['dataMin - 10', 'dataMax + 10']} stroke="#94a3b8" fontSize={11} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px' }} />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="avg_systolic" name="Systolic (mmHg)" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="avg_diastolic" name="Diastolic (mmHg)" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 6 }} />
              </LineChart>
            ) : (
              <AreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="metricGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0284c7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0284c7" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="date" stroke="#94a3b8" fontSize={11} tickLine={false} />
                <YAxis domain={['dataMin - 5', 'dataMax + 5']} stroke="#94a3b8" fontSize={11} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px' }} />
                <Area type="monotone" dataKey="avg_value" name="Avg Value" stroke="#0284c7" strokeWidth={2.5} fillOpacity={1} fill="url(#metricGradient)" />
              </AreaChart>
            )}
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};
