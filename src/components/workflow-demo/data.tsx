"use client";

import type { Workflow } from "./types";
import {
  InboxView,
  ParserView,
  ExtractionView,
  ValidationView,
  FeedbackView,
  ApprovalView,
  RecordView,
  CompleteView,
  IntegrationView,
} from "../showcase/steps";

/* ── Icons ── */
const icons = {
  mail: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  ai: <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06a.75.75 0 11-1.06 1.06L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM10 7a3 3 0 100 6 3 3 0 000-6z"/></svg>,
  check: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>,
  branch: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9"/></svg>,
  save: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>,
  send: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>,
  sync: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>,
  user: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>,
  file: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>,
  truck: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
};

export const workflows: Workflow[] = [
  {
    id: "logistics",
    label: "Logistiek",
    tagline: "E-mail naar order in minder dan 2 minuten",
    icon: icons.truck,
    defaultSelectedId: "1",
    nodes: [
      {
        id: "1", x: 0, y: 100, label: "E-mail ontvangen", desc: "Transportopdracht via e-mail", type: "trigger", icon: icons.mail,
        detail: {
          stepNumber: "01",
          title: "Transportopdracht binnenkomst",
          description: "Een e-mail van Logistics Plus met een nieuwe transportopdracht. De AI labelt het direct als \"Order\" en plaatst het bovenaan.",
          preview: (
            <InboxView emails={[
              { initials: "LP", color: "from-emerald-400 to-cyan-500", from: "Logistics Plus", subject: "Transportopdracht Antwerpen-Gent", preview: "Graag transport voor 12 pallets...", time: "09:46", unread: true, selected: true, badges: [{ label: "Order", cls: "bg-bolt/10 text-bolt" }] },
              { initials: "BV", color: "from-blue-400 to-blue-500", from: "BuildCo NV", subject: "Levering bouwmaterialen", preview: "Bevestiging leveradres voor...", time: "09:12", unread: true, badges: [{ label: "Levering", cls: "bg-blue-500/10 text-blue-600" }] },
              { initials: "TD", color: "from-purple-400 to-purple-500", from: "TransDirect", subject: "Offerte retourzending", preview: "Hierbij onze offerte voor...", time: "08:30", badges: [{ label: "Offerte", cls: "bg-orange-500/10 text-orange-600" }] },
            ]} />
          ),
        },
      },
      {
        id: "2", x: 260, y: 20, label: "AI Classificatie", desc: "Order, offerte of vraag?", type: "ai", icon: icons.ai,
        detail: {
          stepNumber: "02",
          title: "E-mail parsing",
          description: "De parser leest de e-mail, bijlagen en metadata. Adressen, gewichten en leverdata worden gestructureerd.",
          preview: (
            <ParserView
              title="Transportopdracht Antwerpen-Gent"
              snippet="Graag transport voor 12 pallets van Antwerpen naar Gent, levering donderdag voor 14u..."
              fields={[
                { label: "Body text", done: true },
                { label: "Bijlage (CMR)", done: true },
                { label: "Adresgegevens", done: true },
                { label: "Route berekening", done: false },
              ]}
            />
          ),
        },
      },
      {
        id: "3", x: 260, y: 180, label: "Data Extractie", desc: "Adressen, gewicht, deadline", type: "ai", icon: icons.ai,
        detail: {
          stepNumber: "03",
          title: "AI data extractie",
          description: "Ophaaladres, leveradres, gewicht, aantal pallets, leverdeadline en contactpersoon automatisch geextraheerd.",
          preview: (
            <ExtractionView
              confidence={96}
              data={[
                { key: "Ophaaladres", value: "Kaaien 42, Antwerpen" },
                { key: "Leveradres", value: "Kerkstraat 15, Gent" },
                { key: "Pallets", value: "12" },
                { key: "Gewicht", value: "4.800 kg" },
                { key: "Deadline", value: "Do 14:00" },
              ]}
            />
          ),
        },
      },
      {
        id: "4", x: 520, y: 100, label: "Validatie", desc: "Verplichte velden checken", type: "condition", icon: icons.check,
        detail: {
          stepNumber: "04",
          title: "Validatie",
          description: "Alle verplichte velden worden gecontroleerd. Ontbrekende data zoals een referentienummer wordt gemarkeerd.",
          preview: (
            <ValidationView checks={[
              { label: "Ophaaladres", ok: true },
              { label: "Leveradres", ok: true },
              { label: "Pallets & gewicht", ok: true },
              { label: "Leverdeadline", ok: true },
              { label: "Referentienummer", ok: false },
            ]} />
          ),
        },
      },
      {
        id: "5a", x: 780, y: 20, label: "Feedback e-mail", desc: "Ontbrekende info opvragen", type: "action", icon: icons.send,
        detail: {
          stepNumber: "05",
          title: "Feedback e-mail",
          description: "De AI genereert een e-mail naar de klant om het ontbrekende referentienummer op te vragen.",
          preview: (
            <FeedbackView
              to="info@logisticsplus.be"
              subject="Ontbrekende referentie — Transport Antwerpen-Gent"
              body={
                <>
                  <p className="mb-2">Beste,</p>
                  <p className="mb-2">Bedankt voor uw transportopdracht. Om deze correct te verwerken missen we nog het <span className="font-semibold text-red-500">referentienummer</span>.</p>
                  <p>Kunt u dit zo snel mogelijk doorsturen?</p>
                </>
              }
              badges={["Wacht op goedkeuring", "AI gegenereerd"]}
            />
          ),
        },
      },
      {
        id: "5b", x: 780, y: 180, label: "Order opslaan", desc: "TRN-2026-0847 aangemaakt", type: "output", icon: icons.save,
        detail: {
          stepNumber: "06",
          title: "Order opgeslagen",
          description: "De transportopdracht wordt bewaard met alle gevalideerde data: route, gewicht, deadline en klantgegevens.",
          preview: (
            <RecordView
              label="Order opgeslagen"
              badge="Succesvol"
              fields={[
                { key: "Order ID", value: "TRN-2026-0847" },
                { key: "Klant", value: "Logistics Plus" },
                { key: "Route", value: "Antwerpen → Gent" },
                { key: "Pallets", value: "12 (4.800 kg)" },
                { key: "Deadline", value: "Do 14:00" },
              ]}
            />
          ),
        },
      },
      {
        id: "6", x: 1040, y: 100, label: "Sync tools", desc: "Teamleader, Odoo, Excel", type: "integration", icon: icons.sync,
        detail: {
          stepNumber: "07",
          title: "Sync met je tools",
          description: "De order wordt automatisch doorgestuurd naar je bestaande planning- en ERP-software. Geen copy-paste, geen dubbele invoer.",
          preview: (
            <IntegrationView
              title="Automatisch gesynchroniseerd"
              subtitle="TRN-2026-0847 doorgestuurd naar je tools"
              integrations={["teamleader", "odoo", "excel", "slack", "exact"]}
            />
          ),
        },
      },
    ],
    edges: [
      { from: "1", to: "2", accent: true },
      { from: "1", to: "3" },
      { from: "2", to: "4" },
      { from: "3", to: "4" },
      { from: "4", to: "5a", label: "Incompleet" },
      { from: "4", to: "5b", accent: true, label: "Compleet" },
      { from: "5b", to: "6", accent: true },
    ],
  },
  {
    id: "invoicing",
    label: "Facturatie",
    tagline: "Facturen automatisch verwerkt en geboekt",
    icon: icons.file,
    defaultSelectedId: "1",
    nodes: [
      {
        id: "1", x: 0, y: 100, label: "Factuur ontvangen", desc: "PDF factuur via e-mail", type: "trigger", icon: icons.mail,
        detail: {
          stepNumber: "01",
          title: "Factuur ontvangen",
          description: "Een factuur van ACME Services. De AI labelt het als \"Factuur\" en voegt de status \"AI verwerkt\" toe.",
          preview: (
            <InboxView emails={[
              { initials: "AC", color: "from-blue-400 to-purple-500", from: "info@acme.be", subject: "Factuur #2026-045", preview: "In bijlage vindt u onze factuur...", time: "09:46", unread: true, selected: true, badges: [{ label: "Factuur", cls: "bg-blue-500/10 text-blue-600" }, { label: "AI verwerkt", cls: "bg-emerald-500/10 text-emerald-600" }] },
              { initials: "DP", color: "from-emerald-400 to-emerald-500", from: "DigiPrint NV", subject: "Creditnota CN-2026-012", preview: "Hierbij de creditnota voor...", time: "08:30", badges: [{ label: "Creditnota", cls: "bg-amber-500/10 text-amber-600" }] },
            ]} />
          ),
        },
      },
      {
        id: "2", x: 260, y: 100, label: "OCR & Parsing", desc: "Bedrag, BTW, leverancier", type: "ai", icon: icons.ai,
        detail: {
          stepNumber: "02",
          title: "PDF parsing & OCR",
          description: "De factuur-PDF wordt via OCR gelezen. Tabellen, bedragen en BTW-nummers worden gestructureerd.",
          preview: (
            <ExtractionView confidence={98} data={[
              { key: "Leverancier", value: "ACME Services BV" },
              { key: "Bedrag", value: "€ 2.450,00" },
              { key: "BTW", value: "€ 514,50" },
              { key: "Factuurnr", value: "INV-2026-045" },
              { key: "Vervaldag", value: "15 april 2026" },
              { key: "IBAN", value: "BE68 5390 0754 7034" },
            ]} />
          ),
        },
      },
      {
        id: "3", x: 520, y: 20, label: "Validatie", desc: "BTW-nr, IBAN check", type: "condition", icon: icons.check,
        detail: {
          stepNumber: "03",
          title: "Validatie & matching",
          description: "Data wordt gecontroleerd tegen leverancierslijst en openstaande bestellingen. Alles klopt.",
          preview: (
            <ValidationView checks={[
              { label: "Leverancier gekend", ok: true },
              { label: "BTW-nummer geldig", ok: true },
              { label: "Bedrag matcht bestelling", ok: true },
              { label: "IBAN geverifieerd", ok: true },
              { label: "Vervaldag realistisch", ok: true },
            ]} />
          ),
        },
      },
      {
        id: "4", x: 520, y: 180, label: "Matching", desc: "Koppel aan bestelling", type: "ai", icon: icons.branch,
        detail: {
          stepNumber: "04",
          title: "Bestelling matching",
          description: "De AI koppelt de factuur aan de bijbehorende bestelling in het systeem op basis van leverancier en bedrag.",
          preview: (
            <ParserView
              title="Factuur #2026-045 — ACME Services"
              snippet="Hierbij onze factuur voor de geleverde diensten in maart. Bedrag: EUR 2.450,00 excl. BTW..."
              fields={[
                { label: "PDF OCR", done: true },
                { label: "Tabel extractie", done: true },
                { label: "BTW verificatie", done: true },
                { label: "Bankgegevens", done: true },
              ]}
            />
          ),
        },
      },
      {
        id: "5", x: 780, y: 100, label: "Goedkeuring", desc: "Financieel keurt goed", type: "action", icon: icons.user,
        detail: {
          stepNumber: "05",
          title: "Goedkeuring",
          description: "De financiele medewerker reviewt de factuur met een klik. Goedkeuren voor boeking.",
          preview: (
            <ApprovalView
              title="Factuur ACME Services — € 2.450,00"
              description="Alle velden gevalideerd. Klaar voor boeking in het boekhoudpakket."
            />
          ),
        },
      },
      {
        id: "6", x: 1040, y: 100, label: "Boeken & Sync", desc: "Exact Online, Odoo", type: "integration", icon: icons.sync,
        detail: {
          stepNumber: "06",
          title: "Sync met boekhouding",
          description: "De factuur wordt automatisch doorgestuurd naar je boekhoudpakket. Geen manuele invoer meer.",
          preview: (
            <IntegrationView
              title="Automatisch geboekt"
              subtitle="INV-2026-045 gesynchroniseerd"
              integrations={["exact", "odoo", "excel", "sheets", "teamleader"]}
            />
          ),
        },
      },
    ],
    edges: [
      { from: "1", to: "2", accent: true },
      { from: "2", to: "3" },
      { from: "2", to: "4" },
      { from: "3", to: "5" },
      { from: "4", to: "5" },
      { from: "5", to: "6", accent: true },
    ],
  },
  {
    id: "support",
    label: "Klantenservice",
    tagline: "Supportvragen beantwoord voor je team ze leest",
    icon: icons.user,
    defaultSelectedId: "1",
    nodes: [
      {
        id: "1", x: 0, y: 100, label: "Supportvraag", desc: "Klant stuurt e-mail", type: "trigger", icon: icons.mail,
        detail: {
          stepNumber: "01",
          title: "Classificatie & routing",
          description: "De AI labelt de e-mail en wijst het toe aan het juiste teamlid op basis van expertise.",
          preview: (
            <InboxView emails={[
              { initials: "JV", color: "from-red-400 to-orange-500", from: "Jan Vermeer", subject: "Login werkt niet meer", preview: "Sinds gisteren kan ik niet meer...", time: "10:02", unread: true, selected: true, badges: [{ label: "Technisch", cls: "bg-red-500/10 text-red-600" }, { label: "Urgent", cls: "bg-orange-500/10 text-orange-600" }] },
              { initials: "KD", color: "from-blue-400 to-blue-500", from: "Karen De Wit", subject: "Vraag over facturatie", preview: "Ik heb een dubbele afrekening...", time: "09:45", badges: [{ label: "Facturatie", cls: "bg-amber-500/10 text-amber-600" }] },
            ]} />
          ),
        },
      },
      {
        id: "2", x: 260, y: 100, label: "AI Classificatie", desc: "Type, urgentie, routing", type: "ai", icon: icons.ai,
        detail: {
          stepNumber: "02",
          title: "Context ophalen",
          description: "De AI zoekt klantgeschiedenis, eerdere tickets en kennisbank-artikelen op als context.",
          preview: (
            <ParserView
              title="Login werkt niet meer — Jan Vermeer"
              snippet="Sinds gisteren krijg ik een 403 error bij het inloggen. Ik heb mijn wachtwoord al gereset..."
              fields={[
                { label: "Klantprofiel", done: true },
                { label: "Eerdere tickets (3)", done: true },
                { label: "Kennisbank match", done: true },
                { label: "Error logs", done: false },
              ]}
            />
          ),
        },
      },
      {
        id: "3", x: 520, y: 20, label: "Context ophalen", desc: "Klanthistorie, tickets, KB", type: "ai", icon: icons.branch,
        detail: {
          stepNumber: "03",
          title: "AI antwoord genereren",
          description: "Op basis van de vraag en context genereert de AI een gepersonaliseerd antwoord.",
          preview: (
            <FeedbackView
              to="jan.vermeer@email.be"
              subject="Re: Login werkt niet meer"
              body={
                <>
                  <p className="mb-2">Beste Jan,</p>
                  <p className="mb-2">Bedankt voor je melding. We zien dat je account tijdelijk geblokkeerd werd na meerdere pogingen. Ik heb de blokkering opgeheven.</p>
                  <p>Probeer opnieuw in te loggen. Werkt het nog niet? Dan bekijken we het samen.</p>
                </>
              }
              badges={["AI gegenereerd", "Klantcontext gebruikt"]}
            />
          ),
        },
      },
      {
        id: "4", x: 520, y: 180, label: "AI Antwoord", desc: "Gepersonaliseerd antwoord", type: "ai", icon: icons.ai,
        detail: {
          stepNumber: "04",
          title: "Gepersonaliseerd antwoord",
          description: "De AI genereert een antwoord afgestemd op de klantvraag, met context uit eerdere tickets en de kennisbank.",
          preview: (
            <ApprovalView
              title="Antwoord aan Jan Vermeer"
              description="AI-antwoord op basis van klantprofiel en error logs. Blokkering opgeheven."
            />
          ),
        },
      },
      {
        id: "5", x: 780, y: 100, label: "Review & verzend", desc: "Goedkeuren met 1 klik", type: "action", icon: icons.user,
        detail: {
          stepNumber: "05",
          title: "Ticket opgelost",
          description: "Response time en klanttevredenheid worden automatisch gelogd. Gemiddeld 4 min per ticket.",
          preview: (
            <CompleteView
              title="Ticket opgelost"
              subtitle="Support ticket #4821 — Jan Vermeer"
              stats={[
                { value: "4 min", label: "Response time" },
                { value: "0", label: "Escalaties" },
                { value: "98%", label: "Tevredenheid" },
              ]}
            />
          ),
        },
      },
      {
        id: "6", x: 1040, y: 100, label: "CRM Sync", desc: "HubSpot, Salesforce, Slack", type: "integration", icon: icons.sync,
        detail: {
          stepNumber: "06",
          title: "Sync met je helpdesk",
          description: "Het ticket en alle klantdata worden gesynchroniseerd met je bestaande helpdesk en CRM.",
          preview: (
            <IntegrationView
              title="Ticket gesynchroniseerd"
              subtitle="#4821 doorgestuurd naar je tools"
              integrations={["hubspot", "salesforce", "slack", "teamleader", "sheets"]}
            />
          ),
        },
      },
    ],
    edges: [
      { from: "1", to: "2", accent: true },
      { from: "2", to: "3" },
      { from: "2", to: "4" },
      { from: "3", to: "5" },
      { from: "4", to: "5" },
      { from: "5", to: "6", accent: true },
    ],
  },
  {
    id: "leads",
    label: "Leads",
    tagline: "Elke lead opgepikt, gekwalificeerd en opvolgd",
    icon: icons.user,
    defaultSelectedId: "1",
    nodes: [
      {
        id: "1", x: 0, y: 100, label: "Lead ontvangen", desc: "E-mail via website/LinkedIn", type: "trigger", icon: icons.mail,
        detail: {
          stepNumber: "01",
          title: "Lead classificatie",
          description: "De AI classificeert de lead op type en urgentie en toont het in de inbox met juiste labels.",
          preview: (
            <InboxView emails={[
              { initials: "MV", color: "from-emerald-400 to-blue-500", from: "Marc Vanderstraeten", subject: "Interesse in AI-oplossing", preview: "Wij zijn een logistiek bedrijf met...", time: "10:30", unread: true, selected: true, badges: [{ label: "Warm lead", cls: "bg-emerald-500/10 text-emerald-600" }, { label: "Offerte", cls: "bg-bolt/10 text-bolt" }] },
              { initials: "AS", color: "from-purple-400 to-purple-500", from: "Anna Smeets", subject: "Contactformulier website", preview: "Ik zou graag meer info over...", time: "09:15", badges: [{ label: "Website", cls: "bg-blue-500/10 text-blue-600" }] },
            ]} />
          ),
        },
      },
      {
        id: "2", x: 260, y: 100, label: "Data Extractie", desc: "Naam, bedrijf, sector", type: "ai", icon: icons.ai,
        detail: {
          stepNumber: "02",
          title: "Contactgegevens extractie",
          description: "Naam, bedrijf, sector, teamgrootte en specifieke vraag worden automatisch geextraheerd.",
          preview: (
            <ExtractionView confidence={92} data={[
              { key: "Naam", value: "Marc Vanderstraeten" },
              { key: "Bedrijf", value: "LogiFlow BV" },
              { key: "Sector", value: "Logistiek" },
              { key: "Teamgrootte", value: "25 medewerkers" },
              { key: "Vraag", value: "AI email-automatisatie" },
            ]} />
          ),
        },
      },
      {
        id: "3", x: 520, y: 100, label: "Lead Scoring", desc: "Score op sector & urgentie", type: "condition", icon: icons.check,
        detail: {
          stepNumber: "03",
          title: "Lead scoring",
          description: "Op basis van sector, grootte en urgentie krijgt de lead een score. Marc scoort hoog.",
          preview: (
            <ValidationView checks={[
              { label: "Sector match (logistiek)", ok: true },
              { label: "Teamgrootte (25+)", ok: true },
              { label: "Budget indicatie", ok: true },
              { label: "Urgentie (hoog)", ok: true },
              { label: "Decision maker", ok: false },
            ]} />
          ),
        },
      },
      {
        id: "4", x: 780, y: 20, label: "AI Antwoord", desc: "Sector-specifiek antwoord", type: "ai", icon: icons.send,
        detail: {
          stepNumber: "04",
          title: "Gepersonaliseerd antwoord",
          description: "De AI genereert een antwoord afgestemd op de vraag, sector en bedrijfsgrootte.",
          preview: (
            <FeedbackView
              to="marc@logiflow.be"
              subject="Re: Interesse in AI-oplossing"
              body={
                <>
                  <p className="mb-2">Beste Marc,</p>
                  <p className="mb-2">Bedankt voor je interesse. Voor een logistiek bedrijf met 25 medewerkers zien we gemiddeld <span className="font-semibold text-bolt">15+ uur tijdsbesparing per week</span> op e-mailverwerking.</p>
                  <p>Zullen we donderdag een kort gesprek inplannen? Dan toon ik een live demo.</p>
                </>
              }
              badges={["AI gegenereerd", "Sector-specifiek"]}
            />
          ),
        },
      },
      {
        id: "5", x: 780, y: 180, label: "Pipeline", desc: "Lead opgeslagen met score", type: "output", icon: icons.save,
        detail: {
          stepNumber: "05",
          title: "Lead in pipeline",
          description: "De lead wordt opgeslagen met contactinfo, score, correspondentie en volgende stappen.",
          preview: (
            <RecordView
              label="Lead opgeslagen"
              badge="Pipeline"
              fields={[
                { key: "Lead ID", value: "LEAD-2026-0412" },
                { key: "Naam", value: "Marc Vanderstraeten" },
                { key: "Bedrijf", value: "LogiFlow BV" },
                { key: "Score", value: "85 / 100" },
                { key: "Status", value: "Demo ingepland" },
              ]}
            />
          ),
        },
      },
      {
        id: "6", x: 1040, y: 100, label: "CRM Sync", desc: "HubSpot, Salesforce", type: "integration", icon: icons.sync,
        detail: {
          stepNumber: "06",
          title: "Sync met je CRM",
          description: "Elke lead, score en correspondentie wordt automatisch gesynchroniseerd met je CRM en sales tools.",
          preview: (
            <IntegrationView
              title="Lead gesynchroniseerd"
              subtitle="LEAD-2026-0412 in je CRM"
              integrations={["hubspot", "salesforce", "teamleader", "outlook", "teams"]}
            />
          ),
        },
      },
    ],
    edges: [
      { from: "1", to: "2", accent: true },
      { from: "2", to: "3" },
      { from: "3", to: "4" },
      { from: "3", to: "5" },
      { from: "4", to: "6", accent: true },
      { from: "5", to: "6" },
    ],
  },
];
