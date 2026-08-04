import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    monogram: "WS",
    title: "Websites",
    body: "Marketing sites and landing pages that load fast and stay editable.",
  },
  {
    monogram: "WA",
    title: "Web Apps",
    body: "Dashboards, portals, and internal tools with real auth and real data.",
  },
  {
    monogram: "MG",
    title: "Mobile Apps & Games",
    body: "Android builds for the Play Store, plus playable browser builds when that's the better fit.",
  },
];

export function ClientWork() {
  return (
    <section
      id="client-work"
      aria-labelledby="client-title"
      className="shell pt-[clamp(64px,8vw,112px)]"
    >
      <SectionHeading
        id="client-title"
        label="Client work"
        title="Need something built?"
        body="Fixed scope, weekly demos on a real URL, and a maintenance plan that starts the day you ship."
      />

      <div className="mt-[clamp(36px,4.5vw,56px)] grid gap-[clamp(16px,2vw,24px)] [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
        {services.map((service) => (
          <article
            key={service.title}
            className="min-w-0 rounded-xl border border-panel-border bg-panel p-[clamp(18px,2vw,24px)] transition-colors hover:border-border-strong"
          >
            <span
              aria-hidden="true"
              className="grid h-11 w-11 place-items-center rounded-[10px] border border-panel-border bg-sunken text-sm font-semibold tracking-[0.06em] text-text-secondary"
            >
              {service.monogram}
            </span>
            <h3 className="mt-[18px] text-xl font-semibold leading-tight tracking-[-0.02em]">
              {service.title}
            </h3>
            <p className="mt-2 text-pretty text-base leading-[1.6] text-text-secondary">
              {service.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
