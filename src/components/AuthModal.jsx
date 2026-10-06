import React, { useState } from 'react';
import { 
  X, 
  Store, 
  Rocket, 
  HardHat, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Mail, 
  Lock, 
  Building2, 
  Sparkles,
  Coins
} from 'lucide-react';
import { DEMO_PERSONAS } from '../data/mockTenders';

export default function AuthModal({ isOpen, onClose, onLoginSuccess, currentUser }) {
  if (!isOpen) return null;

  const [mode, setMode] = useState('login'); // login | signup
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('startup');
  const [turnover, setTurnover] = useState('1.5');

  const handleDemoLogin = (personaId) => {
    const persona = DEMO_PERSONAS.find(p => p.id === personaId) || DEMO_PERSONAS[1];
    
    const userObj = {
      name: persona.name,
      email: `${persona.name.toLowerCase().split(' ')[0]}@${persona.businessName.toLowerCase().replace(/[^a-z]/g, '')}.in`,
      businessName: persona.businessName,
      type: persona.type,
      turnover: persona.turnover,
      isLoggedIn: true
    };

    onLoginSuccess(userObj);
    onClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess({
      name: businessName ? businessName.split(' ')[0] : "Business Owner",
      email: email || "user@business.in",
      businessName: businessName || "My Business Pvt Ltd",
      type: businessType === 'small-biz' ? 'Micro / Small MSME Vendor' : businessType === 'startup' ? 'DPIIT Recognized Startup' : 'Class-A Enterprise Contractor',
      turnover: `₹${turnover} Cr`,
      isLoggedIn: true
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border-2 border-sandstone-300 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-sandstone-200 bg-sandstone-50/80 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-saffron-700 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>National Procurement Portal Account</span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 mt-1">
              {mode === 'login' ? 'Sign In to TenderPulse' : 'Register Your Business'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {mode === 'login' 
                ? 'Access your qualified government tenders and live amendment alerts' 
                : 'Join thousands of Indian MSMEs winning public contracts'}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-sandstone-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-sandstone-200 text-xs font-bold text-slate-600">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-3 text-center border-b-2 transition cursor-pointer ${
              mode === 'login' ? 'border-saffron-600 text-saffron-700 bg-saffron-50/30' : 'border-transparent hover:text-slate-900'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 py-3 text-center border-b-2 transition cursor-pointer ${
              mode === 'signup' ? 'border-saffron-600 text-saffron-700 bg-saffron-50/30' : 'border-transparent hover:text-slate-900'
            }`}
          >
            Register Business
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          
          {/* Quick 1-Click Demo Profiles (For Evaluators & Fast Testing) */}
          <div className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-4 space-y-2.5">
            <span className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wide block">
              ⚡ 1-Click Instant Demo Profiles (For Hackathon Judges):
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin('small-biz')}
                className="p-2.5 text-left bg-white border border-sandstone-200 rounded-xl hover:border-saffron-500 hover:shadow-xs transition cursor-pointer text-xs group"
              >
                <span className="font-extrabold text-slate-800 group-hover:text-saffron-700 block truncate">🏪 Small Vendor</span>
                <span className="text-[10px] text-slate-500 block">₹45L Turnover</span>
              </button>

              <button
                type="button"
                onClick={() => handleDemoLogin('startup')}
                className="p-2.5 text-left bg-white border-2 border-saffron-400 rounded-xl hover:border-saffron-600 hover:shadow-xs transition cursor-pointer text-xs group bg-saffron-50/20"
              >
                <span className="font-extrabold text-saffron-800 block truncate">🚀 Tech Startup</span>
                <span className="text-[10px] text-saffron-700 font-bold block">DPIIT Exempt</span>
              </button>

              <button
                type="button"
                onClick={() => handleDemoLogin('contractor')}
                className="p-2.5 text-left bg-white border border-sandstone-200 rounded-xl hover:border-indiaGreen-600 hover:shadow-xs transition cursor-pointer text-xs group"
              >
                <span className="font-extrabold text-slate-800 group-hover:text-indiaGreen-700 block truncate">🏢 Contractor</span>
                <span className="text-[10px] text-slate-500 block">₹15.8 Cr Turnover</span>
              </button>
            </div>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-sandstone-200"></div>
            <span className="flex-shrink mx-3 text-slate-400 text-xs">or continue with email credentials</span>
            <div className="flex-grow border-t border-sandstone-200"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs">
            {mode === 'signup' && (
              <div>
                <label className="block text-slate-700 font-bold mb-1">Company / Store Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sharma Hardware or Acme Tech Solutions"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-sandstone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 text-slate-900"
                />
              </div>
            )}

            <div>
              <label className="block text-slate-700 font-bold mb-1">Work / Business Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="owner@business.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 border border-sandstone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-3.5 py-2.5 border border-sandstone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 text-slate-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-saffron-600 hover:bg-saffron-700 text-white font-extrabold rounded-xl transition shadow-md shadow-saffron-600/20 cursor-pointer flex items-center justify-center gap-1.5 mt-2"
            >
              <span>{mode === 'login' ? 'Sign In to Dashboard' : 'Create Free Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}
