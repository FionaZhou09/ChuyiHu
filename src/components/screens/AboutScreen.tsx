"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { BookIntroModal } from "./BookIntroModal";
import { TherapistPhoto } from "./therapist-photo";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  }),
} as Variants;

const timelineItems = [
  {
    tag: "LICENSE & ACCREDITATIONS",
    title: "LMHC (NY) & LPC (NJ)",
    body: "Clinical practicing status authorized to serve residents across New York and New Jersey via compliant Telehealth platforms.",
  },
  {
    tag: "SPECIALTY RECOGNITION",
    title: "Certified Clinical Supervisor (NBCC)",
    body: "National board-certified standard reflecting direct commitment in advanced clinical direction and peer professional guidance.",
  },
  {
    tag: "EDUCATION BACKGROUND",
    title: "Master of Arts (M.A.) in Counseling",
    body: "Completed extensive research and supervised practicum emphasizing culturally responsive mental health interventions.",
  },
];

export function AboutScreen() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="w-full px-5 pt-6 pb-36 space-y-7">
        {/* Header */}
        <motion.div
          className="space-y-1"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h2 custom={0} variants={fadeUp} className="font-serif text-3xl text-[var(--app-text)]">
            About Chuyi Hu
          </motion.h2>
          <motion.p custom={1} variants={fadeUp} className="text-xs text-[var(--app-text-secondary)] italic">
            Your partner in navigating transitions and building choice.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 rounded-2xl border border-[var(--app-border)] bg-white p-4 shadow-sm"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <TherapistPhoto className="h-28 w-28 flex-shrink-0" priority sizes="112px" />
          <div className="space-y-1.5">
            <p className="font-serif text-2xl leading-tight text-[var(--app-text)]">
              Chuyi Hu
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--app-text-secondary)]">
              Licensed in NY &amp; NJ
            </p>
            <p className="text-[11px] font-light leading-relaxed text-[var(--app-text-muted)]">
              English, Mandarin, and Cantonese therapy with a culturally responsive lens.
            </p>
          </div>
        </motion.div>

        {/* Story Box */}
        <motion.div
          className="p-5 rounded-2xl border border-[var(--app-border)] bg-white space-y-4 shadow-sm text-xs text-[var(--app-text)] font-light leading-relaxed"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <p>
            Hello and welcome. I am{" "}
            <strong className="font-medium text-[var(--app-text)]">Chuyi Hu</strong>, a Licensed
            Mental Health Counselor (LPC, LMHC) with{" "}
            <strong className="font-medium text-[var(--app-primary)]">
              8 years of clinical experience
            </strong>{" "}
            supporting adults through life transitions, anxiety, trauma, and the old patterns that
            can make it difficult to move forward.
          </p>
          <p className="border-l-2 border-[var(--app-secondary)] pl-3 italic text-[var(--app-text-secondary)] font-normal text-[11px] leading-relaxed">
            Are you going through life transitions and feeling stuck in old patterns? You may
            struggle to see how your past experiences are shaping the way you think, feel, and make
            choices now.
          </p>
          <p>
            I bring warmth, openness, and genuine curiosity into the therapy space so you can feel
            truly seen and heard. My goal is for you to feel empowered, recognize that you do have
            choices, and begin moving forward with more clarity and confidence.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--app-text-muted)]">
            Verified Background
          </h3>
          <div className="space-y-4 relative pl-4 border-l border-[var(--app-border)] ml-1.5">
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.tag}
                className="relative space-y-1"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="absolute -left-[20.5px] top-1.5 w-2 h-2 rounded-full bg-[var(--app-secondary)]" />
                <span className="text-[10px] font-bold text-[var(--app-text-secondary)] tracking-wider">
                  {item.tag}
                </span>
                <p className="text-xs text-[var(--app-text)] font-semibold">{item.title}</p>
                <p className="text-[10px] text-[var(--app-text-muted)]">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Banner */}
        <motion.div
          className="p-5 rounded-2xl bg-[var(--app-text)] text-[var(--app-surface)] space-y-3 shadow-md"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h4 className="font-serif text-2xl text-[var(--app-secondary)]">
            Philosophy
          </h4>
          <p className="text-xs text-[rgba(253,251,247,0.85)] font-light leading-relaxed">
            My integrative approach combines person-centered care with CBT, DBT, exposure therapy,
            trauma-informed practices, and psychodynamic insight, tailored to your unique story.
          </p>
          <div className="pt-2 border-t border-[rgba(253,251,247,0.1)] flex justify-between items-center text-[10px] text-[var(--app-secondary)]">
            <span>Empowerment Over Diagnosis</span>
            <span>Choices • Clarity • Confidence</span>
          </div>
        </motion.div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-14 left-4 right-4 z-40 md:hidden">
        <motion.button
          onClick={() => setModalOpen(true)}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[var(--app-primary)] rounded-2xl text-white font-medium text-xs shadow-md"
          whileTap={{ scale: 0.97 }}
        >
          <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          Request Free 15-Min Consultation
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
          Request Free 15-Min Consultation
        </motion.button>
      </div>

      <AnimatePresence>
        {modalOpen && <BookIntroModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
