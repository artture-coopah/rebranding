"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ── */
interface WfNode {
  id: string;
  x: number;
  y: number;
  label: string;
  desc: string;
  type: "trigger" | "ai" | "condition" | "action" | "output" | "integration";
  icon: React.ReactNode;
}

interface WfEdge {
  from: string;
  to: string;
  accent?: boolean;
  label?: string;
}

interface Workflow {
  id: string;
  label: string;
  tagline: string;
  icon: React.ReactNode;
  nodes: WfNode[];
  edges: WfEdge[];
}

/* ── Colors per node type ── */
const colors: Record<string, { bg: string; border: string; iconBg: string; dot: string }> = {
  trigger:     { bg: "bg-bolt/8",          border: "border-bolt/25",         iconBg: "bg-bolt/15 text-bolt",           dot: "#F27B1C" },
  ai:          { bg: "bg-emerald-500/8",   border: "border-emerald-500/25",  iconBg: "bg-emerald-500/15 text-emerald-600", dot: "#22c55e" },
  action:      { bg: "bg-blue-500/8",      border: "border-blue-500/25",     iconBg: "bg-blue-500/15 text-blue-600",  dot: "#3b82f6" },
  condition:   { bg: "bg-amber-500/8",     border: "border-amber-500/25",    iconBg: "bg-amber-500/15 text-amber-600", dot: "#f59e0b" },
  output:      { bg: "bg-purple-500/8",    border: "border-purple-500/25",   iconBg: "bg-purple-500/15 text-purple-600", dot: "#8b5cf6" },
  integration: { bg: "bg-cyan-500/8",      border: "border-cyan-500/25",     iconBg: "bg-cyan-500/15 text-cyan-600",  dot: "#06b6d4" },
};

/* ── Icons ── */
const icons = {
  mail: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  ai: <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06a.75.75 0 11-1.06 1.06L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM10 7a3 3 0 100 6 3 3 0 000-6z"/></svg>,
  check: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>,
  branch: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9"/></svg>,
  save: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>,
  send: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>,
  sync: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>,
  user: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>,
  file: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>,
  truck: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
};

/* ── Node dimensions (for edge calculation) ── */
const NODE_W = 200;
const NODE_H = 72;

