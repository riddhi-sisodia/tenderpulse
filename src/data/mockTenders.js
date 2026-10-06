// TenderPulse - Curated Indian Government Procurement Data
// Portals: GeM (Government e-Marketplace), CPPP (eprocure.gov.in), IREPS (Indian Railways), State Portals

export const INITIAL_COMPANY_PROFILE = {
  name: "ApexCloud Innovations Pvt Ltd",
  type: "DPIIT Recognized Startup / MSME",
  turnover: "₹1.45 Cr",
  turnoverValue: 14500000,
  experienceYears: 3,
  certifications: ["ISO 9001:2015", "ISO 27001 (Cybersecurity)", "DPIIT Startup India Certificate", "Udyam MSME Registered"],
  capabilities: ["Cloud Native Dev", "AI/ML Workflows", "Microservices", "Data Engineering", "PostgreSQL"],
  location: "New Delhi, India",
  gemSellerId: "GEM-SELL-DEL-2024-8841",
  msmeUdyamId: "UDYAM-DL-08-0091823",
  dpiitNumber: "DIPP104829",
  gstin: "07AAACA9921B1Z5"
};

export const DEMO_PERSONAS = [
  {
    id: 'small-biz',
    name: 'Ramesh Gupta',
    role: 'Managing Partner',
    businessName: 'Gupta Office & IT Supplies',
    type: 'Micro / Small MSME Vendor',
    turnover: '₹45 Lakhs',
    turnoverValue: 4500000,
    experienceYears: 2,
    location: 'Indore, Madhya Pradesh',
    msmeUdyamId: 'UDYAM-MP-23-0044192',
    gemSellerId: 'GEM-SELL-MP-2023-1102',
    certifications: ['Udyam Registration', 'GST Compliant', 'ISO 9001:2015'],
    capabilities: ['Stationery & Consumables', 'Computer Hardware', 'Sanitization Chemicals', 'Office Furniture'],
    badge: 'Micro Enterprise (Udyam)',
    tagline: 'Ideal for local tenders below ₹50 Lakhs with 100% EMD waiver and fast payments.',
    targetTenderIds: ["GEM/2026/B/894105", "CPPP/2026/EDU/9102", "DEL-POL/2026/HS/109"]
  },
  {
    id: 'startup',
    name: 'Aditi Rao',
    role: 'Founder & CTO',
    businessName: 'ApexCloud Innovations Pvt Ltd',
    type: 'DPIIT Recognized Startup',
    turnover: '₹1.45 Cr',
    turnoverValue: 14500000,
    experienceYears: 3,
    location: 'Bengaluru / New Delhi',
    msmeUdyamId: 'UDYAM-DL-08-0091823',
    gemSellerId: 'GEM-SELL-DEL-2024-8841',
    dpiitNumber: 'DIPP104829',
    certifications: ['DPIIT Startup India', 'ISO 27001:2022', 'ISO 9001:2015', 'SOC 2 Type II'],
    capabilities: ['Cloud Native Dev', 'AI/ML Analytics', 'Computer Vision', 'Microservices', 'PostgreSQL'],
    badge: 'DPIIT Startup (Rule 170 GFR Exempt)',
    tagline: 'Eligible for 100% EMD security waiver and relaxed 3-year prior turnover conditions!',
    targetTenderIds: ["GEM/2026/B/894102", "CPPP/2026/AIIMS/4419", "DEL-DTC/2026/EV/503"]
  },
  {
    id: 'contractor',
    name: 'Vikram Malhotra',
    role: 'Managing Director',
    businessName: 'Malhotra Infra & Engineering Works',
    type: 'Established Class-A Contractor',
    turnover: '₹15.8 Cr',
    turnoverValue: 158000000,
    experienceYears: 12,
    location: 'Noida, Uttar Pradesh',
    msmeUdyamId: 'UDYAM-UP-12-0099410',
    gemSellerId: 'GEM-SELL-UP-2018-0021',
    certifications: ['Class-1 CPWD Enlistment', 'ISO 9001:2015', 'ISO 14001', 'ISO 45001'],
    capabilities: ['Civil Construction', 'Railway Signaling', 'Solar EPC', 'Structural Steel', 'Substation Works'],
    badge: 'Tier-1 EPC Contractor',
    tagline: 'High-value multi-crore public sector works, joint ventures & Indian Railways tenders.',
    targetTenderIds: ["IREPS/2026/NR/10294", "UP-PWD/2026/HW/771", "CPPP/2026/POWER/330"]
  }
];

