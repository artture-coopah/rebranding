"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeIn, stagger } from "../animations";

export function UmbrellaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Wat doet Aifficient precies?",
      a: "Aifficient bouwt AI-software en automatisering voor Belgische KMO\u2019s. Ons eerste product is Aifficient Mail \u2014 een AI-email platform. Daarnaast bouwen we custom automations en maatwerksoftware op maat van jouw bedrijf.",
    },
    {
      q: "Ik heb een specifieke oplossing nodig \u2014 kan dat?",
      a: "Zeker. Naast Aifficient Mail bouwen we ook custom automations en maatwerksoftware. Van complexe integraties tot volledige applicaties \u2014 we bekijken samen wat je nodig hebt en bouwen het op maat. Neem contact op voor een vrijblijvend gesprek.",
    },
    {
      q: "Werken jullie met onze bestaande tools?",
      a: "Ja. We integreren met Outlook, Microsoft Teams, Odoo, Teamleader, Billit, en elk systeem met een API. Geen migraties, geen gedoe. We bouwen bovenop wat je al hebt.",
    },
    {
      q: "Ik heb geen technische kennis. Is dat een probleem?",
      a: "Absoluut niet. Wij regelen alle techniek. Jij vertelt ons welke taken je team tijd kosten, wij lossen het op.",
    },
    {
      q: "Kan ik VLAIO-subsidie gebruiken?",
      a: "Ja. Vlaamse KMO\u2019s kunnen via de VLAIO kmo-portefeuille tot 45% subsidie krijgen op digitaliseringsprojecten. Aifficient komt hiervoor in aanmerking.",
    },
    {
      q: "Hoe zit het met gegevensbescherming en GDPR?",
      a: "We werken volledig GDPR-conform. Je data blijft binnen de EU en we bouwen bovenop je bestaande systemen zonder gegevens te verplaatsen. Je houdt altijd volledige controle over je data.",
    },
  ];

  return (
    <section id="faq" className="relative py-28 px-6 surface-alt">
      <div className="mx-auto max-w-3xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">FAQ</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Veelgestelde vragen
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-sand-100/50 transition-colors"
              >
                <span className="font-display font-medium pr-4 text-sand-900">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-sand-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sand-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
