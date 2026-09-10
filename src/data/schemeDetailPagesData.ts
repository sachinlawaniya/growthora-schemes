export interface SchemePageData {
  slug: string;
  categoryBadge: string;
  title: string;
  subtitle: string;
  description: string;
  applyLinkText: string;
  metrics: {
    label: string;
    value: string;
  }[];
  whoCanApply: {
    title: string;
    description: string;
  }[];
  keyFeatures: {
    title: string;
    description: string;
    iconName?: string;
  }[];
  benefits: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  documentsRequired: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaHeading: string;
  ctaSubheading: string;
}

export const SCHEME_DETAIL_PAGES: Record<string, SchemePageData> = {
  "mudra-loan": {
    slug: "mudra-loan",
    categoryBadge: "MSME Micro Credit Scheme",
    title: "Mudra Loan Scheme 2025 (PMMY) – Shishu, Kishore & Tarun Loans in India",
    subtitle: "Pradhan Mantri Mudra Yojana (PMMY)",
    description: "Government-backed credit scheme providing collateral-free loans to micro and small businesses across three tailored tiers: Shishu, Kishore, and Tarun categories.",
    applyLinkText: "Apply Now →",
    metrics: [
      { label: "Loan Quantum", value: "₹50K - ₹10L" },
      { label: "Loan Type", value: "Working + Term" },
      { label: "Processing Time", value: "7-15 Days" },
      { label: "Sector Focus", value: "Micro Units" }
    ],
    whoCanApply: [
      {
        title: "Eligible Borrowers",
        description: "Non-corporate, non-farm small/micro enterprises in manufacturing, trading, and services including allied agriculture."
      },
      {
        title: "Age Criteria",
        description: "Individual applicants and promoters must be at least 18 years old at the time of application."
      },
      {
        title: "Business Stage",
        description: "Both new greenfield startups and existing businesses looking for expansion are eligible."
      },
      {
        title: "Loan Quantum",
        description: "Loans are categorized under Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 Lakhs), and Tarun (₹5L to ₹10 Lakhs)."
      },
      {
        title: "Lending Institutions",
        description: "Offered through Commercial Banks, Regional Rural Banks (RRBs), Small Finance Banks, MFIs, and NBFCs."
      },
      {
        title: "Collateral Norms",
        description: "Strictly collateral-free credit facility covered under Credit Guarantee for Micro Units (CGFMU)."
      }
    ],
    keyFeatures: [
      {
        title: "Three Loan Tiers",
        description: "Tiered loan amounts tailored to business maturity: Shishu for kickstarting, Kishore for scaling, and Tarun for expansion."
      },
      {
        title: "No Minimum Margin",
        description: "Zero borrower margin required for Shishu loans; low margin (10-15%) for Kishore and Tarun categories."
      },
      {
        title: "Pan-India Reach",
        description: "Facility is distributed across thousands of public, private, and regional rural bank branches across India."
      },
      {
        title: "Mudra Card & Overdraft",
        description: "Convenient debit card facility allowing working capital withdrawal directly through bank ATMs."
      },
      {
        title: "Zero Processing Fee",
        description: "Nominal or completely waived processing charges and documentation fees for small loans under ₹50,000."
      },
      {
        title: "Government Guarantee",
        description: "100% guarantee coverage for lenders by National Credit Guarantee Trustee Company (NCGTC)."
      }
    ],
    benefits: [
      "Collateral-free business funding without mortgaging residential or commercial property.",
      "Three structured loan tiers (Shishu, Kishore, Tarun) to match exact business lifecycle stage.",
      "Flexible usage for acquiring new machinery, raw material inventory, or hiring staff.",
      "Subsidized and competitive interest rates linked to RBI repo benchmarks.",
      "Access to Mudra Debit Card for seamless cash withdrawal and digital supplier payments.",
      "Builds an authentic formal credit history for securing larger commercial bank loans in the future."
    ],
    processSteps: [
      {
        step: "01",
        title: "Choose Lending Partner",
        description: "Identify the nearest partnered bank branch or apply digitally via the Udyamimitra portal."
      },
      {
        step: "02",
        title: "Prepare Documentation",
        description: "Gather business registration, KYC documents, quotation of machinery, and estimated cash flow."
      },
      {
        step: "03",
        title: "Submit Application & DPR",
        description: "Submit application form along with detailed project plan for loan appraisal by the credit officer."
      },
      {
        step: "04",
        title: "Sanction & Disbursement",
        description: "Upon approval, the loan amount is credited directly to your current account with Mudra card issuance."
      }
    ],
    documentsRequired: [
      "Proof of Identity (Aadhaar Card, Voter ID, PAN Card, Passport)",
      "Proof of Residence (Electricity bill, Telephone bill, Property tax receipt)",
      "Applicant's Recent Passport-size Photographs (2 copies)",
      "Quotation of Machinery / Equipment to be purchased",
      "Supplier Details and Raw Material Cost Projections",
      "Business Address Proof & Rent Agreement / NOC from landlord",
      "Bank Account Statement of the enterprise for last 6 months",
      "Caste / Category Certificate (if SC/ST/OBC/Minority category)"
    ],
    faqs: [
      {
        question: "What are the three categories under Mudra Loan Scheme?",
        answer: "PMMY offers three loan tiers: Shishu (loans up to ₹50,000), Kishore (loans between ₹50,001 and ₹5 Lakhs), and Tarun (loans between ₹5 Lakhs and ₹10 Lakhs)."
      },
      {
        question: "Is collateral security mandatory for Mudra Loans?",
        answer: "No, as per RBI guidelines, banks cannot demand collateral security or third-party guarantee for loans sanctioned under Pradhan Mantri Mudra Yojana."
      },
      {
        question: "Who can apply for a Mudra Loan?",
        answer: "Any Indian citizen who has a business plan for a non-farm income-generating activity in manufacturing, trading, or service sector needing up to ₹10 Lakhs can apply."
      },
      {
        question: "How can I apply for a Mudra loan through Growthora?",
        answer: "Growthora evaluates your business eligibility, prepares the project report, structures the loan file, and assists in submission to accredited partner bank branches."
      },
      {
        question: "Is there any subsidy available under Mudra Loans?",
        answer: "Mudra Loan itself is a credit facility, not a subsidy scheme. However, if paired with PMEGP, you can get 15% to 35% capital subsidy on the project cost."
      }
    ],
    ctaHeading: "Ready to Apply for Mudra Loan Scheme 2025 (PMMY) – Shishu, Kishore & Tarun Loans in India?",
    ctaSubheading: "Get expert guidance, hassle-free documentation and complete support for your Mudra loan application."
  },

  "pmegp": {
    slug: "pmegp",
    categoryBadge: "Government Funding Scheme",
    title: "PMEGP Scheme 2025 – Get Subsidy Up to ₹50 Lakh in India",
    subtitle: "Prime Minister's Employment Generation Programme (PMEGP)",
    description: "Credit-linked subsidy scheme for generating self-employment through establishment of micro-enterprises in non-farm sector. Get 15% to 35% subsidy on project cost.",
    applyLinkText: "Apply Now →",
    metrics: [
      { label: "Project Limit", value: "₹10L - ₹50L" },
      { label: "Subsidy", value: "15%-35%" },
      { label: "Processing Time", value: "45-60 Days" },
      { label: "Beneficiaries", value: "7 Lakh+" }
    ],
    whoCanApply: [
      {
        title: "Pan-India Citizens",
        description: "Any Indian individual aged 18 years or above with viable manufacturing or service business proposal."
      },
      {
        title: "Education Criteria",
        description: "Minimum 8th pass required for project cost above ₹10 Lakhs in manufacturing and ₹5 Lakhs in service sector."
      },
      {
        title: "Business Type",
        description: "New greenfield units in manufacturing, service, and processing sectors across urban and rural zones."
      },
      {
        title: "Location Advantage",
        description: "Rural areas receive higher subsidy rates (up to 35%) compared to urban municipalities (up to 25%)."
      },
      {
        title: "Special Categories",
        description: "Higher subsidy for SC/ST/OBC, women, minorities, ex-servicemen, and North Eastern Region applicants."
      },
      {
        title: "Training",
        description: "Mandatory Entrepreneurship Development Programme (EDP) training provided prior to loan disbursement."
      }
    ],
    keyFeatures: [
      {
        title: "Attractive Subsidies",
        description: "Get 15% to 35% direct capital subsidy credited as margin money into beneficiary loan account."
      },
      {
        title: "Manufacturing Units",
        description: "Maximum project cost allowed up to ₹50 Lakhs for setting up new manufacturing enterprises."
      },
      {
        title: "Service Sector",
        description: "Maximum project cost of ₹20 Lakhs supported for modern service and logistics businesses."
      },
      {
        title: "Low Promoter Contribution",
        description: "Only 5% equity needed for special categories and 10% for general category applicants."
      },
      {
        title: "Easy Online Application",
        description: "Single-window online portal managed by KVIC with transparent tracking and digital sanction."
      },
      {
        title: "Pan-India Coverage",
        description: "Available in every district through KVIC, KVIB, DICs, and nationalized partner banks."
      }
    ],
    benefits: [
      "15% subsidy for general category in urban areas; 25% subsidy for general category in rural areas.",
      "25% subsidy for special categories (women, SC/ST, OBC, minorities) in urban areas.",
      "35% maximum subsidy for special categories in rural areas across India.",
      "Bank term loan up to 90-95% of total project cost with attractive repayment tenures up to 7 years.",
      "Subsidized Entrepreneurship Development Training (EDP) to build business management skills.",
      "Second loan up to ₹1 Crore with 15-20% subsidy available for successful existing PMEGP units."
    ],
    processSteps: [
      {
        step: "01",
        title: "Online Registration",
        description: "Submit online application form on PMEGP e-Portal with Aadhaar authentication and basic enterprise details."
      },
      {
        step: "02",
        title: "Project Report Preparation",
        description: "Draft comprehensive Bankable Project Report (DPR) detailing capital expenditure, working capital, and revenues."
      },
      {
        step: "03",
        title: "District Task Force Screening",
        description: "Application is screened and forwarded by District Level Task Force Committee (DLTFC) to the financing bank."
      },
      {
        step: "04",
        title: "Sanction & Subsidy Release",
        description: "Bank sanctions loan, releases funds, and KVIC credits the margin money subsidy directly to escrow account."
      }
    ],
    documentsRequired: [
      "Aadhaar Card and PAN Card of the applicant",
      "Educational Qualification Certificate (8th pass or higher)",
      "Special Category / Caste Certificate (SC/ST/OBC/Ex-Servicemen)",
      "Rural Area Certificate from Gram Panchayat (for rural subsidy claim)",
      "Detailed Project Report (DPR) with financial feasibility projections",
      "Quotations for plant, machinery, and equipment from certified vendors",
      "Land / Building ownership proof or registered rent agreement",
      "Passport-size photographs and bank account details"
    ],
    faqs: [
      {
        question: "What is the maximum project cost allowed under PMEGP?",
        answer: "Under PMEGP, the maximum project cost allowed for manufacturing units is ₹50 Lakhs, and for service units it is ₹20 Lakhs."
      },
      {
        question: "How much government subsidy is given under PMEGP?",
        answer: "General category applicants receive 15% (urban) and 25% (rural) subsidy. Special categories (women, SC/ST, OBC, minorities) receive 25% (urban) and 35% (rural) subsidy."
      },
      {
        question: "Is collateral security required for PMEGP bank loans?",
        answer: "No, PMEGP loans up to ₹10 Lakhs do not require collateral security. Loans above ₹10L can be covered under CGTMSE credit guarantee."
      },
      {
        question: "How long does PMEGP approval and disbursement take?",
        answer: "The complete process from DLTFC scrutiny to bank sanction and EDP training usually takes 45 to 60 days with complete documentation."
      },
      {
        question: "Can an existing business apply for a PMEGP subsidy?",
        answer: "PMEGP first loan is strictly for new greenfield enterprises. However, existing well-performing PMEGP units can apply for a 2nd upgrade loan up to ₹1 Crore."
      }
    ],
    ctaHeading: "Ready to Apply for PMEGP Scheme 2025 – Get Subsidy Up to ₹50 Lakh in India?",
    ctaSubheading: "Get expert guidance, project report preparation and end-to-end support for your PMEGP application."
  },

  "tufs": {
    slug: "tufs",
    categoryBadge: "Textile Sector Technology Scheme",
    title: "TUFS Scheme: Accelerate Textile Business Growth with Technology Upgradation Subsidy",
    subtitle: "Amended Technology Upgradation Fund Scheme (ATUFS)",
    description: "Flagship scheme of the Ministry of Textiles offering capital investment subsidy (CIS) on benchmarked machinery to modernise textile MSMEs across the value chain.",
    applyLinkText: "Apply Now →",
    metrics: [
      { label: "Capital Subsidy", value: "Up to 15%" },
      { label: "Subsidy Cap", value: "Up to ₹30 Cr" },
      { label: "Focus", value: "Value Chain" },
      { label: "Target", value: "Textile MSMEs" }
    ],
    whoCanApply: [
      {
        title: "Textile & Apparel Units",
        description: "Enterprises engaged in weaving, processing, technical textiles, garmenting, and composite textile mills."
      },
      {
        title: "Benchmark Machinery",
        description: "Units purchasing eligible benchmarked state-of-the-art machinery listed in the Ministry of Textiles guidelines."
      },
      {
        title: "Institutional Finance",
        description: "Units availing term loans from scheduled banks, SIDBI, or eligible state financial corporations."
      },
      {
        title: "Concessional Credit Eligibility",
        description: "Both standalone MSMEs and corporate textile units setting up new plants or upgrading existing production lines."
      },
      {
        title: "Udyam Active MSMEs",
        description: "Registered Indian manufacturing entities holding valid Udyam Registration and GST compliance."
      },
      {
        title: "Technical Textile Units",
        description: "Special priority and higher subsidy allocation given to manufacturers of medical, industrial, and geo-textiles."
      }
    ],
    keyFeatures: [
      {
        title: "End-to-End Textile Coverage",
        description: "Covers entire textile supply chain from weaving and knitting to advanced processing, garmenting, and technical textiles."
      },
      {
        title: "Capital Investment Subsidy",
        description: "Provides 10% to 15% upfront capital investment subsidy on the cost of benchmarked machinery."
      },
      {
        title: "Productivity & Quality Boost",
        description: "Encourages adoption of modern eco-friendly technology for higher efficiency and lower power consumption."
      },
      {
        title: "Export Competitiveness",
        description: "Enables Indian textile exporters to meet stringent global quality and compliance standards."
      },
      {
        title: "Support for Technical Textiles",
        description: "Higher subsidy cap of up to ₹30 Crores for technical textile manufacturers."
      },
      {
        title: "Direct Benefit Transfer",
        description: "Subsidy amount is credited directly to the beneficiary's loan account through the i-TUFS online portal."
      }
    ],
    benefits: [
      "15% Capital Investment Subsidy (CIS) for Garmenting and Technical Textile segments with cap up to ₹30 Crores.",
      "10% Capital Investment Subsidy for Weaving, Knitting, Processing, and Composite units with cap up to ₹20 Crores.",
      "Lowers the overall interest burden and accelerates capital recovery on expensive imported machinery.",
      "Significant improvement in production yield, fabric finish quality, and energy savings.",
      "Priority assistance in obtaining technical certifications and environmental clearances.",
      "Integrated with state textile policies for claiming additional state-level interest subventions."
    ],
    processSteps: [
      {
        step: "01",
        title: "Get Term Loan Sanction",
        description: "Obtain term loan sanction from a listed participating financial institution for purchasing benchmarked machinery."
      },
      {
        step: "02",
        title: "Online Registration on i-TUFS",
        description: "Register on the i-TUFS portal and apply for Unique Identification Number (UID) before machinery procurement."
      },
      {
        step: "03",
        title: "Machinery Installation & JIT",
        description: "Install eligible machinery and submit documentation for Joint Inspection Team (JIT) physical verification."
      },
      {
        step: "04",
        title: "Subsidy Release",
        description: "Ministry of Textiles verifies JIT report and releases subsidy amount directly to the bank loan account."
      }
    ],
    documentsRequired: [
      "Udyam Registration Certificate and PAN Card",
      "Term Loan Sanction Letter from Lending Bank",
      "Proforma Invoices and Quotations of Benchmarked Machinery",
      "Chartered Engineer Certificate of installed machinery specifications",
      "Audited Financial Statements for the last 3 financial years",
      "Pollution Control Board Clearance / Consent to Operate (CTO)",
      "Commercial Invoices, Bill of Lading, and Customs Clearance (if imported)",
      "Bank Disbursement Certificate and Chartered Accountant Certificate"
    ],
    faqs: [
      {
        question: "What is the primary objective of the ATUFS scheme?",
        answer: "ATUFS aims to facilitate technology upgradation in the textile industry, promote ease of doing business, and boost employment in garmenting and technical textiles."
      },
      {
        question: "How much subsidy is offered under ATUFS?",
        answer: "Garmenting and Technical Textiles get 15% subsidy capped at ₹30 Crores. Weaving, processing, and knitting units get 10% subsidy capped at ₹20 Crores."
      },
      {
        question: "Can an existing textile unit apply for TUFS subsidy?",
        answer: "Yes, existing textile units upgrading their existing machinery with eligible benchmarked modern machinery can apply."
      },
      {
        question: "When should the UID be applied for on the i-TUFS portal?",
        answer: "The UID must be applied for and generated on the i-TUFS portal before the commercial invoice date or physical delivery of machinery."
      },
      {
        question: "How does Growthora help in TUFS subsidy approval?",
        answer: "Growthora assists in checking machinery benchmark eligibility, i-TUFS UID generation, coordinating JIT physical inspection, and liaisoning till subsidy release."
      }
    ],
    ctaHeading: "Ready to Apply for TUFS Scheme: Accelerate Textile Business Growth with Technology Upgradation Subsidy?",
    ctaSubheading: "Get expert guidance, benchmark machinery evaluation and complete support for your textile subsidy claim."
  },

  "pmfme": {
    slug: "pmfme",
    categoryBadge: "Food Processing Sector Scheme",
    title: "PMFME Scheme: Avail 35% Subsidy up to ₹10 Lakh for Food Processing Units",
    subtitle: "PM Formalisation of Micro Food Processing Enterprises Scheme",
    description: "Centrally sponsored scheme providing financial, technical and business support for upgrading existing micro food processing enterprises with 35% credit-linked capital subsidy.",
    applyLinkText: "Apply Now →",
    metrics: [
      { label: "Subsidy Rate", value: "35%" },
      { label: "Max Subsidy Limit", value: "₹10 Lakh" },
      { label: "Scheme Period", value: "2020-2026" },
      { label: "Target Units", value: "2,00,000+" }
    ],
    whoCanApply: [
      {
        title: "Individual Micro Units",
        description: "Existing unorganized micro food processing units seeking formalization, technology upgradation, or capacity expansion."
      },
      {
        title: "Age & Citizenship",
        description: "Applicant must be an Indian citizen aged 18 years or above with ownership of the micro enterprise."
      },
      {
        title: "One District One Product",
        description: "Preference given to enterprises producing items aligned with the One District One Product (ODOP) framework."
      },
      {
        title: "Farmer Groups & SHGs",
        description: "Self Help Groups (SHGs), Farmer Producer Organizations (FPOs), and Producer Cooperatives are fully eligible."
      },
      {
        title: "Minimum Contribution",
        description: "Beneficiary must contribute at least 10% of the project cost as equity margin money."
      },
      {
        title: "FSSAI Compliance",
        description: "Willingness to obtain FSSAI registration/license, Udyam registration, and GST compliance with assistance."
      }
    ],
    keyFeatures: [
      {
        title: "35% Credit-Linked Capital Subsidy",
        description: "35% subsidy on eligible project cost with maximum ceiling of ₹10 Lakhs per micro food processing unit."
      },
      {
        title: "ODOP Focus",
        description: "Special incentives for raw material procurement, common marketing, and branding under district-specific ODOP crops."
      },
      {
        title: "Support for Groups & FPOs",
        description: "Grants up to 35% with higher ceilings for common processing facilities, sorting/grading lines, and cold storages."
      },
      {
        title: "Seed Capital for SHGs",
        description: "Seed capital of ₹40,000 per SHG member for working capital and purchase of small tools."
      },
      {
        title: "Marketing & Branding Support",
        description: "Up to 50% financial support for developing packaging, branding, and pan-India marketing channels."
      },
      {
        title: "Handholding & Incubation",
        description: "Free technical training, DPR assistance, and food quality testing support provided by State Nodal Agencies."
      }
    ],
    benefits: [
      "Financial assistance up to ₹10 Lakhs as 35% non-refundable credit-linked capital subsidy.",
      "Upgradation of traditional manual food processing methods to automated modern food machinery.",
      "Assistance in obtaining FSSAI food licensing, packaging certifications, and nutritional lab tests.",
      "Access to institutional bank loans with low margin money and flexible repayment periods.",
      "Branding and marketing tie-ups with e-commerce platforms and retail supermarket chains.",
      "Support for establishing common infrastructure like packaging units, testing labs, and drying yards."
    ],
    processSteps: [
      {
        step: "01",
        title: "Check ODOP Eligibility",
        description: "Identify whether your food product falls under the One District One Product (ODOP) list for your district."
      },
      {
        step: "02",
        title: "Prepare Detailed Project Report",
        description: "Draft Bankable DPR with machinery quotations, production capacity, raw material sources, and financial returns."
      },
      {
        step: "03",
        title: "Online Submission on PMFME Portal",
        description: "Submit online application through the official PMFME MIS portal with District Resource Person (DRP) verification."
      },
      {
        step: "04",
        title: "Bank Sanction & Subsidy Release",
        description: "Lending bank sanctions the loan and the 35% capital subsidy is released by MoFPI to the bank escrow account."
      }
    ],
    documentsRequired: [
      "Aadhaar Card and PAN Card of the applicant",
      "Udyam Registration Certificate and FSSAI License / Registration",
      "Detailed Project Report (DPR) prepared by certified consultant",
      "Quotation of Food Processing Machinery from authorized suppliers",
      "Electricity Bill and Premises Ownership / Rent Agreement",
      "Bank Account Statement for last 6 months",
      "Passport size photographs and applicant KYC details"
    ],
    faqs: [
      {
        question: "How much subsidy is provided under the PMFME Scheme?",
        answer: "The scheme provides a 35% credit-linked capital subsidy on eligible project cost, with a maximum limit of ₹10 Lakhs per individual enterprise."
      },
      {
        question: "Is PMFME applicable only for ODOP food products?",
        answer: "Existing units producing non-ODOP products can also get credit-linked subsidy for upgradation. However, new units must align with the district's ODOP product."
      },
      {
        question: "What types of food processing businesses are eligible?",
        answer: "Bakery, spices, pickle/jam making, edible oil extraction, dairy products, fruit pulp, rice/flour mills, snacks, and beverage processing units are eligible."
      },
      {
        question: "How does Growthora assist in getting PMFME subsidy?",
        answer: "Growthora provides end-to-end DPR formulation, machinery quotation validation, PMFME portal filing, and banking liaison until subsidy credit."
      }
    ],
    ctaHeading: "Ready to Apply for PMFME Scheme: Avail 35% Subsidy up to ₹10 Lakh for Food Processing Units?",
    ctaSubheading: "Get expert guidance, project report preparation and complete support for your food processing subsidy."
  },

  "clcss": {
    slug: "clcss",
    categoryBadge: "Technology Upgradation Scheme",
    title: "CLCSS Scheme: Get 15% Capital Subsidy up to ₹15 Lakh for Technology Upgradation",
    subtitle: "Credit Linked Capital Subsidy Scheme for Technology Upgradation",
    description: "Flagship MSME scheme that provides 15% upfront capital subsidy on institutional finance for purchase of plant and machinery, helping micro and small enterprises modernise production.",
    applyLinkText: "Apply Now →",
    metrics: [
      { label: "Capital Subsidy", value: "15%" },
      { label: "Max Subsidy", value: "₹15 Lakh" },
      { label: "Focus", value: "Tech Upgrade" },
      { label: "Target Entities", value: "New & Existing Units" }
    ],
    whoCanApply: [
      {
        title: "Micro & Small Enterprises",
        description: "Sole proprietorships, partnerships, LLPs, and private limited companies registered as Micro or Small enterprises."
      },
      {
        title: "Approved Technologies",
        description: "Units adopting well-established, state-of-the-art technologies and automated equipment listed under 51 sub-sectors."
      },
      {
        title: "Institutional Term Loan",
        description: "Enterprises availing term loan from commercial banks, state financial corporations, or SIDBI for machinery purchase."
      },
      {
        title: "Valid MSME Udyam",
        description: "Must hold valid Udyam Registration and have a permanent manufacturing or processing setup."
      },
      {
        title: "Existing & New Units",
        description: "Both existing units upgrading older machinery and new greenfield enterprises with proven tech setups qualify."
      },
      {
        title: "51 Specified Sectors",
        description: "Covers auto components, plastics, leather, food processing, electronics, pharmaceuticals, and general engineering."
      }
    ],
    keyFeatures: [
      {
        title: "15% Upfront Capital Subsidy",
        description: "Direct 15% capital subsidy on eligible plant and machinery investment up to ₹100 Lakhs loan component."
      },
      {
        title: "51 Approved Sub-Sectors",
        description: "Covers major industrial manufacturing domains including packaging, auto components, pharma, and precision engineering."
      },
      {
        title: "No Upper Limit on Total Project",
        description: "While the subsidy is capped on ₹100 Lakhs machinery cost, total project cost can be higher based on bank sanction."
      },
      {
        title: "Direct Credit to Loan Account",
        description: "Subsidy is released upfront by the nodal agency and kept in a term deposit / reserve account to reduce interest."
      },
      {
        title: "Multiple Nodal Agencies",
        description: "Processed through SIDBI, NABARD, SBI, PNB, Canara Bank, and other scheduled commercial institutions."
      },
      {
        title: "Boosts Energy & Quality Standards",
        description: "Replaces obsolete manual machinery with energy-efficient CNC, robotic, or semi-automated systems."
      }
    ],
    benefits: [
      "15% upfront capital subsidy reduces overall debt burden and interest outflows significantly.",
      "Transforms traditional manufacturing units into competitive, high-precision automated facilities.",
      "Faster turnaround time and higher product consistency for meeting export order requirements.",
      "Reduction in factory power consumption, material wastage, and industrial downtime.",
      "Easy integration with bank term loans without complicated separate collateral procedures.",
      "Special incentives and seamless approvals for units moving towards ISO and ZED certifications."
    ],
    processSteps: [
      {
        step: "01",
        title: "Verify Machinery Eligibility",
        description: "Check if the proposed equipment falls under the 51 approved sub-sectors and benchmark technologies."
      },
      {
        step: "02",
        title: "Bank Term Loan Sanction",
        description: "Apply for a machinery term loan from a primary lending institution (PLI) connected with nodal agencies."
      },
      {
        step: "03",
        title: "Online Claim Upload on MSME Portal",
        description: "Lending bank uploads the online subsidy claim on the dedicated MSME CLCSS portal after disbursement."
      },
      {
        step: "04",
        title: "Sanction & Margin Money Credit",
        description: "Ministry of MSME verifies the claim and releases 15% subsidy amount directly to the bank account."
      }
    ],
    documentsRequired: [
      "Udyam Registration Certificate and PAN Card",
      "Sanction Letter of Machinery Term Loan from financing bank",
      "Proforma Invoices & Quotations of Approved Upgraded Machinery",
      "Detailed Project Report explaining technology upgradation benefits",
      "Audited Balance Sheet and Profit & Loss Statements for 2 years",
      "Machinery Installation & Commercial Commissioning Certificate",
      "Bank Account Statements and Loan Account Statement"
    ],
    faqs: [
      {
        question: "What is the maximum subsidy amount under CLCSS?",
        answer: "The maximum capital subsidy is 15% of the investment in eligible plant and machinery, with a maximum cap of ₹15 Lakhs (calculated on up to ₹1 Crore loan)."
      },
      {
        question: "Which industries are eligible for the CLCSS scheme?",
        answer: "51 specified industrial sub-sectors are eligible, including pharmaceuticals, plastics, auto components, food processing, electronics, leather, and textiles."
      },
      {
        question: "Is second-hand machinery eligible for CLCSS subsidy?",
        answer: "No, only brand new, modern, state-of-the-art machinery from recognized manufacturers is eligible for the subsidy."
      },
      {
        question: "How does Growthora help in obtaining CLCSS subsidy?",
        answer: "Growthora reviews your proposed machinery specifications against government benchmark lists, prepares DPRs, and tracks bank filing."
      }
    ],
    ctaHeading: "Ready to Apply for CLCSS Scheme: Get 15% Capital Subsidy up to ₹15 Lakh for Technology Upgradation?",
    ctaSubheading: "Get expert guidance, technology benchmark verification and complete support for your CLCSS application."
  },

  "startup-india-seed-fund": {
    slug: "startup-india-seed-fund",
    categoryBadge: "Startup Seed Capital Grant",
    title: "Startup India Seed Fund Scheme (SISFS) – Get Up to ₹50 Lakh Grant & Debt",
    subtitle: "DPIIT Startup India Seed Fund Scheme (SISFS)",
    description: "Government grant and debt funding for DPIIT-recognized early-stage startups to conduct proof of concept, prototype development, product trials, and market entry.",
    applyLinkText: "Apply Now →",
    metrics: [
      { label: "Grant Support", value: "Up to ₹20 Lakh" },
      { label: "Debt / Equity", value: "Up to ₹50 Lakh" },
      { label: "Tenure", value: "Up to 5 Years" },
      { label: "Stage", value: "Early-Stage PoC" }
    ],
    whoCanApply: [
      {
        title: "DPIIT-Recognized Startups",
        description: "Entity incorporated as a Private Limited Company or LLP with active DPIIT startup recognition certificate."
      },
      {
        title: "Incorporation Vintage",
        description: "Startup must not have completed more than 2 years from the date of incorporation at the time of application."
      },
      {
        title: "Market Viability",
        description: "Must possess an innovative business idea with commercial potential and clear product-market fit trajectory."
      },
      {
        title: "Prior Grant Ceiling",
        description: "Should not have received more than ₹10 Lakhs of monetary support under any other Central/State Govt scheme."
      },
      {
        title: "Indian Shareholding",
        description: "At least 51% shareholding in the startup must be held by Indian promoters as per Companies Act."
      },
      {
        title: "Tech Innovation",
        description: "Preference given to technology-driven solutions in healthcare, agriculture, education, clean energy, and AI."
      }
    ],
    keyFeatures: [
      {
        title: "Grant up to ₹20 Lakhs",
        description: "100% non-dilutive milestone-based grant for validation of proof of concept, prototype development, and field trials."
      },
      {
        title: "Convertible Debt up to ₹50 Lakhs",
        description: "Low-interest convertible debentures or debt for commercialization, market launch, and business scaling."
      },
      {
        title: "Incubator Backing",
        description: "Disbursed through selected premier government and private incubators across India (IITs, IIMs, AICs)."
      },
      {
        title: "Mentorship & Ecosystem",
        description: "Direct mentorship, patent filing assistance, and pilot deployment opportunities with corporate partners."
      },
      {
        title: "Zero Collateral",
        description: "Purely innovation and equity/debt linked with zero personal property mortgage."
      },
      {
        title: "Tax Exemption Benefits",
        description: "Eligible for Section 80-IAC 3-year income tax holiday and Angel Tax exemption under Startup India."
      }
    ],
    benefits: [
      "Up to ₹20 Lakhs non-dilutive grant without giving away any founder equity at the idea stage.",
      "Up to ₹50 Lakhs convertible debentures/debt at low interest rates up to 5 years for product launch.",
      "Incubation support with lab access, testing infrastructure, and technical advisory.",
      "Exemption from prior turnover and experience criteria in Government e-Marketplace (GeM) public tenders.",
      "80% rebate on patent filing fees and 50% rebate on trademark applications.",
      "Accelerates readiness for Angel Investors, Seed Funds, and Series-A Venture Capital rounds."
    ],
    processSteps: [
      {
        step: "01",
        title: "Obtain DPIIT Recognition",
        description: "Register on Startup India portal and secure DPIIT recognition certificate."
      },
      {
        step: "02",
        title: "Select Incubators on SISFS Portal",
        description: "Apply online and choose up to 3 preference incubators suited for your industry domain."
      },
      {
        step: "03",
        title: "Pitch & Evaluation",
        description: "Present prototype demo and pitch deck to the Incubator Seed Management Committee (ISMC)."
      },
      {
        step: "04",
        title: "Grant & Seed Fund Sanction",
        description: "Incubator signs agreement and disburses milestone-linked tranches into your startup bank account."
      }
    ],
    documentsRequired: [
      "Certificate of Incorporation and Memorandum of Association (MOA)",
      "DPIIT Certificate of Recognition",
      "Comprehensive Investor Pitch Deck and Financial Projections",
      "Prototype / MVP video demonstration link or patent filings",
      "Founders' Resume, LinkedIn Profiles, and KYC Documents",
      "Startup Current Bank Account Details and Shareholding Pattern"
    ],
    faqs: [
      {
        question: "Can an unincorporated business or proprietorship apply for SISFS?",
        answer: "No, the startup must be incorporated as a Private Limited Company or LLP and have DPIIT recognition."
      },
      {
        question: "What is the difference between the ₹20L grant and ₹50L debt under SISFS?",
        answer: "The ₹20L grant is for proof of concept and prototype development (non-dilutive). The ₹50L debt/convertible debenture is for commercial market launch and scaling."
      },
      {
        question: "How long does incubator evaluation take?",
        answer: "Incubator committees typically review applications and conduct pitch sessions within 30 to 45 days."
      },
      {
        question: "How does Growthora assist startups in getting SISFS funding?",
        answer: "Growthora helps you obtain DPIIT recognition, polish your pitch deck, build financial models, and select high-match incubators."
      }
    ],
    ctaHeading: "Ready to Apply for Startup India Seed Fund Scheme (SISFS) – Get Up to ₹50 Lakh Grant & Debt?",
    ctaSubheading: "Get expert pitch deck refinement, DPIIT filing, and incubator application guidance from Growthora."
  },

  "cgtmse": {
    slug: "cgtmse",
    categoryBadge: "Collateral-Free Credit Guarantee",
    title: "CGTMSE Scheme: Get Collateral-Free Business Loans up to ₹5 Crore",
    subtitle: "Credit Guarantee Fund Trust for Micro and Small Enterprises",
    description: "Premier government credit guarantee scheme providing up to 85% collateral-free credit guarantee coverage for term loans and working capital limits up to ₹5 Crore.",
    applyLinkText: "Apply Now →",
    metrics: [
      { label: "Loan Limit", value: "Up to ₹5 Crore" },
      { label: "Guarantee Cover", value: "75% - 85%" },
      { label: "Security", value: "Zero Collateral" },
      { label: "Lenders", value: "Banks & NBFCs" }
    ],
    whoCanApply: [
      {
        title: "Micro & Small Enterprises",
        description: "New and existing MSMEs engaged in manufacturing, service, software, logistics, and retail trade."
      },
      {
        title: "Udyam Registered",
        description: "Must hold valid Udyam Registration with clear business operations in India."
      },
      {
        title: "No Asset Mortgage Needed",
        description: "Entrepreneurs without immovable commercial or residential property to pledge as collateral."
      },
      {
        title: "Women & SC/ST MSMEs",
        description: "Special enhanced guarantee coverage up to 85% for women-led enterprises and SC/ST promoters."
      },
      {
        title: "ZED Certified Units",
        description: "MSMEs holding Bronze, Silver, or Gold ZED certifications receive concession in annual guarantee fees."
      },
      {
        title: "Aspiring Tech Startups",
        description: "Recognized startups seeking growth debt and working capital from scheduled commercial banks."
      }
    ],
    keyFeatures: [
      {
        title: "Up to ₹5 Crore Limit",
        description: "Loan ceiling enhanced up to ₹500 Lakhs per borrower covering both term loans and cash credit limits."
      },
      {
        title: "High Guarantee Coverage",
        description: "75% to 85% credit guarantee provided by the Trust to the lending bank against borrower default."
      },
      {
        title: "Low Annual Guarantee Fee",
        description: "Concessional guarantee fee structure starting from just 0.37% to 1.35% per annum."
      },
      {
        title: "Hybrid Collateral Model",
        description: "Allows combination of partial collateral and CGTMSE cover for project loans exceeding ₹5 Crore."
      },
      {
        title: "Covers Retail & Wholesale",
        description: "Extended coverage for retail trade enterprises up to ₹2 Crore loan limits."
      },
      {
        title: "Fast-Track Digital Approval",
        description: "Seamless integration between bank loan processing software and CGTMSE portal."
      }
    ],
    benefits: [
      "100% collateral-free financing without risking family properties or personal assets.",
      "Access to working capital (Cash Credit / Overdraft) and long-term machinery purchase loans.",
      "Subsidized interest rates as credit guarantee mitigates lender credit risk profile.",
      "85% guarantee cover for women-led businesses, SC/ST promoters, and North Eastern Region units.",
      "Reduction in annual guarantee fees for units located in aspirational districts or holding ZED certifications.",
      "Enables first-generation entrepreneurs to establish and scale industrial manufacturing setups."
    ],
    processSteps: [
      {
        step: "01",
        title: "Project Report & DPR",
        description: "Prepare comprehensive project feasibility report with machinery costs and cash flow projections."
      },
      {
        step: "02",
        title: "Bank Credit Appraisal",
        description: "Apply for credit facility with partnered Member Lending Institution (MLI) under CGTMSE."
      },
      {
        step: "03",
        title: "Guarantee Cover Sanction",
        description: "Lending bank verifies project viability and locks guarantee cover directly with CGTMSE Trust."
      },
      {
        step: "04",
        title: "Loan Disbursement",
        description: "Bank disburses funds for machinery purchase or activates cash credit working capital limit."
      }
    ],
    documentsRequired: [
      "Udyam Registration Certificate and PAN Card",
      "Audited Financial Statements with CA reports (last 2-3 years)",
      "Detailed Project Report (DPR) with 5-year revenue projections",
      "GST Returns (GSTR-3B & GSTR-1 for past 12 months)",
      "Bank Account Statements for last 12 months",
      "KYC documents of Directors / Partners / Proprietor",
      "Proforma Invoices / Quotations of Machinery and Equipment"
    ],
    faqs: [
      {
        question: "What is the maximum loan amount under the CGTMSE scheme?",
        answer: "The maximum loan limit covered under CGTMSE is ₹5 Crore for manufacturing, services, and IT units, and ₹2 Crore for retail trade."
      },
      {
        question: "Does the borrower have to apply directly to CGTMSE?",
        answer: "No, the borrower applies directly to an eligible bank (MLI). The lending bank evaluates the proposal and obtains guarantee cover from CGTMSE."
      },
      {
        question: "What is the annual guarantee fee for CGTMSE?",
        answer: "Annual guarantee fees range between 0.37% and 1.35% depending on loan size, promoter category (women/SC/ST get lower rates), and ZED rating."
      },
      {
        question: "How does Growthora help in obtaining CGTMSE bank loans?",
        answer: "Growthora assesses creditworthiness, drafts bankable DPRs, structures debt proposals, and coordinates with bank credit managers until disbursement."
      }
    ],
    ctaHeading: "Ready to Apply for CGTMSE Scheme: Get Collateral-Free Business Loans up to ₹5 Crore?",
    ctaSubheading: "Get expert DPR preparation, bank liaison and complete support for your collateral-free loan."
  },

  "standup-india": {
    slug: "standup-india",
    categoryBadge: "Inclusive Entrepreneurship Scheme",
    title: "Stand-Up India Scheme: Get ₹10 Lakh to ₹1 Crore Loans for Women & SC/ST",
    subtitle: "Department of Financial Services (DFS), Ministry of Finance",
    description: "Facilitates bank loans between ₹10 Lakhs and ₹1 Crore to at least one SC or ST borrower and at least one woman borrower per bank branch for setting up greenfield enterprises.",
    applyLinkText: "Apply Now →",
    metrics: [
      { label: "Loan Range", value: "₹10L - ₹1 Crore" },
      { label: "Coverage", value: "Term + Working" },
      { label: "Beneficiaries", value: "Women & SC/ST" },
      { label: "Margin Money", value: "Only 15%" }
    ],
    whoCanApply: [
      {
        title: "Women Entrepreneurs",
        description: "Women of any category aged 18 years or above establishing a greenfield business."
      },
      {
        title: "SC / ST Promoters",
        description: "Scheduled Caste or Scheduled Tribe individuals setting up new commercial ventures."
      },
      {
        title: "Greenfield Requirement",
        description: "The venture must be a first-time enterprise in manufacturing, services, trading, or agri-allied sector."
      },
      {
        title: "Shareholding Condition",
        description: "In case of non-individual enterprises, at least 51% shareholding must be held by SC/ST or Women."
      },
      {
        title: "Credit Discipline",
        description: "Borrower should not be in default to any bank or financial institution."
      },
      {
        title: "Agri-Allied Inclusion",
        description: "Activities allied to agriculture such as dairy, poultry, pisciculture, and agro-processing are fully eligible."
      }
    ],
    keyFeatures: [
      {
        title: "₹10L to ₹1 Crore Loan",
        description: "Composite loan covering term loan for plant/machinery and working capital for operations."
      },
      {
        title: "Low Margin Money (15%)",
        description: "Borrower needs to bring only 15% margin money, which can be converged with eligible state subsidies."
      },
      {
        title: "Credit Guarantee Support",
        description: "Backed by National Credit Guarantee Trustee Company (NCGTC) for collateral-free security."
      },
      {
        title: "Handholding Support",
        description: "Dedicated Stand-Up India portal providing guidance on DPR preparation, factoring, and mentorship."
      },
      {
        title: "Concessional Interest Rates",
        description: "Interest rate is capped at bank's lowest applicable rate for the category (MCLR + 3% + tenor premium)."
      },
      {
        title: "Repayment Tenure up to 7 Years",
        description: "Flexible repayment period up to 7 years with a moratorium period of up to 18 months."
      }
    ],
    benefits: [
      "High-value institutional funding up to ₹1 Crore with low promoter equity contribution.",
      "Both term loan (for factory/machinery) and working capital (cash credit overdraft) sanctioned in single file.",
      "Repayment flexibility with up to 18-month moratorium during plant construction and setup phase.",
      "Support from SIDBI and NABARD handholding agencies for business registration and licensing.",
      "Eligible to combine with state capital subsidies to further reduce effective margin money requirement.",
      "Access to working capital withdrawal through RuPay debit card."
    ],
    processSteps: [
      {
        step: "01",
        title: "Register on Stand-Up Portal",
        description: "Create borrower profile on Stand-Up India portal as a Trainee or Ready Borrower."
      },
      {
        step: "02",
        title: "Bankable Project Report",
        description: "Draft comprehensive DPR detailing project outlay, supplier quotations, and projected balance sheet."
      },
      {
        step: "03",
        title: "Bank Branch Allocation",
        description: "Application is assigned to designated public/private bank branch mandated under Stand-Up India."
      },
      {
        step: "04",
        title: "Sanction & Handholding",
        description: "Bank conducts appraisal, sanctions loan, and issues sanction letter with RuPay card."
      }
    ],
    documentsRequired: [
      "Proof of Identity (Aadhaar Card, Passport, Voter ID, PAN Card)",
      "Proof of Residence and Business Address Proof",
      "Caste Certificate (for SC/ST applicants)",
      "Detailed Project Report (DPR) with financial feasibility",
      "Quotations for machinery, equipment, and civil work estimates",
      "Lease Deed / Rent Agreement of factory or office premises",
      "Partnership Deed / MOA & AOA with 51% women or SC/ST ownership proof"
    ],
    faqs: [
      {
        question: "Can an existing enterprise apply for Stand-Up India loan?",
        answer: "Stand-Up India is strictly for greenfield enterprises, meaning the first-time venture of the beneficiary."
      },
      {
        question: "What is the margin money requirement under Stand-Up India?",
        answer: "The scheme envisages up to 15% margin money, which can be further lowered if converged with state subsidy schemes."
      },
      {
        question: "Are trading and service businesses eligible?",
        answer: "Yes, manufacturing, services, trading, and agri-allied activities (dairy, poultry, agri-logistics) are eligible."
      },
      {
        question: "How does Growthora help in securing Stand-Up India loans?",
        answer: "Growthora provides professional DPR preparation, project cost optimization, portal filing, and bank branch coordination."
      }
    ],
    ctaHeading: "Ready to Apply for Stand-Up India Scheme: Get ₹10 Lakh to ₹1 Crore Loans for Women & SC/ST?",
    ctaSubheading: "Get expert project report preparation, bank documentation and complete handholding from Growthora."
  },

  "zed-scheme": {
    slug: "zed-scheme",
    categoryBadge: "MSME Quality & Sustainability Grant",
    title: "MSME ZED Scheme: Get Up to 80% Subsidy for Zero Defect Zero Effect Certification",
    subtitle: "Ministry of Micro, Small and Medium Enterprises",
    description: "Financial assistance and subsidies up to ₹5 Lakhs for MSMEs to adopt sustainable, zero-defect manufacturing standards and achieve Bronze, Silver, or Gold ZED Certification.",
    applyLinkText: "Apply Now →",
    metrics: [
      { label: "Grant Subsidy", value: "Up to 80%" },
      { label: "Handholding", value: "Up to ₹5 Lakh" },
      { label: "Levels", value: "Bronze, Silver, Gold" },
      { label: "Eligibility", value: "All Udyam MSMEs" }
    ],
    whoCanApply: [
      {
        title: "All Manufacturing MSMEs",
        description: "Any registered manufacturing enterprise holding active Udyam Registration."
      },
      {
        title: "Micro Enterprises",
        description: "Receive maximum 80% subsidy on certification costs, testing fees, and handholding consulting."
      },
      {
        title: "Small Enterprises",
        description: "Receive 60% government subsidy on all assessment and certification components."
      },
      {
        title: "Medium Enterprises",
        description: "Receive 50% government subsidy on assessment and technology upgradation consulting."
      },
      {
        title: "Women & SC/ST Owned",
        description: "Additional 10% bonus subsidy for enterprises owned by women, SC/ST, and NER promoters."
      },
      {
        title: "Export-Oriented Units",
        description: "MSMEs seeking global quality recognition, European CE compliance, and ISO alignment."
      }
    ],
    keyFeatures: [
      {
        title: "3 Certification Levels",
        description: "Step-by-step certification model across Bronze (5 parameters), Silver (14 parameters), and Gold (20 parameters)."
      },
      {
        title: "Up to ₹5 Lakhs Handholding Support",
        description: "Financial grant up to ₹5 Lakhs per MSME for hiring expert consultants for factory floor transformation."
      },
      {
        title: "Up to ₹3 Lakhs Technology Support",
        description: "Subsidies for zero-defect testing equipment, pollution control instruments, and software."
      },
      {
        title: "Concessions on Bank Loans",
        description: "Leading public banks offer 0.5% concession on interest rates and 50% waiver on processing fees for ZED units."
      },
      {
        title: "Railway & PSU Tender Preference",
        description: "ZED-certified enterprises receive preference points in Indian Railways and Defence public procurements."
      },
      {
        title: "Free Wash Pledge & Self-Assessment",
        description: "Zero cost for initial online registration, training modules, and self-assessment checklist."
      }
    ],
    benefits: [
      "Up to 80% direct subsidy on certification fees (Bronze: ₹10,000, Silver: ₹40,000, Gold: ₹90,000).",
      "Up to ₹5 Lakhs consulting grant for implementing Lean, 5S, Kaizen, and energy-saving systems.",
      "0.5% interest rate discount on bank term loans and working capital limits from SBI, PNB, and Bank of Baroda.",
      "Substantial reduction in factory rejection rates, scrap generation, and environmental pollution.",
      "Global credibility and priority onboarding as vendor for multinational OEMs and corporate supply chains.",
      "Reimbursement of testing and international quality certification expenses."
    ],
    processSteps: [
      {
        step: "01",
        title: "Udyam Registration & Pledge",
        description: "Register on ZED portal with Udyam ID and take the online ZED pledge."
      },
      {
        step: "02",
        title: "Desktop Assessment",
        description: "Complete online self-assessment and upload quality/safety evidence for Bronze level."
      },
      {
        step: "03",
        title: "Site Assessment by Accredited Agency",
        description: "QCI/NABCB accredited assessor conducts physical inspection for Silver and Gold certification."
      },
      {
        step: "04",
        title: "Certification & Subsidy Credit",
        description: "Receive ZED certificate with government subsidy credited directly to your bank account."
      }
    ],
    documentsRequired: [
      "Udyam Registration Certificate and PAN Card",
      "Factory License and Proof of Manufacturing Facility",
      "Pollution Control Board Clearance / Consent to Operate",
      "Standard Operating Procedures (SOPs) for Quality & Safety",
      "Electricity Bill and Factory Layout Map",
      "Bank Account Details for Direct Benefit Transfer (DBT) subsidy"
    ],
    faqs: [
      {
        question: "What are the three levels under the MSME ZED Scheme?",
        answer: "The scheme has three certification levels: Bronze (evaluates 5 core parameters), Silver (14 parameters), and Gold (20 comprehensive quality and environmental parameters)."
      },
      {
        question: "How much subsidy does a Micro enterprise get under ZED?",
        answer: "Micro enterprises receive 80% subsidy. Women-owned or SC/ST-owned units get an additional 10%, making it 90% government subsidy."
      },
      {
        question: "Do banks offer interest rate discounts for ZED certified units?",
        answer: "Yes, major banks like SBI, PNB, and Canara Bank provide up to 0.50% concession on loan interest rates and 50% waiver on processing fees for ZED certified MSMEs."
      },
      {
        question: "How does Growthora help in obtaining ZED certification?",
        answer: "Growthora provides end-to-end documentation, factory audit readiness, gap analysis, SOP preparation, and liaison with QCI inspection agencies."
      }
    ],
    ctaHeading: "Ready to Apply for MSME ZED Scheme: Get Up to 80% Subsidy for Zero Defect Zero Effect Certification?",
    ctaSubheading: "Get expert factory assessment, documentation support, and complete assistance for ZED certification."
  }
};