/* ── Workflows ── */
const workflows: Workflow[] = [
  {
    id: "logistics",
    label: "Logistiek",
    tagline: "E-mail naar order in minder dan 2 minuten",
    icon: icons.truck,
    nodes: [
      { id: "1", x: 0, y: 100, label: "E-mail ontvangen", desc: "Transportopdracht via e-mail", type: "trigger", icon: icons.mail },
      { id: "2", x: 260, y: 20, label: "AI Classificatie", desc: "Order, offerte of vraag?", type: "ai", icon: icons.ai },
      { id: "3", x: 260, y: 180, label: "Data Extractie", desc: "Adressen, gewicht, deadline", type: "ai", icon: icons.ai },
      { id: "4", x: 520, y: 100, label: "Validatie", desc: "Verplichte velden checken", type: "condition", icon: icons.check },
      { id: "5a", x: 780, y: 20, label: "Feedback e-mail", desc: "Ontbrekende info opvragen", type: "action", icon: icons.send },
      { id: "5b", x: 780, y: 180, label: "Order opslaan", desc: "TRN-2026-0847 aangemaakt", type: "output", icon: icons.save },
      { id: "6", x: 1040, y: 100, label: "Sync tools", desc: "Teamleader, Odoo, Excel", type: "integration", icon: icons.sync },
    ],
    edges: [
      { from: "1", to: "2", accent: true },
      { from: "1", to: "3" },
      { from: "2", to: "4" },
      { from: "3", to: "4" },
      { from: "4", to: "5a", label: "Incompleet" },
      { from: "4", to: "5b", accent: true, label: "Compleet" },
      { from: "5b", to: "6", accent: true },
    ],
  },
  {
    id: "invoicing",
    label: "Facturatie",
    tagline: "Facturen automatisch verwerkt en geboekt",
    icon: icons.file,
    nodes: [
      { id: "1", x: 0, y: 100, label: "Factuur ontvangen", desc: "PDF factuur via e-mail", type: "trigger", icon: icons.mail },
      { id: "2", x: 260, y: 100, label: "OCR & Parsing", desc: "Bedrag, BTW, leverancier", type: "ai", icon: icons.ai },
      { id: "3", x: 520, y: 20, label: "Validatie", desc: "BTW-nr, IBAN check", type: "condition", icon: icons.check },
      { id: "4", x: 520, y: 180, label: "Matching", desc: "Koppel aan bestelling", type: "ai", icon: icons.branch },
      { id: "5", x: 780, y: 100, label: "Goedkeuring", desc: "Financieel keurt goed", type: "action", icon: icons.user },
      { id: "6", x: 1040, y: 100, label: "Boeken & Sync", desc: "Exact Online, Odoo", type: "integration", icon: icons.sync },
    ],
    edges: [
      { from: "1", to: "2", accent: true },
      { from: "2", to: "3" },
      { from: "2", to: "4" },
      { from: "3", to: "5" },
      { from: "4", to: "5" },
      { from: "5", to: "6", accent: true },
    ],
  },
  {
    id: "support",
    label: "Klantenservice",
    tagline: "Supportvragen beantwoord voor je team ze leest",
    icon: icons.user,
    nodes: [
      { id: "1", x: 0, y: 100, label: "Supportvraag", desc: "Klant stuurt e-mail", type: "trigger", icon: icons.mail },
      { id: "2", x: 260, y: 100, label: "AI Classificatie", desc: "Type, urgentie, routing", type: "ai", icon: icons.ai },
      { id: "3", x: 520, y: 20, label: "Context ophalen", desc: "Klanthistorie, tickets, KB", type: "ai", icon: icons.branch },
      { id: "4", x: 520, y: 180, label: "AI Antwoord", desc: "Gepersonaliseerd antwoord", type: "ai", icon: icons.ai },
      { id: "5", x: 780, y: 100, label: "Review & verzend", desc: "Goedkeuren met 1 klik", type: "action", icon: icons.user },
      { id: "6", x: 1040, y: 100, label: "CRM Sync", desc: "HubSpot, Salesforce, Slack", type: "integration", icon: icons.sync },
    ],
    edges: [
      { from: "1", to: "2", accent: true },
      { from: "2", to: "3" },
      { from: "2", to: "4" },
      { from: "3", to: "5" },
      { from: "4", to: "5" },
      { from: "5", to: "6", accent: true },
    ],
  },
  {
    id: "leads",
    label: "Leads",
    tagline: "Elke lead opgepikt, gekwalificeerd en opvolgd",
    icon: icons.user,
    nodes: [
      { id: "1", x: 0, y: 100, label: "Lead ontvangen", desc: "E-mail via website/LinkedIn", type: "trigger", icon: icons.mail },
      { id: "2", x: 260, y: 100, label: "Data Extractie", desc: "Naam, bedrijf, sector", type: "ai", icon: icons.ai },
      { id: "3", x: 520, y: 100, label: "Lead Scoring", desc: "Score op sector & urgentie", type: "condition", icon: icons.check },
      { id: "4", x: 780, y: 20, label: "AI Antwoord", desc: "Sector-specifiek antwoord", type: "ai", icon: icons.send },
      { id: "5", x: 780, y: 180, label: "Pipeline", desc: "Lead opgeslagen met score", type: "output", icon: icons.save },
      { id: "6", x: 1040, y: 100, label: "CRM Sync", desc: "HubSpot, Salesforce", type: "integration", icon: icons.sync },
    ],
    edges: [
      { from: "1", to: "2", accent: true },
      { from: "2", to: "3" },
      { from: "3", to: "4" },
      { from: "3", to: "5" },
      { from: "4", to: "6", accent: true },
      { from: "5", to: "6" },
    ],
  },
];

/* ── Compute column delays (based on x position) ── */
function getColumnDelay(x: number, allXs: number[]): number {
  const sorted = [...new Set(allXs)].sort((a, b) => a - b);
  return sorted.indexOf(x) * 0.4;
}

/* ── SVG edge path (smooth step like n8n) ── */
function edgePath(fromNode: WfNode, toNode: WfNode): string {
  const x1 = fromNode.x + NODE_W;
  const y1 = fromNode.y + NODE_H / 2;
  const x2 = toNode.x;
  const y2 = toNode.y + NODE_H / 2;
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

/* ── Edge component ── */
function EdgeLine({ d, accent, delay, label }: { d: string; accent?: boolean; delay: number; label?: string }) {
  const ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const length = el.getTotalLength();
    el.style.strokeDasharray = `${length}`;
    el.style.strokeDashoffset = `${length}`;

    const timeout = setTimeout(() => {
      el.style.transition = "stroke-dashoffset 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
      el.style.strokeDashoffset = "0";
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [delay, d]);

  return (
    <>
      <path
        ref={ref}
        d={d}
        fill="none"
        stroke={accent ? "#F27B1C" : "#D1CFC9"}
        strokeWidth={accent ? 2.5 : 2}
        strokeLinecap="round"
      />
      {label && (
        <LabelOnPath d={d} label={label} delay={delay} />
      )}
    </>
  );
}

/* ── Label positioned at midpoint of path ── */
function LabelOnPath({ d, label, delay }: { d: string; label: string; delay: number }) {
  const ref = useRef<SVGTextElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    const timeout = setTimeout(() => {
      el.style.transition = "opacity 0.4s ease";
      el.style.opacity = "1";
    }, (delay + 0.4) * 1000);
    return () => clearTimeout(timeout);
  }, [delay, d]);

  // Parse midpoint from the cubic bezier
  const parts = d.match(/M([\d.]+),([\d.]+) C([\d.]+),([\d.]+) ([\d.]+),([\d.]+) ([\d.]+),([\d.]+)/);
  if (!parts) return null;
  const [, x1, y1, , , , , x2, y2] = parts.map(Number);
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;

  return (
    <text
      ref={ref}
      x={mx}
      y={my - 8}
      textAnchor="middle"
      className="text-[9px] font-semibold fill-sand-400"
    >
      {label}
    </text>
  );
}

