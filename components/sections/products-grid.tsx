import { flagship, supporting } from "@/lib/products";
import { FlagshipCard, ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProductsGrid() {
  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="shell border-t border-panel-border py-[clamp(56px,7vw,96px)]"
    >
      <SectionHeading
        id="products-title"
        label="Products"
        title="Software we ship and run."
        body="Three products in production. Each one started as something we needed and couldn't find."
      />

      <div className="mt-[clamp(36px,4.5vw,56px)] flex flex-wrap items-stretch gap-[clamp(20px,2.4vw,28px)]">
        <FlagshipCard product={flagship} />

        <div className="flex min-w-0 max-w-[440px] flex-1 basis-80 flex-col gap-[clamp(20px,2.4vw,28px)]">
          {supporting.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
