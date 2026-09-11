import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200/90 pt-14 pb-10 text-[#0D1836] relative overflow-hidden">
      {/* 3D Background Isometric Grid Texture */}
      <div className="absolute inset-0 bg-isometric-grid opacity-25 pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4.5">
            <a href="#" className="flex items-center gap-2 group" aria-label="Growthora Home">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50/90 p-1.5 shadow-xs border border-orange-200/80 group-hover:scale-105 group-hover:shadow-md transition-all">
                <img
                  src="/logo.png"
                  alt="Growthora Logo"
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <span className="font-heading font-bold text-[22px] tracking-tight text-[#0D1836] leading-none block">
                  Growthora
                </span>
                <span className="text-[7.5px] font-bold tracking-[0.18em] text-orange-600 uppercase block mt-0.5">
                  Advisory Private Limited
                </span>
              </div>
            </a>

            <p className="text-[13px] text-slate-500 leading-relaxed max-w-sm">
              Your growth advisory partner for MSME funding, government subsidies, compliance, DPR preparation, and strategic business expansion across India.
            </p>

            {/* Social handles with 3D button effect */}
            <div className="flex items-center gap-2.5 pt-1">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-100/90 hover:bg-orange-500 hover:text-white flex items-center justify-center text-xs font-bold text-slate-700 shadow-2xs hover:shadow-md hover:scale-105 transition-all">
                in
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-100/90 hover:bg-orange-500 hover:text-white flex items-center justify-center text-xs font-bold text-slate-700 shadow-2xs hover:shadow-md hover:scale-105 transition-all">
                𝕏
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-100/90 hover:bg-orange-500 hover:text-white flex items-center justify-center text-xs font-bold text-slate-700 shadow-2xs hover:shadow-md hover:scale-105 transition-all">
                ▶
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-100/90 hover:bg-orange-500 hover:text-white flex items-center justify-center text-xs font-bold text-slate-700 shadow-2xs hover:shadow-md hover:scale-105 transition-all">
                ◎
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-orange-500">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[12.5px] text-slate-600">
              <li><a href="#consult" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#categories" className="hover:text-orange-500 transition-colors">Industries</a></li>
              <li><a href="#schemes" className="hover:text-orange-500 transition-colors">Government Schemes</a></li>
              <li><a href="#support" className="hover:text-orange-500 transition-colors">Growthora Insights</a></li>
              <li><a href="#stories" className="hover:text-orange-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Popular Schemes */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-orange-500">
              Popular Schemes
            </h4>
            <ul className="space-y-2 text-[12.5px] text-slate-600">
              <li><a href="#schemes" className="hover:text-orange-500 transition-colors">PMEGP Capital Subsidy</a></li>
              <li><a href="#schemes" className="hover:text-orange-500 transition-colors">CGTMSE Collateral-Free Loans</a></li>
              <li><a href="#schemes" className="hover:text-orange-500 transition-colors">Startup India Seed Fund</a></li>
              <li><a href="#schemes" className="hover:text-orange-500 transition-colors">PMFME Micro Food Processing</a></li>
              <li><a href="#schemes" className="hover:text-orange-500 transition-colors">MSME ZED Certification Scheme</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-orange-500">
              Newsletter
            </h4>
            <p className="text-[12px] text-slate-500 leading-relaxed">
              Get the latest updates on government notifications, new subsidies, and growth guidelines.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex border border-slate-200 rounded-xl overflow-hidden bg-white focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs text-slate-800 outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="w-10 bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center hover:from-orange-600 hover:to-amber-600 transition-colors cursor-pointer shrink-0"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-orange-600 font-bold block">
                  ✓ Successfully subscribed for updates!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] text-slate-500">
          <span>© 2026 Growthora Advisory Services. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
