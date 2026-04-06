"use client";

import { motion } from "framer-motion";

const item = (i: number, d = 0.08) => ({ initial: { opacity: 0, y: 8 } as const, animate: { opacity: 1, y: 0 } as const, transition: { delay: 0.15 + i * d } });
const pop = (i: number) => ({ initial: { opacity: 0, scale: 0.9 } as const, animate: { opacity: 1, scale: 1 } as const, transition: { delay: 0.3 + i * 0.1, type: "spring" as const, stiffness: 300 } });

function Card({ children, w = "w-[360px]" }: { children: React.ReactNode; w?: string }) {
  return (
    <motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className={`bg-white rounded-2xl border border-sand-200 shadow-lg ${w} mx-auto overflow-hidden`}>
      {children}
    </motion.div>
  );
}

function Badge({ children, cls }: { children: React.ReactNode; cls: string }) {
  return <span className={`text-[10px] font-semibold px-2 py-[2px] rounded-full ${cls}`}>{children}</span>;
}

function Sparkle() {
  return <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06a.75.75 0 11-1.06 1.06L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM10 7a3 3 0 100 6 3 3 0 000-6z"/></svg>;
}

function CheckCircle() {
  return <div className="w-5 h-5 rounded-full bg-emerald-500 grid place-items-center"><svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></div>;
}

function XCircle() {
  return <div className="w-5 h-5 rounded-full bg-red-500 grid place-items-center"><svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>;
}

