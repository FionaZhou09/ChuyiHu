"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, Info, CalendarCheck } from "lucide-react";
import { TherapistPhoto } from "@/components/screens/therapist-photo";
import { PlantAtmosphere } from "./plant-atmosphere";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Sparkles },
  { href: "/about", label: "About", icon: Info },
  { href: "/specialties", label: "Specialties", icon: BookOpen },
  { href: "/practical-info", label: "Booking", icon: CalendarCheck },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative flex min-h-svh overflow-x-hidden">
      <PlantAtmosphere />

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r border-[var(--app-border)] bg-[rgba(253,251,247,0.92)] backdrop-blur-sm z-20">
        {/* Logo / Name */}
        <div className="px-6 pt-8 pb-6 border-b border-[var(--app-border)]">
          <div className="flex items-center gap-3">
            <TherapistPhoto className="h-10 w-10 flex-shrink-0" sizes="40px" />
            <div>
              <p className="font-serif text-sm font-normal text-[var(--app-text)] leading-tight">Chuyi Hu</p>
              <p className="text-[10px] text-[var(--app-text-muted)] tracking-wide uppercase">LMHC, LPC</p>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 ${
                  active
                    ? "bg-[rgba(211,110,82,0.1)] text-[var(--app-primary)] font-medium"
                    : "text-[var(--app-text-secondary)] hover:bg-[rgba(36,26,20,0.04)] hover:text-[var(--app-text)]"
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
                {active && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--app-primary)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="px-4 pb-8 space-y-2">
          <a
            href="tel:8649860671"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[var(--app-primary)] text-white rounded-xl text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            (864) 986-0671
          </a>
          <a
            href="mailto:hcycounseling@gmail.com?subject=Inquiry%20-%20Free%20Consultation%20Request"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-[var(--app-border)] text-[var(--app-text-secondary)] rounded-xl text-xs font-medium hover:bg-[rgba(36,26,20,0.03)] transition-colors"
          >
            <svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            Email Request
          </a>
          <p className="text-[9px] text-[var(--app-text-muted)] text-center pt-1">Free 15-min consultation</p>
        </div>
      </aside>

      {/* Main content area */}
      <main className="relative z-10 flex-1 md:ml-64 flex flex-col min-h-svh">
        {children}
      </main>

      {/* Mobile Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-[rgba(253,251,247,0.94)] backdrop-blur-sm border-t border-[var(--app-border)] pb-[env(safe-area-inset-bottom)] z-30">
        <div className="flex justify-around items-center h-14">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-0.5 min-h-[44px] min-w-[44px] justify-center relative px-2"
              >
                <item.icon
                  className={`w-5 h-5 transition-colors duration-150 ${
                    active ? "text-[var(--app-primary)]" : "text-[var(--app-text-muted)]"
                  }`}
                />
                <span
                  className={`text-[9px] tracking-wide transition-colors duration-150 ${
                    active ? "text-[var(--app-primary)] font-semibold" : "text-[var(--app-text-muted)]"
                  }`}
                >
                  {item.label}
                </span>
                {active && (
                  <motion.div
                    layoutId="mobile-tab-indicator"
                    className="absolute top-0 left-2 right-2 h-0.5 bg-[var(--app-primary)] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
