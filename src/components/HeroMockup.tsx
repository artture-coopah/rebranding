"use client";

import { motion } from "framer-motion";

const item = (i: number, d = 0.08) => ({ initial: { opacity: 0, y: 6 } as const, animate: { opacity: 1, y: 0 } as const, transition: { delay: 0.4 + i * d } });
const pop = (i: number, base = 0.8) => ({ initial: { opacity: 0, scale: 0.85 } as const, animate: { opacity: 1, scale: 1 } as const, transition: { delay: base + i * 0.1, type: "spring" as const, stiffness: 260, damping: 20 } });

/* ── Sidebar ── */
function Sidebar() {
  const nav = [
    { label: "Inbox", active: true, badge: 12 },
    { label: "Assigned to me" },
    { label: "Mentions" },
    { label: "Sent" },
    { label: "Drafts" },
  ];
  const platform = [
    { label: "Dashboard" },
    { label: "Automations" },
    { label: "Agents" },
    { label: "Analytics" },
  ];
  return (
    <div className="w-[160px] shrink-0 bg-sand-50 border-r border-sand-200 flex flex-col">
      <div className="h-[42px] flex items-center px-3 gap-2 border-b border-sand-200">
        <div className="w-5 h-5 rounded bg-bolt grid place-items-center">
          <svg className="w-3 h-3 text-white" viewBox="0 0 164 149" fill="currentColor">
            <path d="M96 74.5C96 82.232 89.732 88.5 82 88.5 74.268 88.5 68 82.232 68 74.5 68 66.768 74.268 60.5 82 60.5 89.732 60.5 96 66.768 96 74.5Z"/>
            <path d="M150 75H82.5L14.5 134.5 82.5 14 150 134.5" stroke="currentColor" strokeWidth="6" fill="none"/>
          </svg>
        </div>
        <span className="text-[11px] font-bold text-sand-900 tracking-tight"><span className="text-bolt">ai</span>fficient</span>
        <span className="text-[9px] font-medium text-sand-400">Mail</span>
      </div>
      <div className="px-2 pt-2">
        <motion.div {...pop(0, 0.3)} className="bg-bolt text-white rounded-lg px-3 py-1.5 text-[10px] font-semibold flex items-center gap-1.5 shadow-sm shadow-bolt/15">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          Compose
        </motion.div>
      </div>
      <div className="px-1.5 pt-2">
        <div className="text-[8px] font-semibold uppercase tracking-[0.1em] text-sand-400 px-2 pb-1">Email</div>
        {nav.map((n, i) => (
          <motion.div key={n.label} {...item(i, 0.05)} className={`flex items-center gap-1.5 px-2 py-[5px] rounded-lg text-[10px] font-medium ${n.active ? "bg-bolt/8 text-bolt font-semibold" : "text-sand-500"}`}>
            <span className="flex-1">{n.label}</span>
            {n.badge && <motion.span {...pop(0, 0.6)} className="text-[8px] font-bold px-1.5 py-px rounded-full bg-bolt text-white">{n.badge}</motion.span>}
          </motion.div>
        ))}
      </div>
      <div className="px-1.5 pt-1 flex-1">
        <div className="text-[8px] font-semibold uppercase tracking-[0.1em] text-sand-400 px-2 pb-1 pt-1">Platform</div>
        {platform.map((n, i) => (
          <motion.div key={n.label} {...item(i + 5, 0.05)} className="px-2 py-[5px] rounded-lg text-[10px] font-medium text-sand-500">
            {n.label}
          </motion.div>
        ))}
      </div>
      <div className="px-2.5 py-2 border-t border-sand-200 flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-bolt/10 grid place-items-center text-[8px] font-bold text-bolt">TV</div>
        <div>
          <div className="text-[9px] font-semibold text-sand-900">Tuur Vanbiervliet</div>
          <div className="text-[8px] text-sand-400">Team attached</div>
        </div>
      </div>
    </div>
  );
}

