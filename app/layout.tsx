import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Display sans — used on image overlays in WorkGrid
const bebasNeue = Bebas_Neue({
    variable: "--font-bebas",
    subsets: ["latin"],
    weight: "400",
});

// Editorial serif — used on project detail page titles
const instrumentSerif = Instrument_Serif({
    variable: "--font-instrument",
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: "One Day Creates — Murals, Public Art & Large-Scale Visual Work",
    description: "Toronto-based mural and large-format art studio creating painted environments, public art, brand work, and site-specific installations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
