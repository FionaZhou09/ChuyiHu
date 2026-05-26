"use client";

import Image from "next/image";

interface PlantFeatureProps {
  caption?: string;
  className?: string;
  priority?: boolean;
}

export function PlantFeature({ caption, className = "", priority = false }: PlantFeatureProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[var(--app-border)] bg-[#fbfaf6] shadow-sm ${className}`}
    >
      <div className="relative min-h-[360px] md:min-h-[440px]">
        <Image
          src="/minimal-therapy-plant.png"
          alt="A calm green plant in a bright quiet room"
          fill
          priority={priority}
          sizes="(min-width: 768px) 520px, 100vw"
          className="object-cover object-bottom"
        />
      </div>
      {caption ? (
        <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/72 px-4 py-3 text-[11px] font-light leading-relaxed text-[var(--app-text-secondary)] backdrop-blur-sm">
          {caption}
        </div>
      ) : null}
    </div>
  );
}
