"use client";

import { useState, useEffect, useCallback } from "react";
import { Paintbrush, X, RotateCcw, Copy, ChevronDown, ChevronUp } from "lucide-react";

const DEFAULTS = {
  "--color-bolt": "#F27B1C",
  "--color-bolt-light": "#F89B4E",
  "--color-bolt-dark": "#D46A12",
  "--color-sand-50": "#FAF9F6",
  "--color-sand-100": "#F0EFEB",
  "--color-sand-200": "#E3E2DD",
  "--color-sand-300": "#D1CFC9",
  "--color-sand-400": "#A3A09A",
  "--color-sand-500": "#78756F",
  "--color-sand-900": "#1E1D1B",
  "--color-sand-950": "#121110",
};

const FONT_OPTIONS = [
  "Fraunces",
  "Playfair Display",
  "Lora",
  "Merriweather",
  "DM Serif Display",
  "Libre Baskerville",
  "Source Serif 4",
];

const BODY_FONT_OPTIONS = [
  "Outfit",
  "Inter",
  "DM Sans",
  "Plus Jakarta Sans",
  "Nunito Sans",
  "Work Sans",
  "Manrope",
];

const STORAGE_KEY = "aifficient-debug-styles";

function hexToHsl(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h: h * 360, s, l };
}

