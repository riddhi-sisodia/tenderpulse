import React from 'react';
import { 
  Radio, 
  Home, 
  Building2, 
  Search, 
  Layers, 
  RefreshCw, 
  ShieldCheck, 
  Zap, 
  LogIn, 
  UserCheck, 
  FileText,
  Terminal,
  ExternalLink,
  Award
} from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  onRunScan, 
  isScanning, 
  companyProfile, 
  currentUser,
  openAuthModal,
  tenderCount
}) {
  return (
    <header className="border-b border-sandstone-200 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-xs">
      
      {/* Subtle National Tiranga Top Accent Bar */}
      <div className="h-1 w-full tiranga-stripe"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => setActiveTab('home')} 
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            {/* Custom Saffron & Gold Badge */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-saffron-500 to-saffron-700 text-white font-extrabold text-xl shadow-md shadow-saffron-500/20 group-hover:scale-105 transition">
              <Radio className="w-5 h-5 text-white" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-indiaGreen-600 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
                ✓
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold tracking-tight text-slate-900 font-sans">
                  Tender<span className="text-saffron-600">Pulse</span>
                </h1>
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-saffron-50 text-saffron-800 rounded-full border border-saffron-200 flex items-center gap-1">
                  <span>🇮🇳</span>
                  <span>National Procurement AI</span>
                </span>
              </div>
              <p className="text-xs text-slate-600 flex items-center gap-2 mt-0.5 font-medium">
                <span>GeM • CPPP • Railways • State Tenders</span>
                <span className="text-slate-300">•</span>
                <span className="text-indiaGreen-800 font-bold flex items-center gap-1 bg-indiaGreen-50 px-2 py-0.5 rounded text-[11px] border border-indiaGreen-200">
                  <Zap className="w-3 h-3 text-indiaGreen-600" />
                  Powered by TinyFish
                </span>
              </p>
            </div>
          </div>

          {/* User Controls & Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* Live Scan Button */}
            <button
              onClick={onRunScan}
              disabled={isScanning}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sandstone-100 hover:bg-sandstone-200 text-slate-800 font-bold text-xs transition border border-sandstone-300/80 cursor-pointer active:scale-95 disabled:opacity-60"
              title="Autonomous scan of GeM, CPPP & Railways"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-saffron-600 ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? 'Scanning Indian Portals...' : 'Scan Portals'}</span>
            </button>

            {/* User Account / Profile Badge */}
            {currentUser && currentUser.isLoggedIn ? (
              <div 
                onClick={openAuthModal}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-sandstone-50 border border-sandstone-300/80 hover:border-saffron-500 text-xs text-slate-800 cursor-pointer transition shadow-2xs group"
                title="Click to view or switch profile"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-bold flex items-center justify-center text-xs shadow-2xs">
                  {currentUser.name ? currentUser.name.charAt(0) : 'U'}
                </div>
                <div className="text-left leading-tight">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-slate-900 truncate max-w-[140px]">
                      {currentUser.businessName}
                    </span>
                    <span className="text-indiaGreen-600 text-[11px]">✓</span>
                  </div>
                  <span className="text-[10px] text-saffron-700 font-semibold block">
                    {currentUser.type.split('/')[0]} (Switch)
                  </span>
                </div>
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs transition shadow-sm cursor-pointer active:scale-95"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In / Register</span>
              </button>
            )}

          </div>

        </div>

        {/* Spacious, Beautiful Navigation Tabs */}
        <nav className="mt-3 pt-2 border-t border-sandstone-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
          
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Tab 1: How It Works & Home */}
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'home' 
                  ? 'bg-saffron-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-sandstone-100'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>How It Works & Process</span>
            </button>

            {/* Tab 2: Business Profile Selector */}
            <button
              onClick={() => setActiveTab('onboarding')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'onboarding' 
                  ? 'bg-saffron-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-sandstone-100'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Business Profile</span>
            </button>

            {/* Tab 3: Matched Tenders Radar */}
            <button
              onClick={() => setActiveTab('radar')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'radar' 
                  ? 'bg-saffron-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-sandstone-100'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Tender Radar</span>
              <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-saffron-100 text-saffron-900 font-extrabold">
                {tenderCount}
              </span>
            </button>

            {/* Tab 4: Bid Kit & EMD Waiver */}
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'pipeline' 
                  ? 'bg-saffron-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-sandstone-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Bid Kit & EMD Waiver</span>
            </button>

            {/* Tab 5: TinyFish Engine Console */}
            <button
              onClick={() => setActiveTab('tinyfish')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'tinyfish' 
                  ? 'bg-saffron-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-sandstone-100'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-indiaGreen-700" />
              <span>TinyFish Engine</span>
              <span className="text-[9px] bg-indiaGreen-100 text-indiaGreen-800 px-1.5 py-0.2 rounded font-extrabold">
                Live
              </span>
            </button>

          </div>

          {/* Hackathon Pitch Deck Button */}
          <div>
            <button
              onClick={() => setActiveTab('slides')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'slides' 
                  ? 'bg-indiaGreen-700 text-white shadow-xs' 
                  : 'bg-indiaGreen-50 text-indiaGreen-800 border border-indiaGreen-300 hover:bg-indiaGreen-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-indiaGreen-600" />
              <span>HackIIITD Pitch Deck</span>
              <span className="text-[10px] bg-indiaGreen-200/80 text-indiaGreen-900 px-1.5 py-0.2 rounded font-bold">
                8 Slides
              </span>
            </button>
          </div>

        </nav>

      </div>
    </header>
  );
}