export const MOCK_TENDERS = [
  {
    id: "GEM/2026/B/894102",
    portal: "GeM (Govt e-Marketplace)",
    portalBadge: "bg-saffron-100 text-saffron-800 border-saffron-300",
    title: "Supply, Deployment & Maintenance of Cloud-Based AI Document Analytics Engine",
    authority: "National Informatics Centre (NIC), Ministry of Electronics & IT (MeitY)",
    referenceNo: "NIC-DEL-RFP-2026-042",
    sector: "IT & AI Solutions",
    estimatedValue: "₹1.85 Cr",
    estimatedValueNum: 18500000,
    emdAmount: "₹3,70,000 (100% Exempt for MSME & DPIIT Startups)",
    publishedDate: "02 Oct 2026",
    submissionDeadline: "18 Oct 2026 (12 days left)",
    daysLeft: 12,
    urgency: "normal",
    matchScore: 94,
    matchVerdict: "High Probability Win",
    matchColor: "text-indiaGreen-700",
    matchBg: "bg-indiaGreen-50 border-indiaGreen-200",
    tinyfishStatus: {
      lastScanned: "8 mins ago",
      fetchLatency: "312ms",
      domTokensSaved: "96.4%",
      hasCorrigendum: true,
      corrigendumCount: 2
    },
    clauses: [
      {
        criterion: "Annual Turnover",
        requirement: "Average turnover >= ₹1.2 Cr in last 2 financial years (Relaxed for Startups as per Rule 173 GFR)",
        companyStatus: "Meets Requirement (₹1.45 Cr + DPIIT Startup Certificate)",
        passed: true,
        critical: true
      },
      {
        criterion: "Certifications",
        requirement: "Valid ISO 27001 (Cybersecurity) and ISO 9001 quality certification",
        companyStatus: "Meets Requirement (Both certifications active)",
        passed: true,
        critical: true
      },
      {
        criterion: "Past Performance",
        requirement: "At least 1 completed contract of cloud software >= ₹50 Lakhs",
        companyStatus: "Meets Requirement (Past contract with State Power Board: ₹62L)",
        passed: true,
        critical: true
      },
      {
        criterion: "CMMI Level",
        requirement: "CMMI Level 3 preferred (not mandatory for MSME/Startups)",
        companyStatus: "Waived under MSME Policy (No penalty on technical score)",
        passed: true,
        critical: false
      }
    ],
    corrigenda: [
      {
        id: "CORR-02",
        date: "04 Oct 2026",
        title: "Corrigendum-II: Clause 4.2 Amendment",
        detail: "TinyFish detected amendment: DPIIT recognized startups now fully exempt from prior experience requirement if technical evaluation score is >= 85%."
      },
      {
        id: "CORR-01",
        date: "03 Oct 2026",
        title: "Corrigendum-I: Pre-bid Query Clarifications",
        detail: "Submission deadline officially extended from 14 Oct to 18 Oct 2026."
      }
    ],
    mandatoryDocuments: [
      { name: "MSME / DPIIT Startup India Certificate (for ₹3.7L EMD waiver)", ready: true, type: "Statutory" },
      { name: "Audited Financial Statements (FY 2023-24 & 2024-25)", ready: true, type: "Financial" },
      { name: "Technical Proposal Specification as per Annexure-B", ready: false, type: "Technical" },
      { name: "Declaration of Non-Blacklisting (Affidavit on ₹100 e-Stamp)", ready: false, type: "Legal" },
      { name: "ISO 27001:2022 Compliance Certificate", ready: true, type: "Technical" }
    ],
    sourceUrl: "https://gem.gov.in/bids/GEM-2026-B-894102",
    summary: "High-value National Informatics Centre RFP looking for indigenous cloud document intelligence. Startup friendly with full EMD waiver."
  },
  {
    id: "GEM/2026/B/894105",
    portal: "GeM (Govt e-Marketplace)",
    portalBadge: "bg-saffron-100 text-saffron-800 border-saffron-300",
    title: "Annual Rate Contract for Supply of Desktop Computers, Laser Printers & OEM Cartridges",
    authority: "Kendriya Vidyalaya Sangathan (Delhi Region), Ministry of Education",
    referenceNo: "KVS-DEL-PUR-2026-19",
    sector: "Office & IT Supplies",
    estimatedValue: "₹28.5 Lakhs",
    estimatedValueNum: 2850000,
    emdAmount: "₹57,000 (Exempt for Micro & Small Enterprises)",
    publishedDate: "04 Oct 2026",
    submissionDeadline: "16 Oct 2026 (10 days left)",
    daysLeft: 10,
    urgency: "urgent",
    matchScore: 96,
    matchVerdict: "Top Match for Small Vendors",
    matchColor: "text-indiaGreen-700",
    matchBg: "bg-indiaGreen-50 border-indiaGreen-200",
    tinyfishStatus: {
      lastScanned: "15 mins ago",
      fetchLatency: "198ms",
      domTokensSaved: "97.8%",
      hasCorrigendum: false,
      corrigendumCount: 0
    },
    clauses: [
      {
        criterion: "Annual Turnover",
        requirement: "Minimum turnover >= ₹15 Lakhs in last financial year",
        companyStatus: "Meets Requirement (₹45 Lakhs turnover)",
        passed: true,
        critical: true
      },
      {
        criterion: "OEM Authorization (MAF)",
        requirement: "Manufacturer Authorization Form for HP/Canon/Lenovo supply",
        companyStatus: "Meets Requirement (Authorized Channel Partner)",
        passed: true,
        critical: true
      },
      {
        criterion: "GeM Registration",
        requirement: "Active GeM Seller Account with Verified GSTIN",
        companyStatus: "Meets Requirement (Active GeM verified seller)",
        passed: true,
        critical: true
      }
    ],
    corrigenda: [],
    mandatoryDocuments: [
      { name: "Udyam Registration Certificate (100% EMD Waiver)", ready: true, type: "Statutory" },
      { name: "Manufacturer Authorization Form (MAF)", ready: true, type: "OEM" },
      { name: "GST Return GSTR-3B for Q1 2026", ready: true, type: "Financial" },
      { name: "GeM Bid Undertaking Sheet", ready: false, type: "Compliance" }
    ],
    sourceUrl: "https://gem.gov.in/bids/GEM-2026-B-894105",
    summary: "Straightforward supply tender for regional Kendriya Vidyalayas. Fast payment under GeM 10-day guarantee scheme."
  },
  {
    id: "CPPP/2026/AIIMS/4419",
    portal: "CPPP (eprocure.gov.in)",
    portalBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
    title: "Design and Implementation of Next-Gen Patient Triage & Telemedicine Microservices",
    authority: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    referenceNo: "AIIMS-DEL-IT-2026-91",
    sector: "Healthcare IT",
    estimatedValue: "₹78 Lakhs",
    estimatedValueNum: 7800000,
    emdAmount: "₹1,56,000 (Exempt for Startups & MSME)",
    publishedDate: "03 Oct 2026",
    submissionDeadline: "14 Oct 2026 (8 days left)",
    daysLeft: 8,
    urgency: "urgent",
    matchScore: 89,
    matchVerdict: "Strong Match",
    matchColor: "text-indiaGreen-700",
    matchBg: "bg-indiaGreen-50 border-indiaGreen-200",
    tinyfishStatus: {
      lastScanned: "22 mins ago",
      fetchLatency: "248ms",
      domTokensSaved: "98.1%",
      hasCorrigendum: false,
      corrigendumCount: 0
    },
    clauses: [
      {
        criterion: "Annual Turnover",
        requirement: "Average turnover >= ₹60 Lakhs in last 3 years",
        companyStatus: "Meets Requirement (₹1.45 Cr)",
        passed: true,
        critical: true
      },
      {
        criterion: "Tech Stack Compatibility",
        requirement: "Experience in PostgreSQL, REST APIs, and HIPAA/DISHA guidelines",
        companyStatus: "Meets Requirement (Validated via past healthcare demo)",
        passed: true,
        critical: true
      },
      {
        criterion: "Local Presence",
        requirement: "Support center or registered office in NCR region",
        companyStatus: "Meets Requirement (Registered in New Delhi)",
        passed: true,
        critical: true
      }
    ],
    corrigenda: [],
    mandatoryDocuments: [
      { name: "Earnest Money Deposit (EMD) Bank Guarantee or MSME proof", ready: true, type: "Financial" },
      { name: "Technical Compliance Sheet (Annexure-IV)", ready: false, type: "Technical" },
      { name: "DISHA / Data Protection Self-Declaration", ready: false, type: "Legal" },
      { name: "Company Incorporation Certificate & GSTIN", ready: true, type: "Statutory" }
    ],
    sourceUrl: "https://eprocure.gov.in/eprocure/app?page=FrontEndTendersByOrganisation",
    summary: "AIIMS medical portal modernization requiring microservices architecture. Well suited for nimble startups."
  },
  {
    id: "DEL-POL/2026/HS/109",
    portal: "Delhi State e-Procurement",
    portalBadge: "bg-amber-100 text-amber-800 border-amber-300",
    title: "Comprehensive Sanitization, Housekeeping Materials & Consumables Supply Contract",
    authority: "Delhi Police Academy & Training Centers, Govt of NCT of Delhi",
    referenceNo: "DP-HQ-ADM-2026-58",
    sector: "Facility Management & Consumables",
    estimatedValue: "₹18.4 Lakhs",
    estimatedValueNum: 1840000,
    emdAmount: "₹36,800 (100% Waived for Micro/Small MSME)",
    publishedDate: "05 Oct 2026",
    submissionDeadline: "19 Oct 2026 (13 days left)",
    daysLeft: 13,
    urgency: "normal",
    matchScore: 92,
    matchVerdict: "High Probability Win",
    matchColor: "text-indiaGreen-700",
    matchBg: "bg-indiaGreen-50 border-indiaGreen-200",
    tinyfishStatus: {
      lastScanned: "30 mins ago",
      fetchLatency: "205ms",
      domTokensSaved: "96.9%",
      hasCorrigendum: true,
      corrigendumCount: 1
    },
    clauses: [
      {
        criterion: "Turnover Requirement",
        requirement: "Minimum turnover >= ₹10 Lakhs in last financial year",
        companyStatus: "Meets Requirement (₹45 Lakhs turnover)",
        passed: true,
        critical: true
      },
      {
        criterion: "Green Product Compliance",
        requirement: "Eco-friendly, biodegradable cleaning chemicals certification",
        companyStatus: "Meets Requirement (Certified eco-grade chemicals)",
        passed: true,
        critical: false
      },
      {
        criterion: "MSME Local Purchase Preference",
        requirement: "Preference given to registered micro enterprises within NCT Delhi/NCR",
        companyStatus: "Full Preference Applied (Udyam registered)",
        passed: true,
        critical: true
      }
    ],
    corrigenda: [
      {
        id: "CORR-01",
        date: "05 Oct 2026",
        title: "Corrigendum-I: Delivery Location Addition",
        detail: "TinyFish detected amendment: 2 additional police barracks in Rohini added to delivery schedule. Budget increased by ₹1.2 Lakhs."
      }
    ],
    mandatoryDocuments: [
      { name: "MSME Udyam Registration (Exempts ₹36.8K EMD)", ready: true, type: "Statutory" },
      { name: "Sample Lab Test Certificate for Sanitizers", ready: false, type: "Technical" },
      { name: "GST Clearance Certificate for FY 2025-26", ready: true, type: "Financial" }
    ],
    sourceUrl: "https://delhitenders.gov.in/nicgep/app",
    summary: "Routine consumable supply for Delhi Police barracks. Excellent starter tender for small vendors and MSMEs."
  },
  {
    id: "IREPS/2026/NR/10294",
    portal: "IREPS (Indian Railways)",
    portalBadge: "bg-rose-100 text-rose-800 border-rose-300",
    title: "AI-Powered Rail Track Anomaly Detection System & Real-Time Alert Engine",
    authority: "Northern Railway HQ, Baroda House, New Delhi",
    referenceNo: "NR-SIG-TELE-2026-302",
    sector: "Smart Infrastructure / Vision AI",
    estimatedValue: "₹4.10 Cr",
    estimatedValueNum: 41000000,
    emdAmount: "₹8,20,000",
    publishedDate: "28 Sep 2026",
    submissionDeadline: "22 Oct 2026 (16 days left)",
    daysLeft: 16,
    urgency: "normal",
    matchScore: 68,
    matchVerdict: "Moderate Match (Joint Venture Recommended)",
    matchColor: "text-amber-700",
    matchBg: "bg-amber-50 border-amber-200",
    tinyfishStatus: {
      lastScanned: "48 mins ago",
      fetchLatency: "389ms",
      domTokensSaved: "94.8%",
      hasCorrigendum: true,
      corrigendumCount: 1
    },
    clauses: [
      {
        criterion: "Financial Threshold",
        requirement: "Minimum ₹3.0 Cr turnover required in last 3 years",
        companyStatus: "Deficit for Startups (Consortium or Subcontracting advised)",
        passed: false,
        critical: true
      },
      {
        criterion: "Hardware Experience",
        requirement: "Prior deployment of trackside ruggedized camera sensors",
        companyStatus: "Partial Gap (Software AI ready; hardware partner required)",
        passed: false,
        critical: true
      },
      {
        criterion: "AI Vision Expertise",
        requirement: "Proven real-time edge computer vision inference (<100ms latency)",
        companyStatus: "Meets Requirement (Edge models validated)",
        passed: true,
        critical: false
      }
    ],
    corrigenda: [
      {
        id: "CORR-01",
        date: "01 Oct 2026",
        title: "Consortium Guidelines Relaxed",
        detail: "TinyFish detected amendment: Lead bidder may form a 2-party joint venture to meet the financial turnover threshold."
      }
    ],
    mandatoryDocuments: [
      { name: "Joint Venture Agreement draft (if applying as consortium)", ready: false, type: "Legal" },
      { name: "EMD Receipt via IREPS payment gateway (₹8.2L)", ready: false, type: "Financial" },
      { name: "Past Track Record in Edge Computer Vision", ready: true, type: "Technical" },
      { name: "OEM Authorization for Trackside Sensors", ready: false, type: "OEM" }
    ],
    sourceUrl: "https://ireps.gov.in/html/departmentTenders.html",
    summary: "Large Northern Railway track safety project. Software startups can partner as sub-contractors or JV members."
  },
  {
    id: "DEL-DTC/2026/EV/503",
    portal: "Delhi State e-Procurement",
    portalBadge: "bg-amber-100 text-amber-800 border-amber-300",
    title: "Automated Electric Bus Fleet Telematics & Depot Charge Schedule Optimization Platform",
    authority: "Delhi Transport Corporation (DTC), Govt of NCT of Delhi",
    referenceNo: "DTC-EV-TECH-2026-11",
    sector: "CleanTech / Logistics",
    estimatedValue: "₹1.15 Cr",
    estimatedValueNum: 11500000,
    emdAmount: "₹2,30,000 (Exempt for Startups)",
    publishedDate: "01 Oct 2026",
    submissionDeadline: "15 Oct 2026 (9 days left)",
    daysLeft: 9,
    urgency: "urgent",
    matchScore: 91,
    matchVerdict: "High Probability Win",
    matchColor: "text-indiaGreen-700",
    matchBg: "bg-indiaGreen-50 border-indiaGreen-200",
    tinyfishStatus: {
      lastScanned: "5 mins ago",
      fetchLatency: "210ms",
      domTokensSaved: "97.3%",
      hasCorrigendum: false,
      corrigendumCount: 0
    },
    clauses: [
      {
        criterion: "Turnover Requirement",
        requirement: "Average turnover >= ₹1.0 Cr in past 2 years (Relaxed for Startups)",
        companyStatus: "Meets Requirement (₹1.45 Cr + Startup India recognition)",
        passed: true,
        critical: true
      },
      {
        criterion: "Optimization Algorithms",
        requirement: "Demonstrated linear programming / charge scheduling algorithms",
        companyStatus: "Meets Requirement (Core capability match)",
        passed: true,
        critical: true
      },
      {
        criterion: "Security Compliance",
        requirement: "ISO 27001 certified data handling",
        companyStatus: "Meets Requirement (ISO 27001 active)",
        passed: true,
        critical: true
      }
    ],
    corrigenda: [],
    mandatoryDocuments: [
      { name: "Technical Proposal & Fleet Architecture Document", ready: true, type: "Technical" },
      { name: "MSME EMD Exemption Affidavit as per Rule 170 GFR", ready: true, type: "Statutory" },
      { name: "Past Experience in IoT Data Pipeline", ready: true, type: "Technical" },
      { name: "Financial Audit Certificates for 2 Years", ready: true, type: "Financial" }
    ],
    sourceUrl: "https://delhitenders.gov.in/nicgep/app",
    summary: "High-visibility clean energy project for Delhi's massive 2000+ electric bus fleet. Turnkey cloud platform."
  }
];

