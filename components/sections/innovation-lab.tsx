"use client";

import { motion } from "framer-motion";

const experiments = [
  {
    label: "RESEARCH",
    title: "Self-healing automation",
    note: "Workflows that detect UI drift and re-route themselves instead of failing silently.",
  },
  {
    label: "PROTOTYPE",
    title: "Adaptive difficulty engine",
    note: "The model behind Puzzle's real-time challenge reshaping — being generalized for reuse.",
  },
  {
    label: "ROADMAP",
    title: "Cross-product memory layer",
    note: "A shared preference graph so every ML Studios product gets smarter about the same person.",
  },
  {
    label: "CONCEPT",
    title: "Document intelligence core",
    note: "The extraction engine inside Insurance AI, built to generalize past policies — contracts, leases, claims.",
  },
];

export function InnovationLab() {
  return (
    <section
      id="lab"
      className="relative py-32 px-6 border-t border-panel-border"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(108,140,255,0.06) 0%, rgba(5,6,10,0) 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <span className="font-mono-label text-xs uppercase text-text-tertiary">
          Innovation Lab
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
          What's running underneath.
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Research, prototypes, and the parts of the roadmap that aren't
          public products yet.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {experiments.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-xl p-6 relative overflow-hidden"
          >
            <span className="font-mono-label text-[10px] uppercase text-[var(--core-glow)] tracking-wider">
              {item.label}
            </span>
            <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {item.note}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
