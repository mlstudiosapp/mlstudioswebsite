import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { ProductsGrid } from "@/components/sections/products-grid";
import { GamesSection } from "@/components/sections/games-section";
import { ClientWork } from "@/components/sections/client-work";
import { Footer } from "@/components/sections/footer";
import { Marquee } from "@/components/ui/marquee";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WhatWeDo />
        <ProductsGrid />
        <GamesSection />
        <ClientWork />
      </main>
      <Footer />
    </>
  );
}
