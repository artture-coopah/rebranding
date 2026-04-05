"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "./animations";

const team = [
  {
    name: "Tuur Vanholen",
    role: "Founder & CEO",
    photo: "/team/tuur.webp",
    bio: "Tuur drijft de visie achter Aifficient en transformeert complexe bedrijfsuitdagingen naar elegante, geautomatiseerde oplossingen.",
    focus: ["Strategie", "Product", "Sales"],
    linkedin: "https://www.linkedin.com/in/tuurvanholen/",
  },
  {
    name: "Tibo Declerck",
    role: "Co-founder & CTO",
    photo: "/team/tibo.webp",
    bio: "Tibo ontwerpt de intelligente systemen achter Aifficient en zorgt ervoor dat elke regel code maximale prestaties en impact levert.",
    focus: ["AI & Machine Learning", "Platform", "Architectuur"],
    linkedin: "https://www.linkedin.com/in/tibo-d-15739b211/",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <span className="section-label">Over ons</span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Gebouwd door{" "}
            <span className="text-bolt">mensen die het probleem kennen</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mt-4 text-sand-500 max-w-xl mx-auto text-lg"
          >
            Een klein team, één missie: Belgische KMO&apos;s bevrijden van repetitief inbox-werk zodat ze kunnen focussen op wat ertoe doet.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {team.map((person) => (
            <motion.div
              key={person.name}
              variants={fadeIn}
              className="card p-8 flex flex-col items-center text-center"
            >
              {/* Photo */}
              <div className="mb-5 relative h-24 w-24 rounded-full overflow-hidden ring-2 ring-bolt/15">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-display text-xl font-semibold text-sand-900">
                {person.name}
              </h3>
              <div className="text-sm font-medium text-bolt mb-4">
                {person.role}
              </div>

              <p className="text-sand-500 leading-relaxed mb-6">
                {person.bio}
              </p>

              {/* Focus tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {person.focus.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sand-100 px-3 py-1 text-xs text-sand-500 border border-sand-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-1.5 text-sm text-sand-400 hover:text-bolt transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