/* ── Main Component ── */
export function WorkflowShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const flow = workflows[activeIdx];

  const selectFlow = useCallback((idx: number) => {
    setActiveIdx(idx);
    setAnimKey((k) => k + 1);
  }, []);

  // Trigger animation on mount
  useEffect(() => {
    setAnimKey(1);
  }, []);

  const allXs = flow.nodes.map((n) => n.x);
  const nodeMap = Object.fromEntries(flow.nodes.map((n) => [n.id, n]));

  // Canvas bounds
  const maxX = Math.max(...flow.nodes.map((n) => n.x)) + NODE_W + 40;
  const maxY = Math.max(...flow.nodes.map((n) => n.y)) + NODE_H + 40;

  return (
    <section id="workflow" className="py-20">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label mb-4 block">Workflow</span>
          <h2
            className="font-display font-semibold tracking-tight text-sand-900 mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
          >
            Zie het in <span className="text-bolt italic">actie</span>
          </h2>
          <p className="text-lg text-sand-500 max-w-[580px] mx-auto">
            Kies jouw sector en ontdek hoe aifficient e-mails omzet in actie — volledig automatisch.
          </p>
        </div>

        {/* Flow selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {workflows.map((w, i) => (
            <button
              key={w.id}
              onClick={() => selectFlow(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all ${
                activeIdx === i
                  ? "bg-bolt text-white shadow-lg shadow-bolt/20"
                  : "bg-sand-50 text-sand-500 border border-sand-200 hover:border-bolt/30 hover:text-bolt"
              }`}
            >
              {w.icon}
              {w.label}
            </button>
          ))}
        </div>

        {/* Tagline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={flow.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bolt/8 text-bolt text-[13px] font-semibold">
              {flow.icon}
              {flow.tagline}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Canvas */}
        <div className="card overflow-x-auto overflow-y-hidden p-6 md:p-10">
          <div className="relative mx-auto" style={{ width: maxX, height: maxY, minWidth: maxX }}>
            {/* Dot grid bg */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: "radial-gradient(circle, #D1CFC9 0.8px, transparent 0.8px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* SVG edges */}
            <svg
              key={`edges-${animKey}`}
              className="absolute inset-0 pointer-events-none"
              width={maxX}
              height={maxY}
            >
              {flow.edges.map((e) => {
                const fromNode = nodeMap[e.from];
                const toNode = nodeMap[e.to];
                if (!fromNode || !toNode) return null;
                const d = edgePath(fromNode, toNode);
                const delay = getColumnDelay(fromNode.x, allXs) + 0.2;
                return (
                  <EdgeLine
                    key={`${e.from}-${e.to}-${animKey}`}
                    d={d}
                    accent={e.accent}
                    delay={delay}
                    label={e.label}
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {flow.nodes.map((node) => {
              const c = colors[node.type];
              const delay = getColumnDelay(node.x, allXs);
              return (
                <motion.div
                  key={`${node.id}-${animKey}`}
                  className={`absolute rounded-xl border ${c.border} ${c.bg} backdrop-blur-sm px-4 py-3 shadow-sm`}
                  style={{ left: node.x, top: node.y, width: NODE_W }}
                  initial={{ opacity: 0, scale: 0.85, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  {/* Left handle */}
                  {node.x > 0 && (
                    <motion.div
                      className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-sand-300 bg-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: delay + 0.15 }}
                    />
                  )}
                  {/* Right handle */}
                  <motion.div
                    className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 bg-white"
                    style={{ borderColor: c.dot }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: delay + 0.15 }}
                  />

                  <div className="flex items-center gap-2.5 mb-1">
                    <div className={`w-7 h-7 rounded-lg ${c.iconBg} grid place-items-center shrink-0`}>
                      {node.icon}
                    </div>
                    <span className="text-[12px] font-bold text-sand-900 leading-tight">
                      {node.label}
                    </span>
                  </div>
                  <p className="text-[10px] text-sand-500 leading-snug pl-[38px]">{node.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
