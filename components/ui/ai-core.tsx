"use client";

import { motion } from "framer-motion";
import { studioStats } from "@/lib/products";

interface AICoreProps {
  size?: number;
  /** When true, renders the compact nav-bar version. */
  compact?: boolean;
}

/**
 * The studio's signature element.
 *
 * Not pure decoration: the ratio of bright arc to dim arc reflects
 * studioStats.live / studioStats.totalProducts. Right now that's 1-in-4 —
 * the core is honest about where the studio actually is, which is more
 * memorable than a generic "infinite glow."
 */
export function AICore({ size = 280, compact = false }: AICoreProps) {
  const liveRatio = studioStats.live / studioStats.totalProducts;
  const circumference = 2 * Math.PI * 46;
  const liveArc = circumference * liveRatio;

  const dim = compact ? 0.55 : 1;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Outer ambient glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(143,168,255,0.35) 0%, rgba(143,168,255,0) 70%)",
        }}
        animate={{ opacity: [0.6 * dim, 0.9 * dim, 0.6 * dim] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Status ring — encodes live/total ratio */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 -rotate-90"
        style={{ width: size, height: size }}
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="rgba(28,32,48,0.8)"
          strokeWidth="1.2"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="var(--core-glow)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray={`${liveArc} ${circumference}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6 }}
        />
      </svg>

      {/* Core body */}
      <motion.div
        className="relative rounded-full"
        style={{
          width: size * 0.42,
          height: size * 0.42,
          background:
            "radial-gradient(circle at 35% 30%, #DCE4FF 0%, #8FA8FF 35%, #3A4FCC 75%, #1A1F3D 100%)",
          boxShadow: `0 0 ${size * 0.25}px rgba(143,168,255,${0.45 * dim}), inset 0 0 ${size * 0.08}px rgba(255,255,255,0.3)`,
        }}
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {!compact && (
        <div className="absolute -bottom-10 flex flex-col items-center gap-1">
          <span className="font-mono-label text-[10px] text-text-tertiary uppercase">
            {studioStats.live} live · {studioStats.inMotion} in motion
          </span>
        </div>
      )}
    </div>
  );
}
