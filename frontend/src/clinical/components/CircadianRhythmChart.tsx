import React, { useState, useEffect } from "react";
/**
 * Clinical Component: CircadianRhythmChart
 * 24-Hour Diurnal Blood Pressure Dipping Analysis
 */

export interface CircadianRhythmChartProps {
  patientId?: string;
  refreshIntervalMs?: number;
  onStatusChange?: (status: string) => void;
}

export const CircadianRhythmChartVariant_01: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #01</h4>
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

export const CircadianRhythmChartVariant_02: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #02</h4>
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

export const CircadianRhythmChartVariant_03: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #03</h4>
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

export const CircadianRhythmChartVariant_04: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #04</h4>
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

export const CircadianRhythmChartVariant_05: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #05</h4>
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

export const CircadianRhythmChartVariant_06: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #06</h4>
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

export const CircadianRhythmChartVariant_07: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #07</h4>
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

export const CircadianRhythmChartVariant_08: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #08</h4>
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

export const CircadianRhythmChartVariant_09: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #09</h4>
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

export const CircadianRhythmChartVariant_10: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #10</h4>
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

export const CircadianRhythmChartVariant_11: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #11</h4>
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

export const CircadianRhythmChartVariant_12: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #12</h4>
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

export const CircadianRhythmChartVariant_13: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #13</h4>
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

export const CircadianRhythmChartVariant_14: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #14</h4>
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

export const CircadianRhythmChartVariant_15: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #15</h4>
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

export const CircadianRhythmChartVariant_16: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #16</h4>
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

export const CircadianRhythmChartVariant_17: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #17</h4>
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

export const CircadianRhythmChartVariant_18: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #18</h4>
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

export const CircadianRhythmChartVariant_19: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #19</h4>
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

export const CircadianRhythmChartVariant_20: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #20</h4>
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

export const CircadianRhythmChartVariant_21: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #21</h4>
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

export const CircadianRhythmChartVariant_22: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #22</h4>
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

export const CircadianRhythmChartVariant_23: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #23</h4>
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

export const CircadianRhythmChartVariant_24: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #24</h4>
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

export const CircadianRhythmChartVariant_25: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #25</h4>
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

export const CircadianRhythmChartVariant_26: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #26</h4>
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

export const CircadianRhythmChartVariant_27: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #27</h4>
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

export const CircadianRhythmChartVariant_28: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #28</h4>
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

export const CircadianRhythmChartVariant_29: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #29</h4>
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

export const CircadianRhythmChartVariant_30: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #30</h4>
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

export const CircadianRhythmChartVariant_31: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #31</h4>
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

export const CircadianRhythmChartVariant_32: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #32</h4>
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

export const CircadianRhythmChartVariant_33: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #33</h4>
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

export const CircadianRhythmChartVariant_34: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #34</h4>
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

export const CircadianRhythmChartVariant_35: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #35</h4>
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

export const CircadianRhythmChartVariant_36: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #36</h4>
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

export const CircadianRhythmChartVariant_37: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #37</h4>
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

export const CircadianRhythmChartVariant_38: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #38</h4>
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

export const CircadianRhythmChartVariant_39: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #39</h4>
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

export const CircadianRhythmChartVariant_40: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #40</h4>
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

export const CircadianRhythmChartVariant_41: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #41</h4>
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

export const CircadianRhythmChartVariant_42: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #42</h4>
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

export const CircadianRhythmChartVariant_43: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #43</h4>
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

export const CircadianRhythmChartVariant_44: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #44</h4>
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

export const CircadianRhythmChartVariant_45: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #45</h4>
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

export const CircadianRhythmChartVariant_46: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #46</h4>
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

export const CircadianRhythmChartVariant_47: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #47</h4>
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

export const CircadianRhythmChartVariant_48: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #48</h4>
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

export const CircadianRhythmChartVariant_49: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #49</h4>
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

export const CircadianRhythmChartVariant_50: React.FC<CircadianRhythmChartProps> = ({ patientId, refreshIntervalMs = 5000, onStatusChange }) => {
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
        <h4 className="font-semibold text-slate-800 text-sm">24-Hour Diurnal Blood Pressure Dipping Analysis #50</h4>
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
