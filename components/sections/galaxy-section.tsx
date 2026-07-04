"use client";

import { motion } from "framer-motion";
import { ProductGalaxy } from "@/components/galaxy/product-galaxy";

export function GalaxySection() {
  return (
    <section
      id="galaxy"
      className="relative py-32 px-6 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-2xl"
      >
        <span className="font-mono-label text-xs uppercase text-text-tertiary">
          Product Galaxy
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
          Four worlds, one intelligence layer.
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Each product orbits the same studio core — independent on the
          surface, built on the same conviction underneath: AI should do
          the repetitive work so people get the interesting part. Click a
          node to look inside.
        </p>
      </motion.div>

      <ProductGalaxy />
    </section>
  );
}
