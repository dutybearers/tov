import React from 'react';
import { TESTIMONIALS, PRESS_MENTIONS } from '../data/testimonials';
import { Star, Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-24">
      <div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border border-white/10 rounded-[32px] sm:rounded-[44px] backdrop-blur-2xl p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none"></div>

        <div className="relative">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-300 uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Client Discretion &amp; Trust</span>
            </div>
            <h2 className="text-2xl sm:text-4xl text-neutral-100 font-medium tracking-tight font-sans">
              Words from Our Patrons
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 font-light">
              Distinguished collectors, founders, and family offices reflect on their acquisitions with Touch of Valentine Homes.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-neutral-900/60 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all shadow-md"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-full">
                      {item.propertyPurchased} ({item.price})
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-7 h-7 text-rose-500/20 absolute -top-2 -left-1 pointer-events-none" />
                    <p className="text-sm leading-relaxed text-neutral-200 pl-4 font-light italic">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Client Avatar & Role */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                    <p className="text-xs text-neutral-400">{item.role}</p>
                    <p className="text-[11px] text-neutral-500">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Press Recognition Banner */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <span className="block text-center text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">
              Recognized in Global Architectural &amp; Financial Media
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PRESS_MENTIONS.map((press, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-900/40 border border-white/5 text-center flex flex-col justify-between"
                >
                  <span className="text-sm font-bold text-neutral-200 tracking-wide font-sans">
                    {press.name}
                  </span>
                  <p className="text-xs text-neutral-400 mt-2 italic font-light">
                    {press.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
