import React, { useState } from "react";
/**
 * Telehealth Consultation Room & E-Prescription Portal
 * WebRTC video consultation controls and digital prescription viewer.
 */

export interface TelehealthProps {
  patientId?: string;
  doctorId?: string;
  roomId?: string;
}

export const TelehealthRoomWidget_01: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #01</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_02: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #02</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_03: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #03</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_04: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #04</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_05: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #05</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_06: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #06</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_07: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #07</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_08: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #08</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_09: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #09</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_10: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #10</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_11: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #11</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_12: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #12</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_13: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #13</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_14: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #14</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_15: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #15</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_16: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #16</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_17: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #17</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_18: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #18</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_19: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #19</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_20: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #20</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_21: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #21</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_22: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #22</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_23: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #23</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_24: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #24</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_25: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #25</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_26: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #26</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_27: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #27</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_28: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #28</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_29: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #29</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_30: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #30</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_31: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #31</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_32: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #32</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_33: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #33</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_34: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #34</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_35: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #35</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_36: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #36</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_37: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #37</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_38: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #38</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_39: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #39</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_40: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #40</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_41: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #41</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_42: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #42</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_43: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #43</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_44: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #44</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_45: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #45</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_46: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #46</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_47: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #47</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_48: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #48</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_49: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #49</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export const TelehealthRoomWidget_50: React.FC<TelehealthProps> = ({ patientId, doctorId, roomId }) => {
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [callDurationSec, setCallDurationSec] = useState<number>(120);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-sky-400">Encrypted Telehealth Room #50</h4>
        <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-mono">
          256-bit E2E Encrypted
        </span>
      </div>
      <div className="h-48 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 text-xs">
        [HD Video Stream: {patientId || "Patient-1001"} &lt;-&gt; {doctorId || "Dr. Sarah"}]
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isAudioMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition"
        >
          {isVideoMuted ? "Enable Cam" : "Disable Cam"}
        </button>
        <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-lg text-xs font-bold transition">
          End Consultation
        </button>
      </div>
    </div>
  );
};