// Aliases for scheme slugs (e.g. /schemes/pmegp, /schemes/pmegp-scheme, /schemes/mudra-loan, /schemes/pmmy-mudra-loan)
SCHEME_DETAIL_PAGES["pmegp-scheme"] = SCHEME_DETAIL_PAGES["pmegp"];
SCHEME_DETAIL_PAGES["pmmy-mudra-loan"] = SCHEME_DETAIL_PAGES["mudra-loan"];
SCHEME_DETAIL_PAGES["mudra-scheme"] = SCHEME_DETAIL_PAGES["mudra-loan"];
SCHEME_DETAIL_PAGES["cgtmse-scheme"] = SCHEME_DETAIL_PAGES["cgtmse"];
SCHEME_DETAIL_PAGES["pmfme-scheme"] = SCHEME_DETAIL_PAGES["pmfme"];
SCHEME_DETAIL_PAGES["tufs-scheme"] = SCHEME_DETAIL_PAGES["tufs"];
SCHEME_DETAIL_PAGES["atufs"] = SCHEME_DETAIL_PAGES["tufs"];
SCHEME_DETAIL_PAGES["clcss-scheme"] = SCHEME_DETAIL_PAGES["clcss"];
SCHEME_DETAIL_PAGES["stand-up-india"] = SCHEME_DETAIL_PAGES["standup-india"];
SCHEME_DETAIL_PAGES["stand-up-india-scheme"] = SCHEME_DETAIL_PAGES["standup-india"];
SCHEME_DETAIL_PAGES["msme-zed-scheme"] = SCHEME_DETAIL_PAGES["zed-scheme"];
SCHEME_DETAIL_PAGES["zed"] = SCHEME_DETAIL_PAGES["zed-scheme"];
SCHEME_DETAIL_PAGES["sisfs"] = SCHEME_DETAIL_PAGES["startup-india-seed-fund"];
SCHEME_DETAIL_PAGES["startup-india"] = SCHEME_DETAIL_PAGES["startup-india-seed-fund"];

/**
 * Resolves scheme page data from any slug format:
 * - "pmegp"
 * - "schemes/pmegp"
 * - "/schemes/pmegp"
 * - "/schemes/pmegp-scheme"
 */
export function getSchemePageBySlug(rawSlug: string): SchemePageData | undefined {
  if (!rawSlug) return undefined;
  
  // Clean leading/trailing slashes and prefixes
  let clean = rawSlug.trim().toLowerCase();
  clean = clean.replace(/^#\/?/, '');
  clean = clean.replace(/^\/+|\/+$/g, '');
  if (clean.startsWith('schemes/')) {
    clean = clean.replace(/^schemes\//, '');
  }
  
  return SCHEME_DETAIL_PAGES[clean];
}

export function getAllSchemeSlugs(): string[] {
  return Object.keys(SCHEME_DETAIL_PAGES);
}

