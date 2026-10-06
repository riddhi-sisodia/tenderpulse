import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  FileText, 
  Calendar, 
  Building, 
  ExternalLink, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Coins,
  Copy,
  Check,
  Download,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';

export default function TenderDetailsModal({ tender, onClose, companyProfile }) {
  const [activeTab, setActiveTab] = useState('clauses');
  const [docStates, setDocStates] = useState(
    tender.mandatoryDocuments.reduce((acc, doc) => ({ ...acc, [doc.name]: doc.ready }), {})
  );
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleDoc = (docName) => {
    setDocStates(prev => ({ ...prev, [docName]: !prev[docName] }));
  };

  const handleCopyTender = () => {
    navigator.clipboard.writeText(`Tender ID: ${tender.id}\nTitle: ${tender.title}\nValue: ${tender.estimatedValue}\nPortal: ${tender.portal}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const completedDocsCount = Object.values(docStates).filter(Boolean).length;
  const totalDocsCount = tender.mandatoryDocuments.length;
  const readinessPercent = Math.round((completedDocsCount / totalDocsCount) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] shadow-2xl border-2 border-sandstone-300 flex flex-col overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="p-6 border-b border-sandstone-200 bg-sandstone-50/80 flex items-start justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold border ${tender.portalBadge}`}>
                {tender.portal}
              </span>
              <span className="text-xs font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-sandstone-200">
                {tender.id}
              </span>
              {tender.tinyfishStatus.hasCorrigendum && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-saffron-100 text-saffron-900 border border-saffron-300 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-saffron-600" />
                  <span>Corrigendum Active</span>
                </span>
              )}
            </div>

            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
              {tender.title}
            </h2>

            <p className="text-xs text-slate-600 flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-slate-400" />
              <span>{tender.authority}</span>
            </p>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-sandstone-200 transition cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Highlight Numbers Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-sandstone-100/50 border-b border-sandstone-200 text-xs">
          <div>
            <span className="text-[10px] text-slate-500 block font-medium">Estimated Value</span>
            <span className="font-extrabold text-slate-900 text-sm">{tender.estimatedValue}</span>
          </div>

          <div>
            <span className="text-[10px] text-slate-500 block font-medium">EMD Security Deposit</span>
            <span className="font-extrabold text-indiaGreen-700 text-xs block">{tender.emdAmount}</span>
          </div>

          <div>
            <span className="text-[10px] text-slate-500 block font-medium">Submission Deadline</span>
            <span className="font-extrabold text-slate-900 text-xs block">{tender.submissionDeadline}</span>
          </div>

          <div>
            <span className="text-[10px] text-slate-500 block font-medium">Match Probability</span>
            <span className="font-extrabold text-indiaGreen-700 text-sm block">{tender.matchScore}% ({tender.matchVerdict.split(' ')[0]})</span>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-sandstone-200 bg-white text-xs font-bold text-slate-600 px-6 gap-2">
          <button
            onClick={() => setActiveTab('clauses')}
            className={`py-3.5 px-3 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'clauses' ? 'border-saffron-600 text-saffron-700' : 'border-transparent hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Clause Qualification ({tender.clauses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('corrigenda')}
            className={`py-3.5 px-3 border-b-2 transition flex items-center gap-1.5 cursor-pointer relative ${
              activeTab === 'corrigenda' ? 'border-saffron-600 text-saffron-700' : 'border-transparent hover:text-slate-900'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-saffron-600" />
            <span>Corrigenda & Amendments</span>
            {tender.corrigenda?.length > 0 && (
              <span className="w-2 h-2 rounded-full bg-saffron-600"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`py-3.5 px-3 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'checklist' ? 'border-saffron-600 text-saffron-700' : 'border-transparent hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Document Checklist ({completedDocsCount}/{totalDocsCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('tinyfish')}
            className={`py-3.5 px-3 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'tinyfish' ? 'border-saffron-600 text-saffron-700' : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Terminal className="w-4 h-4 text-indiaGreen-700" />
            <span>TinyFish Telemetry</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-xs">
          
          {/* TAB 1: CLAUSE QUALIFICATION */}
          {activeTab === 'clauses' && (
            <div className="space-y-4">
              <div className="bg-indiaGreen-50 border border-indiaGreen-200 rounded-2xl p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-indiaGreen-700 shrink-0" />
                  <div>
                    <span className="font-extrabold text-indiaGreen-900 text-sm block">
                      Qualification Verdict for {companyProfile.name}
                    </span>
                    <span className="text-slate-600 text-xs">
                      {tender.matchScore}% criteria satisfied • Eligible for Rule 170 GFR Startup/MSME relaxations.
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <span className="font-extrabold text-slate-800 uppercase tracking-wide text-[11px] block">
                  Detailed Clause-by-Clause Evaluation:
                </span>

                {tender.clauses.map((clause, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-2xl border-2 transition ${
                      clause.passed 
                        ? 'bg-white border-sandstone-300' 
                        : 'bg-rose-50/50 border-rose-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-slate-900 text-sm">
                            {clause.criterion}
                          </span>
                          {clause.critical && (
                            <span className="px-2 py-0.2 bg-sandstone-200 text-slate-700 text-[10px] font-bold rounded">
                              Mandatory Clause
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 text-xs leading-relaxed">
                          <strong className="text-slate-700">RFP Requirement:</strong> {clause.requirement}
                        </p>
                        <p className="text-xs font-semibold mt-1">
                          <strong className="text-slate-700">Your Standing:</strong>{' '}
                          <span className={clause.passed ? 'text-indiaGreen-800 font-bold' : 'text-rose-700 font-bold'}>
                            {clause.companyStatus}
                          </span>
                        </p>
                      </div>

                      <div className="shrink-0">
                        {clause.passed ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-indiaGreen-100 text-indiaGreen-900 font-extrabold text-[11px] border border-indiaGreen-300">
                            <Check className="w-3.5 h-3.5" />
                            <span>Passed</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-rose-100 text-rose-900 font-extrabold text-[11px] border border-rose-300">
                            <span>Gap Found</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: CORRIGENDA */}
          {activeTab === 'corrigenda' && (
            <div className="space-y-4">
              <div className="bg-sandstone-100 border border-sandstone-300 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">
                    Autonomous Corrigendum Surveillance
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    TinyFish checks this active tender URL every 6 hours to detect sudden deadline shifts or revised turnover clauses.
                  </p>
                </div>
                <span className="px-3 py-1 bg-indiaGreen-100 text-indiaGreen-800 font-bold text-xs rounded-xl border border-indiaGreen-300">
                  Watchdog Active
                </span>
              </div>

              {tender.corrigenda && tender.corrigenda.length > 0 ? (
                <div className="space-y-3">
                  {tender.corrigenda.map((corr, idx) => (
                    <div key={idx} className="bg-white border-2 border-saffron-300 rounded-2xl p-4 space-y-2 shadow-2xs">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-extrabold text-saffron-900 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-saffron-600" />
                          <span>{corr.title}</span>
                        </span>
                        <span className="text-slate-400 font-semibold">{corr.date}</span>
                      </div>
                      <p className="text-slate-700 text-xs leading-relaxed bg-saffron-50/60 p-3 rounded-xl border border-saffron-100">
                        {corr.detail}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-sandstone-50 rounded-2xl border border-dashed border-sandstone-300 space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-indiaGreen-600 mx-auto" />
                  <span className="font-bold text-slate-800 text-sm block">No Corrigenda Issued Yet</span>
                  <p className="text-slate-500 text-xs max-w-sm mx-auto">
                    The original RFP specifications are current. TinyFish will alert you if any amendment is published before {tender.submissionDeadline}.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              {/* Readiness Progress Bar */}
              <div className="bg-sandstone-100 border border-sandstone-300 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-800">Bid Submission Readiness:</span>
                  <span className="text-saffron-700">{readinessPercent}% Ready ({completedDocsCount}/{totalDocsCount} documents)</span>
                </div>
                <div className="w-full h-2.5 bg-sandstone-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-saffron-500 to-indiaGreen-600 transition-all duration-300"
                    style={{ width: `${readinessPercent}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2.5">
                <span className="font-extrabold text-slate-800 uppercase tracking-wide text-[11px] block">
                  Mandatory Submission Documents (Click to toggle checklist):
                </span>

                {tender.mandatoryDocuments.map((doc, idx) => {
                  const isReady = docStates[doc.name];

                  return (
                    <div 
                      key={idx}
                      onClick={() => toggleDoc(doc.name)}
                      className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-center justify-between gap-3 ${
                        isReady 
                          ? 'bg-indiaGreen-50/50 border-indiaGreen-300' 
                          : 'bg-white border-sandstone-300 hover:border-sandstone-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center text-xs font-bold transition ${
                          isReady ? 'bg-indiaGreen-600 border-indiaGreen-600 text-white' : 'border-sandstone-400 bg-white'
                        }`}>
                          {isReady ? '✓' : ''}
                        </div>
                        <div>
                          <span className={`text-xs font-bold block ${isReady ? 'text-slate-900' : 'text-slate-700'}`}>
                            {doc.name}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            Category: {doc.type || 'Mandatory Compliance'}
                          </span>
                        </div>
                      </div>

                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        isReady ? 'bg-indiaGreen-100 text-indiaGreen-900' : 'bg-sandstone-200 text-slate-600'
                      }`}>
                        {isReady ? 'Uploaded / Ready' : 'Pending Action'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: TINYFISH TELEMETRY */}
          {activeTab === 'tinyfish' && (
            <div className="space-y-4">
              <div className="bg-slate-900 rounded-2xl p-5 text-white font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-indiaGreen-400 font-bold flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    <span>TinyFish Engine Telemetry: {tender.id}</span>
                  </span>
                  <span className="text-slate-400 text-[10px]">v0.48-production</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-slate-300">
                  <div className="bg-slate-800/80 p-3 rounded-xl">
                    <span className="text-slate-500 text-[10px] block">Raw HTML Size</span>
                    <span className="text-sm font-bold text-white">412.8 KB</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl">
                    <span className="text-slate-500 text-[10px] block">TinyFish Markdown Size</span>
                    <span className="text-sm font-bold text-indiaGreen-400">3.2 KB</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl">
                    <span className="text-slate-500 text-[10px] block">Token Savings</span>
                    <span className="text-sm font-bold text-saffron-400">{tender.tinyfishStatus.domTokensSaved}</span>
                  </div>
                </div>

                <div className="space-y-1 text-slate-400 text-[11px] pt-2">
                  <p className="text-slate-300 font-bold">API Sequence Executed:</p>
                  <p>1. <span className="text-saffron-400">GET /search</span> {`?domain=${encodeURIComponent(tender.portal)}&query=RFP`}</p>
                  <p>2. <span className="text-saffron-400">POST /fetch/content</span> → Bypass ASP.NET __VIEWSTATE and nested frames</p>
                  <p>3. <span className="text-indiaGreen-400">tinyfish agent run</span> → Corrigendum tab click and date timestamp inspection</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-6 border-t border-sandstone-200 bg-sandstone-50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyTender}
              className="px-3.5 py-2 rounded-xl bg-white border border-sandstone-300 hover:bg-sandstone-100 font-bold text-slate-700 transition cursor-pointer flex items-center gap-1.5"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-indiaGreen-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied Details' : 'Copy Bid Summary'}</span>
            </button>

            <a
              href={tender.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white border border-sandstone-300 hover:bg-sandstone-100 font-bold text-slate-700 transition cursor-pointer flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open on {tender.portal.split(' ')[0]}</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-saffron-600 hover:bg-saffron-700 text-white font-extrabold rounded-xl transition shadow-xs cursor-pointer active:scale-95"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
}
