"use client";

import { ArrowRight, Search, PenTool, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: <Search size={22} />,
    title: "Analyse",
    desc: "We brengen je huidige proces in kaart — bottlenecks, manuele stappen en integraties.",
    color: {
      bg: "bg-bolt/8",
      border: "border-bolt/20",
      icon: "bg-bolt/12 text-bolt",
      number: "text-bolt/40",
      line: "var(--color-bolt)",
    },
  },
  {
    number: "02",
    icon: <PenTool size={22} />,
    title: "Ontwerp & bouw",
    desc: "We ontwerpen een automation op maat en bouwen deze met AI-agents, triggers en koppelingen.",
    color: {
      bg: "bg-emerald-500/8",
      border: "border-emerald-500/20",
      icon: "bg-emerald-500/12 text-emerald-600",
      number: "text-emerald-500/40",
      line: "#22c55e",
    },
  },
  {
    number: "03",
    icon: <Rocket size={22} />,
    title: "Oplevering",
    desc: "Testing, lancering en 30 dagen support. Jij draait, wij staan paraat.",
    color: {
      bg: "bg-purple-500/8",
      border: "border-purple-500/20",
      icon: "bg-purple-500/12 text-purple-600",
      number: "text-purple-500/40",
      line: "#8b5cf6",
    },
  },
];

export function CustomFlow() {
  return (
    <section className="relative py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Maatwerk</span>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mt-4">
            Heb je een{" "}
            <span className="text-bolt">complexe flow</span>?
          </h3>
          <p className="mt-3 text-sand-500 max-w-xl mx-auto">
            Sommige processen passen niet in een standaard template. We bouwen custom automations die perfect aansluiten op jouw workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting lines between cards (desktop only) */}
          <svg
            className="absolute top-1/2 left-0 w-full h-0 -translate-y-1/2 pointer-events-none hidden md:block"
            style={{ overflow: "visible" }}
          >
            {[0, 1].map((i) => (
              <motion.line
                key={i}
                x1={`${(i * 33.33) + 30}%`}
                y1="0"
                x2={`${((i + 1) * 33.33) + 3}%`}
                y2="0"
                stroke={steps[i].color.line}
                strokeWidth="2"
                strokeDasharray="6 4"
                strokeLinecap="round"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
              />
            ))}
          </svg>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.23, 1, 0.32, 1] }}
              className={`card p-8 border ${step.color.border} ${step.color.bg} relative`}
            >
              <span className={`absolute top-5 right-6 font-display text-4xl font-black ${step.color.number}`}>
                {step.number}
              </span>
              <div className={`w-11 h-11 rounded-xl ${step.color.icon} grid place-items-center mb-5`}>
                {step.icon}
              </div>
              <h4 className="font-display text-lg font-semibold text-sand-900 mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-sand-500 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-bolt px-6 py-3.5 text-sm font-semibold text-bolt hover:bg-bolt hover:text-white transition-all"
          >
            Vraag een vrijblijvende offerte aan
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
