import type { CSSProperties } from "react";

// Split into words so a narrow viewport can only break at the space —
// the per-letter spans would otherwise be valid break points.
const WORDMARK = ["ML", "STUDIOS"];

function Wordmark() {
  let letterIndex = 0;

  return (
    <span
      aria-hidden="true"
      className="block text-[clamp(2rem,9vw,5rem)] font-semibold uppercase leading-[1.05] tracking-[0.06em]"
    >
      {WORDMARK.map((word, wordIndex) => (
        <span key={word}>
          {wordIndex > 0 && " "}
          <span className="wordmark-word">
            {[...word].map((char, i) => (
              <span
                key={`${word}-${i}`}
                className="wordmark-letter"
                style={{ "--i": String(letterIndex++) } as CSSProperties}
              >
                <span>{char}</span>
              </span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="max-w-3xl">
        <p
          className="fade-up label text-text-tertiary"
          style={{ "--delay": "0.05s" } as CSSProperties}
        >
          Product &amp; Software Studio
        </p>

        <h1 className="mt-6">
          <span className="sr-only">
            ML Studios — we build things that actually work.
          </span>

          <Wordmark />

          <span
            aria-hidden="true"
            className="fade-up mt-6 block text-[clamp(1.25rem,3vw,1.75rem)] font-normal leading-snug text-text-secondary"
            style={{ "--delay": "0.7s" } as CSSProperties}
          >
            We build things that actually work.
          </span>
        </h1>

        <p
          className="fade-up mt-6 max-w-xl leading-relaxed text-text-secondary"
          style={{ "--delay": "0.8s" } as CSSProperties}
        >
          Websites, apps, and web apps — our own products, and yours. Some lean
          on AI where it earns its place.
        </p>

        <div
          className="fade-up mt-9 flex flex-wrap items-center gap-3"
          style={{ "--delay": "0.9s" } as CSSProperties}
        >
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
