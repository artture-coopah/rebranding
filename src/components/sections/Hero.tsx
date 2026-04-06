"use client";

import { ArrowRight, Zap, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { HeroMockup } from "./HeroMockup";
import { Blob } from "../ui/Blob";

function Check() {
  return (
    <svg className="w-[18px] h-[18px] text-bolt shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"/>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated blob shapes — clustered closer to center */}
      <Blob animate speed={18} fill="var(--color-bolt)" className="!opacity-[0.05] absolute top-[10%] right-[5%] w-[380px] h-[500px]" />
      <Blob animate speed={22} fill="var(--color-bolt)" className="!opacity-[0.04] absolute top-[20%] left-[5%] w-[320px] h-[420px] rotate-[140deg]" />
      <Blob animate speed={15} fill="var(--color-bolt)" className="!opacity-[0.06] absolute bottom-[10%] right-[25%] w-[360px] h-[480px] rotate-[220deg]" />
      <Blob animate speed={20} variant={2} fill="var(--color-bolt-dark)" className="!opacity-[0.07] absolute bottom-[15%] right-[15%] w-[400px] h-[520px] rotate-[190deg]" />

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
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 pt-32 pb-20 w-full">
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
              Aifficient Mail — van inbox naar actie
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-semibold leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}
            >
              Elke e-mail wordt{" "}
              <span className="text-bolt italic">automatisch actie.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-lg text-sand-500 leading-relaxed"
            >
              Aifficient Mail leest, sorteert en verwerkt je e-mails automatisch. Jouw team focust op klanten —{" "}
              <strong className="text-sand-900 font-medium">de AI doet de rest</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#prijzen"
                className="group flex items-center gap-2 rounded-full bg-bolt px-8 py-4 text-base font-medium text-white transition-all hover:bg-bolt-dark hover:shadow-xl hover:shadow-bolt/15 hover:scale-[1.02]"
              >
                Bekijk prijzen
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#showcase"
                className="flex items-center gap-2 rounded-full border border-sand-300 px-8 py-4 text-base font-medium text-sand-500 transition-all hover:border-bolt/30 hover:text-sand-900"
              >
                Bekijk demo
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"/></svg>
              </a>
            </motion.div>

            {/* Checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 flex flex-col gap-2"
            >
              {["Bespaar 10+ uur per medewerker/maand", "Snel en eenvoudig opgezet"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm text-sand-500">
                  <Check />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Tool logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex items-center gap-6"
            >
              <span className="text-[11px] uppercase tracking-wider text-sand-400 font-medium whitespace-nowrap">
                Werkt met je tools
              </span>
              <div className="flex items-center gap-4">
                {["outlook", "teams", "odoo", "teamleader", "billit", "excel", "exact", "hubspot", "salesforce", "slack", "sheets"].map((tool) => (
                  <img key={tool} src={`/integrations/${tool}.svg`} alt={tool} className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity" loading="lazy" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Mockup */}
          <div className="mt-16 lg:mt-0 hidden lg:block w-[520px] shrink-0">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-bolt/[0.06] blur-[80px] pointer-events-none" />
              <HeroMockup />
            </div>
          </div>
        </div>
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
