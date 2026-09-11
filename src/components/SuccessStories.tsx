import React from 'react';
import { SUCCESS_STORIES } from '../data/schemesData';
import { Star, ArrowRight, Quote } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  return (
    <section id="stories" className="pt-10 pb-14 relative overflow-hidden">
      {/* 3D Background Isometric Grid Texture */}
      <div className="absolute inset-0 bg-isometric-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-wider text-orange-500 block mb-1">
              Success Stories
            </span>
            <h2 className="font-heading font-bold text-[26px] sm:text-[32px] text-[#0D1836] tracking-tight">
              Trusted by 5,000+ Businesses Across India
            </h2>
            <p className="text-[14px] text-slate-500 mt-1 max-w-2xl">
              We help MSMEs and startups access the right government support to scale faster with confidence.
            </p>
          </div>

          <a
            href="#consult"
            className="text-[13px] font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1.5 self-start sm:self-end pb-1 transition-colors bg-white/80 px-3.5 py-1.5 rounded-full border border-orange-200/80 shadow-2xs hover:shadow-xs"
          >
            <span>View More Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Story Cards with 3D Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-container">
          {SUCCESS_STORIES.map((story) => (
            <article
              key={story.id}
              className="rounded-3xl p-7 bg-white/95 backdrop-blur-xs shadow-lg card-3d flex flex-col justify-between border border-slate-200/90 relative overflow-hidden"
            >
              {/* Subtle accent gradient indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500" />

              {/* Top Quote Tag */}
              <div className="flex items-center justify-between mb-4 text-orange-500">
                <Quote className="w-7 h-7 text-orange-400/40" />
                <div className="flex items-center gap-0.5 text-[#f59e0b] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 shadow-2xs">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-[13.5px] text-slate-600 leading-relaxed mb-6 italic">
                "{story.quote}"
              </p>

              {/* Author & Designation */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 mt-auto">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold text-[14px] flex items-center justify-center shrink-0 shadow-md">
                  {story.avatar}
                </div>
                <div>
                  <strong className="text-[14px] font-bold text-[#0D1836] block leading-tight">
                    {story.name}
                  </strong>
                  <span className="text-[11.5px] text-slate-500 block mt-0.5 font-medium">
                    {story.title}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
