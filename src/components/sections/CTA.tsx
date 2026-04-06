"use client";

import { Check, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn, stagger } from "../ui/animations";

export function CTA() {
  const [form, setForm] = useState({ naam: "", bedrijf: "", email: "", bericht: "" });
  const [verzonden, setVerzonden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Er ging iets mis.");
      setVerzonden(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-sand-950 text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-bolt/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[300px] h-[300px] rounded-full bg-bolt/[0.04] blur-[100px] pointer-events-none" />



      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Links: tekst */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeIn}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Klaar om je team weer te laten focussen op je klanten?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mt-5 text-white/70 text-lg"
            >
              Laat hier je gegevens achter en wij contacteren je. Geen verkoopspraatjes, gewoon een eerlijk gesprek over de processen die jouw bedrijf tijd kosten.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="mt-10 flex flex-col gap-3 text-sm text-white/60"
            >
              <span className="flex items-center gap-2">
                <Check size={16} className="text-bolt-light" /> Gratis adviesgesprek van 30 minuten
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-bolt-light" /> Geen verplichtingen, je beslist pas als je de waarde ziet
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-bolt-light" /> Reactie binnen 24 uur
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-bolt-light" /> GDPR-conforme aanpak
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-bolt-light" /> Niet tevreden na de eerste pilot? Dan betaal je niets
              </span>
            </motion.div>

            <motion.a
              variants={fadeIn}
              href="mailto:hello@aifficient.be"
              className="mt-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              Of mail ons rechtstreeks: hello@aifficient.be
            </motion.a>
          </motion.div>

          {/* Rechts: formulier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {verzonden ? (
              <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-8 text-center">
                <div className="mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-bolt/20">
                  <Check size={28} className="text-bolt-light" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Bedankt voor je aanvraag!</h3>
                <p className="text-white/60 text-sm">
                  We nemen binnen 24 uur contact met je op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl bg-white/[0.06] border border-white/10 p-8 space-y-5">
                <div>
                  <label htmlFor="naam" className="block text-sm font-medium text-white/80 mb-1.5">
                    Naam *
                  </label>
                  <input
                    id="naam"
                    type="text"
                    required
                    value={form.naam}
                    onChange={(e) => setForm({ ...form, naam: e.target.value })}
                    className="w-full rounded-lg bg-white/[0.08] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-bolt/50 focus:ring-1 focus:ring-bolt/30 transition-colors"
                    placeholder="Jouw naam"
                  />
                </div>
                <div>
                  <label htmlFor="bedrijf" className="block text-sm font-medium text-white/80 mb-1.5">
                    Bedrijf *
                  </label>
                  <input
                    id="bedrijf"
                    type="text"
                    required
                    value={form.bedrijf}
                    onChange={(e) => setForm({ ...form, bedrijf: e.target.value })}
                    className="w-full rounded-lg bg-white/[0.08] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-bolt/50 focus:ring-1 focus:ring-bolt/30 transition-colors"
                    placeholder="Naam van je bedrijf"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
                    E-mailadres *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg bg-white/[0.08] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-bolt/50 focus:ring-1 focus:ring-bolt/30 transition-colors"
                    placeholder="naam@bedrijf.be"
                  />
                </div>
                <div>
                  <label htmlFor="bericht" className="block text-sm font-medium text-white/80 mb-1.5">
                    Bericht <span className="text-white/40">(optioneel)</span>
                  </label>
                  <textarea
                    id="bericht"
                    rows={3}
                    value={form.bericht}
                    onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                    className="w-full rounded-lg bg-white/[0.08] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-bolt/50 focus:ring-1 focus:ring-bolt/30 transition-colors resize-none"
                    placeholder="Vertel kort waar je hulp bij zoekt"
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group flex items-center justify-center gap-2 rounded-full bg-bolt px-8 py-4 text-base font-semibold text-white transition-all hover:bg-bolt-dark hover:shadow-xl hover:shadow-bolt/20 hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none"
                >
                  {loading ? "Verzenden..." : "Vraag je gratis adviesgesprek aan"}
                  {!loading && <Send size={18} className="transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
