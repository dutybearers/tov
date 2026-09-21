import React from 'react';
import { Property } from '../types';
import { X, Heart, Trash2, ArrowRight, Eye, Building2 } from 'lucide-react';

interface SavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProperties: Property[];
  onRemoveSaved: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onInquireAll: () => void;
}

export const SavedDrawer: React.FC<SavedDrawerProps> = ({
  isOpen,
  onClose,
  savedProperties,
  onRemoveSaved,
  onSelectProperty,
  onInquireAll
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-neutral-900 border-l border-white/10 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-neutral-950">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Saved Estates ({savedProperties.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Property List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {savedProperties.length > 0 ? (
            savedProperties.map((prop) => (
              <div
                key={prop.id}
                className="p-3 rounded-2xl bg-neutral-950/80 border border-white/10 flex gap-3 group hover:border-white/20 transition-all"
              >
                <div
                  onClick={() => {
                    onSelectProperty(prop);
                    onClose();
                  }}
                  className="w-24 h-20 rounded-xl overflow-hidden shrink-0 bg-neutral-900 cursor-pointer"
                >
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <h4
                      onClick={() => {
                        onSelectProperty(prop);
                        onClose();
                      }}
                      className="text-xs font-semibold text-white truncate cursor-pointer hover:text-rose-300"
                    >
                      {prop.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 truncate">
                      {prop.city}, {prop.state}
                    </p>
                    <p className="text-xs font-bold text-rose-400 mt-0.5">
                      {prop.formattedPrice}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px]">
                    <span className="text-neutral-400">
                      {prop.beds}bd • {prop.baths}ba
                    </span>
                    <button
                      onClick={() => onRemoveSaved(prop.id)}
                      className="text-neutral-500 hover:text-rose-400 transition-colors cursor-pointer"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center space-y-3">
              <Heart className="w-12 h-12 text-neutral-700 mx-auto" />
              <p className="text-sm text-neutral-400">No properties saved yet.</p>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Tap the heart on any luxury estate card to bookmark it for private review or collective inquiry.
              </p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        {savedProperties.length > 0 && (
          <div className="p-4 border-t border-white/10 bg-neutral-950 space-y-2">
            <button
              onClick={() => {
                onInquireAll();
                onClose();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Schedule Showing for Saved Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
