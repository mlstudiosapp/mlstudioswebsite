"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    label: "01 — Own Products",
    title: "Products we run",
    body: "We design, build, and operate our own software — live in production, used daily, improved constantly.",
  },
  {
    label: "02 — Client Work",
    title: "Builds for you",
    body: "Websites, web apps, and mobile apps for clients — scoped tightly, shipped fast, held to the same bar as our own products.",
  },
  {
    label: "03 — Games",
    title: "Play, polished",
    body: "Small, carefully-made games — starting with Snake, coming to the Play Store.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-32 px-6 border-t border-panel-border">
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
            className="glass rounded-xl p-6"
          >
            <span className="font-mono-label text-[10px] uppercase tracking-wider text-[var(--core-glow)]">
              {pillar.label}
            </span>
            <h3 className="mt-3 text-lg font-medium">{pillar.title}</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {pillar.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
