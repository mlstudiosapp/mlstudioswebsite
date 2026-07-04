"use client";

import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

interface ProductNodeProps {
  product: Product;
  isActive: boolean;
  onSelect: () => void;
}

/** Renders the motif-specific glyph inside a node. Kept as inline SVG paths — no icon library needed for 4 shapes. */
function MotifGlyph({ motif, color }: { motif: Product["motif"]; color: string }) {
  switch (motif) {
    case "satellite":
      return (
        <svg viewBox="0 0 24 24" className="w-1/2 h-1/2" fill="none">
          <rect x="9" y="9" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5" />
          <path d="M9 12H4M20 12h-5M12 9V4M12 20v-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="4" cy="12" r="1.4" fill={color} />
          <circle cx="20" cy="12" r="1.4" fill={color} />
        </svg>
      );
    case "crystal":
      return (
        <svg viewBox="0 0 24 24" className="w-1/2 h-1/2" fill="none">
          <path d="M12 2L19 9L12 22L5 9L12 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M5 9H19M12 2V22" stroke={color} strokeWidth="1" opacity="0.6" />
        </svg>
      );
    case "cube":
      return (
        <svg viewBox="0 0 24 24" className="w-1/2 h-1/2" fill="none">
          <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 2V12M3 7L12 12M21 7L12 12M12 12V22" stroke={color} strokeWidth="1" opacity="0.6" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className="w-1/2 h-1/2" fill="none">
          <path d="M12 2L20 5V11C20 16 16.5 20.5 12 22C7.5 20.5 4 16 4 11V5L12 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 12L11 14L15.5 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function ProductNode({ product, isActive, onSelect }: ProductNodeProps) {
  const { colors, orbit } = product;
  const x = 50 + orbit.radius * Math.cos((orbit.angle * Math.PI) / 180);
  const y = 50 + orbit.radius * Math.sin((orbit.angle * Math.PI) / 180);
  const nodeSize = 64 * orbit.scale;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      aria-label={`${product.name} — ${product.statusLabel}`}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ rotate: 360 }}
      transition={{
        duration: orbit.periodSeconds,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: nodeSize,
          height: nodeSize,
          background: `radial-gradient(circle at 35% 30%, ${colors.primary}55, ${colors.secondary}22 70%)`,
          border: `1px solid ${colors.primary}66`,
        }}
        whileHover={{ scale: 1.15 }}
        animate={{
          boxShadow: isActive
            ? `0 0 32px ${colors.primary}88`
            : `0 0 14px ${colors.primary}33`,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* counter-rotate the glyph so it stays upright while the orbit spins */}
        <motion.div
          className="flex items-center justify-center w-full h-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: orbit.periodSeconds,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <MotifGlyph motif={product.motif} color={colors.primary} />
        </motion.div>
        {product.status === "live" && (
          <span
            className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ background: colors.primary, boxShadow: `0 0 8px ${colors.primary}` }}
          />
        )}
      </motion.div>
    </motion.button>
  );
}
