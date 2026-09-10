import React, { useState } from 'react';
import { SchemePageData } from '../data/schemeDetailPagesData';
import { ArrowLeft, ArrowRight, ChevronDown, Sparkles, CheckCircle2, FileText, HelpCircle, Layers, Check, Phone } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface SchemeDetailPageProps {
  pageData: SchemePageData;
  onBack: () => void;
  onOpenConsultation: () => void;
}

export const SchemeDetailPage: React.FC<SchemeDetailPageProps> = ({
  pageData,
  onBack,
  onOpenConsultation,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-900">
      {/* 1. Navbar */}
      <Navbar onOpenConsultation={onOpenConsultation} onNavigateHome={onBack} />

      <main className="flex-1">
        {/* Back navigation breadcrumb bar */}
        <div className="bg-[#FFF5EA] border-b border-orange-200/80 py-3 px-4 sm:px-6">
          <div className="max-w-[1380px] mx-auto flex items-center justify-between">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 hover:text-orange-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Government Schemes</span>
            </button>
            <span className="text-[11.5px] font-semibold text-slate-600 hidden sm:inline-block">
              Growthora Verified Scheme Guide FY 2026
            </span>
          </div>
        </div>

        {/* 2. Hero Section (Rich Warm Orange & Cream Theme with 3D Grid Texture) */}
        <section className="bg-gradient-to-b from-[#FFF3E5] via-[#FFF9F3] to-[#FAF8F5] border-b border-orange-200/80 pt-12 pb-16 relative overflow-hidden">
          
          {/* Visible Warm Orange Grid SVG */}
          <div className="absolute inset-0 pointer-events-none opacity-50">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="detail-warm-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#detail-warm-grid)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-brand-dot-pattern opacity-35 pointer-events-none" />

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column: Heading & Information */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-orange-700 border border-orange-300 text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                  <span>{pageData.categoryBadge}</span>
                </div>

                <h1 className="font-heading font-extrabold text-[32px] sm:text-[40px] md:text-[46px] leading-[1.12] tracking-tight text-slate-900">
                  {pageData.title}
                </h1>

                <p className="text-orange-700 text-sm sm:text-[15px] font-bold tracking-wide">
                  {pageData.subtitle}
                </p>

                <p className="text-slate-700 text-[14.5px] leading-relaxed max-w-xl font-medium">
                  {pageData.description}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all cursor-pointer"
                  >
                    <span>{pageData.applyLinkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+919005427979"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-orange-50 text-slate-900 font-bold text-[13.5px] px-5 py-3.5 rounded-xl border border-orange-300 hover:border-orange-500 transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-orange-600" />
                    <span>Talk to Advisor</span>
                  </a>
                </div>
              </div>

              {/* Right Column: 4 Sharp Warm Metric Highlight Boxes */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                {pageData.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-orange-200 hover:border-orange-500 hover:shadow-md transition-all shadow-sm flex flex-col justify-between relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-10 h-10 bg-orange-100 rounded-bl-full pointer-events-none group-hover:bg-orange-200 transition-colors" />
                    <span className="text-[11px] font-bold text-orange-700 uppercase tracking-wider block relative z-10">
                      {metric.label}
                    </span>
                    <strong className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 mt-2 block relative z-10">
                      {metric.value}
                    </strong>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 3. "Who Can Apply?" Section */}
        <section className="py-16 bg-white bg-brand-dot-pattern border-b border-orange-100 relative">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Eligibility Assessment
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-slate-900">
                Who Can <span className="text-orange-600">Apply?</span>
              </h2>
              <p className="text-sm text-slate-600 max-w-xl mx-auto mt-1">
                Verified criteria and borrower eligibility guidelines set by the Government of India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pageData.whoCanApply.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FFFBF5] border border-orange-200 hover:bg-white hover:border-orange-400 hover:shadow-md transition-all space-y-2.5 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center font-extrabold text-xs border border-orange-200">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-[16px] text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. "Key Features" Section */}
        <section className="py-16 bg-[#FFF8F0] bg-brand-cross-pattern border-b border-orange-100 relative">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Program Highlights
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-slate-900">
                Key <span className="text-orange-600">Features</span>
              </h2>
              <p className="text-sm text-slate-600 max-w-xl mx-auto mt-1">
                Core benefits, guarantees, and subsidy structures under this flagship program.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pageData.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-orange-200 hover:border-orange-500 hover:shadow-md transition-all space-y-2.5 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs border border-orange-200">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-[16px] text-slate-900">
                    {feat.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. "Scheme Benefits" Section */}
        <section className="py-16 bg-white border-b border-orange-100 relative">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Advantages & Subsidies
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-slate-900">
                Scheme <span className="text-orange-600">Benefits</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {pageData.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4.5 rounded-xl border border-orange-200 bg-[#FFFBF5] flex items-start gap-3 shadow-xs hover:bg-white hover:border-orange-400 transition-all"
                >
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-orange-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[13.5px] text-slate-800 leading-relaxed font-medium">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. "Application Process" 4 Steps */}
        <section className="py-16 bg-[#FFF8F0] bg-brand-grid-pattern border-b border-orange-100 relative">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Step-by-Step Guide
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-slate-900">
                Application <span className="text-orange-600">Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pageData.processSteps.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-orange-200 shadow-sm hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-xs inline-block mb-3.5 shadow-sm">
                      Step {p.step}
                    </span>
                    <h3 className="font-heading font-bold text-[16px] text-slate-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-[12.5px] text-slate-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. "Documents Required" Section */}
        <section className="py-16 bg-white bg-brand-dot-pattern border-b border-orange-100 relative">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Checklist
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-slate-900">
                Documents <span className="text-orange-600">Required</span>
              </h2>
              <p className="text-sm text-slate-600 max-w-xl mx-auto mt-1">
                Keep the following paperwork ready for instant verification and fast processing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
              {pageData.documentsRequired.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#FFFBF5] border border-orange-200 flex items-center gap-3 text-[12.5px] text-slate-800 font-medium hover:bg-white hover:border-orange-400 transition-all shadow-2xs"
                >
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs shrink-0 border border-orange-200">
                    <FileText className="w-3 h-3" />
                  </span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Frequently Asked Questions */}
        <section className="py-16 bg-[#FFF8F0] border-b border-orange-100 relative">
          <div className="max-w-[880px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Got Questions?
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-slate-900">
                Frequently Asked <span className="text-orange-600">Questions</span>
              </h2>
            </div>

            <div className="space-y-3">
              {pageData.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`border rounded-xl overflow-hidden transition-all bg-white ${isOpen ? 'border-orange-500 shadow-sm' : 'border-orange-200'}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4.5 text-left font-bold text-[14.5px] text-slate-900 flex items-center justify-between gap-3 hover:bg-orange-50/50 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-orange-600 shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-orange-600 transition-transform shrink-0 ${isOpen ? 'rotate-180 text-orange-700' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4.5 pb-4.5 pt-2 text-[13.5px] text-slate-700 border-t border-orange-100 bg-orange-50/30 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. Bottom CTA Section (Warm Sunset Theme Container) */}
        <section className="py-16 bg-white relative">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <div className="rounded-3xl bg-gradient-to-br from-[#FFF3E5] via-[#FEF3C7] to-[#FFF3E5] border border-orange-300 p-8 sm:p-12 text-center space-y-4 shadow-sm relative overflow-hidden">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 text-orange-800 border border-orange-300 text-[11px] font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Fast-Track Processing</span>
              </span>

              <h2 className="font-heading font-extrabold text-[26px] sm:text-[34px] text-slate-900 max-w-2xl mx-auto leading-tight">
                {pageData.ctaHeading}
              </h2>
              <p className="text-[14px] text-slate-700 max-w-xl mx-auto font-medium">
                {pageData.ctaSubheading}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-[14px] px-8 py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onBack}
                  className="px-7 py-4 rounded-xl border border-orange-300 bg-white hover:bg-orange-50 text-slate-900 text-[14px] font-bold transition-colors cursor-pointer shadow-xs"
                >
                  View All Schemes
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
};



