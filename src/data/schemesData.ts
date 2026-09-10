export interface Scheme {
  id: string;
  slug?: string;
  name: string;
  fullName: string;
  logoText: string;
  badge: string;
  badgeColor?: string;
  categories: string[];
  chips: string[];
  description: string;
  fundingAmount: string;
  subsidyRate: string;
  eligibility: string;
  objective: string;
  documentsNeeded: string[];
  targetSectors: string[];
  supportTypes: string[]; // e.g. "Funding", "Subsidy", "Grant", "Credit Guarantee", "Startup Support", "Certification"
  businessTypes: string[]; // e.g. "Manufacturing", "Services", "Trading", "Startup", "Agriculture", "Food Processing"
  fundingTiers: string[]; // e.g. "Below ₹10L", "₹10L – ₹50L", "₹50L – ₹1Cr", "₹1Cr – ₹5Cr", "Above ₹5Cr", "Not Sure"
  matchScore?: number;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  count: number;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "msme",
    name: "MSME & Manufacturing",
    iconName: "Building2",
    count: 24,
    description: "Credit support, technology upgradation and cluster development for micro and small enterprises."
  },
  {
    id: "startup",
    name: "Startup & Innovation",
    iconName: "Rocket",
    count: 18,
    description: "Seed grants, proof of concept funding, and mentorship for scalable startups."
  },
  {
    id: "subsidy",
    name: "Subsidy & Incentives",
    iconName: "Percent",
    count: 20,
    description: "Capital subsidies, interest subvention, and GST reimbursement schemes."
  },
  {
    id: "credit",
    name: "Credit & Loans",
    iconName: "Coins",
    count: 16,
    description: "Collateral-free loans, working capital limits, and credit guarantee schemes."
  },
  {
    id: "export",
    name: "Export & Global Trade",
    iconName: "Globe",
    count: 12,
    description: "Market access initiatives, duty drawbacks, and export promotion incentives."
  },
  {
    id: "skill",
    name: "Skill Development",
    iconName: "Award",
    count: 10,
    description: "Workforce training grants, entrepreneurship development programs, and certifications."
  },
  {
    id: "agri",
    name: "Agriculture & Food",
    iconName: "Sprout",
    count: 14,
    description: "Food processing infrastructure grants, cold chain subsidies, and FPO credit."
  },
  {
    id: "green",
    name: "Green & Sustainability",
    iconName: "Leaf",
    count: 8,
    description: "Renewable energy adoption, solar installation subsidies, and zero-defect zero-effect support."
  },
];

