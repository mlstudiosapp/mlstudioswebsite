"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  "Websites",
  "Web Apps",
  "Mobile Apps",
  "Games",
  "AI-Assisted Builds",
  "Design",
  "Engineering",
];

const edgeFade =
  "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)";

export function Marquee() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="relative overflow-hidden border-y border-panel-border py-4 select-none"
      style={{ maskImage: edgeFade, WebkitMaskImage: edgeFade }}
    >
      <motion.div
        className="flex w-max"
        animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reducedMotion
            ? undefined
            : { repeat: Infinity, ease: "linear", duration: 30 }
        }
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center"
            aria-hidden={copy === 1}
          >
            {items.map((item) => (
              <span key={item} className="flex items-center">
                <span className="font-mono-label uppercase text-sm text-text-tertiary whitespace-nowrap">
                  {item}
                </span>
                <span className="mx-6 text-[var(--core-glow)]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