/* ── SIDEBAR ── */
export function Step01Sidebar() {
  const emailItems = [
    { label: "Inbox", active: true, badge: 12 },
    { label: "Assigned to me" },
    { label: "Mentions" },
    { label: "Sent" },
    { label: "Drafts" },
  ];
  return (
    <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="bg-white rounded-2xl border border-sand-200 shadow-lg w-[240px] mx-auto overflow-hidden">
      <div className="h-[54px] flex items-center px-3.5 gap-2.5 border-b border-sand-200">
        <div className="w-7 h-7 rounded-lg bg-bolt grid place-items-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 164 149" fill="currentColor">
            <path d="M96 74.5C96 82.232 89.732 88.5 82 88.5 74.268 88.5 68 82.232 68 74.5 68 66.768 74.268 60.5 82 60.5 89.732 60.5 96 66.768 96 74.5Z"/>
            <path d="M150 75H82.5L14.5 134.5 82.5 14 150 134.5" stroke="currentColor" strokeWidth="4" fill="none"/>
          </svg>
        </div>
        <span className="text-[15px] font-bold text-sand-900 tracking-tight"><span className="text-bolt">ai</span>fficient</span>
        <span className="text-[11px] font-medium text-sand-400 ml-0.5">Mail</span>
      </div>
      <div className="px-2 pt-3 pb-1">
        <div className="bg-bolt text-white rounded-[10px] px-4 py-2 text-[13px] font-semibold flex items-center gap-2 shadow-md shadow-bolt/15">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          Compose
        </div>
      </div>
      <div className="px-2 pt-3 pb-3">
        <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-sand-400 px-2.5 pb-1.5">Email</div>
        {emailItems.map((it, i) => (
          <motion.div key={it.label} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.06 }} className={`flex items-center gap-2.5 px-2.5 py-[7px] rounded-[10px] text-[13px] font-medium ${it.active ? "bg-bolt/8 text-bolt font-semibold" : "text-sand-500"}`}>
            <span className="flex-1">{it.label}</span>
            {it.badge && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} className="text-[10px] font-bold px-[7px] py-[2px] rounded-full bg-bolt text-white">{it.badge}</motion.span>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ── INBOX ── */
interface EmailItem { initials: string; color: string; from: string; subject: string; preview: string; time: string; unread?: boolean; selected?: boolean; badges?: { label: string; cls: string }[]; needsReply?: boolean; }

export function InboxView({ emails }: { emails: EmailItem[] }) {
  return (
    <Card>
      <div className="px-4 py-3 border-b border-sand-200"><h3 className="text-sm font-bold text-sand-900">Inbox <span className="text-sand-400 font-medium text-[13px] ml-1">{emails.length}</span></h3></div>
      <div className="flex gap-0.5 px-3 py-2 border-b border-sand-200">
        {["All", "Unread", "Priority"].map((t, i) => (
          <button key={t} className={`px-2.5 py-1 text-[11px] font-semibold rounded-md ${i === 0 ? "bg-bolt/8 text-sand-900" : "text-sand-400"}`}>{t}</button>
        ))}
      </div>
      <div>
        {emails.map((e, i) => (
          <motion.div key={i} {...item(i)} className={`relative flex gap-2.5 px-3.5 py-3 border-b border-sand-200 ${e.selected ? "bg-bolt/[0.04]" : ""}`}>
            {e.selected && <div className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-bolt rounded-r" />}
            {e.unread && <div className="absolute left-[14px] top-[18px] w-[7px] h-[7px] rounded-full bg-bolt shadow-[0_0_6px_rgba(242,123,28,0.2)]" />}
            <div className={`w-9 h-9 rounded-[10px] bg-gradient-to-br ${e.color} grid place-items-center text-[12px] font-bold text-white shrink-0`}>{e.initials}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-px"><span className={`text-[13px] ${e.unread ? "font-bold" : "font-semibold"} text-sand-900`}>{e.from}</span><span className="text-[10px] text-sand-400">{e.time}</span></div>
              <div className={`text-[12px] truncate ${e.unread ? "font-semibold text-sand-900" : "text-sand-500"}`}>{e.subject}</div>
              <div className="text-[11px] text-sand-400 truncate">{e.preview}</div>
              {((e.badges && e.badges.length > 0) || e.needsReply) && (
                <div className="flex gap-1 mt-1.5">
                  {e.badges?.map((b) => <Badge key={b.label} cls={b.cls}>{b.label}</Badge>)}
                  {e.needsReply && <Badge cls="bg-orange-500/10 text-orange-600">Needs reply</Badge>}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

/* ── PARSER ── */
export function ParserView({ title, snippet, fields }: { title: string; snippet: string; fields: { label: string; done: boolean }[] }) {
  return (
    <Card>
      <div className="p-4 border-b border-sand-200">
        <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-sand-400 mb-2">E-mail parsing</div>
        <div className="text-sm text-sand-600 leading-relaxed bg-sand-50 rounded-lg p-3 border border-sand-200">
          <p className="mb-1 font-medium text-sand-900">{title}</p>
          <p className="text-[12px] text-sand-500">{snippet}</p>
        </div>
      </div>
      <div className="p-4 space-y-2">
        {fields.map((f, i) => (
          <motion.div key={f.label} {...item(i)} className="flex items-center justify-between bg-sand-50 rounded-lg px-3 py-2.5 border border-sand-200">
            <span className="text-[12px] font-medium text-sand-600">{f.label}</span>
            {f.done ? <motion.div {...pop(i)}><CheckCircle /></motion.div> : (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 rounded-full border-2 border-bolt border-t-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

/* ── EXTRACTION ── */
export function ExtractionView({ data, confidence }: { data: { key: string; value: string }[]; confidence: number }) {
  return (
    <Card>
      <div className="p-4 border-b border-sand-200">
        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-bolt"><Sparkle /> AI Data Extractie</div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 h-1.5 rounded-full bg-sand-200 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${confidence}%` }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full rounded-full bg-bolt" />
          </div>
          <span className="text-[11px] font-bold text-bolt">{confidence}%</span>
        </div>
      </div>
      <div className="p-4 space-y-2">
        {data.map((d, i) => (
          <motion.div key={d.key} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }} className="flex items-center justify-between bg-sand-50 rounded-lg px-3 py-2.5 border border-sand-200">
            <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-sand-400">{d.key}</span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.15 }} className="text-[12px] font-semibold text-sand-900">{d.value}</motion.span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

/* ── VALIDATION ── */
export function ValidationView({ checks }: { checks: { label: string; ok: boolean }[] }) {
  return (
    <Card>
      <div className="p-4 border-b border-sand-200">
        <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-bolt">Validatie</div>
        <p className="text-[12px] text-sand-500 mt-0.5">Controle op verplichte velden</p>
      </div>
      <div className="p-4 space-y-1.5">
        {checks.map((c, i) => (
          <motion.div key={c.label} {...item(i, 0.1)} className={`flex items-center justify-between rounded-lg px-3 py-2.5 border ${c.ok ? "border-sand-200 bg-white" : "border-red-300 bg-red-50"}`}>
            <span className={`text-[12px] font-medium ${c.ok ? "text-sand-600" : "text-red-600"}`}>{c.label}</span>
            <motion.div {...pop(i)}>{c.ok ? <CheckCircle /> : <XCircle />}</motion.div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

/* ── FEEDBACK EMAIL ── */
export function FeedbackView({ to, subject, body, badges }: { to: string; subject: string; body: React.ReactNode; badges: string[] }) {
  return (
    <Card>
      <div className="p-4 border-b border-sand-200">
        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-orange-500">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          Gegenereerde e-mail
        </div>
      </div>
      <div className="p-4 space-y-3">
        <motion.div {...item(0)} className="space-y-1.5">
          <div className="flex gap-2 text-[11px]"><span className="text-sand-400 w-8">Aan:</span><span className="font-medium text-sand-900">{to}</span></div>
          <div className="flex gap-2 text-[11px]"><span className="text-sand-400 w-8">Betr:</span><span className="font-medium text-sand-900">{subject}</span></div>
        </motion.div>
        <motion.div {...item(1)} className="bg-sand-50 rounded-lg p-3 border border-sand-200 text-[12px] text-sand-600 leading-relaxed">{body}</motion.div>
        <motion.div {...item(2)} className="flex items-center gap-2">
          {badges.map((b) => <Badge key={b} cls="bg-bolt/10 text-bolt">{b}</Badge>)}
        </motion.div>
      </div>
    </Card>
  );
}

/* ── APPROVAL ── */
export function ApprovalView({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <div className="p-4 border-b border-sand-200">
        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-purple-600">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          Goedkeuring medewerker
        </div>
      </div>
      <div className="p-4 space-y-3">
        <motion.div {...item(0)} className="bg-sand-50 rounded-lg p-3 border border-sand-200 text-[12px] text-sand-600">
          <p className="font-medium text-sand-900 mb-1">{title}</p>
          <p className="text-[11px] text-sand-500">{description}</p>
        </motion.div>
        <motion.div {...item(1)} className="flex gap-2">
          <motion.button {...pop(0)} className="flex-1 px-4 py-2.5 rounded-[10px] bg-emerald-500 text-white text-[13px] font-semibold flex items-center justify-center gap-2 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            Goedkeuren
          </motion.button>
          <motion.button {...pop(1)} className="flex-1 px-4 py-2.5 rounded-[10px] bg-white border border-sand-200 text-sand-600 text-[13px] font-semibold flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            Aanpassen
          </motion.button>
        </motion.div>
      </div>
    </Card>
  );
}

/* ── RECORD SAVED ── */
export function RecordView({ label, badge, fields }: { label: string; badge: string; fields: { key: string; value: string }[] }) {
  return (
    <Card>
      <div className="p-4 border-b border-sand-200 flex items-center justify-between">
        <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-emerald-600">{label}</div>
        <motion.div {...pop(0)} className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-bold flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
          {badge}
        </motion.div>
      </div>
      <div className="p-4 space-y-1.5">
        {fields.map((f, i) => (
          <motion.div key={f.key} {...item(i, 0.1)} className="flex items-center justify-between py-1.5 border-b border-sand-200 last:border-0">
            <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-sand-400">{f.key}</span>
            <span className="text-[12px] font-semibold text-sand-900">{f.value}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

/* ── DASHBOARD ── */
export function DashboardView({ title, rows }: { title: string; rows: { id: string; col2: string; col3: string; status: string; statusCls: string; highlight?: boolean }[] }) {
  return (
    <Card w="w-[400px]">
      <div className="px-4 py-3 border-b border-sand-200 flex items-center justify-between">
        <h3 className="text-sm font-bold text-sand-900">{title}</h3>
        <span className="text-[11px] text-sand-400 font-medium">Vandaag</span>
      </div>
      {rows.map((o, i) => (
        <motion.div key={o.id} {...item(i)} className={`flex items-center justify-between px-4 py-2.5 border-b border-sand-200 gap-3 ${o.highlight ? "bg-bolt/[0.03]" : ""}`}>
          <span className="text-[11px] font-semibold text-sand-900 shrink-0">{o.id}</span>
          <span className="text-[11px] text-sand-500 flex-1 truncate">{o.col2}</span>
          <span className="text-[11px] font-semibold text-sand-900 shrink-0">{o.col3}</span>
          <Badge cls={o.statusCls}>{o.status}</Badge>
        </motion.div>
      ))}
    </Card>
  );
}

/* ── COMPLETE ── */
export function CompleteView({ title, subtitle, stats }: { title: string; subtitle: string; stats: { value: string; label: string }[] }) {
  return (
    <Card>
      <div className="p-6 text-center space-y-4">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }} className="w-14 h-14 rounded-full bg-emerald-500 grid place-items-center mx-auto shadow-lg shadow-emerald-500/20">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
        </motion.div>
        <div>
          <motion.div {...item(0)} className="text-[15px] font-bold text-sand-900">{title}</motion.div>
          <motion.div {...item(1)} className="text-[12px] text-sand-500 mt-1">{subtitle}</motion.div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...item(i, 0.12)} className="bg-sand-50 rounded-lg py-3 px-2 border border-sand-200">
              <div className="text-[16px] font-bold text-bolt">{s.value}</div>
              <div className="text-[9px] font-semibold uppercase tracking-[0.06em] text-sand-400 mt-0.5">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/* ── INTEGRATION ── */
const allIntegrations: Record<string, { name: string; color: string; icon: string }> = {
  excel: { name: "Excel", color: "#217346", icon: "excel" },
  odoo: { name: "Odoo", color: "#714B67", icon: "odoo" },
  teamleader: { name: "Teamleader", color: "#00B2B2", icon: "teamleader" },
  salesforce: { name: "Salesforce", color: "#00A1E0", icon: "salesforce" },
  hubspot: { name: "HubSpot", color: "#FF7A59", icon: "hubspot" },
  outlook: { name: "Outlook", color: "#0078D4", icon: "outlook" },
  billit: { name: "Billit", color: "#1B1464", icon: "billit" },
  teams: { name: "Teams", color: "#6264A7", icon: "teams" },
  slack: { name: "Slack", color: "#4A154B", icon: "slack" },
  exact: { name: "Exact Online", color: "#F04060", icon: "exact" },
  sheets: { name: "Sheets", color: "#0F9D58", icon: "sheets" },
};

const allIntegrationKeys = Object.keys(allIntegrations);

export function IntegrationView({ title, subtitle }: { title: string; subtitle: string }) {
  const items = allIntegrationKeys.map((k) => allIntegrations[k]);

  return (
    <Card w="w-[380px]">
      <div className="p-5">
        <div className="text-center mb-4">
          <motion.div {...item(0)} className="text-[14px] font-bold text-sand-900">{title}</motion.div>
          <motion.div {...item(1)} className="text-[11px] text-sand-500 mt-0.5">{subtitle}</motion.div>
        </div>

        {/* Hub: Aifficient logo with radial pulse */}
        <div className="flex justify-center mb-3">
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-2xl bg-bolt/10"
              animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl bg-bolt/10"
              animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
              className="relative w-10 h-10 rounded-2xl bg-bolt grid place-items-center shadow-lg shadow-bolt/20"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 164 149" fill="currentColor">
                <path d="M96 74.5C96 82.232 89.732 88.5 82 88.5 74.268 88.5 68 82.232 68 74.5 68 66.768 74.268 60.5 82 60.5 89.732 60.5 96 66.768 96 74.5Z"/>
                <path d="M150 75H82.5L14.5 134.5 82.5 14 150 134.5" stroke="currentColor" strokeWidth="6" fill="none"/>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Vertical connector line */}
        <div className="flex justify-center mb-3">
          <div className="relative w-px h-5 bg-sand-200">
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-bolt"
              animate={{ y: [0, 20], opacity: [1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeIn" }}
            />
          </div>
        </div>

        {/* Integration grid — 4 columns for all 11 */}
        <div className="flex flex-wrap justify-center gap-2 px-1">
          {items.map((intg, i) => (
            <motion.div
              key={intg.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="flex flex-col items-center gap-1 w-18"
            >
              <div className="relative w-10 h-10 rounded-lg bg-white border border-sand-200 shadow-sm grid place-items-center">
                <img src={`/integrations/${intg.icon}.svg`} alt={intg.name} className="w-6 h-6" loading="lazy" />
                <motion.div
                  className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border-[1.5px] border-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.08, type: "spring", stiffness: 300 }}
                />
              </div>
              <span className="text-[8px] font-medium text-sand-400 text-center leading-tight truncate w-full">{intg.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Status */}
        <motion.div {...item(4)} className="flex items-center justify-center gap-1.5 text-[10px] font-semibold text-emerald-600 mt-3">
          <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Data wordt automatisch gesynchroniseerd
        </motion.div>
      </div>
    </Card>
  );
}
