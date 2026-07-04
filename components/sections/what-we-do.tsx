"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";

interface Pillar {
  label: string;
  title: string;
  body: string;
  accent: string;
  icon: ReactNode;
}

const pillars: Pillar[] = [
  {
    label: "01 — Own Products",
    title: "Products we run",
    body: "We design, build, and operate our own software — live in production, used daily, improved constantly.",
    accent: "#6C8CFF",
    icon: (
      <svg
        width="24"
        height="24"
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
    accent: "#8FA8FF",
    icon: (
      <svg
        width="24"
        height="24"
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
    accent: "#3DDC84",
    icon: (
      <svg
        width="24"
        height="24"
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
    <section id="what-we-do" className="relative py-32 px-6 border-t border-panel-border">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(108,140,255,0.06) 0%, rgba(5,6,10,0) 70%)",
        }}
      />

      <div className="text-center mb-16 max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono-label text-xs uppercase text-text-tertiary"
        >
          What We Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 text-3xl sm:text-4xl font-semibold"
        >
          One studio, three lanes.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-4 text-text-secondary leading-relaxed"
        >
          ML Studios builds software that earns its keep — for ourselves, for
          clients, and for play.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="h-full"
          >
            <TiltCard glowColor={pillar.accent} className="h-full">
              <div
                style={{ "--accent": `${pillar.accent}66` } as CSSProperties}
                className="glass rounded-xl p-6 h-full transition-colors duration-300 hover:border-[var(--accent)]"
              >
                <div style={{ color: pillar.accent }}>{pillar.icon}</div>
                <span
                  style={{ color: pillar.accent }}
                  className="mt-4 block font-mono-label text-[10px] uppercase tracking-wider"
                >
                  {pillar.label}
                </span>
                <h3 className="mt-3 text-lg font-medium">{pillar.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
