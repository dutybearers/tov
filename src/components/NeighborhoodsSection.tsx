import React from 'react';
import { NEIGHBORHOODS } from '../data/neighborhoods';
import { MapPin, ArrowRight } from 'lucide-react';

interface NeighborhoodsSectionProps {
  onSelectNeighborhood: (cityName: string) => void;
}

export const NeighborhoodsSection: React.FC<NeighborhoodsSectionProps> = ({ onSelectNeighborhood }) => {
  return (
    <section id="neighborhoods-section" className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-24">
      <div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border border-white/10 rounded-[32px] sm:rounded-[44px] backdrop-blur-2xl p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none"></div>

        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-300 uppercase tracking-widest mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Prime Territories</span>
              </div>
              <h2 className="text-2xl sm:text-4xl text-neutral-100 font-medium tracking-tight font-sans">
                Curated Neighborhood Guides
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-neutral-400 font-light">
                Explore premier enclaves across North America where Touch of Valentine maintains active advisory offices and off-market networks.
              </p>
            </div>
          </div>

          {/* Grid of Neighborhood Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {NEIGHBORHOODS.map((hood) => (
              <div
                key={hood.id}
                onClick={() => onSelectNeighborhood(hood.name)}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer flex flex-col justify-end min-h-[300px] shadow-lg hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={hood.image}
                  alt={hood.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/20 pointer-events-none"></div>

                {/* Content */}
                <div className="relative p-4 flex flex-col justify-end z-10">
                  <span className="text-[11px] uppercase tracking-wider text-rose-400 font-semibold mb-1">
                    {hood.region}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-rose-200 transition-colors">
                    {hood.name}
                  </h3>

                  <div className="mt-2.5 pt-2.5 border-t border-white/15 flex items-center justify-between text-xs text-neutral-300">
                    <div>
                      <span className="text-white font-semibold">{hood.averagePrice}</span>
                      <span className="text-neutral-400 block text-[10px]">Avg Estate</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white font-semibold">{hood.activeListingsCount}</span>
                      <span className="text-neutral-400 block text-[10px]">TOV Listings</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-rose-300 group-hover:translate-x-1 transition-transform">
                    <span>View Homes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
