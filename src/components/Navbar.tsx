import React, { useState, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Building,
  Building2,
  ShieldCheck,
  Briefcase,
  Rocket,
  Users,
  Settings,
  Utensils,
  CheckCircle2,
  Lightbulb,
  Award,
  Scissors,
  Landmark,
  RefreshCw,
  ShoppingCart
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
  onSelectScheme?: (slug: string) => void;
}

interface SchemeNavItem {
  name: string;
  slug: string;
  icon: React.ElementType;
}

const SCHEMES_COLUMNS: SchemeNavItem[][] = [
  // Column 1
  [
    { name: 'PMEGP', slug: 'pmegp', icon: Building2 },
    { name: 'CGTMSE', slug: 'cgtmse', icon: ShieldCheck },
    { name: 'Mudra Loan', slug: 'mudra-loan', icon: Briefcase },
    { name: 'Startup India Scheme', slug: 'startup-india-seed-fund', icon: Rocket },
    { name: 'Stand-Up India', slug: 'standup-india', icon: Users },
  ],
  // Column 2
  [
    { name: 'CLCSS', slug: 'clcss', icon: Settings },
    { name: 'PMFME', slug: 'pmfme', icon: Utensils },
    { name: 'ZED Certification', slug: 'zed-scheme', icon: CheckCircle2 },
    { name: 'NSIC Schemes', slug: 'nsic-schemes', icon: Building },
    { name: 'CGSS', slug: 'cgss', icon: Lightbulb },
  ],
  // Column 3
  [
    { name: 'MSME Champions', slug: 'msme-champions', icon: Award },
    { name: 'TUFS', slug: 'tufs', icon: Scissors },
    { name: 'Fund of Funds', slug: 'fund-of-funds', icon: Landmark },
    { name: 'CGSSD', slug: 'cgssd', icon: RefreshCw },
    { name: 'PM SVANidhi', slug: 'pm-svanidhi', icon: ShoppingCart },
  ],
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onNavigateHome,
  onSelectScheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSchemesOpen, setMobileSchemesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  const handleSchemeItemClick = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onSelectScheme) {
      onSelectScheme(slug);
    } else {
      window.location.href = `/schemes/${slug}`;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200'
          : 'bg-white border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 h-[74px] flex items-center justify-between gap-6">
        
        {/* Growthora Brand Logo */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-1.5 group shrink-0"
          aria-label="Growthora Home"
        >
          <img
            src="/logo.png"
            alt="Growthora - Advisory Private Limited"
            className="h-[50px] sm:h-[56px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            style={{ mixBlendMode: 'multiply' }}
          />
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-[20px] sm:text-[22px] tracking-tight text-[#0D1836] leading-none block">
              Growthora
            </span>
            <span className="text-[7.5px] sm:text-[8px] font-bold tracking-[0.18em] text-orange-600 uppercase block mt-0.5">
              Advisory Private Limited
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[13.5px] font-semibold text-slate-700">
          
          {/* Services Dropdown */}
          <div className="group relative py-2 cursor-pointer flex items-center gap-1 hover:text-orange-500 transition-colors">
            <span>Services</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-500 transition-transform duration-200 group-hover:rotate-180" />

            <div className="absolute top-full left-0 hidden group-hover:block pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                <a
                  href="#consult"
                  className="block px-3 py-2 text-xs font-medium rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  Business Valuation & Advisory
                </a>
                <a
                  href="#consult"
                  className="block px-3 py-2 text-xs font-medium rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  MSME Project Financing
                </a>
                <a
                  href="#consult"
                  className="block px-3 py-2 text-xs font-medium rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  Subsidy Documentation & Claims
                </a>
                <a
                  href="#consult"
                  className="block px-3 py-2 text-xs font-medium rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  Startup Pitch & DPR Preparation
                </a>
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className="group relative py-2 cursor-pointer flex items-center gap-1 hover:text-orange-500 transition-colors">
            <span>Industries</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-500 transition-transform duration-200 group-hover:rotate-180" />

            <div className="absolute top-full left-0 hidden group-hover:block pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="w-60 bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                <a
                  href="#categories"
                  className="block px-3 py-2 text-xs font-medium rounded-lg hover:bg-orange-50 hover:text-orange-600"
                >
                  Manufacturing & Engineering
                </a>
                <a
                  href="#categories"
                  className="block px-3 py-2 text-xs font-medium rounded-lg hover:bg-orange-50 hover:text-orange-600"
                >
                  Food Processing & Dairy
                </a>
                <a
                  href="#categories"
                  className="block px-3 py-2 text-xs font-medium rounded-lg hover:bg-orange-50 hover:text-orange-600"
                >
                  Tech & Digital Startups
                </a>
                <a
                  href="#categories"
                  className="block px-3 py-2 text-xs font-medium rounded-lg hover:bg-orange-50 hover:text-orange-600"
                >
                  Agriculture & Allied Sectors
                </a>
              </div>
            </div>
          </div>

          {/* ─── 3-COLUMN GOVERNMENT SCHEMES MEGA DROPDOWN (GROWTHORA BRAND THEME) ─── */}
          <div className="group relative py-2 cursor-pointer flex items-center gap-1.5 text-orange-600 hover:text-orange-700 transition-colors font-bold">
            <span className="text-orange-600 group-hover:text-orange-700">Government Schemes</span>
            <ChevronDown className="w-3.5 h-3.5 text-orange-500 group-hover:text-orange-600 transition-transform duration-200 group-hover:rotate-180" />

            {/* Mega Dropdown Box */}
            <div className="absolute top-full -left-24 xl:-left-16 hidden group-hover:block pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="w-[740px] bg-white rounded-3xl shadow-2xl shadow-orange-950/10 border border-orange-200/90 p-6 sm:p-7 grid grid-cols-3 gap-x-8 gap-y-4">
                {SCHEMES_COLUMNS.map((column, colIdx) => (
                  <div key={colIdx} className="space-y-3">
                    {column.map((scheme) => {
                      const IconComponent = scheme.icon;
                      return (
                        <div
                          key={scheme.slug}
                          onClick={(e) => handleSchemeItemClick(scheme.slug, e)}
                          className="flex items-center gap-3 p-2 rounded-xl text-slate-800 hover:text-orange-600 hover:bg-orange-50/80 transition-all duration-150 group/item cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-orange-50/90 text-orange-600 flex items-center justify-center border border-orange-200/60 group-hover/item:bg-gradient-to-br group-hover/item:from-orange-500 group-hover/item:to-amber-500 group-hover/item:text-white transition-all duration-200 group-hover/item:scale-105 shrink-0 shadow-2xs">
                            <IconComponent className="w-4 h-4 stroke-[2]" />
                          </div>
                          <span className="text-[13.5px] font-semibold tracking-tight leading-snug group-hover/item:text-orange-600">
                            {scheme.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="#support" className="hover:text-orange-500 transition-colors">
            Growthora Insights
          </a>

          <a href="#stories" className="hover:text-orange-500 transition-colors">
            About
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3.5">
          <button
            type="button"
            className="w-9 h-9 rounded-full hidden sm:flex items-center justify-center text-slate-600 hover:bg-orange-50 hover:text-orange-500 transition-colors cursor-pointer"
            aria-label="Search schemes"
            onClick={() => {
              const el = document.getElementById('finder');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Search className="w-[18px] h-[18px]" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-[13px] px-4 sm:px-5 py-2.5 rounded-lg shadow-sm hover:from-orange-600 hover:to-amber-600 hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto">
          <a
            href="#finder"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 py-2 hover:text-orange-500"
          >
            Find Scheme Tool
          </a>
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 py-2 hover:text-orange-500"
          >
            Browse Categories
          </a>

          {/* Mobile Schemes Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileSchemesOpen(!mobileSchemesOpen)}
              className="flex items-center justify-between w-full text-sm font-bold text-orange-600 py-2"
            >
              <span>Government Schemes (15+)</span>
              <ChevronDown className={`w-4 h-4 text-orange-500 transition-transform duration-200 ${mobileSchemesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileSchemesOpen && (
              <div className="grid grid-cols-2 gap-2 pt-2 pl-2 border-l-2 border-orange-500/40 my-2">
                {SCHEMES_COLUMNS.flat().map((scheme) => (
                  <button
                    key={scheme.slug}
                    onClick={(e) => handleSchemeItemClick(scheme.slug, e)}
                    className="text-left text-xs font-semibold text-slate-700 hover:text-orange-600 py-1.5 px-2 rounded-lg hover:bg-orange-50"
                  >
                    • {scheme.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#support"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 py-2 hover:text-orange-500"
          >
            Growthora Insights
          </a>
          <a
            href="#stories"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 py-2 hover:text-orange-500"
          >
            About
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm py-3 rounded-lg shadow-sm hover:from-orange-600 hover:to-amber-600 cursor-pointer"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
