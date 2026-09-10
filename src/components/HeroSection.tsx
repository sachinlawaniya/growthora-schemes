import React from 'react';
import { ArrowRight, Award, ShieldCheck, TrendingUp, Building, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onFindScheme: () => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onFindScheme, onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7ED] via-[#FFFDFB] to-[#F8FAFC] border-b border-slate-200/90 pt-12 pb-14 sm:pt-16 sm:pb-20">
      
      {/* 1. Perspective 3D Grid SVG Texture with Smooth Radial Mask */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(249, 115, 22, 0.12)" strokeWidth="1" />
            </pattern>
            <radialGradient id="hero-grid-mask-grad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#000" stopOpacity="1" />
              <stop offset="70%" stopColor="#000" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <mask id="hero-grid-mask">
              <rect width="100%" height="100%" fill="url(#hero-grid-mask-grad)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" mask="url(#hero-grid-mask)" />
        </svg>
      </div>

      {/* 2. High-Tech Dot Matrix Texture Overlay */}
      <div className="absolute inset-0 bg-brand-dot-pattern opacity-35 pointer-events-none" />

      {/* 3. Subtle Modern Geometric Ambient Rings */}
      <div className="absolute top-6 right-8 w-96 h-96 rounded-full border border-orange-200/50 pointer-events-none opacity-60 animate-spin-slow hidden md:block" />
      <div className="absolute top-16 right-18 w-72 h-72 rounded-full border border-dashed border-orange-300/40 pointer-events-none opacity-50 hidden md:block" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 rounded-full border border-slate-200/70 pointer-events-none opacity-50 hidden md:block" />

      {/* 4. Soft Ambient Gradient Glow Highlights */}
      <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/15 via-amber-300/10 to-transparent rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-16 w-[450px] h-[450px] bg-gradient-to-tr from-orange-300/10 via-slate-200/20 to-transparent rounded-full pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px]">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow badge with live pulse indicator */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 text-orange-600 text-[11.5px] font-extrabold uppercase tracking-wider border border-orange-200 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                </span>
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span>Government Funding & Support 2026</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.08] tracking-tight text-[#0D1836] mb-4">
              Find the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 relative inline-block">
                Right Scheme
              </span>
              <br />
              <span className="text-[#0D1836]">for Your Business Growth</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-[580px] mb-7">
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
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0D1836] font-bold text-[14px] px-6 py-3.5 rounded-xl border border-slate-300 hover:border-orange-400 hover:text-orange-600 hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer shadow-xs"
              >
                <span>Talk to an Expert</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Mini Trust Badges (4 Columns in Crisp White Card Container) */}
            <div className="p-3.5 bg-white/95 rounded-2xl border border-slate-200/90 shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="flex items-center gap-2 p-1">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 border border-orange-200 shadow-2xs">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-[#0D1836] block leading-none">100+</strong>
                  <span className="text-[10.5px] font-medium text-slate-500">Schemes</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 border border-orange-200 shadow-2xs">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-[#0D1836] block leading-none">5,000+</strong>
                  <span className="text-[10.5px] font-medium text-slate-500">Businesses</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 border border-orange-200 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-[#0D1836] block leading-none">Verified</strong>
                  <span className="text-[10.5px] font-medium text-slate-500">Criteria</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 border border-orange-200 shadow-2xs">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[13px] font-bold text-[#0D1836] block leading-none">End-to-End</strong>
                  <span className="text-[10.5px] font-medium text-slate-500">DPR Support</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image with Polished Floating Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Ambient decorative border highlight around visual */}
            <div className="relative w-full max-w-[560px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
              <img
                src="/hero_funding.jpg"
                alt="Government Funding — Find Your Opportunity with Growthora"
                className="w-full h-auto object-contain block rounded-2xl transform group-hover:scale-[1.012] transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none" />
            </div>

            {/* Floating Live Metric Card */}
            <div className="absolute -bottom-3 -left-3 sm:-left-5 bg-white/95 rounded-2xl p-3 sm:p-3.5 shadow-lg border border-slate-200 animate-float-slow hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                  100% Verified Schemes
                </span>
                <span className="text-[12.5px] font-bold text-[#0D1836]">
                  Up to ₹50L+ Max Subsidies
                </span>
              </div>
            </div>

            {/* Floating Top Match Card */}
            <div className="absolute -top-3 -right-3 sm:-right-5 bg-white/95 rounded-2xl p-3 sm:p-3.5 shadow-lg border border-slate-200 animate-float-reverse hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold border border-orange-200 shadow-2xs">
                <Sparkles className="w-5 h-5" />
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

