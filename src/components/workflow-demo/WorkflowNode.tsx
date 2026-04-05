"use client";

import { motion } from "framer-motion";
import type { WfNode } from "./types";
import { NODE_W, nodeColors } from "./constants";

interface Props {
  node: WfNode;
  isSelected: boolean;
  delay: number;
  animKey: number;
  onSelect: (id: string) => void;
}

export function WorkflowNode({ node, isSelected, delay, animKey, onSelect }: Props) {
  const c = nodeColors[node.type];

  return (
    <motion.div
      key={`${node.id}-${animKey}`}
      onClick={() => onSelect(node.id)}
      className={`absolute rounded-xl border backdrop-blur-sm px-4 py-3 shadow-sm cursor-pointer transition-shadow ${c.bg} ${c.border} ${
        isSelected ? "ring-2 ring-bolt/40 shadow-md shadow-bolt/10 !border-bolt/40" : "hover:shadow-md"
      }`}
      style={{ left: node.x, top: node.y, width: NODE_W }}
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
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
        <span className="text-[12px] font-bold text-sand-900 leading-tight">{node.label}</span>
      </div>
      <p className="text-[10px] text-sand-500 leading-snug pl-[38px]">{node.desc}</p>
    </motion.div>
  );
}
