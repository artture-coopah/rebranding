"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Step01Sidebar,
  InboxView,
  ParserView,
  ExtractionView,
  ValidationView,
  FeedbackView,
  ApprovalView,
  RecordView,
  DashboardView,
  CompleteView,
  IntegrationView,
} from "./showcase/steps";

const INTERVAL = 5500;

interface Slide {
  step: string;
  title: string;
  description: string;
  component: React.ReactNode;
}

interface Flow {
  id: string;
  label: string;
  icon: JSX.Element;
  tagline: string;
  slides: Slide[];
}

/* ── Icons ── */
const TruckIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const FileIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);
const HeadsetIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 18v-6a9 9 0 0118 0v6" />
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
  </svg>
);
const ShoppingIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <path d="M3 6h18M16 10a4 4 0 01-8 0" />
  </svg>
);
const LeadIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

/* ── Flow definitions ── */
const flows: Flow[] = [
  {
    id: "logistics",
    label: "Logistiek & Transport",
    icon: TruckIcon,
    tagline: "E-mail naar order in minder dan 2 minuten",
    slides: [
      {
        step: "01",
        title: "Open de inbox",
        description:
          "Alle inkomende e-mails verschijnen in een gedeelde team inbox. AI-classificatie en routing gebeuren automatisch.",
        component: <Step01Sidebar />,
      },
      {
        step: "02",
        title: "Transportopdracht binnenkomst",
        description:
          "Een e-mail van Logistics Plus met een nieuwe transportopdracht. De AI labelt het direct als \"Order\" en plaatst het bovenaan.",
        component: (
          <InboxView
            emails={[
              {
                initials: "LP",
                color: "from-emerald-400 to-cyan-500",
                from: "Logistics Plus",
                subject: "Transportopdracht Antwerpen-Gent",
                preview: "Graag transport voor 12 pallets...",
                time: "09:46",
                unread: true,
                selected: true,
                badges: [{ label: "Order", cls: "bg-bolt/10 text-bolt" }],
              },
              {
                initials: "BV",
                color: "from-blue-400 to-blue-500",
                from: "BuildCo NV",
                subject: "Levering bouwmaterialen",
                preview: "Bevestiging leveradres voor...",
                time: "09:12",
                unread: true,
                badges: [{ label: "Levering", cls: "bg-blue-500/10 text-blue-600" }],
              },
              {
                initials: "TD",
                color: "from-purple-400 to-purple-500",
                from: "TransDirect",
                subject: "Offerte retourzending",
                preview: "Hierbij onze offerte voor...",
                time: "08:30",
                badges: [{ label: "Offerte", cls: "bg-orange-500/10 text-orange-600" }],
              },
            ]}
          />
        ),
      },
      {
        step: "03",
        title: "E-mail parsing",
        description:
          "De parser leest de e-mail, bijlagen en metadata. Adressen, gewichten en leverdata worden gestructureerd.",
        component: (
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
      {
        step: "04",
        title: "AI data extractie",
        description:
          "Ophaaladres, leveradres, gewicht, aantal pallets, leverdeadline en contactpersoon automatisch geextraheerd.",
        component: (
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
      {
        step: "05",
        title: "Validatie",
        description:
          "Alle verplichte velden worden gecontroleerd. Ontbrekende data zoals een referentienummer wordt gemarkeerd.",
        component: (
          <ValidationView
            checks={[
              { label: "Ophaaladres", ok: true },
              { label: "Leveradres", ok: true },
              { label: "Pallets & gewicht", ok: true },
              { label: "Leverdeadline", ok: true },
              { label: "Referentienummer", ok: false },
            ]}
          />
        ),
      },
      {
        step: "06",
        title: "Feedback e-mail",
        description:
          "De AI genereert een e-mail naar de klant om het ontbrekende referentienummer op te vragen.",
        component: (
          <FeedbackView
            to="info@logisticsplus.be"
            subject="Ontbrekende referentie — Transport Antwerpen-Gent"
            body={
              <>
                <p className="mb-2">Beste,</p>
                <p className="mb-2">
                  Bedankt voor uw transportopdracht. Om deze correct te verwerken missen we nog het{" "}
                  <span className="font-semibold text-red-500">referentienummer</span>.
                </p>
                <p>Kunt u dit zo snel mogelijk doorsturen?</p>
              </>
            }
            badges={["Wacht op goedkeuring", "AI gegenereerd"]}
          />
        ),
      },
      {
        step: "07",
        title: "Goedkeuring",
        description:
          "Een planner reviewt de gegenereerde e-mail. Met een klik goedkeuren of tekst aanpassen.",
        component: (
          <ApprovalView
            title="Feedback e-mail naar Logistics Plus"
            description="Vraag om ontbrekend referentienummer voor transport Antwerpen-Gent"
          />
        ),
      },
      {
        step: "08",
        title: "Order opgeslagen",
        description:
          "De transportopdracht wordt bewaard met alle gevalideerde data: route, gewicht, deadline en klantgegevens.",
        component: (
          <RecordView
            label="Order opgeslagen"
            badge="Succesvol"
            fields={[
              { key: "Order ID", value: "TRN-2026-0847" },
              { key: "Klant", value: "Logistics Plus" },
              { key: "Route", value: "Antwerpen \u2192 Gent" },
              { key: "Pallets", value: "12 (4.800 kg)" },
              { key: "Deadline", value: "Do 14:00" },
            ]}
          />
        ),
      },
      {
        step: "09",
        title: "Planning dashboard",
        description:
          "De order verschijnt in het planning dashboard. Chauffeurs en ritten worden direct toegewezen.",
        component: (
          <DashboardView
            title="Transportplanning"
            rows={[
              {
                id: "TRN-0847",
                col2: "Logistics Plus",
                col3: "Antw \u2192 Gent",
                status: "Nieuw",
                statusCls: "bg-bolt/10 text-bolt",
                highlight: true,
              },
              {
                id: "TRN-0846",
                col2: "BuildCo NV",
                col3: "Gent \u2192 Brugge",
                status: "Gepland",
                statusCls: "bg-blue-500/10 text-blue-600",
              },
              {
                id: "TRN-0845",
                col2: "TransDirect",
                col3: "Brussel \u2192 Luik",
                status: "Onderweg",
                statusCls: "bg-emerald-500/10 text-emerald-600",
              },
            ]}
          />
        ),
      },
      {
        step: "10",
        title: "Klaar voor planning",
        description:
          "Van e-mail tot geplande transportopdracht. Doorlooptijd: minder dan 2 minuten. Nul fouten.",
        component: (
          <CompleteView
            title="Klaar voor planning"
            subtitle="Transport TRN-2026-0847 is volledig verwerkt"
            stats={[
              { value: "< 2 min", label: "Doorlooptijd" },
              { value: "1", label: "Manuele stap" },
              { value: "0", label: "Fouten" },
            ]}
          />
        ),
      },
      {
        step: "11",
        title: "Sync met je tools",
        description:
          "De order wordt automatisch doorgestuurd naar je bestaande planning- en ERP-software. Geen copy-paste, geen dubbele invoer.",
        component: (
          <IntegrationView
            title="Automatisch gesynchroniseerd"
            subtitle="TRN-2026-0847 doorgestuurd naar je tools"
            integrations={["teamleader", "odoo", "excel", "slack", "exact"]}
          />
        ),
      },
    ],
  },
  {
    id: "invoicing",
    label: "Facturatie & Finance",
    icon: FileIcon,
    tagline: "Facturen automatisch verwerkt en geboekt",
    slides: [
      {
        step: "01",
        title: "Open de inbox",
        description:
          "Inkomende facturen worden automatisch herkend en geprioriteerd in de team inbox.",
        component: <Step01Sidebar />,
      },
      {
        step: "02",
        title: "Factuur ontvangen",
        description:
          "Een factuur van ACME Services. De AI labelt het als \"Factuur\" en voegt de status \"AI verwerkt\" toe.",
        component: (
          <InboxView
            emails={[
              {
                initials: "AC",
                color: "from-blue-400 to-purple-500",
                from: "info@acme.be",
                subject: "Factuur #2026-045",
                preview: "In bijlage vindt u onze factuur...",
                time: "09:46",
                unread: true,
                selected: true,
                badges: [
                  { label: "Factuur", cls: "bg-blue-500/10 text-blue-600" },
                  { label: "AI verwerkt", cls: "bg-emerald-500/10 text-emerald-600" },
                ],
              },
              {
                initials: "DP",
                color: "from-emerald-400 to-emerald-500",
                from: "DigiPrint NV",
                subject: "Creditnota CN-2026-012",
                preview: "Hierbij de creditnota voor...",
                time: "08:30",
                badges: [{ label: "Creditnota", cls: "bg-amber-500/10 text-amber-600" }],
              },
              {
                initials: "SW",
                color: "from-orange-400 to-red-500",
                from: "SoftWorks BVBA",
                subject: "Herinnering factuur F-0891",
                preview: "Wij herinneren u aan onze...",
                time: "08:15",
                badges: [{ label: "Herinnering", cls: "bg-red-500/10 text-red-600" }],
                needsReply: true,
              },
            ]}
          />
        ),
      },
      {
        step: "03",
        title: "PDF parsing & OCR",
        description:
          "De factuur-PDF wordt via OCR gelezen. Tabellen, bedragen en BTW-nummers worden gestructureerd.",
        component: (
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
      {
        step: "04",
        title: "AI data extractie",
        description:
          "Leverancier, bedrag, factuurnummer, vervaldag, BTW-nummer en bankrekening automatisch geextraheerd.",
        component: (
          <ExtractionView
            confidence={98}
            data={[
              { key: "Leverancier", value: "ACME Services BV" },
              { key: "Bedrag", value: "\u20AC 2.450,00" },
              { key: "BTW", value: "\u20AC 514,50" },
              { key: "Factuurnr", value: "INV-2026-045" },
              { key: "Vervaldag", value: "15 april 2026" },
              { key: "IBAN", value: "BE68 5390 0754 7034" },
            ]}
          />
        ),
      },
      {
        step: "05",
        title: "Validatie & matching",
        description:
          "Data wordt gecontroleerd tegen leverancierslijst en openstaande bestellingen. Alles klopt.",
        component: (
          <ValidationView
            checks={[
              { label: "Leverancier gekend", ok: true },
              { label: "BTW-nummer geldig", ok: true },
              { label: "Bedrag matcht bestelling", ok: true },
              { label: "IBAN geverifieerd", ok: true },
              { label: "Vervaldag realistisch", ok: true },
            ]}
          />
        ),
      },
      {
        step: "06",
        title: "Goedkeuring",
        description:
          "De financiele medewerker reviewt de factuur met een klik. Goedkeuren voor boeking.",
        component: (
          <ApprovalView
            title="Factuur ACME Services — \u20AC 2.450,00"
            description="Alle velden gevalideerd. Klaar voor boeking in het boekhoudpakket."
          />
        ),
      },
      {
        step: "07",
        title: "Geboekt in systeem",
        description:
          "De factuur wordt automatisch geboekt. Betaaltermijn en herinneringen worden ingesteld.",
        component: (
          <RecordView
            label="Factuur geboekt"
            badge="Geboekt"
            fields={[
              { key: "Boeking ID", value: "BOK-2026-1847" },
              { key: "Leverancier", value: "ACME Services BV" },
              { key: "Bedrag incl.", value: "\u20AC 2.964,50" },
              { key: "Betaaldatum", value: "15 april 2026" },
              { key: "Status", value: "Openstaand" },
            ]}
          />
        ),
      },
      {
        step: "08",
        title: "Sync met boekhouding",
        description:
          "De factuur wordt automatisch doorgestuurd naar je boekhoudpakket. Geen manuele invoer meer.",
        component: (
          <IntegrationView
            title="Automatisch geboekt"
            subtitle="INV-2026-045 gesynchroniseerd"
            integrations={["exact", "odoo", "excel", "sheets", "teamleader"]}
          />
        ),
      },
    ],
  },
  {
    id: "support",
    label: "Klantenservice",
    icon: HeadsetIcon,
    tagline: "Supportvragen beantwoord voor je team ze leest",
    slides: [
      {
        step: "01",
        title: "Open de inbox",
        description:
          "Een klant stuurt een e-mail met een probleem. De AI classificeert type en urgentie direct.",
        component: <Step01Sidebar />,
      },
      {
        step: "02",
        title: "Classificatie & routing",
        description:
          "De AI labelt de e-mail en wijst het toe aan het juiste teamlid op basis van expertise.",
        component: (
          <InboxView
            emails={[
              {
                initials: "JV",
                color: "from-red-400 to-orange-500",
                from: "Jan Vermeer",
                subject: "Login werkt niet meer",
                preview: "Sinds gisteren kan ik niet meer...",
                time: "10:02",
                unread: true,
                selected: true,
                badges: [
                  { label: "Technisch", cls: "bg-red-500/10 text-red-600" },
                  { label: "Urgent", cls: "bg-orange-500/10 text-orange-600" },
                ],
              },
              {
                initials: "KD",
                color: "from-blue-400 to-blue-500",
                from: "Karen De Wit",
                subject: "Vraag over facturatie",
                preview: "Ik heb een dubbele afrekening...",
                time: "09:45",
                badges: [{ label: "Facturatie", cls: "bg-amber-500/10 text-amber-600" }],
              },
              {
                initials: "PL",
                color: "from-emerald-400 to-emerald-500",
                from: "Pieter Lemmens",
                subject: "Feature request: export",
                preview: "Het zou handig zijn als we...",
                time: "09:20",
                badges: [{ label: "Feature", cls: "bg-blue-500/10 text-blue-600" }],
              },
            ]}
          />
        ),
      },
      {
        step: "03",
        title: "Context ophalen",
        description:
          "De AI zoekt klantgeschiedenis, eerdere tickets en kennisbank-artikelen op als context.",
        component: (
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
      {
        step: "04",
        title: "AI antwoord genereren",
        description:
          "Op basis van de vraag en context genereert de AI een gepersonaliseerd antwoord.",
        component: (
          <FeedbackView
            to="jan.vermeer@email.be"
            subject="Re: Login werkt niet meer"
            body={
              <>
                <p className="mb-2">Beste Jan,</p>
                <p className="mb-2">
                  Bedankt voor je melding. We zien dat je account tijdelijk geblokkeerd werd na
                  meerdere pogingen. Ik heb de blokkering opgeheven.
                </p>
                <p>
                  Probeer opnieuw in te loggen. Werkt het nog niet? Dan bekijken we het samen.
                </p>
              </>
            }
            badges={["AI gegenereerd", "Klantcontext gebruikt"]}
          />
        ),
      },
      {
        step: "05",
        title: "Review & verzenden",
        description:
          "De supportmedewerker reviewt het AI-antwoord. Goedkeuren met een klik.",
        component: (
          <ApprovalView
            title="Antwoord aan Jan Vermeer"
            description="AI-antwoord op basis van klantprofiel en error logs. Blokkering opgeheven."
          />
        ),
      },
      {
        step: "06",
        title: "Ticket gesloten",
        description:
          "Response time en klanttevredenheid worden automatisch gelogd. Gemiddeld 4 min per ticket.",
        component: (
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
      {
        step: "07",
        title: "Sync met je helpdesk",
        description:
          "Het ticket en alle klantdata worden gesynchroniseerd met je bestaande helpdesk en CRM.",
        component: (
          <IntegrationView
            title="Ticket gesynchroniseerd"
            subtitle="#4821 doorgestuurd naar je tools"
            integrations={["hubspot", "salesforce", "slack", "teamleader", "sheets"]}
          />
        ),
      },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce & Orders",
    icon: ShoppingIcon,
    tagline: "Bestellingen automatisch verwerkt uit e-mail",
    slides: [
      {
        step: "01",
        title: "Open de inbox",
        description:
          "Een klant plaatst een bestelling via e-mail met productlijst en leveradres.",
        component: <Step01Sidebar />,
      },
      {
        step: "02",
        title: "Order herkenning",
        description:
          "De AI herkent het als een bestelling en toont het met de juiste labels in de inbox.",
        component: (
          <InboxView
            emails={[
              {
                initials: "VB",
                color: "from-purple-400 to-pink-500",
                from: "Veerle Brouwers",
                subject: "Bestelling 3x Model Pro",
                preview: "Graag bestelling: 3x Model Pro...",
                time: "10:15",
                unread: true,
                selected: true,
                badges: [{ label: "Bestelling", cls: "bg-bolt/10 text-bolt" }],
              },
              {
                initials: "WS",
                color: "from-blue-400 to-cyan-500",
                from: "WebShop Order",
                subject: "Order #WS-8847",
                preview: "Automatische bestelling via...",
                time: "09:50",
                badges: [
                  { label: "Webshop", cls: "bg-blue-500/10 text-blue-600" },
                  { label: "Auto", cls: "bg-emerald-500/10 text-emerald-600" },
                ],
              },
              {
                initials: "RM",
                color: "from-orange-400 to-orange-500",
                from: "RetailMax",
                subject: "Herbestelling voorraad",
                preview: "Wij willen graag herbestellen...",
                time: "09:10",
                badges: [{ label: "Herbestelling", cls: "bg-amber-500/10 text-amber-600" }],
              },
            ]}
          />
        ),
      },
      {
        step: "03",
        title: "Product matching",
        description:
          "Elk product wordt gematcht met het interne assortiment. Prijzen en beschikbaarheid gecontroleerd.",
        component: (
          <ExtractionView
            confidence={100}
            data={[
              { key: "Product", value: "Model Pro (3x)" },
              { key: "Eenheidsprijs", value: "\u20AC 249,00" },
              { key: "Totaal", value: "\u20AC 747,00" },
              { key: "Klant", value: "Veerle Brouwers" },
              { key: "Leveradres", value: "Stationsstraat 8, Leuven" },
            ]}
          />
        ),
      },
      {
        step: "04",
        title: "Voorraad check",
        description:
          "Automatische controle op beschikbaarheid. Alles op voorraad, klaar voor verzending.",
        component: (
          <ValidationView
            checks={[
              { label: "Product beschikbaar", ok: true },
              { label: "Voorraad (3+ stuks)", ok: true },
              { label: "Prijs actueel", ok: true },
              { label: "Leveradres geldig", ok: true },
            ]}
          />
        ),
      },
      {
        step: "05",
        title: "Orderbevestiging",
        description:
          "De AI genereert een orderbevestiging met alle details voor de klant.",
        component: (
          <ApprovalView
            title="Orderbevestiging Veerle Brouwers"
            description="3x Model Pro — \u20AC 747,00 incl. BTW. Levering binnen 2 werkdagen."
          />
        ),
      },
      {
        step: "06",
        title: "Order in systeem",
        description:
          "De bestelling wordt opgeslagen, klaar voor picking, packing en verzending.",
        component: (
          <RecordView
            label="Order opgeslagen"
            badge="Bevestigd"
            fields={[
              { key: "Order ID", value: "ORD-2026-8847" },
              { key: "Klant", value: "Veerle Brouwers" },
              { key: "Producten", value: "3x Model Pro" },
              { key: "Totaal", value: "\u20AC 747,00" },
              { key: "Levering", value: "2 werkdagen" },
            ]}
          />
        ),
      },
      {
        step: "07",
        title: "Sync met je shop & ERP",
        description:
          "De order wordt automatisch gesynchroniseerd met je webshop, voorraadsysteem en boekhouding.",
        component: (
          <IntegrationView
            title="Order gesynchroniseerd"
            subtitle="ORD-2026-8847 doorgestuurd"
            integrations={["odoo", "exact", "excel", "slack", "outlook"]}
          />
        ),
      },
    ],
  },
  {
    id: "leads",
    label: "Inkomende Leads",
    icon: LeadIcon,
    tagline: "Elke lead opgepikt, gekwalificeerd en opvolgd",
    slides: [
      {
        step: "01",
        title: "Open de inbox",
        description:
          "Een potentiele klant stuurt een e-mail via de website of LinkedIn. De AI pikt het direct op.",
        component: <Step01Sidebar />,
      },
      {
        step: "02",
        title: "Lead classificatie",
        description:
          "De AI classificeert de lead op type en urgentie en toont het in de inbox met juiste labels.",
        component: (
          <InboxView
            emails={[
              {
                initials: "MV",
                color: "from-emerald-400 to-blue-500",
                from: "Marc Vanderstraeten",
                subject: "Interesse in AI-oplossing",
                preview: "Wij zijn een logistiek bedrijf met...",
                time: "10:30",
                unread: true,
                selected: true,
                badges: [
                  { label: "Warm lead", cls: "bg-emerald-500/10 text-emerald-600" },
                  { label: "Offerte", cls: "bg-bolt/10 text-bolt" },
                ],
              },
              {
                initials: "AS",
                color: "from-purple-400 to-purple-500",
                from: "Anna Smeets",
                subject: "Contactformulier website",
                preview: "Ik zou graag meer info over...",
                time: "09:15",
                badges: [{ label: "Website", cls: "bg-blue-500/10 text-blue-600" }],
              },
              {
                initials: "RT",
                color: "from-amber-400 to-orange-500",
                from: "Robin Thijs — LinkedIn",
                subject: "Connectie + vraag",
                preview: "Hey, zag jullie post over AI...",
                time: "08:45",
                badges: [
                  { label: "LinkedIn", cls: "bg-blue-500/10 text-blue-600" },
                  { label: "Koud", cls: "bg-sand-400/10 text-sand-400" },
                ],
              },
            ]}
          />
        ),
      },
      {
        step: "03",
        title: "Contactgegevens extractie",
        description:
          "Naam, bedrijf, sector, teamgrootte en specifieke vraag worden automatisch geextraheerd.",
        component: (
          <ExtractionView
            confidence={92}
            data={[
              { key: "Naam", value: "Marc Vanderstraeten" },
              { key: "Bedrijf", value: "LogiFlow BV" },
              { key: "Sector", value: "Logistiek" },
              { key: "Teamgrootte", value: "25 medewerkers" },
              { key: "Vraag", value: "AI email-automatisatie" },
            ]}
          />
        ),
      },
      {
        step: "04",
        title: "Lead scoring",
        description:
          "Op basis van sector, grootte en urgentie krijgt de lead een score. Marc scoort hoog.",
        component: (
          <ValidationView
            checks={[
              { label: "Sector match (logistiek)", ok: true },
              { label: "Teamgrootte (25+)", ok: true },
              { label: "Budget indicatie", ok: true },
              { label: "Urgentie (hoog)", ok: true },
              { label: "Decision maker", ok: false },
            ]}
          />
        ),
      },
      {
        step: "05",
        title: "Gepersonaliseerd antwoord",
        description:
          "De AI genereert een antwoord afgestemd op de vraag, sector en bedrijfsgrootte.",
        component: (
          <FeedbackView
            to="marc@logiflow.be"
            subject="Re: Interesse in AI-oplossing"
            body={
              <>
                <p className="mb-2">Beste Marc,</p>
                <p className="mb-2">
                  Bedankt voor je interesse. Voor een logistiek bedrijf met 25 medewerkers zien we
                  gemiddeld{" "}
                  <span className="font-semibold text-bolt">15+ uur tijdsbesparing per week</span>{" "}
                  op e-mailverwerking.
                </p>
                <p>
                  Zullen we donderdag een kort gesprek inplannen? Dan toon ik een live demo.
                </p>
              </>
            }
            badges={["AI gegenereerd", "Sector-specifiek"]}
          />
        ),
      },
      {
        step: "06",
        title: "Review & verzenden",
        description:
          "De salesmedewerker reviewt het antwoord en past de toon aan waar nodig.",
        component: (
          <ApprovalView
            title="Antwoord aan Marc Vanderstraeten"
            description="Gepersonaliseerd AI-antwoord voor logistiek bedrijf. Demo voorstel voor donderdag."
          />
        ),
      },
      {
        step: "07",
        title: "Lead in pipeline",
        description:
          "De lead wordt opgeslagen met contactinfo, score, correspondentie en volgende stappen.",
        component: (
          <RecordView
            label="Lead opgeslagen"
            badge="Pipeline"
            fields={[
              { key: "Lead ID", value: "LEAD-2026-0412" },
              { key: "Naam", value: "Marc Vanderstraeten" },
              { key: "Bedrijf", value: "LogiFlow BV" },
              { key: "Score", value: "85 / 100" },
              { key: "Status", value: "Demo ingepland" },
              { key: "Volgende actie", value: "Do 15:00" },
            ]}
          />
        ),
      },
      {
        step: "08",
        title: "Pipeline dashboard",
        description:
          "Alle leads zichtbaar met status, score en opvolgdatum. Geen lead valt tussen de mazen.",
        component: (
          <DashboardView
            title="Sales Pipeline"
            rows={[
              {
                id: "LEAD-0412",
                col2: "LogiFlow BV",
                col3: "85/100",
                status: "Demo",
                statusCls: "bg-bolt/10 text-bolt",
                highlight: true,
              },
              {
                id: "LEAD-0411",
                col2: "Anna Smeets",
                col3: "62/100",
                status: "Nieuw",
                statusCls: "bg-blue-500/10 text-blue-600",
              },
              {
                id: "LEAD-0410",
                col2: "TechBuild NV",
                col3: "78/100",
                status: "Offerte",
                statusCls: "bg-amber-500/10 text-amber-600",
              },
              {
                id: "LEAD-0408",
                col2: "GreenLogistics",
                col3: "91/100",
                status: "Gewonnen",
                statusCls: "bg-emerald-500/10 text-emerald-600",
              },
            ]}
          />
        ),
      },
      {
        step: "09",
        title: "Sync met je CRM",
        description:
          "Elke lead, score en correspondentie wordt automatisch gesynchroniseerd met je CRM en sales tools.",
        component: (
          <IntegrationView
            title="Lead gesynchroniseerd"
            subtitle="LEAD-2026-0412 in je CRM"
            integrations={["hubspot", "salesforce", "teamleader", "outlook", "teams"]}
          />
        ),
      },
    ],
  },
];

/* ── Arrow button ── */
function ArrowBtn({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 w-10 h-10 rounded-full bg-white border border-sand-200 grid place-items-center text-sand-400 hover:text-bolt hover:border-bolt/30 transition-all shadow-sm"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        {dir === "left" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

/* ── Main Showcase ── */
export default function Showcase() {
  const [flowIdx, setFlowIdx] = useState(0);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const flow = flows[flowIdx];
  const slides = flow.slides;

  const goTo = useCallback(
    (idx: number) => {
      setActive(idx);
      setProgress(0);
    },
    []
  );
  const prev = useCallback(
    () => goTo(active === 0 ? slides.length - 1 : active - 1),
    [active, slides.length, goTo]
  );
  const next = useCallback(
    () => goTo((active + 1) % slides.length),
    [active, slides.length, goTo]
  );

  const selectFlow = useCallback((idx: number) => {
    setFlowIdx(idx);
    setActive(0);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    const tick = 30;
    const interval = setInterval(() => {
      setProgress((p) => {
        const n = p + (tick / INTERVAL) * 100;
        if (n >= 100) {
          setActive((a) => (a + 1) % slides.length);
          return 0;
        }
        return n;
      });
    }, tick);
    return () => clearInterval(interval);
  }, [paused, active, slides.length]);

  return (
    <section id="showcase" className="py-20 surface-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <h2 className="text-center text-[42px] font-display font-extrabold tracking-tight leading-[1.1] mb-3 text-sand-900">
          See it in <span className="text-bolt italic">action</span>
        </h2>
        <p className="text-center text-lg text-sand-500 max-w-[640px] mx-auto mb-4">
          Kies jouw sector en ontdek hoe aifficient e-mails omzet in actie — van inbox tot
          resultaat.
        </p>

        {/* Flow selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {flows.map((f, i) => (
            <button
              key={f.id}
              onClick={() => selectFlow(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${
                flowIdx === i
                  ? "bg-bolt text-white shadow-lg shadow-bolt/20"
                  : "bg-white text-sand-500 border border-sand-200 hover:border-bolt/30 hover:text-bolt"
              }`}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>

        {/* Flow tagline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={flow.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bolt/8 text-bolt text-[13px] font-semibold">
              {flow.icon}
              {flow.tagline}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Slider */}
        <div
          className="max-w-[1000px] mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex items-center gap-4">
            <ArrowBtn dir="left" onClick={prev} />

            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${flow.id}-${active}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-center"
                >
                  <div className="flex justify-center">{slides[active].component}</div>
                  <div className="py-4">
                    <div className="text-[56px] font-extrabold text-bolt/10 leading-none mb-1 select-none">
                      {slides[active].step}
                    </div>
                    <h3 className="text-[26px] font-display font-extrabold tracking-tight text-sand-900 mb-3 leading-tight">
                      {slides[active].title}
                    </h3>
                    <p className="text-[15px] text-sand-500 leading-relaxed max-w-[380px]">
                      {slides[active].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <ArrowBtn dir="right" onClick={next} />
          </div>

          {/* Progress */}
          <div className="mt-10 max-w-[500px] mx-auto">
            <div className="flex gap-0.5">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1 rounded-full bg-sand-200 overflow-hidden cursor-pointer"
                  onClick={() => goTo(i)}
                >
                  <div
                    className="h-full bg-bolt rounded-full transition-[width] duration-75"
                    style={{
                      width: i === active ? `${progress}%` : i < active ? "100%" : "0%",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-3 text-[11px] text-sand-400 font-medium">
              Stap {active + 1} van {slides.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
