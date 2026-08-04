import { SectionHeading } from "@/components/ui/section-heading";

const lanes = [
  {
    number: "01",
    title: "Products we run",
    body: "Software we own, ship, and support. Real users, real uptime, nobody to hand the pager to.",
  },
  {
    number: "02",
    title: "Builds for you",
    body: "Websites, web apps, mobile. Scoped tight, demoed weekly, maintained after launch.",
  },
  {
    number: "03",
    title: "Play, polished",
    body: "Games as practice. Small, finished, and tuned until the feel is right.",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-title"
      className="shell py-[clamp(64px,8vw,112px)]"
    >
      <SectionHeading
        id="what-title"
        label="What we do"
        title="One studio, three lanes."
        body="The lanes feed each other on purpose. What we learn keeping our own products online goes straight into the work we do for clients — and the games keep the craft honest."
      />

      <ol className="mt-[clamp(40px,5vw,64px)] grid gap-[clamp(24px,3vw,32px)] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
        {lanes.map((lane) => (
          <li
            key={lane.number}
            className="min-w-0 border-l border-panel-border py-0.5 pl-[clamp(20px,2vw,28px)]"
          >
            <p
              aria-hidden="true"
              className="mb-3.5 text-[clamp(2.25rem,4vw,3.25rem)] font-bold leading-[0.9] tracking-[-0.03em] tabular-nums text-text-tertiary"
            >
              {lane.number}
            </p>
            <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.02em]">
              {lane.title}
            </h3>
            <p className="mt-2.5 text-pretty text-base leading-[1.6] text-text-secondary">
              {lane.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
