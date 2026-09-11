import React from 'react';
import { CATEGORIES } from '../data/schemesData';
import { Building2, Rocket, Percent, Coins, Globe, Award, Sprout, Leaf, ArrowRight } from 'lucide-react';

interface CategoriesSectionProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Rocket,
  Percent,
  Coins,
  Globe,
  Award,
  Sprout,
  Leaf,
};

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="pt-14 pb-6 relative overflow-hidden">
      {/* 3D Background Isometric Grid Texture */}
      <div className="absolute inset-0 bg-isometric-grid opacity-35 pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-wider text-orange-500 block mb-1">
              Explore Schemes by Category
            </span>
            <h2 className="font-heading font-bold text-[26px] sm:text-[32px] text-[#0D1836] tracking-tight">
              Browse Government Schemes
            </h2>
            <p className="text-[14px] text-slate-500 mt-1 max-w-2xl">
              Explore schemes across major industry categories to find dedicated support for your business type.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory(null)}
            className="text-[13px] font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1.5 self-start sm:self-end pb-1 cursor-pointer transition-colors bg-white/80 px-3.5 py-1.5 rounded-full border border-orange-200/80 shadow-2xs hover:shadow-xs"
          >
            <span>{selectedCategory ? 'Reset Filter & View All' : 'View All Categories'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Categories Grid (8 3D Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5 perspective-container">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.iconName] || Building2;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(isSelected ? null : cat.id)}
                className={`min-h-[120px] rounded-2xl p-3.5 flex flex-col items-center justify-center text-center transition-all cursor-pointer group card-3d ${isSelected
                  ? 'bg-orange-50/95 border-orange-500 ring-2 ring-orange-500/30 scale-[1.03]'
                  : 'bg-white/95 backdrop-blur-xs border-slate-200/80 hover:border-orange-300'
                  }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 shadow-2xs transition-all ${isSelected ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md' : 'bg-orange-50 text-orange-600 border border-orange-100 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white'
                  }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <b className="text-[11.5px] leading-tight font-bold text-[#0D1836] line-clamp-2">
                  {cat.name}
                </b>

                <small className="text-[9.5px] font-semibold text-slate-500 mt-1.5 block">
                  {cat.count} Schemes
                </small>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
