import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies-data";
import { CaseStudyGrid } from "@/components/case-study-grid";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — AI Automatisering in de Praktijk",
  description:
    "Ontdek hoe bedrijven in transport, zorg, horeca, SaaS en bouw tijd en geld besparen met AI-automatisering. Concrete resultaten en succesverhalen van Belgische KMO's.",
  keywords: [
    "case studies AI automatisering",
    "succesverhalen automatisering België",
    "AI resultaten KMO",
    "automatisering voorbeelden transport zorg horeca bouw SaaS",
    "AI case studies Vlaanderen",
    "procesautomatisering resultaten",
    "ROI AI automatisering",
  ],
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://aifficient.be/case-studies",
    title: "Case Studies — AI Automatisering in de Praktijk | Aifficient",
    description:
      "Van 90% minder e-mailtijd tot €13 bespaard per zending. Concrete resultaten van AI-automatisering in 5 sectoren.",
  },
  alternates: {
    canonical: "https://aifficient.be/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />

      <main>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://aifficient.be",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Case Studies",
                  item: "https://aifficient.be/case-studies",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Case Studies — AI Automatisering in de Praktijk",
              description:
                "Ontdek hoe bedrijven in transport, zorg, horeca, SaaS en bouw tijd en geld besparen met AI-automatisering.",
              url: "https://aifficient.be/case-studies",
              hasPart: caseStudies.map((cs) => ({
                "@type": "Article",
                name: cs.seoTitle,
                url: `https://aifficient.be/case-studies/${cs.sector}`,
              })),
            }),
          }}
        />

        {/* Hero */}
        <section className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-sm text-sand-400">
                <li>
                  <Link
                    href="/"
                    className="hover:text-sand-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-sand-900 font-medium">Case Studies</li>
              </ol>
            </nav>
            <div className="flex justify-center mb-4">
              <span className="section-label">Case Studies</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
              Ontdek wat AI-automatisering{" "}
              <span className="text-bolt">concreet oplevert</span>
            </h1>
            <p className="text-lg text-sand-500 max-w-2xl mx-auto leading-relaxed">
              Van horeca tot bouwsector — bekijk hoe bedrijven repetitief werk
              automatiseren en hun team meer laten doen met minder inspanning.
            </p>
          </div>
        </section>

        {/* Case Study Cards with sector filters */}
        <CaseStudyGrid caseStudies={caseStudies} />

        {/* CTA */}
        <section className="py-20 px-6 surface-alt">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Benieuwd wat wij voor{" "}
              <span className="text-bolt">jouw sector</span> kunnen betekenen?
            </h2>
            <p className="text-sand-500 mb-8 max-w-xl mx-auto">
              Plan een gratis adviesgesprek en ontdek hoe AI-automatisering jouw
              team versterkt.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-bolt px-8 py-4 text-base font-semibold text-white transition-all hover:bg-bolt-dark hover:shadow-xl hover:shadow-bolt/20 group"
            >
              Gratis Adviesgesprek
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
