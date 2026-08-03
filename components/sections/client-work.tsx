import { Fragment } from "react";
import { InquiryForm } from "@/components/ui/inquiry-form";
import { SectionHeading } from "@/components/ui/section-heading";

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

const processSteps = ["01 Scope", "02 Build", "03 Ship", "04 Maintain"];

export function ClientWork() {
  return (
    <section
      id="client-work"
      className="mx-auto w-full max-w-5xl border-t border-panel-border px-6 py-20 sm:py-24"
    >
      <SectionHeading
        label="Client Work"
        title="Need something built?"
        body="We take on a small number of client projects — scoped tightly, shipped fast, maintained properly."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-panel-border bg-panel p-6"
          >
            <h3 className="text-lg font-medium">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
        {processSteps.map((step, index) => (
          <Fragment key={step}>
            <span className="label text-text-secondary">{step}</span>
            {index < processSteps.length - 1 && (
              <span className="text-text-tertiary" aria-hidden="true">
                →
              </span>
            )}
          </Fragment>
        ))}
      </div>

      <div className="mt-12">
        <InquiryForm />
      </div>
    </section>
  );
}
