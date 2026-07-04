import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ML Studios — Building Intelligent Products For The Next Decade",
  description:
    "ML Studios is an innovation lab building AI-powered products across automation, self-discovery, play, and protection. Scheduler is live. Arcana, Puzzle, and Insurance AI are in motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#05060A] text-[#F4F4F8]">{children}</body>
    </html>
  );
}
