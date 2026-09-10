import React, { useState } from 'react';
import { SchemePageData } from '../data/schemeDetailPagesData';
import { ArrowLeft, ArrowRight, ChevronDown, Sparkles, CheckCircle2, FileText, HelpCircle, Layers, Check } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Navbar */}
      <Navbar onOpenConsultation={onOpenConsultation} onNavigateHome={onBack} />

      <main className="flex-1">
        {/* Back navigation breadcrumb bar */}
        <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
          <div className="max-w-[1380px] mx-auto flex items-center justify-between">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Government Schemes</span>
            </button>
            <span className="text-[11.5px] font-medium text-slate-500 hidden sm:inline-block">
              Growthora Verified Scheme Guide FY 2026
            </span>
          </div>
        </div>

        {/* 2. Hero Section (Clean Light Theme with Orange Highlights, Micro-Textures & Sharp White Metric Cards) */}
        <section className="bg-gradient-to-b from-orange-50/60 via-white to-slate-50/60 bg-brand-grid-pattern pt-12 pb-16 border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column: Heading & Information */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/90 text-orange-700 border border-orange-200 text-[11px] font-extrabold uppercase tracking-wider shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                  <span>{pageData.categoryBadge}</span>
                </div>

                <h1 className="font-heading font-extrabold text-[30px] sm:text-[38px] md:text-[44px] leading-[1.12] tracking-tight text-[#0D1836]">
                  {pageData.title}
                </h1>

                <p className="text-orange-600 text-sm sm:text-[15px] font-bold tracking-wide">
                  {pageData.subtitle}
                </p>

                <p className="text-slate-600 text-[14.5px] leading-relaxed max-w-xl">
                  {pageData.description}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <span>{pageData.applyLinkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+919005427979"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0D1836] font-bold text-[13.5px] px-5 py-3.5 rounded-xl border border-slate-300 hover:border-orange-400 transition-colors shadow-2xs"
                  >
                    <span>Talk to Advisor</span>
                  </a>
                </div>
              </div>

              {/* Right Column: 4 Crisp White Metric Highlight Boxes with Brand Accents */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                {pageData.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-md transition-all shadow-xs flex flex-col justify-between relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-12 h-12 bg-orange-50 rounded-bl-full pointer-events-none group-hover:bg-orange-100 transition-colors" />
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block relative z-10">
                      {metric.label}
                    </span>
                    <strong className="text-xl sm:text-2xl font-heading font-extrabold text-[#0D1836] mt-2 block relative z-10">
                      {metric.value}
                    </strong>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 3. "Who Can Apply?" Section (Brand Dot Pattern Texture) */}
        <section className="py-16 bg-white bg-brand-dot-pattern border-b border-slate-200 relative">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Eligibility Assessment
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-[#0D1836]">
                Who Can <span className="text-orange-500">Apply?</span>
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto mt-1">
                Verified criteria and borrower eligibility guidelines set by the Government of India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pageData.whoCanApply.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/95 border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all space-y-2.5 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-extrabold text-xs border border-orange-200">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-[16px] text-[#0D1836]">
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

        {/* 4. "Key Features" Section (Brand Cross Pattern Texture) */}
        <section className="py-16 bg-slate-50/80 bg-brand-cross-pattern border-b border-slate-200 relative">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Program Highlights
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-[#0D1836]">
                Key <span className="text-orange-500">Features</span>
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto mt-1">
                Core benefits, guarantees, and subsidy structures under this flagship program.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pageData.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all space-y-2.5 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs border border-orange-200">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-[16px] text-[#0D1836]">
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

        {/* 5. "Scheme Benefits" Section (Tech Stripes Texture) */}
        <section className="py-16 bg-white bg-tech-stripes border-b border-slate-200 relative">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Advantages & Subsidies
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-[#0D1836]">
                Scheme <span className="text-orange-500">Benefits</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {pageData.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4.5 rounded-xl border border-slate-200 bg-white flex items-start gap-3 shadow-xs hover:border-orange-400 hover:shadow-sm transition-all"
                >
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-orange-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[13.5px] text-slate-700 leading-relaxed font-medium">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. "Application Process" 4 Steps (Brand Grid Texture) */}
        <section className="py-16 bg-slate-50/80 bg-brand-grid-pattern border-b border-slate-200 relative">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Step-by-Step Guide
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-[#0D1836]">
                Application <span className="text-orange-500">Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pageData.processSteps.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="px-3 py-1 rounded-lg bg-orange-500 text-white font-extrabold text-xs inline-block mb-3.5 shadow-2xs">
                      Step {p.step}
                    </span>
                    <h3 className="font-heading font-bold text-[16px] text-[#0D1836] mb-2">
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

        {/* 7. "Documents Required" (Brand Dot Pattern Texture) */}
        <section className="py-16 bg-white bg-brand-dot-pattern border-b border-slate-200 relative">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Checklist
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-[#0D1836]">
                Documents <span className="text-orange-500">Required</span>
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto mt-1">
                Keep the following paperwork ready for instant verification and fast processing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
              {pageData.documentsRequired.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 text-[12.5px] text-slate-700 font-medium hover:border-orange-400 hover:shadow-xs transition-all shadow-2xs"
                >
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs shrink-0 border border-orange-200">
                    <FileText className="w-3 h-3" />
                  </span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Frequently Asked Questions (Brand Cross Pattern Texture) */}
        <section className="py-16 bg-slate-50/80 bg-brand-cross-pattern border-b border-slate-200 relative">
          <div className="max-w-[880px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Got Questions?
              </span>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-[#0D1836]">
                Frequently Asked <span className="text-orange-500">Questions</span>
              </h2>
            </div>

            <div className="space-y-3">
              {pageData.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`border rounded-xl overflow-hidden transition-all bg-white ${isOpen ? 'border-orange-500 shadow-sm' : 'border-slate-200'}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4.5 text-left font-bold text-[14.5px] text-[#0D1836] flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-orange-500 shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-orange-500 transition-transform shrink-0 ${isOpen ? 'rotate-180 text-orange-600' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4.5 pb-4.5 pt-1 text-[13.5px] text-slate-600 border-t border-slate-100 bg-orange-50/20 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. Bottom CTA Section (Clean Orange/Light Card with Micro Grid Texture) */}
        <section className="py-16 bg-white relative">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-amber-50/50 to-orange-50 bg-brand-grid-pattern border border-orange-200/90 p-8 sm:p-12 text-center space-y-4 shadow-sm relative overflow-hidden">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/15 text-orange-700 border border-orange-300 text-[11px] font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Fast-Track Processing</span>
              </span>

              <h2 className="font-heading font-extrabold text-[26px] sm:text-[34px] text-[#0D1836] max-w-2xl mx-auto leading-tight">
                {pageData.ctaHeading}
              </h2>
              <p className="text-[14px] text-slate-600 max-w-xl mx-auto">
                {pageData.ctaSubheading}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-[14px] px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onBack}
                  className="px-7 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-[#0D1836] text-[14px] font-bold transition-colors cursor-pointer shadow-2xs"
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

