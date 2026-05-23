import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AITools.directory — Find the Best AI Tools for Business & Tech",
  description:
    "Discover and compare 200+ AI tools for writing, design, coding, productivity, video, and research. Updated weekly.",
  keywords: ["AI tools", "artificial intelligence", "productivity", "software"],
  openGraph: {
    title: "AITools.directory",
    description: "Find the best AI tools for your business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
