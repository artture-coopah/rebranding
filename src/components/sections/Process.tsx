"use client";

import { motion } from "framer-motion";
import { fadeIn, stagger } from "../ui/animations";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Probeer het gratis",
      desc: "Maak een account aan en koppel je Outlook inbox. In een paar klikken ben je verbonden.",
    },
    {
      num: "02",
      title: "Eerste agent actief in <1 uur",
      desc: "Je eerste AI-agent classificeert en verwerkt e-mails direct. Snel resultaat, zonder configuratie-marathon.",
    },
    {
      num: "03",
      title: "Breid uit met je team",
      desc: "Voeg teamleden toe en bouw automations op maat van je processen. Van inbox naar actie, voor het hele team.",
    },
    {
      num: "04",
      title: "Groei op jouw tempo",
      desc: "Upgrade naar Pro of Enterprise wanneer je klaar bent. Of laat ons een custom automatisering bouwen voor complexe workflows.",
    },
  ];

  return (
    <section id="werkwijze" className="relative py-28 px-6 surface-alt">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Werkwijze</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Van inbox naar{" "}
            <span className="text-bolt">actie in minuten</span>
          </motion.h2>
        </motion.div>

        {/* Desktop: horizontal stepper */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-[12%] right-[12%] h-px bg-sand-300" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((s) => (
                <motion.div
                  key={s.num}
                  variants={fadeIn}
                  className="text-center"
                >
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-bolt bg-sand-50 font-display text-sm text-bolt font-semibold">
                    {s.num}
                  </div>
                  <h3 className="font-display text-lg font-semibold mt-5 mb-2 text-sand-900">
                    {s.title}
                  </h3>
                  <p className="text-sand-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile: vertical stepper */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:hidden relative"
        >
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-sand-300" />

          <div className="flex flex-col gap-10">
            {steps.map((s) => (
              <motion.div
                key={s.num}
                variants={fadeIn}
                className="flex gap-6 items-start"
              >
                <div className="relative z-10 flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-bolt bg-sand-50 font-display text-sm text-bolt font-semibold">
                  {s.num}
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-semibold mb-1 text-sand-900">
                    {s.title}
                  </h3>
                  <p className="text-sand-500 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
