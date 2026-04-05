"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "./animations";

export function Testimonials() {
  const results = [
    {
      metric: "2 dagen \u2192 2 uur",
      context: "Een admin-team dat 2 dagen per maand verliest aan facturen opmaken, kan die tijd terugwinnen voor klantenrelaties en proactieve opvolging.",
      category: "Voorbeeld \u2014 Logistiek",
      accent: "border-l-bolt",
    },
    {
      metric: "\u20AC50K/jaar bespaard",
      context: "In plaats van iemand aan te nemen voor admin, kan een KMO investeren in opleiding en groei van het bestaande team.",
      category: "Voorbeeld \u2014 Dienstverlening",
      accent: "border-l-bolt-light",
    },
    {
      metric: "3x snellere respons",
      context: "AI categoriseert en stelt antwoorden voor, het team controleert en verstuurt. Sneller reageren met een persoonlijke toets.",
      category: "Voorbeeld \u2014 Klantenservice",
      accent: "border-l-amber-400",
    },
    {
      metric: "80% minder offertetijd",
      context: "De calculator doet het voorwerk, de projectleider focust op het klantgesprek. Betere offertes, sneller verstuurd.",
      category: "Voorbeeld \u2014 Bouw",
      accent: "border-l-green-500",
    },
  ];

  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Verwachte resultaten</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Wat automatisering{" "}
            <span className="text-bolt">concreet kan opleveren</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mt-4 text-sand-500 max-w-2xl mx-auto"
          >
            Berekende ROI op basis van typische KMO-processen. Jouw resultaat hangt af van je huidige werkwijze.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {results.map((r) => (
            <motion.div
              key={r.metric}
              variants={fadeIn}
              className={`card p-8 flex flex-col justify-between relative overflow-hidden border-l-4 ${r.accent}`}
            >
              {/* Decorative quote mark */}
              <div className="absolute top-4 right-4 font-display text-6xl text-bolt/[0.06] leading-none select-none pointer-events-none">
                &ldquo;
              </div>
              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-bolt">
                  {r.category}
                </div>
                <div className="font-display text-3xl sm:text-4xl font-semibold text-sand-900 mb-4">
                  {r.metric}
                </div>
                <p className="text-sand-500 leading-relaxed">
                  {r.context}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="card p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-6 right-8 font-display text-8xl text-bolt/[0.06] leading-none select-none pointer-events-none">
              &ldquo;
            </div>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-bolt/10 flex items-center justify-center">
                <span className="font-display font-semibold text-bolt text-sm">JL</span>
              </div>
              <div>
                <div className="font-display font-semibold text-sand-900">
                  Erwin — The Jewel and The Lake
                </div>
                <div className="text-sm text-sand-500">
                  Adults-only boutique B&B · 9,3/10 Booking.com · Jinja, Uganda
                </div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mb-8">
              <p className="font-display text-lg sm:text-xl text-sand-800 leading-relaxed">
                We begonnen dit hotel omdat we van gastvrijheid houden, niet van inbox management. Aifficient geeft ons die tijd terug. Gasten voelen zich welkom nog voor ze aankomen — en wij kunnen focussen op wat we het liefst doen.
              </p>
            </blockquote>

            {/* What we did */}
            <div className="border-t border-sand-200 pt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-bolt mb-4">
                Wat wij deden
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl bg-sand-100 p-4">
                  <div className="font-display text-2xl font-semibold text-sand-900 mb-1">24/7</div>
                  <div className="text-sm text-sand-600 leading-snug">
                    Boekingsaanvragen automatisch beantwoord — in vier talen, ook om 3 uur 's nachts
                  </div>
                </div>
                <div className="rounded-xl bg-sand-100 p-4">
                  <div className="font-display text-2xl font-semibold text-sand-900 mb-1">90%</div>
                  <div className="text-sm text-sand-600 leading-snug">
                    Minder tijd aan e-mails door volledige gastflow-automatisering
                  </div>
                </div>
                <div className="rounded-xl bg-sand-100 p-4">
                  <div className="font-display text-2xl font-semibold text-sand-900 mb-1">&lt;5 min</div>
                  <div className="text-sm text-sand-600 leading-snug">
                    Responstijd op boekingsaanvragen, ongeacht tijdzone of kanaal
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Link
                  href="/case-studies/horeca"
                  className="group flex items-center gap-2 text-sm font-semibold text-bolt hover:gap-3 transition-all"
                >
                  Lees de volledige case study
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
