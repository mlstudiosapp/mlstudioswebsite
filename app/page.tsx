import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { ProductsGrid } from "@/components/sections/products-grid";
import { GamesSection } from "@/components/sections/games-section";
import { ClientWork } from "@/components/sections/client-work";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <ProductsGrid />
        <GamesSection />
        <ClientWork />
      </main>
      <Footer />
    </>
  );
}
