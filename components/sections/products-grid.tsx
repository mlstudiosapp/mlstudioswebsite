import { products } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProductsGrid() {
  return (
    <section
      id="products"
      className="mx-auto w-full max-w-5xl border-t border-panel-border px-6 py-20 sm:py-24"
    >
      <SectionHeading
        label="Products"
        title="Software we ship and run."
        body="Live products, built and operated by ML Studios — each one solving a real, repetitive problem."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
