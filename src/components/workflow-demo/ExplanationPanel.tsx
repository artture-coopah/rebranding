"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { WfNode, Workflow } from "./types";
import { nodeColors } from "./constants";

const typeLabels: Record<string, string> = {
  trigger: "Trigger",
  ai: "AI Stap",
  condition: "Conditie",
  action: "Actie",
  output: "Output",
  integration: "Integratie",
};

interface Props {
  node: WfNode;
  workflow: Workflow;
  onNodeNavigate: (id: string) => void;
}

export function ExplanationPanel({ node, workflow, onNodeNavigate }: Props) {
  const c = nodeColors[node.type];
  const sortedNodes = [...workflow.nodes].sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
  const currentIdx = sortedNodes.findIndex((n) => n.id === node.id);

  const goPrev = () => {
    const prev = currentIdx > 0 ? sortedNodes[currentIdx - 1] : sortedNodes[sortedNodes.length - 1];
    onNodeNavigate(prev.id);
  };
  const goNext = () => {
    const next = currentIdx < sortedNodes.length - 1 ? sortedNodes[currentIdx + 1] : sortedNodes[0];
    onNodeNavigate(next.id);
  };

  return (
    <div className="border-l border-sand-200 bg-sand-50/50 flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={node.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="flex-1 flex flex-col p-5"
        >
          {/* Step + type */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[32px] font-extrabold text-bolt/10 leading-none select-none">
              {node.detail.stepNumber}
            </span>
            <div className="flex items-center gap-1">
              <div className={`w-4 h-4 rounded grid place-items-center ${c.iconBg} [&>svg]:w-2.5 [&>svg]:h-2.5`}>
                {node.icon}
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-sand-400">
                {typeLabels[node.type] || node.type}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-[17px] font-display font-extrabold tracking-tight text-sand-900 mb-2 leading-tight">
            {node.detail.title}
          </h3>

          {/* Description */}
          <p className="text-[13px] text-sand-500 leading-relaxed mb-4">
            {node.detail.description}
          </p>

          {/* Mini preview */}
          {node.detail.preview && (
            <div className="flex-1 flex items-start justify-center overflow-hidden">
              <div className="transform scale-[0.65] origin-top">
                {node.detail.preview}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-sand-200">
        <button onClick={goPrev} className="flex items-center gap-1 text-[11px] font-semibold text-sand-400 hover:text-bolt transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Vorige
        </button>
        <span className="text-[10px] text-sand-400 font-medium">{currentIdx + 1} / {sortedNodes.length}</span>
        <button onClick={goNext} className="flex items-center gap-1 text-[11px] font-semibold text-sand-400 hover:text-bolt transition-colors">
          Volgende
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
