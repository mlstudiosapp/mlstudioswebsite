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
            "radial-gradient(circle at 50% 45%, rgba(143,168,255,0.25) 0%, rgba(143,168,255,0) 65%)",
        }}
      />
    ),
  }
);

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

      {/* 3D centerpiece */}
      <div className="absolute inset-0" style={{ height: "70vh" }} aria-hidden="true">
        <HeroScene />
      </div>

      <motion.span
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative font-mono-label text-xs uppercase text-text-tertiary mb-6"
      >
        ML Studios — Product &amp; Software Studio
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative text-[clamp(2.2rem,6vw,4.5rem)] font-semibold text-center leading-[1.05] max-w-4xl"
      >
        We build things
        <br />
        that actually work.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative mt-6 text-text-secondary text-base sm:text-lg max-w-xl text-center leading-relaxed"
      >
        ML Studios designs and ships websites, apps, and web apps — our own
        products, and yours. Some lean on AI where it earns its place.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative mt-10 flex flex-col sm:flex-row items-center gap-4"
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
