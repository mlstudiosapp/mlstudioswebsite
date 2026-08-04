import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { ProductsGrid } from "@/components/sections/products-grid";
import { GamesSection } from "@/components/sections/games-section";
import { ClientWork } from "@/components/sections/client-work";
import { Inquiry } from "@/components/sections/inquiry";
import { Footer } from "@/components/sections/footer";
import { Capabilities } from "@/components/ui/capabilities";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="absolute left-[-9999px] top-0 z-[60] rounded-lg border border-accent bg-panel px-4 py-3 text-sm focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Capabilities />
        <WhatWeDo />
        <ProductsGrid />
        <GamesSection />
        <ClientWork />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
