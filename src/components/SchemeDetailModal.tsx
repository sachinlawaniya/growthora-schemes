import React from 'react';
import { Scheme } from '../data/schemesData';
import { X, CheckCircle2, FileText, ArrowRight, ShieldCheck, Building } from 'lucide-react';

interface SchemeDetailModalProps {
  scheme: Scheme | null;
  onClose: () => void;
  onApply: (schemeName: string) => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({ scheme, onClose, onApply }) => {
  if (!scheme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0D1836] via-[#162342] to-[#0D1836] p-6 text-white relative border-b border-orange-500/20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-block px-2.5 py-0.5 rounded-md bg-orange-500/20 text-orange-300 border border-orange-400/30 text-[10px] font-extrabold uppercase tracking-wider mb-2">
            {scheme.badge} Scheme
          </div>
          
          <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
            {scheme.fullName}
          </h2>
          <p className="text-slate-300 text-xs mt-1">
            Short Name: <span className="font-bold text-orange-400">{scheme.name}</span>
          </p>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
          
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-orange-50/50 rounded-xl border border-orange-100">
            <div>
              <span className="text-[10.5px] font-bold text-slate-500 uppercase block">Funding Limit</span>
              <strong className="text-[14px] font-extrabold text-orange-600">{scheme.fundingAmount}</strong>
            </div>
            <div>
              <span className="text-[10.5px] font-bold text-slate-500 uppercase block">Subsidy / Support</span>
              <strong className="text-[14px] font-extrabold text-[#0D1836]">{scheme.subsidyRate}</strong>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[10.5px] font-bold text-slate-500 uppercase block">Status</span>
              <span className="inline-flex items-center gap-1 text-[12px] font-bold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" /> Active & Open
              </span>
            </div>
          </div>

          {/* Scheme Overview */}
          <div>
            <h3 className="text-[14px] font-bold text-[#0D1836] mb-1.5 flex items-center gap-1.5">
              <Building className="w-4 h-4 text-orange-500" />
              Scheme Overview
            </h3>
            <p className="text-[13px] text-slate-600 leading-relaxed">
              {scheme.description}
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div>
            <h3 className="text-[14px] font-bold text-[#0D1836] mb-1.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              Eligibility Criteria
            </h3>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[12.5px] text-slate-600 leading-relaxed">
              {scheme.eligibility}
            </div>
          </div>

          {/* Target Sectors */}
          <div>
            <h3 className="text-[14px] font-bold text-[#0D1836] mb-2">Target Sectors</h3>
            <div className="flex flex-wrap gap-1.5">
              {scheme.targetSectors.map((sector) => (
                <span key={sector} className="px-2.5 py-1 rounded-md bg-orange-50 text-orange-700 border border-orange-100 text-[11px] font-semibold">
                  {sector}
                </span>
              ))}
            </div>
          </div>

          {/* Documents Required */}
          <div>
            <h3 className="text-[14px] font-bold text-[#0D1836] mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-orange-500" />
              Documents Required
            </h3>
            <ul className="space-y-2">
              {scheme.documentsNeeded.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[12.5px] text-slate-600">
                  <span className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[12px] text-slate-500">
            Need assistance with DPR or application filing?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-bold hover:bg-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(scheme.name);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold hover:from-orange-600 hover:to-amber-600 transition-colors shadow-sm cursor-pointer"
            >
              <span>Apply With Growthora</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
