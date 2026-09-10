import React from 'react';
import { ArrowRight, Award, ShieldCheck, TrendingUp, Building, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onFindScheme: () => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onFindScheme, onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/60 via-orange-50/25 to-white border-b border-slate-200/80 pt-12 pb-10 sm:py-16">
      {/* Background Animated Textures & Geometric Grids */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
      
      {/* Decorative ambient glowing orbs with smooth breathing animations */}
      <div className="absolute -top-16 -right-16 w-[450px] h-[450px] bg-orange-400/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-amber-300/10 rounded-full blur-2xl pointer-events-none animate-float-slow" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[440px]">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow badge with live pulse indicator */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50/90 text-orange-600 text-[11.5px] font-extrabold uppercase tracking-wider border border-orange-200/80 shadow-2xs backdrop-blur-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <Sparkles className="w-3 h-3 text-orange-500" />
                Government Funding & Support 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-[30px] sm:text-[38px] md:text-[44px] leading-[1.08] tracking-tight text-[#0D1836] mb-4">
              Find the <span className="text-orange-500 relative inline-block">
                Right
                <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-orange-400/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              <span className="text-orange-500">Government Scheme</span>
              <br />
              for Your Business
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-[580px] mb-7">
              Explore 100+ verified government schemes, grants, capital subsidies and collateral-free credit support programs tailored for Indian MSMEs, startups, and expanding businesses.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={onFindScheme}
                className="shimmer-btn inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white font-bold text-[14px] px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Find My Scheme</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-xs text-slate-800 font-bold text-[14px] px-5 py-3.5 rounded-xl border border-slate-300 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50/60 hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer shadow-xs"
              >
                Talk to an Expert
              </button>
            </div>

            {/* Mini Trust Badges (4 Columns) with micro hover glow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-slate-200/90">
              <div className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 border border-orange-100 shadow-2xs">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-[#0D1836] block leading-none">100+</strong>
                  <span className="text-[10px] font-medium text-slate-500">Schemes</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 border border-orange-100 shadow-2xs">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-[#0D1836] block leading-none">5,000+</strong>
                  <span className="text-[10px] font-medium text-slate-500">Businesses</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 border border-orange-100 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-[#0D1836] block leading-none">Verified</strong>
                  <span className="text-[10px] font-medium text-slate-500">Information</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 border border-orange-100 shadow-2xs">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-[#0D1836] block leading-none">End-to-End</strong>
                  <span className="text-[10px] font-medium text-slate-500">Handholding</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image with animated floating badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient decorative glow around visual */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-3xl blur-xl pointer-events-none" />

            <div className="relative w-full max-w-[560px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white group">
              <img
                src="/hero_funding.jpg"
                alt="Government Funding — Find Your Opportunity with Growthora"
                className="w-full h-auto object-contain block rounded-2xl transform group-hover:scale-[1.015] transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none" />
            </div>

            {/* Floating Live Metric Card */}
            <div className="absolute -bottom-3 -left-3 sm:-left-6 glass-panel rounded-2xl p-3 sm:p-3.5 shadow-xl border border-white/80 animate-float-slow hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold border border-emerald-200/80 shadow-2xs">
                ✓
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                  100% Verified Schemes
                </span>
                <span className="text-[12.5px] font-bold text-[#0D1836]">
                  ₹50L+ Max Subsidies
                </span>
              </div>
            </div>

            {/* Floating Top Match Card */}
            <div className="absolute -top-3 -right-3 sm:-right-6 glass-panel rounded-2xl p-3 sm:p-3.5 shadow-xl border border-white/80 animate-float-reverse hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold border border-orange-200/80 shadow-2xs">
                ★
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-700 block">
                  Fast Approvals
                </span>
                <span className="text-[12.5px] font-bold text-[#0D1836]">
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
