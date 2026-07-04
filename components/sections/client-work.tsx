"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Websites",
    description:
      "Marketing sites, portfolios, and landing pages — fast, responsive, and built to convert.",
  },
  {
    title: "Web Apps",
    description:
      "Dashboards, internal tools, and SaaS products — from first prototype to production.",
  },
  {
    title: "Mobile Apps & Games",
    description:
      "Android apps and games, designed and shipped for the Play Store.",
  },
];

export function ClientWork() {
  return (
    <section
      id="client-work"
      className="relative py-32 px-6 border-t border-panel-border"
    >
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono-label text-xs uppercase text-text-tertiary"
        >
          Client Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 text-3xl sm:text-4xl font-semibold"
        >
          Need something built?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-4 text-text-secondary leading-relaxed"
        >
          We take on a small number of client projects — scoped tightly,
          shipped fast, maintained properly.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-lg font-medium">{service.title}</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="mt-12 text-center"
      >
        <a
          href="mailto:admin@mlstudiosapp.com?subject=Project%20inquiry"
          className="rounded-full px-7 py-3 text-sm font-medium bg-[var(--core-glow)] text-[#05060A] transition-transform hover:scale-105 inline-block"
        >
          Start a project
        </a>
        <p className="mt-4 text-xs text-text-tertiary">
          or email admin@mlstudiosapp.com
        </p>
      </motion.div>
    </section>
  );
}
