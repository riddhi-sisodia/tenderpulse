import React from 'react';
import {
  Radio,
  Home,
  Building2,
  Search,
  RefreshCw,
  Zap,
  LogIn,
  FileText,
  Terminal,
  ChevronDown,
  User
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
  const navTabs = [
    { id: 'home',       label: 'Overview',        icon: Home },
    { id: 'onboarding', label: 'Business Profile', icon: Building2 },
    { id: 'radar',      label: 'Tender Radar',     icon: Search,    badge: tenderCount },
    { id: 'pipeline',   label: 'Bid Kit',          icon: FileText },
    { id: 'tinyfish',   label: 'TinyFish Engine',  icon: Terminal,  tag: 'Live' },
  ];

  return (
    <header style={{
      background: '#fff',
      borderBottom: '1px solid #e8e0d0',
      position: 'sticky',
      top: 0,
      zIndex: 40,
      boxShadow: '0 1px 12px rgba(0,0,0,0.06)'
    }}>
      {/* Tiranga accent bar */}
      <div style={{height: 3, background: 'linear-gradient(90deg, #FF9933 33%, #fff 33%, #fff 66%, #138808 66%)'}} />

      <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 24px'}}>

        {/* Top Row: Logo + Actions */}
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 0'}}>

          {/* ── LOGO ── */}
          <div
            onClick={() => setActiveTab('home')}
            style={{display:'flex', alignItems:'center', gap:12, cursor:'pointer'}}
          >
            {/* Icon Badge */}
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: 'linear-gradient(135deg, #FF9933 0%, #e07800 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(255,153,51,0.35)',
              flexShrink: 0
            }}>
              <Radio style={{width:20, height:20, color:'#fff'}} />
            </div>

            {/* Brand Text */}
            <div>
              <div style={{display:'flex', alignItems:'center', gap:8}}>
                <span style={{fontSize:20, fontWeight:800, color:'#1a1a1a', letterSpacing:'-0.5px', fontFamily:'Inter, sans-serif'}}>
                  Tender<span style={{color:'#FF9933'}}>Pulse</span>
                </span>
                <span style={{
                  fontSize:10, fontWeight:700, padding:'2px 8px',
                  background:'#fff8ef', color:'#c06000', border:'1px solid #ffd799',
                  borderRadius:20, letterSpacing:'0.3px'
                }}>
                  🇮🇳 Procurement AI
                </span>
              </div>
              <p style={{fontSize:11, color:'#888', margin:'2px 0 0', fontWeight:500}}>
                GeM · CPPP · Railways · State Portals
              </p>
            </div>
          </div>

          {/* ── RIGHT ACTIONS ── */}
          <div style={{display:'flex', alignItems:'center', gap:10}}>

            {/* Scan Button */}
            <button
              onClick={onRunScan}
              disabled={isScanning}
              style={{
                display:'flex', alignItems:'center', gap:6,
                padding:'8px 16px', borderRadius:10,
                background: '#fdf6ee', border:'1px solid #e8d8bc',
                color:'#5a3e00', fontWeight:700, fontSize:12,
                cursor:'pointer', transition:'all 0.15s'
              }}
            >
              <RefreshCw style={{width:13, height:13, color:'#FF9933', animation: isScanning ? 'spin 1s linear infinite' : 'none'}} />
              {isScanning ? 'Scanning...' : 'Scan Portals'}
            </button>

            {/* Account / Login */}
            {currentUser && currentUser.isLoggedIn ? (
              <button
                onClick={openAuthModal}
                style={{
                  display:'flex', alignItems:'center', gap:8,
                  padding:'7px 14px 7px 10px', borderRadius:10,
                  background:'linear-gradient(135deg, #fff8ef, #fff3e2)',
                  border:'1.5px solid #ffc97a', cursor:'pointer',
                  transition:'all 0.15s', boxShadow:'0 2px 8px rgba(255,153,51,0.12)'
                }}
              >
                {/* Avatar */}
                <div style={{
                  width:30, height:30, borderRadius:8,
                  background:'linear-gradient(135deg, #FF9933, #e07800)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#fff', fontWeight:800, fontSize:14, flexShrink:0
                }}>
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div style={{textAlign:'left', lineHeight:1.3}}>
                  <div style={{fontWeight:700, fontSize:12, color:'#1a1a1a', maxWidth:140, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                    {currentUser.businessName}
                  </div>
                  <div style={{fontSize:10, color:'#138808', fontWeight:600}}>
                    {currentUser.type.split('/')[0].trim()} ✓
                  </div>
                </div>
                <ChevronDown style={{width:12, height:12, color:'#aaa', marginLeft:2}} />
              </button>
            ) : (
              <button
                onClick={openAuthModal}
                style={{
                  display:'flex', alignItems:'center', gap:7,
                  padding:'9px 20px', borderRadius:10,
                  background:'linear-gradient(135deg, #FF9933, #e07800)',
                  color:'#fff', fontWeight:700, fontSize:13,
                  border:'none', cursor:'pointer',
                  boxShadow:'0 3px 10px rgba(255,153,51,0.4)',
                  transition:'all 0.15s'
                }}
              >
                <User style={{width:14, height:14}} />
                Sign In
              </button>
            )}
          </div>
        </div>

        {/* ── NAV TABS ── */}
        <nav style={{
          borderTop:'1px solid #f0e8d8',
          display:'flex', alignItems:'center', gap:4,
          padding:'8px 0'
        }}>
          {navTabs.map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display:'flex', alignItems:'center', gap:6,
                  padding:'7px 14px', borderRadius:8,
                  fontWeight: active ? 700 : 600,
                  fontSize:12,
                  background: active ? '#FF9933' : 'transparent',
                  color: active ? '#fff' : '#555',
                  border:'none', cursor:'pointer',
                  transition:'all 0.15s',
                  whiteSpace:'nowrap'
                }}
                onMouseEnter={e => { if(!active) e.currentTarget.style.background='#fdf6ee'; e.currentTarget.style.color='#1a1a1a'; }}
                onMouseLeave={e => { if(!active) { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#555'; } }}
              >
                <Icon style={{width:13, height:13, flexShrink:0}} />
                {tab.label}
                {tab.badge !== undefined && (
                  <span style={{
                    fontSize:10, fontWeight:800,
                    background: active ? 'rgba(255,255,255,0.25)' : '#fff3e2',
                    color: active ? '#fff' : '#c06000',
                    padding:'1px 6px', borderRadius:20,
                    marginLeft:2
                  }}>
                    {tab.badge}
                  </span>
                )}
                {tab.tag && (
                  <span style={{
                    fontSize:9, fontWeight:700,
                    background: active ? 'rgba(255,255,255,0.25)' : '#e8f5e9',
                    color: active ? '#fff' : '#138808',
                    padding:'1px 5px', borderRadius:4,
                    marginLeft:2, letterSpacing:'0.3px'
                  }}>
                    {tab.tag}
                  </span>
                )}
              </button>
            );
          })}

          {/* TinyFish credit — far right, minimal */}
          <div style={{marginLeft:'auto', display:'flex', alignItems:'center', gap:5, opacity:0.65}}>
            <Zap style={{width:11, height:11, color:'#FF9933'}} />
            <span style={{fontSize:10, fontWeight:600, color:'#888', letterSpacing:'0.2px'}}>
              Powered by TinyFish API
            </span>
          </div>
        </nav>

      </div>
    </header>
  );
}