export const TINYFISH_SAMPLE_LOGS = [
  {
    time: "17:14:02",
    step: "PORTAL SEARCH",
    action: "TinyFish Search API (/search)",
    detail: "Queried eprocure.gov.in, gem.gov.in, ireps.gov.in with domain filters: ['AI', 'Cloud', 'Supplies', 'Turnover < 2Cr']. Discovered 18 live active tenders.",
    status: "success",
    tokensSaved: "98.2%"
  },
  {
    time: "17:14:06",
    step: "CONTENT FETCH",
    action: "TinyFish Content Fetch (/fetch/content)",
    detail: "Rendered ASP.NET session on 'gem.gov.in/bids/GEM-2026-B-894102'. Bypassed dynamic state tables. Compressed 412 KB HTML down to 3.2 KB clean Markdown.",
    status: "success",
    tokensSaved: "96.4%"
  },
  {
    time: "17:14:09",
    step: "CLAUSE EXTRACTION",
    action: "Autonomous Clause Parsing Engine",
    detail: "Extracted 14 mandatory eligibility conditions: turnover threshold, EMD exemptions, Rule 170 GFR clauses, and Annexure checklist.",
    status: "success",
    tokensSaved: "N/A"
  },
  {
    time: "17:14:14",
    step: "AGENT WATCHDOG",
    action: "TinyFish Browser Agent (tinyfish agent run)",
    detail: "Navigated to CPPP Corrigendum tab. Interacted with dynamic date selector. Detected: 'DPIIT Startups exempt from prior experience requirement!'.",
    status: "highlight",
    tokensSaved: "100% human labor saved"
  },
  {
    time: "17:14:18",
    step: "ELIGIBILITY MATCH",
    action: "TenderPulse Match Scoring Engine",
    detail: "Evaluated against company profile (ApexCloud Innovations). Match score: 94%. Green-flagged for ₹3.70 Lakh EMD exemption.",
    status: "success",
    tokensSaved: "Verdict instant"
  }
];
