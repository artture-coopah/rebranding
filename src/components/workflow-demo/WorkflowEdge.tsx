"use client";

import { useEffect, useRef } from "react";
import type { WfNode } from "./types";
import { NODE_W, NODE_H, PARTICLE_DURATION } from "./constants";

/* Compute cubic bezier edge path between two nodes */
export function edgePath(fromNode: WfNode, toNode: WfNode): string {
  const x1 = fromNode.x + NODE_W;
  const y1 = fromNode.y + NODE_H / 2;
  const x2 = toNode.x;
  const y2 = toNode.y + NODE_H / 2;
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

/* Label at the midpoint of an edge */
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

/* Animated edge line with optional flow particle */
interface EdgeLineProps {
  d: string;
  accent?: boolean;
  delay: number;
  label?: string;
  isConnectedToSelected?: boolean;
  showParticle?: boolean;
}

export function EdgeLine({ d, accent, delay, label, isConnectedToSelected, showParticle }: EdgeLineProps) {
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

  const strokeColor = accent ? "var(--color-bolt)" : isConnectedToSelected ? "#A3A09A" : "#D1CFC9";
  const strokeW = accent ? 2.5 : 2;

  return (
    <>
      <path
        ref={ref}
        d={d}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeW}
        strokeLinecap="round"
      />
      {label && <LabelOnPath d={d} label={label} delay={delay} />}
      {showParticle && accent && (
        <circle r="3.5" fill="var(--color-bolt)" opacity="0.7">
          <animateMotion
            dur={`${PARTICLE_DURATION}s`}
            repeatCount="indefinite"
            begin={`${delay + 0.8}s`}
            path={d}
          />
        </circle>
      )}
    </>
  );
}
