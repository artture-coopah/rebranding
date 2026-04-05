"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "./animations";

export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "19",
      description: "Voor zelfstandigen en kleine teams die hun inbox onder controle willen.",
      features: [
        "Gedeelde inbox (1 mailbox)",
        "AI-classificatie & triage",
        "Basis automation builder",
        "Gmail & Outlook sync",
        "Browser extension",
        "E-mail support",
      ],
      cta: "Start gratis proefperiode",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "49",
      description: "Voor KMO's die e-mailverwerking volledig willen automatiseren.",
      features: [
        "Alles van Starter",
        "Onbeperkt mailboxen",
        "AI-agents (auto-reply, extractie, routing)",
        "Geavanceerde automation builder",
        "Teamleader, Odoo, Billit integraties",
        "Goedkeuringsflows",
        "Prioritaire support",
      ],
      cta: "Start gratis proefperiode",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "89",
      description: "Voor bedrijven met complexe workflows en custom integraties.",
      features: [
        "Alles van Professional",
        "Custom AI-agents op maat",
        "Onbeperkte automations",
        "Custom integraties & API-toegang",
        "Dedicated onboarding",
        "SLA & telefonische support",
        "VLAIO-subsidie begeleiding",
      ],
      cta: "Plan een demo",
      highlighted: false,
    },
  ];

  return (
    <section id="prijzen" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Prijzen</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Eenvoudige prijzen,{" "}
            <span className="text-bolt">direct resultaat</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mt-4 text-sand-500 max-w-2xl mx-auto text-lg"
          >
            Per seat, per maand. Geen verborgen kosten. Start met een gratis proefperiode en schaal op wanneer je wil.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-6 items-stretch"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeIn}
              className={`card p-8 flex flex-col relative ${
                tier.highlighted
                  ? "border-bolt/30 ring-2 ring-bolt/10 shadow-lg shadow-bolt/5"
                  : ""
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-bolt px-4 py-1 text-xs font-semibold text-white">
                  Populairst
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-sand-900 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-sand-900">
                    &euro;{tier.price}
                  </span>
                  <span className="text-sand-500 text-sm">/seat/maand</span>
                </div>
                <p className="mt-3 text-sand-500 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-sand-600">
                    <Check size={16} className="text-bolt shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-bolt text-white hover:bg-bolt-dark hover:shadow-lg hover:shadow-bolt/15"
                    : "border-2 border-bolt text-bolt hover:bg-bolt hover:text-white"
                }`}
              >
                {tier.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom automations section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <span className="section-label">Maatwerk</span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mt-4">
              Custom automations{" "}
              <span className="text-bolt">op maat</span>
            </h3>
            <p className="mt-3 text-sand-500 max-w-xl mx-auto">
              Naast het platform bouwen we ook automations die perfect aansluiten op jouw processen. Analyse, implementatie, testing en 30 dagen support inbegrepen.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                label: "Simple",
                price: "€500 – €1.000",
                duration: "1–2 weken",
                example: "Eén email-to-action flow, bijv. factuur inbox → extractie → draft boeking",
              },
              {
                label: "Medium",
                price: "€1.000 – €2.500",
                duration: "2–4 weken",
                example: "Multi-step flow met 2-3 integraties, bijv. offerte pipeline",
              },
              {
                label: "Complex",
                price: "€2.500 – €5.000",
                duration: "4–8 weken",
                example: "Multi-agent + custom logic, bijv. volledige support workflow",
              },
            ].map((tier) => (
              <div key={tier.label} className="card p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-bolt mb-3">
                  {tier.label}
                </div>
                <div className="font-display text-xl font-bold text-sand-900 mb-1">
                  {tier.price}
                </div>
                <div className="text-sm text-sand-500 mb-4">
                  Doorlooptijd: {tier.duration}
                </div>
                <p className="text-sm text-sand-500 leading-relaxed">
                  {tier.example}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="group flex items-center gap-2 text-sm font-semibold text-bolt hover:underline"
            >
              Vraag een vrijblijvende offerte aan
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* VLAIO callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-sand-500">
            <strong className="text-sand-700">VLAIO-subsidie:</strong> Vlaamse KMO&apos;s kunnen tot 45% subsidie krijgen op digitaliseringsprojecten.{" "}
            <a href="#faq" className="text-bolt hover:underline">Meer info in de FAQ</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
