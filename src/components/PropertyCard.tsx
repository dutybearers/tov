import React from 'react';
import { Property } from '../types';
import { Heart, MapPin, BedDouble, Bath, Square, Eye, Sparkles } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onOpenVirtualTour: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isSaved,
  onToggleSave,
  onSelectProperty,
  onOpenVirtualTour
}) => {
  return (
    <article className="group overflow-hidden bg-neutral-900/80 border border-white/10 hover:border-white/25 rounded-2xl sm:rounded-3xl transition-all duration-300 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-black/60">
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
        <img
          src={property.images[0]}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Gradient shadow for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
          {property.badge && (
            <span className="text-[11px] font-semibold text-white bg-rose-600/90 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/20 shadow-sm">
              {property.badge}
            </span>
          )}
          <span className="text-[11px] font-medium text-neutral-200 bg-black/60 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/10">
            {property.type}
          </span>
        </div>

        {/* Save to favorites button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(property.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
            isSaved
              ? 'bg-rose-500 text-white border-rose-400 shadow-md'
              : 'bg-black/50 text-neutral-300 hover:text-white border-white/15 hover:bg-black/80'
          }`}
          aria-label={isSaved ? 'Remove from saved' : 'Save property'}
          title={isSaved ? 'Saved to favorites' : 'Save to favorites'}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
        </button>

        {/* Bottom image overlay specs bar */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md font-sans">
            {property.formattedPrice}
          </span>

          {property.virtualTourAvailable && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenVirtualTour(property);
              }}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white bg-white/15 hover:bg-white/25 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>3D Tour</span>
            </button>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="truncate">{property.neighborhood}, {property.city}, {property.state}</span>
          </div>

          <h3
            onClick={() => onSelectProperty(property)}
            className="text-base sm:text-lg font-semibold tracking-tight text-neutral-100 hover:text-rose-300 transition-colors cursor-pointer line-clamp-1"
          >
            {property.title}
          </h3>

          <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed font-light">
            {property.tagline}
          </p>
        </div>

        <div className="mt-4 pt-3.5 border-t border-white/10">
          {/* Specs icons row */}
          <div className="flex items-center justify-between text-xs text-neutral-300 font-medium">
            <div className="flex items-center gap-1.5" title="Bedrooms">
              <BedDouble className="w-4 h-4 text-neutral-400" />
              <span>{property.beds} <span className="text-neutral-500 font-normal">bd</span></span>
            </div>
            <div className="flex items-center gap-1.5" title="Bathrooms">
              <Bath className="w-4 h-4 text-neutral-400" />
              <span>{property.baths} <span className="text-neutral-500 font-normal">ba</span></span>
            </div>
            <div className="flex items-center gap-1.5" title="Interior Square Footage">
              <Square className="w-4 h-4 text-neutral-400" />
              <span>{property.sqft.toLocaleString()} <span className="text-neutral-500 font-normal">sqft</span></span>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectProperty(property)}
              className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-100 font-medium text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-white/10"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Property</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenVirtualTour(property)}
              className="py-2 px-3 rounded-xl bg-rose-600/80 hover:bg-rose-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-rose-500/30"
              title="Schedule Showing or View Tour"
            >
              <span>Showing</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
