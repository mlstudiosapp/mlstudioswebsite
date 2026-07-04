"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card";

export function ProductsGrid() {
  return (
    <section id="products" className="relative py-32 px-6 border-t border-panel-border">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono-label text-xs uppercase text-text-tertiary"
        >
          Products
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 text-3xl sm:text-4xl font-semibold"
        >
          Software we ship and run.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-4 text-text-secondary leading-relaxed"
        >
          Live products, built and operated by ML Studios — each one solving a
          real, repetitive problem.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
