"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { InquiryForm } from "@/components/ui/inquiry-form";

const services = [
  {
    title: "Websites",
    description:
      "Marketing sites, portfolios, and landing pages — fast, responsive, and built to convert.",
    glowColor: "#8FA8FF",
  },
  {
    title: "Web Apps",
    description:
      "Dashboards, internal tools, and SaaS products — from first prototype to production.",
    glowColor: "#6C8CFF",
  },
  {
    title: "Mobile Apps & Games",
    description:
      "Android apps and games, designed and shipped for the Play Store.",
    glowColor: "#B388FF",
  },
];

const processSteps = ["01 Scope", "02 Build", "03 Ship", "04 Maintain"];

export function ClientWork() {
  return (
    <section
      id="client-work"
      className="relative py-32 px-6 border-t border-panel-border"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(179,136,255,0.06) 0%, rgba(5,6,10,0) 70%)",
        }}
      />

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
            className="h-full"
          >
            <TiltCard
              glowColor={service.glowColor}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-medium">{service.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {processSteps.map((step, index) => (
          <Fragment key={step}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="font-mono-label text-xs uppercase text-text-secondary"
            >
              {step}
            </motion.span>
            {index < processSteps.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 + 0.04 }}
                className="text-text-tertiary"
              >
                →
              </motion.span>
            )}
          </Fragment>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="mt-14"
      >
        <InquiryForm />
      </motion.div>
    </section>
  );
}
