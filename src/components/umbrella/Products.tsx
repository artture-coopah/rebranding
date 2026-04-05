"use client";

import { Mail, Headphones, Settings, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../animations";
import Link from "next/link";

const products = [
  {
    icon: Mail,
    name: "Aifficient Mail",
    status: "Live",
    statusColor: "bg-green-100 text-green-700",
    desc: "Email management, AI-agents en een automation builder in één platform. Jouw inbox wordt een machine die e-mails automatisch omzet in actie.",
    features: [
      "Gedeelde inbox met Gmail & Outlook sync",
      "AI-agents voor triage, auto-reply en data-extractie",
      "Visuele automation builder",
      "Browser extensie",
    ],
    href: "/mail",
    cta: "Ontdek Aifficient Mail",
  },
  {
    icon: Headphones,
    name: "Aifficient Service",
    status: "Q4 2026",
    statusColor: "bg-sand-100 text-sand-600",
    desc: "AI-gestuurd ticketingplatform voor KMO-support en IT-helpdesk. Van email naar ticket, met SLA-tracking en kennisbank.",
    features: [
      "Email-naar-ticket conversie",
      "AI-triage en prioritering",
      "SLA-tracking en escalaties",
      "Gedeelde kennisbank",
    ],
    href: null,
    cta: null,
  },
  {
    icon: Settings,
    name: "Aifficient Ops",
    status: "Q1 2027",
    statusColor: "bg-sand-100 text-sand-600",
    desc: "Backoffice- en finance-automatisering. Factuurverwerking, AR/AP-flows en boekhoudkoppelingen — automatisch en foutloos.",
    features: [
      "Factuur- en PO-intake",
      "AR/AP automatisering",
      "Boekhoudkoppelingen",
      "Goedkeuringsflows",
    ],
    href: null,
    cta: null,
  },
  {
    icon: TrendingUp,
    name: "Aifficient Sales Assist",
    status: "In evaluatie",
    statusColor: "bg-sand-100 text-sand-600",
    desc: "Light CRM en offertebeheer. Email-gestuurde opvolgflows, templates en pipeline-overzicht — zonder de complexiteit van een volwaardig CRM.",
    features: [
      "Email + offerte-templates",
      "Opvolgflows en reminders",
      "Pipeline-overzicht",
      "CRM light",
    ],
    href: null,
    cta: null,
  },
];

export function Products() {
  return (
    <section id="producten" className="relative py-28 px-6 surface-alt">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Producten</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Eén ecosysteem,{" "}
            <span className="text-bolt">meerdere producten</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mt-4 text-sand-500 max-w-2xl mx-auto text-lg"
          >
            Wat concurrenten apart verkopen — email, support, backoffice en automation — zit bij Aifficient in één platform met gedeelde data, AI en billing.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {products.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeIn}
              className="group card p-8 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bolt/8 transition-colors group-hover:bg-bolt/15">
                  <p.icon size={24} className="text-bolt" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-sand-900">
                      {p.name}
                    </h3>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${p.statusColor}`}>
                      {p.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sand-500 leading-relaxed mb-6">{p.desc}</p>

              <ul className="flex flex-col gap-2.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-sand-600">
                    <svg className="w-4 h-4 text-bolt shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {p.href && (
                <div className="mt-auto">
                  <Link
                    href={p.href}
                    className="group/link flex items-center gap-2 text-sm font-semibold text-bolt hover:gap-3 transition-all"
                  >
                    {p.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Suite callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 card p-8 text-center"
        >
          <h3 className="font-display text-lg font-semibold text-sand-900 mb-2">
            Aifficient One — de volledige suite
          </h3>
          <p className="text-sand-500 max-w-2xl mx-auto">
            Combineer meerdere producten onder één login en facturatie. Gedeelde AI-agents, integraties en analytics over je hele bedrijf. Bundel 2+ producten en krijg 15-20% korting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
