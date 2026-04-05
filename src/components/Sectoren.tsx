"use client";

import { Truck, Calculator, Building2, Briefcase, Factory, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "./animations";

export function Sectoren() {
  const sectors = [
    { icon: Truck, name: "Logistiek & Transport", desc: "Facturatie, planning en vrachtbrieven" },
    { icon: Calculator, name: "Accountancy & Finance", desc: "Documentverwerking en rapportage" },
    { icon: Building2, name: "Bouw & Vastgoed", desc: "Offertes en werfopvolging" },
    { icon: Briefcase, name: "Zakelijke Dienstverlening", desc: "Klantcommunicatie en projectbeheer" },
    { icon: Factory, name: "Productie & Maakbedrijven", desc: "Orderverwerking en kwaliteitscontrole" },
    { icon: Users, name: "HR & Werving", desc: "Screening, planning en onboarding" },
  ];

  return (
    <section className="relative py-20 px-6 surface-alt">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Sectoren</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Welke bedrijven{" "}
            <span className="text-bolt">automatiseren al?</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mt-4 text-sand-500 max-w-2xl mx-auto text-lg"
          >
            Van logistiek tot accountancy: we kennen de processen die je team
            tijd kosten en weten hoe we ze oplossen.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {sectors.map((s) => (
            <motion.div
              key={s.name}
              variants={fadeIn}
              className="card p-5 flex items-center gap-4"
            >
              <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-bolt/8">
                <s.icon size={22} className="text-bolt" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-sand-900">
                  {s.name}
                </h3>
                <p className="text-xs text-sand-500 mt-0.5">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
