"use client";

import Image from "next/image";

export function PlantAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -right-28 -top-20 h-[360px] w-[280px] opacity-[0.18] blur-[1px] md:right-0 md:h-[520px] md:w-[410px] md:opacity-[0.16]">
        <Image
          src="/bamboo-sun-rays.webp"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 410px, 280px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--app-surface)_0%,rgba(253,251,247,0.72)_42%,rgba(253,251,247,0.08)_100%)]" />
      </div>

      <div className="absolute -bottom-24 -left-24 h-[300px] w-[240px] opacity-[0.09] md:bottom-0 md:left-64 md:h-[420px] md:w-[320px]">
        <Image
          src="/soft-plant-corner.jpg"
          alt=""
          fill
          sizes="(min-width: 768px) 320px, 240px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--app-surface)_0%,rgba(253,251,247,0.32)_45%,rgba(253,251,247,0.08)_100%)]" />
      </div>
    </div>
  );
}
