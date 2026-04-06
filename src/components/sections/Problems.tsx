"use client";

import { Clock, Users, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../ui/animations";

export function Problems() {
  const pains = [
    {
      icon: Clock,
      title: "Je beste mensen zitten vast in administratie",
      desc: "Data overtypen, facturen verwerken, rapporten samenstellen. Talent dat je liever inzet op verkoop, klanten of strategie.",
    },
    {
      icon: Users,
      title: "Iemand aannemen voor admin vreet je marge op",
      desc: "\u20AC50.000+/jaar voor werk dat niemand wil doen. Dat budget gaat beter naar je huidige team versterken.",
    },
    {
      icon: TrendingUp,
      title: "Je omzet groeit, maar je marge niet",
      desc: "Meer klanten betekent meer manueel werk. Zonder automatisering stijgen je kosten even snel als je omzet.",
    },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -left-20 top-1/3 w-64 h-64 rounded-full bg-bolt/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute -right-16 bottom-1/4 w-48 h-48 rounded-full bg-bolt/[0.04] blur-2xl pointer-events-none" />
      {/* Corner accent */}
      <svg className="absolute top-8 right-8 w-24 h-24 text-sand-200 opacity-40 pointer-events-none" viewBox="0 0 96 96" fill="none">
        <circle cx="48" cy="48" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="48" cy="48" r="28" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M48 20v56M20 48h56" stroke="currentColor" strokeWidth=".5" opacity=".5"/>
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Herkenbaar?</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Je mensen verdienen beter dan
            <br className="hidden sm:block" />{" "}
            <span className="text-bolt">eindeloos kopieerwerk</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pains.map((p) => (
            <motion.div key={p.title} variants={fadeIn} className="card p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-bolt/8">
                <p.icon size={24} className="text-bolt" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-sand-900">
                {p.title}
              </h3>
              <p className="text-sand-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual: Time drain comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border border-sand-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="text-xs font-medium uppercase tracking-wider text-sand-400 mb-6 text-center">
              Waar gaat de tijd van je team naartoe?
            </div>
            <div className="space-y-4">
              {[
                { label: "Administratie & data-invoer", pct: 35, color: "bg-red-400" },
                { label: "E-mails & opvolging", pct: 25, color: "bg-amber-400" },
                { label: "Rapportage & facturatie", pct: 20, color: "bg-orange-300" },
                { label: "Echt productief werk", pct: 20, color: "bg-green-500" },
              ].map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-sand-600">{item.label}</span>
                    <span className="font-medium text-sand-900">{item.pct}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-sand-100 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-sand-100 text-center">
              <p className="text-sm text-sand-500">
                <span className="text-red-500 font-semibold">80%</span> van de tijd gaat naar taken die een slim systeem kan overnemen
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Pijnpunten */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border-2 border-bolt text-bolt bg-white px-8 py-3 text-sm font-semibold hover:bg-bolt hover:text-white transition-all shadow-sm"
          >
            Wat kost manueel werk jouw bedrijf?
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
