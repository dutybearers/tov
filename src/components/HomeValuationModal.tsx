import React, { useState } from 'react';
import { X, Sparkles, Building, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

interface HomeValuationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HomeValuationModal: React.FC<HomeValuationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('Modern Villa');
  const [sqft, setSqft] = useState('5500');
  const [beds, setBeds] = useState('5');
  const [condition, setCondition] = useState('Luxury Turnkey');
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');
  const [calculatedEstimate, setCalculatedEstimate] = useState<{ low: number; high: number; ppsqft: number } | null>(null);

  const calculateValuation = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedSqft = parseInt(sqft) || 5000;
    // Calculation model based on prime luxury baseline ~$1,600 - $2,400 / sqft
    const rate = condition === 'Luxury Turnkey' ? 2100 : condition === 'Excellent' ? 1800 : 1500;
    const baseValuation = parsedSqft * rate;
    const low = Math.round((baseValuation * 0.94) / 10000) * 10000;
    const high = Math.round((baseValuation * 1.08) / 10000) * 10000;

    setCalculatedEstimate({
      low,
      high,
      ppsqft: rate
    });
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-neutral-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-300 uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Touch of Valentine Advisory</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {step === 1 ? 'Instant Estate Valuation' : step === 2 ? 'Your Preliminary Valuation' : 'Consultation Scheduled'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            {step === 1
              ? 'Discover the current market value of your property in today’s private luxury estate marketplace.'
              : step === 2
              ? 'Based on comparable prime transactions and current demand metrics in our private network.'
              : 'Our senior managing broker will be in touch with a confidential market dossier.'}
          </p>
        </div>

        {/* Step 1: Input specs */}
        {step === 1 && (
          <form onSubmit={calculateValuation} className="space-y-4">
            <div>
              <label className="text-xs text-neutral-300 block mb-1">Estate Address / Street</label>
              <input
                type="text"
                required
                placeholder="e.g. 10440 Bellagio Road"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/15 text-white text-sm focus:outline-none focus:border-rose-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-neutral-300 block mb-1">City / Region</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Beverly Hills, CA"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/15 text-white text-sm focus:outline-none focus:border-rose-400"
                />
              </div>
              <div>
                <label className="text-xs text-neutral-300 block mb-1">Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/15 text-white text-sm focus:outline-none focus:border-rose-400"
                >
                  <option value="Modern Villa">Modern Villa</option>
                  <option value="Waterfront Sanctuary">Waterfront Sanctuary</option>
                  <option value="Skyline Penthouse">Skyline Penthouse</option>
                  <option value="Historic Estate">Historic Estate</option>
                  <option value="Townhouse">Townhouse</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-neutral-300 block mb-1">Interior Sq Ft</label>
                <input
                  type="number"
                  required
                  value={sqft}
                  onChange={(e) => setSqft(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-white/15 text-white text-sm focus:outline-none focus:border-rose-400"
                />
              </div>
              <div>
                <label className="text-xs text-neutral-300 block mb-1">Bedrooms</label>
                <select
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-white/15 text-white text-sm focus:outline-none focus:border-rose-400"
                >
                  <option value="3">3 Beds</option>
                  <option value="4">4 Beds</option>
                  <option value="5">5 Beds</option>
                  <option value="6+">6+ Beds</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-neutral-300 block mb-1">Condition</label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-white/15 text-white text-sm focus:outline-none focus:border-rose-400"
                >
                  <option value="Luxury Turnkey">Turnkey Luxury</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Updated">Updated</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-sm shadow-lg shadow-rose-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Calculate Valuation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Step 2: Show estimated value range & lead capture */}
        {step === 2 && calculatedEstimate && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-neutral-950 border border-rose-500/30 text-center space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-rose-400 font-bold">
                Estimated Valuation Range
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                ${(calculatedEstimate.low / 1000000).toFixed(2)}M &ndash; ${(calculatedEstimate.high / 1000000).toFixed(2)}M
              </div>
              <p className="text-xs text-neutral-400">
                Average ~${calculatedEstimate.ppsqft.toLocaleString()} / sq ft for {propertyType} in {city || 'prime market'}.
              </p>
            </div>

            <form onSubmit={handleFinalSubmit} className="space-y-3 bg-neutral-950/60 p-4 rounded-xl border border-white/10">
              <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wide">
                Receive the Comprehensive Private Market Report
              </h4>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs placeholder-white/40 focus:outline-none focus:border-rose-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={sellerEmail}
                  onChange={(e) => setSellerEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs placeholder-white/40 focus:outline-none focus:border-rose-400"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={sellerPhone}
                  onChange={(e) => setSellerPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs placeholder-white/40 focus:outline-none focus:border-rose-400"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 text-xs text-neutral-300 hover:text-white"
                >
                  Adjust Info
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-md"
                >
                  Request Confidential Consultation
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Success State */}
        {step === 3 && (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
            <h4 className="text-xl font-bold text-white">Valuation Request Received</h4>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, {sellerName || 'valued homeowner'}. Valentine Laurent and our senior market research desk have received your request for <strong className="text-white">{address || 'your estate'}</strong> and will prepare a confidential CMA.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
            >
              Back to Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
