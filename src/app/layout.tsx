import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aifficient.be"),
  title: {
    default: "Aifficient | Jouw team kan het dubbele aan. Zonder aan te werven.",
    template: "%s | Aifficient",
  },
  description:
    "Versterk je team door repetitief werk te automatiseren met AI. Geen vervanging, wel meer focus op wat ertoe doet. Resultaat in 2-6 weken. Gratis adviesgesprek voor Belgische KMO's.",
  keywords: [
    "workflow automatisering",
    "AI automatisering België",
    "procesautomatisering KMO",
    "tijdsbesparing automatisering",
    "custom software België",
    "AI implementatie bedrijf",
    "werkprocessen automatiseren",
    "digitale transformatie KMO",
    "automatisering Vlaanderen",
    "AI consultancy België",
    "RPA België",
    "bedrijfsprocessen optimaliseren",
  ],
  authors: [{ name: "Aifficient" }],
  creator: "Aifficient",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://aifficient.be",
    siteName: "Aifficient",
    title: "Aifficient | Jouw team kan het dubbele aan. Zonder aan te werven.",
    description:
      "Meer winst uit je huidige team. Automatiseer repetitief werk met AI-systemen op maat van jouw KMO. Vraag je gratis adviesgesprek aan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aifficient - AI Automatisering voor KMO's in België",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aifficient | Jouw team kan het dubbele aan. Zonder aan te werven.",
    description:
      "Meer winst uit je huidige team. Automatiseer repetitief werk met AI-systemen op maat van jouw KMO.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aifficient.be",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${fraunces.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aifficient",
              url: "https://aifficient.be",
              description:
                "Versterk je team, automatiseer het saaie werk. AI-automatisering voor KMO's in België.",
              areaServed: {
                "@type": "Country",
                name: "Belgium",
              },
              serviceType: [
                "Workflow Automatisering",
                "AI Implementatie",
                "Custom Software Development",
                "Procesoptimalisatie",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
