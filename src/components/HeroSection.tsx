import React from 'react';
import { ArrowRight, Award, ShieldCheck, TrendingUp, Building, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onFindScheme: () => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onFindScheme, onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5EA] via-[#FFFBF6] to-[#FAF6F0] border-b border-orange-200/90 pt-12 pb-14 sm:pt-16 sm:pb-20 text-slate-900">
      
      {/* 1. Dynamic SVG Topographic Elevation Wave Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute w-[140%] h-[140%] -top-[20%] -left-[20%] opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          fill="none"
        >
          <path
            d="M-100 250 C 300 150, 600 350, 1000 200 C 1200 120, 1400 280, 1600 220"
            stroke="url(#warm-wave-grad-1)"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
          <path
            d="M-100 380 C 250 280, 550 480, 950 320 C 1250 200, 1450 380, 1600 340"
            stroke="url(#warm-wave-grad-2)"
            strokeWidth="1.75"
          />
          <path
            d="M-100 520 C 350 400, 700 620, 1100 460 C 1350 360, 1500 500, 1600 480"
            stroke="url(#warm-wave-grad-1)"
            strokeWidth="2.2"
          />
          <path
            d="M-100 660 C 400 550, 800 750, 1200 600 C 1400 520, 1550 620, 1600 600"
            stroke="url(#warm-wave-grad-2)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          {/* Glowing Financial Network Nodes on Curves */}
          <circle cx="300" cy="150" r="4.5" fill="#ea580c" opacity="0.6" />
          <circle cx="600" cy="350" r="5.5" fill="#f97316" opacity="0.7" />
          <circle cx="1000" cy="200" r="4" fill="#ea580c" opacity="0.5" />
          <circle cx="550" cy="480" r="6" fill="#f97316" opacity="0.65" />
          <circle cx="950" cy="320" r="5" fill="#c2410c" opacity="0.6" />
          <circle cx="700" cy="620" r="5.5" fill="#ea580c" opacity="0.5" />

          <defs>
            <linearGradient id="warm-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="warm-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ea580c" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. High-Tech Blueprint Plus Matrix Pattern */}
      <div className="absolute inset-0 bg-plus-matrix opacity-40 pointer-events-none" />

      {/* 3. Subtle Warm Ambient Orbs */}
      <div className="absolute -top-16 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/20 via-amber-300/15 to-transparent rounded-full pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-[450px] h-[450px] bg-gradient-to-tr from-amber-400/15 via-orange-300/15 to-transparent rounded-full pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px]">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow badge with live pulse indicator */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-orange-700 text-[11.5px] font-extrabold uppercase tracking-wider border border-orange-300 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                </span>
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Government Funding & Support 2026</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.08] tracking-tight text-slate-900 mb-4">
              Find the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 relative inline-block">
                Right Scheme
              </span>
              <br />
              <span className="text-slate-900">for Your Business Growth</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-700 text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-[580px] mb-7 font-medium">
              Explore 100+ verified government schemes, capital subsidies, and collateral-free credit support programs designed for Indian MSMEs, startups, and growing enterprises.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={onFindScheme}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white font-bold text-[14.5px] px-7 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Find My Scheme</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-orange-50 text-slate-900 font-bold text-[14px] px-6 py-3.5 rounded-xl border border-orange-300 hover:border-orange-500 hover:text-orange-700 hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                <span>Talk to an Expert</span>
                <ArrowUpRight className="w-4 h-4 text-orange-600" />
              </button>
            </div>

            {/* Mini Trust Badges (4 Columns in Crisp Card Container) */}
            <div className="p-3.5 bg-white/95 rounded-2xl border border-orange-200/90 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="flex items-center gap-2 p-1">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 shrink-0 border border-orange-200 shadow-2xs">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-slate-900 block leading-none">100+</strong>
                  <span className="text-[10.5px] font-medium text-slate-600">Schemes</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 shrink-0 border border-orange-200 shadow-2xs">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-slate-900 block leading-none">5,000+</strong>
                  <span className="text-[10.5px] font-medium text-slate-600">Businesses</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 shrink-0 border border-orange-200 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-slate-900 block leading-none">Verified</strong>
                  <span className="text-[10.5px] font-medium text-slate-600">Criteria</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 shrink-0 border border-orange-200 shadow-2xs">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-slate-900 block leading-none">End-to-End</strong>
                  <span className="text-[10.5px] font-medium text-slate-600">DPR Support</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image with Polished Floating Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Ambient decorative border highlight around visual */}
            <div className="relative w-full max-w-[560px] rounded-2xl overflow-hidden shadow-xl border border-orange-200 bg-white group">
              <img
                src="/hero_funding.jpg"
                alt="Government Funding — Find Your Opportunity with Growthora"
                className="w-full h-auto object-contain block rounded-2xl transform group-hover:scale-[1.012] transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-orange-900/5 pointer-events-none" />
            </div>

            {/* Floating Live Metric Card */}
            <div className="absolute -bottom-10 -left-3 sm:-left-5 bg-white rounded-2xl p-3 sm:p-3.5 shadow-lg border border-orange-200 animate-float-slow hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 block">
                  100% Verified Schemes
                </span>
                <span className="text-[12.5px] font-bold text-slate-900">
                  Up to ₹50L+ Max Subsidies
                </span>
              </div>
            </div>

            {/* Floating Top Match Card */}
            <div className="absolute -top-12 -right-3 sm:-right-5 bg-white rounded-2xl p-3 sm:p-3.5 shadow-lg border border-orange-200 animate-float-reverse hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold border border-orange-200 shadow-2xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-800 block">
                  Fast Approvals
                </span>
                <span className="text-[12.5px] font-bold text-slate-900">
                  Dedicated DPR Support
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};




