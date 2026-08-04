import { Fragment } from "react";
import type { Product } from "@/lib/products";

const externalProps = { target: "_blank", rel: "noopener noreferrer" };

function LiveBadge() {
  return (
    <span className="label inline-flex items-center gap-2 text-status-live">
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-status-live" />
      Live
    </span>
  );
}

/**
 * A CSS-drawn stand-in for the product UI — no image files, no screenshots
 * to keep in sync. Purely decorative, so it is hidden from assistive tech.
 */
function QueueMock() {
  return (
    <div
      aria-hidden="true"
      className="mt-[clamp(20px,2.4vw,28px)] grid gap-3.5 rounded-[10px] border border-panel-border bg-sunken p-4"
    >
      <div className="flex items-center gap-3.5">
        <span className="label text-text-tertiary">Draft queue</span>
        <span className="h-px flex-1 bg-panel-border" />
        <span className="label text-text-tertiary">Thu 9:00</span>
      </div>

      {[
        { line1: "86%", line2: "62%", filled: false },
        { line1: "73%", line2: "48%", filled: true },
      ].map((row, i) => (
        <Fragment key={i}>
          {i > 0 && <div className="h-px bg-wire-rule" />}
          <div className="flex items-start gap-3">
            <span className="h-7 w-7 flex-none rounded-md border border-panel-border bg-panel" />
            <span className="grid min-w-0 flex-1 gap-[7px]">
              <span
                className="block h-[9px] rounded-[3px] bg-wire-strong"
                style={{ width: row.line1 }}
              />
              <span
                className="block h-[9px] rounded-[3px] bg-wire-weak"
                style={{ width: row.line2 }}
              />
            </span>
            <span
              className={`h-[22px] w-14 flex-none rounded-md ${
                row.filled ? "bg-wire-strong" : "border border-panel-border"
              }`}
            />
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export function FlagshipCard({ product }: { product: Product }) {
  return (
    <article className="flex min-w-0 flex-1 basis-[540px] flex-col rounded-xl border border-panel-border bg-panel p-[clamp(20px,2.4vw,28px)] transition-colors hover:border-border-strong">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
        <LiveBadge />
        <span className="label text-text-secondary">Flagship</span>
      </div>

      <h3 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
        {product.name}
      </h3>
      <p className="mt-2.5 text-pretty text-[clamp(1.0625rem,1.5vw,1.25rem)] leading-[1.4]">
        {product.tagline}
      </p>
      <p className="mt-3.5 max-w-[52ch] text-pretty text-base leading-[1.65] text-text-secondary">
        {product.description}
      </p>

      <QueueMock />

      <div className="mt-[clamp(20px,2.4vw,28px)] flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-panel-border pt-[18px]">
        <span className="text-[13px] uppercase tracking-[0.06em] text-text-secondary">
          {product.meta}
        </span>
        <a
          href={product.href}
          {...(product.external ? externalProps : {})}
          className="ml-auto inline-flex min-h-11 items-center text-[15px] font-semibold text-accent transition-colors hover:text-accent-link"
        >
          Visit {product.name}&nbsp;→
        </a>
      </div>
    </article>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-1 flex-col rounded-xl border border-panel-border bg-panel p-[clamp(20px,2.4vw,24px)] transition-colors hover:border-border-strong">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="grid h-12 w-12 flex-none place-items-center rounded-[10px] border border-panel-border bg-sunken text-[15px] font-semibold tracking-[0.06em] text-text-secondary"
        >
          {product.monogram}
        </span>
        <div className="min-w-0 flex-1">
          <LiveBadge />
          <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.02em]">
            {product.name}
          </h3>
          <p className="mt-2 text-pretty text-base leading-[1.55] text-text-secondary">
            {product.tagline}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-panel-border pt-4">
        <span className="text-[13px] uppercase tracking-[0.06em] text-text-secondary">
          {product.meta}
        </span>
        <a
          href={product.href}
          {...(product.external ? externalProps : {})}
          className="ml-auto inline-flex min-h-11 items-center text-[15px] font-semibold text-accent transition-colors hover:text-accent-link"
        >
          Visit&nbsp;→
        </a>
      </div>
    </article>
  );
}
