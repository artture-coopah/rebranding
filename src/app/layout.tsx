import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { StyleDebugBar } from "@/components/StyleDebugBar";

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
    default: "Aifficient | De AI-laag boven elk KMO-bedrijf",
    template: "%s | Aifficient",
  },
  description:
    "Eén platform, meerdere AI-producten. Email, support, backoffice en automation — binnen één ecosysteem voor Belgische KMO's.",
  keywords: [
    "email automatisering KMO",
    "AI email platform",
    "shared inbox KMO",
    "gedeelde inbox bedrijf",
    "email AI agent",
    "automation builder email",
    "browser extension email",
    "AI automatisering België",
    "procesautomatisering KMO",
    "tijdsbesparing email",
    "inbox automatisering",
    "email workflow automatisering",
    "digitale transformatie KMO",
    "automatisering Vlaanderen",
  ],
  authors: [{ name: "Aifficient" }],
  creator: "Aifficient",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://aifficient.be",
    siteName: "Aifficient",
    title: "Aifficient Mail | Van inbox naar actie — AI email platform voor KMO's",
    description:
      "Elke e-mail wordt automatisch actie. Gedeelde inbox, AI-agents en automation builder voor Belgische KMO's. Vanaf €19/seat/maand.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aifficient Mail - AI email platform voor KMO's in België",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aifficient Mail | Van inbox naar actie — AI email platform voor KMO's",
    description:
      "Elke e-mail wordt automatisch actie. Gedeelde inbox, AI-agents en automation builder. Vanaf €19/seat/maand.",
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
                "Aifficient Mail — AI email platform dat e-mails automatisch leest, sorteert en verwerkt. Gedeelde inbox, AI-agents en automation builder voor Belgische KMO's.",
              areaServed: {
                "@type": "Country",
                name: "Belgium",
              },
              serviceType: [
                "AI Email Platform",
                "Gedeelde Inbox",
                "Email Automatisering",
                "AI Agents",
                "Automation Builder",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        {process.env.NODE_ENV === "development" && <StyleDebugBar />}
      </body>
    </html>
  );
}
