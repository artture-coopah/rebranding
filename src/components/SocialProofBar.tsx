"use client";

import { motion } from "framer-motion";
import { toolLogos } from "./ToolLogos";

export function SocialProofBar() {
  return (
    <section className="relative py-10 px-6 border-y border-sand-200">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10"
        >
          <span className="text-xs uppercase tracking-wider text-sand-400 font-medium whitespace-nowrap">
            Werkt met je bestaande tools
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {["Slack", "Google", "Teams", "Odoo", "Excel", "Zapier"].map((tool) => {
              const Logo = toolLogos[tool];
              return (
                <div key={tool} className="flex items-center gap-2" title={tool}>
                  {Logo && <Logo className="w-6 h-6 sm:w-7 sm:h-7" />}
                  <span className="text-xs font-medium text-sand-400 hidden sm:inline">
                    {tool}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
