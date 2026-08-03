import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

interface Pillar {
  label: string;
  title: string;
  body: string;
  icon: ReactNode;
}

const pillars: Pillar[] = [
  {
    label: "01 — Own Products",
    title: "Products we run",
    body: "We design, build, and operate our own software — live in production, used daily, improved constantly.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z" />
        <path d="M12 12 20 7.5" />
        <path d="M12 12v9" />
        <path d="M12 12 4 7.5" />
      </svg>
    ),
  },
  {
    label: "02 — Client Work",
    title: "Builds for you",
    body: "Websites, web apps, and mobile apps for clients — scoped tightly, shipped fast, held to the same bar as our own products.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 7-5 5 5 5" />
        <path d="m16 7 5 5-5 5" />
        <path d="M13.5 5.5 10.5 18.5" />
      </svg>
    ),
  },
  {
    label: "03 — Games",
    title: "Play, polished",
    body: "Small, carefully-made games — starting with Snake, coming to the Play Store.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="8" width="18" height="9" rx="4.5" />
        <path d="M8 11v3" />
        <path d="M6.5 12.5h3" />
        <circle cx="15" cy="13.5" r="0.75" />
        <circle cx="17.5" cy="11.5" r="0.75" />
      </svg>
    ),
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24"
    >
      <SectionHeading
        label="What We Do"
        title="One studio, three lanes."
        body="ML Studios builds software that earns its keep — for ourselves, for clients, and for play."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.label}
            className="rounded-xl border border-panel-border bg-panel p-6"
          >
            <div className="text-text-tertiary">{pillar.icon}</div>
            <p className="label mt-4 text-text-tertiary">{pillar.label}</p>
            <h3 className="mt-3 text-lg font-medium">{pillar.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
