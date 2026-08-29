import React, { useState, useEffect } from 'react';
import { reportService } from '../../services/reportService';
import { HealthReport, ReportType } from '../../types';
import { FileText, Download, Plus, Loader2 } from 'lucide-react';
import { format, subDays } from 'date-fns';

export const HealthReports: React.FC = () => {
  const [reports, setReports] = useState<HealthReport[]>([]);
  const [reportType, setReportType] = useState<ReportType>('MONTHLY_TREND');
  const [startDate, setStartDate] = useState(format(subDays(new Date(), 30), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const fetchReports = async () => {
    const data = await reportService.getReports();
    setReports(data);
  };

  useEffect(() => { fetchReports(); }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    try {
      await reportService.generateReport({ report_type: reportType, start_date: startDate, end_date: endDate });
      await fetchReports();
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = async (report: HealthReport) => {
    try {
      setDownloadingId(report.id);
      const filename = `${report.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;
      await reportService.downloadReportBlob(report.id, filename);
    } catch (err) {
      // Fallback: open authenticated URL in new tab
      window.open(reportService.getDownloadUrl(report.id), '_blank');
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">PDF Clinical Reports</h1>
        <p className="text-sm text-slate-500">Export formatted health dossiers and clinical summaries</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 text-base">Generate Clinical PDF Report</h3>
        <form onSubmit={handleGenerate} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Report Format</label>
            <select value={reportType} onChange={(e) => setReportType(e.target.value as ReportType)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white">
              <option value="WEEKLY_SUMMARY">Weekly Summary</option>
              <option value="MONTHLY_TREND">Monthly Telemetry Dossier</option>
              <option value="CLINICAL_DOSSIER">Comprehensive Clinical File</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">End Date</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
          </div>
          <button type="submit" disabled={isGenerating} className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-lg shadow-sm disabled:opacity-50 transition">
            <Plus className="h-4 w-4" />
            <span>{isGenerating ? 'Compiling PDF...' : 'Generate PDF'}</span>
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 font-bold text-slate-800">Generated Reports Archive</div>
        <div className="divide-y divide-slate-100">
          {reports.length === 0 ? (
            <div className="p-8 text-center text-slate-400">No generated reports in archive.</div>
          ) : (
            reports.map((r) => (
              <div key={r.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-sky-50 text-sky-600 rounded-lg"><FileText className="h-5 w-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">{r.title}</h4>
                    <p className="text-xs text-slate-500">{r.start_date} to {r.end_date} • {r.file_size_bytes || 'PDF Document'}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleDownload(r)}
                  disabled={downloadingId === r.id}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 font-medium text-xs rounded-lg transition border border-sky-200 disabled:opacity-50 cursor-pointer"
                >
                  {downloadingId === r.id ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      <span>Download PDF</span>
                    </>
                  )}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
