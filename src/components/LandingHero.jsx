import React, { useState } from 'react';
import { 
  Radio, 
  ArrowRight, 
  Store, 
  Rocket, 
  HardHat, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Sparkles, 
  Clock, 
  FileText, 
  Award, 
  Search, 
  Check, 
  HelpCircle,
  TrendingUp,
  Building,
  RefreshCw,
  Coins
} from 'lucide-react';

export default function LandingHero({ onStartFunnel, onSelectPersona }) {
  const [tenderValueSlider, setTenderValueSlider] = useState(150); // In Lakhs

  // EMD is generally 2% to 5% of tender value in India
  const estimatedEmdSavings = Math.round(tenderValueSlider * 0.02 * 100) / 100;

  return (
    <div className="space-y-14 py-4 animate-in fade-in duration-300">
      
      {/* 1. HERO BANNER: WARM INDIAN GOVERNMENT PROCUREMENT AESTHETICS */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sandstone-100 via-white to-sandstone-100/60 border border-sandstone-200 p-8 sm:p-12 shadow-sm">
        
        {/* Decorative subtle saffron & green glowing gradients */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-saffron-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-indiaGreen-500/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            
            {/* Authorized Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-saffron-100 text-saffron-900 border border-saffron-300">
                <span className="text-sm">🇮🇳</span>
                <span>Government of India Procurement AI</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-indiaGreen-100 text-indiaGreen-900 border border-indiaGreen-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-indiaGreen-700" />
                <span>Make in India & DPIIT Aligned</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Win High-Value <span className="text-saffron-600 underline decoration-saffron-300 decoration-wavy">Government Tenders</span> Without a Legal Team
            </h1>

            {/* Clear Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              India publishes over <strong className="text-slate-900 font-bold">₹40 Lakh Crore</strong> worth of public tenders every year on GeM, CPPP, and Railways. 
              TenderPulse monitors them 24/7, verifies your eligibility in 10 seconds, and ensures you never miss a sudden midnight amendment.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onStartFunnel}
                className="px-7 py-3.5 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-extrabold text-sm rounded-xl transition shadow-lg shadow-saffron-500/25 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Find Your Matched Tenders</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('how-it-works-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3.5 bg-white hover:bg-sandstone-100 text-slate-800 font-bold text-sm rounded-xl transition border border-sandstone-300 shadow-2xs flex items-center gap-2 cursor-pointer"
              >
                <span>How Does It Work?</span>
                <HelpCircle className="w-4 h-4 text-saffron-600" />
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 border-t border-sandstone-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indiaGreen-500"></span>
                <span>Rule 170 GFR EMD Waivers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-saffron-500"></span>
                <span>GeM & CPPP Live Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ashokaGold-500"></span>
                <span>Zero Prior Experience for Startups</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Graphic: Real Indian Tender Card Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white rounded-2xl border-2 border-sandstone-300 shadow-xl overflow-hidden">
              
              {/* Card Header Strip */}
              <div className="bg-gradient-to-r from-saffron-600 to-saffron-700 p-4 text-white">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <span>LIVE GE M TENDER • VERIFIED</span>
                  </span>
                  <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">
                    GEM/2026/B/894102
                  </span>
                </div>
                <h4 className="font-bold text-sm mt-1.5 line-clamp-1">
                  Cloud AI Analytics for National Informatics Centre
                </h4>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 text-xs">
                
                {/* Tender Numbers */}
                <div className="grid grid-cols-2 gap-3 bg-sandstone-50 p-3 rounded-xl border border-sandstone-200">
                  <div>
                    <span className="text-slate-500 text-[10px] block font-medium">Estimated Value</span>
                    <span className="text-base font-extrabold text-slate-900">₹1.85 Crore</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block font-medium">EMD Security Deposit</span>
                    <span className="text-xs font-bold text-indiaGreen-700 flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                      ₹0 (100% Waived)
                    </span>
                  </div>
                </div>

                {/* Instant Verdict Badges */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-indiaGreen-50 border border-indiaGreen-200 text-indiaGreen-900 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-indiaGreen-600" />
                      <span>Turnover Rule (₹1.2 Cr required)</span>
                    </span>
                    <span className="text-[11px] font-extrabold text-indiaGreen-700">Passed ✅</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-indiaGreen-50 border border-indiaGreen-200 text-indiaGreen-900 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-indiaGreen-600" />
                      <span>3-Year Experience Rule</span>
                    </span>
                    <span className="text-[11px] font-extrabold text-indiaGreen-700">Exempt for DPIIT ✅</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-saffron-50 border border-saffron-200 text-saffron-900 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-saffron-600" />
                      <span>Corrigendum-II Detected</span>
                    </span>
                    <span className="text-[10px] font-bold bg-saffron-200/80 px-1.5 py-0.5 rounded text-saffron-900">
                      Deadline +4 Days
                    </span>
                  </div>
                </div>

                {/* Overall Score */}
                <div className="pt-2 flex items-center justify-between border-t border-sandstone-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indiaGreen-600 text-white font-extrabold flex items-center justify-center text-xs">
                      94%
                    </div>
                    <div>
                      <span className="font-extrabold text-slate-900 block text-xs">High Win Probability</span>
                      <span className="text-[10px] text-slate-500">TinyFish verified 8 mins ago</span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 bg-saffron-600 text-white font-bold text-[11px] rounded-lg shadow-2xs">
                    Inspect Clauses
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 2. THE 4 SIMPLE STEPS: HOW TENDERPULSE WORKS FOR YOU */}
      <section id="how-it-works-section" className="space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-saffron-100 text-saffron-900 border border-saffron-200 inline-block">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How Any Indian Business Can Win with TenderPulse
          </h2>
          <p className="text-sm text-slate-600">
            Whether you run a local stationery shop, a civil construction firm, or a tech startup — we make public procurement effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white border-2 border-sandstone-200 rounded-2xl p-6 space-y-4 hover:border-saffron-500 transition duration-200 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-saffron-100 text-saffron-700 font-extrabold text-lg flex items-center justify-center border border-saffron-200">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Tell Us What You Supply
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enter your business name, approximate annual turnover, and Udyam or Startup certificate. No complicated legal paperwork needed.
              </p>
            </div>
            <div className="pt-3 border-t border-sandstone-100 text-[11px] text-saffron-700 font-bold flex items-center gap-1">
              <span>Takes less than 30 seconds</span>
              <Check className="w-3.5 h-3.5 text-indiaGreen-600" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border-2 border-sandstone-200 rounded-2xl p-6 space-y-4 hover:border-saffron-500 transition duration-200 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indiaGreen-100 text-indiaGreen-800 font-extrabold text-lg flex items-center justify-center border border-indiaGreen-200">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">
                TinyFish Monitors 15+ Portals
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                TinyFish AI crawls GeM, CPPP, Indian Railways (IREPS), and state e-tender portals 24/7, extracting active bids and bypassing complex ASP.NET tables.
              </p>
            </div>
            <div className="pt-3 border-t border-sandstone-100 text-[11px] text-indiaGreen-800 font-bold flex items-center gap-1">
              <span>97% HTML bloat eliminated</span>
              <Zap className="w-3.5 h-3.5 text-saffron-600" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border-2 border-sandstone-200 rounded-2xl p-6 space-y-4 hover:border-saffron-500 transition duration-200 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-ashokaGold-100 text-ashokaGold-800 font-extrabold text-lg flex items-center justify-center border border-ashokaGold-200">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Instant Qualification Verdict
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our AI compares the 80-page tender clauses against your company size. Get green flags for turnover, certifications, and 100% EMD fee waivers.
              </p>
            </div>
            <div className="pt-3 border-t border-sandstone-100 text-[11px] text-ashokaGold-800 font-bold flex items-center gap-1">
              <span>Saves 10+ hours per bid</span>
              <Check className="w-3.5 h-3.5 text-indiaGreen-600" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white border-2 border-sandstone-200 rounded-2xl p-6 space-y-4 hover:border-saffron-500 transition duration-200 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-saffron-100 text-saffron-700 font-extrabold text-lg flex items-center justify-center border border-saffron-200">
                4
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Corrigendum Watchdog
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If the government silently releases an amendment or extends a deadline 2 days before closing, TinyFish alerts you immediately so you never get disqualified.
              </p>
            </div>
            <div className="pt-3 border-t border-sandstone-100 text-[11px] text-saffron-700 font-bold flex items-center gap-1">
              <span>Zero accidental disqualifications</span>
              <ShieldCheck className="w-3.5 h-3.5 text-indiaGreen-600" />
            </div>
          </div>

        </div>

      </section>

      {/* 3. WHO IS THIS FOR? CHOOSE YOUR BUSINESS TYPE */}
      <section className="space-y-8 bg-sandstone-100/70 rounded-3xl p-6 sm:p-10 border border-sandstone-300">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-800 border border-sandstone-300 inline-block shadow-2xs">
            Tailored For Your Size
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Select Your Business Persona
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            TenderPulse adapts its matching rules and exemption logic based on your company classification:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Persona 1: Small Vendor */}
          <div 
            onClick={() => onSelectPersona('small-biz')}
            className="bg-white border-2 border-sandstone-300 hover:border-saffron-500 rounded-2xl p-6 space-y-4 transition duration-200 hover:shadow-lg cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-saffron-50 text-saffron-600 flex items-center justify-center font-bold border border-saffron-200 group-hover:scale-105 transition">
                <Store className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-saffron-100 text-saffron-800 border border-saffron-200 inline-block">
                🏪 Small Vendor / MSME
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-saffron-700 transition">
                "I supply office stationery, computer hardware, or cleaning materials"
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Govt schools, police stations, and civic offices buy supplies every week. TenderPulse surfaces local supply tenders with simple documentation and 100% EMD waiver.
              </p>
            </div>

            <div className="pt-4 border-t border-sandstone-100 flex items-center justify-between text-xs text-saffron-700 font-bold group-hover:translate-x-0.5 transition">
              <span>Try as Small Vendor (Gupta Supplies)</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Persona 2: Tech & AI Startup */}
          <div 
            onClick={() => onSelectPersona('startup')}
            className="bg-white border-2 border-saffron-500 rounded-2xl p-6 space-y-4 transition duration-200 hover:shadow-xl cursor-pointer group flex flex-col justify-between relative overflow-hidden ring-4 ring-saffron-100"
          >
            <div className="absolute top-3 right-3 bg-saffron-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              Top Match
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center font-bold border border-saffron-300 group-hover:scale-105 transition">
                <Rocket className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-saffron-100 text-saffron-900 border border-saffron-300 inline-block">
                🚀 DPIIT Tech Startup
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-saffron-700 transition">
                "We build software, AI analytics, cloud apps, or electronics"
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Under Government Rule 170 GFR 2017, recognized startups get <strong>100% Earnest Money Deposit (EMD) waived</strong> and prior turnover criteria relaxed!
              </p>
            </div>

            <div className="pt-4 border-t border-sandstone-100 flex items-center justify-between text-xs text-saffron-700 font-bold group-hover:translate-x-0.5 transition">
              <span>Try as Tech Startup (ApexCloud)</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Persona 3: Established Contractor */}
          <div 
            onClick={() => onSelectPersona('contractor')}
            className="bg-white border-2 border-sandstone-300 hover:border-indiaGreen-600 rounded-2xl p-6 space-y-4 transition duration-200 hover:shadow-lg cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indiaGreen-50 text-indiaGreen-700 flex items-center justify-center font-bold border border-indiaGreen-200 group-hover:scale-105 transition">
                <HardHat className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indiaGreen-100 text-indiaGreen-800 border border-indiaGreen-200 inline-block">
                🏢 Established Contractor
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-indiaGreen-700 transition">
                "We bid on construction, solar, or railway infrastructure"
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                TenderPulse monitors daily corrigenda across Indian Railways (IREPS) and state PWDs so your engineering team never misses a clause revision or deadline extension.
              </p>
            </div>

            <div className="pt-4 border-t border-sandstone-100 flex items-center justify-between text-xs text-indiaGreen-800 font-bold group-hover:translate-x-0.5 transition">
              <span>Try as Contractor (Malhotra Infra)</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>

      </section>

      {/* 4. INTERACTIVE EMD SAVINGS CALCULATOR (RULE 170 GFR 2017) */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-sandstone-200 shadow-sm space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indiaGreen-100 text-indiaGreen-900 border border-indiaGreen-300 text-xs font-bold mb-2">
              <Coins className="w-3.5 h-3.5 text-indiaGreen-700" />
              <span>Make in India Financial Privilege</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Calculate Your Direct Upfront EMD Cash Savings
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Under Ministry of Finance Rule 170 of General Financial Rules (GFR), MSMEs & DPIIT startups are completely exempt from paying Earnest Money Deposit.
            </p>
          </div>

          <div className="bg-sandstone-50 border border-sandstone-200 px-5 py-4 rounded-2xl text-center sm:text-right shrink-0">
            <span className="text-xs text-slate-500 font-semibold block">Your Upfront Cash Saved</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-indiaGreen-700">
              ₹{estimatedEmdSavings} Lakhs
            </span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Kept in your bank account!</span>
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-center text-xs font-bold text-slate-700">
            <span>Target Tender Estimated Value:</span>
            <span className="text-saffron-700 text-sm font-extrabold bg-saffron-50 px-2 py-0.5 rounded border border-saffron-200">
              ₹{tenderValueSlider} Lakhs {tenderValueSlider >= 100 ? `(₹${(tenderValueSlider / 100).toFixed(2)} Cr)` : ''}
            </span>
          </div>

          <input 
            type="range" 
            min="10" 
            max="1000" 
            step="10"
            value={tenderValueSlider}
            onChange={(e) => setTenderValueSlider(Number(e.target.value))}
            className="w-full h-2.5 bg-sandstone-200 rounded-lg appearance-none cursor-pointer accent-saffron-600"
          />

          <div className="flex justify-between text-[11px] text-slate-400 font-medium">
            <span>₹10 Lakhs (Micro Tenders)</span>
            <span>₹2.5 Cr (Mid-tier RFP)</span>
            <span>₹10 Crore (Major Enterprise Bid)</span>
          </div>
        </div>

      </section>

      {/* 5. SIDE-BY-SIDE: THE OLD PAINFUL WAY VS. TENDERPULSE */}
      <section className="space-y-6">
        
        <div className="text-center max-w-xl mx-auto space-y-1">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Why Indian Businesses Are Switching
          </h3>
          <p className="text-xs text-slate-500">
            The difference between winning government contracts and getting disqualified on Day 1:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* The Old Painful Way */}
          <div className="bg-rose-50/70 border-2 border-rose-200 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
              <span className="w-6 h-6 rounded-full bg-rose-200 flex items-center justify-center text-rose-900 text-xs">✕</span>
              <span>The Old, Painful Way (Manual Portal Search)</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0 mt-0.5">✕</span>
                <span>Spending 40+ hours per week manually refreshing GeM and CPPP portals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0 mt-0.5">✕</span>
                <span>Getting trapped in broken ASP.NET session timeouts and captcha loops.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0 mt-0.5">✕</span>
                <span>Reading 120-page RFP PDFs only to discover you miss one small turnover clause.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0 mt-0.5">✕</span>
                <span><strong>Disqualified on Day 1</strong> because you missed a corrigendum amendment uploaded 2 days prior.</span>
              </li>
            </ul>
          </div>

          {/* The TenderPulse Way */}
          <div className="bg-indiaGreen-50/70 border-2 border-indiaGreen-300 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-indiaGreen-900 font-bold text-sm">
              <span className="w-6 h-6 rounded-full bg-indiaGreen-200 flex items-center justify-center text-indiaGreen-900 text-xs">✓</span>
              <span>The TenderPulse Way (Powered by TinyFish)</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-800">
              <li className="flex items-start gap-2.5">
                <span className="text-indiaGreen-700 font-bold shrink-0 mt-0.5">✓</span>
                <span>TinyFish continuously monitors 15+ portals while you sleep.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indiaGreen-700 font-bold shrink-0 mt-0.5">✓</span>
                <span>Instant 0–100% Match Score based on your company size, turnover, and Udyam cert.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indiaGreen-700 font-bold shrink-0 mt-0.5">✓</span>
                <span>Automatic 100% EMD waiver verification under Rule 170 of General Financial Rules.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indiaGreen-700 font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Live Corrigendum Watchdog:</strong> Instant alert if dates change or criteria are relaxed.</span>
              </li>
            </ul>
          </div>

        </div>

      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="bg-gradient-to-r from-saffron-600 to-saffron-700 rounded-3xl p-8 sm:p-12 text-center text-white space-y-5 shadow-lg shadow-saffron-600/20">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Ready to Discover Your Next Government Contract?
        </h3>
        <p className="text-sm text-saffron-100 max-w-lg mx-auto">
          Start for free today. Select your company category and let TinyFish scan the nation's tenders for you.
        </p>
        <div className="pt-2">
          <button
            onClick={onStartFunnel}
            className="px-8 py-3.5 bg-white hover:bg-sandstone-100 text-slate-900 font-extrabold text-sm rounded-xl transition shadow-md cursor-pointer inline-flex items-center gap-2 active:scale-95"
          >
            <span>Proceed to Business Profile</span>
            <ArrowRight className="w-4 h-4 text-saffron-600" />
          </button>
        </div>
      </section>

    </div>
  );
}
