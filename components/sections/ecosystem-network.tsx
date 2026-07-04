"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/products";

/**
 * A simplified neural-network strip: the core in the center, each
 * product as a node, animated pulses traveling along the connecting
 * lines. Built in SVG — same swap-in logic as ProductGalaxy applies
 * if this becomes a true 3D scene later.
 */
export function EcosystemNetwork() {
  const nodeCount = products.length;
  const positions = products.map((p, i) => {
    const angle = (360 / nodeCount) * i - 90;
    const rad = (angle * Math.PI) / 180;
    return { x: 50 + 36 * Math.cos(rad), y: 50 + 36 * Math.sin(rad), product: p };
  });

  return (
    <section className="relative py-32 px-6 border-t border-panel-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <span className="font-mono-label text-xs uppercase text-text-tertiary">
          Ecosystem Network
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
          Every product, one intelligence layer.
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          The studio core doesn't power features inside each product —
          it's the shared discipline behind them: ship lean, let AI carry
          the repetitive weight, keep the person in control.
        </p>
      </motion.div>

      <div className="relative w-full max-w-lg mx-auto aspect-square">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          {positions.map(({ x, y, product }) => (
            <g key={product.id}>
              <line
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke={product.colors.primary}
                strokeOpacity={0.25}
                strokeWidth={0.4}
              />
              <motion.circle
                r={0.9}
                fill={product.colors.primary}
                animate={{
                  cx: [50, x],
                  cy: [50, y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: positions.indexOf(positions.find((p) => p.product.id === product.id)!) * 0.4,
                  ease: "easeInOut",
                }}
              />
            </g>
          ))}
          <circle cx="50" cy="50" r="5" fill="var(--core-glow)" opacity={0.9} />
        </svg>

        {positions.map(({ x, y, product }) => (
          <div
            key={product.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: product.colors.primary, boxShadow: `0 0 10px ${product.colors.primary}` }}
            />
            <span className="font-mono-label text-[9px] uppercase text-text-tertiary whitespace-nowrap">
              {product.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
