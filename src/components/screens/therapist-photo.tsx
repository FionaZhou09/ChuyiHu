"use client";

import Image from "next/image";

interface TherapistPhotoProps {
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function TherapistPhoto({
  className = "",
  priority = false,
  sizes = "160px",
}: TherapistPhotoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-full border border-[var(--app-border)] bg-white shadow-sm ${className}`}
    >
      <Image
        src="/chuyi-hu-headshot.jpeg"
        alt="Chuyi Hu, LMHC, LPC"
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
