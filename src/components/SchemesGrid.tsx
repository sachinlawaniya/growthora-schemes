import React, { useState } from 'react';
import { Scheme } from '../data/schemesData';
import { getSchemePageBySlug } from '../data/schemeDetailPagesData';
import { SchemeDetailModal } from './SchemeDetailModal';
import { Heart, ArrowRight, RotateCcw, Headphones } from 'lucide-react';

interface SchemesGridProps {
  schemes: Scheme[];
  onOpenConsultation: () => void;
  selectedCategory: string | null;
  activeFilters: {
    lookingFor: string;
    businessType: string;
    fundingAmount: string;
  } | null;
  onResetFilters?: () => void;
  onSelectSchemePage?: (slug: string) => void;
}

export const SchemesGrid: React.FC<SchemesGridProps> = ({
  schemes,
  onOpenConsultation,
  selectedCategory,
  activeFilters,
  onResetFilters,
  onSelectSchemePage,
}) => {
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSchemeClick = (scheme: Scheme, e?: React.MouseEvent) => {
    const slug = scheme.slug || scheme.id;
    if (getSchemePageBySlug(slug) && onSelectSchemePage) {
      e?.preventDefault();
      onSelectSchemePage(slug);
    } else {
      setSelectedScheme(scheme);
    }
  };

  const filteredSchemes = selectedCategory
    ? schemes.filter((s) => s.categories.includes(selectedCategory))
    : schemes;

  return (
    <section id="schemes" className="pt-14 pb-14 relative overflow-hidden">
      {/* 3D Background Isometric Grid Texture */}
      <div className="absolute inset-0 bg-isometric-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-wider text-orange-500 block mb-1">
              Featured Government Schemes
            </span>
            <h2 className="font-heading font-extrabold text-[26px] sm:text-[32px] text-[#0D1836] tracking-tight">
              Popular Schemes for Indian Businesses
            </h2>
            <p className="text-[14px] text-slate-500 mt-1 max-w-2xl">
              A curated selection of high-impact schemes for MSMEs, startups, and expanding enterprises.
            </p>
          </div>

          <div className="text-[13px] font-bold text-orange-500 self-start sm:self-end pb-1 bg-orange-50/80 px-3.5 py-1.5 rounded-full border border-orange-200/80 shadow-2xs">
            Showing <span className="text-[#0D1836]">{filteredSchemes.length}</span> Verified Schemes
          </div>
        </div>

        {/* Active Finder Filter Banner */}
        {activeFilters && (
          <div className="mb-7 p-4.5 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                ⚡
              </span>
              <div className="text-xs font-bold text-[#0D1836]">
                Filtered Results: <span className="text-orange-600 font-extrabold">
                  {activeFilters.lookingFor} • {activeFilters.businessType} • {activeFilters.fundingAmount}
                </span>
                <span className="text-slate-500 ml-1.5 font-medium">
                  ({filteredSchemes.length} found)
                </span>
              </div>
            </div>

            {onResetFilters && (
              <button
                onClick={onResetFilters}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-orange-200 text-orange-600 hover:bg-orange-100 text-xs font-bold transition-colors cursor-pointer shrink-0 shadow-2xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Show All Schemes</span>
              </button>
            )}
          </div>
        )}

        {/* Schemes 3-Column 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-container">
          {filteredSchemes.map((scheme) => (
            <a
              key={scheme.id}
              href={`/schemes/${scheme.slug || scheme.id}`}
              onClick={(e) => handleSchemeClick(scheme, e)}
              className="rounded-3xl p-6 bg-white/95 backdrop-blur-xs shadow-lg card-3d flex flex-col justify-between relative cursor-pointer group no-underline text-inherit overflow-hidden border border-slate-200/90"
            >
              {/* Subtle top light reflection */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Badge & Bookmark */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full text-[10.5px] font-extrabold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200 shadow-2xs">
                    {scheme.badge}
                  </span>
                  {scheme.matchScore && scheme.matchScore >= 65 && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                      ★ Top Match
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={(e) => toggleBookmark(scheme.id, e)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                  aria-label="Bookmark scheme"
                >
                  <Heart
                    className={`w-4 h-4 ${bookmarked[scheme.id] ? 'fill-red-500 text-red-500' : ''}`}
                  />
                </button>
              </div>

              {/* Main Info */}
              <div>
                <div className="flex gap-3.5 items-center my-3">
                  <div className="w-[54px] h-[54px] rounded-2xl flex items-center justify-center font-extrabold text-orange-600 bg-gradient-to-br from-orange-50 to-amber-50/50 border border-orange-200/80 text-[11.5px] text-center p-1.5 shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all shrink-0">
                    {scheme.logoText}
                  </div>
                  <div>
                    <h3 className="font-heading text-[16.5px] font-bold text-[#0D1836] leading-snug group-hover:text-orange-500 transition-colors">
                      {scheme.name}
                    </h3>
                    <p className="text-[11.5px] text-slate-500 line-clamp-1">
                      {scheme.fullName}
                    </p>
                  </div>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5 my-3.5">
                  {scheme.chips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="text-[10.5px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100/90 text-slate-600 border border-slate-200/60"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-[12px] text-slate-500 leading-relaxed mb-4 line-clamp-3">
                  {scheme.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-3 pt-3.5 border-t border-slate-100 text-[11.5px] mt-auto">
                <div>
                  <b className="block text-[13px] font-extrabold text-slate-900">
                    {scheme.fundingAmount}
                  </b>
                  <span className="text-[10px] text-slate-500">Funding Support</span>
                </div>

                <div>
                  <b className="block text-[13px] font-extrabold text-orange-500">
                    {scheme.subsidyRate}
                  </b>
                  <span className="text-[10px] text-slate-500">Incentive</span>
                </div>

                <span className="text-orange-500 font-bold text-[12px] flex items-center gap-0.5 self-end pb-0.5 group-hover:translate-x-1 transition-transform">
                  View Page <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Interactive Help Strip Banner */}
        <div className="mt-8 bg-gradient-to-r from-orange-50 via-amber-50/40 to-blue-50/30 border border-orange-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-orange-500 shadow-xs border border-orange-100 shrink-0">
              <Headphones className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="text-[13.5px] font-bold text-[#0D1836]">
                Not sure which scheme is right for your business?
              </h3>
              <p className="text-[12px] text-slate-500 mt-0.5">
                Talk to our dedicated scheme experts and get personalized recommendations and DPR guidance.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-[12.5px] px-5 py-2.5 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-colors shrink-0 shadow-sm cursor-pointer w-full sm:w-auto"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Scheme Detail Popup Modal */}
      <SchemeDetailModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
        onApply={() => {
          onOpenConsultation();
        }}
      />
    </section>
  );
};
