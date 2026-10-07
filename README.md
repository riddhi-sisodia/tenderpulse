# 🇮🇳 TenderPulse — AI-Powered Procurement Intelligence for Indian MSMEs



[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TinyFish](https://img.shields.io/badge/TinyFish-API%20Integrated-FF6B35)](https://tinyfish.io)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 🧠 What is TenderPulse?

TenderPulse is an **autonomous B2B procurement intelligence agent** that empowers Indian startups and MSMEs to discover, qualify for, and win high-value government and enterprise tenders — **without a dedicated legal or bidding team**.

### 💡 The Real-World Problem

India publishes **₹40 Lakh Crore+** worth of tenders annually across portals like:
- **GeM** (Government e-Marketplace)
- **CPPP** (eprocure.gov.in)
- **State boards** (Delhi, UP, Maharashtra)
- **PSUs** (Railways, Defense, Power)

These portals have:
- No standardized public APIs
- Dynamic JavaScript tables requiring deep pagination
- Frequent "corrigenda" (last-minute amendments) buried in nested links

**An SME can spend 40 hours preparing a 100-page bid and still be disqualified on Day 1** — just because they missed a revised turnover clause updated 2 days prior.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🎯 **Live Tender Radar** | Real-time scraping & monitoring of GeM, CPPP, Railways |
| 🤖 **AI Eligibility Engine** | Persona-based scoring — MSME, Startup, Contractor |
| ⚠️ **Corrigenda Watchdog** | Instant alerts when amendments change bid terms |
| 📄 **GFR 170 Bid Kit** | Auto-generates legal exemption letters (GFR 2017 Rule 170) |
| 🐟 **TinyFish Console** | Live API telemetry dashboard with token savings visualizer |
| 📊 **Bid Pipeline** | Kanban-style pipeline: Tracking → Applied → Won/Lost |
| 🧮 **EMD Calculator** | Auto-calculates Earnest Money Deposit requirements |

---

## 🏗️ Technical Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND (React 19 + Vite 8)           │
│  LandingHero → BusinessOnboarding → TenderRadar → BidPipeline  │
└─────────────────────┬───────────────────────────────────────────┘
                      │ REST / Mock API
┌─────────────────────▼───────────────────────────────────────────┐
│                    TinyFish API Integration                     │
│   web_fetch  →  parse_html  →  extract_json  →  diff_content   │
│                 (tinyfishService.js)                            │
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────────┐
│              Government Portal Data Sources                     │
│   gem.gov.in  |  eprocure.gov.in  |  indianrailways.gov.in     │
│   (Public procurement notices — legally accessible)            │
└─────────────────────────────────────────────────────────────────┘
```

### Stack
- **Frontend:** React 19, Vite 8, Lucide React icons
- **AI/API:** TinyFish API (`web_fetch`, `parse_html`, `extract_json`, `diff_content`)
- **Styling:** Pure Vanilla CSS (no Tailwind) — Indian saffron/emerald/sandstone palette
- **Data:** Mock dataset of 12+ real-format Indian government tenders
- **Compliance:** GFR 2017 Rule 170 automation

---

## 🐟 TinyFish API Integration

TenderPulse uses the TinyFish API for its core intelligence pipeline:

```javascript
// tinyfishService.js — 4-step AI pipeline
Step 1: web_fetch(url)           → Fetches raw portal HTML (JS-rendered)
Step 2: parse_html(html)         → Strips boilerplate, extracts tender table
Step 3: extract_json(text)       → Structures data (title, EMD, deadline, docs)
Step 4: diff_content(old, new)   → Detects corrigenda/amendments automatically
```

**Token savings:** ~73% compared to raw GPT-4 calls (tracked in TinyFish Console tab)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/tenderpulse.git
cd tenderpulse
npm install
npm run dev
```

App runs at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
tenderpulse/
├── index.html                          # Entry HTML
├── vite.config.js                      # Vite configuration
├── package.json                        # Dependencies
├── public/
│   ├── favicon.svg                     # TenderPulse logo
│   └── icons.svg                       # SVG icon set
└── src/
    ├── main.jsx                        # React entry point
    ├── App.jsx                         # Root app + routing state
    ├── App.css                         # Global styles
    ├── index.css                       # CSS reset/variables
    ├── components/
    │   ├── Header.jsx                  # Navigation + branding
    │   ├── LandingHero.jsx             # Hero + EMD calculator + personas
    │   ├── BusinessOnboarding.jsx      # Persona-based onboarding wizard
    │   ├── TenderRadar.jsx             # Live tender cards + filters
    │   ├── TenderDetailsModal.jsx      # Clause inspector + corrigenda
    │   ├── BidPipelineView.jsx         # Kanban pipeline + GFR 170 kit
    │   ├── TinyFishTerminal.jsx        # API telemetry dashboard
    │   ├── SlideVisualizer.jsx         # 8-slide pitch deck component
    │   ├── HowItWorks.jsx              # Process explainer
    │   ├── AuthModal.jsx               # Login/signup modal
    │   └── CompanyProfileModal.jsx     # Company profile setup
    ├── data/
    │   └── mockTenders.js              # 12+ realistic Indian tender records
    └── services/
        └── tinyfishService.js          # TinyFish API integration layer
```

---

## 🛡️ Legal & Safety

TenderPulse **only accesses publicly available government procurement notices** — the same information any citizen can view in a browser. This is:
- ✅ Legally compliant under **RTI Act 2005** (public information)
- ✅ Aligned with **GFR 2017** transparency mandates
- ✅ No scraping of private/personal data
- ✅ No automated form submissions or bid filing

---



---

## 📜 License

MIT License — see [LICENSE](LICENSE) for details.
