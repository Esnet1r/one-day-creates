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
    title: "One Day Creates | Mural Company Toronto — Large-Scale Murals & Public Art",
    description: "Toronto mural company specializing in large-scale murals, public art, brand activations, and painted environments for commercial, hospitality, and institutional clients.",
    keywords: ["mural company toronto", "mural artist toronto", "large scale mural", "public art toronto", "commercial mural toronto", "mural installation", "brand activation mural", "painted environments"],
    openGraph: {
        title: "One Day Creates | Mural Company Toronto",
        description: "Toronto mural company specializing in large-scale murals, public art, brand activations, and painted environments.",
        url: "https://onedaycreates.com",
        siteName: "One Day Creates",
        locale: "en_CA",
        type: "website",
        images: [{
            url: "https://onedaycreates.com/icon-512.png",
            width: 512,
            height: 512,
            alt: "One Day Creates Logo",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "One Day Creates | Mural Company Toronto",
        description: "Toronto mural company specializing in large-scale murals, public art, brand activations, and painted environments.",
    },
    other: {
        "geo.region": "CA-ON",
        "geo.placename": "Toronto",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "One Day Creates",
              "description": "Toronto-based mural and large-format art studio specializing in murals, public art, brand activations, and painted environments.",
              "url": "https://onedaycreates.com",
              "email": "1daycreates@gmail.com",
              "image": "https://onedaycreates.com/icon-512.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "areaServed": [
                { "@type": "City", "name": "Toronto" },
                { "@type": "State", "name": "Ontario" },
                { "@type": "Country", "name": "Canada" }
              ],
              "serviceType": ["Murals", "Public Art", "Brand Activations", "Large-Scale Installations", "Painted Environments", "Art Direction"],
              "foundingDate": "2016",
              "sameAs": [
                "https://instagram.com/onedaycreates",
                "https://tiktok.com/@onedaycreates"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
