"use client";

import { motion } from "framer-motion";
import { fadeIn, stagger } from "./animations";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Gratis adviesgesprek",
      desc: "We kijken samen naar je processen en berekenen hoeveel tijd en geld je verliest aan manueel werk. Vrijblijvend.",
    },
    {
      num: "02",
      title: "Plan met het hoogste rendement eerst",
      desc: "Je krijgt een concreet plan. We starten met het proces dat je het snelst geld oplevert of bespaart.",
    },
    {
      num: "03",
      title: "Eerste resultaat in 2 weken",
      desc: "Een werkende automatisering die direct impact heeft. Geen PowerPoints, maar resultaat.",
    },
    {
      num: "04",
      title: "Uitrollen & opschalen",
      desc: "We rollen de oplossing uit, trainen je team, en blijven monitoren. Jullie plukken de vruchten.",
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
            Van gesprek tot{" "}
            <span className="text-bolt">implementatie in weken</span>
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
