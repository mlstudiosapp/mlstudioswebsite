// Single source of truth for every product in the ecosystem.
//
// This config is deliberately render-agnostic: it describes WHAT each
// product is, not HOW it's drawn. The CSS/SVG orbital scene (ProductGalaxy)
// reads this shape today. A future React Three Fiber scene can read the
// exact same shape — swap the renderer, keep the data and the page.

export type ProductStatus = "live" | "development" | "mvp";

export interface ProductOrbit {
  /** Orbit radius as a percentage of the galaxy viewport (0–100). */
  radius: number;
  /** Starting angle in degrees, 0 = due east, clockwise. */
  angle: number;
  /** Full orbit duration in seconds. Slower = more "settled" / mature. */
  periodSeconds: number;
  /** Relative size multiplier for the node, 1 = baseline. */
  scale: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  statusLabel: string;
  /** Two-tone identity used across the node, glow, and detail panel. */
  colors: {
    primary: string;
    secondary: string;
  };
  /** Visual motif keyword — informs which node shape/icon renders. */
  motif: "satellite" | "crystal" | "cube" | "shield";
  href: string;
  /** External vs internal route — controls link behavior. */
  external: boolean;
  orbit: ProductOrbit;
}

export const products: Product[] = [
  {
    id: "scheduler",
    slug: "scheduler",
    name: "Scheduler",
    tagline: "AI-powered content scheduling & automation",
    description:
      "Plans, queues, and publishes social content on autopilot. The studio's first product, live and running daily for real users.",
    status: "live",
    statusLabel: "Live",
    colors: { primary: "#6C8CFF", secondary: "#3A4FCC" },
    motif: "satellite",
    href: "https://sucheduler.mlstudiosapp.com",
    external: true,
    orbit: { radius: 32, angle: -40, periodSeconds: 28, scale: 1 },
  },
  {
    id: "arcana",
    slug: "arcana",
    name: "Arcana",
    tagline: "AI tarot & self-discovery",
    description:
      "A modern reading experience that makes guidance personal — interpreting the cards through an AI that learns how you ask questions.",
    status: "development",
    statusLabel: "In Development",
    colors: { primary: "#B388FF", secondary: "#F5C46B" },
    motif: "crystal",
    href: "/arcana",
    external: false,
    orbit: { radius: 44, angle: 70, periodSeconds: 36, scale: 0.92 },
  },
  {
    id: "puzzle",
    slug: "puzzle",
    name: "Puzzle",
    tagline: "AI-adaptive cognitive puzzle game",
    description:
      "Challenges that reshape themselves around the player in real time — built to produce real cognitive growth, not just a high score.",
    status: "development",
    statusLabel: "In Development",
    colors: { primary: "#FF8A4C", secondary: "#4CE5D8" },
    motif: "cube",
    href: "/puzzle",
    external: false,
    orbit: { radius: 38, angle: 190, periodSeconds: 22, scale: 0.88 },
  },
  {
    id: "insurance-ai",
    slug: "insurance-ai",
    name: "Insurance AI",
    tagline: "Understand any policy in minutes",
    description:
      "Upload a policy document and get a plain-language breakdown of coverage, exclusions, and the clauses insurers hope you skip.",
    status: "mvp",
    statusLabel: "MVP",
    colors: { primary: "#3DDC84", secondary: "#1E8F52" },
    motif: "shield",
    href: "/insurance-ai",
    external: false,
    orbit: { radius: 26, angle: 250, periodSeconds: 18, scale: 0.85 },
  },
];

export const studioStats = {
  totalProducts: products.length,
  live: products.filter((p) => p.status === "live").length,
  inMotion: products.filter((p) => p.status !== "live").length,
};
