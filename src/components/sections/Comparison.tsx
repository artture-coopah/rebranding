"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../ui/animations";

export function Comparison() {
  const rows = [
    { label: "Jaarkost", medewerker: "€50.000+", ai: "Een fractie daarvan" },
    { label: "Operationeel na", medewerker: "3 tot 6 maanden", ai: "2 tot 6 weken" },
    { label: "Schaalbaarheid", medewerker: "Lineair: meer werk = meer mensen", ai: "Onbeperkt: groeit met je bedrijf" },
    { label: "Beschikbaarheid", medewerker: "Kantooruren", ai: "24/7, ook in het weekend" },
    { label: "Ziektedagen", medewerker: "Gemiddeld 12 per jaar", ai: "Nul" },
    { label: "Opzegtermijn", medewerker: "Tot 13 weken", ai: "Geen" },
  ];

  return (
    <section className="relative py-28 px-6 surface-alt">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">De vergelijking</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Iemand aannemen of{" "}
            <span className="text-bolt">automatiseren?</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-sand-200 bg-white overflow-hidden shadow-sm"
        >
          {/* Headers */}
          <div className="grid grid-cols-3 border-b border-sand-200">
            <div className="p-5" />
            <div className="p-5 text-center border-l border-sand-200">
              <div className="font-display font-semibold text-sand-900 text-sm sm:text-base">Extra medewerker</div>
            </div>
            <div className="p-5 text-center border-l border-bolt/20 bg-bolt/[0.03]">
              <div className="font-display font-semibold text-bolt text-sm sm:text-base">Aifficient</div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-sand-100" : ""}`}>
              <div className="p-4 sm:p-5 text-sm font-medium text-sand-700">{row.label}</div>
              <div className="p-4 sm:p-5 text-center text-sm text-red-400 border-l border-sand-200">{row.medewerker}</div>
              <div className="p-4 sm:p-5 text-center text-sm font-medium text-bolt border-l border-bolt/20 bg-bolt/[0.03]">{row.ai}</div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center text-sm text-sand-400"
        >
          Automatisering vervangt geen mensen. Het vervangt de taken die niemand wil doen.
        </motion.p>

        {/* CTA Vergelijking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-bolt px-8 py-4 text-base font-semibold text-white transition-all hover:bg-bolt-dark hover:shadow-xl hover:shadow-bolt/15 hover:scale-[1.02]"
          >
            Plan je gratis adviesgesprek
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
