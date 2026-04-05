"use client";

import { Heart, Eye, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../animations";

const chapters = [
  {
    icon: Heart,
    period: "Het begin",
    title: "Vrijwilligerswerk",
    text: "Het begon als vrijwilligerswerk — websites bouwen, systemen opzetten en processen digitaliseren voor kleine organisaties.",
  },
  {
    icon: Eye,
    title: "Het inzicht",
    period: "De eye-opener",
    text: "Al snel zagen we hoeveel tijd vrijwilligers en kleine teams kwijt zijn aan administratie, e-mails en repetitief digitaal werk. Uren die niet naar hun eigenlijke missie gaan. Dat probleem is niet uniek voor non-profits — elke KMO worstelt ermee.",
  },
  {
    icon: Rocket,
    period: "Vandaag",
    title: "Aifficient",
    text: "Die frustratie werd de drijfveer. We zijn begonnen met het bouwen van een platform dat precies die verloren tijd teruggeeft — te beginnen bij de inbox, met AI die het zware werk overneemt.",
  },
];

export function Story() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Ons verhaal</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Ontstaan uit{" "}
            <span className="text-bolt">de praktijk</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-sand-200 hidden sm:block" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-12"
          >
            {chapters.map((ch) => (
              <motion.div
                key={ch.title}
                variants={fadeIn}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Icon dot */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sand-50 border-2 border-sand-200">
                  <ch.icon size={20} className="text-bolt" />
                </div>

                {/* Content */}
                <div className="pt-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-bolt mb-1">
                    {ch.period}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-sand-900 mb-2">
                    {ch.title}
                  </h3>
                  <p className="text-sand-500 leading-relaxed">
                    {ch.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
