"use client";

import { Zap, PlugZap, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../ui/animations";

export function WhyUs() {
  const benefits = [
    {
      icon: Zap,
      title: "Eerste pilot live in 2 weken",
      desc: "Geen maandenlange trajecten of eindeloze meetings. Wij leveren een werkende automatisering binnen 2 weken, zodat je direct resultaat ziet.",
      highlight: "Snel schakelen",
    },
    {
      icon: PlugZap,
      title: "Bovenop je bestaande tools",
      desc: "Geen migraties, geen nieuw systeem leren. Wij bouwen op wat je al gebruikt: Outlook, Teams, Odoo, Teamleader, Billit, of je eigen software.",
      highlight: "Geen verstoring",
    },
    {
      icon: Users,
      title: "Jouw team leert ermee werken",
      desc: "Wij bouwen het, trainen je mensen, en dragen alles over. Zij begrijpen wat er draait en kunnen het zelf beheren.",
      highlight: "Kennis blijft intern",
    },
    {
      icon: TrendingUp,
      title: "Hoogste rendement eerst",
      desc: "We starten altijd met het proces dat je het meeste oplevert of bespaart. Zo verdient de investering zichzelf terug voor de volledige uitrol klaar is.",
      highlight: "ROI-eerst aanpak",
    },
  ];

  return (
    <section id="waarom" className="relative py-28 px-6 overflow-hidden">
      {/* Decorative bolt pattern */}
      <svg className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none opacity-[0.04]" viewBox="0 0 160 160" fill="none">
        <path d="M80 10L50 80h25L55 150l70-90H95l25-50z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="var(--color-bolt)" fillOpacity=".3"/>
        <circle cx="80" cy="80" r="75" stroke="currentColor" strokeWidth="1" strokeDasharray="6 10"/>
      </svg>
      <svg className="absolute -right-8 bottom-16 w-32 h-32 pointer-events-none opacity-[0.04]" viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8"/>
        <circle cx="64" cy="64" r="36" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6"/>
      </svg>
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Waarom Aifficient?</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Hoe wij{" "}
            <span className="text-bolt">anders werken</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={fadeIn}
              className="card p-8 flex gap-6 items-start"
            >
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-bolt/8">
                <b.icon size={28} className="text-bolt" />
              </div>
              <div>
                <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-bolt">
                  {b.highlight}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-sand-900">
                  {b.title}
                </h3>
                <p className="text-sand-500 leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
