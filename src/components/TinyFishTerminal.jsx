import React, { useState } from 'react';
import { 
  Terminal, 
  Play, 
  RefreshCw, 
  Zap, 
  CheckCircle2, 
  Code, 
  Layers, 
  ShieldCheck, 
  Search,
  ExternalLink,
  Cpu
} from 'lucide-react';
import { TINYFISH_SAMPLE_LOGS } from '../data/mockTenders';

export default function TinyFishTerminal() {
  const [logs, setLogs] = useState(TINYFISH_SAMPLE_LOGS);
  const [isRunning, setIsRunning] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState('liveLogs'); // liveLogs | codeIntegration | architecture

  const runLiveSimulation = async () => {
    setIsRunning(true);
    setLogs([]);

    const steps = [
      {
        time: new Date().toLocaleTimeString(),
        step: "DISCOVERY",
        action: "TinyFish Search API (/search)",
        detail: "Querying site:eprocure.gov.in OR site:gem.gov.in for 'Cloud AI analytics RFP'. Found 14 active tenders.",
        status: "success",
        tokensSaved: "98.4%"
      },
      {
        time: new Date().toLocaleTimeString(),
        step: "BYPASS & RENDER",
        action: "TinyFish Content Fetch (/fetch/content)",
        detail: "Rendering dynamic ASP.NET WebForms session on eprocure.gov.in. Handling session cookies and __VIEWSTATE automatically.",
        status: "success",
        tokensSaved: "97.1%"
      },
      {
        time: new Date().toLocaleTimeString(),
        step: "TOKEN COMPRESSION",
        action: "Bloat Stripper Engine",
        detail: "Converted 412 KB nested government HTML table structure -> 3.2 KB clean Markdown. Token efficiency: 96.8% savings.",
        status: "success",
        tokensSaved: "96.8%"
      },
      {
        time: new Date().toLocaleTimeString(),
        step: "AGENT WORKFLOW",
        action: "TinyFish Browser Agent (tinyfish agent run)",
        detail: "Navigating interactive Corrigendum tab: Department -> State -> Active Amendments. Detected: 4-day deadline extension!",
        status: "highlight",
        tokensSaved: "100% human labor saved"
      },
      {
        time: new Date().toLocaleTimeString(),
        step: "QUALIFICATION VERDICT",
        action: "TenderPulse Match Engine",
        detail: "Cross-referenced with user profile. Rule 170 GFR exemption validated. Match Score: 94%.",
        status: "success",
        tokensSaved: "Instant"
      }
    ];

    for (const s of steps) {
      await new Promise(r => setTimeout(r, 600));
      setLogs(prev => [...prev, s]);
    }
    setIsRunning(false);
  };

  return (
    <div className="space-y-8 py-2 animate-in fade-in duration-300">
      
      {/* Header Strip */}
      <div className="bg-white border-2 border-sandstone-300 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indiaGreen-500 animate-pulse"></span>
            <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-indiaGreen-100 text-indiaGreen-900 border border-indiaGreen-300">
              Web Automation Engine: TinyFish v0.48
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            TinyFish Live Web Intelligence Console
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            See exactly how TinyFish searches, fetches dynamic JavaScript tables, and navigates government procurement portals that break traditional scrapers.
          </p>
        </div>

        <button
          onClick={runLiveSimulation}
          disabled={isRunning}
          className="px-6 py-3 bg-saffron-600 hover:bg-saffron-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition shadow-md shadow-saffron-600/20 flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-60"
        >
          <Play className={`w-4 h-4 ${isRunning ? 'animate-spin' : ''}`} />
          <span>{isRunning ? 'Running Live Extraction...' : 'Trigger Live TinyFish Scan'}</span>
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border-2 border-sandstone-200 rounded-2xl p-5 shadow-2xs">
          <span className="text-slate-500 text-xs font-bold block uppercase tracking-wide">
            1. Search API (/search)
          </span>
          <span className="text-2xl font-extrabold text-saffron-700 block mt-1">
            15+ Portals
          </span>
          <p className="text-xs text-slate-600 mt-1">
            Real-time domain filtered queries across GeM, CPPP, IREPS, and state boards.
          </p>
        </div>

        <div className="bg-white border-2 border-sandstone-200 rounded-2xl p-5 shadow-2xs">
          <span className="text-slate-500 text-xs font-bold block uppercase tracking-wide">
            2. Content Fetch (/fetch/content)
          </span>
          <span className="text-2xl font-extrabold text-indiaGreen-700 block mt-1">
            96.8% Token Savings
          </span>
          <p className="text-xs text-slate-600 mt-1">
            Bypasses ASP.NET tokens, converts 400KB+ nested HTML into 3KB clean Markdown.
          </p>
        </div>

        <div className="bg-white border-2 border-sandstone-200 rounded-2xl p-5 shadow-2xs">
          <span className="text-slate-500 text-xs font-bold block uppercase tracking-wide">
            3. Browser Agent (tinyfish agent)
          </span>
          <span className="text-2xl font-extrabold text-slate-900 block mt-1">
            Autonomous Watchdog
          </span>
          <p className="text-xs text-slate-600 mt-1">
            Follows multi-step pagination to download corrigenda addendums and revise dates.
          </p>
        </div>
      </div>

      {/* Sub Tab Switcher */}
      <div className="flex border-b border-sandstone-200 text-xs font-bold text-slate-600 gap-4">
        <button
          onClick={() => setActiveSubTab('liveLogs')}
          className={`pb-3 px-2 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
            activeSubTab === 'liveLogs' ? 'border-saffron-600 text-saffron-700' : 'border-transparent hover:text-slate-900'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Live Execution Logs</span>
        </button>

        <button
          onClick={() => setActiveSubTab('codeIntegration')}
          className={`pb-3 px-2 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
            activeSubTab === 'codeIntegration' ? 'border-saffron-600 text-saffron-700' : 'border-transparent hover:text-slate-900'
          }`}
        >
          <Code className="w-4 h-4" />
          <span>TinyFish Code Implementation</span>
        </button>
      </div>

      {/* Terminal Display */}
      {activeSubTab === 'liveLogs' ? (
        <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 font-mono text-xs text-white border-2 border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-indiaGreen-500 inline-block"></span>
              <span className="ml-2 text-slate-300 font-bold">tinyfish-agent-session: portal-poller-daemon</span>
            </div>
            <span className="text-[11px] text-indiaGreen-400">● 60 FPS Dynamic Stream</span>
          </div>

          <div className="space-y-3 max-h-[460px] overflow-y-auto">
            {logs.map((log, idx) => (
              <div 
                key={idx}
                className={`p-3.5 rounded-xl border transition ${
                  log.status === 'highlight' 
                    ? 'bg-saffron-950/40 border-saffron-500/50 text-saffron-200' 
                    : 'bg-slate-900/90 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-mono">[{log.time}]</span>
                    <span className={`px-2 py-0.2 rounded text-[10px] font-bold ${
                      log.status === 'highlight' ? 'bg-saffron-600 text-white' : 'bg-indiaGreen-900 text-indiaGreen-300'
                    }`}>
                      {log.step}
                    </span>
                    <span className="font-bold text-white">{log.action}</span>
                  </div>
                  {log.tokensSaved && (
                    <span className="text-[10px] text-indiaGreen-400 font-semibold">
                      Tokens Saved: {log.tokensSaved}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans mt-1">
                  {log.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Code Implementation SubTab */
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 font-mono text-xs text-slate-200 border-2 border-slate-800 shadow-xl space-y-4">
          <div className="text-saffron-400 font-bold">
            // Example Node.js / JavaScript calling TinyFish to monitor Indian government portals:
          </div>
          <pre className="text-slate-300 overflow-x-auto leading-relaxed bg-slate-950 p-5 rounded-2xl border border-slate-800">
{`import { TinyFish } from '@tinyfish/sdk';

const tinyfish = new TinyFish({ apiKey: process.env.TINYFISH_API_KEY });

// 1. Search CPPP and GeM portals directly
const activeBids = await tinyfish.search({
  query: 'Cloud AI Document Processing RFP',
  domains: ['eprocure.gov.in', 'gem.gov.in'],
  freshness: '24h'
});

// 2. Fetch tender page with dynamic ASP.NET state bypass
const cleanSpecs = await tinyfish.fetchContent({
  url: 'https://eprocure.gov.in/eprocure/app?page=FrontEndTendersByOrganisation',
  renderJs: true,
  stripBoilerplate: true // Reduces 412KB HTML -> 3.2KB Markdown
});

// 3. Autonomous Browser Agent watches for Corrigendum amendments
const corrigenda = await tinyfish.agent.run({
  task: 'Navigate to Corrigenda tab, extract amendment date and revised turnover clauses',
  startUrl: activeBids[0].url
});`}
          </pre>
        </div>
      )}

    </div>
  );
}
