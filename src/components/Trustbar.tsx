import React from 'react';
import { Layers, ShieldCheck, UserCheck, Compass } from 'lucide-react';

export const Trustbar: React.FC = () => {
  return (
    <div className="max-w-[1380px] mx-auto px-4 sm:px-6 pt-6 relative z-20">
      <div className="relative rounded-2xl glass-panel-3d overflow-hidden border border-slate-200/90 shadow-lg">
        <div className="absolute inset-0 bg-isometric-grid opacity-30 pointer-events-none" />

        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 relative z-10">

          <div className="flex items-center justify-center gap-3 py-4 px-4 text-[12.5px] font-bold text-[#0D1836] hover:bg-orange-50/60 transition-colors group">
            <span className="text-orange-600 p-2 rounded-xl bg-orange-50/90 border border-orange-200 shadow-2xs group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
              <Layers className="w-4 h-4" />
            </span>
            <span className="leading-snug">100+ Government Schemes</span>
          </div>

          <div className="flex items-center justify-center gap-3 py-4 px-4 text-[12.5px] font-bold text-[#0D1836] hover:bg-orange-50/60 transition-colors group">
            <span className="text-orange-600 p-2 rounded-xl bg-orange-50/90 border border-orange-200 shadow-2xs group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <span className="leading-snug">100% Verified Information</span>
          </div>

          <div className="flex items-center justify-center gap-3 py-4 px-4 text-[12.5px] font-bold text-[#0D1836] hover:bg-orange-50/60 transition-colors group">
            <span className="text-orange-600 p-2 rounded-xl bg-orange-50/90 border border-orange-200 shadow-2xs group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
              <UserCheck className="w-4 h-4" />
            </span>
            <span className="leading-snug">End-to-End Handholding</span>
          </div>

          <div className="flex items-center justify-center gap-3 py-4 px-4 text-[12.5px] font-bold text-[#0D1836] hover:bg-orange-50/60 transition-colors group">
            <span className="text-orange-600 p-2 rounded-xl bg-orange-50/90 border border-orange-200 shadow-2xs group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
              <Compass className="w-4 h-4" />
            </span>
            <span className="leading-snug">Pan-India Support</span>
          </div>

        </div>
      </div>
    </div>
  );
};
