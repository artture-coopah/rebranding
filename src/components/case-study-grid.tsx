"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "@/lib/case-studies-data";
import {
  ArrowRight,
  Truck,
  Users,
  Layers,
  Building2,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Truck,
  Users,
  Layers,
  Building2,
};

export function CaseStudyGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [active, setActive] = useState<string | null>(null);

  const sectors = caseStudies.map((cs) => ({
    slug: cs.sector,
    name: cs.sectorName,
    icon: cs.icon,
  }));

  const filtered = active
    ? caseStudies.filter((cs) => cs.sector === active)
    : caseStudies;

  return (
    <section className="pb-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActive(null)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              active === null
                ? "bg-bolt text-white shadow-md shadow-bolt/20"
                : "bg-sand-100 text-sand-600 hover:bg-sand-200"
            }`}
          >
            Alle sectoren
          </button>
          {sectors.map((s) => {
            const Icon = iconMap[s.icon] || Building2;
            return (
              <button
                key={s.slug}
                onClick={() => setActive(active === s.slug ? null : s.slug)}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  active === s.slug
                    ? "bg-bolt text-white shadow-md shadow-bolt/20"
                    : "bg-sand-100 text-sand-600 hover:bg-sand-200"
                }`}
              >
                <Icon size={14} />
                {s.name}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cs) => {
              return (
                <motion.div
                  key={cs.sector}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <Link
                    href={`/case-studies/${cs.sector}`}
                    className="group card overflow-hidden flex flex-col h-full"
                  >
                    {/* Hero image */}
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={cs.heroImage}
                        alt={cs.heroImageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sand-950/50 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                          {cs.sectorName}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <h2 className="font-display text-lg font-semibold text-sand-900 mb-3 leading-snug">
                          {cs.heroTitle}
                        </h2>
                        <div className="font-display text-3xl font-semibold text-bolt mb-3">
                          {cs.overviewMetric}
                        </div>
                        <p className="text-sand-500 text-sm leading-relaxed mb-6">
                          {cs.overviewDescription}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-bolt group-hover:gap-3 transition-all">
                        Lees de case study
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
