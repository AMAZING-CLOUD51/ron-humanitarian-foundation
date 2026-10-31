import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  HeartHandshake,
  ShieldCheck,
  Search,
  ArrowRight,
  MapPin,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import {
  FOUNDATION_INFO,
  FOCUS_AREAS,
  COMMUNITIES,
  FAQ_ITEMS,
} from '../data/foundationData.ts';
import { FocusArea, GalleryPhoto } from '../types.ts';

// 1. DONATE MODAL
export const DonateModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedAcct, setCopiedAcct] = useState(false);
  const [amount, setAmount] = useState('10000');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, type: 'bank' | 'acct') => {
    navigator.clipboard.writeText(text);
    if (type === 'bank') {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    } else {
      setCopiedAcct(true);
      setTimeout(() => setCopiedAcct(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0B2A8A] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FDB913]/20 flex items-center justify-center text-[#FDB913]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-white">
                Support RON Humanitarian Foundation
              </h3>
              <p className="text-xs text-blue-100 font-body">
                Official Registered NGO: {FOUNDATION_INFO.rcNumber}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          {/* Nigerian Direct Bank Transfer Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Official Foundation Account (Nigeria)
              </span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                Verified NGO Account
              </span>
            </div>

            <div className="space-y-3 font-body">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <span className="text-xs text-gray-500">Account Name:</span>
                <span className="text-sm font-bold text-[#0D1722] text-right">
                  RON Humanitarian Foundation
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <span className="text-xs text-gray-500">Bank Name:</span>
                <span className="text-sm font-bold text-[#0D1722]">
                  Zenith Bank Plc
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Account Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-base text-[#0B2A8A] tabular-nums">
                    1310384938
                  </span>
                  <button
                    onClick={() => copyToClipboard('1310384938', 'acct')}
                    className="p-1 text-gray-500 hover:text-[#0B2A8A] cursor-pointer"
                    title="Copy Account Number"
                  >
                    {copiedAcct ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Confirmation Link */}
          <div className="flex items-center justify-between p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900">
            <span>Made a donation? Notify our finance desk on WhatsApp:</span>
            <a
              href={`https://wa.me/${FOUNDATION_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Hello RON Foundation, I have completed a donation transfer in support of your community work.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-800 hover:underline flex items-center gap-1 shrink-0 ml-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Receipt</span>
            </a>
          </div>

          {/* Pledge / Notification Form */}
          {isSubmitted ? (
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
              <ShieldCheck className="w-10 h-10 text-[#0B2A8A] mx-auto mb-2" />
              <h4 className="font-heading font-bold text-lg text-[#0D1722] mb-1">
                Thank You for Your Generosity!
              </h4>
              <p className="text-sm text-gray-600 font-body mb-4">
                Your donation pledge has been logged. Our leadership team in Abuja will acknowledge your support.
              </p>
              <button
                onClick={onClose}
                className="rounded-full bg-[#FDB913] text-[#0D1722] font-bold px-6 py-2 text-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                Log a Donor Pledge (Optional)
              </span>

              {/* Amount Quick Select */}
              <div className="grid grid-cols-4 gap-2">
                {['5000', '10000', '25000', '50000'].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmount(val);
                      setCustomAmount('');
                    }}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                      amount === val && !customAmount
                        ? 'border-[#0B2A8A] bg-[#0B2A8A] text-white'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    ₦{parseInt(val).toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="e.g. Grace Olatunde"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#0B2A8A]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="grace@example.com"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#0B2A8A]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#FDB913] hover:bg-[#e6a50e] text-[#0D1722] font-extrabold py-3 text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <span>Record Donor Pledge</span>
                <ArrowRight className="w-4 h-4 text-[#0D1722]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// 2. PARTNER WITH US MODAL
export const PartnerModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [orgType, setOrgType] = useState('Corporate');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col text-left">
        <div className="bg-[#0B2A8A] text-white p-6 flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-xl text-white">
              Partner With Us
            </h3>
            <p className="text-xs text-blue-100 font-body">
              Expanding humanitarian impact together
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6">
              <ShieldCheck className="w-12 h-12 text-[#0B2A8A] mx-auto mb-3" />
              <h4 className="font-heading font-bold text-xl text-[#0D1722] mb-2">
                Partnership Inquiry Received
              </h4>
              <p className="text-sm text-gray-600 font-body mb-6">
                Thank you for your interest in collaborating with RON Humanitarian Foundation. Our executive team will review your proposal and get in touch within 24 to 48 hours.
              </p>
              <button
                onClick={onClose}
                className="rounded-full bg-[#FDB913] text-[#0D1722] font-bold px-8 py-2.5 text-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 font-body"
            >
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  Organization / Entity Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Global Foundation or Individual"
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#0B2A8A]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  Organization Category
                </label>
                <select
                  value={orgType}
                  onChange={(e) => setOrgType(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#0B2A8A] bg-white"
                >
                  <option value="Corporate">Corporate / CSR Initiative</option>
                  <option value="Government">Government / Public Agency</option>
                  <option value="Development">International Development Partner</option>
                  <option value="Philanthropy">Private Philanthropist / Family Office</option>
                  <option value="Community">Community-Based Organisation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#0B2A8A]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 ..."
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#0B2A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@organization.org"
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#0B2A8A]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  Proposed Partnership Scope
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Briefly describe how you would like to collaborate (e.g. medical outreach funding, education equipment, livelihood kits)..."
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#0B2A8A]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#FDB913] hover:bg-[#e6a50e] text-[#0D1722] font-extrabold py-3 text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <span>Submit Partnership Proposal</span>
                <ArrowRight className="w-4 h-4 text-[#0D1722]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. VOLUNTEER MODAL
export const VolunteerModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col text-left">
        <div className="bg-[#1F3A8A] text-white p-6 flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-xl text-white">
              Join Our Volunteer Corps
            </h3>
            <p className="text-xs text-blue-100 font-body">
              Serve on community missions across Nigeria
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6">
              <ShieldCheck className="w-12 h-12 text-[#1F3A8A] mx-auto mb-3" />
              <h4 className="font-heading font-bold text-xl text-[#0D1722] mb-2">
                Application Received!
              </h4>
              <p className="text-sm text-gray-600 font-body mb-6">
                Thank you for stepping up to serve. Our volunteer coordinator will reach out to you before our next field deployment.
              </p>
              <button
                onClick={onClose}
                className="rounded-full bg-[#FDB913] text-[#0D1722] font-bold px-8 py-2.5 text-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 font-body"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#1F3A8A]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 ..."
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#1F3A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#1F3A8A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Preferred Location
                  </label>
                  <select className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#1F3A8A] bg-white">
                    <option value="Abuja">Abuja (FCT)</option>
                    <option value="Plateau">Plateau State (Jos/Bokkos/Barkin Ladi)</option>
                    <option value="Imo">Imo State (Mbaise)</option>
                    <option value="Remote">Remote / Digital Support</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Primary Skill Area
                  </label>
                  <select className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#1F3A8A] bg-white">
                    <option value="Medical">Medical / Healthcare</option>
                    <option value="Education">Teaching / Youth Mentorship</option>
                    <option value="Logistics">Field Logistics & Distribution</option>
                    <option value="Media">Media, Photo & Storytelling</option>
                    <option value="General">General Community Volunteer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  Why do you wish to volunteer with RON Foundation?
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Tell us a little about your motivation and availability..."
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-[#1F3A8A]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#FDB913] hover:bg-[#e6a50e] text-[#0D1722] font-extrabold py-3 text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <span>Submit Volunteer Application</span>
                <ArrowRight className="w-4 h-4 text-[#0D1722]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// 4. SEARCH MODAL
export const SearchModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredPrograms = FOCUS_AREAS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCommunities = COMMUNITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.state.toLowerCase().includes(query.toLowerCase())
  );

  const filteredFaqs = FAQ_ITEMS.filter(
    (f) =>
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col text-left">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, communities reached, FAQ..."
            className="w-full text-base font-body outline-none text-[#0D1722]"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4 font-body text-sm">
          {query.trim() === '' ? (
            <div className="py-6 text-center text-gray-500">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Popular Searches
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Mbaise', 'Wassa Abuja', 'Medical Equipment', 'Livelihoods', 'Bokkos', 'How to Partner'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1 bg-gray-100 hover:bg-blue-50 hover:text-[#0B2A8A] rounded-full text-xs font-medium"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : (
            <>
              {/* Program matches */}
              {filteredPrograms.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Focus Areas & Programs
                  </span>
                  <div className="space-y-1.5">
                    {filteredPrograms.map((p) => (
                      <a
                        key={p.id}
                        href="#what-we-do"
                        onClick={onClose}
                        className="p-2.5 rounded-lg hover:bg-blue-50 block text-[#0D1722] hover:text-[#0B2A8A]"
                      >
                        <div className="font-bold text-sm">{p.title}</div>
                        <div className="text-xs text-gray-500">{p.description}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Communities matches */}
              {filteredCommunities.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Communities We Have Reached
                  </span>
                  <div className="space-y-1.5">
                    {filteredCommunities.map((c) => (
                      <a
                        key={c.id}
                        href="#communities"
                        onClick={onClose}
                        className="p-2.5 rounded-lg hover:bg-blue-50 flex items-center justify-between text-[#0D1722]"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#0B2A8A]" />
                          <span className="font-bold text-sm">{c.name}</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-[#0B2A8A]">
                          {c.reached} people
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ matches */}
              {filteredFaqs.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Frequently Asked Questions
                  </span>
                  <div className="space-y-1.5">
                    {filteredFaqs.map((f) => (
                      <a
                        key={f.id}
                        href="#faq"
                        onClick={onClose}
                        className="p-2.5 rounded-lg hover:bg-blue-50 block text-[#0D1722]"
                      >
                        <div className="font-bold text-sm">{f.question}</div>
                        <div className="text-xs text-gray-500 line-clamp-1">{f.answer}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {filteredPrograms.length === 0 &&
                filteredCommunities.length === 0 &&
                filteredFaqs.length === 0 && (
                  <p className="py-8 text-center text-gray-500">
                    No results found for "{query}".
                  </p>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// 5. LIGHTBOX MODAL
export const LightboxModal: React.FC<{
  photo: GalleryPhoto | null;
  onClose: () => void;
}> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#0D1722] rounded-2xl overflow-hidden shadow-2xl border border-white/20 text-left"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#FDB913] hover:text-[#0D1722] flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={photo.url}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 bg-[#0D1722] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FDB913] block mb-1">
              {photo.category} · {photo.location}
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {photo.title}
            </h3>
          </div>
          <div className="shrink-0">
            <span className="text-xs text-gray-400">
              RON Humanitarian Foundation Field Documentation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. PROGRAM DETAIL MODAL
export const ProgramModal: React.FC<{
  program: FocusArea | null;
  onClose: () => void;
  onOpenDonate: () => void;
}> = ({ program, onClose, onOpenDonate }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col text-left">
        <div className="bg-[#0B2A8A] text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#FDB913] font-bold">
              Core Focus Pillar
            </span>
            <h3 className="font-heading font-bold text-xl text-white mt-0.5">
              {program.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 font-body">
          <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0B2A8A] mb-1">
              Intervention Scope
            </p>
            <p className="text-sm font-semibold text-[#0D1722]">
              {program.description}
            </p>
          </div>

          <p className="text-[#333333] text-[15px] leading-relaxed">
            {program.subtext}
          </p>

          <p className="text-[#333333] text-[15px] leading-relaxed">
            Our teams work directly on the ground across Abuja, Plateau, and Imo State, ensuring that every package, diagnostic test, or learning material reaches those in immediate need with dignity and respect.
          </p>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenDonate();
              }}
              className="rounded-full bg-[#FDB913] hover:bg-[#e6a50e] text-[#0D1722] font-extrabold px-6 py-2.5 text-sm inline-flex items-center gap-2"
            >
              <span>Support This Pillar</span>
              <ArrowRight className="w-4 h-4 text-[#0D1722]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. PLACEHOLDER PAGE MODAL
export const PagePlaceholderModal: React.FC<{
  pageName: string | null;
  onClose: () => void;
}> = ({ pageName, onClose }) => {
  if (!pageName) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 text-left">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
          <h3 className="font-heading font-bold text-xl text-[#0D1722]">
            {pageName}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-gray-400 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-gray-600 font-body leading-relaxed mb-6">
          You are currently previewing the <strong>Home Page</strong> of RON Humanitarian Foundation. The dedicated "{pageName}" page will be populated in subsequent passes with expanded archives, stories, and multimedia documentation.
        </p>

        <button
          onClick={onClose}
          className="w-full rounded-full bg-[#FDB913] text-[#0D1722] font-extrabold py-3 text-sm text-center"
        >
          Continue Exploring Home Page
        </button>
      </div>
    </div>
  );
};
