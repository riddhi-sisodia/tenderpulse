import React, { useState } from 'react';
import Header from './components/Header';
import LandingHero from './components/LandingHero';
import BusinessOnboarding from './components/BusinessOnboarding';
import TenderRadar from './components/TenderRadar';
import BidPipelineView from './components/BidPipelineView';
import TinyFishTerminal from './components/TinyFishTerminal';

import TenderDetailsModal from './components/TenderDetailsModal';
import AuthModal from './components/AuthModal';
import { MOCK_TENDERS, INITIAL_COMPANY_PROFILE, DEMO_PERSONAS } from './data/mockTenders';
import { tinyfishClient } from './services/tinyfishService';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [tenders, setTenders] = useState(MOCK_TENDERS);
  const [selectedTender, setSelectedTender] = useState(null);
  const [companyProfile, setCompanyProfile] = useState(INITIAL_COMPANY_PROFILE);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  
  // Current user state (defaults to Demo Account for seamless hackathon testing)
  const [currentUser, setCurrentUser] = useState({
    name: "Aditi Rao",
    email: "aditi@apexcloud.in",
    businessName: "ApexCloud Innovations Pvt Ltd",
    type: "DPIIT Recognized Startup",
    isLoggedIn: true
  });

  // Run TinyFish scan
  const handleRunScan = async () => {
    setIsScanning(true);
    const portals = ['GeM', 'CPPP', 'IREPS', 'Delhi e-Tenders'];
    const keywords = ['Cloud AI', 'Analytics', 'Supplies', 'Turnover < 2Cr'];

    await tinyfishClient.searchGovernmentTenders(keywords, portals);
    setIsScanning(false);
    setActiveTab('radar');
  };

  // Complete onboarding / persona selection
  const handleCompleteOnboarding = (newProfile, userObj) => {
    setCompanyProfile(newProfile);
    setCurrentUser(userObj);

    // Recalculate match scores based on startup/turnover status
    const updated = tenders.map(tender => {
      let score = tender.matchScore;
      if (newProfile.type.includes('Startup')) {
        score = Math.min(99, score + 4);
      } else if (newProfile.type.includes('Small') || newProfile.type.includes('Micro')) {
        score = tender.estimatedValueNum <= 5000000 ? Math.min(96, score + 6) : Math.max(45, score - 20);
      } else if (newProfile.type.includes('Contractor')) {
        score = tender.estimatedValueNum >= 10000000 ? Math.min(95, score + 12) : score;
      }
      return { ...tender, matchScore: score };
    });
    setTenders(updated);

    // Move to Tender Radar
    setActiveTab('radar');
  };

  // Persona selected directly from Landing page
  const handleLandingPersonaSelect = (personaKey) => {
    const p = DEMO_PERSONAS.find(item => item.id === personaKey);
    if (p) {
      handleCompleteOnboarding(
        {
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
        },
        {
          name: p.name,
          email: `${p.name.toLowerCase().split(' ')[0]}@${p.businessName.toLowerCase().replace(/[^a-z]/g, '')}.in`,
          businessName: p.businessName,
          type: p.type,
          turnover: p.turnover,
          isLoggedIn: true
        }
      );
    } else {
      setActiveTab('onboarding');
    }
  };

  // Handle Login from AuthModal
  const handleLoginSuccess = (userObj) => {
    setCurrentUser(userObj);
    setCompanyProfile({
      ...companyProfile,
      name: userObj.businessName,
      type: userObj.type,
      turnover: userObj.turnover || companyProfile.turnover
    });
    setActiveTab('radar');
  };

  return (
    <div className="min-h-screen bg-sandstone-50 text-slate-900 flex flex-col font-sans selection:bg-saffron-500 selection:text-white">
      
      {/* Top Header with National Branding and Navigation Tabs */}
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onRunScan={handleRunScan}
        isScanning={isScanning}
        companyProfile={companyProfile}
        currentUser={currentUser}
        openAuthModal={() => setIsAuthModalOpen(true)}
        tenderCount={tenders.length}
      />

      {/* Main Spacious Content Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6">

        {/* Tab 1: Overview */}
        {activeTab === 'home' && (
          <LandingHero
            onStartFunnel={() => setActiveTab('onboarding')}
            onSelectPersona={handleLandingPersonaSelect}
          />
        )}

        {/* Tab 2: Business Profile */}
        {activeTab === 'onboarding' && (
          <div style={{display:'flex', flexDirection:'column', gap:20}}>
            <FeatureBanner
              icon="🏢"
              title="Business Profile Setup"
              desc="Tell TenderPulse about your company — your size, turnover, and certifications. This takes under 60 seconds and unlocks personalised tender matching and automatic EMD waiver detection."
              stats={[['30 sec','Setup time'],['3 Personas','MSME · Startup · Contractor'],['100%','EMD waiver if eligible']]}
              color="#FF9933"
            />
            <BusinessOnboarding
              onCompleteOnboarding={handleCompleteOnboarding}
              currentProfile={companyProfile}
            />
          </div>
        )}

        {/* Tab 3: Tender Radar */}
        {activeTab === 'radar' && (
          <div style={{display:'flex', flexDirection:'column', gap:20}}>
            <FeatureBanner
              icon="📡"
              title="Tender Radar — Live Matching Engine"
              desc="TinyFish continuously scans GeM, CPPP, Indian Railways (IREPS), and state portals 24/7. Every tender is scored 0–100% against your company profile. Green = qualified. Yellow = borderline. Red = ineligible."
              stats={[['15+ Portals','Monitored 24/7'],['97%','HTML noise removed'],['10 sec','Match score generated']]}
              color="#138808"
            />
            <TenderRadar
              tenders={tenders}
              onSelectTender={(tender) => setSelectedTender(tender)}
              companyProfile={companyProfile}
              onOpenHowItWorks={() => setActiveTab('home')}
            />
          </div>
        )}

        {/* Tab 4: Bid Kit */}
        {activeTab === 'pipeline' && (
          <div style={{display:'flex', flexDirection:'column', gap:20}}>
            <FeatureBanner
              icon="📄"
              title="Bid Kit & GFR Rule 170 EMD Waiver Generator"
              desc="Once you've found a matching tender, this tool auto-generates your legal exemption letter under Ministry of Finance General Financial Rules (GFR) 2017 Rule 170. Startups and MSMEs can submit this letter to get 100% Earnest Money Deposit waived — saving lakhs upfront per bid."
              stats={[['₹0 EMD','For eligible businesses'],['GFR 2017','Rule 170 compliant letters'],['10+ hrs','Saved per bid']]}
              color="#b06000"
            />
            <BidPipelineView
              tenders={tenders}
              onSelectTender={(tender) => setSelectedTender(tender)}
              companyProfile={companyProfile}
            />
          </div>
        )}

        {/* Tab 5: TinyFish Engine */}
        {activeTab === 'tinyfish' && (
          <div style={{display:'flex', flexDirection:'column', gap:20}}>
            <FeatureBanner
              icon="🐟"
              title="TinyFish Engine — Live API Intelligence Console"
              desc="Watch in real-time as TinyFish executes its 4-step pipeline: web_fetch fetches raw government portal HTML, parse_html strips 97% of bloat, extract_json structures the tender data, and diff_content detects corrigenda (amendments). This console shows live token usage and cost savings vs raw GPT-4 calls."
              stats={[['73%','Token cost saved'],['4 Steps','fetch → parse → extract → diff'],['Real-time','Live pipeline telemetry']]}
              color="#1a1a8c"
            />
            <TinyFishTerminal />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer style={{borderTop:'1px solid #e8e0d0', background:'#fff', padding:'20px 24px', marginTop:40}}>
        <div style={{maxWidth:1200, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12}}>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <span style={{fontWeight:800, fontSize:13, color:'#1a1a1a'}}>TenderPulse</span>
            <span style={{fontSize:11, color:'#aaa'}}>B2B Procurement Intelligence · India</span>
          </div>
          <span style={{fontSize:11, color:'#bbb'}}>🇮🇳 HackIIITD 2026 · Built with TinyFish API</span>
        </div>
      </footer>

      {/* Modals */}
      {selectedTender && (
        <TenderDetailsModal 
          tender={selectedTender}
          onClose={() => setSelectedTender(null)}
          companyProfile={companyProfile}
        />
      )}

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        currentUser={currentUser}
      />

    </div>
  );
}
