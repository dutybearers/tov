import React, { useState } from 'react';
import { Property } from '../types';
import {
  X,
  MapPin,
  BedDouble,
  Bath,
  Square,
  Calendar,
  DollarSign,
  Car,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  CheckCircle2,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
  Calculator
} from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onBookViewing: (propertyName: string, date: string, time: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  isSaved,
  onToggleSave,
  onBookViewing
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'tour' | 'calculator'>('overview');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('11:00 AM');
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Mortgage calculator state
  const defaultDownPayment = Math.round(property.price * 0.2);
  const [downPayment, setDownPayment] = useState(defaultDownPayment);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  // Mortgage calculation
  const loanAmount = Math.max(0, property.price - downPayment);
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyPrincipalAndInterest =
    monthlyInterestRate === 0
      ? loanAmount / numberOfPayments
      : (loanAmount *
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  const monthlyPropertyTax = property.estimatedTax ? property.estimatedTax / 12 : 800;
  const monthlyHOA = property.hoaFee || 0;
  const totalMonthlyPayment = Math.round(
    monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyHOA + 350 // insurance
  );

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate) return;
    onBookViewing(property.title, bookingDate, bookingTime);
    setBookingSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-neutral-900 border border-white/15 rounded-3xl sm:rounded-[36px] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-neutral-900/90 border-b border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
              {property.type}
            </span>
            <span className="text-xs text-neutral-400 hidden sm:inline-block">
              {property.address}, {property.city}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(property.id)}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isSaved
                  ? 'bg-rose-500 text-white border-rose-400'
                  : 'bg-white/5 text-neutral-300 hover:text-white border-white/10'
              }`}
              title={isSaved ? 'Saved to favorites' : 'Save property'}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              title="Share property"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {copiedLink && (
              <span className="text-xs text-emerald-400 font-medium">Link copied!</span>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Main Visual Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg">
              <img
                src={property.images[activeImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Navigation Chevrons */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? property.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white backdrop-blur-md cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === property.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white backdrop-blur-md cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 text-xs text-white bg-black/70 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                {activeImageIndex + 1} of {property.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            {property.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-rose-500 scale-105'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Price Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs text-rose-300 font-medium">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{property.neighborhood}, {property.city}, {property.state} {property.zipCode}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                {property.title}
              </h2>
              <p className="text-sm text-neutral-400 mt-0.5">{property.tagline}</p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
                {property.formattedPrice}
              </span>
              <p className="text-xs text-neutral-400 mt-0.5">
                {property.status === 'For Rent' ? 'Full furnished luxury lease' : 'Estimated closing in 30 days'}
              </p>
            </div>
          </div>

          {/* Quick Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-neutral-800/60 border border-white/10 text-center">
              <BedDouble className="w-5 h-5 text-neutral-400 mx-auto mb-1" />
              <div className="text-base font-semibold text-white">{property.beds} Bedrooms</div>
              <p className="text-[11px] text-neutral-400">Suites &amp; Quarters</p>
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-800/60 border border-white/10 text-center">
              <Bath className="w-5 h-5 text-neutral-400 mx-auto mb-1" />
              <div className="text-base font-semibold text-white">{property.baths} Bathrooms</div>
              <p className="text-[11px] text-neutral-400">Custom Spa Finished</p>
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-800/60 border border-white/10 text-center">
              <Square className="w-5 h-5 text-neutral-400 mx-auto mb-1" />
              <div className="text-base font-semibold text-white">{property.sqft.toLocaleString()} Sq Ft</div>
              <p className="text-[11px] text-neutral-400">Interior Living Area</p>
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-800/60 border border-white/10 text-center">
              <Car className="w-5 h-5 text-neutral-400 mx-auto mb-1" />
              <div className="text-base font-semibold text-white">{property.parkingSpaces} Garage</div>
              <p className="text-[11px] text-neutral-400">{property.lotSize || 'Secured Motor Court'}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-white/10 gap-6 text-sm font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-rose-500 text-white'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Property Overview
            </button>
            <button
              onClick={() => setActiveTab('tour')}
              className={`pb-3 border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'tour'
                  ? 'border-rose-500 text-white'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>3D Virtual Walkthrough</span>
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`pb-3 border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'calculator'
                  ? 'border-rose-500 text-white'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-rose-400" />
              <span>Payment Calculator</span>
            </button>
          </div>

          {/* Tab Content: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-white mb-2">Architectural Narrative</h4>
                <p className="text-sm leading-relaxed text-neutral-300 font-light">
                  {property.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-base font-semibold text-white mb-3">Key Architectural Highlights</h4>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {property.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities Pills */}
              <div>
                <h4 className="text-base font-semibold text-white mb-3">Curated Amenities</h4>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((am, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-200"
                    >
                      {am}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: 3D Virtual Tour */}
          {activeTab === 'tour' && (
            <div className="p-6 rounded-2xl bg-neutral-950 border border-white/10 text-center space-y-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
                <img
                  src={property.images[0]}
                  alt="3D Tour Preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-35 filter blur-[1px]"
                />
                <div className="relative z-10 p-6 max-w-md bg-black/75 border border-white/20 rounded-2xl backdrop-blur-xl">
                  <Sparkles className="w-8 h-8 text-rose-400 mx-auto mb-2 animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Interactive 360° Matterport Tour</h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    Full spatial dollhouse preview loaded with high-fidelity photogrammetry.
                  </p>
                  <button
                    onClick={() => {
                      const elem = document.getElementById('booking-section-box');
                      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                  >
                    Request Live Broker-Guided VR Tour
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: Mortgage Calculator */}
          {activeTab === 'calculator' && (
            <div className="p-6 rounded-2xl bg-neutral-950 border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-semibold text-white">Mortgage &amp; Carrying Cost Estimation</h4>
                  <p className="text-xs text-neutral-400">Estimate your monthly payment based on current prime rates.</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-rose-400 font-sans">
                    ${totalMonthlyPayment.toLocaleString()} <span className="text-xs font-normal text-neutral-400">/ mo</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">Estimated Total Monthly</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="text-xs text-neutral-400 block mb-1">Down Payment ($)</label>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400"
                  />
                  <span className="text-[10px] text-neutral-500 mt-1 block">
                    {Math.round((downPayment / property.price) * 100)}% of purchase price
                  </span>
                </div>

                <div>
                  <label className="text-xs text-neutral-400 block mb-1">Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400"
                  />
                </div>

                <div>
                  <label className="text-xs text-neutral-400 block mb-1">Loan Term</label>
                  <select
                    value={loanTermYears}
                    onChange={(e) => setLoanTermYears(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400"
                  >
                    <option value={30}>30-Year Fixed</option>
                    <option value={15}>15-Year Fixed</option>
                    <option value={10}>10-Year ARM</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-white/5">
                  <span className="text-neutral-400 block">Principal &amp; Interest</span>
                  <span className="text-white font-semibold">${Math.round(monthlyPrincipalAndInterest).toLocaleString()}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5">
                  <span className="text-neutral-400 block">Property Tax (Est.)</span>
                  <span className="text-white font-semibold">${Math.round(monthlyPropertyTax).toLocaleString()}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5">
                  <span className="text-neutral-400 block">HOA / Maintenance</span>
                  <span className="text-white font-semibold">${monthlyHOA.toLocaleString()}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5">
                  <span className="text-neutral-400 block">Homeowners Insurance</span>
                  <span className="text-white font-semibold">$350</span>
                </div>
              </div>
            </div>
          )}

          {/* Dedicated Listing Agent Card & Direct Booking */}
          <div id="booking-section-box" className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/15 grid lg:grid-cols-2 gap-8">
            {/* Agent info */}
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-rose-400">
                Official Listing Advisor
              </span>
              <div className="flex items-center gap-4">
                <img
                  src={property.agent.avatar}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-rose-500/40 shadow-md"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{property.agent.name}</h4>
                  <p className="text-xs text-neutral-400">{property.agent.role}</p>
                  <p className="text-xs text-rose-300 mt-0.5">Touch of Valentine Homes</p>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-neutral-400 font-light">
                Available for private helicopter transfers, confidential NDA inquiries, and bespoke evening viewings.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{property.agent.phone}</span>
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  <span>Direct Message</span>
                </a>
              </div>
            </div>

            {/* Quick Booking Form */}
            <div className="bg-neutral-950 p-5 rounded-xl border border-white/10">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-rose-400" />
                <span>Schedule a Private Showing</span>
              </h4>

              {bookingSuccess ? (
                <div className="py-6 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h5 className="text-sm font-bold text-white">Private Tour Requested</h5>
                  <p className="text-xs text-neutral-400">
                    {property.agent.name} will contact you shortly to confirm gate access and credentials.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-400"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Preferred Time</label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-400"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="01:00 PM">1:00 PM</option>
                        <option value="04:00 PM (Sunset Tour)">4:00 PM (Sunset)</option>
                        <option value="07:00 PM (Twilight)">7:00 PM (Twilight)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs placeholder-white/40 focus:outline-none focus:border-rose-400"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone (for gate verification)"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs placeholder-white/40 focus:outline-none focus:border-rose-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-xs transition-all shadow-md cursor-pointer"
                  >
                    Confirm Private Showing Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
