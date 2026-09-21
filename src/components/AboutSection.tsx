import React from 'react';
import { ArrowRight, Sparkles, Shield, Plane, Home, Award } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="story-section" className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-24">
      <div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border border-white/10 rounded-[32px] sm:rounded-[44px] backdrop-blur-2xl p-6 sm:p-8 lg:p-10">
        {/* Top ambient highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none"></div>

        <div className="relative grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Media + Story Copy (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
                alt="Clients touring an architectural oceanfront estate"
                className="w-full h-[280px] sm:h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                  Private Showing • Point Dume, Malibu
                </span>
                <span className="hidden sm:inline-block bg-rose-500/20 text-rose-300 backdrop-blur-md px-3 py-1 rounded-full border border-rose-500/30">
                  Off-Market Acquisition
                </span>
              </div>
            </div>

            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-rose-500/60"></span>
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-rose-300">
                  About Touch of Valentine Homes
                </span>
              </div>

              <h2 className="mt-2 text-2xl sm:text-4xl text-neutral-100 font-medium tracking-tight font-sans">
                Our Story &amp; Architectural Heritage
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-300 font-light">
                <strong className="text-white font-medium">Touch of Valentine Homes (TOV)</strong> was founded with a singular conviction: luxury real estate must transcend transactional mechanics to become an inspiring, deeply bespoke partnership. What started as a boutique private office representing visionary architects and art patrons has evolved into a celebrated nationwide advisory network.
              </p>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-400 font-light">
                From cliffside Malibu sanctuaries to Manhattan sky mansions, our team inspects every floor plan, verifies deed provenance, and negotiates with quiet discretion. We bridge local architectural insight with proprietary global capital networks to ensure effortless transitions.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-100 bg-white/10 hover:bg-white/20 rounded-full px-5 py-2.5 border border-white/20 transition-all cursor-pointer shadow-sm"
                >
                  <span>Meet Our Private Advisors</span>
                  <ArrowRight className="w-4 h-4 text-rose-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Key Stats & Concierge Spotlight (Span 1) */}
          <div id="concierge-section" className="lg:col-span-1 flex flex-col justify-between scroll-mt-28">
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
              <li className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5">
                <div className="text-3xl sm:text-4xl text-white font-bold tracking-tight font-sans">$2.4B+</div>
                <p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-medium">Curated Sales Volume</p>
              </li>

              <li className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5">
                <div className="text-3xl sm:text-4xl text-white font-bold tracking-tight font-sans">28</div>
                <p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-medium">Prime Markets Served</p>
              </li>

              <li className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5">
                <div className="text-3xl sm:text-4xl text-rose-300 font-bold tracking-tight font-sans">98.4%</div>
                <p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-medium">List-to-Sale Ratio</p>
              </li>

              <li className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5">
                <div className="text-3xl sm:text-4xl text-white font-bold tracking-tight font-sans">4.98 / 5</div>
                <p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-medium">Verified Client Satisfaction</p>
              </li>
            </ul>

            {/* Concierge Spotlight Box */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>White-Glove Service</span>
              </div>
              <h3 className="text-xl text-neutral-100 font-semibold tracking-tight">
                Concierge by Touch of Valentine
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-400 font-light">
                From chartered helicopter property tours to vetted fine-art movers, interior staging, and confidential escrow structuring, our concierge team orchestrates every detail with absolute precision.
              </p>

              <div className="mt-4 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Plane className="w-3.5 h-3.5 text-rose-400" />
                  <span>Private Jet &amp; Helicopter Site Visits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-3.5 h-3.5 text-amber-400" />
                  <span>Turnkey Architectural Staging &amp; Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Confidential Family Office Escrow</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-tight text-white bg-rose-600/90 hover:bg-rose-500 rounded-full px-4 py-2 border border-rose-400/30 transition-all cursor-pointer shadow-md"
              >
                <span>Request Concierge Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
