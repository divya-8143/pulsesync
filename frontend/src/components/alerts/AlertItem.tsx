import React from 'react';
import { HealthAlert } from '../../types';
import { AlertCircle, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';
import { formatDistanceToNow, parseISO } from 'date-fns';

interface AlertItemProps {
  alert: HealthAlert;
  onAcknowledge?: (id: string) => void;
}

export const AlertItem: React.FC<AlertItemProps> = ({ alert, onAcknowledge }) => {
  const isCritical = alert.severity === 'CRITICAL';
  const isWarning = alert.severity === 'WARNING';

  const bgClass = isCritical ? 'bg-rose-50 border-rose-200' : isWarning ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-200';
  const textClass = isCritical ? 'text-rose-800' : isWarning ? 'text-amber-800' : 'text-blue-800';
  const badgeClass = isCritical ? 'bg-rose-100 text-rose-800 border-rose-300' : isWarning ? 'bg-amber-100 text-amber-800 border-amber-300' : 'bg-blue-100 text-blue-800 border-blue-300';
  const Icon = isCritical ? AlertCircle : isWarning ? AlertTriangle : Info;

  return (
    <div className={`p-4 rounded-xl border ${bgClass} transition flex flex-col sm:flex-row sm:items-center justify-between gap-3`}>
      <div className="flex items-start space-x-3">
        <div className={`p-1.5 rounded-lg ${badgeClass} mt-0.5`}>
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeClass}`}>
              {alert.severity}
            </span>
            <span className="font-semibold text-slate-900 text-sm">{alert.title}</span>
          </div>
          <p className={`mt-1 text-xs ${textClass}`}>{alert.message}</p>
          <div className="mt-2 flex flex-wrap gap-x-4 text-[11px] text-slate-500">
            <span>Reading: <b>{alert.recorded_value}</b></span>
            <span>Threshold: <b>{alert.threshold_breached}</b></span>
            <span>{formatDistanceToNow(parseISO(alert.created_at), { addSuffix: true })}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 self-end sm:self-center">
        {alert.is_acknowledged ? (
          <span className="flex items-center space-x-1 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Acknowledged</span>
          </span>
        ) : onAcknowledge ? (
          <button
            onClick={() => onAcknowledge(alert.id)}
            className="text-xs bg-white hover:bg-slate-100 text-slate-700 font-semibold px-3 py-1.5 rounded-lg border border-slate-300 shadow-sm transition"
          >
            Acknowledge
          </button>
        ) : null}
      </div>
    </div>
  );
};
