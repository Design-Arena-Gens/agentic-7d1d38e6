import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Prism — Intelligent AI Photo Sharing",
  description:
    "Prism is the intelligent AI-driven platform that transforms photo sharing into a cinematic experience."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