/* ── Stats bar ── */
function StatsBar() {
  const stats = [
    { label: "Nieuwe emails", value: "12", color: "#4d8eff", bg: "rgba(77,142,255,0.08)" },
    { label: "In behandeling", value: "5", color: "#F27B1C", bg: "rgba(242,123,28,0.08)" },
    { label: "AI verwerkt", value: "34", color: "#22c55e", bg: "rgba(34,197,94,0.08)" },
    { label: "Gem. responstijd", value: "3.8", unit: "min", color: "#8b5cf6", bg: "rgba(139,92,246,0.08)" },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 p-3 border-b border-sand-200">
      {stats.map((s, i) => (
        <motion.div key={s.label} {...pop(i, 0.2)} className="bg-white rounded-lg border border-sand-200 p-2.5">
          <div className="w-5 h-5 rounded-md grid place-items-center mb-1.5" style={{ background: s.bg }}>
            <svg className="w-3 h-3" style={{ color: s.color }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {i === 0 && <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>}
              {i === 1 && <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>}
              {i === 2 && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>}
              {i === 3 && <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>}
            </svg>
          </div>
          <div className="text-[8px] text-sand-400">{s.label}</div>
          <div className="text-[14px] font-bold" style={{ color: s.color }}>{s.value} {s.unit && <span className="text-[9px] font-medium text-sand-400">{s.unit}</span>}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Email list ── */
function EmailList() {
  const emails = [
    { initials: "SJ", gradient: "linear-gradient(135deg,#F27B1C,#F89B4E)", from: "Sarah Johnson", subject: "Project kickoff next week", preview: "Hi, just following up on...", time: "10:24", selected: true, unread: true, badges: [] as { label: string; cls: string }[] },
    { initials: "AC", gradient: "linear-gradient(135deg,#4d8eff,#8b5cf6)", from: "info@acme.be", subject: "Invoice #2026-045", preview: "Please find attached the invoice...", time: "09:46", selected: false, unread: true, badges: [{ label: "Factuur", cls: "bg-blue-500/10 text-blue-600" }, { label: "AI verwerkt", cls: "bg-emerald-500/10 text-emerald-600" }] },
    { initials: "TD", gradient: "linear-gradient(135deg,#22c55e,#4d9fff)", from: "Thomas De Smet", subject: "Question about the proposal", preview: "Could you clarify the timeline...", time: "09:12", selected: false, unread: false, badges: [] as { label: string; cls: string }[], needsReply: true },
    { initials: "SR", gradient: "linear-gradient(135deg,#f07040,#f04060)", from: "Support Request", subject: "Auto-assigned to Emma", preview: "He reported seeing the notification...", time: "09:06", selected: false, unread: false, badges: [{ label: "Support", cls: "bg-purple-500/10 text-purple-600" }] },
    { initials: "MD", gradient: "linear-gradient(135deg,#8b5cf6,#F27B1C)", from: "Marie Dubois", subject: "Budget approval", preview: "Towards a merged to details...", time: "08:32", selected: false, unread: false, badges: [{ label: "Approval", cls: "bg-amber-500/10 text-amber-600" }] },
    { initials: "LP", gradient: "linear-gradient(135deg,#22c55e,#00b8d9)", from: "Logistics Plus", subject: "Offerte transport Antwerpen", preview: "Graag ontvangen wij een offerte voor...", time: "08:10", selected: false, unread: true, badges: [{ label: "Offerte", cls: "bg-orange-500/10 text-orange-600" }, { label: "AI verwerkt", cls: "bg-emerald-500/10 text-emerald-600" }] },
  ];
  return (
    <div className="w-[250px] shrink-0 border-r border-sand-200 flex flex-col">
      <div className="px-3 py-2.5 border-b border-sand-200 flex items-center justify-between">
        <h3 className="text-[11px] font-bold text-sand-900">Inbox <span className="text-sand-400 font-medium ml-0.5">12</span></h3>
      </div>
      <div className="flex items-center gap-px px-2 py-1.5 border-b border-sand-200">
        {["All", "Unread", "Priority"].map((t, i) => (
          <button key={t} className={`px-2 py-0.5 text-[9px] font-semibold rounded ${i === 0 ? "bg-bolt/8 text-sand-900" : "text-sand-400"}`}>{t}</button>
        ))}
      </div>
      <div className="flex-1 overflow-hidden">
        {emails.map((e, i) => (
          <motion.div key={i} {...item(i, 0.07)} className={`relative flex gap-2 px-2.5 py-2 border-b border-sand-200 ${e.selected ? "bg-bolt/[0.04]" : ""}`}>
            {e.selected && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-bolt rounded-r" />}
            {e.unread && <div className="absolute left-[10px] top-[12px] w-[5px] h-[5px] rounded-full bg-bolt shadow-[0_0_4px_rgba(242,123,28,0.3)]" />}
            <div className="w-7 h-7 rounded-lg grid place-items-center text-[9px] font-bold text-white shrink-0" style={{ background: e.gradient }}>{e.initials}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] ${e.unread ? "font-bold" : "font-semibold"} text-sand-900`}>{e.from}</span>
                <span className="text-[8px] text-sand-400">{e.time}</span>
              </div>
              <div className={`text-[9px] truncate ${e.unread ? "font-semibold text-sand-900" : "text-sand-500"}`}>{e.subject}</div>
              <div className="text-[8px] text-sand-400 truncate">{e.preview}</div>
              {(e.badges.length > 0 || e.needsReply) && (
                <div className="flex gap-0.5 mt-1">
                  {e.badges.map((b) => <span key={b.label} className={`text-[7px] font-semibold px-1.5 py-px rounded-full ${b.cls}`}>{b.label}</span>)}
                  {e.needsReply && <span className="text-[7px] font-semibold px-1.5 py-px rounded bg-orange-500/10 text-orange-600">Needs reply</span>}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Detail pane ── */
function DetailPane() {
  const chips = ["Draft reply", "Schedule meeting", "Create task", "Summarize"];
  return (
    <div className="flex-1 flex flex-col min-w-0">
      <div className="px-3 py-1.5 border-b border-sand-200 flex gap-1">
        {["search", "mail-check", "pin", "copy", "folder", "trash"].map((ic) => (
          <div key={ic} className="w-5 h-5 rounded grid place-items-center text-sand-400">
            <div className="w-2.5 h-2.5 rounded-sm bg-sand-200" />
          </div>
        ))}
        <div className="flex-1" />
        <div className="w-5 h-5 rounded grid place-items-center"><div className="w-2.5 h-2.5 rounded-sm bg-sand-200" /></div>
        <div className="w-5 h-5 rounded grid place-items-center"><div className="w-2.5 h-2.5 rounded-sm bg-sand-200" /></div>
      </div>
      <motion.div {...item(0)} className="px-4 py-3 border-b border-sand-200">
        <div className="text-[13px] font-bold text-sand-900 tracking-tight mb-2">Project kickoff next week</div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg grid place-items-center text-[9px] font-bold text-white" style={{ background: "linear-gradient(135deg,#F27B1C,#F89B4E)" }}>SJ</div>
          <div>
            <div className="text-[10px] font-semibold text-sand-900">Sarah Johnson <span className="font-normal text-sand-400">sarah@company.com</span></div>
            <div className="text-[9px] text-sand-400">team@company.com</div>
          </div>
          <div className="ml-auto text-[9px] text-sand-400">10:24</div>
        </div>
      </motion.div>
      <motion.div {...item(1)} className="flex-1 px-4 py-3 text-[10px] text-sand-500 leading-relaxed overflow-hidden">
        <p className="mb-2">Hi team,</p>
        <p className="mb-2">Just following up on our kickoff meeting for the new project. Can we schedule it for Tuesday 10 AM?</p>
        <p>Best,<br />Sarah</p>
      </motion.div>
      <motion.div {...item(2)} className="px-3 py-2 bg-bolt/[0.03] border-t border-sand-200">
        <div className="flex items-center gap-1 text-[8px] font-bold text-sand-500 uppercase tracking-[0.04em] mb-1.5">
          <svg className="w-2.5 h-2.5 text-bolt" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06a.75.75 0 11-1.06 1.06L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM10 7a3 3 0 100 6 3 3 0 000-6z"/></svg>
          AI Suggestions
        </div>
        <div className="flex flex-wrap gap-1">
          {chips.map((c, i) => (
            <motion.div key={c} {...pop(i, 1.0)} className="px-2 py-1 rounded-md bg-white border border-sand-200 text-[8px] font-semibold text-sand-600">
              {c}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div {...item(3)} className="px-3 py-2 border-t border-sand-200 flex items-center gap-1.5">
        <div className="px-2.5 py-1 rounded-lg bg-sand-100 border border-sand-200 text-[9px] font-semibold text-sand-600 flex items-center gap-1">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10h10a5 5 0 015 5v2M3 10l5-5M3 10l5 5"/></svg>
          Reply
        </div>
        <div className="px-2.5 py-1 rounded-lg bg-sand-100 border border-sand-200 text-[9px] font-semibold text-sand-600 flex items-center gap-1">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10h-10a5 5 0 00-5 5v2M21 10l-5-5M21 10l-5 5"/></svg>
          Forward
        </div>
        <div className="flex-1" />
        <motion.div {...pop(0, 1.2)} className="px-2.5 py-1 rounded-lg bg-bolt text-white text-[9px] font-semibold flex items-center gap-1 shadow-sm shadow-bolt/15">
          <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM10 7a3 3 0 100 6 3 3 0 000-6z"/></svg>
          AI Antwoord
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Main mockup ── */
export function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-sand-200 bg-sand-50"
      style={{ fontFamily: "var(--font-body), 'Inter', sans-serif" }}
    >
      <div className="bg-white border-b border-sand-200 px-3 py-2 flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
      </div>
      <div className="flex h-[380px]">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <StatsBar />
          <div className="flex flex-1 min-h-0">
            <EmailList />
            <DetailPane />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
