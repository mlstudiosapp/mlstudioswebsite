import type { Product } from "@/lib/products";
import { StatusPill } from "@/components/ui/status-pill";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.href}
      {...(product.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex h-full flex-col rounded-xl border border-panel-border bg-panel p-6 transition-colors hover:border-text-tertiary"
    >
      <StatusPill
        label={product.statusLabel}
        tone={product.status === "live" ? "live" : "soon"}
      />

      <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
      <p className="mt-1 text-sm text-text-secondary">{product.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {product.description}
      </p>

      <span className="mt-5 text-sm text-accent">
        {product.external ? "Visit" : "Open"}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </a>
  );
}
