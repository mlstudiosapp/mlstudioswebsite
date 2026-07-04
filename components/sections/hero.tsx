"use client";

import { motion } from "framer-motion";
import { AICore } from "@/components/ui/ai-core";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden grain">
      {/* Ambient backdrop glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 35%, rgba(108,140,255,0.12) 0%, rgba(5,6,10,0) 70%)",
        }}
      />

      <motion.span
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono-label text-xs uppercase text-text-tertiary mb-8"
      >
        ML Studios — Ecosystem v1
      </motion.span>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <AICore size={300} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 text-[clamp(2.2rem,6vw,4.5rem)] font-semibold text-center leading-[1.05] max-w-4xl"
      >
        Building intelligent products
        <br />
        for the next decade.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-6 text-text-secondary text-base sm:text-lg max-w-xl text-center leading-relaxed"
      >
        From AI productivity tools to immersive experiences, ML Studios
        creates products that simplify, empower, and transform everyday
        life.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="#galaxy"
          className="rounded-full px-7 py-3 text-sm font-medium bg-[var(--core-glow)] text-[#05060A] transition-transform hover:scale-105"
        >
          Explore Ecosystem
        </a>
        <a
          href="#lab"
          className="rounded-full px-7 py-3 text-sm font-medium border border-panel-border text-text-primary transition-colors hover:border-text-tertiary"
        >
          Enter Innovation Lab
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 text-text-tertiary"
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
