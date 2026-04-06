"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../ui/animations";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Voor zelfstandigen en kleine teams die hun inbox onder controle willen.",
      features: [
        "Gedeelde inbox (1 mailbox)",
        "AI-classificatie & triage",
        "Basis automation builder",
        "Outlook sync",
        "Browser extension",
        "E-mail support",
      ],
      cta: "Start gratis proefperiode",
      highlighted: false,
    },
    {
      name: "Professional",
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
            <span className="section-label">Plannen</span>
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
            Kies het plan dat bij jouw team past. Geen verborgen kosten. Start met een gratis proefperiode en schaal op wanneer je wil.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeIn}
              className={`card p-8 flex flex-col relative ${
                plan.highlighted
                  ? "border-bolt/30 ring-2 ring-bolt/10 shadow-lg shadow-bolt/5"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-bolt px-4 py-1 text-xs font-semibold text-white">
                  Populairst
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-sand-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sand-500 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-sand-600">
                    <Check size={16} className="text-bolt shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-bolt text-white hover:bg-bolt-dark hover:shadow-lg hover:shadow-bolt/15"
                    : "border-2 border-bolt text-bolt hover:bg-bolt hover:text-white"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>

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
