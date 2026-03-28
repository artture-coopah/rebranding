"use client";

import { ArrowRight, Users, Bot } from "lucide-react";
import { motion } from "framer-motion";

export function TeamCapacityVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="hidden lg:block w-[400px]"
    >
      <div className="space-y-4">
        {/* Without AI */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl border border-sand-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-sand-400">Zonder automatisering</span>
            <span className="text-xs font-medium text-red-400">Overbelast</span>
          </div>
          {/* Team members with capacity */}
          <div className="space-y-2.5">
            {[
              { name: "Sales", tasks: ["Prospectie", "Admin", "CRM"], capacity: 100 },
              { name: "Finance", tasks: ["Facturen", "Opvolging", "Rapporten"], capacity: 100 },
              { name: "Support", tasks: ["E-mails", "Tickets", "FAQ"], capacity: 95 },
            ].map((member) => (
              <div key={member.name} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-sand-200 flex items-center justify-center">
                  <Users size={12} className="text-sand-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-medium text-sand-700">{member.name}</span>
                    <div className="flex gap-1">
                      {member.tasks.map((t) => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-red-50 text-red-400 border border-red-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full bg-sand-100 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-red-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${member.capacity}%` }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-center text-[10px] text-red-400 font-medium">
            Talent verspild aan admin
          </div>
        </motion.div>

        {/* Arrow down */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="flex justify-center"
        >
          <div className="w-10 h-10 rounded-full bg-bolt/10 flex items-center justify-center">
            <ArrowRight size={16} className="text-bolt rotate-90" />
          </div>
        </motion.div>

        {/* With AI */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="rounded-2xl border border-bolt/20 bg-white p-5 shadow-lg shadow-bolt/5"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-bolt">Met Aifficient</span>
            <span className="flex items-center gap-1 text-xs font-medium text-green-600">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Meer focus
            </span>
          </div>
          <div className="space-y-2.5">
            {[
              { name: "Sales", tasks: ["Verkoop", "Relaties"], auto: "Admin geautomatiseerd", capacity: 45 },
              { name: "Finance", tasks: ["Analyse", "Strategie"], auto: "Invoer geautomatiseerd", capacity: 30 },
              { name: "Support", tasks: ["Persoonlijk contact"], auto: "Routing geautomatiseerd", capacity: 35 },
            ].map((member) => (
              <div key={member.name} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-bolt/10 flex items-center justify-center">
                  <Users size={12} className="text-bolt" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-medium text-sand-700">{member.name}</span>
                    <div className="flex gap-1">
                      {member.tasks.map((t) => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-green-50 text-green-600 border border-green-100">
                          {t}
                        </span>
                      ))}
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-bolt/8 text-bolt border border-bolt/15 flex items-center gap-0.5">
                        <Bot size={8} />
                        {member.auto}
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full bg-sand-100 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${member.capacity}%` }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-center text-[10px] text-green-600 font-medium">
            Zelfde mensen, werk dat ertoe doet
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
