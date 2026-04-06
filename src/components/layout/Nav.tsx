"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Platform", href: "#diensten" },
    { label: "Voorbeelden", href: "#voorbeelden" },
    { label: "Prijzen", href: "#prijzen" },
    { label: "Werkwijze", href: "#werkwijze" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sand-50/90 backdrop-blur-sm border-b border-sand-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/image.png" alt="Aifficient" width={36} height={36} className="size-9" />
          <span className="font-display text-xl font-semibold tracking-tight">
            <span className="text-bolt">ai</span>
            <span className="text-sand-900">fficient</span>
            <span className="text-sand-400 text-xs ml-0.5">.be</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-sand-500 hover:text-sand-900 transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-bolt transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-bolt px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-bolt-dark hover:shadow-lg hover:shadow-bolt/15"
          >
            Gratis Adviesgesprek
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-sand-500"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-sand-200 bg-sand-50 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sand-500 hover:text-sand-900 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 rounded-full bg-bolt px-5 py-2.5 text-center text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Gratis Adviesgesprek
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
