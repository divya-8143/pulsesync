import React, { useState, useEffect } from "react";
/**
 * Clinical Component: VitalGaugeMeter
 * Radial Biometric Telemetry Target Dial & Gauge
 */

export interface VitalGaugeMeterProps {
  patientId?: string;
  refreshIntervalMs?: number;
  onStatusChange?: (status: string) => void;
}

export const VitalGaugeMeterVariant_01: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #01</h4>
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

export const VitalGaugeMeterVariant_02: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #02</h4>
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

export const VitalGaugeMeterVariant_03: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #03</h4>
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

export const VitalGaugeMeterVariant_04: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #04</h4>
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

export const VitalGaugeMeterVariant_05: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #05</h4>
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

export const VitalGaugeMeterVariant_06: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #06</h4>
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

export const VitalGaugeMeterVariant_07: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #07</h4>
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

export const VitalGaugeMeterVariant_08: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #08</h4>
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

export const VitalGaugeMeterVariant_09: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #09</h4>
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

export const VitalGaugeMeterVariant_10: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #10</h4>
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

export const VitalGaugeMeterVariant_11: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #11</h4>
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

export const VitalGaugeMeterVariant_12: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #12</h4>
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

export const VitalGaugeMeterVariant_13: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #13</h4>
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

export const VitalGaugeMeterVariant_14: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #14</h4>
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

export const VitalGaugeMeterVariant_15: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #15</h4>
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

export const VitalGaugeMeterVariant_16: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #16</h4>
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

export const VitalGaugeMeterVariant_17: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #17</h4>
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

export const VitalGaugeMeterVariant_18: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #18</h4>
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

export const VitalGaugeMeterVariant_19: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #19</h4>
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

export const VitalGaugeMeterVariant_20: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #20</h4>
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

export const VitalGaugeMeterVariant_21: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #21</h4>
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

export const VitalGaugeMeterVariant_22: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #22</h4>
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

export const VitalGaugeMeterVariant_23: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #23</h4>
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

export const VitalGaugeMeterVariant_24: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #24</h4>
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

export const VitalGaugeMeterVariant_25: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #25</h4>
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

export const VitalGaugeMeterVariant_26: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #26</h4>
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

export const VitalGaugeMeterVariant_27: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #27</h4>
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

export const VitalGaugeMeterVariant_28: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #28</h4>
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

export const VitalGaugeMeterVariant_29: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #29</h4>
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

export const VitalGaugeMeterVariant_30: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #30</h4>
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

export const VitalGaugeMeterVariant_31: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #31</h4>
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

export const VitalGaugeMeterVariant_32: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #32</h4>
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

export const VitalGaugeMeterVariant_33: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #33</h4>
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

export const VitalGaugeMeterVariant_34: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #34</h4>
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

export const VitalGaugeMeterVariant_35: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #35</h4>
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

export const VitalGaugeMeterVariant_36: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #36</h4>
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

export const VitalGaugeMeterVariant_37: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #37</h4>
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

export const VitalGaugeMeterVariant_38: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #38</h4>
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

export const VitalGaugeMeterVariant_39: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #39</h4>
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

export const VitalGaugeMeterVariant_40: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #40</h4>
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

export const VitalGaugeMeterVariant_41: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #41</h4>
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

export const VitalGaugeMeterVariant_42: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #42</h4>
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

export const VitalGaugeMeterVariant_43: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #43</h4>
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

export const VitalGaugeMeterVariant_44: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #44</h4>
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

export const VitalGaugeMeterVariant_45: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #45</h4>
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

export const VitalGaugeMeterVariant_46: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #46</h4>
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

export const VitalGaugeMeterVariant_47: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #47</h4>
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

export const VitalGaugeMeterVariant_48: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #48</h4>
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

export const VitalGaugeMeterVariant_49: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #49</h4>
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

export const VitalGaugeMeterVariant_50: React.FC<VitalGaugeMeterProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Radial Biometric Telemetry Target Dial & Gauge #50</h4>
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
