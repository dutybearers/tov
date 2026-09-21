import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showSubtitle = true }) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-9 h-9';
  const monogramText = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';
  const brandTitle = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* TOV Architectural Monogram Badge */}
      <div className={`relative ${iconSize} rounded-xl bg-gradient-to-br from-neutral-800 via-neutral-900 to-black border border-white/20 p-0.5 flex items-center justify-center shadow-lg shadow-black/40 group overflow-hidden`}>
        {/* Subtle inner romantic gold/rose glow accent */}
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-rose-500/20 rounded-full blur-sm pointer-events-none transition-all duration-300 group-hover:scale-150 group-hover:bg-rose-500/30"></div>
        <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-amber-500/15 rounded-full blur-sm pointer-events-none"></div>

        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle architectural frame */}
          <rect x="2" y="2" width="32" height="32" rx="8" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.2" />
          {/* T-O-V geometric lines */}
          {/* T bar and stem */}
          <path d="M7 10H29" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M18 10V27" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          {/* O subtle diamond / ring */}
          <circle cx="18" cy="18.5" r="7" stroke="url(#roseGoldGrad)" strokeWidth="1.5" strokeDasharray="1.5 2.5" />
          {/* V chevron */}
          <path d="M11 14L18 26L25 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="roseGoldGrad" x1="11" y1="11" x2="25" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f43f5e" />
              <stop offset="0.5" stopColor="#fb7185" />
              <stop offset="1" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-bold tracking-tight text-white font-sans ${brandTitle}`}>
            Touch of Valentine
          </span>
          <span className={`font-extrabold tracking-widest text-rose-400/90 uppercase text-[10px] px-1.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20`}>
            TOV
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
            Homes &amp; Estates
          </span>
        )}
      </div>
    </div>
  );
};
