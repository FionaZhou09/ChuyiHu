import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
  ? new URL(`https://${process.env.VERCEL_URL}`)
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Chuyi Hu, LMHC, LPC — Multilingual Mental Health Counselor",
    template: "%s | Chuyi Hu Therapy",
  },
  description:
    "Licensed mental health counselor specializing in anxiety, depression, life transitions, and trauma. Therapy in English, Mandarin, and Cantonese. Online practice in NJ & NY.",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Chuyi Hu, LMHC, LPC — Multilingual Mental Health Counselor",
    description:
      "Licensed mental health counselor specializing in anxiety, depression, life transitions, and trauma. Therapy in English, Mandarin, and Cantonese.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FDFBF7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-svh flex flex-col bg-[var(--app-surface)]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
