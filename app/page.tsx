import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { GalaxySection } from "@/components/sections/galaxy-section";
import { InnovationLab } from "@/components/sections/innovation-lab";
import { EcosystemNetwork } from "@/components/sections/ecosystem-network";
import { FounderVision } from "@/components/sections/founder-vision";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <GalaxySection />
        <InnovationLab />
        <EcosystemNetwork />
        <FounderVision />
      </main>
      <Footer />
    </>
  );
}