export const SCHEMES: Scheme[] = [
  {
    id: "pmegp",
    slug: "pmegp",
    name: "PMEGP",
    fullName: "Prime Minister's Employment Generation Programme (PMEGP)",
    logoText: "PMEGP",
    badge: "Popular",
    categories: ["msme", "subsidy", "credit"],
    chips: ["Funding", "Subsidy", "MSME"],
    description: "Credit-linked subsidy scheme offering financial assistance for setting up new micro-enterprises in manufacturing and service sectors.",
    fundingAmount: "Up to ₹50 Lakhs",
    subsidyRate: "15% – 35% Subsidy",
    eligibility: "Any individual above 18 years, 8th pass for projects above ₹10L in manufacturing or ₹5L in service.",
    objective: "To generate continuous and sustainable employment opportunities in rural and urban areas.",
    documentsNeeded: [
      "Aadhaar Card & PAN Card",
      "Detailed Project Report (DPR)",
      "Educational Qualification Certificate",
      "Caste / Category Certificate (if applicable)",
      "Rural Area Certificate (if applicable)"
    ],
    targetSectors: ["Manufacturing", "Services", "Rural Enterprises", "Agri-Processing"],
    supportTypes: ["Funding", "Subsidy"],
    businessTypes: ["Manufacturing", "Services", "Food Processing", "Agriculture"],
    fundingTiers: ["Below ₹10L", "₹10L – ₹50L", "Not Sure"]
  },
  {
    id: "mudra-loan",
    slug: "mudra-loan",
    name: "Mudra Loan (PMMY)",
    fullName: "Pradhan Mantri Mudra Yojana (PMMY)",
    logoText: "MUDRA",
    badge: "Collateral Free",
    categories: ["credit", "msme"],
    chips: ["Micro Credit", "No Collateral", "Working Capital"],
    description: "Collateral-free institutional loans up to ₹10 Lakhs across Shishu, Kishore, and Tarun categories for non-farm micro enterprises.",
    fundingAmount: "Up to ₹10 Lakhs",
    subsidyRate: "Subsidized Interest",
    eligibility: "Non-farm small/micro enterprises in manufacturing, trading, services, and allied agriculture.",
    objective: "To fund the unfunded micro enterprises with formal banking credit.",
    documentsNeeded: [
      "Aadhaar & PAN Card",
      "Business Address Proof",
      "Machinery / Inventory Quotation",
      "Bank Statements (6 months)"
    ],
    targetSectors: ["Trading", "Services", "Manufacturing", "Allied Agri"],
    supportTypes: ["Funding", "Credit Guarantee"],
    businessTypes: ["Manufacturing", "Services", "Trading", "Agriculture"],
    fundingTiers: ["Below ₹10L", "₹10L – ₹50L", "Not Sure"]
  },
  {
    id: "startup-india-seed-fund",
    slug: "startup-india-seed-fund",
    name: "Startup India",
    fullName: "Startup India Seed Fund Scheme (SISFS)",
    logoText: "#startupindia",
    badge: "For Startups",
    categories: ["startup", "grant"],
    chips: ["Grant", "Startup", "Innovation"],
    description: "Financial assistance to early-stage DPIIT-recognized startups for proof of concept, prototype development, product trials, and market entry.",
    fundingAmount: "Up to ₹50 Lakhs",
    subsidyRate: "100% Grant / Debt",
    eligibility: "DPIIT-recognized startup incorporated not more than 2 years ago, with a business idea to develop a product or service with market fit.",
    objective: "To provide financial assistance to startups for proof of concept, prototype development, and commercialization.",
    documentsNeeded: [
      "DPIIT Certificate of Recognition",
      "Company Registration Certificate & MOA",
      "Pitch Deck & Product Demonstration",
      "Proof of Concept (PoC) Details",
      "Bank Account Details"
    ],
    targetSectors: ["Technology", "Healthcare", "EdTech", "CleanTech", "FinTech", "Hardware"],
    supportTypes: ["Grant", "Startup Support", "Funding"],
    businessTypes: ["Startup", "Services", "Food Processing", "Manufacturing"],
    fundingTiers: ["Below ₹10L", "₹10L – ₹50L", "Not Sure"]
  },
  {
    id: "cgtmse",
    slug: "cgtmse",
    name: "CGTMSE",
    fullName: "Credit Guarantee Fund Trust for Micro and Small Enterprises",
    logoText: "CGTMSE",
    badge: "High Growth",
    categories: ["msme", "credit"],
    chips: ["Credit Guarantee", "Loan", "MSME"],
    description: "Collateral-free credit facility up to ₹5 Crore for micro and small enterprises through scheduled commercial banks and financial institutions.",
    fundingAmount: "Up to ₹5 Crore",
    subsidyRate: "75% – 85% Guarantee",
    eligibility: "New and existing Micro and Small Enterprises engaged in manufacturing or service activities.",
    objective: "To make collateral-free credit available to first-generation entrepreneurs and MSMEs.",
    documentsNeeded: [
      "Udyam Registration Certificate",
      "Audited Financial Statements (last 2-3 years)",
      "Business Plan & Projected Cash Flows",
      "KYC Documents of Promoters",
      "GST Returns (last 12 months)"
    ],
    targetSectors: ["Manufacturing", "IT/ITeS", "Retail Trade", "Logistics", "Services"],
    supportTypes: ["Credit Guarantee", "Funding"],
    businessTypes: ["Manufacturing", "Services", "Trading", "Startup", "Food Processing"],
    fundingTiers: ["₹50L – ₹1Cr", "₹1Cr – ₹5Cr", "Above ₹5Cr", "Not Sure"]
  },
  {
    id: "pmfme",
    slug: "pmfme",
    name: "PMFME Scheme",
    fullName: "PM Formalisation of Micro Food Processing Enterprises",
    logoText: "PMFME",
    badge: "Agri / Food",
    categories: ["agri", "subsidy", "msme"],
    chips: ["Food Processing", "Credit-Linked", "Subsidy"],
    description: "Financial, technical, and business support for micro food processing units with credit-linked capital subsidy for upgradation.",
    fundingAmount: "Up to ₹10 Lakhs",
    subsidyRate: "35% Credit-Linked",
    eligibility: "Existing micro food processing units or new individual/group enterprises including SHGs, FPOs, and Cooperatives.",
    objective: "To enhance the competitiveness of individual micro-enterprises in the unorganized segment of the food processing industry.",
    documentsNeeded: [
      "FSSAI Registration / License",
      "Detailed Project Report for Machinery Upgradation",
      "Udyam & Electricity Bills",
      "Bank Statements & Quotations of Machinery"
    ],
    targetSectors: ["Food Processing", "Spices", "Dairy Products", "Bakeries", "Beverages"],
    supportTypes: ["Subsidy", "Funding"],
    businessTypes: ["Food Processing", "Agriculture", "Manufacturing", "Startup"],
    fundingTiers: ["Below ₹10L", "₹10L – ₹50L", "Not Sure"]
  },
  {
    id: "tufs",
    slug: "tufs",
    name: "TUFS (Textiles)",
    fullName: "Amended Technology Upgradation Fund Scheme (ATUFS)",
    logoText: "TUFS",
    badge: "Textile Sector",
    categories: ["msme", "subsidy"],
    chips: ["Textiles", "Machinery Upgrade", "Capital Subsidy"],
    description: "Ministry of Textiles capital investment subsidy up to 15% on benchmarked machinery for modernizing textile and garmenting MSMEs.",
    fundingAmount: "Up to ₹30 Crore",
    subsidyRate: "10% – 15% Subsidy",
    eligibility: "Textile manufacturing and garmenting units purchasing benchmarked modern machinery.",
    objective: "To modernize textile production lines and boost exports.",
    documentsNeeded: [
      "Udyam & GST Registration",
      "Bank Term Loan Sanction Letter",
      "Machinery Proforma Invoices",
      "Chartered Engineer Valuation"
    ],
    targetSectors: ["Garmenting", "Weaving", "Knitting", "Technical Textiles"],
    supportTypes: ["Subsidy", "Funding"],
    businessTypes: ["Manufacturing"],
    fundingTiers: ["₹1Cr – ₹5Cr", "Above ₹5Cr", "Not Sure"]
  },
  {
    id: "clcss",
    slug: "clcss",
    name: "CLCSS (Tech Upgrade)",
    fullName: "Credit Linked Capital Subsidy Scheme",
    logoText: "CLCSS",
    badge: "Tech Upgrade",
    categories: ["msme", "subsidy"],
    chips: ["Technology", "Capital Subsidy", "Plant & Machinery"],
    description: "15% upfront capital subsidy on institutional finance for purchasing eligible state-of-the-art plant and machinery across 51 sub-sectors.",
    fundingAmount: "Up to ₹15 Lakhs",
    subsidyRate: "15% Upfront Subsidy",
    eligibility: "Micro and small manufacturing enterprises modernizing equipment.",
    objective: "To upgrade obsolete technology in micro and small production units.",
    documentsNeeded: [
      "Udyam Certificate",
      "Machinery Term Loan Sanction",
      "Approved Equipment Invoices",
      "Audited Financials"
    ],
    targetSectors: ["Engineering", "Pharma", "Plastics", "Electronics", "Auto Components"],
    supportTypes: ["Subsidy", "Funding"],
    businessTypes: ["Manufacturing", "Food Processing"],
    fundingTiers: ["₹10L – ₹50L", "₹50L – ₹1Cr", "Not Sure"]
  },
  {
    id: "standup-india",
    slug: "standup-india",
    name: "Stand-Up India",
    fullName: "Stand-Up India Scheme for Women & SC/ST",
    logoText: "Stand-Up",
    badge: "Women & SC/ST",
    categories: ["credit", "msme"],
    chips: ["Women Entrepreneurs", "SC/ST", "Loan"],
    description: "Composite bank loans between ₹10 Lakhs and ₹1 Crore for women and SC/ST entrepreneurs setting up greenfield enterprises.",
    fundingAmount: "₹10L – ₹1 Crore",
    subsidyRate: "Low Margin Money (15%)",
    eligibility: "SC/ST and/or women entrepreneurs above 18 years setting up first-time business.",
    objective: "To support entrepreneurship among women and SC/ST communities.",
    documentsNeeded: [
      "Aadhaar & PAN Card",
      "Caste Certificate (if SC/ST)",
      "Bankable Project Report",
      "Rent Agreement / Factory Deed"
    ],
    targetSectors: ["Manufacturing", "Services", "Trading", "Agri-Allied"],
    supportTypes: ["Funding", "Credit Guarantee"],
    businessTypes: ["Manufacturing", "Services", "Trading", "Agriculture", "Food Processing"],
    fundingTiers: ["₹10L – ₹50L", "₹50L – ₹1Cr", "Not Sure"]
  },
  {
    id: "zed-scheme",
    slug: "zed-scheme",
    name: "MSME ZED",
    fullName: "Zero Defect Zero Effect (ZED) Certification Scheme",
    logoText: "ZED",
    badge: "Quality Grant",
    categories: ["msme", "green"],
    chips: ["Certification", "Quality", "Subsidy"],
    description: "Financial assistance up to ₹5 Lakhs for MSMEs to adopt sustainable, zero-defect manufacturing practices and obtain Bronze, Silver, or Gold certification.",
    fundingAmount: "Up to ₹5 Lakhs",
    subsidyRate: "Up to 80% Subsidy",
    eligibility: "All manufacturing MSMEs registered with Udyam Registration Portal.",
    objective: "To encourage MSMEs to manufacture goods with zero defects and zero environmental impact.",
    documentsNeeded: [
      "Udyam Certificate",
      "Factory Pollution Control Clearance",
      "Factory License & Quality SOPs"
    ],
    targetSectors: ["Manufacturing", "Engineering", "Textiles", "Auto Components", "Chemicals"],
    supportTypes: ["Certification", "Subsidy", "Grant"],
    businessTypes: ["Manufacturing", "Food Processing"],
    fundingTiers: ["Below ₹10L", "Not Sure"]
  }
];

