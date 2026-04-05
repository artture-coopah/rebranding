import type { NodeType } from "./types";

export const NODE_W = 200;
export const NODE_H = 72;

export const nodeColors: Record<NodeType, { bg: string; border: string; iconBg: string; dot: string }> = {
  trigger:     { bg: "bg-bolt/8",          border: "border-bolt/25",         iconBg: "bg-bolt/15 text-bolt",               dot: "var(--color-bolt)" },
  ai:          { bg: "bg-emerald-500/8",   border: "border-emerald-500/25",  iconBg: "bg-emerald-500/15 text-emerald-600", dot: "#22c55e" },
  action:      { bg: "bg-blue-500/8",      border: "border-blue-500/25",     iconBg: "bg-blue-500/15 text-blue-600",       dot: "#3b82f6" },
  condition:   { bg: "bg-amber-500/8",     border: "border-amber-500/25",    iconBg: "bg-amber-500/15 text-amber-600",     dot: "#f59e0b" },
  output:      { bg: "bg-purple-500/8",    border: "border-purple-500/25",   iconBg: "bg-purple-500/15 text-purple-600",   dot: "#8b5cf6" },
  integration: { bg: "bg-cyan-500/8",      border: "border-cyan-500/25",     iconBg: "bg-cyan-500/15 text-cyan-600",       dot: "#06b6d4" },
};

export const PARTICLE_DURATION = 2.5;
export const EDGE_DRAW_DURATION = 0.6;
