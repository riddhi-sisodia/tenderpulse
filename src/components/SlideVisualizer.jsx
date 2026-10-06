import React, { useState } from 'react';
import { 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check, 
  Sparkles, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  FileCheck2,
  Building,
  AlertTriangle,
  Award,
  Coins
} from 'lucide-react';

export default function SlideVisualizer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);

  const slides = [
    {
      number: 1,
      title: "Title & Executive Summary",
      subtitle: "HackIIITD 2026 • Open Innovation Track • Powered by TinyFish",
      tagline: "TenderPulse: Autonomous B2B Procurement Intelligence for Indian MSMEs & Startups",
      content: (
        <div className="space-y-6">
          <div className="p-8 bg-saffron-50/70 border-2 border-saffron-200 rounded-3xl text-center space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-saffron-100 text-saffron-900 uppercase tracking-wider inline-block">
              🇮🇳 HackIIITD 2026 • National Innovation
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tender<span className="text-saffron-600">Pulse</span>
            </h1>
            <p className="text-slate-600 text-sm max-w-xl mx-auto font-medium leading-relaxed">
              Autonomous B2B Procurement Intelligence & Live Corrigendum Surveillance Engine Powered by the TinyFish API
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 bg-white border border-sandstone-300 rounded-2xl shadow-2xs">
              <span className="text-slate-400 block font-medium">Domain</span>
              <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">GovTech & B2B AI</span>
              <span className="text-saffron-700 font-semibold text-[11px]">Public Procurement (GeM / CPPP)</span>
            </div>
            <div className="p-4 bg-white border border-sandstone-300 rounded-2xl shadow-2xs">
              <span className="text-slate-400 block font-medium">Core Web Engine</span>
              <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">TinyFish API</span>
              <span className="text-indiaGreen-700 font-semibold text-[11px]">Search, Content Fetch & Agents</span>
            </div>
            <div className="p-4 bg-white border border-sandstone-300 rounded-2xl shadow-2xs">
              <span className="text-slate-400 block font-medium">Impact</span>
              <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">6.3 Crore MSMEs</span>
              <span className="text-saffron-700 font-semibold text-[11px]">Zero-Deposit Bidding & Win Radar</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: "Problem Statement",
      subtitle: "The ₹40 Lakh Crore Indian Public Procurement Bottleneck",
      tagline: "Why 85% of eligible Indian startups and MSMEs fail to win government contracts",
      content: (
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-rose-50 border-2 border-rose-200 rounded-2xl space-y-2">
              <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 font-bold flex items-center justify-center">1</div>
              <h4 className="font-extrabold text-rose-950 text-sm">Fragmented Portals</h4>
              <p className="text-slate-600 leading-relaxed">
                Tenders published across GeM, CPPP, IREPS (Railways), and 28 state procurement boards with no unified API.
              </p>
            </div>

            <div className="p-5 bg-amber-50 border-2 border-amber-200 rounded-2xl space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 font-bold flex items-center justify-center">2</div>
              <h4 className="font-extrabold text-amber-950 text-sm">Complex RFP Documents</h4>
              <p className="text-slate-600 leading-relaxed">
                80+ page RFP specifications with buried financial turnover thresholds, turnover calculations, and penalty clauses.
              </p>
            </div>

            <div className="p-5 bg-rose-50 border-2 border-rose-200 rounded-2xl space-y-2">
              <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 font-bold flex items-center justify-center">3</div>
              <h4 className="font-extrabold text-rose-950 text-sm">Corrigendum Disqualification</h4>
              <p className="text-slate-600 leading-relaxed">
                Bids disqualified on Day 1 because bidders missed last-minute addendums uploaded 48 hours prior to closing.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "Proposed Solution",
      subtitle: "TenderPulse: Autonomous Procurement Intelligence",
      tagline: "Empowering every Indian enterprise with enterprise-grade bidding capabilities",
      content: (
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-sandstone-50 border-2 border-sandstone-300 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-saffron-700 font-bold">
                <Zap className="w-4 h-4" />
                <span className="text-sm">Zero-Click Tender Discovery</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Continuous surveillance across 15+ portals matched against company profile, capabilities, and Udyam certification.
              </p>
            </div>

            <div className="p-5 bg-sandstone-50 border-2 border-sandstone-300 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-indiaGreen-700 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm">Autonomous Eligibility Match</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Evaluates 80+ page RFP requirements to generate a 0-100% Match Score with green/red flags and Rule 170 GFR exemptions.
              </p>
            </div>

            <div className="p-5 bg-sandstone-50 border-2 border-sandstone-300 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-saffron-700 font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm">Live Corrigendum Watchdog</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Polls active tender URLs every 6 hours to catch deadline extensions and relaxed turnover clauses instantly.
              </p>
            </div>

            <div className="p-5 bg-sandstone-50 border-2 border-sandstone-300 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-indiaGreen-700 font-bold">
                <Coins className="w-4 h-4" />
                <span className="text-sm">Statutory EMD Waiver Kit</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Generates legally binding formal letters under Rule 170 GFR 2017 to eliminate upfront security deposits.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: "How TinyFish is Integrated",
      subtitle: "The Core Web Automation Infrastructure (The Secret Sauce 🐟)",
      tagline: "Solving the dynamic government portal challenge that breaks standard HTTP scrapers",
      content: (
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-white border-2 border-sandstone-300 rounded-2xl space-y-2.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-saffron-100 text-saffron-800">
                1. Search API (/search)
              </span>
              <h4 className="font-extrabold text-slate-900 text-sm">Targeted Domain Discovery</h4>
              <p className="text-slate-600 leading-relaxed">
                Runs targeted domain queries across eprocure.gov.in and gem.gov.in. Surfaces newly published RFPs instantly.
              </p>
            </div>

            <div className="p-5 bg-white border-2 border-sandstone-300 rounded-2xl space-y-2.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indiaGreen-100 text-indiaGreen-800">
                2. Content Fetch (/fetch/content)
              </span>
              <h4 className="font-extrabold text-slate-900 text-sm">Dynamic Render & 97% Bloat Strip</h4>
              <p className="text-slate-600 leading-relaxed">
                Bypasses ASP.NET session tokens, renders heavy JavaScript tables, and compresses 400KB+ HTML into 3KB Markdown.
              </p>
            </div>

            <div className="p-5 bg-white border-2 border-sandstone-300 rounded-2xl space-y-2.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-ashokaGold-100 text-ashokaGold-800">
                3. Browser Agent (tinyfish agent)
              </span>
              <h4 className="font-extrabold text-slate-900 text-sm">Multi-Step Corrigenda Watchdog</h4>
              <p className="text-slate-600 leading-relaxed">
                Autonomously clicks through Department → Category → Active Bids → Corrigendum tab to extract revision dates.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: "End-to-End System Pipeline",
      subtitle: "From Portal Discovery to Bid Submission Kit",
      tagline: "5 automated stages transforming chaotic portal tables into winning submissions",
      content: (
        <div className="space-y-4 text-xs font-mono">
          <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl border-2 border-slate-800 space-y-3 leading-relaxed">
            <p className="text-saffron-400 font-bold">[Stage 1: User Onboarding]</p>
            <p className="pl-4 text-slate-400">└── Business Profile uploaded (Turnover, Udyam ID, DPIIT status, ISO certs)</p>
            
            <p className="text-indiaGreen-400 font-bold">[Stage 2: TinyFish Surveillance Engine]</p>
            <p className="pl-4 text-slate-400">└── TinyFish continuously polls GeM, CPPP, and state portals via /search</p>
            <p className="pl-4 text-slate-400">└── TinyFish /fetch/content renders dynamic JS & outputs clean Markdown specs</p>

            <p className="text-amber-400 font-bold">[Stage 3: Qualification Matching]</p>
            <p className="pl-4 text-slate-400">└── Cross-references turnover, past performance, and Rule 170 GFR exemptions</p>
            <p className="pl-4 text-slate-400">└── Computes 0-100% Match Score & Win Probability</p>

            <p className="text-cyan-400 font-bold">[Stage 4: Autonomous Corrigendum Watchdog]</p>
            <p className="pl-4 text-slate-400">└── TinyFish browser agent checks live tender page every 6 hours for amendments</p>

            <p className="text-emerald-400 font-bold">[Stage 5: Bid Submission Kit]</p>
            <p className="pl-4 text-slate-400">└── Generates pre-filled Rule 170 GFR EMD Exemption Letter & mandatory checklist</p>
          </div>
        </div>
      )
    },
    {
      number: 6,
      title: "Market Opportunity & TAM",
      subtitle: "The Untapped Indian B2B Procurement Economy",
      tagline: "Targeting 6.3 Crore MSMEs and 1.2 Lakh DPIIT registered startups in India",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-6 bg-white border-2 border-sandstone-300 rounded-2xl space-y-2 text-center">
            <span className="text-slate-400 font-bold uppercase text-[10px]">Total Addressable Market</span>
            <span className="text-3xl font-extrabold text-saffron-700 block">₹40 Lakh Cr</span>
            <p className="text-slate-600 mt-1">Annual public procurement across Indian state & central entities.</p>
          </div>

          <div className="p-6 bg-white border-2 border-sandstone-300 rounded-2xl space-y-2 text-center">
            <span className="text-slate-400 font-bold uppercase text-[10px]">GeM Portal Growth</span>
            <span className="text-3xl font-extrabold text-indiaGreen-700 block">₹4 Lakh Cr+</span>
            <p className="text-slate-600 mt-1">Gross Merchandise Value transacted through GeM in FY 2024-25 alone.</p>
          </div>

          <div className="p-6 bg-white border-2 border-sandstone-300 rounded-2xl space-y-2 text-center">
            <span className="text-slate-400 font-bold uppercase text-[10px]">Target User Base</span>
            <span className="text-3xl font-extrabold text-slate-900 block">6.3 Crore</span>
            <p className="text-slate-600 mt-1">Indian MSMEs seeking transparent, affordable access to public bids.</p>
          </div>
        </div>
      )
    },
    {
      number: 7,
      title: "Competitive Landscape",
      subtitle: "Why Traditional Scraping & Legacy Portals Fall Short",
      tagline: "TenderPulse vs. Traditional Tender Portals vs. Manual In-house Bidding",
      content: (
        <div className="overflow-x-auto text-xs">
          <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-sandstone-300">
            <thead>
              <tr className="bg-sandstone-100 text-slate-700 font-bold border-b border-sandstone-200">
                <th className="p-3">Capability</th>
                <th className="p-3 text-saffron-700 font-extrabold">TenderPulse (with TinyFish)</th>
                <th className="p-3 text-slate-500">Legacy Tender Portals</th>
                <th className="p-3 text-slate-500">Manual In-house Bidding</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sandstone-200 text-slate-600">
              <tr>
                <td className="p-3 font-bold text-slate-900">Dynamic JS & ASP.NET Bypass</td>
                <td className="p-3 text-indiaGreen-700 font-bold">✅ Flawless via TinyFish</td>
                <td className="p-3 text-rose-600 font-bold">❌ Frequent Captchas</td>
                <td className="p-3">Manual Click Exhaustion</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Eligibility Match Scoring</td>
                <td className="p-3 text-indiaGreen-700 font-bold">✅ 0-100% Instant Verdict</td>
                <td className="p-3 text-rose-600 font-bold">❌ None (Keyword search only)</td>
                <td className="p-3">10+ Hours reading RFP</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Live Corrigendum Watchdog</td>
                <td className="p-3 text-indiaGreen-700 font-bold">✅ 6-Hour Polling Watchdog</td>
                <td className="p-3 text-rose-600 font-bold">❌ Missed Addendums</td>
                <td className="p-3">❌ High Disqualification Risk</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Rule 170 GFR EMD Kit</td>
                <td className="p-3 text-indiaGreen-700 font-bold">✅ 1-Click Auto Letter</td>
                <td className="p-3 text-rose-600 font-bold">❌ None</td>
                <td className="p-3">Requires High-Fee Legal Draft</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      number: 8,
      title: "Interactive Live Demo & Next Steps",
      subtitle: "Ready for National Scale & Production Deployment",
      tagline: "Explore the live working prototype right now on localhost:5173",
      content: (
        <div className="space-y-4 text-xs">
          <div className="bg-sandstone-50 border-2 border-sandstone-300 rounded-2xl p-6 text-center space-y-3">
            <span className="px-3 py-1 bg-indiaGreen-100 text-indiaGreen-800 font-bold text-xs rounded-full">
              Working Prototype Live
            </span>
            <h4 className="font-extrabold text-slate-900 text-base">
              Explore Active Tenders, Live TinyFish Telemetry, and Auto-Generated EMD Letters
            </h4>
            <p className="text-slate-600 max-w-lg mx-auto leading-relaxed">
              Use the top navigation to switch personas, run live portal scans, inspect clause-by-clause criteria, and verify Rule 170 GFR compliance.
            </p>
          </div>
        </div>
      )
    }
  ];

  const current = slides[currentSlide];

  const handleCopySlide = () => {
    const text = `Slide ${current.number}: ${current.title}\nSubtitle: ${current.subtitle}\nTagline: ${current.tagline}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-2 animate-in fade-in duration-300">
      
      {/* Top Slide Navigation */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border-2 border-sandstone-300 shadow-2xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className="p-2 rounded-xl bg-sandstone-100 hover:bg-sandstone-200 text-slate-700 disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-bold text-slate-700">
            Slide {currentSlide + 1} of {slides.length}
          </span>
          <button
            onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-xl bg-sandstone-100 hover:bg-sandstone-200 text-slate-700 disabled:opacity-40 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={handleCopySlide}
          className="px-3 py-1.5 rounded-xl bg-sandstone-100 hover:bg-sandstone-200 text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-indiaGreen-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied Slide Text' : 'Copy Slide Text'}</span>
        </button>
      </div>

      {/* Main Slide Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-sandstone-300 shadow-lg space-y-6">
        <div className="border-b border-sandstone-200 pb-4 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-saffron-700 uppercase tracking-wide">
              Slide {current.number} • HackIIITD Presentation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {current.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            {current.subtitle}
          </p>
        </div>

        {current.content}
      </div>

    </div>
  );
}
