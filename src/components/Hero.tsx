import React from 'react';
import { SearchFilterState } from '../types';
import {
  MapPin,
  Home,
  Calendar,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  Building2,
  Sparkles,
  DollarSign,
  BedDouble,
  Compass
} from 'lucide-react';

interface HeroProps {
  filterState: SearchFilterState;
  onFilterChange: (newFilters: Partial<SearchFilterState>) => void;
  onSearchSubmit: () => void;
  listingCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  filterState,
  onFilterChange,
  onSearchSubmit,
  listingCount
}) => {
  const quickFilters = [
    'All Lifestyles',
    'Waterfront',
    'Private Pool',
    'Panoramic Views',
    'Wine Cellar',
    'Smart Home'
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-4 sm:mt-6 mb-10">
      <div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_28px_-12px_rgba(0,0,0,0.6)] bg-black/85 border border-white/10 rounded-[32px] sm:rounded-[44px] backdrop-blur-2xl">
        {/* Subtle top light bounce gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
          {/* Subtle rose ambiance accent */}
          <div className="absolute top-0 right-1/4 w-96 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative p-6 sm:p-8 lg:p-10">
          {/* Top Row: Left Narrative Headline & Right Feature Pills */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
            <div className="flex-1 max-w-3xl">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 text-xs font-medium text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-full px-3.5 py-1.5 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-rose-400 stroke-[2]" />
                <span className="tracking-wide">Nationwide &amp; Global • Verified Architectural Listings</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-neutral-100 tracking-tight leading-[0.98] mt-4 font-sans">
                Find your next home with <span className="font-serif-luxury italic text-white/95 font-normal">confidence</span>
              </h1>

              {/* Subtext */}
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-400 max-w-2xl font-light">
                Curated residences, oceanfront villas, and skyline penthouses curated by <strong className="text-neutral-200 font-medium">Touch of Valentine Homes</strong>. Immersive virtual walkthroughs, private charters, and bespoke broker guidance from discovery to closing.
              </p>
            </div>

            {/* Right Highlights & Metrics */}
            <div className="w-full lg:w-80 lg:pt-3">
              <div className="space-y-3.5 bg-neutral-900/50 p-4 sm:p-5 rounded-2xl border border-white/5 backdrop-blur-md">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-medium">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-rose-400">
                    <Home className="w-3.5 h-3.5" />
                  </div>
                  <span>Single-family • Villas • Penthouses</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-medium">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-amber-400">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <span>Same‑day private showings</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-medium">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Verified deeds &amp; legal documentation</span>
                </div>

                {/* Key stats row */}
                <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-white/10">
                  <div className="rounded-xl bg-neutral-800/80 border border-white/10 p-2.5 text-center">
                    <div className="text-lg font-bold tracking-tight text-white">14K+</div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Active</p>
                  </div>
                  <div className="rounded-xl bg-neutral-800/80 border border-white/10 p-2.5 text-center">
                    <div className="text-lg font-bold tracking-tight text-rose-300">4.98</div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Rating</p>
                  </div>
                  <div className="rounded-xl bg-neutral-800/80 border border-white/10 p-2.5 text-center">
                    <div className="text-lg font-bold tracking-tight text-white">420+</div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">3D Tours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cinematic Media Panel with Floating Interactive Search Controls */}
          <div className="mt-8 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Cinematic Hero Image */}
            <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px]">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
                alt="Modern luxury estate at twilight with reflecting pool"
                className="w-full h-full object-cover object-center"
              />
              {/* Deep atmospheric gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-neutral-950/20 pointer-events-none"></div>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7 lg:p-8 flex flex-col justify-end">
              <div className="max-w-3xl mb-4 sm:mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/15 text-rose-300 text-xs mb-2 backdrop-blur-md">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Curated by Touch of Valentine</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight drop-shadow-md">
                  Explore curated homes near you
                </h2>
                <p className="mt-1.5 sm:mt-2 text-white/80 text-sm sm:text-base max-w-xl font-light drop-shadow-sm">
                  Filter by location, architectural archetype, and lifestyle preferences. Instant results across our curated catalog.
                </p>
              </div>

              {/* Glassmorphic Search Bar Box */}
              <div className="w-full bg-black/65 border border-white/20 rounded-2xl sm:rounded-3xl p-3 sm:p-4 backdrop-blur-2xl shadow-2xl">
                {/* Buy / Rent Toggle */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="inline-flex p-1 bg-white/10 rounded-full border border-white/10 backdrop-blur-md">
                    <button
                      type="button"
                      onClick={() => onFilterChange({ mode: 'buy' })}
                      className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        filterState.mode === 'buy'
                          ? 'bg-white text-neutral-950 shadow-md'
                          : 'text-neutral-300 hover:text-white'
                      }`}
                    >
                      Buy Homes
                    </button>
                    <button
                      type="button"
                      onClick={() => onFilterChange({ mode: 'rent' })}
                      className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        filterState.mode === 'rent'
                          ? 'bg-white text-neutral-950 shadow-md'
                          : 'text-neutral-300 hover:text-white'
                      }`}
                    >
                      Rent Estates
                    </button>
                  </div>

                  <span className="text-xs text-neutral-400 hidden sm:inline-block ml-2">
                    {filterState.mode === 'buy' ? 'Showing purchase listings' : 'Showing luxury monthly leases'}
                  </span>
                </div>

                {/* Main Filter Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                  {/* Location input */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                      <MapPin className="w-4 h-4 text-rose-400" />
                    </div>
                    <input
                      type="text"
                      value={filterState.location}
                      onChange={(e) => onFilterChange({ location: e.target.value })}
                      placeholder="City (Malibu, Aspen, NY...)"
                      className="w-full pl-9 pr-3 py-3 rounded-xl text-sm bg-black/40 text-white placeholder-white/50 border border-white/15 focus:outline-none focus:border-rose-400/80 focus:ring-1 focus:ring-rose-400/50 backdrop-blur-md transition-all"
                    />
                  </div>

                  {/* Property Type */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                      <Building2 className="w-4 h-4 text-amber-400" />
                    </div>
                    <select
                      value={filterState.propertyType}
                      onChange={(e) => onFilterChange({ propertyType: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 rounded-xl text-sm bg-black/40 text-white border border-white/15 focus:outline-none focus:border-rose-400/80 focus:ring-1 focus:ring-rose-400/50 backdrop-blur-md appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-neutral-900 text-white">All Property Types</option>
                      <option value="Villa" className="bg-neutral-900 text-white">Villa &amp; Sanctuary</option>
                      <option value="Penthouse" className="bg-neutral-900 text-white">Skyline Penthouse</option>
                      <option value="Modern Estate" className="bg-neutral-900 text-white">Modern Estate</option>
                      <option value="Waterfront" className="bg-neutral-900 text-white">Waterfront &amp; Beachfront</option>
                      <option value="Townhouse" className="bg-neutral-900 text-white">Historic Townhouse</option>
                    </select>
                  </div>

                  {/* Price Range */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                    </div>
                    <select
                      value={filterState.priceRange}
                      onChange={(e) => onFilterChange({ priceRange: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 rounded-xl text-sm bg-black/40 text-white border border-white/15 focus:outline-none focus:border-rose-400/80 focus:ring-1 focus:ring-rose-400/50 backdrop-blur-md appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-neutral-900 text-white">Any Price Range</option>
                      {filterState.mode === 'buy' ? (
                        <>
                          <option value="under-10m" className="bg-neutral-900 text-white">Under $10,000,000</option>
                          <option value="10m-15m" className="bg-neutral-900 text-white">$10M – $15,000,000</option>
                          <option value="15m-plus" className="bg-neutral-900 text-white">$15,000,000+</option>
                        </>
                      ) : (
                        <>
                          <option value="under-25k" className="bg-neutral-900 text-white">Under $25,000 / mo</option>
                          <option value="25k-plus" className="bg-neutral-900 text-white">$25,000+ / mo</option>
                        </>
                      )}
                    </select>
                  </div>

                  {/* Bedrooms */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                      <BedDouble className="w-4 h-4 text-blue-400" />
                    </div>
                    <select
                      value={filterState.beds}
                      onChange={(e) => onFilterChange({ beds: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 rounded-xl text-sm bg-black/40 text-white border border-white/15 focus:outline-none focus:border-rose-400/80 focus:ring-1 focus:ring-rose-400/50 backdrop-blur-md appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-neutral-900 text-white">Any Bedrooms</option>
                      <option value="4" className="bg-neutral-900 text-white">4+ Bedrooms</option>
                      <option value="5" className="bg-neutral-900 text-white">5+ Bedrooms</option>
                      <option value="6" className="bg-neutral-900 text-white">6+ Bedrooms</option>
                    </select>
                  </div>

                  {/* Search Action Button */}
                  <button
                    type="button"
                    onClick={onSearchSubmit}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-950/50 transition-all cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search ({listingCount})</span>
                  </button>
                </div>

                {/* Quick Lifestyle Filters */}
                <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1 shrink-0">
                    <SlidersHorizontal className="w-3 h-3 text-rose-400" />
                    Lifestyle:
                  </span>
                  {quickFilters.map((qf) => {
                    const isActive =
                      (qf === 'All Lifestyles' && !filterState.quickFilter) ||
                      filterState.quickFilter === qf;

                    return (
                      <button
                        key={qf}
                        type="button"
                        onClick={() =>
                          onFilterChange({
                            quickFilter: qf === 'All Lifestyles' ? '' : qf
                          })
                        }
                        className={`text-xs px-3 py-1 rounded-full whitespace-nowrap border transition-all cursor-pointer ${
                          isActive
                            ? 'bg-white/20 border-white/40 text-white font-medium shadow-sm'
                            : 'bg-black/30 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {qf}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
