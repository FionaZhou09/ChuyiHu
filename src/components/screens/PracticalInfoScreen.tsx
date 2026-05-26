"use client";

import { motion } from "framer-motion";
import { PlantFeature } from "./plant-feature";

const insurers = [
  "Aetna",
  "Cigna / Evernorth",
  "BlueCross BlueShield",
  "UnitedHealthcare (UHC)",
  "Humana",
  "Optum",
  "Oxford",
  "Anthem",
  "Horizon BCBS",
  "Carelon Behavioral Health",
];

const paymentMethods = [
  "Visa / Mastercard",
  "American Express",
  "Discover",
  "PayPal",
  "Venmo",
  "Zelle",
  "Apple Cash",
  "Cash",
];

const bookingLinks = [
  {
    name: "Alma",
    label: "Preferred booking platform",
    href: "https://secure.helloalma.com/providers/chuyi-hu/",
    primary: true,
  },
  {
    name: "Headway",
    label: "Alternative booking platform",
    href: "https://care.headway.co/providers/chuyi-hu",
    primary: false,
  },
  {
    name: "Psychology Today",
    label: "Professional profile",
    href: "https://www.psychologytoday.com/us/therapists/chuyi-hu-carteret-nj/1585353",
    primary: false,
  },
];

export function PracticalInfoScreen() {
  return (
    <>
      <div className="w-full px-5 pt-6 pb-36 space-y-7">
        {/* Header */}
        <motion.div
          className="space-y-1"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="font-serif text-3xl text-[var(--app-text)]">Booking &amp; Practice Info</h2>
          <p className="text-xs text-[var(--app-text-secondary)]">
            Choose a booking platform, verify coverage, or reach out directly.
          </p>
        </motion.div>

        {/* Booking platforms */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--app-text-muted)]">
            Online Booking
          </h3>
          <div className="p-4 rounded-xl border border-[var(--app-border)] bg-white space-y-3">
            <p className="text-[11px] text-[var(--app-text-muted)] font-light leading-relaxed">
              For the smoothest scheduling experience, please start with Alma. Headway is also
              available if that platform fits your insurance or account setup better.
            </p>
            <div className="grid gap-2">
              {bookingLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-between rounded-xl border p-3 transition-all ${
                    link.primary
                      ? "border-[var(--app-primary)] bg-[rgba(211,110,82,0.06)] text-[var(--app-text)]"
                      : "border-[var(--app-border)] bg-[rgba(36,26,20,0.02)] text-[var(--app-text)]"
                  }`}
                >
                  <span>
                    <span className="block text-xs font-semibold">{link.name}</span>
                    <span className="block text-[10px] text-[var(--app-text-muted)]">
                      {link.label}
                    </span>
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--app-primary)]">
                    Open
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Insurance */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--app-text-muted)]">
            Insurance Panels
          </h3>
          <div className="p-4 rounded-xl border border-[var(--app-border)] bg-[rgba(156,180,138,0.03)] space-y-3">
            <p className="text-[11px] text-[var(--app-text-muted)] font-light leading-relaxed">
              I am in-network with the following healthcare providers in NJ and NY. Alma or Headway
              can help verify current coverage before your first session.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {insurers.map((ins) => (
                <span
                  key={ins}
                  className="px-2.5 py-1 bg-white border border-[var(--app-border)] rounded text-[10px] font-medium text-[var(--app-text)] whitespace-nowrap"
                >
                  {ins}
                </span>
              ))}
            </div>
            <div className="pt-2.5 border-t border-[var(--app-border)] text-[9px] text-[var(--app-text-muted)] leading-relaxed italic">
              * Out-of-Network: Superbill statements can be natively compiled for self-reimbursement
              claims upon request if preferred.
            </div>
          </div>
        </motion.div>

        {/* Payment methods */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--app-text-muted)]">
            Payment Methods
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {paymentMethods.map((m) => (
              <span
                key={m}
                className="px-2.5 py-1 bg-white border border-[var(--app-border)] rounded text-[10px] font-medium text-[var(--app-text)]"
              >
                {m}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Online format */}
        <motion.div
          className="p-4 rounded-xl border border-[var(--app-border)] bg-white space-y-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--app-text-secondary)] block">
            Online Format Details
          </span>
          <div className="space-y-2 text-[11px] font-light leading-relaxed text-[var(--app-text)]">
            <div className="flex items-start gap-2">
              <svg className="mt-0.5 flex-shrink-0" fill="none" height="12" stroke="var(--app-secondary)" strokeWidth="2.5" viewBox="0 0 24 24" width="12"><rect height="14" rx="2" ry="2" width="20" x="2" y="3" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
              <div>
                <strong>Secure Video Platform</strong>
                <p className="text-[10px] text-[var(--app-text-muted)]">
                  Using compliant, encrypted HIPAA-Standard video platforms. No download required.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 pt-1 border-t border-[var(--app-border)]">
              <svg className="mt-0.5 flex-shrink-0" fill="none" height="12" stroke="var(--app-secondary)" strokeWidth="2.5" viewBox="0 0 24 24" width="12"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <div>
                <strong>No Surprises Act Compliant</strong>
                <p className="text-[10px] text-[var(--app-text-muted)]">
                  Good Faith Estimates are provided immediately for all non-insured/private pay
                  patients.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 pt-1 border-t border-[var(--app-border)]">
              <svg className="mt-0.5 flex-shrink-0" fill="none" height="12" stroke="var(--app-secondary)" strokeWidth="2.5" viewBox="0 0 24 24" width="12"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              <div>
                <strong>8 Years in Practice</strong>
                <p className="text-[10px] text-[var(--app-text-muted)]">
                  8 years direct clinical experience. Licensed and verified in both NJ and NY states.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          className="p-4 rounded-xl border border-[var(--app-border)] bg-[rgba(211,110,82,0.03)] space-y-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--app-text-secondary)] block">
            Languages
          </span>
          <div className="flex flex-wrap gap-2">
            {["English", "Mandarin", "Cantonese"].map((lang) => (
              <span
                key={lang}
                className="px-3 py-1.5 rounded-full bg-[var(--app-primary)] text-white text-[10px] font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-[var(--app-text-muted)] font-light pt-1">
            Sessions are conducted in English, Mandarin, or Cantonese — whichever feels most natural
            for your expression.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <PlantFeature
            className="max-h-[420px]"
            caption="A simple next step can still feel spacious."
          />
        </motion.div>
      </div>

      {/* Mobile CTA */}
      <div className="fixed bottom-14 left-4 right-4 z-40 md:hidden">
        <motion.a
          href="https://secure.helloalma.com/providers/chuyi-hu/"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[var(--app-primary)] rounded-2xl text-white font-medium text-xs shadow-md"
          whileTap={{ scale: 0.97 }}
        >
          <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          Book Through Alma
        </motion.a>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:block px-5 pb-6 pt-2">
        <motion.a
          href="https://secure.helloalma.com/providers/chuyi-hu/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 py-3 px-5 bg-[var(--app-primary)] rounded-xl text-white font-medium text-xs shadow-sm hover:opacity-90 transition-opacity"
          whileTap={{ scale: 0.97 }}
        >
          <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          Book Through Alma
        </motion.a>
      </div>
    </>
  );
}
