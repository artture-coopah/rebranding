"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="relative py-28 px-6 surface-alt">
      <div className="mx-auto max-w-6xl">
        {/* Client testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
