import React, { useState } from 'react';
import { InquiryFormData } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Buying',
    budget: '$5M - $15M',
    preferredContact: 'Phone',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate server-side lead ingestion
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-24">
      <div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border border-white/10 rounded-[32px] sm:rounded-[44px] backdrop-blur-2xl p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none"></div>

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Office & Contact Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-300 uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Private Advisory Office</span>
              </div>
              <h2 className="text-2xl sm:text-4xl text-neutral-100 font-medium tracking-tight font-sans">
                Contact Touch of Valentine
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400 font-light">
                Whether you are seeking an architectural oceanfront acquisition, listing an extraordinary estate, or requesting off-market portfolio access, our founding partners are at your service.
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-300">Flagship Headquarters</h4>
                  <p className="text-sm text-white font-medium mt-0.5">450 North Bedford Drive, Penthouse Suite</p>
                  <p className="text-xs text-neutral-400">Beverly Hills, CA 90210</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-300">Direct Concierge Lines</h4>
                  <p className="text-sm text-white font-medium mt-0.5">+1 (800) 868-4663 <span className="text-xs text-neutral-400">(800-TOV-HOME)</span></p>
                  <p className="text-xs text-neutral-400">Direct Beverly Hills: +1 (310) 844-9200</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-300">Confidential Desk</h4>
                  <p className="text-sm text-white font-medium mt-0.5">concierge@touchofvalentine.com</p>
                  <p className="text-xs text-neutral-400">advisory@touchofvalentine.com</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-300">Advisory Hours</h4>
                  <p className="text-sm text-white font-medium mt-0.5">Monday – Saturday: 8:00 AM – 8:00 PM PST</p>
                  <p className="text-xs text-neutral-400">Private client emergency desk available 24/7</p>
                </div>
              </div>
            </div>

            {/* Discretion badge */}
            <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-white/10 flex items-center gap-2.5 text-xs text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Full confidentiality &amp; non-disclosure agreements honored immediately upon contact.</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (7 Cols) */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto animate-in zoom-in-75">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                  Inquiry Discretely Received
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Valentine Laurent and our senior partner desk have received your inquiry. A private advisor will contact you via {formData.preferredContact.toLowerCase()} within 4 business hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Buying',
                        budget: '$5M - $15M',
                        preferredContact: 'Phone',
                        preferredDate: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Schedule a Private Advisory Consultation
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Complete the form below to connect with a Touch of Valentine partner.
                  </p>
                </div>

                {/* Inquiry Type Radio / Pill selector */}
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                    Nature of Inquiry
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Buying',
                      'Selling',
                      'Luxury Rental',
                      'Private Concierge Tour',
                      'Valuation'
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, inquiryType: type as any })
                        }
                        className={`text-xs py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                          formData.inquiryType === type
                            ? 'bg-rose-600/90 text-white border-rose-400 font-semibold shadow-sm'
                            : 'bg-neutral-950/60 text-neutral-300 border-white/10 hover:bg-white/5'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-neutral-300 block mb-1">Full Legal Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vivienne Caldwell"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-rose-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-neutral-300 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. v.caldwell@familyoffice.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-rose-400 transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Budget */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-neutral-300 block mb-1">Direct Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-rose-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-neutral-300 block mb-1">Target Budget / Valuation</label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400 transition-all cursor-pointer"
                    >
                      <option value="$2M - $5M" className="bg-neutral-900">$2,000,000 – $5,000,000</option>
                      <option value="$5M - $15M" className="bg-neutral-900">$5,000,000 – $15,000,000</option>
                      <option value="$15M - $30M" className="bg-neutral-900">$15,000,000 – $30,000,000</option>
                      <option value="$30M+" className="bg-neutral-900">$30,000,000+ Trophy Portfolio</option>
                      <option value="Under $50k/mo Lease" className="bg-neutral-900">Luxury Rental ($20k–$50k/mo)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Contact Method & Date */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-neutral-300 block mb-1">Preferred Communication</label>
                    <select
                      value={formData.preferredContact}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredContact: e.target.value as any })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400 transition-all cursor-pointer"
                    >
                      <option value="Phone" className="bg-neutral-900">Discreet Phone Call</option>
                      <option value="Email" className="bg-neutral-900">Confidential Email</option>
                      <option value="WhatsApp" className="bg-neutral-900">Encrypted WhatsApp</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-neutral-300 block mb-1">Target Consultation Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs text-neutral-300 block mb-1">
                    Specific Requirements or Preferred Addresses
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your target architectural style, privacy needs, or property you wish to tour or list..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-rose-400 transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-rose-800 hover:from-rose-500 hover:to-rose-700 text-white font-semibold text-sm shadow-xl shadow-rose-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Routing to Senior Advisor...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Confidential Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
