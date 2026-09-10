import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Phone, Mail, User, Building } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultScheme?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultScheme,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('Manufacturing');
  const [fundingAmount, setFundingAmount] = useState('₹10L – ₹50L');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0D1836] via-[#162342] to-[#0D1836] p-6 text-white relative border-b border-orange-500/20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-400 block mb-1">
            Growthora Advisory
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
            Book Free Scheme Consultation
          </h2>
          <p className="text-slate-300 text-xs mt-1">
            Get personalized scheme match analysis and DPR support from our senior advisors.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-500 mx-auto flex items-center justify-center border border-orange-100">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0D1836]">
                Consultation Request Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{name}</strong>. Our senior government scheme specialist will call you at <strong>{phone}</strong> within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs shadow-sm hover:from-orange-600 hover:to-amber-600"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {defaultScheme && (
                <div className="p-3 bg-orange-50 rounded-xl border border-orange-200 text-xs text-orange-700 font-semibold">
                  Selected Scheme: <strong>{defaultScheme}</strong>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#0D1836] mb-1.5">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0D1836] mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D1836] mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0D1836] mb-1.5">
                    Business Type
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-white"
                    >
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Services">Services / IT</option>
                      <option value="Trading">Trading / Retail</option>
                      <option value="Startup">Early-Stage Startup</option>
                      <option value="Food Processing">Food Processing</option>
                      <option value="Agriculture">Agriculture & Allied</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D1836] mb-1.5">
                    Funding Need
                  </label>
                  <select
                    value={fundingAmount}
                    onChange={(e) => setFundingAmount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-white"
                  >
                    <option value="Below ₹10L">Below ₹10 Lakhs</option>
                    <option value="₹10L – ₹50L">₹10L – ₹50 Lakhs</option>
                    <option value="₹50L – ₹1Cr">₹50L – ₹1 Crore</option>
                    <option value="₹1Cr – ₹5Cr">₹1Cr – ₹5 Crore</option>
                    <option value="Above ₹5Cr">Above ₹5 Crore</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-md hover:from-orange-600 hover:to-amber-600 transition-colors cursor-pointer"
                >
                  <span>Request Free Call Back</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                <span>100% Confidential • No upfront consultation charges</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
