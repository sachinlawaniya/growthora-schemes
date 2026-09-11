import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

interface CtaSectionProps {
  onOpenConsultation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="consult" className="py-10 relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#0D1836] via-[#16254a] to-[#091124] border border-slate-700/80 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">

          {/* Animated Background Textures & Ambient Mesh */}
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 animate-gradient-flow" />

          <div className="space-y-2.5 text-center md:text-left relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-400/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              Direct Advisor Connect
            </span>
            <h2 className="font-heading font-bold text-[24px] sm:text-[32px] text-white leading-tight max-w-xl">
              Ready to Explore Government Schemes for Your Business?
            </h2>
            <p className="text-[14px] text-slate-300 max-w-lg">
              Get expert guidance, personalized scheme evaluation and end-to-end documentation support.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3.5 shrink-0 w-full sm:w-auto relative z-10">
            <button
              onClick={onOpenConsultation}
              className="shimmer-btn inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white font-bold text-[14px] px-8 py-4 rounded-xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+919005427979"
              className="inline-flex items-center gap-2 text-[12.5px] font-bold text-orange-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
              <span>+91 90054 27979 · Instant Callback</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
