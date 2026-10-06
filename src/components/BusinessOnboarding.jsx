import React, { useState } from 'react';
import { 
  Building2, 
  Store, 
  Rocket, 
  HardHat, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award,
  Sparkles,
  ChevronRight,
  Check,
  FileCheck2,
  Coins
} from 'lucide-react';
import { DEMO_PERSONAS } from '../data/mockTenders';

export default function BusinessOnboarding({ onCompleteOnboarding, currentProfile }) {
  const [selectedKey, setSelectedKey] = useState('startup');
  const [customMode, setCustomMode] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customTurnover, setCustomTurnover] = useState('1.5');
  const [customType, setCustomType] = useState('DPIIT Recognized Startup');
  const [customUdyam, setCustomUdyam] = useState('UDYAM-DL-08-0091823');

  const selectedPersona = DEMO_PERSONAS.find(p => p.id === selectedKey) || DEMO_PERSONAS[1];

  const handleApply = () => {
    if (customMode) {
      const newProfile = {
        name: customName || "My Business Pvt Ltd",
        type: customType,
        turnover: `₹${customTurnover} Cr`,
        turnoverValue: parseFloat(customTurnover) * 10000000,
        experienceYears: 3,
        certifications: ["Udyam Registered", "GST Compliant", "ISO 9001:2015"],
        capabilities: ["Custom Services", "Government Supplies"],
        location: "New Delhi, India",
        gemSellerId: "GEM-SELL-CUSTOM-2026",
        msmeUdyamId: customUdyam || "UDYAM-XX-00-0000000"
      };

      const userObj = {
        name: customName ? customName.split(' ')[0] : "Business Owner",
        email: "founder@company.in",
        businessName: customName || "My Business Pvt Ltd",
        type: customType,
        turnover: `₹${customTurnover} Cr`,
        isLoggedIn: true
      };

      onCompleteOnboarding(newProfile, userObj);
    } else {
      const p = selectedPersona;
      const newProfile = {
        name: p.businessName,
        type: p.type,
        turnover: p.turnover,
        turnoverValue: p.turnoverValue,
        experienceYears: p.experienceYears,
        certifications: p.certifications,
        capabilities: p.capabilities,
        location: p.location,
        gemSellerId: p.gemSellerId,
        msmeUdyamId: p.msmeUdyamId
      };

      const userObj = {
        name: p.name,
        email: `${p.name.toLowerCase().split(' ')[0]}@${p.businessName.toLowerCase().replace(/[^a-z]/g, '')}.in`,
        businessName: p.businessName,
        type: p.type,
        turnover: p.turnover,
        isLoggedIn: true
      };

      onCompleteOnboarding(newProfile, userObj);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4 animate-in fade-in duration-300">
      
      {/* Title & Introduction */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-saffron-100 text-saffron-900 border border-saffron-300 inline-flex items-center gap-1.5">
          <span>🇮🇳</span>
          <span>Step 2: Business Profile & Qualification Setup</span>
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          How Is Your Business Registered in India?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          TenderPulse automatically matches your turnover, certifications, and government exemptions (like 100% EMD fee waivers) based on your business classification.
        </p>
      </div>

      {/* Mode Switcher: 1-Click Persona vs Custom Business */}
      <div className="flex justify-center">
        <div className="bg-sandstone-200/80 p-1 rounded-2xl flex text-xs font-bold border border-sandstone-300">
          <button
            onClick={() => setCustomMode(false)}
            className={`px-5 py-2 rounded-xl transition cursor-pointer ${
              !customMode ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⚡ Pick a Ready-Made Indian Demo Persona
          </button>
          <button
            onClick={() => setCustomMode(true)}
            className={`px-5 py-2 rounded-xl transition cursor-pointer ${
              customMode ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ✏️ Enter Your Own Custom Company Details
          </button>
        </div>
      </div>

      {/* 1. READY-MADE PERSONAS */}
      {!customMode ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {DEMO_PERSONAS.map((persona) => {
              const isSelected = selectedKey === persona.id;
              const Icon = persona.id === 'small-biz' ? Store : persona.id === 'startup' ? Rocket : HardHat;

              return (
                <div
                  key={persona.id}
                  onClick={() => setSelectedKey(persona.id)}
                  className={`bg-white rounded-2xl p-6 transition duration-200 cursor-pointer flex flex-col justify-between border-2 relative ${
                    isSelected 
                      ? 'border-saffron-600 shadow-lg ring-4 ring-saffron-100' 
                      : 'border-sandstone-300 hover:border-sandstone-400 shadow-2xs'
                  }`}
                >
                  {persona.id === 'startup' && (
                    <div className="absolute top-3 right-3 bg-saffron-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                      Recommended
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                        isSelected ? 'bg-saffron-100 text-saffron-700' : 'bg-sandstone-100 text-slate-700'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-saffron-700 block">
                          {persona.badge}
                        </span>
                        <h3 className="font-extrabold text-base text-slate-900 leading-tight">
                          {persona.businessName}
                        </h3>
                      </div>
                    </div>

                    {/* Turnover & Location */}
                    <div className="bg-sandstone-50 p-3 rounded-xl border border-sandstone-200 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-500 block font-medium">Annual Turnover</span>
                        <span className="font-extrabold text-slate-900">{persona.turnover}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block font-medium">Location</span>
                        <span className="font-semibold text-slate-800 truncate block">{persona.location.split(',')[0]}</span>
                      </div>
                    </div>

                    {/* Key Perks */}
                    <div className="space-y-1.5 text-xs text-slate-600">
                      <span className="text-[11px] font-bold text-slate-800 block">Special Govt Privileges:</span>
                      <div className="space-y-1">
                        {persona.id === 'small-biz' && (
                          <>
                            <div className="flex items-center gap-1.5 text-indiaGreen-800 font-medium">
                              <Check className="w-3.5 h-3.5 text-indiaGreen-600 shrink-0" />
                              <span>100% EMD waived for small school & civic bids</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-indiaGreen-800 font-medium">
                              <Check className="w-3.5 h-3.5 text-indiaGreen-600 shrink-0" />
                              <span>Local purchase preference on GeM</span>
                            </div>
                          </>
                        )}

                        {persona.id === 'startup' && (
                          <>
                            <div className="flex items-center gap-1.5 text-indiaGreen-800 font-bold">
                              <Check className="w-3.5 h-3.5 text-indiaGreen-600 shrink-0" />
                              <span>Rule 170 GFR: ₹0 EMD deposit (Save lakhs!)</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-indiaGreen-800 font-medium">
                              <Check className="w-3.5 h-3.5 text-indiaGreen-600 shrink-0" />
                              <span>Exempt from 3-year prior experience clause</span>
                            </div>
                          </>
                        )}

                        {persona.id === 'contractor' && (
                          <>
                            <div className="flex items-center gap-1.5 text-indiaGreen-800 font-medium">
                              <Check className="w-3.5 h-3.5 text-indiaGreen-600 shrink-0" />
                              <span>Qualified for high-value ₹15Cr+ contracts</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-indiaGreen-800 font-medium">
                              <Check className="w-3.5 h-3.5 text-indiaGreen-600 shrink-0" />
                              <span>Indian Railways (IREPS) high-tier clearance</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Selection Indicator */}
                  <div className={`mt-5 pt-3 border-t text-xs font-bold flex items-center justify-between ${
                    isSelected ? 'border-saffron-200 text-saffron-700' : 'border-sandstone-100 text-slate-500'
                  }`}>
                    <span>{isSelected ? 'Selected Profile' : 'Click to Select'}</span>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      isSelected ? 'bg-saffron-600 text-white' : 'border border-sandstone-300'
                    }`}>
                      {isSelected ? '✓' : ''}
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

          {/* Action Box */}
          <div className="bg-sandstone-100 border border-sandstone-300 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-saffron-600 text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Active Selection:</span>
                <span className="font-extrabold text-slate-900 text-sm">
                  {selectedPersona.businessName} ({selectedPersona.type})
                </span>
              </div>
            </div>

            <button
              onClick={handleApply}
              className="w-full sm:w-auto px-7 py-3 bg-saffron-600 hover:bg-saffron-700 text-white font-extrabold text-sm rounded-xl transition shadow-md shadow-saffron-600/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Continue to Matched Tenders</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (
        /* 2. CUSTOM COMPANY DETAILS */
        <div className="bg-white rounded-3xl p-8 border-2 border-sandstone-300 shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="border-b border-sandstone-200 pb-4">
            <h3 className="text-lg font-bold text-slate-900">Enter Your Business Details</h3>
            <p className="text-xs text-slate-500 mt-1">
              We will recalculate match scores against all Indian government tenders.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-700 font-bold mb-1">Company / Firm Name</label>
              <input
                type="text"
                placeholder="e.g. Bharat Tech Solutions Pvt Ltd"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-sandstone-300 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 text-slate-900 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Annual Turnover (₹ Crores)</label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="e.g. 1.5"
                  value={customTurnover}
                  onChange={(e) => setCustomTurnover(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-sandstone-300 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Registration Type</label>
                <select
                  value={customType}
                  onChange={(e) => setCustomType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-sandstone-300 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 text-slate-900 text-sm bg-white"
                >
                  <option value="DPIIT Recognized Startup">DPIIT Recognized Startup (Rule 170 GFR)</option>
                  <option value="Micro / Small MSME Vendor">Micro / Small MSME (Udyam Verified)</option>
                  <option value="Established Class-A Contractor">General Contractor / Enterprise</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Udyam Registration Number (Optional)</label>
              <input
                type="text"
                placeholder="e.g. UDYAM-DL-08-0091823"
                value={customUdyam}
                onChange={(e) => setCustomUdyam(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-sandstone-300 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 text-slate-900 text-sm font-mono"
              />
            </div>

            <div className="pt-4">
              <button
                onClick={handleApply}
                className="w-full py-3 bg-saffron-600 hover:bg-saffron-700 text-white font-extrabold text-sm rounded-xl transition shadow-md shadow-saffron-600/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Save Profile & Scan Matched Tenders</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
