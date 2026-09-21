import React, { useState } from 'react';
import { Logo } from './Logo';
import { Mail, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenValuation: () => void;
  onFilterCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenValuation, onFilterCategory }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
      <div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/85 border border-white/10 rounded-[32px] sm:rounded-[44px] backdrop-blur-2xl p-6 sm:p-8 lg:p-12">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none"></div>

        <div className="relative">
          {/* Main 4 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-10 border-b border-white/10">
            {/* Col 1: Brand & Contact (Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <Logo size="md" />
              <p className="text-sm leading-relaxed text-neutral-400 font-light max-w-sm mt-3">
                Curated architectural estates, verified deeds, and white-glove concierge support from private tour to escrow closing. Move with confidence.
              </p>

              <div className="pt-2 text-xs text-neutral-300 space-y-1">
                <p>
                  <strong className="text-white font-medium">Headquarters:</strong> 450 N Bedford Dr, Penthouse, Beverly Hills, CA 90210
                </p>
                <p>
                  <strong className="text-white font-medium">Client Concierge:</strong> +1 (800) 868-4663 | concierge@touchofvalentine.com
                </p>
              </div>

              {/* Newsletter subscribe */}
              <div className="pt-3 max-w-sm">
                <span className="text-xs uppercase tracking-wider text-rose-300 font-semibold block mb-1.5">
                  Private Off-Market Dispatch
                </span>
                {newsletterSubscribed ? (
                  <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl">
                    <Check className="w-4 h-4" />
                    <span>You are subscribed to confidential releases.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs placeholder-white/40 focus:outline-none focus:border-rose-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs transition-colors shrink-0 cursor-pointer"
                    >
                      Join
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Col 2: Real Estate Menus - Buy & Sell */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-white font-bold">
                Properties &amp; Advisory
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>
                  <button
                    onClick={() => {
                      onFilterCategory('buy');
                      scrollToSection('listings-section');
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Buy Luxury Homes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onFilterCategory('rent');
                      scrollToSection('listings-section');
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Luxury Monthly Leases
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenValuation}
                    className="hover:text-white transition-colors cursor-pointer text-left text-amber-300"
                  >
                    Instant Estate Valuation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onFilterCategory('Villa');
                      scrollToSection('listings-section');
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Modern Villas &amp; Sanctuaries
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onFilterCategory('Penthouse');
                      scrollToSection('listings-section');
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Skyline Penthouses
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onFilterCategory('Waterfront');
                      scrollToSection('listings-section');
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Waterfront &amp; Island Properties
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Services & Concierge */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-white font-bold">
                Services &amp; Concierge
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>
                  <button
                    onClick={() => scrollToSection('concierge-section')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    White-Glove Concierge
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('story-section')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Valentine Laurent Story
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact-section')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Private Helicopter Charters
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenValuation}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    List a Property with TOV
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('testimonials-section')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Client Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact-section')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Off-Market Confidential Vault
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Territories */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-white font-bold">
                Prime Markets
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>
                  <button
                    onClick={() => scrollToSection('neighborhoods-section')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Beverly Hills &amp; Bel Air
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('neighborhoods-section')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Malibu Pacific Coast
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('neighborhoods-section')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Manhattan &amp; Tribeca
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('neighborhoods-section')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Aspen &amp; Red Mountain
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('neighborhoods-section')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Miami Beach &amp; Venetian Islands
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('neighborhoods-section')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Austin Lakefront
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Compliance & Legal Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-light">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded bg-white/10 text-white font-bold text-[10px]">
                EHO
              </div>
              <span>
                Equal Housing Opportunity. All listings verified under North American MLS guidelines.
              </span>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span className="text-neutral-400">Fair Housing Statement</span>
              <span>•</span>
              <span className="text-neutral-400">Privacy Policy</span>
              <span>•</span>
              <span className="text-neutral-400">Terms of Brokerage</span>
              <span>•</span>
              <span className="text-neutral-400">Accessibility</span>
            </div>

            <div className="text-neutral-400">
              © {new Date().getFullYear()} Touch of Valentine Homes LLC (TOV). All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
