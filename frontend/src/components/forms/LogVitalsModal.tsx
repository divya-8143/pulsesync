import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { MetricType } from '../../types';
import { metricService } from '../../services/metricService';
import { VITALS_META } from '../../utils/vitalsRanges';

interface LogVitalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const LogVitalsModal: React.FC<LogVitalsModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [metricType, setMetricType] = useState<MetricType>('BLOOD_PRESSURE');
  const [value, setValue] = useState('');
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [mealContext, setMealContext] = useState('FASTING');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const meta = VITALS_META[metricType];
      const payload: any = {
        metric_type: metricType,
        unit: meta.unit,
        notes: notes || undefined,
      };

      if (metricType === 'BLOOD_PRESSURE') {
        if (!systolic || !diastolic) throw new Error('Both systolic and diastolic values are required.');
        payload.systolic = parseFloat(systolic);
        payload.diastolic = parseFloat(diastolic);
      } else {
        if (!value) throw new Error('Measurement value is required.');
        payload.value = parseFloat(value);
        if (metricType === 'BLOOD_GLUCOSE') payload.meal_context = mealContext;
      }

      await metricService.logMetric(payload);
      onSuccess();
      onClose();
      // Reset form
      setValue('');
      setSystolic('');
      setDiastolic('');
      setNotes('');
    } catch (err: any) {
      setError(err.response?.data?.detail || err.message || 'Failed to log measurement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Log Biometric Measurement">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-rose-50 text-rose-700 text-xs rounded-lg border border-rose-200">
            {error}
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Select Metric Type</label>
          <select
            value={metricType}
            onChange={(e) => setMetricType(e.target.value as MetricType)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
          >
            <option value="BLOOD_PRESSURE">Blood Pressure (mmHg)</option>
            <option value="HEART_RATE">Heart Rate (bpm)</option>
            <option value="BLOOD_GLUCOSE">Blood Glucose (mg/dL)</option>
            <option value="TEMPERATURE">Body Temperature (°C)</option>
            <option value="WEIGHT">Body Weight (kg)</option>
          </select>
        </div>

        {metricType === 'BLOOD_PRESSURE' ? (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Systolic (mmHg)</label>
              <input
                type="number"
                placeholder="120"
                value={systolic}
                onChange={(e) => setSystolic(e.target.value)}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Diastolic (mmHg)</label>
              <input
                type="number"
                placeholder="80"
                value={diastolic}
                onChange={(e) => setDiastolic(e.target.value)}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Measurement Value ({VITALS_META[metricType].unit})
            </label>
            <input
              type="number"
              step="any"
              placeholder="e.g. 72"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>
        )}

        {metricType === 'BLOOD_GLUCOSE' && (
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Meal Context</label>
            <select
              value={mealContext}
              onChange={(e) => setMealContext(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
            >
              <option value="FASTING">Fasting (Pre-Breakfast)</option>
              <option value="POST_MEAL">Post-Prandial (2h after meal)</option>
              <option value="BEDTIME">Bedtime</option>
              <option value="RANDOM">Random Measurement</option>
            </select>
          </div>
        )}

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Clinical Notes (Optional)</label>
          <textarea
            rows={2}
            placeholder="e.g. Taken after 5 mins of seated rest..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
          />
        </div>

        <div className="pt-3 flex justify-end space-x-3 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-slate-300 text-slate-700 text-sm rounded-lg hover:bg-slate-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-lg shadow-sm transition disabled:opacity-50"
          >
            {isSubmitting ? 'Recording...' : 'Save Reading'}
          </button>
        </div>
      </form>
    </Modal>
  );
};
