"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { Product } from "@/lib/products";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.a
      href={product.href}
      {...(product.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass rounded-xl p-6 flex flex-col h-full group transition-colors hover:border-[var(--card-accent)]"
      style={{ "--card-accent": `${product.colors.primary}66` } as CSSProperties}
    >
      <div className="flex items-center gap-2">
        <span
          className={`h-2.5 w-2.5 rounded-full ${product.status === "live" ? "animate-pulse" : ""}`}
          style={{
            background: product.colors.primary,
            boxShadow: `0 0 8px ${product.colors.primary}`,
          }}
          aria-hidden="true"
        />
        <span
          className="font-mono-label text-[10px] uppercase"
          style={{ color: product.colors.primary }}
        >
          {product.statusLabel}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-medium text-text-primary">{product.name}</h3>
      <p className="mt-1 text-sm text-text-secondary">{product.tagline}</p>
      <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
        {product.description}
      </p>

      <span
        className="mt-5 text-sm opacity-70 group-hover:opacity-100 transition-opacity"
        style={{ color: product.colors.primary }}
      >
        {product.external ? "Visit →" : "Open →"}
      </span>
    </motion.a>
  );
}
