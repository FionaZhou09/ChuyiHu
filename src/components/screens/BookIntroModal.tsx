"use client";

import { motion } from "framer-motion";

interface BookIntroModalProps {
  onClose: () => void;
}

export function BookIntroModal({ onClose }: BookIntroModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Sheet */}
      <motion.div
        className="relative bg-[var(--app-surface)] w-full max-w-lg rounded-t-[2rem] p-6 max-h-[85svh] overflow-y-auto space-y-6 shadow-2xl border-t border-[var(--app-border)]"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 80) onClose();
        }}
        dragElastic={{ top: 0, bottom: 0.4 }}
      >
        {/* Drag indicator */}
        <div className="w-10 h-1 bg-[var(--app-border)] rounded-full mx-auto" />

        {/* Header */}
        <div className="space-y-1 text-center">
          <h3 className="font-serif text-2xl text-[var(--app-text)]">
            Start 15-Min Free Call
          </h3>
          <p className="text-xs text-[var(--app-text-secondary)]">
            Let&apos;s coordinate an introductory chat to see if we&apos;re a good fit.
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {/* Alma */}
          <motion.a
            href="https://secure.helloalma.com/providers/chuyi-hu/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center p-4 rounded-xl border border-[var(--app-primary)] bg-[rgba(211,110,82,0.06)] justify-between"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[var(--app-primary)] text-white flex items-center justify-center flex-shrink-0">
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><rect height="18" rx="2" width="18" x="3" y="4" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></svg>
              </span>
              <div className="text-left">
                <h4 className="text-xs font-semibold text-[var(--app-text)]">Book Through Alma</h4>
                <p className="text-[10px] text-[var(--app-text-muted)]">Preferred platform for scheduling and insurance</p>
              </div>
            </div>
            <span className="text-[10px] text-[var(--app-primary)] font-semibold underline flex-shrink-0 ml-2">Open</span>
          </motion.a>

          {/* Headway */}
          <motion.a
            href="https://care.headway.co/providers/chuyi-hu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center p-4 rounded-xl border border-[var(--app-border)] bg-white justify-between"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[rgba(36,26,20,0.05)] text-[var(--app-text)] flex items-center justify-center flex-shrink-0">
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" /><path d="M3 6h.01" /><path d="M3 12h.01" /><path d="M3 18h.01" /></svg>
              </span>
              <div className="text-left">
                <h4 className="text-xs font-semibold text-[var(--app-text)]">Book Through Headway</h4>
                <p className="text-[10px] text-[var(--app-text-muted)]">Alternative platform if preferred</p>
              </div>
            </div>
            <span className="text-[10px] text-[var(--app-text-secondary)] font-medium underline flex-shrink-0 ml-2">Open</span>
          </motion.a>

          {/* Call */}
          <motion.a
            href="tel:8649860671"
            className="flex items-center p-4 rounded-xl border border-[var(--app-secondary)] bg-[rgba(156,180,138,0.04)] justify-between"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[var(--app-secondary)] text-white flex items-center justify-center flex-shrink-0">
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </span>
              <div className="text-left">
                <h4 className="text-xs font-semibold text-[var(--app-text)]">Connect Directly on Phone</h4>
                <p className="text-[10px] text-[var(--app-text-muted)]">Call Chuyi Hu at (864) 986-0671</p>
              </div>
            </div>
            <span className="text-[10px] text-[var(--app-text-secondary)] font-medium underline flex-shrink-0 ml-2">Dial Call</span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:hcycounseling@gmail.com?subject=Inquiry%20-%20Free%20Consultation%20Request"
            className="flex items-center p-4 rounded-xl border border-[var(--app-border)] bg-white justify-between"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[rgba(36,26,20,0.05)] text-[var(--app-text)] flex items-center justify-center flex-shrink-0">
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </span>
              <div className="text-left">
                <h4 className="text-xs font-semibold text-[var(--app-text)]">Send Secure Email Request</h4>
                <p className="text-[10px] text-[var(--app-text-muted)]">Describe concern &amp; clinical preferences</p>
              </div>
            </div>
            <span className="text-[10px] text-[var(--app-text-secondary)] font-medium underline flex-shrink-0 ml-2">Send Mail</span>
          </motion.a>
        </div>

        {/* Trust note */}
        <div className="p-4 bg-[rgba(36,26,20,0.02)] rounded-xl border border-[var(--app-border)] text-[10px] text-[var(--app-text-muted)] leading-relaxed font-light space-y-1.5">
          <div className="flex items-center gap-1.5 text-[var(--app-text)] font-semibold text-[11px]">
            <svg className="stroke-[var(--app-secondary)]" fill="none" height="11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" width="11"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            Direct Integrity Guarantee
          </div>
          <p>
            Both paths route communication straight to Chuyi Hu. There are no automated voice trees, outside referral coordinators, or third-party digital portals handling your therapy intake.
          </p>
          <p className="italic pt-1 border-t border-[var(--app-border)]">
            * Appointment and intake communication are handled with HIPAA privacy standards in mind.
          </p>
        </div>

        {/* Close */}
        <motion.button
          onClick={onClose}
          className="w-full py-3.5 bg-[var(--app-text)] rounded-xl text-white font-medium text-xs"
          whileTap={{ scale: 0.97 }}
        >
          Return to Sanctuary
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
