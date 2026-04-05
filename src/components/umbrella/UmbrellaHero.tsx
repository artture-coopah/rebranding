"use client";

import { ArrowRight, Layers, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Blob } from "../Blob";
import Link from "next/link";

function Check() {
  return (
    <svg className="w-[18px] h-[18px] text-bolt shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"/>
    </svg>
  );
}

export function UmbrellaHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Blob animate speed={18} fill="#F27B1C" className="!opacity-[0.05] absolute top-[10%] right-[5%] w-[380px] h-[500px]" />
      <Blob animate speed={22} fill="#F27B1C" className="!opacity-[0.04] absolute top-[20%] left-[5%] w-[320px] h-[420px] rotate-[140deg]" />
      <Blob animate speed={15} fill="#F27B1C" className="!opacity-[0.06] absolute bottom-[10%] right-[25%] w-[360px] h-[480px] rotate-[220deg]" />

      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-bolt/[0.03] via-transparent to-bolt/[0.02]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-bolt/20 bg-bolt/5 px-4 py-1.5 text-sm text-bolt font-medium"
          >
            <Layers size={14} />
            Aifficient Platform
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            De <span className="text-bolt italic">AI-laag</span> boven elk KMO-bedrijf.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-2xl mx-auto text-lg text-sand-500 leading-relaxed"
          >
            Eén platform, meerdere AI-producten. Start met email, groei naar je volledige backoffice —{" "}
            <strong className="text-sand-900 font-medium">binnen één ecosysteem</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/mail"
              className="group flex items-center gap-2 rounded-full bg-bolt px-8 py-4 text-base font-medium text-white transition-all hover:bg-bolt-dark hover:shadow-xl hover:shadow-bolt/15 hover:scale-[1.02]"
            >
              Ontdek Aifficient Mail
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#producten"
              className="flex items-center gap-2 rounded-full border border-sand-300 px-8 py-4 text-base font-medium text-sand-500 transition-all hover:border-bolt/30 hover:text-sand-900"
            >
              Bekijk alle producten
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Checkmarks */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {["Eén login voor alle producten", "Per-seat pricing", "Belgisch platform, lokale support"].map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm text-sand-500">
                <Check />
                {t}
              </span>
            ))}
          </motion.div>
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
