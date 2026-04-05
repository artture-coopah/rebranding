import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { caseStudies, getCaseStudy } from "@/lib/case-studies-data";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ sector: cs.sector }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector } = await params;
  const cs = getCaseStudy(sector);
  if (!cs) return {};

  return {
    title: cs.seoTitle,
    description: cs.seoDescription,
    keywords: cs.seoKeywords,
    openGraph: {
      type: "article",
      locale: "nl_BE",
      url: `https://aifficient.be/case-studies/${sector}`,
      title: cs.seoTitle,
      description: cs.seoDescription,
      siteName: "Aifficient",
      images: [
        {
          url: cs.heroImage,
          width: 1200,
          height: 630,
          alt: cs.heroImageAlt,
        },
      ],
    },
    alternates: {
      canonical: `https://aifficient.be/case-studies/${sector}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector } = await params;
  const cs = getCaseStudy(sector);
  if (!cs) notFound();

  const related = caseStudies.filter((c) => c.sector !== sector).slice(0, 2);

  return (
    <>
      <Nav />

      <main>
        {/* JSON-LD: Breadcrumbs */}
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: cs.sectorName,
                  item: `https://aifficient.be/case-studies/${sector}`,
                },
              ],
            }),
          }}
        />

        {/* JSON-LD: Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: cs.heroTitle,
              description: cs.seoDescription,
              image: `https://aifficient.be${cs.heroImage}`,
              datePublished: "2025-01-15",
              dateModified: "2025-03-01",
              author: {
                "@type": "Organization",
                name: "Aifficient",
                url: "https://aifficient.be",
              },
              publisher: {
                "@type": "Organization",
                name: "Aifficient",
                url: "https://aifficient.be",
                logo: {
                  "@type": "ImageObject",
                  url: "https://aifficient.be/image.png",
                },
              },
              mainEntityOfPage: `https://aifficient.be/case-studies/${sector}`,
            }),
          }}
        />

        {/* JSON-LD: FAQ */}
        {cs.faq.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: cs.faq.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.answer,
                  },
                })),
              }),
            }}
          />
        )}

        {/* Hero with image */}
        <section className="relative pt-24 pb-0">
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <Image
              src={cs.heroImage}
              alt={cs.heroImageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sand-950/60 via-sand-950/40 to-sand-50" />
          </div>
        </section>

        <section className="px-6 pb-16 -mt-20 relative z-10">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-sand-400">
                <li>
                  <Link
                    href="/"
                    className="hover:text-sand-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-sand-600 transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>/</li>
                <li className="text-sand-900 font-medium">
                  {cs.sectorName}
                </li>
              </ol>
            </nav>

            <div className="flex justify-center mb-4">
              <span className="section-label">{cs.sectorName}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-center mb-6">
              {cs.heroTitle}
            </h1>
            <p className="text-lg text-sand-500 text-center max-w-3xl mx-auto leading-relaxed mb-10">
              {cs.heroSubtitle}
            </p>

            {/* Key metrics */}
            <div className="grid sm:grid-cols-3 gap-4">
              {cs.results.map((r) => (
                <div key={r.metric} className="card p-6 text-center">
                  <div className="font-display text-3xl sm:text-4xl font-semibold text-bolt mb-2">
                    {r.metric}
                  </div>
                  <div className="text-sm text-sand-500 leading-snug">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client info bar */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4 rounded-2xl border border-sand-200 bg-white p-6">
              <div className="w-14 h-14 rounded-full bg-bolt/10 flex items-center justify-center shrink-0">
                <span className="font-display font-semibold text-bolt text-lg">
                  {cs.clientInitials}
                </span>
              </div>
              <div>
                <div className="font-display font-semibold text-sand-900 text-lg">
                  {cs.clientName}
                </div>
                <div className="text-sm text-sand-500">
                  {cs.clientDescription}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-20 px-6 surface-alt">
          <div className="mx-auto max-w-4xl">
            <div className="flex justify-center mb-4">
              <span className="section-label">De uitdaging</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">
              Wat was het probleem?
            </h2>
            <p className="text-sand-600 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              {cs.challenge}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {cs.challengeBullets.map((bullet) => (
                <div
                  key={bullet}
                  className="card p-5 flex gap-3 items-start border-l-4 border-l-red-300"
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-400 text-xs font-bold">!</span>
                  </div>
                  <p className="text-sm text-sand-600 leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex justify-center mb-4">
              <span className="section-label">Onze aanpak</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-4">
              Wat heeft Aifficient gedaan?
            </h2>
            <p className="text-sand-500 leading-relaxed text-center max-w-3xl mx-auto mb-12">
              {cs.solution}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {cs.solutionSteps.map((step, i) => (
                <div key={step.title} className="card p-6 relative">
                  <div className="w-8 h-8 rounded-full bg-bolt/10 flex items-center justify-center mb-4">
                    <span className="font-display font-semibold text-bolt text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-sand-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-sand-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 px-6 surface-alt">
          <div className="mx-auto max-w-4xl">
            <div className="flex justify-center mb-4">
              <span className="section-label">Het resultaat</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-10">
              Concrete resultaten
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {cs.results.map((r) => (
                <div
                  key={r.metric}
                  className="card p-8 text-center border-t-4 border-t-bolt"
                >
                  <div className="w-10 h-10 rounded-full bg-bolt/10 flex items-center justify-center mx-auto mb-4">
                    <Check size={20} className="text-bolt" />
                  </div>
                  <div className="font-display text-3xl font-semibold text-sand-900 mb-2">
                    {r.metric}
                  </div>
                  <p className="text-sm text-sand-500 leading-snug">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <div className="card p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-6 right-8 font-display text-8xl text-bolt/[0.06] leading-none select-none pointer-events-none">
                &ldquo;
              </div>
              <blockquote>
                <p className="font-display text-lg sm:text-xl text-sand-800 leading-relaxed mb-6">
                  {cs.testimonialQuote}
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-bolt/10 flex items-center justify-center">
                    <span className="font-display font-semibold text-bolt text-sm">
                      {cs.clientInitials}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sand-900 text-sm">
                      {cs.testimonialAuthor}
                    </div>
                    <div className="text-xs text-sand-500">
                      {cs.testimonialRole}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {cs.faq.length > 0 && (
          <section className="py-20 px-6 surface-alt">
            <div className="mx-auto max-w-3xl">
              <div className="flex justify-center mb-4">
                <span className="section-label">Veelgestelde vragen</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-10">
                FAQ over AI in de{" "}
                <span className="text-bolt">{cs.sectorName.toLowerCase()}</span>
              </h2>
              <div className="space-y-4">
                {cs.faq.map((f) => (
                  <details
                    key={f.question}
                    className="card p-6 group"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-display font-semibold text-sand-900 text-sm sm:text-base pr-4">
                        {f.question}
                      </h3>
                      <ChevronDown
                        size={18}
                        className="text-sand-400 shrink-0 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <p className="mt-4 text-sm text-sand-500 leading-relaxed">
                      {f.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related case studies */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-10">
              Meer <span className="text-bolt">succesverhalen</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.sector}
                  href={`/case-studies/${r.sector}`}
                  className="group card overflow-hidden flex flex-col"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={r.heroImage}
                      alt={r.heroImageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sand-950/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                        {r.sectorName}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-sand-900 mb-2 leading-snug">
                        {r.heroTitle}
                      </h3>
                      <div className="font-display text-2xl font-semibold text-bolt mb-3">
                        {r.overviewMetric}
                      </div>
                      <p className="text-sand-500 text-sm leading-relaxed mb-4">
                        {r.overviewDescription}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-bolt group-hover:gap-3 transition-all">
                      Lees meer
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 surface-alt">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Klaar om hetzelfde te bereiken{" "}
              <span className="text-bolt">voor jouw bedrijf?</span>
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
