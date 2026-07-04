"use client";

import { motion } from "framer-motion";

export function FounderVision() {
  return (
    <section className="relative py-32 px-6 border-t border-panel-border">
      <div className="max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-mono-label text-xs uppercase text-text-tertiary"
        >
          Founder Vision
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-3xl sm:text-4xl font-semibold leading-tight"
        >
          Most companies pick a category.
          <br />
          We picked a method.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed"
        >
          <p>
            ML Studios isn&apos;t betting on one product or one market. It&apos;s
            betting on a way of building: take something people do
            manually and repeatedly — scheduling, interpreting a contract,
            seeking guidance, solving a puzzle — and put real AI behind
            it, not the wrapper kind.
          </p>
          <p>
            Scheduler proved the method works in production. Arcana,
            Puzzle, and Insurance AI are the same method pointed at three
            very different problems, on purpose — the discipline should
            generalize, or it isn&apos;t a discipline.
          </p>
          <p>
            The long-term shape is a studio that ships fast, learns from
            every product it ships, and feeds that back into the next
            one. Fewer twenty-tab subscriptions. More software that
            actually does the thing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-3 gap-6 max-w-md"
        >
          {[
            { value: "4", label: "Products in motion" },
            { value: "1", label: "Live in production" },
            { value: "1", label: "Method, applied everywhere" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-semibold text-[var(--core-glow)] font-mono-label">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-text-tertiary leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
