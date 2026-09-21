import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ListingsSection } from './components/ListingsSection';
import { NeighborhoodsSection } from './components/NeighborhoodsSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { HomeValuationModal } from './components/HomeValuationModal';
import { SavedDrawer } from './components/SavedDrawer';
import { PROPERTIES } from './data/properties';
import { Property, SearchFilterState } from './types';

export function App() {
  // Saved properties state (localStorage friendly or state based)
  const [savedIds, setSavedIds] = useState<string[]>(['tov-1', 'tov-4']);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isValuationOpen, setIsValuationOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Search and Filter State
  const [filters, setFilters] = useState<SearchFilterState>({
    mode: 'buy',
    location: '',
    propertyType: '',
    priceRange: '',
    beds: '',
    quickFilter: ''
  });

  const handleFilterChange = (newFilters: Partial<SearchFilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters({
      mode: 'buy',
      location: '',
      propertyType: '',
      priceRange: '',
      beds: '',
      quickFilter: ''
    });
  };

  const handleFilterCategory = (category: string) => {
    if (category === 'all') {
      handleResetFilters();
    } else if (category === 'buy' || category === 'rent') {
      setFilters((prev) => ({
        ...prev,
        mode: category,
        propertyType: ''
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        propertyType: category
      }));
    }
  };

  const handleSelectNeighborhood = (cityName: string) => {
    setFilters((prev) => ({
      ...prev,
      location: cityName
    }));
    const elem = document.getElementById('listings-section');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  // Filtered properties computation
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      // Buy vs Rent filter
      if (filters.mode === 'buy' && p.status === 'For Rent') return false;
      if (filters.mode === 'rent' && p.status !== 'For Rent') return false;

      // Location search (matches title, city, state, neighborhood)
      if (filters.location.trim()) {
        const query = filters.location.toLowerCase();
        const matchesLoc =
          p.city.toLowerCase().includes(query) ||
          p.state.toLowerCase().includes(query) ||
          p.neighborhood.toLowerCase().includes(query) ||
          p.title.toLowerCase().includes(query);
        if (!matchesLoc) return false;
      }

      // Property Type
      if (filters.propertyType && p.type !== filters.propertyType) {
        return false;
      }

      // Beds
      if (filters.beds) {
        const minBeds = parseInt(filters.beds);
        if (p.beds < minBeds) return false;
      }

      // Price Range
      if (filters.priceRange) {
        if (filters.priceRange === 'under-10m' && p.price >= 10000000) return false;
        if (filters.priceRange === '10m-15m' && (p.price < 10000000 || p.price > 15000000)) return false;
        if (filters.priceRange === '15m-plus' && p.price < 15000000) return false;
        if (filters.priceRange === 'under-25k' && p.price >= 25000) return false;
        if (filters.priceRange === '25k-plus' && p.price < 25000) return false;
      }

      // Quick lifestyle filters
      if (filters.quickFilter) {
        const qf = filters.quickFilter.toLowerCase();
        if (qf === 'waterfront' && !p.features.some((f) => f.toLowerCase().includes('waterfront') || f.toLowerCase().includes('beach') || f.toLowerCase().includes('ocean'))) return false;
        if (qf === 'private pool' && !p.features.some((f) => f.toLowerCase().includes('pool'))) return false;
        if (qf === 'panoramic views' && !p.features.some((f) => f.toLowerCase().includes('view') || f.toLowerCase().includes('horizon'))) return false;
        if (qf === 'wine cellar' && !p.features.some((f) => f.toLowerCase().includes('wine'))) return false;
        if (qf === 'smart home' && !p.features.some((f) => f.toLowerCase().includes('smart') || f.toLowerCase().includes('automation'))) return false;
      }

      return true;
    });
  }, [filters]);

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const savedProperties = useMemo(() => {
    return PROPERTIES.filter((p) => savedIds.includes(p.id));
  }, [savedIds]);

  const handleSearchSubmit = () => {
    const elem = document.getElementById('listings-section');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookViewing = (propertyName: string, date: string, time: string) => {
    console.log(`Booked showing for ${propertyName} on ${date} at ${time}`);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col antialiased selection:bg-rose-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-rose-900/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-rose-950/15 rounded-full blur-[160px]"></div>
      </div>

      {/* Main Top Navigation */}
      <Navbar
        savedCount={savedIds.length}
        onOpenValuation={() => setIsValuationOpen(true)}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1 z-10">
        {/* 1. Hero Section with Cinematic Framing and Interactive Search Bar */}
        <Hero
          filterState={filters}
          onFilterChange={handleFilterChange}
          onSearchSubmit={handleSearchSubmit}
          listingCount={filteredProperties.length}
        />

        {/* 2. Featured Listings Grid */}
        <ListingsSection
          properties={filteredProperties}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onOpenVirtualTour={(prop) => setSelectedProperty(prop)}
          filterState={filters}
          onResetFilters={handleResetFilters}
          onFilterCategory={handleFilterCategory}
        />

        {/* 3. Curated Neighborhood Guides */}
        <NeighborhoodsSection onSelectNeighborhood={handleSelectNeighborhood} />

        {/* 4. Heritage & Concierge Services */}
        <AboutSection onOpenConsultation={() => {
          const elem = document.getElementById('contact-section');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 5. Client Testimonials & Press Mentions */}
        <TestimonialsSection />

        {/* 6. Contact Us & Consultation Request Form */}
        <ContactSection />
      </main>

      {/* 7. Complete Real Estate Footer */}
      <Footer
        onOpenValuation={() => setIsValuationOpen(true)}
        onFilterCategory={handleFilterCategory}
      />

      {/* Interactive Modals and Drawers */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        isSaved={selectedProperty ? savedIds.includes(selectedProperty.id) : false}
        onToggleSave={handleToggleSave}
        onBookViewing={handleBookViewing}
      />

      <HomeValuationModal
        isOpen={isValuationOpen}
        onClose={() => setIsValuationOpen(false)}
      />

      <SavedDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedProperties={savedProperties}
        onRemoveSaved={handleToggleSave}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onInquireAll={() => {
          const elem = document.getElementById('contact-section');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default App;
