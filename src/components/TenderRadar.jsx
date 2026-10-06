import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Clock, 
  AlertTriangle, 
  FileText, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Building, 
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  HelpCircle,
  Coins,
  ChevronRight
} from 'lucide-react';

export default function TenderRadar({ 
  tenders, 
  onSelectTender, 
  companyProfile,
  onOpenHowItWorks
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [onlyQualifying, setOnlyQualifying] = useState(false);

  // Filter logic
  const filteredTenders = tenders.filter(tender => {
    const matchesSearch = 
      tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.authority.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.portal.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesCategory = true;
    if (selectedCategory === 'Startup Friendly') {
      matchesCategory = tender.emdAmount.includes('Exempt') || tender.clauses.some(c => c.requirement.includes('Startup'));
    } else if (selectedCategory === 'MSME Supplies') {
      matchesCategory = tender.sector.includes('Supplies') || tender.estimatedValueNum <= 5000000;
    } else if (selectedCategory === 'IT & Software') {
      matchesCategory = tender.sector.includes('IT') || tender.sector.includes('AI');
    } else if (selectedCategory === 'Healthcare') {
      matchesCategory = tender.sector.includes('Healthcare');
    } else if (selectedCategory === 'Infra & Railways') {
      matchesCategory = tender.sector.includes('Infrastructure') || tender.portal.includes('IREPS');
    }

    const matchesQualifying = onlyQualifying ? tender.matchScore >= 80 : true;

    return matchesSearch && matchesCategory && matchesQualifying;
  });

  const highMatchCount = tenders.filter(t => t.matchScore >= 80).length;

  return (
    <div className="space-y-8 py-2 animate-in fade-in duration-300">
      
      {/* 1. TOP WELCOME STRIP */}
      <div className="bg-white border-2 border-sandstone-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indiaGreen-600 animate-ping"></span>
            <span className="text-xs font-bold text-saffron-700 uppercase tracking-wide">
              Live National Tender Radar
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Matched Government Opportunities
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real-time procurement contracts matched against <strong className="text-slate-900 font-bold">{companyProfile.name}</strong> ({companyProfile.type})
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-indiaGreen-50 border border-indiaGreen-300 px-4 py-2 rounded-2xl text-xs">
            <CheckCircle2 className="w-4 h-4 text-indiaGreen-700" />
            <div>
              <span className="font-extrabold text-indiaGreen-900 block">{highMatchCount} Tenders Qualified</span>
              <span className="text-[10px] text-indiaGreen-700">100% EMD fee waiver eligible</span>
            </div>
          </div>

          <button
            onClick={onOpenHowItWorks}
            className="flex items-center gap-1.5 text-xs text-saffron-700 hover:text-saffron-800 font-bold px-3 py-2 rounded-xl bg-saffron-50 hover:bg-saffron-100 border border-saffron-200 transition cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>How Matching Works</span>
          </button>
        </div>
      </div>

      {/* 2. SEARCH & FILTER TOOLBAR */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tenders by keyword: 'computer', 'cleaning', 'cloud', 'hospital', 'railways'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border-2 border-sandstone-300 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs"
            />
          </div>

          {/* Toggle: Only High Match */}
          <button
            onClick={() => setOnlyQualifying(!onlyQualifying)}
            className={`px-4 py-3 rounded-2xl font-bold text-xs transition border flex items-center justify-center gap-2 cursor-pointer shadow-2xs ${
              onlyQualifying 
                ? 'bg-indiaGreen-700 text-white border-indiaGreen-800' 
                : 'bg-white text-slate-700 border-sandstone-300 hover:border-sandstone-400'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Only High Win Odds (80%+)</span>
          </button>

        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { id: 'All', label: 'All Portals' },
            { id: 'Startup Friendly', label: '🚀 Startup Friendly (Rule 170)' },
            { id: 'MSME Supplies', label: '🏪 MSME Supply Tenders' },
            { id: 'IT & Software', label: '💻 IT & AI Analytics' },
            { id: 'Healthcare', label: '🏥 Healthcare & Medical' },
            { id: 'Infra & Railways', label: '🏗️ Railways & Infra' }
          ].map(chip => (
            <button
              key={chip.id}
              onClick={() => setSelectedCategory(chip.id)}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition shrink-0 cursor-pointer ${
                selectedCategory === chip.id 
                  ? 'bg-saffron-600 text-white shadow-xs' 
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-sandstone-300 hover:bg-sandstone-100'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. TENDERS GRID: SPACIOUS, VIBRANT CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {filteredTenders.map((tender) => {
          const isHighMatch = tender.matchScore >= 80;
          
          return (
            <div 
              key={tender.id}
              className="bg-white border-2 border-sandstone-300 hover:border-saffron-500 rounded-3xl p-6 transition duration-200 hover:shadow-lg flex flex-col justify-between space-y-5 shadow-2xs group"
            >
              
              {/* Card Header: Portal & Timing */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  
                  {/* Portal Badge */}
                  <span className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold border ${tender.portalBadge}`}>
                    {tender.portal}
                  </span>

                  {/* Days left */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold bg-sandstone-100 px-2.5 py-0.5 rounded-lg border border-sandstone-200">
                    <Clock className="w-3.5 h-3.5 text-saffron-600" />
                    <span>{tender.submissionDeadline.split('(')[1]?.replace(')', '') || 'Active'}</span>
                  </div>

                </div>

                {/* Tender Title */}
                <h3 
                  onClick={() => onSelectTender(tender)}
                  className="font-extrabold text-base sm:text-lg text-slate-900 hover:text-saffron-700 transition cursor-pointer leading-snug"
                >
                  {tender.title}
                </h3>

                {/* Authority & Ref */}
                <div className="text-xs text-slate-600 flex items-start gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{tender.authority}</span>
                </div>

                {/* Corrigendum Warning Pill (If any) */}
                {tender.tinyfishStatus.hasCorrigendum && (
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-saffron-50 border border-saffron-200 text-saffron-900 text-xs font-semibold">
                    <AlertTriangle className="w-4 h-4 text-saffron-600 shrink-0" />
                    <span className="truncate">
                      TinyFish detected {tender.tinyfishStatus.corrigendumCount} corrigendum amendment(s)!
                    </span>
                  </div>
                )}

              </div>

              {/* Financial Specs & EMD Status */}
              <div className="bg-sandstone-50 border border-sandstone-200/90 rounded-2xl p-4 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 block font-medium">Estimated Contract Value</span>
                  <span className="text-base font-extrabold text-slate-900 block mt-0.5">
                    {tender.estimatedValue}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 block font-medium">Earnest Money Deposit (EMD)</span>
                  <span className="text-xs font-extrabold text-indiaGreen-700 flex items-center gap-1 mt-0.5">
                    <Coins className="w-3.5 h-3.5 text-indiaGreen-600 shrink-0" />
                    <span className="truncate">{tender.emdAmount}</span>
                  </span>
                </div>
              </div>

              {/* Match Score & CTA Footer */}
              <div className="pt-4 border-t border-sandstone-200 flex items-center justify-between gap-3">
                
                {/* Match Score */}
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-extrabold text-sm shadow-2xs ${
                    isHighMatch 
                      ? 'bg-indiaGreen-100 text-indiaGreen-900 border border-indiaGreen-300' 
                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}>
                    {tender.matchScore}%
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block text-xs">
                      {tender.matchVerdict}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      TinyFish synced {tender.tinyfishStatus.lastScanned}
                    </span>
                  </div>
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => onSelectTender(tender)}
                  className="px-4 py-2.5 bg-saffron-600 hover:bg-saffron-700 text-white font-extrabold text-xs rounded-xl transition shadow-2xs flex items-center gap-1.5 cursor-pointer active:scale-95 group-hover:shadow-md"
                >
                  <span>Check If You Qualify</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}
