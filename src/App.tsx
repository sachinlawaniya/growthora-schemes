import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Trustbar } from './components/Trustbar';
import { SchemeFinder } from './components/SchemeFinder';
import { CategoriesSection } from './components/CategoriesSection';
import { SchemesGrid } from './components/SchemesGrid';
import { SupportSection } from './components/SupportSection';
import { SuccessStories } from './components/SuccessStories';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { SchemeDetailPage } from './components/SchemeDetailPage';
import { SCHEMES, Scheme } from './data/schemesData';
import { getSchemePageBySlug } from './data/schemeDetailPagesData';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredSchemes, setFilteredSchemes] = useState<Scheme[]>(SCHEMES);
  const [activeFilters, setActiveFilters] = useState<{
    lookingFor: string;
    businessType: string;
    fundingAmount: string;
  } | null>(null);
  const [activeSchemeSlug, setActiveSchemeSlug] = useState<string | null>(null);

  // Helper to extract scheme slug from current URL
  const extractSlugFromUrl = useCallback((): string | null => {
    // 1. Check path (e.g. /schemes/pmegp or /schemes/mudra-loan)
    const path = window.location.pathname;
    const pathMatch = path.match(/^\/schemes\/([^/?#]+)/i);
    if (pathMatch && pathMatch[1]) {
      return pathMatch[1];
    }

    // 2. Check hash (e.g. #/schemes/pmegp or #schemes/pmegp)
    const hash = window.location.hash;
    const hashMatch = hash.match(/^#\/?(?:schemes\/)?([^/?#]+)/i);
    if (hashMatch && hashMatch[1] && !['finder', 'categories', 'schemes', 'support', 'consult'].includes(hashMatch[1])) {
      return hashMatch[1];
    }

    // 3. Check query param (e.g. ?scheme=pmegp)
    const params = new URLSearchParams(window.location.search);
    const queryScheme = params.get('scheme');
    if (queryScheme) {
      return queryScheme;
    }

    return null;
  }, []);

  // Initialize and handle URL changes
  useEffect(() => {
    const syncRouteFromUrl = () => {
      const slug = extractSlugFromUrl();
      if (slug && getSchemePageBySlug(slug)) {
        setActiveSchemeSlug(slug);
      } else {
        setActiveSchemeSlug(null);
      }
    };

    // Initial sync
    syncRouteFromUrl();

    // Listen to browser Back/Forward & hash changes
    window.addEventListener('popstate', syncRouteFromUrl);
    window.addEventListener('hashchange', syncRouteFromUrl);
    return () => {
      window.removeEventListener('popstate', syncRouteFromUrl);
      window.removeEventListener('hashchange', syncRouteFromUrl);
    };
  }, [extractSlugFromUrl]);

  // Navigate to scheme page with URL update
  const handleSelectScheme = (slug: string) => {
    const resolved = getSchemePageBySlug(slug);
    const canonicalSlug = resolved ? resolved.slug : slug;
    setActiveSchemeSlug(canonicalSlug);
    window.history.pushState(null, '', `/schemes/${canonicalSlug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate back to home / all schemes with URL update
  const handleBackToDirectory = () => {
    setActiveSchemeSlug(null);
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinderFilter = (
    filters: {
      lookingFor: string;
      businessType: string;
      fundingAmount: string;
    },
    matches: Scheme[]
  ) => {
    setActiveFilters(filters);
    setSelectedCategory(null);
    setFilteredSchemes(matches.length > 0 ? matches : SCHEMES);
  };

  const handleResetFilters = () => {
    setActiveFilters(null);
    setSelectedCategory(null);
    setFilteredSchemes(SCHEMES);
  };

  const handleFindSchemeClick = () => {
    const finderEl = document.getElementById('finder');
    finderEl?.scrollIntoView({ behavior: 'smooth' });
  };

  // If a specific scheme page is open (e.g. /schemes/mudra-loan, /schemes/pmegp, etc.)
  const currentSchemePageData = activeSchemeSlug ? getSchemePageBySlug(activeSchemeSlug) : undefined;
  if (currentSchemePageData) {
    return (
      <>
        <SchemeDetailPage
          pageData={currentSchemePageData}
          onBack={handleBackToDirectory}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onSelectScheme={handleSelectScheme}
        />
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          defaultScheme={currentSchemePageData.title}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onNavigateHome={handleBackToDirectory}
        onSelectScheme={handleSelectScheme}
      />

      {/* Main Directory Page */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onFindScheme={handleFindSchemeClick}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 3. Trustbar */}
        <Trustbar />

        {/* 4. Interactive 3-Step Scheme Finder */}
        <SchemeFinder onFilterChange={handleFinderFilter} />

        {/* 5. 8-Category Browse Grid */}
        <CategoriesSection
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            setActiveFilters(null);
            if (catId) {
              setFilteredSchemes(SCHEMES.filter((s) => s.categories.includes(catId)));
            } else {
              setFilteredSchemes(SCHEMES);
            }
          }}
        />

        {/* 6. Featured Schemes Showcase Grid + Active Filter Banner + Help Strip */}
        <SchemesGrid
          schemes={filteredSchemes}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          selectedCategory={selectedCategory}
          activeFilters={activeFilters}
          onResetFilters={handleResetFilters}
          onSelectSchemePage={handleSelectScheme}
        />

        {/* 7. End-to-End Support Section */}
        <SupportSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 8. Success Stories & Testimonials */}
        <SuccessStories />

        {/* 9. Conversion CTA Section */}
        <CtaSection onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* 10. Multi-column Footer */}
      <Footer />

      {/* Free Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}

export default App;
