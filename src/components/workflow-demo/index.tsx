"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workflows } from "./data";
import { WorkflowCanvas } from "./WorkflowCanvas";
import { ExplanationPanel } from "./ExplanationPanel";
import { WorkflowSelector } from "./WorkflowSelector";

const INTERVAL = 5500;

export function WorkflowDemo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedNodeId, setSelectedNodeId] = useState(workflows[0].defaultSelectedId);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const flow = workflows[activeIdx];
  const selectedNode = flow.nodes.find((n) => n.id === selectedNodeId) ?? flow.nodes[0];
  const sortedNodes = [...flow.nodes].sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
  const currentIdx = sortedNodes.findIndex((n) => n.id === selectedNodeId);

  const selectFlow = useCallback((idx: number) => {
    setActiveIdx(idx);
    setSelectedNodeId(workflows[idx].defaultSelectedId);
    setAnimKey((k) => k + 1);
    setProgress(0);
  }, []);

  const goToNode = useCallback((id: string) => {
    setSelectedNodeId(id);
    setProgress(0);
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (paused) return;
    const tick = 30;
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + (tick / INTERVAL) * 100;
        if (next >= 100) {
          // Advance to next node
          setSelectedNodeId((prev) => {
            const sorted = [...flow.nodes].sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
            const idx = sorted.findIndex((n) => n.id === prev);
            return sorted[(idx + 1) % sorted.length].id;
          });
          return 0;
        }
        return next;
      });
    }, tick);
    return () => clearInterval(interval);
  }, [paused, flow]);

  useEffect(() => { setAnimKey(1); }, []);

  return (
    <section id="showcase" className="py-16">
      <div className="max-w-300 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="section-label mb-3 block">Workflow</span>
          <h2
            className="font-display font-semibold tracking-tight text-sand-900 mb-3"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            Zie het in <span className="text-bolt italic">actie</span>
          </h2>
          <p className="text-base text-sand-500 max-w-130 mx-auto">
            Kies jouw sector en ontdek hoe aifficient e-mails omzet in actie — volledig automatisch.
          </p>
        </div>

        {/* Selector */}
        <WorkflowSelector workflows={workflows} activeIdx={activeIdx} onSelect={selectFlow} />

        {/* Tagline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={flow.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center mb-5"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bolt/8 text-bolt text-[12px] font-semibold">
              {flow.icon}
              {flow.tagline}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Main content */}
        <div
          className="card overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px]">
            <WorkflowCanvas workflow={flow} selectedNodeId={selectedNodeId} onNodeClick={goToNode} animKey={animKey} />
            <ExplanationPanel node={selectedNode} workflow={flow} onNodeNavigate={goToNode} />
          </div>

          {/* Progress bar */}
          <div className="flex gap-0.5 px-4 pb-3">
            {sortedNodes.map((n, i) => (
              <div
                key={n.id}
                className="flex-1 h-1 rounded-full bg-sand-200 overflow-hidden cursor-pointer"
                onClick={() => goToNode(n.id)}
              >
                <div
                  className="h-full bg-bolt rounded-full transition-[width] duration-75"
                  style={{
                    width: n.id === selectedNodeId ? `${progress}%` : i < currentIdx ? "100%" : "0%",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
