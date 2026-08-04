import type { CSSProperties } from "react";
import { products, games } from "@/lib/products";

// Split into words so a narrow viewport can only break at the space —
// the per-letter spans would otherwise be valid break points.
const WORDMARK = ["ML", "STUDIOS"];

function Wordmark() {
  let letterIndex = 0;

  return (
    <span aria-hidden="true">
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

const statusRows = [
  ...products.map((product) => ({
    id: product.id,
    name: product.name,
    label: product.statusLabel,
    live: true,
  })),
  ...games.map((game) => ({
    id: game.id,
    name: game.name,
    label: "Soon",
    live: false,
  })),
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="shell pt-[clamp(48px,7vw,96px)] pb-[clamp(40px,5vw,72px)]"
    >
      <div className="flex flex-wrap items-start gap-[clamp(32px,5vw,64px)]">
        <div className="min-w-0 max-w-[760px] flex-1 basis-[520px]">
          <p
            className="label line-in mb-[clamp(20px,2.4vw,28px)] text-[13px] text-text-secondary"
            style={{ "--delay": "0.04s" } as CSSProperties}
          >
            Product &amp; Software Studio
          </p>

          <h1
            id="hero-title"
            aria-label="ML Studios"
            className="text-[clamp(2rem,9vw,5rem)] font-bold uppercase leading-none tracking-[0.06em]"
          >
            <Wordmark />
          </h1>

          <p
            className="line-in mt-[clamp(20px,2.6vw,28px)] text-pretty text-[clamp(1.25rem,2.6vw,1.875rem)] leading-[1.25] tracking-[-0.02em] text-text-secondary"
            style={{ "--delay": "0.48s" } as CSSProperties}
          >
            We build things that actually work.
          </p>

          <p
            className="line-in mt-5 max-w-[54ch] text-pretty text-[17px] leading-[1.65] text-text-secondary"
            style={{ "--delay": "0.58s" } as CSSProperties}
          >
            A small studio in three lanes: products we run ourselves, software
            we build for clients, and games we finish. Same people on all of
            it, which is why the standards hold.
          </p>

          <div
            className="line-in mt-[clamp(28px,3.4vw,36px)] flex flex-wrap gap-3"
            style={{ "--delay": "0.68s" } as CSSProperties}
          >
            <a
              href="#inquiry"
              className="inline-flex min-h-12 items-center rounded-lg border border-accent bg-accent px-[22px] text-[15px] font-semibold text-void transition-colors hover:bg-accent-hover"
            >
              Start a project
            </a>
            <a
              href="#products"
              className="inline-flex min-h-12 items-center rounded-lg border border-panel-border px-[22px] text-[15px] font-semibold text-text-primary transition-colors hover:border-accent"
            >
              See our products
            </a>
          </div>
        </div>

        <aside
          aria-label="Studio status"
          className="line-in min-w-0 max-w-[400px] flex-1 basis-80 rounded-xl border border-panel-border bg-panel p-5"
          style={{ "--delay": "0.8s" } as CSSProperties}
        >
          <p className="label mb-4 text-text-secondary">In production</p>

          <ul className="grid gap-px overflow-hidden rounded-lg bg-panel-border">
            {statusRows.map((row) => (
              <li
                key={row.id}
                className="flex min-h-12 items-center gap-3 bg-panel px-3.5 py-3"
              >
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 flex-none rounded-full ${
                    row.live ? "bg-status-live" : "bg-status-soon"
                  }`}
                />
                <span className="min-w-0 flex-1 text-[15px] font-semibold">
                  {row.name}
                </span>
                <span
                  className={`text-xs uppercase tracking-[0.1em] ${
                    row.live ? "text-status-live" : "text-status-soon"
                  }`}
                >
                  {row.label}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-4 border-t border-panel-border pt-4 text-sm leading-relaxed text-text-secondary">
            Taking on a small number of client projects.{" "}
            <a
              href="#inquiry"
              className="text-accent transition-colors hover:text-accent-link"
            >
              Check availability&nbsp;→
            </a>
          </p>
        </aside>
      </div>
    </section>
  );
}
