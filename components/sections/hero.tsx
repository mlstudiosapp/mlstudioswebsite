"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(143,168,255,0.22) 0%, rgba(143,168,255,0) 60%)",
        }}
      />
    ),
  }
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden grain">
      {/* Ambient backdrop glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 35%, rgba(108,140,255,0.12) 0%, rgba(5,6,10,0) 70%)",
        }}
      />

      {/* 3D wordmark scene — fills the section, text overlays lower third */}
      <div className="absolute inset-0" aria-hidden="true">
        <HeroScene />
      </div>

      {/* Spacer that gives the wordmark its stage */}
      <div className="h-[52vh] sm:h-[56vh]" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center px-6 pb-24">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono-label text-xs uppercase text-text-tertiary mb-5"
        >
          Product &amp; Software Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[clamp(1.6rem,3.6vw,2.6rem)] font-semibold text-center leading-[1.1] max-w-3xl"
        >
          <span className="sr-only">ML Studios — </span>
          We build things that actually work.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 text-text-secondary text-base sm:text-lg max-w-xl text-center leading-relaxed"
        >
          Websites, apps, and web apps — our own products, and yours. Some
          lean on AI where it earns its place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#products"
            className="rounded-full px-7 py-3 text-sm font-medium bg-[var(--core-glow)] text-[#05060A] transition-transform hover:scale-105"
          >
            See our work
          </a>
          <a
            href="#client-work"
            className="rounded-full px-7 py-3 text-sm font-medium border border-panel-border text-text-primary transition-colors hover:border-text-tertiary"
          >
            Start a project
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-tertiary"
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
