"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../ui/animations";
import {
  MailIllustration,
  InvoiceIllustration,
  FollowUpIllustration,
  ReportIllustration,
} from "../ui/Illustrations";

export function Examples() {
  const examples = [
    {
      illustration: MailIllustration,
      task: "Klantvragen beantwoorden",
      name: "Sarah",
      role: "administratie",
      before: "10 uur",
      beforeUnit: "per week",
      after: "30 sec",
      afterUnit: "per mail",
      beforePct: 100,
      afterPct: 5,
      kicker: "helpt nu 3x meer klanten",
    },
    {
      illustration: InvoiceIllustration,
      task: "Facturen opmaken",
      name: "Tom",
      role: "zaakvoerder",
      before: "2 dagen",
      beforeUnit: "per maand",
      after: "2 uur",
      afterUnit: "per maand",
      beforePct: 100,
      afterPct: 12,
      kicker: "focust nu op klantrelaties",
    },
    {
      illustration: FollowUpIllustration,
      task: "Offertes opvolgen",
      name: "Lisa",
      role: "verkoop",
      before: "Gemiste",
      beforeUnit: "deals",
      after: "Nul",
      afterUnit: "gemiste kansen",
      beforePct: 100,
      afterPct: 0,
      kicker: "focust op het klantgesprek",
    },
    {
      illustration: ReportIllustration,
      task: "Maandrapport samenstellen",
      name: "An",
      role: "boekhouder",
      before: "4 uur",
      beforeUnit: "per maand",
      after: "0 min",
      afterUnit: "handwerk",
      beforePct: 100,
      afterPct: 0,
      kicker: "adviseert nu in plaats van kopi\u00ebren",
    },
  ];

  return (
    <section id="voorbeelden" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">In de praktijk</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Zelfde mensen,{" "}
            <span className="text-bolt">meer impact</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {examples.map((ex) => (
            <motion.div
              key={ex.task}
              variants={fadeIn}
              className="card p-6 sm:p-8"
            >
              {/* Illustration */}
              <div className="flex justify-center mb-4">
                <ex.illustration className="w-full max-w-[200px] h-auto" />
              </div>

              {/* Task label */}
              <div className="text-center mb-5">
                <div className="font-display font-semibold text-sand-900 text-sm sm:text-base">
                  {ex.task}
                </div>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 gap-3">
                {/* Before */}
                <div className="rounded-xl bg-red-50 border border-red-100 p-4 text-center">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-red-400 mb-2">
                    Vroeger
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-semibold text-red-500 leading-none">
                    {ex.before}
                  </div>
                  <div className="text-[11px] text-red-400 mt-1">{ex.beforeUnit}</div>
                  <div className="mt-3 h-1.5 rounded-full bg-red-100 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-red-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${ex.beforePct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                </div>

                {/* After */}
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-center">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 mb-2">
                    Nu
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-semibold text-emerald-600 leading-none">
                    {ex.after}
                  </div>
                  <div className="text-[11px] text-emerald-500 mt-1">{ex.afterUnit}</div>
                  <div className="mt-3 h-1.5 rounded-full bg-emerald-100 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-emerald-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.max(ex.afterPct, 2)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                </div>
              </div>

              {/* Kicker */}
              <div className="mt-5 text-center text-sm text-sand-500">
                <span className="text-bolt font-semibold">{ex.name}</span>{" "}
                {ex.kicker}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Voorbeelden */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border-2 border-bolt text-bolt bg-white px-8 py-3 text-sm font-semibold hover:bg-bolt hover:text-white transition-all shadow-sm"
          >
            Bereken jouw tijdsbesparing
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
