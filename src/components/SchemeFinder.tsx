import React, { useState, useMemo } from 'react';
import { ArrowRight, Sparkles, DollarSign, Percent, Gift, ShieldAlert, Rocket, Award, Factory, Briefcase, RefreshCw, Sprout, UtensilsCrossed } from 'lucide-react';
import { SCHEMES, Scheme } from '../data/schemesData';

interface SchemeFinderProps {
  onFilterChange: (filters: { lookingFor: string; businessType: string; fundingAmount: string }, matches: Scheme[]) => void;
}

export const SchemeFinder: React.FC<SchemeFinderProps> = ({ onFilterChange }) => {
  const [lookingFor, setLookingFor] = useState<string>("Funding");
  const [businessType, setBusinessType] = useState<string>("Services");
  const [fundingAmount, setFundingAmount] = useState<string>("₹10L – ₹50L");

  const lookingForOptions = [
    { label: "Funding", icon: DollarSign },
    { label: "Subsidy", icon: Percent },
    { label: "Grant", icon: Gift },
    { label: "Credit Guarantee", icon: ShieldAlert },
    { label: "Startup Support", icon: Rocket },
    { label: "Certification", icon: Award },
  ];

  const businessTypeOptions = [
    { label: "Manufacturing", icon: Factory },
    { label: "Services", icon: Briefcase },
    { label: "Trading", icon: RefreshCw },
    { label: "Startup", icon: Rocket },
    { label: "Agriculture", icon: Sprout },
    { label: "Food Processing", icon: UtensilsCrossed },
  ];

  const fundingOptions = [
    "Below ₹10L",
    "₹10L – ₹50L",
    "₹50L – ₹1Cr",
    "₹1Cr – ₹5Cr",
    "Above ₹5Cr",
    "Not Sure",
  ];

  // Real-time matching algorithm
  const matchingSchemes = useMemo(() => {
    return SCHEMES.map((scheme) => {
      let score = 0;
      if (scheme.supportTypes.includes(lookingFor)) score += 40;
      if (scheme.businessTypes.includes(businessType)) score += 35;
      if (scheme.fundingTiers.includes(fundingAmount) || fundingAmount === "Not Sure") score += 25;

      return {
        ...scheme,
        matchScore: score,
      };
    })
      .filter((s) => s.matchScore > 25)
      .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
  }, [lookingFor, businessType, fundingAmount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ lookingFor, businessType, fundingAmount }, matchingSchemes.length > 0 ? matchingSchemes : SCHEMES);
    const schemesSection = document.getElementById('schemes');
    schemesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleOptionChange = (type: 'lookingFor' | 'businessType' | 'fundingAmount', val: string) => {
    let newLooking = lookingFor;
    let newBiz = businessType;
    let newFund = fundingAmount;

    if (type === 'lookingFor') {
      setLookingFor(val);
      newLooking = val;
    } else if (type === 'businessType') {
      setBusinessType(val);
      newBiz = val;
    } else if (type === 'fundingAmount') {
      setFundingAmount(val);
      newFund = val;
    }

    // Live update results instantly
    const liveMatches = SCHEMES.map((scheme) => {
      let score = 0;
      if (scheme.supportTypes.includes(newLooking)) score += 40;
      if (scheme.businessTypes.includes(newBiz)) score += 35;
      if (scheme.fundingTiers.includes(newFund) || newFund === "Not Sure") score += 25;

      return { ...scheme, matchScore: score };
    })
      .filter((s) => s.matchScore > 25)
      .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));

    onFilterChange(
      { lookingFor: newLooking, businessType: newBiz, fundingAmount: newFund },
      liveMatches.length > 0 ? liveMatches : SCHEMES
    );
  };

  return (
    <section id="finder" className="pt-12 relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="border border-slate-200/90 rounded-3xl p-6 sm:p-9 bg-white/95 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">

          {/* Subtle top decorative animated gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 animate-gradient-flow" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100/90 relative z-10">
            <div>
              <div className="text-[12px] font-bold uppercase tracking-wider text-orange-500 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Find Your Opportunity
              </div>
              <h2 className="font-heading font-bold text-[24px] sm:text-[30px] text-[#0D1836] tracking-tight">
                Which Government Scheme Fits Your Business?
              </h2>
              <p className="text-[14px] text-slate-500 mt-1 max-w-2xl">
                Answer 3 quick questions and discover schemes matching your business profile, funding requirement, and sector.
              </p>
            </div>

            <div className="shrink-0 bg-orange-50/90 border border-orange-200/80 rounded-2xl px-4 py-2.5 text-center shadow-xs hidden sm:block">
              <span className="text-[12px] font-bold text-orange-600 leading-tight block">
                ⚡ Real-time Match Algorithm<br />
                <span className="text-[11px] text-slate-500 font-medium">Under 1 minute check</span>
              </span>
            </div>
          </div>

          {/* 3 Step Interactive Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 relative z-10">

            {/* Step 1: What are you looking for? */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[13px] font-bold text-[#0D1836]">
                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-bold flex items-center justify-center shadow-2xs">1</span>
                <span>What are you looking for?</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {lookingForOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = lookingFor === opt.label;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleOptionChange('lookingFor', opt.label)}
                      className={`min-h-[70px] p-2 rounded-xl border text-center flex flex-col items-center justify-center gap-1.5 transition-all text-[11px] font-semibold cursor-pointer ${isSelected
                        ? 'bg-orange-50 border-orange-500 text-orange-600 ring-2 ring-orange-500/25 shadow-xs scale-[1.02]'
                        : 'bg-white/90 border-slate-200 text-slate-700 hover:border-orange-200 hover:bg-orange-50/40 hover:scale-[1.01]'
                        }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-orange-500 scale-110' : 'text-slate-400'} transition-transform`} />
                      <span className="leading-tight">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: What's your business type? */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[13px] font-bold text-[#0D1836]">
                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-bold flex items-center justify-center shadow-2xs">2</span>
                <span>What's your business type?</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {businessTypeOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = businessType === opt.label;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleOptionChange('businessType', opt.label)}
                      className={`min-h-[70px] p-2 rounded-xl border text-center flex flex-col items-center justify-center gap-1.5 transition-all text-[11px] font-semibold cursor-pointer ${isSelected
                        ? 'bg-orange-50 border-orange-500 text-orange-600 ring-2 ring-orange-500/25 shadow-xs scale-[1.02]'
                        : 'bg-white/90 border-slate-200 text-slate-700 hover:border-orange-200 hover:bg-orange-50/40 hover:scale-[1.01]'
                        }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-orange-500 scale-110' : 'text-slate-400'} transition-transform`} />
                      <span className="leading-tight">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: How much funding do you need? */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[13px] font-bold text-[#0D1836]">
                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-bold flex items-center justify-center shadow-2xs">3</span>
                <span>How much funding do you need?</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {fundingOptions.map((opt) => {
                  const isSelected = fundingAmount === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleOptionChange('fundingAmount', opt)}
                      className={`min-h-[70px] p-2 rounded-xl border text-center flex items-center justify-center transition-all text-[11px] font-bold cursor-pointer ${isSelected
                        ? 'bg-orange-50 border-orange-500 text-orange-600 ring-2 ring-orange-500/25 shadow-xs scale-[1.02]'
                        : 'bg-white/90 border-slate-200 text-slate-700 hover:border-orange-200 hover:bg-orange-50/40 hover:scale-[1.01]'
                        }`}
                    >
                      <span className="leading-tight">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Action Submit with Live Count */}
          <div className="pt-8 text-center flex flex-col items-center justify-center relative z-10">
            <button
              onClick={handleSubmit}
              className="shimmer-btn inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white font-bold text-[14px] px-8 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer min-w-[300px]"
            >
              <span>
                Show {matchingSchemes.length > 0 ? `${matchingSchemes.length} Matching Schemes` : "Matching Schemes"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[12px] text-slate-500 mt-2.5">
              Selected: <strong className="text-slate-800">{lookingFor}</strong> • <strong className="text-slate-800">{businessType}</strong> • <strong className="text-slate-800">{fundingAmount}</strong>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
