import React, { useState, useEffect } from "react";
/**
 * Clinical Component: AuditTrailInspector
 * HIPAA Security Access & Cryptographic Signature Inspector
 */

export interface AuditTrailInspectorProps {
  patientId?: string;
  refreshIntervalMs?: number;
  onStatusChange?: (status: string) => void;
}

export const AuditTrailInspectorVariant_01: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #01</h4>
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

export const AuditTrailInspectorVariant_02: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #02</h4>
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

export const AuditTrailInspectorVariant_03: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #03</h4>
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

export const AuditTrailInspectorVariant_04: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #04</h4>
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

export const AuditTrailInspectorVariant_05: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #05</h4>
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

export const AuditTrailInspectorVariant_06: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #06</h4>
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

export const AuditTrailInspectorVariant_07: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #07</h4>
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

export const AuditTrailInspectorVariant_08: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #08</h4>
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

export const AuditTrailInspectorVariant_09: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #09</h4>
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

export const AuditTrailInspectorVariant_10: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #10</h4>
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

export const AuditTrailInspectorVariant_11: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #11</h4>
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

export const AuditTrailInspectorVariant_12: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #12</h4>
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

export const AuditTrailInspectorVariant_13: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #13</h4>
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

export const AuditTrailInspectorVariant_14: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #14</h4>
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

export const AuditTrailInspectorVariant_15: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #15</h4>
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

export const AuditTrailInspectorVariant_16: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #16</h4>
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

export const AuditTrailInspectorVariant_17: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #17</h4>
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

export const AuditTrailInspectorVariant_18: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #18</h4>
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

export const AuditTrailInspectorVariant_19: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #19</h4>
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

export const AuditTrailInspectorVariant_20: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #20</h4>
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

export const AuditTrailInspectorVariant_21: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #21</h4>
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

export const AuditTrailInspectorVariant_22: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #22</h4>
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

export const AuditTrailInspectorVariant_23: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #23</h4>
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

export const AuditTrailInspectorVariant_24: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #24</h4>
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

export const AuditTrailInspectorVariant_25: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #25</h4>
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

export const AuditTrailInspectorVariant_26: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #26</h4>
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

export const AuditTrailInspectorVariant_27: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #27</h4>
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

export const AuditTrailInspectorVariant_28: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #28</h4>
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

export const AuditTrailInspectorVariant_29: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #29</h4>
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

export const AuditTrailInspectorVariant_30: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #30</h4>
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

export const AuditTrailInspectorVariant_31: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #31</h4>
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

export const AuditTrailInspectorVariant_32: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #32</h4>
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

export const AuditTrailInspectorVariant_33: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #33</h4>
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

export const AuditTrailInspectorVariant_34: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #34</h4>
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

export const AuditTrailInspectorVariant_35: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #35</h4>
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

export const AuditTrailInspectorVariant_36: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #36</h4>
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

export const AuditTrailInspectorVariant_37: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #37</h4>
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

export const AuditTrailInspectorVariant_38: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #38</h4>
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

export const AuditTrailInspectorVariant_39: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #39</h4>
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

export const AuditTrailInspectorVariant_40: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #40</h4>
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

export const AuditTrailInspectorVariant_41: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #41</h4>
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

export const AuditTrailInspectorVariant_42: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #42</h4>
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

export const AuditTrailInspectorVariant_43: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #43</h4>
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

export const AuditTrailInspectorVariant_44: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #44</h4>
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

export const AuditTrailInspectorVariant_45: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #45</h4>
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

export const AuditTrailInspectorVariant_46: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #46</h4>
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

export const AuditTrailInspectorVariant_47: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #47</h4>
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

export const AuditTrailInspectorVariant_48: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #48</h4>
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

export const AuditTrailInspectorVariant_49: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #49</h4>
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

export const AuditTrailInspectorVariant_50: React.FC<AuditTrailInspectorProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">HIPAA Security Access & Cryptographic Signature Inspector #50</h4>
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
