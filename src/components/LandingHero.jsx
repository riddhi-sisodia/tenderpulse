import React, { useState } from 'react';
import {
  ArrowRight, Store, Rocket, HardHat, ShieldCheck,
  CheckCircle2, AlertTriangle, Zap, Check, HelpCircle, Coins
} from 'lucide-react';

const CONTENT = {
  en: {
    badge: '🇮🇳 Government Procurement AI',
    headline: ['Win High-Value', 'Government Tenders', 'Without a Legal Team'],
    sub: 'India publishes ₹40 Lakh Crore in tenders yearly. TenderPulse finds your match in seconds.',
    cta: 'Find My Matched Tenders',
    howLabel: 'How It Works',
    processTitle: 'Procurement Made Effortless',
    processSub: 'Four steps. Zero paperwork. Zero prior experience needed.',
    steps: [
      {
        n: '1', color: '#FF9933', bg: '#fff8ef',
        title: 'Tell Us What You Supply',
        highlight: '⏱ Takes less than 30 seconds'
      },
      {
        n: '2', color: '#138808', bg: '#f0faf0',
        title: 'TinyFish Monitors 15+ Portals',
        highlight: '🤖 97% HTML bloat eliminated'
      },
      {
        n: '3', color: '#b06000', bg: '#fffbef',
        title: 'Instant Qualification Verdict',
        highlight: '📋 Saves 10+ hours per bid'
      },
      {
        n: '4', color: '#c0392b', bg: '#fff5f5',
        title: 'Corrigendum Watchdog',
        highlight: '🛡 Zero accidental disqualifications'
      }
    ],
    personaTitle: 'Select Your Business Type',
    personas: [
      {
        id: 'small-biz', icon: <Store style={{width:22,height:22}}/>, color:'#FF9933',
        badge:'🏪 Small Vendor / MSME',
        heading: '"I supply stationery, hardware, or cleaning materials"',
        highlight: '100% EMD waiver for MSME registered businesses'
      },
      {
        id: 'startup', icon: <Rocket style={{width:22,height:22}}/>, color:'#e07800',
        badge:'🚀 DPIIT Tech Startup',
        heading: '"We build software, AI, cloud apps, or electronics"',
        highlight: '100% EMD waived + turnover rules relaxed under GFR Rule 170',
        featured: true
      },
      {
        id: 'contractor', icon: <HardHat style={{width:22,height:22}}/>, color:'#138808',
        badge:'🏢 Established Contractor',
        heading: '"We bid on construction, solar, or railway infra"',
        highlight: 'Live corrigenda alerts across IREPS and state PWDs'
      }
    ],
    emdTitle: 'Calculate Your EMD Savings',
    emdSub: 'Under GFR Rule 170, MSMEs & DPIIT Startups pay ₹0 EMD deposit.',
    emdLabel: 'Target Tender Value',
    emdSaved: 'Your Cash Saved',
    ctaBanner: 'Ready to Discover Your Next Government Contract?',
    ctaBtn: 'Set Up Business Profile'
  },
  hi: {
    badge: '🇮🇳 सरकारी खरीद AI',
    headline: ['बड़े सरकारी टेंडर जीतें', 'बिना किसी कानूनी टीम के'],
    sub: 'भारत हर साल ₹40 लाख करोड़ के टेंडर प्रकाशित करता है। TenderPulse आपका मिलान सेकंडों में करता है।',
    cta: 'मेरे मिलान वाले टेंडर खोजें',
    howLabel: 'यह कैसे काम करता है',
    processTitle: 'खरीद प्रक्रिया अब आसान',
    processSub: 'चार कदम। शून्य कागजी कार्रवाई। कोई पूर्व अनुभव आवश्यक नहीं।',
    steps: [
      {
        n: '1', color: '#FF9933', bg: '#fff8ef',
        title: 'बताएं आप क्या आपूर्ति करते हैं',
        highlight: '⏱ 30 सेकंड से भी कम समय लगता है'
      },
      {
        n: '2', color: '#138808', bg: '#f0faf0',
        title: 'TinyFish 15+ पोर्टल की निगरानी करता है',
        highlight: '🤖 97% HTML अव्यवस्था समाप्त'
      },
      {
        n: '3', color: '#b06000', bg: '#fffbef',
        title: 'तत्काल पात्रता निर्णय',
        highlight: '📋 प्रति बोली 10+ घंटे बचाता है'
      },
      {
        n: '4', color: '#c0392b', bg: '#fff5f5',
        title: 'संशोधन निगरानी (Corrigendum Watchdog)',
        highlight: '🛡 कोई आकस्मिक अयोग्यता नहीं'
      }
    ],
    personaTitle: 'अपना व्यवसाय प्रकार चुनें',
    personas: [
      {
        id: 'small-biz', icon: <Store style={{width:22,height:22}}/>, color:'#FF9933',
        badge:'🏪 छोटे विक्रेता / MSME',
        heading: '"मैं स्टेशनरी, हार्डवेयर या सफाई सामग्री की आपूर्ति करता हूं"',
        highlight: 'MSME पंजीकृत व्यवसायों के लिए 100% EMD छूट'
      },
      {
        id: 'startup', icon: <Rocket style={{width:22,height:22}}/>, color:'#e07800',
        badge:'🚀 DPIIT टेक स्टार्टअप',
        heading: '"हम सॉफ्टवेयर, AI, क्लाउड ऐप या इलेक्ट्रॉनिक्स बनाते हैं"',
        highlight: '100% EMD माफ + GFR नियम 170 के तहत टर्नओवर नियम शिथिल',
        featured: true
      },
      {
        id: 'contractor', icon: <HardHat style={{width:22,height:22}}/>, color:'#138808',
        badge:'🏢 स्थापित ठेकेदार',
        heading: '"हम निर्माण, सौर, या रेलवे इंफ्रा पर बोली लगाते हैं"',
        highlight: 'IREPS और राज्य PWD में लाइव संशोधन अलर्ट'
      }
    ],
    emdTitle: 'अपनी EMD बचत की गणना करें',
    emdSub: 'GFR नियम 170 के तहत, MSME और DPIIT स्टार्टअप ₹0 EMD जमा करते हैं।',
    emdLabel: 'लक्षित टेंडर मूल्य',
    emdSaved: 'आपकी बचत',
    ctaBanner: 'अपना अगला सरकारी अनुबंध खोजने के लिए तैयार हैं?',
    ctaBtn: 'व्यवसाय प्रोफ़ाइल सेट करें'
  }
};

