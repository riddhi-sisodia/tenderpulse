import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Download, 
  Copy, 
  Check, 
  Printer, 
  Building, 
  Coins, 
  Calendar, 
  ArrowRight,
  Sparkles,
  ExternalLink,
  Award
} from 'lucide-react';

export default function BidPipelineView({ tenders, onSelectTender, companyProfile }) {
  const [selectedTenderForKit, setSelectedTenderForKit] = useState(tenders[0]);
  const [copiedLetter, setCopiedLetter] = useState(false);
  const [letterLanguage, setLetterLanguage] = useState('en'); // en or hi

  const tender = selectedTenderForKit || tenders[0];

  const draftExemptionLetter = `TO:
The Procurement Officer / Tender Inviting Authority,
${tender.authority}
Reference: Tender No. ${tender.referenceNo} (${tender.id})
Subject: Request for 100% Exemption from Submission of Earnest Money Deposit (EMD) under Rule 170 of General Financial Rules (GFR), 2017 & Ministry of Finance Notifications

Respected Sir / Madam,

With reference to the subject tender for "${tender.title}", we, ${companyProfile.name}, hereby submit our technical and financial bid.

In accordance with:
1. Rule 170(i) of General Financial Rules (GFR), 2017 issued by Ministry of Finance, Department of Expenditure.
2. Ministry of MSME Public Procurement Policy (Order 2012 / Amendment 2018).
3. Department for Promotion of Industry and Internal Trade (DPIIT) notification F.No. 5(4)/2017-IED dated 11.04.2018 regarding exemption to startups.

We are registered as a recognized ${companyProfile.type} under:
- Udyam Registration Number: ${companyProfile.msmeUdyamId || 'UDYAM-DL-08-0091823'}
- DPIIT Recognition Number: ${companyProfile.dpiitNumber || 'DIPP104829'}
- GeM Seller ID: ${companyProfile.gemSellerId || 'GEM-SELL-DEL-2024-8841'}

Therefore, we are fully exempt from the requirement of depositing the Earnest Money Deposit (EMD) amounting to ${tender.emdAmount.split('(')[0].trim()}.

Enclosed herewith:
1. Copy of Valid Udyam / DPIIT Startup India Certificate.
2. Bid Security Declaration (Annexure-A).
3. Self-declaration on Non-Blacklisting.

We request you to kindly accept our bid without insistence on physical EMD deposit / Bank Guarantee.

Thanking You,
Yours Faithfully,

Authorized Signatory
For ${companyProfile.name}
GSTIN: ${companyProfile.gstin || '07AAACA9921B1Z5'}
Date: ${new Date().toLocaleDateString('en-IN')}`;

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(draftExemptionLetter);
    setCopiedLetter(true);
    setTimeout(() => setCopiedLetter(false), 2500);
  };

  return (
    <div className="space-y-8 py-2 animate-in fade-in duration-300">
      
      {/* Header Strip */}
      <div className="bg-white border-2 border-sandstone-300 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-saffron-100 text-saffron-900 border border-saffron-300 inline-flex items-center gap-1.5 mb-2">
            <span>🇮🇳</span>
            <span>Step 4: Bid Preparation Kit & Statutory Waivers</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Government Bid Kit & Exemption Letters
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Auto-generate legally binding exemption letters under Rule 170 of General Financial Rules (GFR 2017) to waive upfront security deposits.
          </p>
        </div>

        <div className="bg-indiaGreen-50 border border-indiaGreen-300 px-5 py-3 rounded-2xl text-xs">
          <span className="text-[10px] text-slate-500 font-bold block uppercase">Total EMD Saved Across Shortlist</span>
          <span className="text-xl font-extrabold text-indiaGreen-800">
            ₹15.26 Lakhs
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Shortlisted Tenders Selector */}
        <div className="lg:col-span-5 space-y-4">
          <span className="font-extrabold text-slate-800 uppercase tracking-wide text-xs block">
            Select Tender to Generate Bid Kit:
          </span>

          <div className="space-y-3">
            {tenders.slice(0, 4).map((t) => {
              const isSelected = selectedTenderForKit?.id === t.id;

              return (
                <div
                  key={t.id}
                  onClick={() => setSelectedTenderForKit(t)}
                  className={`bg-white rounded-2xl p-4.5 border-2 transition duration-200 cursor-pointer shadow-2xs space-y-2.5 ${
                    isSelected 
                      ? 'border-saffron-600 shadow-md ring-4 ring-saffron-100' 
                      : 'border-sandstone-300 hover:border-sandstone-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold border ${t.portalBadge}`}>
                      {t.portal.split(' ')[0]}
                    </span>
                    <span className="font-extrabold text-indiaGreen-800 bg-indiaGreen-50 px-2 py-0.5 rounded text-[11px] border border-indiaGreen-200">
                      {t.matchScore}% Match
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 line-clamp-1">
                    {t.title}
                  </h4>

                  <div className="flex justify-between items-center text-xs text-slate-500 pt-1 border-t border-sandstone-100">
                    <span>Value: <strong className="text-slate-800">{t.estimatedValue}</strong></span>
                    <span className="text-indiaGreen-700 font-bold">EMD Waived</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Pre-filled Rule 170 GFR Letter Generator */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white border-2 border-sandstone-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sandstone-200 pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-indiaGreen-100 text-indiaGreen-900 border border-indiaGreen-300 inline-block mb-1">
                  GFR 2017 Rule 170 Compliant
                </span>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                  Pre-filled EMD Exemption Formal Letter
                </h3>
                <p className="text-xs text-slate-500">
                  Ready to print on company letterhead or upload to GeM/CPPP portal.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLetter}
                  className="px-4 py-2 bg-saffron-600 hover:bg-saffron-700 text-white font-extrabold text-xs rounded-xl transition shadow-2xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  {copiedLetter ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLetter ? 'Copied to Clipboard!' : 'Copy Letter'}</span>
                </button>
              </div>
            </div>

            {/* Letter Preview Box */}
            <div className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 font-mono text-xs text-slate-800 whitespace-pre-wrap leading-relaxed max-h-[440px] overflow-y-auto selection:bg-saffron-200">
              {draftExemptionLetter}
            </div>

            {/* Accompanying Mandatory Checklist */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-extrabold text-slate-800 block">
                Attach Along With This Exemption Letter:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-sandstone-100 border border-sandstone-200">
                  <Check className="w-4 h-4 text-indiaGreen-600 shrink-0" />
                  <span className="font-semibold text-slate-800">Udyam Registration Certificate</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-sandstone-100 border border-sandstone-200">
                  <Check className="w-4 h-4 text-indiaGreen-600 shrink-0" />
                  <span className="font-semibold text-slate-800">DPIIT Recognition Certificate</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-sandstone-100 border border-sandstone-200">
                  <Check className="w-4 h-4 text-indiaGreen-600 shrink-0" />
                  <span className="font-semibold text-slate-800">Bid Security Declaration Annexure</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-sandstone-100 border border-sandstone-200">
                  <Check className="w-4 h-4 text-indiaGreen-600 shrink-0" />
                  <span className="font-semibold text-slate-800">Non-Blacklisting Affidavit</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
