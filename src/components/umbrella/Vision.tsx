"use client";

import { Shield, CreditCard, Brain, Plug, Palette, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../animations";

const layers = [
  {
    icon: Shield,
    title: "Identity & SSO",
    desc: "Eén login voor alle producten. Teambeheer, rollen en permissies centraal geregeld.",
  },
  {
    icon: CreditCard,
    title: "Billing",
    desc: "Eén factuur, transparante per-seat pricing. Bundelkorting bij meerdere producten.",
  },
  {
    icon: Brain,
    title: "AI-Agent Engine",
    desc: "Gedeelde AI-agents die cross-product werken. Eén keer trainen, overal inzetten.",
  },
  {
    icon: Plug,
    title: "Integratiehub",
    desc: "Odoo, Teamleader, Billit, Excel en meer. Eén keer koppelen, alle producten profiteren.",
  },
  {
    icon: Palette,
    title: "Design System",
    desc: "Consistente ervaring over alle producten. Jouw team leert één interface.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Cross-product inzichten. Zie waar je bedrijf tijd verliest en waar AI het meest oplevert.",
  },
];

const advantages = [
  {
    stat: "1",
    label: "platform",
    desc: "In plaats van 5 losse tools die niet met elkaar praten",
  },
  {
    stat: "0",
    label: "integratie-kopzorgen",
    desc: "Data vloeit automatisch tussen producten — geen sync, geen CSV-export",
  },
  {
    stat: "15-20%",
    label: "bundelkorting",
    desc: "Combineer producten en betaal minder per seat dan afzonderlijk",
  },
];

export function Vision() {
  return (
    <section id="platform" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Platform</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Eén keer bouwen,{" "}
            <span className="text-bolt">overal gebruiken</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mt-4 text-sand-500 max-w-2xl mx-auto text-lg"
          >
            Alle Aifficient-producten draaien op dezelfde platformlaag. Dat betekent minder overhead, snellere releases en een consistente ervaring voor jouw team.
          </motion.p>
        </motion.div>

        {/* Platform layers grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {layers.map((l) => (
            <motion.div
              key={l.title}
              variants={fadeIn}
              className="card p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bolt/8 mb-4">
                <l.icon size={20} className="text-bolt" />
              </div>
              <h3 className="font-display text-base font-semibold text-sand-900 mb-2">
                {l.title}
              </h3>
              <p className="text-sm text-sand-500 leading-relaxed">{l.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          {advantages.map((a) => (
            <motion.div
              key={a.label}
              variants={fadeIn}
              className="text-center"
            >
              <div className="font-display text-4xl font-semibold text-bolt mb-1">
                {a.stat}
              </div>
              <div className="font-display text-sm font-semibold uppercase tracking-wider text-sand-900 mb-2">
                {a.label}
              </div>
              <p className="text-sm text-sand-500">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
