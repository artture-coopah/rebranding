"use client";

import { motion } from "framer-motion";
import { fadeIn, stagger } from "../ui/animations";

const stats = [
  {
    number: "1",
    label: "Product live",
    detail: "Aifficient Mail — klaar om te gebruiken",
  },
  {
    number: "\u221E",
    label: "Mogelijkheden",
    detail: "Volgende producten groeien uit klantbehoeften",
  },
  {
    number: "2",
    label: "Founders",
    detail: "Klein team, grote impact, korte lijnen",
  },
];

export function Vision() {
  return (
    <section id="visie" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Visie</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Eén merk,{" "}
            <span className="text-bolt">gebouwd om te groeien</span>
          </motion.h2>
        </motion.div>

        {/* Vision quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="relative px-6">
            <div className="absolute top-[-24px] left-[-8px] font-display text-8xl text-bolt/[0.08] leading-none select-none pointer-events-none">
              &ldquo;
            </div>
            <blockquote className="font-display text-xl sm:text-2xl text-sand-700 leading-relaxed italic">
              We starten met email omdat elke KMO daar dagelijks tijd verliest. Maar Aifficient stopt niet bij de inbox. Elk nieuw product dat we bouwen komt voort uit echte gesprekken met echte klanten — niet uit een roadmap op papier.
            </blockquote>
          </div>
          <p className="mt-6 text-sm text-sand-400">— De Aifficient-aanpak</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeIn} className="text-center">
              <div className="font-display text-4xl font-semibold text-bolt mb-1">
                {s.number}
              </div>
              <div className="font-display text-sm font-semibold uppercase tracking-wider text-sand-900 mb-2">
                {s.label}
              </div>
              <p className="text-sm text-sand-500">{s.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
