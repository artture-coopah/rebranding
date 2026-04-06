"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../ui/animations";

const subsidies = [
  // {
  //   icon: GraduationCap,
  //   title: "KMO-portefeuille — Opleiding",
  //   percentage: "30-45%",
  //   max: "max. €7.500/jaar",
  //   desc: "Onze AI- en automatiseringsopleidingen komen in aanmerking voor de VLAIO KMO-portefeuille. Kleine ondernemingen krijgen 30% subsidie, digitalisering-opleidingen zelfs tot 45%.",
  //   link: "https://www.vlaio.be/nl/subsidies-financiering/kmo-portefeuille",
  //   linkLabel: "Meer info op VLAIO.be",
  // },
  {
    icon: "vlaio",
    title: "Investeringsaftrek — Custom Automations",
    percentage: "20%",
    max: "fiscale aftrek",
    desc: "Custom automation projecten (€500–€5.000) kunnen als immaterieel vast actief op de balans worden geactiveerd. Dat levert een verhoogde investeringsaftrek van 20% op voor digitale investeringen.",
    link: "https://www.vlaio.be/nl/nieuws/hervorming-van-de-investeringsaftrek-vanaf-1-januari-2025",
    linkLabel: "Meer info op VLAIO.be",
  },
];

export function Subsidies() {
  return (
    <section className="relative py-28 px-6 surface-alt">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Subsidies</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Bespaar extra met{" "}
            <span className="text-bolt">Vlaamse subsidies</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mt-4 text-sand-500 max-w-2xl mx-auto text-lg"
          >
            Als Vlaamse KMO kom je in aanmerking voor subsidies en fiscale
            voordelen op onze opleidingen en custom automation projecten.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-xl mx-auto"
        >
          {subsidies.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeIn}
              className="card p-8 flex flex-col relative"
            >
              <img src="/vlaio.png" alt="VLAIO" className="absolute top-4 right-4 h-20 object-contain opacity-100" />
              <div className="flex items-center gap-4 mb-5">
                <div>
                  <div className="font-display text-2xl font-semibold text-bolt">
                    {s.percentage}
                  </div>
                  <div className="text-xs font-medium text-sand-400 uppercase tracking-wider">
                    {s.max}
                  </div>
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-sand-900 mb-3">
                {s.title}
              </h3>

              <p className="text-sand-500 leading-relaxed mb-6 flex-1">
                {s.desc}
              </p>

              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-bolt hover:gap-2.5 transition-all"
              >
                {s.linkLabel}
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
