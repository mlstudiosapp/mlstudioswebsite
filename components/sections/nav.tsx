"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function Nav() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200, 280], [0, 0, 1]);
  const y = useTransform(scrollY, [0, 280], [-20, 0]);

  return (
    <motion.header
      style={{ opacity, y }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4 glass"
    >
      <div className="flex items-center gap-3">
        <span
          className="block w-2.5 h-2.5 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #DCE4FF, #8FA8FF 60%, #3A4FCC 100%)",
            boxShadow: "0 0 10px rgba(143,168,255,0.7)",
          }}
          aria-hidden="true"
        />
        <span className="font-display font-semibold text-sm tracking-wide">
          ML STUDIOS
        </span>
      </div>
      <nav className="hidden sm:flex items-center gap-8 font-mono-label text-xs uppercase text-text-secondary">
        <a href="#products" className="hover:text-text-primary transition-colors">
          Products
        </a>
        <a href="#games" className="hover:text-text-primary transition-colors">
          Games
        </a>
        <a
          href="#client-work"
          className="rounded-full px-4 py-2 border border-panel-border text-text-primary normal-case font-body hover:border-text-tertiary transition-colors"
        >
          Start a project
        </a>
      </nav>
    </motion.header>
  );
}
