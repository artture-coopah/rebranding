"use client";

import { Mail, Bot, Workflow, Puzzle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../ui/animations";

export function Services() {
  const pillars = [
    {
      icon: Mail,
      title: "Gedeelde Inbox",
      subtitle: "Alle e-mails op één plek",
      desc: "Eén overzichtelijke inbox voor je hele team. Outlook wordt automatisch gesynchroniseerd. Elke e-mail wordt geclassificeerd, gerouteerd en toegewezen. Zonder manueel werk.",
      features: [
        "Outlook synchronisatie",
        "Automatische classificatie & routing",
        "Team-toewijzing per e-mail",
        "Volledige e-mailgeschiedenis per klant",
      ],
    },
    {
      icon: Bot,
      title: "AI-Agents",
      subtitle: "Slim verwerken, niet alleen sorteren",
      desc: "AI-agents die je e-mails niet alleen lezen, maar ook begrijpen en verwerken. Van automatische triage en data-extractie tot slimme antwoorden. Jouw team controleert, de AI doet het voorwerk.",
      features: [
        "Automatische triage & prioritering",
        "Data-extractie uit e-mails en bijlagen",
        "AI-gegenereerde antwoorden",
        "Classificatie per type, urgentie en klant",
      ],
    },
    {
      icon: Workflow,
      title: "Automation Builder",
      subtitle: "Bouw je eigen workflows",
      desc: "Een visuele drag-and-drop builder waarmee je complete workflows opstelt. Van e-mail ontvangen tot actie uitvoeren, zonder code en volledig op maat van jouw processen.",
      features: [
        "Visuele drag-and-drop editor",
        "Triggers op e-mail, tijd of conditie",
        "Koppelingen met Odoo, Teamleader, Billit en meer",
        "Goedkeuringsflows en escalaties",
      ],
    },
  ];

  return (
    <section id="diensten" className="relative py-28 px-6 surface-alt">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Het platform</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Drie pijlers, één{" "}
            <span className="text-bolt">platform</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mt-4 text-sand-500 max-w-2xl mx-auto text-lg"
          >
            Aifficient Mail combineert een gedeelde inbox, AI-agents en een automation builder tot één platform dat je e-mails omzet in actie.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeIn}
              className="group card p-8 flex flex-col"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-bolt/8 transition-colors group-hover:bg-bolt/15">
                <p.icon size={24} className="text-bolt" />
              </div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-bolt">
                {p.subtitle}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-sand-900">
                {p.title}
              </h3>
              <p className="text-sand-500 leading-relaxed mb-6">{p.desc}</p>
              <ul className="mt-auto flex flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-sand-600">
                    <svg className="w-4 h-4 text-bolt shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Browser extension callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 card p-8 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bolt/8 shrink-0">
            <Puzzle size={28} className="text-bolt" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display text-lg font-semibold text-sand-900 mb-1">
              Browser Extension voor Outlook
            </h3>
            <p className="text-sand-500">
              Werk rechtstreeks vanuit je inbox. De Aifficient sidebar toont AI-classificatie, suggesties en snelle acties. Je blijft gewoon in Outlook.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {["outlook", "teams"].map((tool) => (
              <img key={tool} src={`/integrations/${tool}.svg`} alt={tool} className="w-6 h-6 opacity-60" />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#prijzen"
            className="group flex items-center gap-2 rounded-full border-2 border-bolt text-bolt bg-white px-8 py-3 text-sm font-semibold hover:bg-bolt hover:text-white transition-all shadow-sm"
          >
            Bekijk prijzen en start vandaag
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
