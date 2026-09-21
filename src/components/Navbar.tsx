import React, { useState } from 'react';
import { Logo } from './Logo';
import { Heart, Menu, X, PhoneCall, Sparkles, Building, KeyRound, MapPin } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onOpenSaved?: () => void;
  onOpenSavedDrawer?: () => void;
  onOpenValuation: () => void;
  onSelectMode?: (mode: 'buy' | 'rent') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSaved,
  onOpenSavedDrawer,
  onOpenValuation,
  onSelectMode
}) => {
  const triggerOpenSaved = onOpenSavedDrawer || onOpenSaved || (() => {});

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-3 z-50 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-full py-2 px-3 sm:px-5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-200 hover:border-white/20">
        {/* Brand Logo */}
        <a
          href="#"
          className="focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo size="sm" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-neutral-300">
          <button
            onClick={() => {
              onSelectMode?.('buy');
              handleNavClick('listings-section');
            }}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Buy
          </button>
          <button
            onClick={() => {
              onSelectMode?.('rent');
              handleNavClick('listings-section');
            }}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Rent
          </button>
          <button
            onClick={onOpenValuation}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5 cursor-pointer text-amber-300/90"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Sell / Valuation
          </button>
          <button
            onClick={() => handleNavClick('story-section')}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Our Story
          </button>
          <button
            onClick={() => handleNavClick('concierge-section')}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Concierge
          </button>
          <button
            onClick={() => handleNavClick('neighborhoods-section')}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Neighborhoods
          </button>
          <button
            onClick={() => handleNavClick('testimonials-section')}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Testimonials
          </button>
          <button
            onClick={() => handleNavClick('contact-section')}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Saved properties button with badge */}
          <button
            onClick={triggerOpenSaved}
            className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 transition-colors flex items-center justify-center cursor-pointer"
            title="View saved homes"
            aria-label="View saved homes"
          >
            <Heart className={`w-4 h-4 ${savedCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-neutral-300'}`} />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
                {savedCount}
              </span>
            )}
          </button>

          {/* Quick Schedule / Consultation CTA */}
          <button
            onClick={() => handleNavClick('contact-section')}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full border border-rose-400/30 shadow-sm shadow-rose-950/50 transition-all cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Private Advisory</span>
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 bg-neutral-900/95 border border-white/10 rounded-2xl backdrop-blur-2xl shadow-2xl flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            <button
              onClick={() => {
                onSelectMode?.('buy');
                handleNavClick('listings-section');
              }}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-neutral-200"
            >
              <Building className="w-4 h-4 text-rose-400" />
              <span>Buy Properties</span>
            </button>
            <button
              onClick={() => {
                onSelectMode?.('rent');
                handleNavClick('listings-section');
              }}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-neutral-200"
            >
              <KeyRound className="w-4 h-4 text-amber-400" />
              <span>Rent Estates</span>
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenValuation();
            }}
            className="flex items-center gap-2.5 py-2 px-3 text-sm text-amber-300 hover:bg-white/5 rounded-lg text-left"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Sell with TOV &amp; Instant Valuation</span>
          </button>

          <button
            onClick={() => handleNavClick('story-section')}
            className="py-2 px-3 text-sm text-neutral-300 hover:bg-white/5 rounded-lg text-left"
          >
            Our Story &amp; Heritage
          </button>
          <button
            onClick={() => handleNavClick('concierge-section')}
            className="py-2 px-3 text-sm text-neutral-300 hover:bg-white/5 rounded-lg text-left"
          >
            Concierge Services
          </button>
          <button
            onClick={() => handleNavClick('neighborhoods-section')}
            className="flex items-center gap-2 py-2 px-3 text-sm text-neutral-300 hover:bg-white/5 rounded-lg text-left"
          >
            <MapPin className="w-4 h-4 text-neutral-400" />
            <span>Prime Neighborhoods</span>
          </button>
          <button
            onClick={() => handleNavClick('testimonials-section')}
            className="py-2 px-3 text-sm text-neutral-300 hover:bg-white/5 rounded-lg text-left"
          >
            Client Reviews &amp; Press
          </button>
          <button
            onClick={() => handleNavClick('contact-section')}
            className="py-2 px-3 text-sm text-neutral-300 hover:bg-white/5 rounded-lg text-left"
          >
            Contact &amp; Offices
          </button>

          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                triggerOpenSaved();
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-white/5 text-xs text-neutral-300 flex items-center justify-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>Saved ({savedCount})</span>
            </button>
            <button
              onClick={() => handleNavClick('contact-section')}
              className="flex-1 py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-semibold text-white text-center"
            >
              Contact Advisory
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
