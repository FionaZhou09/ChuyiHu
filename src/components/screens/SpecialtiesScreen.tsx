"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookIntroModal } from "./BookIntroModal";

const specialties = [
  {
    en: "Anxiety & High Sensitivity",
    focus: "Emotional overload and sensitivity",
    tag: "CBT / DBT",
    body: "Therapy focused on quietening a constantly hyper-vigilant nervous system. Together, we demystify triggers with somatic awareness and realistic boundary configuration.",
  },
  {
    en: "Depression & Chronic Fatigue",
    focus: "Low motivation and emotional depletion",
    tag: "ACT",
    body: "Exploring places where motivation has stalled. Our objective is mapping actionable and step-by-step reconnective goals aligned entirely to what still holds value to you.",
  },
  {
    en: "Bicultural Transitions & Identity",
    focus: "Cultural adjustment and family boundaries",
    tag: "Systemic",
    body: "Supporting Asian and first/second-generation immigrants navigating high duty structures, silent emotional isolation, and conflicting community ideals.",
  },
  {
    en: "Trauma Recovery & PTSD",
    focus: "Trauma integration and nervous system safety",
    tag: "Psychodynamic",
    body: "Moving beyond cognitive understanding. Supporting your mind and physiology to physically safely catalog former events as historical, rather than active present-day threats.",
  },
  {
    en: "Life Transitions",
    focus: "Career, relationship, and relocation changes",
    tag: "Integrative",
    body: "Navigating career pivots, relationship changes, or cultural relocations with intentional support — building clarity and confidence at each crossroads.",
  },
  {
    en: "Grief & Loss",
    focus: "Loss, identity shifts, and imagined futures",
    tag: "Attachment",
    body: "Holding space for the full spectrum of grief — whether from loss of a person, relationship, identity, or life chapter you imagined.",
  },
];

const modalities = [
  "Cognitive Behavioral (CBT)",
  "Dialectical (DBT Skills)",
  "Acceptance & Commitment (ACT)",
  "Person-Centered",
  "Trauma-Focused",
  "Mindfulness-Based",
  "Psychodynamic",
  "Exposure Response (ERP)",
];

export function SpecialtiesScreen() {
  const [modalOpen, setModalOpen] = useState(false);

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
          <h2 className="font-serif text-3xl text-[var(--app-text)]">Specialized Support</h2>
          <p className="text-xs text-[var(--app-text-secondary)]">
            Every clinical path is refined to accommodate personal complexity.
          </p>
        </motion.div>

        {/* Specialty Cards */}
        <div className="space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--app-text-muted)]">
            Core Expertise
          </h3>
          <div className="space-y-2.5">
            {specialties.map((s, i) => (
              <motion.div
                key={s.en}
                className="p-4 rounded-xl border border-[var(--app-border)] bg-white space-y-2 hover:border-[var(--app-secondary)] transition-all"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.07, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -1 }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold text-[var(--app-text)] block">{s.en}</span>
                    <span className="text-[10px] text-[var(--app-text-secondary)]">{s.focus}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[rgba(156,180,138,0.12)] text-[9px] font-semibold text-[var(--app-text-secondary)] tracking-wide flex-shrink-0">
                    {s.tag}
                  </span>
                </div>
                <p className="text-[11px] text-[var(--app-text-muted)] leading-relaxed font-light">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modalities */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--app-text-muted)]">
            Therapeutic Modalities
          </h3>
          <div className="p-5 rounded-xl border border-[var(--app-border)] bg-[rgba(156,180,138,0.03)] space-y-3">
            <p className="text-xs text-[var(--app-text)] leading-relaxed font-light">
              My primary toolkit integrates evidence-based approaches. Instead of forcing your
              concerns to fit a specific framework, I blend these methods to fit your lifestyle:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {modalities.map((m) => (
                <span
                  key={m}
                  className="px-2.5 py-1 rounded-full border border-[var(--app-border)] bg-white text-[10px] font-medium text-[var(--app-text-secondary)]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile CTA */}
      <div className="fixed bottom-14 left-4 right-4 z-40 md:hidden">
        <motion.button
          onClick={() => setModalOpen(true)}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[var(--app-primary)] rounded-2xl text-white font-medium text-xs shadow-md"
          whileTap={{ scale: 0.97 }}
        >
          <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          Consultation Inquiry
        </motion.button>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:block px-5 pb-6 pt-2">
        <motion.button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 py-3 px-5 bg-[var(--app-primary)] rounded-xl text-white font-medium text-xs shadow-sm hover:opacity-90 transition-opacity"
          whileTap={{ scale: 0.97 }}
        >
          <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          Consultation Inquiry
        </motion.button>
      </div>

      <AnimatePresence>
        {modalOpen && <BookIntroModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
