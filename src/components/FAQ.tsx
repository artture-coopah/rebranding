"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeIn, stagger } from "./animations";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Hoe snel zie ik resultaat?",
      a: "Eerste pilot live in 2 weken. Volledig uitgerold in 2 tot 6 weken. Je ziet de impact op je werkdruk en je cijfers binnen de eerste maand.",
    },
    {
      q: "Werken jullie met onze bestaande tools?",
      a: "Ja. We integreren met Outlook, Microsoft Teams, Odoo, Teamleader, Billit, en elk systeem met een API. Geen migraties, geen gedoe. We bouwen bovenop wat je al hebt.",
    },
    {
      q: "Ik heb geen technische kennis. Is dat een probleem?",
      a: "Absoluut niet. Wij regelen alle techniek. Jij vertelt ons welke taken je team tijd kosten, wij lossen het op. Plus volledige training zodat je team zelfstandig verder kan.",
    },
    {
      q: "Vervangen jullie mijn medewerkers?",
      a: "Absoluut niet, en dat is ook niet ons doel. Wij versterken je team. AI neemt de taken over die niemand graag doet: kopieerwerk, opvolging, rapportage. Je mensen krijgen hun tijd terug voor het werk waar ze goed in zijn en energie van krijgen. Het resultaat: een gemotiveerder team dat meer bereikt.",
    },
    {
      q: "Hoeveel kost Aifficient Mail?",
      a: "Aifficient Mail start vanaf \u20ac19 per seat per maand (Starter). Het Professional-plan kost \u20ac49/seat/maand en bevat onbeperkt mailboxen, AI-agents en geavanceerde automations. Enterprise is \u20ac89/seat/maand met custom integraties en dedicated support. Je kan starten met een gratis proefperiode.",
    },
    {
      q: "Is dit ook relevant voor een klein bedrijf?",
      a: "Juist voor kleinere bedrijven. Met minder mensen telt elke verloren uur dubbel. E\u00e9n automatisering kan het verschil maken tussen breakeven en winstgevend draaien. Ons Starter-plan is specifiek ontworpen voor zelfstandigen en kleine teams.",
    },
    {
      q: "Kan ik VLAIO-subsidie gebruiken voor Aifficient?",
      a: "Ja. Vlaamse KMO\u2019s kunnen via de VLAIO kmo-portefeuille tot 45% subsidie krijgen op digitaliseringsprojecten. Aifficient komt hiervoor in aanmerking. Bij ons Enterprise-plan begeleiden we je bij de aanvraag.",
    },
    {
      q: "Hoe zit het met gegevensbescherming en GDPR?",
      a: "We werken volledig GDPR-conform. Je data blijft binnen de EU en we bouwen bovenop je bestaande systemen zonder gegevens te verplaatsen. Bij gevoelige informatie bieden we lokaal gehoste oplossingen aan. Je houdt altijd volledige controle over je data.",
    },
    {
      q: "Wat is het verschil met ChatGPT of andere AI-tools?",
      a: "ChatGPT is een generieke chatbot. Aifficient Mail is een compleet platform: gedeelde inbox, AI-agents en een automation builder die specifiek zijn afgestemd op jouw e-mailworkflows. Het verschil: ChatGPT beantwoordt losse vragen, Aifficient verwerkt je e-mails automatisch van ontvangst tot actie.",
    },
  ];

  return (
    <section id="faq" className="relative py-28 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
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