export default function LandingHero({ onStartFunnel, onSelectPersona }) {
  const [lang, setLang] = useState('en');
  const [tenderValueSlider, setTenderValueSlider] = useState(150);
  const t = CONTENT[lang];
  const emdSavings = Math.round(tenderValueSlider * 0.02 * 100) / 100;

  return (
    <div style={{display:'flex', flexDirection:'column', gap:48, paddingTop:8}}>

      {/* ── LANG TOGGLE ── */}
      <div style={{display:'flex', justifyContent:'flex-end'}}>
        <div style={{
          display:'flex', alignItems:'center', gap:4,
          background:'#f5f0e8', borderRadius:10, padding:4,
          border:'1px solid #e0d5c0'
        }}>
          {['en','hi'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding:'5px 14px', borderRadius:7, fontWeight:700, fontSize:12,
              background: lang === l ? '#FF9933' : 'transparent',
              color: lang === l ? '#fff' : '#888',
              border: 'none', cursor:'pointer', transition:'all 0.15s',
              letterSpacing: l === 'hi' ? '0.3px' : 0
            }}>
              {l === 'en' ? 'English' : 'हिंदी'}
            </button>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #fffbf5 0%, #fff 50%, #f5fff5 100%)',
        border: '1px solid #e8dfc8', borderRadius: 24, padding: '48px 40px',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* decorative blobs */}
        <div style={{position:'absolute',top:-60,right:-60,width:240,height:240,borderRadius:'50%',background:'rgba(255,153,51,0.08)',filter:'blur(40px)',pointerEvents:'none'}}/>
        <div style={{position:'absolute',bottom:-60,left:-60,width:240,height:240,borderRadius:'50%',background:'rgba(19,136,8,0.07)',filter:'blur(40px)',pointerEvents:'none'}}/>

        <div style={{display:'grid', gridTemplateColumns:'1fr auto', gap:40, alignItems:'center', position:'relative', zIndex:1}}>
          <div>
            <span style={{
              display:'inline-block', fontSize:11, fontWeight:700,
              background:'#fff8ef', color:'#c06000',
              border:'1px solid #ffd799', borderRadius:20,
              padding:'3px 12px', marginBottom:16
            }}>
              {t.badge}
            </span>

            <h1 style={{fontSize:40, fontWeight:900, lineHeight:1.15, color:'#1a1a1a', margin:'0 0 16px', letterSpacing:'-1px'}}>
              {t.headline.map((line, i) => (
                <span key={i} style={{display:'block', color: i === 1 ? '#FF9933' : '#1a1a1a'}}>
                  {line}
                </span>
              ))}
            </h1>

            <p style={{fontSize:15, color:'#666', maxWidth:520, lineHeight:1.6, margin:'0 0 28px'}}>
              {t.sub}
            </p>

            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <button onClick={onStartFunnel} style={{
                display:'flex', alignItems:'center', gap:8,
                padding:'12px 24px', borderRadius:12,
                background:'linear-gradient(135deg, #FF9933, #e07800)',
                color:'#fff', fontWeight:800, fontSize:13, border:'none',
                cursor:'pointer', boxShadow:'0 4px 14px rgba(255,153,51,0.4)'
              }}>
                {t.cta} <ArrowRight style={{width:15,height:15}}/>
              </button>
              <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior:'smooth'})} style={{
                display:'flex', alignItems:'center', gap:8,
                padding:'12px 20px', borderRadius:12,
                background:'#fff', color:'#444', fontWeight:700, fontSize:13,
                border:'1px solid #ddd', cursor:'pointer'
              }}>
                {t.howLabel} <HelpCircle style={{width:14,height:14,color:'#FF9933'}}/>
              </button>
            </div>

            <div style={{display:'flex', gap:20, marginTop:24, paddingTop:20, borderTop:'1px solid #e8dfc8', flexWrap:'wrap'}}>
              {[['#138808','Rule 170 GFR EMD Waivers'],['#FF9933','GeM & CPPP Live Sync'],['#b06000','Zero Experience for Startups']].map(([c,l])=>(
                <div key={l} style={{display:'flex',alignItems:'center',gap:6,fontSize:11,fontWeight:600,color:'#555'}}>
                  <span style={{width:7,height:7,borderRadius:'50%',background:c,flexShrink:0}}/>
                  {l}
                </div>
              ))}
            </div>
          </div>

          {/* Live tender preview card */}
          <div style={{minWidth:280, maxWidth:310}}>
            <div style={{background:'#fff', border:'2px solid #e8dfc8', borderRadius:16, overflow:'hidden', boxShadow:'0 8px 32px rgba(0,0,0,0.08)'}}>
              <div style={{background:'linear-gradient(135deg,#FF9933,#e07800)', padding:'14px 16px', color:'#fff'}}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:10,fontWeight:700,marginBottom:6,opacity:0.9}}>
                  <span>● LIVE GeM TENDER</span>
                  <span>GEM/2026/B/894102</span>
                </div>
                <div style={{fontSize:12,fontWeight:700,lineHeight:1.3}}>Cloud AI Analytics — National Informatics Centre</div>
              </div>
              <div style={{padding:14, display:'flex', flexDirection:'column', gap:10, fontSize:11}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,background:'#fdf6ee',padding:10,borderRadius:10}}>
                  <div>
                    <div style={{color:'#999',fontSize:9,fontWeight:600,marginBottom:2}}>Estimated Value</div>
                    <div style={{fontWeight:800,fontSize:15,color:'#1a1a1a'}}>₹1.85 Cr</div>
                  </div>
                  <div>
                    <div style={{color:'#999',fontSize:9,fontWeight:600,marginBottom:2}}>EMD Deposit</div>
                    <div style={{fontWeight:700,color:'#138808',fontSize:12}}>✓ ₹0 Waived</div>
                  </div>
                </div>
                {[['✓','Turnover Rule','Passed ✅','#e8f5e9','#138808'],['✓','3-Yr Experience','Exempt (DPIIT) ✅','#e8f5e9','#138808'],['⚠','Corrigendum-II','Deadline +4 Days','#fff8ef','#c06000']].map(([ic,label,val,bg,col])=>(
                  <div key={label} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'6px 10px',background:bg,borderRadius:8,fontSize:10,fontWeight:600}}>
                    <span style={{color:col}}>{ic} {label}</span>
                    <span style={{color:col,fontWeight:700}}>{val}</span>
                  </div>
                ))}
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:8,borderTop:'1px solid #eee'}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <div style={{width:32,height:32,borderRadius:'50%',background:'#138808',color:'#fff',fontWeight:800,fontSize:10,display:'flex',alignItems:'center',justifyContent:'center'}}>94%</div>
                    <div style={{fontSize:10,fontWeight:700,color:'#1a1a1a'}}>High Win Probability</div>
                  </div>
                  <span style={{background:'#FF9933',color:'#fff',fontSize:10,fontWeight:700,padding:'4px 10px',borderRadius:7}}>Inspect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS: 4 STEPS ── */}
      <section id="how-it-works">
        <div style={{textAlign:'center', marginBottom:32}}>
          <span style={{
            fontSize:11, fontWeight:700, background:'#fff8ef', color:'#c06000',
            border:'1px solid #ffd799', borderRadius:20, padding:'3px 14px',
            display:'inline-block', marginBottom:10
          }}>
            Simple 4-Step Process
          </span>
          <h2 style={{fontSize:28, fontWeight:900, color:'#1a1a1a', margin:'0 0 8px', letterSpacing:'-0.5px'}}>
            {t.processTitle}
          </h2>
          <p style={{fontSize:13, color:'#888', maxWidth:400, margin:'0 auto'}}>
            {t.processSub}
          </p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16}}>
          {t.steps.map((step) => (
            <div key={step.n} style={{
              background:'#fff', border:'2px solid #eee', borderRadius:16,
              padding:20, display:'flex', flexDirection:'column', gap:12,
              transition:'border-color 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=step.color; e.currentTarget.style.boxShadow=`0 4px 16px ${step.color}22`;}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='#eee'; e.currentTarget.style.boxShadow='none';}}
            >
              <div style={{
                width:40, height:40, borderRadius:10,
                background:step.bg, color:step.color,
                fontWeight:900, fontSize:18,
                display:'flex', alignItems:'center', justifyContent:'center',
                border:`1.5px solid ${step.color}33`
              }}>
                {step.n}
              </div>
              <h3 style={{fontSize:13, fontWeight:800, color:'#1a1a1a', margin:0, lineHeight:1.35}}>
                {step.title}
              </h3>
              {/* HIGHLIGHTED STAT ONLY — no paragraph text */}
              <div style={{
                fontSize:11, fontWeight:700, color:step.color,
                background:step.bg, padding:'6px 10px', borderRadius:8,
                border:`1px solid ${step.color}22`, marginTop:'auto'
              }}>
                {step.highlight}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PERSONA SELECTOR ── */}
      <section style={{background:'#fdf6ee', borderRadius:24, padding:'40px 36px', border:'1px solid #e8dfc8'}}>
        <div style={{textAlign:'center', marginBottom:28}}>
          <h2 style={{fontSize:24, fontWeight:900, color:'#1a1a1a', margin:'0 0 6px'}}>{t.personaTitle}</h2>
          <p style={{fontSize:12, color:'#888', margin:0}}>TenderPulse adapts its rules based on your company type</p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16}}>
          {t.personas.map(p => (
            <div key={p.id} onClick={() => onSelectPersona(p.id)} style={{
              background:'#fff', borderRadius:16, padding:22,
              border: p.featured ? `2.5px solid ${p.color}` : '2px solid #e8dfc8',
              cursor:'pointer', position:'relative', transition:'all 0.2s',
              boxShadow: p.featured ? `0 4px 20px ${p.color}22` : 'none'
            }}
            onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow=`0 8px 24px ${p.color}22`; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow= p.featured ? `0 4px 20px ${p.color}22` : 'none'; }}
            >
              {p.featured && (
                <div style={{
                  position:'absolute', top:12, right:12,
                  background:p.color, color:'#fff',
                  fontSize:9, fontWeight:800, padding:'2px 8px', borderRadius:20
                }}>TOP MATCH</div>
              )}
              <div style={{
                width:40,height:40,borderRadius:10,marginBottom:10,
                background:`${p.color}15`,color:p.color,
                display:'flex',alignItems:'center',justifyContent:'center',
                border:`1.5px solid ${p.color}30`
              }}>
                {p.icon}
              </div>
              <span style={{
                fontSize:10, fontWeight:700, color:p.color,
                background:`${p.color}12`, border:`1px solid ${p.color}30`,
                borderRadius:20, padding:'2px 10px', display:'inline-block', marginBottom:8
              }}>
                {p.badge}
              </span>
              <h3 style={{fontSize:13, fontWeight:700, color:'#1a1a1a', margin:'0 0 10px', lineHeight:1.4}}>
                {p.heading}
              </h3>
              {/* HIGHLIGHTED STAT ONLY */}
              <div style={{
                fontSize:11, fontWeight:700, color:p.color,
                background:`${p.color}10`, padding:'6px 10px',
                borderRadius:8, border:`1px solid ${p.color}20`
              }}>
                {p.highlight}
              </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',marginTop:12,color:p.color,fontSize:11,fontWeight:700}}>
                Try Demo <ArrowRight style={{width:12,height:12,marginLeft:4}}/>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EMD CALCULATOR ── */}
      <section style={{background:'#fff', border:'2px solid #e8dfc8', borderRadius:24, padding:'36px 40px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:20, marginBottom:28}}>
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:11,fontWeight:700,color:'#138808',background:'#e8f5e9',border:'1px solid #c8e6c9',borderRadius:20,padding:'3px 12px',marginBottom:10}}>
              <Coins style={{width:12,height:12}}/> Make in India Financial Privilege
            </div>
            <h3 style={{fontSize:22, fontWeight:900, color:'#1a1a1a', margin:'0 0 6px'}}>{t.emdTitle}</h3>
            <p style={{fontSize:12, color:'#888', maxWidth:460, margin:0}}>{t.emdSub}</p>
          </div>
          <div style={{background:'#f0faf0', border:'1.5px solid #c8e6c9', borderRadius:14, padding:'14px 22px', textAlign:'center', flexShrink:0}}>
            <div style={{fontSize:11, color:'#888', fontWeight:600, marginBottom:4}}>{t.emdSaved}</div>
            <div style={{fontSize:28, fontWeight:900, color:'#138808'}}>₹{emdSavings} L</div>
            <div style={{fontSize:10, color:'#aaa'}}>Kept in your bank account</div>
          </div>
        </div>

        <div>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:12,fontWeight:700,color:'#444',marginBottom:10}}>
            <span>{t.emdLabel}:</span>
            <span style={{color:'#FF9933', background:'#fff8ef', padding:'2px 10px', borderRadius:8, border:'1px solid #ffd799'}}>
              ₹{tenderValueSlider}L {tenderValueSlider >= 100 ? `(₹${(tenderValueSlider/100).toFixed(2)} Cr)` : ''}
            </span>
          </div>
          <input type="range" min="10" max="1000" step="10"
            value={tenderValueSlider}
            onChange={e => setTenderValueSlider(Number(e.target.value))}
            style={{width:'100%', height:6, accentColor:'#FF9933', cursor:'pointer'}}
          />
          <div style={{display:'flex',justifyContent:'space-between',fontSize:10,color:'#bbb',marginTop:6}}>
            <span>₹10L (Micro)</span><span>₹2.5 Cr (Mid)</span><span>₹10 Cr (Enterprise)</span>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{
        background:'linear-gradient(135deg, #FF9933, #e07800)',
        borderRadius:24, padding:'48px 40px', textAlign:'center', color:'#fff'
      }}>
        <h3 style={{fontSize:26, fontWeight:900, margin:'0 0 12px', letterSpacing:'-0.5px'}}>{t.ctaBanner}</h3>
        <p style={{fontSize:13, opacity:0.85, margin:'0 0 24px'}}>
          {lang === 'en' ? 'Free to start. Select your business type and let TinyFish scan the nation\'s tenders.' : 'शुरू करने के लिए मुफ्त। अपना व्यवसाय प्रकार चुनें और TinyFish को देशभर के टेंडर स्कैन करने दें।'}
        </p>
        <button onClick={onStartFunnel} style={{
          display:'inline-flex', alignItems:'center', gap:8,
          background:'#fff', color:'#e07800', fontWeight:800, fontSize:14,
          padding:'13px 28px', borderRadius:12, border:'none', cursor:'pointer',
          boxShadow:'0 4px 16px rgba(0,0,0,0.15)'
        }}>
          {t.ctaBtn} <ArrowRight style={{width:15,height:15}}/>
        </button>
      </section>

    </div>
  );
}
