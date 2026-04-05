"use client";

import type { Workflow } from "./types";

interface Props {
  workflows: Workflow[];
  activeIdx: number;
  onSelect: (idx: number) => void;
}

export function WorkflowSelector({ workflows, activeIdx, onSelect }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {workflows.map((w, i) => (
        <button
          key={w.id}
          onClick={() => onSelect(i)}
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
  );
}
