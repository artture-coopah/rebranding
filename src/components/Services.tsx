"use client";

import { Workflow, Bot, PlugZap, BarChart3, FileText, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "./animations";

export function Services() {
  const services = [
    {
      icon: Workflow,
      title: "Automatische Processen",
      desc: "Goedkeuringen, herinneringen en terugkerende taken op autopilot. Je team neemt de beslissingen, de rest loopt vanzelf.",
      tags: ["Goedkeuringen", "Herinneringen", "Minder mailverkeer"],
    },
    {
      icon: Bot,
      title: "Slimme AI-Medewerkers",
      desc: "Een AI die documenten leest, data verzamelt en mails voorbereidt. Jouw mensen houden de controle en doen de eindcheck.",
      tags: ["Tijdsbesparing", "Foutloze data", "Minder overtypen"],
    },
    {
      icon: PlugZap,
      title: "Gekoppelde Systemen",
      desc: "Boekhouding, CRM en e-mail die naadloos samenwerken. Geen dubbele invoer meer, en altijd up-to-date cijfers.",
      tags: ["Geen dataverlies", "Slimme koppelingen", "Eén bron van waarheid"],
    },
    {
      icon: BarChart3,
      title: "Heldere Dashboards",
      desc: "Zie in \u00e9\u00e9n oogopslag waar je omzet vandaan komt en waar je marge lekt. Real-time, niet na 3 weken in Excel.",
      tags: ["Live cijfers", "Betere beslissingen", "Visueel helder"],
    },
    {
      icon: FileText,
      title: "Document Automatisering",
      desc: "Offertes, facturen en follow-ups rollen kant-en-klaar uit het systeem. Sneller documenten maken = sneller betaald worden.",
      tags: ["Sjablonen in huisstijl", "Foutloze opmaak", "Automatisch verzenden"],
    },
    {
      icon: Shield,
      title: "Begeleiding van A tot Z",
      desc: "Wij lichten je processen door, bouwen de oplossing en trainen je team. En als het draait, blijven we het 24/7 in de gaten houden.",
      tags: ["Persoonlijke support", "Training op maat", "Garantie"],
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
            <span className="section-label">Onze diensten</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Waar wint jouw team{" "}
            <span className="text-bolt">tijd mee?</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mt-4 text-sand-500 max-w-2xl mx-auto text-lg"
          >
            AI neemt het saaie werk over. Jouw mensen doen waar ze goed in
            zijn: verkopen, klanten helpen, en je bedrijf laten groeien.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeIn}
              className="group card p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-bolt/8 transition-colors group-hover:bg-bolt/15">
                <s.icon size={24} className="text-bolt" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-sand-900">
                {s.title}
              </h3>
              <p className="text-sand-500 leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sand-100 px-3 py-1 text-xs text-sand-500 border border-sand-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Diensten */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border-2 border-bolt text-bolt bg-white px-8 py-3 text-sm font-semibold hover:bg-bolt hover:text-white transition-all shadow-sm"
          >
            Ontdek of we dit voor jou kunnen bouwen
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
