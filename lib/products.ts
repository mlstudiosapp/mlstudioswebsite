// Single source of truth for every live product and game in the studio.

export type ProductStatus = "live" | "development";

export interface Product {
  id: string;
  name: string;
  /** Two-letter monogram used as the card's visual anchor */
  monogram: string;
  tagline: string;
  description: string;
  /** Short platform/pricing line shown in the card footer */
  meta: string;
  status: ProductStatus;
  statusLabel: string;
  href: string;
  external: boolean;
}

export const products: Product[] = [
  {
    id: "scheduler",
    name: "Scheduler",
    monogram: "SC",
    tagline: "AI LinkedIn drafts you approve before posting.",
    description:
      "Set a cadence and review a queue written in your voice. Edit, reorder, or bin anything — nothing goes out until you say so.",
    meta: "Web · Free trial",
    status: "live",
    statusLabel: "Live",
    href: "https://scheduler.mlstudiosapp.com",
    external: true,
  },
  {
    id: "resume",
    name: "Resume",
    monogram: "RS",
    tagline: "An ATS-ready resume in minutes.",
    description:
      "Live preview, instant template switching, and AI-assisted bullet points. No watermarks, no trial limits.",
    meta: "Free · No sign-up",
    status: "live",
    statusLabel: "Live",
    href: "https://resume.mlstudiosapp.com",
    external: true,
  },
  {
    id: "tradeorgs",
    name: "TradeOrgs",
    monogram: "TO",
    tagline: "Understand how you really trade.",
    description:
      "Read-only analytics that connect to your broker and surface behavioral patterns — win rates, holding periods, habits. No execution, no advice.",
    meta: "Web · Journal",
    status: "live",
    statusLabel: "Live",
    href: "https://tradeorgs.mlstudiosapp.com",
    external: true,
  },
];

/** The product given the large card in the products section */
export const flagship = products[0];
export const supporting = products.slice(1);

export interface Game {
  id: string;
  name: string;
  tagline: string;
  meta: string;
  status: "live" | "coming-soon";
  statusLabel: string;
}

export const games: Game[] = [
  {
    id: "snake",
    name: "Snake",
    tagline:
      "One game at a time, finished properly. Input buffering, a tuned speed curve, and no menus in the way.",
    meta: "In development · Android first · Play Store",
    status: "coming-soon",
    statusLabel: "Coming soon",
  },
];

export const gamesHubUrl = "https://games.mlstudiosapp.com";
export const contactEmail = "admin@mlstudiosapp.com";
