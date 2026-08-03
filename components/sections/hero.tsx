export function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="max-w-3xl">
        <p className="label fade-up text-text-tertiary">
          Product &amp; Software Studio
        </p>

        <h1 className="fade-up mt-6">
          <span className="block text-[clamp(2rem,9vw,5rem)] font-semibold uppercase leading-none tracking-[0.06em]">
            ML Studios
          </span>
          <span className="mt-6 block text-[clamp(1.25rem,3vw,1.75rem)] font-normal leading-snug text-text-secondary">
            We build things that actually work.
          </span>
        </h1>

        <p className="fade-up mt-6 max-w-xl leading-relaxed text-text-secondary">
          Websites, apps, and web apps — our own products, and yours. Some lean
          on AI where it earns its place.
        </p>

        <div className="fade-up mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#products"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-void transition-opacity hover:opacity-90"
          >
            See our work
          </a>
          <a
            href="#client-work"
            className="rounded-lg border border-panel-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-text-tertiary"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
