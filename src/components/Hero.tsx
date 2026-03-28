"use client";

import { ArrowRight, Zap, ChevronDown, Timer, PiggyBank, CalendarDays, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { TeamCapacityVisual } from "./TeamCapacityVisual";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-bg opacity-50" />

      {/* Subtle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-bolt/[0.03] via-transparent to-bolt/[0.02]" />

      {/* Ambient glow — desktop only */}
      <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] pointer-events-none">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-bolt/[0.07] via-bolt/[0.03] to-transparent blur-3xl"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        />
        <motion.div
          className="absolute top-[15%] left-[10%] w-48 h-48 rounded-full bg-bolt/[0.05] blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 min-w-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-bolt/20 bg-bolt/5 px-4 py-1.5 text-sm text-bolt font-medium"
            >
              <Zap size={14} />
              AI-automatisering voor KMO&apos;s in Belgi&euml;
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-semibold leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.75rem, 5.5vw, 5rem)" }}
            >
              Jouw team kan het dubbele aan.{" "}
              <span className="text-bolt italic">Zonder aan te werven.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-lg text-sand-500 leading-relaxed"
            >
              Je mensen zijn te duur voor simpele administratie en repetitief overtypwerk. Wij automatiseren deze processen met AI-systemen die werken met jouw bestaande tools — zodat je team weer kan focussen op de{" "}
              <strong className="text-sand-900 font-medium">zaken die er echt toe doen</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-bolt px-8 py-4 text-base font-medium text-white transition-all hover:bg-bolt-dark hover:shadow-xl hover:shadow-bolt/15 hover:scale-[1.02]"
              >
                Plan je gratis adviesgesprek
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#diensten"
                className="flex items-center gap-2 rounded-full border border-sand-300 px-8 py-4 text-base font-medium text-sand-500 transition-all hover:border-bolt/30 hover:text-sand-900"
              >
                Bekijk onze diensten
              </a>
            </motion.div>
          </div>

          {/* Right: Team capacity visual */}
          <div className="mt-16 lg:mt-0 flex-shrink-0">
            <TeamCapacityVisual />
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-sand-200 pt-10"
        >
          {[
            { value: "30%", label: "Minder tijd aan repetitief werk", icon: Timer },
            { value: "\u20AC50K+", label: "Bespaard vs. extra personeel", icon: PiggyBank },
            { value: "2\u20136", label: "Weken tot resultaat", icon: CalendarDays },
            { value: "50+", label: "Werkprocessen geautomatiseerd", icon: Layers },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-bolt/8">
                <stat.icon size={18} className="text-bolt" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-bolt">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-sand-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={22} className="text-sand-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
