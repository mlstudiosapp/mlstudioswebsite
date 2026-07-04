// Single source of truth for every live product and game in the studio.

export type ProductStatus = "live" | "development";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  statusLabel: string;
  colors: {
    primary: string;
    secondary: string;
  };
  href: string;
  external: boolean;
}

export const products: Product[] = [
  {
    id: "scheduler",
    name: "Scheduler",
    tagline: "AI LinkedIn drafts you approve before posting",
    description:
      "Postwright drafts LinkedIn posts tailored to your role and expertise, then lets you review, approve, and schedule them. Nothing posts without you.",
    status: "live",
    statusLabel: "Live",
    colors: { primary: "#6C8CFF", secondary: "#3A4FCC" },
    href: "https://scheduler.mlstudiosapp.com",
    external: true,
  },
  {
    id: "resume",
    name: "Resume",
    tagline: "Build an ATS-ready resume in minutes — free, no sign-up",
    description:
      "A fast resume builder with live preview, instant template switching, and AI-powered bullet point enhancement. Free, no watermarks, no trial limits.",
    status: "live",
    statusLabel: "Live",
    colors: { primary: "#3DDC84", secondary: "#1E8F52" },
    href: "https://resume.mlstudiosapp.com",
    external: true,
  },
  {
    id: "tradeorgs",
    name: "TradeOrgs",
    tagline: "Understand how you really trade",
    description:
      "A read-only trading analytics platform that connects to your broker to surface behavioral insights — win rates, holding periods, trading patterns — plus educational technical signals. No trade execution, no investment advice.",
    status: "live",
    statusLabel: "Live",
    colors: { primary: "#F5C46B", secondary: "#B388FF" },
    href: "https://tradeorgs.mlstudiosapp.com",
    external: true,
  },
];

export interface Game {
  id: string;
  name: string;
  tagline: string;
  status: "live" | "coming-soon";
  statusLabel: string;
}

export const games: Game[] = [
  {
    id: "snake",
    name: "Snake",
    tagline: "A classic puzzle game, rebuilt for mobile.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
  },
];

export const gamesHubUrl = "https://games.mlstudiosapp.com";

export const studioStats = {
  totalProducts: products.length,
  live: products.filter((p) => p.status === "live").length,
};
