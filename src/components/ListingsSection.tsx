import React, { useState } from 'react';
import { Property, SearchFilterState } from '../types';
import { PropertyCard } from './PropertyCard';
import { ArrowUpDown, Sparkles, FilterX } from 'lucide-react';

interface ListingsSectionProps {
  properties: Property[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onOpenVirtualTour: (property: Property) => void;
  filterState: SearchFilterState;
  onResetFilters: () => void;
  onFilterCategory: (category: string) => void;
}

export const ListingsSection: React.FC<ListingsSectionProps> = ({
  properties,
  savedIds,
  onToggleSave,
  onSelectProperty,
  onOpenVirtualTour,
  filterState,
  onResetFilters,
  onFilterCategory
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-desc' | 'price-asc' | 'sqft'>('featured');

  const categories = [
    { label: 'All Listings', value: 'all' },
    { label: 'For Sale', value: 'buy' },
    { label: 'Luxury Rentals', value: 'rent' },
    { label: 'Villas & Sanctuaries', value: 'Villa' },
    { label: 'Skyline Penthouses', value: 'Penthouse' },
    { label: 'Waterfront & Islands', value: 'Waterfront' }
  ];

  // Sorting logic
  const sortedProperties = [...properties].sort((a, b) => {
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'sqft') return b.sqft - a.sqft;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <section id="listings-section" className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-24">
      <div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border border-white/10 rounded-[32px] sm:rounded-[44px] backdrop-blur-2xl p-6 sm:p-8 lg:p-10">
        {/* Subtle top glare */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none"></div>

        <div className="relative">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-300 uppercase tracking-widest mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Prime Portfolio</span>
              </div>
              <h2 className="text-2xl sm:text-4xl text-neutral-100 font-medium tracking-tight font-sans">
                Curated Touch of Valentine Listings
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-neutral-400 font-light">
                Every residence undergoes a rigorous 140-point architectural, structural, and legal audit before joining our collection.
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <div className="flex items-center gap-2 bg-neutral-900 border border-white/10 rounded-full px-3 py-1.5 text-xs text-neutral-300">
                <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-neutral-500">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-neutral-200 focus:outline-none cursor-pointer text-xs"
                >
                  <option value="featured" className="bg-neutral-900 text-white">Curated / Featured</option>
                  <option value="price-desc" className="bg-neutral-900 text-white">Price: High to Low</option>
                  <option value="price-asc" className="bg-neutral-900 text-white">Price: Low to High</option>
                  <option value="sqft" className="bg-neutral-900 text-white">Largest Sq Ft</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filter Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {categories.map((cat) => {
              const isSelected =
                (cat.value === 'all' && !filterState.propertyType && !filterState.quickFilter) ||
                (cat.value === 'buy' && filterState.mode === 'buy' && !filterState.propertyType) ||
                (cat.value === 'rent' && filterState.mode === 'rent' && !filterState.propertyType) ||
                filterState.propertyType === cat.value;

              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => onFilterCategory(cat.value)}
                  className={`text-xs sm:text-sm px-4 py-2 rounded-full whitespace-nowrap transition-all font-medium cursor-pointer border ${
                    isSelected
                      ? 'bg-white text-neutral-950 border-white shadow-md'
                      : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Listings Grid */}
          {sortedProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isSaved={savedIds.includes(property.id)}
                  onToggleSave={onToggleSave}
                  onSelectProperty={onSelectProperty}
                  onOpenVirtualTour={onOpenVirtualTour}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-neutral-900/40 rounded-3xl border border-white/10">
              <FilterX className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-neutral-200">No properties match your exact filters</h3>
              <p className="text-sm text-neutral-400 mt-1 max-w-md mx-auto">
                We couldn’t find homes matching those criteria. Try expanding your search or resetting filters to browse all available TOV properties.
              </p>
              <button
                type="button"
                onClick={onResetFilters}
                className="mt-5 px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold transition-all shadow-lg cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Portfolio Note */}
          <div className="mt-12 p-6 rounded-2xl bg-neutral-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-neutral-200">
                Seeking off-market private listings?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Nearly 35% of Touch of Valentine transactions occur discretely off-market. Inquire with our private office.
              </p>
            </div>
            <a
              href="#contact-section"
              className="whitespace-nowrap px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-medium text-white transition-colors"
            >
              Request Off-Market Dossier
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