export const SUCCESS_STORIES = [
  {
    id: "story-1",
    quote: "Growthora helped us identify the exact scheme we qualified for and guided us through the entire PMEGP application process. Truly a reliable growth partner.",
    name: "Rohit Mehta",
    title: "Founder, Mehta Precision Tools",
    avatar: "RM",
    rating: 5,
    sector: "Manufacturing"
  },
  {
    id: "story-2",
    quote: "Their team simplified the complex documentation process for the PMFME subsidy, which enabled us to expand our organic food processing unit without collateral hurdles.",
    name: "Priya Sharma",
    title: "Director, Shree Foods & Spices",
    avatar: "PS",
    rating: 5,
    sector: "Food Processing"
  },
  {
    id: "story-3",
    quote: "Professional, knowledgeable and always available. We secured a collateral-free loan through CGTMSE within 45 days of applying with Growthora's assistance.",
    name: "Amit Patel",
    title: "CEO, Patel Engineering Works",
    avatar: "AP",
    rating: 5,
    sector: "Industrial Engineering"
  }
];

export const TRUST_POINTS = [
  { icon: "ShieldCheck", label: "100+ Government Schemes" },
  { icon: "CheckCircle2", label: "100% Verified Information" },
  { icon: "Sparkles", label: "End-to-End Handholding" },
  { icon: "MapPin", label: "Pan-India Assistance" },
];
