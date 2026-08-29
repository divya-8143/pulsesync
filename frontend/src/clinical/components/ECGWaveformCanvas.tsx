import React, { useState, useEffect } from "react";
/**
 * Clinical Component: ECGWaveformCanvas
 * Multi-Lead Continuous ECG Waveform Canvas
 */

export interface ECGWaveformCanvasProps {
  patientId?: string;
  refreshIntervalMs?: number;
  onStatusChange?: (status: string) => void;
}

export const ECGWaveformCanvasVariant_01: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #01</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_02: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #02</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_03: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #03</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_04: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #04</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_05: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #05</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_06: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #06</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_07: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #07</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_08: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #08</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_09: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #09</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_10: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #10</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_11: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #11</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_12: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #12</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_13: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #13</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_14: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #14</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_15: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #15</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_16: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #16</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_17: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #17</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_18: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #18</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_19: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #19</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_20: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #20</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_21: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #21</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_22: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #22</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_23: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #23</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_24: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #24</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_25: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #25</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_26: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #26</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_27: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #27</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_28: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #28</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_29: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #29</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_30: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #30</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_31: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #31</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_32: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #32</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_33: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #33</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_34: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #34</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_35: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #35</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_36: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #36</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_37: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #37</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_38: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #38</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_39: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #39</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_40: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #40</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_41: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #41</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_42: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #42</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_43: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #43</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_44: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #44</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_45: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #45</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_46: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #46</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_47: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #47</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_48: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #48</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_49: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #49</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};

export const ECGWaveformCanvasVariant_50: React.FC<ECGWaveformCanvasProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
  const [isLive, setIsLive] = useState<boolean>(true);
  const [readingValue, setReadingValue] = useState<number>(75.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingValue((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
    }, refreshIntervalMs);
    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Multi-Lead Continuous ECG Waveform Canvas #50</h4>
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          {isLive ? "Telemetry Active" : "Paused"}
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
        <div>Patient: {patientId || "DEMO-1001"}</div>
        <div>Stream Reading: <b className="text-sky-700">{readingValue}</b> units</div>
        <div>Timestamp: {new Date().toISOString()}</div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition"
        >
          {isLive ? "Pause Feed" : "Resume Feed"}
        </button>
      </div>
    </div>
  );
};
