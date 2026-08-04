import { contactEmail } from "@/lib/products";
import { InquiryForm } from "@/components/ui/inquiry-form";

const steps = [
  {
    number: "01",
    title: "Scope",
    body: "One call, then a written plan with a price and a date.",
  },
  {
    number: "02",
    title: "Build",
    body: "Weekly demos on a live URL. You watch it happen.",
  },
  {
    number: "03",
    title: "Ship",
    body: "Launch, handover docs, analytics wired up before we go.",
  },
  {
    number: "04",
    title: "Maintain",
    body: "A monthly plan for fixes, updates, and small features.",
  },
];

export function Inquiry() {
  return (
    <section
      id="inquiry"
      aria-labelledby="inquiry-title"
      className="shell mt-[clamp(96px,14vw,176px)] pb-[clamp(72px,9vw,128px)]"
    >
      <div className="flex flex-wrap gap-[clamp(40px,5vw,72px)] border-t border-panel-border pt-[clamp(40px,5vw,64px)]">
        <div className="min-w-0 flex-1 basis-[420px]">
          <p className="label text-text-secondary">Start a project</p>
          <h2
            id="inquiry-title"
            className="mt-4 text-pretty text-[clamp(1.5rem,2.8vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
          >
            Four steps, no surprises.
          </h2>
          <p className="mt-4 max-w-[48ch] text-pretty text-[17px] leading-[1.65] text-text-secondary">
            Tell us what you need. If it isn&apos;t a fit we&apos;ll say so in
            the first reply and point you somewhere better.
          </p>

          <ol className="mt-[clamp(32px,4vw,44px)] grid">
            {steps.map((step, i) => (
              <li
                key={step.number}
                className={`flex items-baseline gap-[clamp(16px,2vw,24px)] border-t border-panel-border py-[18px] ${
                  i === steps.length - 1 ? "border-b" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="min-w-[2.4ch] flex-none text-right text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.03em] tabular-nums text-text-tertiary"
                >
                  {step.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-semibold tracking-[-0.01em]">
                    {step.title}
                  </span>
                  <span className="mt-1.5 block text-base leading-[1.55] text-text-secondary">
                    {step.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="min-w-0 max-w-[520px] flex-1 basis-[380px]">
          <InquiryForm />
          <p className="mt-[18px] text-[15px] leading-[1.6] text-text-secondary">
            Prefer email?{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-accent transition-colors hover:text-accent-link"
            >
              {contactEmail}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
