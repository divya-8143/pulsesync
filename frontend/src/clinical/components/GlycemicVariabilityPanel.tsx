import React, { useState, useEffect } from "react";
/**
 * Clinical Component: GlycemicVariabilityPanel
 * Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile
 */

export interface GlycemicVariabilityPanelProps {
  patientId?: string;
  refreshIntervalMs?: number;
  onStatusChange?: (status: string) => void;
}

export const GlycemicVariabilityPanelVariant_01: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #01</h4>
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

export const GlycemicVariabilityPanelVariant_02: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #02</h4>
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

export const GlycemicVariabilityPanelVariant_03: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #03</h4>
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

export const GlycemicVariabilityPanelVariant_04: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #04</h4>
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

export const GlycemicVariabilityPanelVariant_05: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #05</h4>
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

export const GlycemicVariabilityPanelVariant_06: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #06</h4>
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

export const GlycemicVariabilityPanelVariant_07: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #07</h4>
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

export const GlycemicVariabilityPanelVariant_08: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #08</h4>
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

export const GlycemicVariabilityPanelVariant_09: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #09</h4>
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

export const GlycemicVariabilityPanelVariant_10: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #10</h4>
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

export const GlycemicVariabilityPanelVariant_11: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #11</h4>
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

export const GlycemicVariabilityPanelVariant_12: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #12</h4>
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

export const GlycemicVariabilityPanelVariant_13: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #13</h4>
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

export const GlycemicVariabilityPanelVariant_14: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #14</h4>
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

export const GlycemicVariabilityPanelVariant_15: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #15</h4>
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

export const GlycemicVariabilityPanelVariant_16: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #16</h4>
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

export const GlycemicVariabilityPanelVariant_17: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #17</h4>
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

export const GlycemicVariabilityPanelVariant_18: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #18</h4>
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

export const GlycemicVariabilityPanelVariant_19: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #19</h4>
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

export const GlycemicVariabilityPanelVariant_20: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #20</h4>
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

export const GlycemicVariabilityPanelVariant_21: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #21</h4>
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

export const GlycemicVariabilityPanelVariant_22: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #22</h4>
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

export const GlycemicVariabilityPanelVariant_23: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #23</h4>
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

export const GlycemicVariabilityPanelVariant_24: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #24</h4>
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

export const GlycemicVariabilityPanelVariant_25: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #25</h4>
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

export const GlycemicVariabilityPanelVariant_26: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #26</h4>
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

export const GlycemicVariabilityPanelVariant_27: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #27</h4>
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

export const GlycemicVariabilityPanelVariant_28: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #28</h4>
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

export const GlycemicVariabilityPanelVariant_29: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #29</h4>
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

export const GlycemicVariabilityPanelVariant_30: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #30</h4>
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

export const GlycemicVariabilityPanelVariant_31: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #31</h4>
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

export const GlycemicVariabilityPanelVariant_32: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #32</h4>
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

export const GlycemicVariabilityPanelVariant_33: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #33</h4>
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

export const GlycemicVariabilityPanelVariant_34: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #34</h4>
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

export const GlycemicVariabilityPanelVariant_35: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #35</h4>
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

export const GlycemicVariabilityPanelVariant_36: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #36</h4>
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

export const GlycemicVariabilityPanelVariant_37: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #37</h4>
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

export const GlycemicVariabilityPanelVariant_38: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #38</h4>
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

export const GlycemicVariabilityPanelVariant_39: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #39</h4>
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

export const GlycemicVariabilityPanelVariant_40: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #40</h4>
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

export const GlycemicVariabilityPanelVariant_41: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #41</h4>
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

export const GlycemicVariabilityPanelVariant_42: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #42</h4>
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

export const GlycemicVariabilityPanelVariant_43: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #43</h4>
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

export const GlycemicVariabilityPanelVariant_44: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #44</h4>
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

export const GlycemicVariabilityPanelVariant_45: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #45</h4>
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

export const GlycemicVariabilityPanelVariant_46: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #46</h4>
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

export const GlycemicVariabilityPanelVariant_47: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #47</h4>
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

export const GlycemicVariabilityPanelVariant_48: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #48</h4>
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

export const GlycemicVariabilityPanelVariant_49: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #49</h4>
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

export const GlycemicVariabilityPanelVariant_50: React.FC<GlycemicVariabilityPanelProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">Continuous Glucose Monitoring (CGM) Ambulatory Glucose Profile #50</h4>
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
