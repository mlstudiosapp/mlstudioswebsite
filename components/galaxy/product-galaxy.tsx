"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { products, type Product } from "@/lib/products";
import { AICore } from "@/components/ui/ai-core";
import { ProductNode } from "@/components/galaxy/product-node";
import { OrbitRings } from "@/components/galaxy/orbit-rings";

/**
 * Renders the product ecosystem as an orbital scene.
 *
 * SWAP-IN CONTRACT: this component owns nothing about page layout or
 * scroll — it just renders `products` inside a bounded square viewport
 * and reports selection via onSelect-equivalent local state. A future
 * R3F implementation can replace everything inside the returned <div>
 * (SVG rings, CSS-orbit nodes) with a <Canvas> scene while keeping the
 * same `products` data, the same detail-panel UI below it, and the
 * same place in the page.
 */
export function ProductGalaxy() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = products.find((p) => p.id === activeId) ?? null;

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="relative w-full max-w-[640px] aspect-square">
        <OrbitRings />
        <div className="absolute inset-0 flex items-center justify-center">
          <AICore size={120} compact />
        </div>
        {products.map((product) => (
          <ProductNode
            key={product.id}
            product={product}
            isActive={activeId === product.id}
            onSelect={() =>
              setActiveId((current) => (current === product.id ? null : product.id))
            }
          />
        ))}
      </div>

      <DetailPanel product={active} />
    </div>
  );
}

function DetailPanel({ product }: { product: Product | null }) {
  return (
    <div className="w-full max-w-xl min-h-[180px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {product ? (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass rounded-2xl p-6 w-full"
            style={{ borderColor: `${product.colors.primary}44` }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <span
                className="font-mono-label text-[10px] uppercase px-2.5 py-1 rounded-full border"
                style={{
                  color: product.colors.primary,
                  borderColor: `${product.colors.primary}55`,
                  background: `${product.colors.primary}14`,
                }}
              >
                {product.statusLabel}
              </span>
            </div>
            <p className="text-text-secondary text-sm mb-1">{product.tagline}</p>
            <p className="text-text-secondary text-sm leading-relaxed mb-5">
              {product.description}
            </p>
            {product.status === "live" ? (
              <Link
                href={product.href}
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-5 py-2.5 transition-transform hover:scale-105"
                style={{
                  background: product.colors.primary,
                  color: "#05060A",
                }}
              >
                Open {product.name}
                <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-text-tertiary font-mono-label uppercase">
                Notify me when it ships
              </span>
            )}
          </motion.div>
        ) : (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-text-tertiary text-sm font-mono-label uppercase tracking-wide"
          >
            Select a product to inspect
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
