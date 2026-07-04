import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ML Studios — We Build Things That Actually Work",
  description:
    "ML Studios is a product and software studio building websites, apps, and games. Scheduler, Resume, and TradeOrgs are live. Client projects welcome.",
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
