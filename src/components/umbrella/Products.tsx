"use client";

import { Mail, Settings, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../animations";
import Link from "next/link";

export function Products() {
  return (
    <section id="aanbod" className="relative py-28 px-6 surface-alt">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Wat we doen</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Software, automations{" "}
            <span className="text-bolt">& AI-agents</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mt-4 text-sand-500 max-w-2xl mx-auto text-lg"
          >
            Van een kant-en-klaar email platform tot volledige custom software — wij bouwen wat jouw bedrijf nodig heeft om slimmer te werken.
          </motion.p>
        </motion.div>

        {/* Aifficient Mail — featured card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="card p-8 sm:p-10 mb-6"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bolt/8 mb-5">
                <Mail size={24} className="text-bolt" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-bolt mb-1">
                SaaS product — Live
              </div>
              <h3 className="font-display text-2xl font-semibold text-sand-900 mb-3">
                Aifficient Mail
              </h3>
              <p className="text-sand-500 leading-relaxed mb-6">
                Een AI-email platform dat je inbox omzet in actie. Gedeelde inbox, AI-agents en een automation builder — klaar om te gebruiken, zonder implementatieproject.
              </p>
              <ul className="flex flex-col gap-2.5 mb-6">
                {[
                  "Gedeelde inbox met Outlook sync",
                  "AI-agents voor triage, auto-reply en data-extractie",
                  "Visuele automation builder",
                  "Vanaf €19/seat/maand",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-sand-600">
                    <svg className="w-4 h-4 text-bolt shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/mail"
                className="group flex items-center gap-2 text-sm font-semibold text-bolt hover:gap-3 transition-all"
              >
                Ontdek Aifficient Mail
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hidden md:flex rounded-2xl bg-sand-100 h-[280px] items-center justify-center text-sand-400 text-sm">
              Mail platform preview
            </div>
          </div>
        </motion.div>

        {/* Custom Automations + Custom Software */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          <motion.div variants={fadeIn} className="group card p-8 flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bolt/8 transition-colors group-hover:bg-bolt/15 mb-5">
              <Settings size={24} className="text-bolt" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-bolt mb-1">
              Done-for-you service
            </div>
            <h3 className="font-display text-xl font-semibold text-sand-900 mb-3">
              Custom Automations
            </h3>
            <p className="text-sand-500 leading-relaxed mb-6">
              Complexe workflows en integraties die we op maat bouwen. Van factuurverwerking tot multi-systeem orchestratie — wij bouwen het, jullie gebruiken het.
            </p>
            <ul className="mt-auto flex flex-col gap-2.5">
              {[
                "Op maat gebouwd voor jouw processen",
                "Integraties met Odoo, Teamleader, Billit, ...",
                "VLAIO subsidie mogelijk (tot 30%)",
                "Vanaf €500 per project",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-sand-600">
                  <svg className="w-4 h-4 text-bolt shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} className="group card p-8 flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bolt/8 transition-colors group-hover:bg-bolt/15 mb-5">
              <Code size={24} className="text-bolt" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-bolt mb-1">
              Maatwerk software
            </div>
            <h3 className="font-display text-xl font-semibold text-sand-900 mb-3">
              Custom Software & AI
            </h3>
            <p className="text-sand-500 leading-relaxed mb-6">
              Volledige applicaties en AI-oplossingen die los staan van Mail. Dashboards, interne tools, data pipelines — gebouwd met dezelfde technologie en kwaliteit.
            </p>
            <ul className="mt-auto flex flex-col gap-2.5">
              {[
                "Web apps, dashboards, interne tools",
                "AI-integratie in bestaande systemen",
                "Data pipelines en rapportage",
                "Prijs op maat van het project",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-sand-600">
                  <svg className="w-4 h-4 text-bolt shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
