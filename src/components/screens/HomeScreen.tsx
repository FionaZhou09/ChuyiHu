"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { BookIntroModal } from "./BookIntroModal";
import { TherapistPhoto } from "./therapist-photo";
import { PlantFeature } from "./plant-feature";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  }),
} as Variants;

export function HomeScreen() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="w-full px-5 pt-6 pb-36 space-y-7">
        {/* Hero */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h1
            custom={0}
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl text-[var(--app-text)] leading-[1.12]"
          >
            You are safe here.
            <span className="text-[var(--app-text-secondary)] font-normal font-serif italic text-2xl tracking-normal block mt-1">
              Slow down, feel seen, and move forward.
            </span>
          </motion.h1>
          <motion.p
            custom={1}
            variants={fadeUp}
            className="text-xs text-[var(--app-text-muted)] leading-relaxed font-light"
          >
            A private, virtual multilingual space for life transitions, old patterns, and the
            quiet work of moving forward with clarity.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
          <PlantFeature
            priority
            caption="A quiet visual pause before the work of change begins."
          />
        </motion.div>

        <motion.div
          className="flex items-center gap-4 rounded-2xl border border-[var(--app-border)] bg-white/70 p-4 shadow-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <TherapistPhoto className="h-24 w-24 flex-shrink-0" priority sizes="96px" />
          <div className="space-y-1">
            <p className="font-serif text-2xl leading-tight text-[var(--app-text)]">
              Chuyi Hu
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--app-text-secondary)]">
              MA, LMHC, LPC
            </p>
            <p className="text-[11px] font-light leading-relaxed text-[var(--app-text-muted)]">
              Licensed counseling for adults in New York and New Jersey.
            </p>
          </div>
        </motion.div>

        {/* Organic Emblem */}
        <motion.div
          className="relative py-4 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="soft-blob-bg animate-blob w-48 h-48"
              style={{ background: "rgba(211,110,82,0.06)", filter: "blur(12px)" }}
            />
            <div
              className="soft-blob-bg w-36 h-36"
              style={{ background: "rgba(156,180,138,0.1)", filter: "blur(8px)", animationDelay: "3s" }}
            />
          </div>
          <div className="relative z-10 text-center py-6 px-4 border border-[var(--app-border)] bg-[rgba(253,251,247,0.7)] text-[var(--app-text)] font-serif italic text-lg rounded-2xl max-w-[240px] shadow-sm backdrop-blur-sm">
            <span className="block text-2xl text-[var(--app-primary)] mb-1 not-italic">&quot;</span>
            Finding your own choices and clarity.
            <span className="block text-xs mt-2 not-italic font-sans tracking-wide text-[var(--app-text-secondary)]">
              Chuyi Hu • MA, LMHC, LPC
            </span>
          </div>
        </motion.div>

        {/* Action Cards */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--app-text-muted)]">
            Take the First Step
          </h3>
          <div className="grid grid-cols-1 gap-2.5">
            {/* Book Button */}
            <motion.button
              onClick={() => setModalOpen(true)}
              className="flex items-center justify-between p-4 rounded-xl border border-[var(--app-primary)] bg-[rgba(211,110,82,0.03)] hover:bg-[rgba(211,110,82,0.06)] transition-all w-full text-left"
              whileTap={{ scale: 0.98 }}
              whileHover={{ backgroundColor: "rgba(211,110,82,0.06)" }}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--app-primary)] flex items-center justify-center text-white flex-shrink-0">
                  <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-[var(--app-text)]">Request 15-Minute Free Consultation</p>
                  <p className="text-[10px] text-[var(--app-text-secondary)]">English, Mandarin, and Cantonese</p>
                </div>
              </div>
              <svg className="stroke-[var(--app-primary)] flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><line x1="5" x2="19" y1="12" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </motion.button>

            {/* About Button */}
            <Link href="/about">
              <motion.div
                className="flex items-center justify-between p-4 rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] hover:bg-[rgba(36,26,20,0.02)] transition-all cursor-pointer"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[rgba(36,26,20,0.05)] flex items-center justify-center text-[var(--app-text)] flex-shrink-0">
                    <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="16" y2="12" /><line x1="12" x2="12.01" y1="8" y2="8" /></svg>
                  </span>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-[var(--app-text)]">Meet Chuyi Hu</p>
                    <p className="text-[10px] text-[var(--app-text-muted)]">Read story, therapeutic philosophy &amp; licenses</p>
                  </div>
                </div>
                <svg className="stroke-[var(--app-text-muted)] flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><line x1="5" x2="19" y1="12" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Credentials */}
        <motion.div
          className="p-4 rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] space-y-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex items-center gap-2">
            <svg fill="none" height="14" stroke="var(--app-secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <span className="text-xs font-semibold tracking-wide uppercase text-[var(--app-text-secondary)]">
              Practice Verification
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px] text-[var(--app-text)]">
            {[
              "NJ Licensed (LPC #37PC01174800)",
              "NY Licensed (LMHC #D010404-01)",
              "Certified Clinical Supervisor",
              "Fully Virtual Practice",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--app-secondary)] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Specialties Teaser */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--app-text-muted)]">
              Primary Specialties
            </h3>
            <Link href="/specialties" className="text-[10px] font-medium text-[var(--app-primary)] uppercase tracking-wider flex items-center gap-1 hover:opacity-80 transition-opacity">
              Explore All
              <svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="10"><line x1="5" x2="19" y1="12" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { en: "Anxiety Relief", focus: "Emotional regulation" },
              { en: "Depression Support", focus: "Reconnection and motivation" },
              { en: "Life Transitions", focus: "Clarity during change" },
              { en: "Trauma & PTSD", focus: "Safety and integration" },
            ].map((spec) => (
              <motion.div
                key={spec.en}
                className="p-3.5 rounded-xl border border-[var(--app-border)] bg-[rgba(156,180,138,0.04)] text-left"
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-xs font-semibold text-[var(--app-text)] block">{spec.en}</span>
                <span className="text-[10px] text-[var(--app-text-secondary)] mt-0.5 block">{spec.focus}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Action Bar (Mobile) */}
      <div className="fixed bottom-14 left-4 right-4 z-40 md:hidden">
        <div className="bg-[var(--app-text)] text-[var(--app-surface)] rounded-2xl p-2.5 flex items-center justify-between shadow-lg">
          <a
            href="tel:8649860671"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-2 bg-[var(--app-primary)] rounded-xl font-medium text-xs text-white active:scale-95 transition-transform"
          >
            <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Call (864) 986-0671
          </a>
          <div className="w-px h-8 bg-white/10 mx-2" />
          <button
            onClick={() => setModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-medium text-xs text-white active:bg-white/10 transition-colors"
          >
            <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            Email Request
          </button>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && <BookIntroModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
