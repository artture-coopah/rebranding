"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Workflow, WfNode } from "./types";
import { nodeColors } from "./constants";

interface Props {
  workflow: Workflow;
  selectedNodeId: string;
  onNodeClick: (id: string) => void;
  animKey: number;
}

function MiniNode({ node, onClick, side }: { node: WfNode; onClick: () => void; side: "left" | "right" }) {
  const c = nodeColors[node.type];
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: side === "left" ? -12 : 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg border ${c.border} ${c.bg} cursor-pointer hover:shadow-sm transition-shadow shrink-0`}
    >
      <div className={`w-5 h-5 rounded ${c.iconBg} grid place-items-center shrink-0 [&>svg]:w-3 [&>svg]:h-3`}>
        {node.icon}
      </div>
      <span className="text-[10px] font-semibold text-sand-600 whitespace-nowrap">{node.label}</span>
    </motion.button>
  );
}

function Arrow({ accent, label }: { accent?: boolean; label?: string }) {
  return (
    <div className="flex flex-col items-center shrink-0">
      {label && <span className="text-[8px] font-semibold text-sand-400 whitespace-nowrap mb-px">{label}</span>}
      <div className="flex items-center">
        <motion.div
          className="h-px w-5 rounded-full"
          style={{ background: accent ? "var(--color-bolt)" : "#D1CFC9" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.25, delay: 0.2 }}
        />
        <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
          <path d="M1 1L4.5 4L1 7" stroke={accent ? "var(--color-bolt)" : "#D1CFC9"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export function WorkflowCanvas({ workflow, selectedNodeId, onNodeClick, animKey }: Props) {
  const nodeMap = Object.fromEntries(workflow.nodes.map((n) => [n.id, n]));
  const selectedNode = workflow.nodes.find((n) => n.id === selectedNodeId) ?? workflow.nodes[0];
  const c = nodeColors[selectedNode.type];

  const { incoming, outgoing } = useMemo(() => {
    const inc: { node: WfNode; accent?: boolean; label?: string }[] = [];
    const out: { node: WfNode; accent?: boolean; label?: string }[] = [];
    for (const edge of workflow.edges) {
      if (edge.to === selectedNodeId && nodeMap[edge.from])
        inc.push({ node: nodeMap[edge.from], accent: edge.accent, label: edge.label });
      if (edge.from === selectedNodeId && nodeMap[edge.to])
        out.push({ node: nodeMap[edge.to], accent: edge.accent, label: edge.label });
    }
    return { incoming: inc, outgoing: out };
  }, [workflow, selectedNodeId, nodeMap]);

  const sortedNodes = useMemo(
    () => [...workflow.nodes].sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x)),
    [workflow]
  );
  const currentIdx = sortedNodes.findIndex((n) => n.id === selectedNodeId);

  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-5">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D1CFC9 0.7px, transparent 0.7px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Flow */}
      <div className="relative flex items-center justify-center gap-1.5 w-full">
        {/* Incoming */}
        <div className="flex flex-col items-end gap-1.5 flex-1 min-w-0">
          {incoming.map((conn) => (
            <div key={`${conn.node.id}-${animKey}`} className="flex items-center gap-1">
              <MiniNode node={conn.node} onClick={() => onNodeClick(conn.node.id)} side="left" />
              <Arrow accent={conn.accent} label={conn.label} />
            </div>
          ))}
          {incoming.length === 0 && (
            <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg border border-dashed border-sand-200 text-sand-300">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span className="text-[10px] font-medium">Start</span>
            </div>
          )}
        </div>

        {/* Selected node */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedNode.id}-${animKey}`}
            initial={{ opacity: 0, scale: 0.92, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -8 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className={`relative rounded-xl border-2 ${c.border} ${c.bg} backdrop-blur-sm px-4 py-3.5 shadow-md shrink-0 w-48 ring-2 ring-bolt/15`}
          >
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-sand-300 bg-white" />
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 bg-white" style={{ borderColor: c.dot }} />

            <div className="flex items-center gap-2 mb-1">
              <div className={`w-7 h-7 rounded-lg ${c.iconBg} grid place-items-center shrink-0`}>{selectedNode.icon}</div>
              <span className="text-[12px] font-bold text-sand-900 leading-tight">{selectedNode.label}</span>
            </div>
            <p className="text-[10px] text-sand-500 leading-snug pl-9">{selectedNode.desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* Outgoing */}
        <div className="flex flex-col items-start gap-1.5 flex-1 min-w-0">
          {outgoing.map((conn) => (
            <div key={`${conn.node.id}-${animKey}`} className="flex items-center gap-1">
              <Arrow accent={conn.accent} label={conn.label} />
              <MiniNode node={conn.node} onClick={() => onNodeClick(conn.node.id)} side="right" />
            </div>
          ))}
          {outgoing.length === 0 && (
            <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg border border-dashed border-sand-200 text-sand-300">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span className="text-[10px] font-medium">Klaar</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex items-center gap-1 mt-5 relative z-10">
        {sortedNodes.map((n, i) => (
          <button
            key={n.id}
            onClick={() => onNodeClick(n.id)}
            className={`rounded-full transition-all ${
              n.id === selectedNodeId ? "w-5 h-1.5 bg-bolt" : i < currentIdx ? "w-1.5 h-1.5 bg-bolt/30" : "w-1.5 h-1.5 bg-sand-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
