import React from 'react';
import { 
  Building2, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  FileCheck, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  HelpCircle,
  TrendingUp,
  XCircle
} from 'lucide-react';

export default function HowItWorks({ onGetStarted }) {
  return (
    <div className="space-y-12 py-4">
      
      {/* Hero Explainer Banner */}
      <div className="bg-gradient-to-r from-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
        <div className="max-w-2xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-indigo-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Built for Everyone: From Small Shops to Tech Startups</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            How Government Tenders Work — <br className="hidden sm:inline" />
            <span className="text-indigo-300">Made Simple in 4 Easy Steps</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            The Indian Government buys over ₹40 Lakh Crore worth of supplies every year (from office furniture and medical supplies to AI software). You no longer need a law degree or a bidding agency to win them.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onGetStarted}
              className="px-6 py-3 bg-white text-indigo-900 hover:bg-slate-100 font-bold text-sm rounded-xl transition shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Active Tenders Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 text-xs text-indigo-200 px-3 py-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Powered by TinyFish Web Automation</span>
            </div>
          </div>
        </div>

        {/* Decorative background shape */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* 4 Steps Section */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">The Process</span>
          <h2 className="text-2xl font-bold text-slate-900">How TenderPulse Works for You</h2>
          <p className="text-xs text-slate-500">From finding the right contract to submitting your bid without stress</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition relative">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center text-base border border-indigo-100">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">Tell Us About Your Business</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enter your annual turnover, category (e.g. Small MSME, DPIIT Startup, or Contractor), and what products or services you provide.
            </p>
            <div className="text-[11px] text-indigo-600 font-medium bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">
              💡 Takes under 60 seconds
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center text-base border border-emerald-100">
              2
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full w-fit">
              <Zap className="w-3 h-3 text-emerald-600" />
              <span>TinyFish Engine</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">We Scan 15+ Portals 24/7</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              TinyFish navigates through <strong>GeM</strong>, <strong>eProcure (CPPP)</strong>, <strong>Railways</strong>, and <strong>Delhi Govt</strong> websites continuously so you never miss an RFP.
            </p>
            <div className="text-[11px] text-emerald-700 font-medium bg-emerald-50/50 p-2 rounded-lg border border-emerald-100">
              🔍 Replaces 3 hours of daily manual search
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition relative">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-base border border-blue-100">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">Instant Qualification Verdict</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instead of reading 100 confusing legal pages, TenderPulse tells you in simple green and red highlights: <strong>Do you qualify? Can you get the deposit waived?</strong>
            </p>
            <div className="text-[11px] text-blue-700 font-medium bg-blue-50/50 p-2 rounded-lg border border-blue-100">
              ⚡ 0 to 100% Match Score
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition relative">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 font-bold flex items-center justify-center text-base border border-amber-100">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-base">Never Miss a Sudden Rule Change</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When departments issue "corrigenda" (last-minute deadline extensions or relaxed turnover rules), TinyFish detects it immediately and alerts you.
            </p>
            <div className="text-[11px] text-amber-700 font-medium bg-amber-50/50 p-2 rounded-lg border border-amber-100">
              🛡️ Prevents accidental disqualification
            </div>
          </div>

        </div>
      </div>

      {/* Comparison: Old Way vs TenderPulse Way */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900">Why Businesses Love TenderPulse</h3>
          <p className="text-xs text-slate-500 mt-1">Comparing manual tender hunting with TinyFish-powered automation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Old Way */}
          <div className="p-5 bg-rose-50/50 border border-rose-100 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
              <XCircle className="w-5 h-5 text-rose-500" />
              <span>The Old, Painful Way (Manual)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Browsing 10+ slow government websites with broken search filters every morning.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Reading 80 to 120 page legal PDF tenders to find basic eligibility clauses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Spending days on a bid only to get disqualified because a date changed quietly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>High fees paid to tender broker agencies (₹25,000 to ₹1 Lakh per bid).</span>
              </li>
            </ul>
          </div>

          {/* TenderPulse Way */}
          <div className="p-5 bg-emerald-50/50 border border-emerald-200 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>The TenderPulse Way (With TinyFish)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Instant matching</strong>: See only contracts that fit your exact business size and turnover.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>TinyFish AI Extraction</strong>: Converts dense legal PDFs into a 1-minute summary.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Corrigendum Watchdog</strong>: 24/7 autonomous monitoring of deadline changes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Free for Small Businesses</strong>: Democratizing government procurement across India.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}
