import React, { useState } from 'react';
import Header from './components/Header';
import LandingHero from './components/LandingHero';
import BusinessOnboarding from './components/BusinessOnboarding';
import TenderRadar from './components/TenderRadar';
import BidPipelineView from './components/BidPipelineView';
import TinyFishTerminal from './components/TinyFishTerminal';
import SlideVisualizer from './components/SlideVisualizer';
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
        
        {/* Tab 1: How It Works, Visual Process & Business Categorization */}
        {activeTab === 'home' && (
          <LandingHero 
            onStartFunnel={() => setActiveTab('onboarding')}
            onSelectPersona={handleLandingPersonaSelect}
          />
        )}

        {/* Tab 2: Business Profile & Qualification Setup */}
        {activeTab === 'onboarding' && (
          <BusinessOnboarding 
            onCompleteOnboarding={handleCompleteOnboarding}
            currentProfile={companyProfile}
          />
        )}

        {/* Tab 3: Matched Tenders Radar */}
        {activeTab === 'radar' && (
          <TenderRadar 
            tenders={tenders}
            onSelectTender={(tender) => setSelectedTender(tender)}
            companyProfile={companyProfile}
            onOpenHowItWorks={() => setActiveTab('home')}
          />
        )}

        {/* Tab 4: Bid Kit & Rule 170 GFR EMD Exemption Generator */}
        {activeTab === 'pipeline' && (
          <BidPipelineView 
            tenders={tenders}
            onSelectTender={(tender) => setSelectedTender(tender)}
            companyProfile={companyProfile}
          />
        )}

        {/* Tab 5: TinyFish Web Automation Live Intelligence Console */}
        {activeTab === 'tinyfish' && (
          <TinyFishTerminal />
        )}

        {/* Tab 6: Round 1 & 2 PPT Presentation Deck */}
        {activeTab === 'slides' && (
          <SlideVisualizer />
        )}

      </main>

      {/* Authorized National Footer */}
      <footer className="border-t border-sandstone-200 bg-white py-6 px-4 text-xs text-slate-500 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900">TenderPulse</span>
            <span>• National B2B Procurement Intelligence for Indian MSMEs & Startups</span>
          </div>

          <div className="flex items-center gap-2 text-indiaGreen-800 bg-indiaGreen-50 px-3 py-1 rounded-full border border-indiaGreen-300 font-bold text-[11px]">
            <span>Powered by TinyFish Web Automation API</span>
          </div>

          <div className="flex items-center gap-2">
            <span>🇮🇳 HackIIITD 2026 • Open Innovation</span>
          </div>
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