function hslToHex(h: number, s: number, l: number) {
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = Math.round(hue2rgb(p, q, h / 360 + 1 / 3) * 255);
  const g = Math.round(hue2rgb(p, q, h / 360) * 255);
  const b = Math.round(hue2rgb(p, q, h / 360 - 1 / 3) * 255);
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

function deriveBoltVariants(hex: string) {
  const { h, s, l } = hexToHsl(hex);
  return {
    "--color-bolt": hex,
    "--color-bolt-light": hslToHex(h, s, Math.min(l + 0.12, 1)),
    "--color-bolt-dark": hslToHex(h, s, Math.max(l - 0.08, 0)),
  };
}

export function StyleDebugBar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [colors, setColors] = useState(DEFAULTS);
  const [displayFont, setDisplayFont] = useState("Fraunces");
  const [bodyFont, setBodyFont] = useState("Outfit");
  const [borderRadius, setBorderRadius] = useState(16);
  const [fontsLoaded, setFontsLoaded] = useState<Set<string>>(new Set(["Fraunces", "Outfit"]));

  // Load saved state
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.colors) setColors(parsed.colors);
        if (parsed.displayFont) setDisplayFont(parsed.displayFont);
        if (parsed.bodyFont) setBodyFont(parsed.bodyFont);
        if (parsed.borderRadius != null) setBorderRadius(parsed.borderRadius);
      }
    } catch { /* ignore */ }
  }, []);

  // Apply styles via injected <style> tag to reliably override @layer theme
  useEffect(() => {
    const id = "style-debug-overrides";
    let tag = document.getElementById(id) as HTMLStyleElement | null;
    if (!tag) {
      tag = document.createElement("style");
      tag.id = id;
      document.head.appendChild(tag);
    }
    const vars = Object.entries(colors)
      .map(([k, v]) => `${k}: ${v};`)
      .join("\n  ");
    tag.textContent = `:root {\n  ${vars}\n  --card-radius: ${borderRadius}px;\n}`;
  }, [colors, borderRadius]);

  const loadFont = useCallback((font: string) => {
    if (fontsLoaded.has(font)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap`;
    document.head.appendChild(link);
    setFontsLoaded((prev) => new Set([...prev, font]));
  }, [fontsLoaded]);

  useEffect(() => {
    loadFont(displayFont);
    document.documentElement.style.setProperty("--font-fraunces", `"${displayFont}"`);
  }, [displayFont, loadFont]);

  useEffect(() => {
    loadFont(bodyFont);
    document.documentElement.style.setProperty("--font-outfit", `"${bodyFont}"`);
  }, [bodyFont, loadFont]);

  // Save on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ colors, displayFont, bodyFont, borderRadius }));
  }, [colors, displayFont, bodyFont, borderRadius]);

  const updateBolt = (hex: string) => {
    setColors((prev) => ({ ...prev, ...deriveBoltVariants(hex) }));
  };

  const updateColor = (key: string, val: string) => {
    setColors((prev) => ({ ...prev, [key]: val }));
  };

  const reset = () => {
    setColors(DEFAULTS);
    setDisplayFont("Fraunces");
    setBodyFont("Outfit");
    setBorderRadius(16);
    localStorage.removeItem(STORAGE_KEY);
  };

  const exportCSS = () => {
    const lines = Object.entries(colors).map(([k, v]) => `  ${k}: ${v};`);
    lines.push(`  --font-display: "${displayFont}";`);
    lines.push(`  --font-body: "${bodyFont}";`);
    const css = `@theme inline {\n${lines.join("\n")}\n}`;
    navigator.clipboard.writeText(css);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-[9999] flex h-10 w-10 items-center justify-center rounded-full bg-sand-900 text-white shadow-lg hover:bg-sand-800 transition-colors"
        title="Style Debug Bar"
      >
        <Paintbrush size={18} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-72 rounded-2xl bg-sand-950 text-white shadow-2xl border border-white/10 overflow-hidden"
      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Paintbrush size={14} />
          Style Debug
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setCollapsed(!collapsed)} className="p-1 hover:bg-white/10 rounded transition-colors">
            {collapsed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          <button onClick={() => setOpen(false)} className="p-1 hover:bg-white/10 rounded transition-colors">
            <X size={14} />
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="px-4 py-3 space-y-4 max-h-[70vh] overflow-y-auto text-xs">
          {/* Primary color */}
          <div>
            <label className="block text-white/50 uppercase tracking-wider mb-2 font-semibold">Accent kleur</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={colors["--color-bolt"]}
                onChange={(e) => updateBolt(e.target.value)}
                className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
              />
              <input
                type="text"
                value={colors["--color-bolt"]}
                onChange={(e) => { if (/^#[0-9a-fA-F]{6}$/.test(e.target.value)) updateBolt(e.target.value); }}
                className="flex-1 bg-white/10 rounded-lg px-3 py-1.5 text-white font-mono text-xs border border-white/10 focus:outline-none focus:border-white/30"
              />
            </div>
            <div className="flex gap-1.5 mt-2">
              {["#F27B1C", "#3B82F6", "#10B981", "#8B5CF6", "#EC4899", "#EF4444", "#F59E0B", "#06B6D4"].map((c) => (
                <button
                  key={c}
                  onClick={() => updateBolt(c)}
                  className="w-6 h-6 rounded-full border-2 transition-transform hover:scale-110"
                  style={{
                    background: c,
                    borderColor: colors["--color-bolt"] === c ? "white" : "transparent",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Background colors */}
          <div>
            <label className="block text-white/50 uppercase tracking-wider mb-2 font-semibold">Achtergrond</label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-white/40 block mb-1">Licht (sand-50)</span>
                <div className="flex items-center gap-1.5">
                  <input type="color" value={colors["--color-sand-50"]} onChange={(e) => updateColor("--color-sand-50", e.target.value)} className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent" />
                  <span className="font-mono text-white/60">{colors["--color-sand-50"]}</span>
                </div>
              </div>
              <div>
                <span className="text-white/40 block mb-1">Alt (sand-100)</span>
                <div className="flex items-center gap-1.5">
                  <input type="color" value={colors["--color-sand-100"]} onChange={(e) => updateColor("--color-sand-100", e.target.value)} className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent" />
                  <span className="font-mono text-white/60">{colors["--color-sand-100"]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Display font */}
          <div>
            <label className="block text-white/50 uppercase tracking-wider mb-2 font-semibold">Display font</label>
            <select
              value={displayFont}
              onChange={(e) => setDisplayFont(e.target.value)}
              className="w-full bg-white/10 rounded-lg px-3 py-2 text-white border border-white/10 focus:outline-none focus:border-white/30 appearance-none cursor-pointer"
            >
              {FONT_OPTIONS.map((f) => (
                <option key={f} value={f} className="bg-sand-950">{f}</option>
              ))}
            </select>
            <div className="mt-2 p-2 rounded-lg bg-white/5 text-center" style={{ fontFamily: `"${displayFont}", serif` }}>
              <span className="text-lg font-semibold">Aifficient Mail</span>
            </div>
          </div>

          {/* Body font */}
          <div>
            <label className="block text-white/50 uppercase tracking-wider mb-2 font-semibold">Body font</label>
            <select
              value={bodyFont}
              onChange={(e) => setBodyFont(e.target.value)}
              className="w-full bg-white/10 rounded-lg px-3 py-2 text-white border border-white/10 focus:outline-none focus:border-white/30 appearance-none cursor-pointer"
            >
              {BODY_FONT_OPTIONS.map((f) => (
                <option key={f} value={f} className="bg-sand-950">{f}</option>
              ))}
            </select>
            <div className="mt-2 p-2 rounded-lg bg-white/5" style={{ fontFamily: `"${bodyFont}", sans-serif` }}>
              <span className="text-sm">Dit is een voorbeeld van body tekst.</span>
            </div>
          </div>

          {/* Border radius */}
          <div>
            <label className="block text-white/50 uppercase tracking-wider mb-2 font-semibold">
              Card radius: {borderRadius}px
            </label>
            <input
              type="range"
              min={0}
              max={32}
              value={borderRadius}
              onChange={(e) => setBorderRadius(Number(e.target.value))}
              className="w-full accent-[var(--color-bolt)]"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2 border-t border-white/10">
            <button
              onClick={reset}
              className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-xs font-medium hover:bg-white/15 transition-colors"
            >
              <RotateCcw size={12} />
              Reset
            </button>
            <button
              onClick={exportCSS}
              className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-xs font-medium hover:bg-white/15 transition-colors"
            >
              <Copy size={12} />
              Export CSS
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
