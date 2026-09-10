import React from 'react';
import { ArrowRight, Search, FileCheck, FileSpreadsheet, Send, Sparkles } from 'lucide-react';

interface SupportSectionProps {
  onOpenConsultation: () => void;
}

export const SupportSection: React.FC<SupportSectionProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      title: "Scheme Identification",
      desc: "Find and benchmark the best-fit government schemes for your business sector.",
      icon: Search,
    },
    {
      title: "Eligibility Assessment",
      desc: "Understand your chances of subsidy and loan approval before applying.",
      icon: FileCheck,
    },
    {
      title: "Documentation & DPR Support",
      desc: "Complete project reports, financial projections, and paperwork preparation.",
      icon: FileSpreadsheet,
    },
    {
      title: "Application Assistance",
      desc: "End-to-end guidance till sanction, bank coordination, and subsidy disbursement.",
      icon: Send,
    },
  ];

  return (
    <section id="support" className="pt-10 pb-12 relative overflow-hidden">
      {/* Background ambient texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Deep Navy Card with Animated Textures & Ambient Glows */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#0D1836] via-[#152347] to-[#080E21] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl border border-slate-800/80">

            {/* Background Animated Textures */}
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-blue-500/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />

            <div className="relative z-10">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange-400 mb-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-400/30">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                More Than Schemes
              </span>
              <h2 className="font-heading font-extrabold text-[26px] sm:text-[32px] leading-tight text-white mb-3 mt-1">
                End-to-End Support for Your Funding Journey
              </h2>
              <p className="text-[13.5px] text-slate-300 leading-relaxed max-w-sm mb-6">
                From identifying the right government grant to project report drafting and bank sanction, Growthora stands by your side at every milestone.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <button
                onClick={onOpenConsultation}
                className="shimmer-btn inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white font-bold text-[13.5px] px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Detailed Steps Card */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-7 sm:p-9 flex flex-col md:flex-row gap-6 items-center justify-between shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

            {/* Step list */}
            <div className="flex-1 space-y-4.5 w-full relative z-10">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start p-2.5 rounded-2xl hover:bg-orange-50/50 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 mt-0.5 border border-orange-100 shadow-2xs group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-[#0D1836] leading-snug group-hover:text-orange-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[12px] text-slate-500 leading-relaxed mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Graphic Visual Representation with pulsating glow */}
            <div className="w-full md:w-[180px] shrink-0 h-[210px] rounded-2xl bg-gradient-to-br from-[#0D1836] via-[#162547] to-[#0D1836] p-4 text-white flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute inset-0 bg-dot-pattern-dark opacity-40 pointer-events-none" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-pulse-glow" />

              <div className="relative z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 block">Growthora</span>
                <span className="text-[13.5px] font-bold text-white block mt-0.5 leading-snug">Advisory Network</span>
              </div>
              
              <div className="relative z-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-2.5 text-center shadow-md animate-float-slow">
                <strong className="text-[12px] font-extrabold block text-white">Your Growth</strong>
                <span className="text-[9.5px] text-orange-100 flex items-center justify-center gap-1 mt-0.5 font-bold">
                  Our Support ↗
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
