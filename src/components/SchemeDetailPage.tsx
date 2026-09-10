import React, { useState } from 'react';
import { SchemePageData } from '../data/schemeDetailPagesData';
import { ArrowLeft, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      {/* 1. Header with back link */}
      <Navbar onOpenConsultation={onOpenConsultation} onNavigateHome={onBack} />

      <main className="flex-1">
        {/* Back navigation pill */}
        <div className="bg-[#0D1836] border-b border-slate-800 text-slate-300 py-2.5 px-4 sm:px-6">
          <div className="max-w-[1380px] mx-auto flex items-center justify-between">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Back to All Government Schemes</span>
            </button>
            <span className="text-[11px] text-slate-400 hidden sm:inline-block">
              Growthora Verified Scheme Guide FY 2026
            </span>
          </div>
        </div>

        {/* 2. Hero Section (Deep Navy #0D1836 with Metric Highlight Boxes) */}
        <section className="bg-gradient-to-br from-[#0D1836] via-[#132247] to-[#070D1E] text-white pt-12 pb-16 border-b border-slate-800 relative overflow-hidden">
          {/* Animated Background Textures */}
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-orange-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/15 rounded-full blur-2xl pointer-events-none animate-float-slow" />

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column: Heading & Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  <span>{pageData.categoryBadge}</span>
                </div>

                <h1 className="font-heading font-extrabold text-[30px] sm:text-[38px] md:text-[44px] leading-[1.12] tracking-tight text-white">
                  {pageData.title}
                </h1>

                <p className="text-orange-300 text-sm font-semibold tracking-wide">
                  {pageData.subtitle}
                </p>

                <p className="text-slate-300 text-[14.5px] leading-relaxed max-w-xl">
                  {pageData.description}
                </p>

                <div className="pt-3 flex items-center gap-3">
                  <button
                    onClick={onOpenConsultation}
                    className="shimmer-btn inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>{pageData.applyLinkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+919005427979"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-[13.5px] px-5 py-3.5 rounded-xl border border-white/15 transition-all"
                  >
                    <span>Talk to Advisor</span>
                  </a>
                </div>
              </div>

              {/* Right Column: 4 Metric Highlight Boxes */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                {pageData.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl hover:bg-white/15 hover:border-orange-400/40 hover:scale-[1.02] transition-all flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-bold text-orange-300 uppercase tracking-wider block">
                      {metric.label}
                    </span>
                    <strong className="text-xl sm:text-2xl font-heading font-extrabold text-white mt-2 block">
                      {metric.value}
                    </strong>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 3. "Who Can Apply?" Section (6 Cards Grid) */}
        <section className="py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-500 block mb-1">
                Eligibility Assessment
              </span>
              <h2 className="font-heading font-extrabold text-[26px] sm:text-[32px] text-[#0D1836]">
                Who Can <span className="text-orange-500">Apply?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pageData.whoCanApply.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-orange-200 transition-all space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <h3 className="font-heading font-bold text-[15px] text-[#0D1836]">
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. "Key Features" Section (Dark Navy Grid) */}
        <section className="py-14 bg-[#0D1836] text-white border-b border-slate-800">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400 block mb-1">
                Program Highlights
              </span>
              <h2 className="font-heading font-extrabold text-[26px] sm:text-[32px] text-white">
                Key <span className="text-orange-400">Features</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pageData.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/40 transition-all space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
                    ✦
                  </div>
                  <h3 className="font-heading font-bold text-[15px] text-white">
                    {feat.title}
                  </h3>
                  <p className="text-[12.5px] text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. "Scheme Benefits" Section */}
        <section className="py-14 bg-[#FAFAFA] border-b border-slate-200/80">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-500 block mb-1">
                Advantages & Subsidies
              </span>
              <h2 className="font-heading font-extrabold text-[26px] sm:text-[32px] text-[#0D1836]">
                Scheme <span className="text-orange-500">Benefits</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {pageData.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3 shadow-xs hover:border-orange-200 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-[13px] text-slate-700 leading-relaxed">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. "Application Process" 4 Steps */}
        <section className="py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-500 block mb-1">
                Step-by-Step Guide
              </span>
              <h2 className="font-heading font-extrabold text-[26px] sm:text-[32px] text-[#0D1836]">
                Application <span className="text-orange-500">Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pageData.processSteps.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-[#fafafa] shadow-xs relative flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2.5 py-1 rounded-md bg-orange-500 text-white font-extrabold text-xs inline-block mb-3">
                      {p.step}
                    </span>
                    <h3 className="font-heading font-bold text-[15px] text-[#0D1836] mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-[12px] text-slate-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. "Documents Required" (Dark Navy Grid) */}
        <section className="py-14 bg-[#0D1836] text-white border-b border-slate-800">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400 block mb-1">
                Checklist
              </span>
              <h2 className="font-heading font-extrabold text-[26px] sm:text-[32px] text-white">
                Documents <span className="text-orange-400">Required</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
              {pageData.documentsRequired.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs text-slate-200"
                >
                  <span className="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold shrink-0">
                    ✓
                  </span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Frequently Asked Questions */}
        <section className="py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-[860px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-500 block mb-1">
                Got Questions?
              </span>
              <h2 className="font-heading font-extrabold text-[26px] sm:text-[32px] text-[#0D1836]">
                Frequently Asked <span className="text-orange-500">Questions</span>
              </h2>
            </div>

            <div className="space-y-3">
              {pageData.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-bold text-[14px] text-[#0D1836] flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-orange-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-[13px] text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. Bottom CTA Section */}
        <section className="py-12 bg-gradient-to-r from-[#0D1836] via-[#162342] to-[#0D1836] text-white border-t border-slate-800">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 text-center space-y-4">
            <h2 className="font-heading font-extrabold text-[24px] sm:text-[30px] text-white max-w-2xl mx-auto leading-tight">
              {pageData.ctaHeading}
            </h2>
            <p className="text-[13.5px] text-slate-300 max-w-xl mx-auto">
              {pageData.ctaSubheading}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 transition-all cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBack}
                className="px-6 py-3.5 rounded-xl border border-slate-600 text-slate-200 text-sm font-bold hover:bg-white/10 transition-colors cursor-pointer"
              >
                View All Schemes
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
};
