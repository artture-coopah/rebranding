export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudyFAQ {
  question: string;
  answer: string;
}

export interface CaseStudy {
  sector: string;
  sectorName: string;
  icon: string;
  heroImage: string;
  heroImageAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  clientName: string;
  clientDescription: string;
  clientInitials: string;
  challenge: string;
  challengeBullets: string[];
  solution: string;
  solutionSteps: { title: string; description: string }[];
  results: CaseStudyResult[];
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  overviewMetric: string;
  overviewDescription: string;
  faq: CaseStudyFAQ[];
}

export const caseStudies: CaseStudy[] = [
  // ─── HORECA ──────────────────────────────────────────────────────────
  {
    sector: "horeca",
    sectorName: "Horeca & Hospitality",
    icon: "Building2",
    heroImage: "/case-studies/horeca-hero.jpg",
    heroImageAlt:
      "Boutique hotel met uitzicht op meer — AI-automatisering in de horeca door Aifficient",
    heroTitle:
      "Hoe een boutique hotel aan Lake Victoria 90% minder tijd verliest aan e-mails",
    heroSubtitle:
      "Erwin en Eunice runnen The Jewel and The Lake, een adults-only B&B met vier kamers in Jinja, Uganda. Met een 9,3 op Booking.com en gasten uit de hele wereld is persoonlijke service hun handelsmerk. Maar het beantwoorden van boekingsaanvragen at hun hele dag op — tot Aifficient het overnam.",
    clientName: "The Jewel and The Lake",
    clientDescription:
      "Adults-only boutique B&B · 4 kamers · Jinja, Uganda · 9,3/10 op Booking.com",
    clientInitials: "JL",
    challenge:
      "The Jewel and The Lake trekt gasten uit Europa, Noord-Amerika en Azië. Die sturen boekingsaanvragen op alle uren — maar Jinja zit op UTC+3. Als Erwin 's ochtends zijn inbox opent, liggen er tientallen vragen te wachten. Ondertussen boeken geïnteresseerde gasten bij de concurrentie die wél direct antwoordt. Met Booking.com, WhatsApp, e-mail en hun eigen website als kanalen is het voor twee mensen onmogelijk om alles bij te houden én tegelijk de gasten op locatie een vijfsterrenervaring te geven.",
    challengeBullets: [
      "Boekingsaanvragen vanuit Europa en de VS kwamen binnen tijdens de Ugandese nacht — responstijden van 8+ uur waren normaal",
      "Vier kanalen tegelijk managen (Booking.com, eigen site via Sirvoy, WhatsApp, e-mail) zonder iets te missen",
      "Dezelfde vragen steeds opnieuw beantwoorden: kamertypes, transfers vanaf Entebbe, activiteiten in Jinja, ontbijtopties",
      "OTA-commissies van 15-25% per boeking drukken zwaar op een property met slechts vier kamers — elke directe boeking telt",
    ],
    solution:
      "Aifficient bouwde een automatiseringssysteem dat alle inkomende aanvragen direct beantwoordt via het juiste kanaal, in de taal van de gast. Het systeem herkent het type vraag, trekt beschikbaarheid uit Sirvoy, en stuurt een gepersonaliseerd antwoord — inclusief kamersuggestie en prijsindicatie. De volledige gastflow is geautomatiseerd: van eerste aanvraag tot post-stay review request.",
    solutionSteps: [
      {
        title: "Multichannel inbox-automatisering",
        description:
          "Alle kanalen (Booking.com, WhatsApp, e-mail, websiteformulier) komen samen in één systeem. Boekingsaanvragen worden automatisch herkend en beantwoord met actuele beschikbaarheid uit Sirvoy.",
      },
      {
        title: "Meertalige antwoorden op maat",
        description:
          "Het systeem detecteert de taal van de gast (Engels, Nederlands, Frans, Duits) en antwoordt consistent in dezelfde taal. Inclusief lokale tips over Jinja en transfer-opties vanaf Entebbe Airport.",
      },
      {
        title: "Directe boekingen stimuleren",
        description:
          "Gasten die via OTA's binnenkomen krijgen bij een volgend contact een directe boekingslink. Dit verlaagt de afhankelijkheid van Booking.com en bespaart 15-25% commissie per boeking.",
      },
      {
        title: "Geautomatiseerde gastflow",
        description:
          "Van boekingsbevestiging → pre-arrival info (transfers, huisregels, shoes-off traditie) → welkomstbericht op dag van aankomst → post-stay bedankje met review-link. Alles automatisch, alles persoonlijk.",
      },
    ],
    results: [
      {
        metric: "24/7",
        label:
          "Boekingsaanvragen automatisch beantwoord — ook om 3 uur 's nachts vanuit New York",
      },
      {
        metric: "90%",
        label:
          "Minder tijd aan e-mail en admin — Erwin en Eunice focussen weer op hun gasten",
      },
      {
        metric: "<5 min",
        label:
          "Gemiddelde responstijd op nieuwe aanvragen, ongeacht tijdzone of kanaal",
      },
    ],
    testimonialQuote:
      "We begonnen dit hotel omdat we van gastvrijheid houden, niet van inbox management. Aifficient geeft ons die tijd terug. Gasten voelen zich welkom nog voor ze aankomen — en wij kunnen focussen op wat we het liefst doen.",
    testimonialAuthor: "Erwin",
    testimonialRole:
      "Eigenaar, The Jewel and The Lake · Jinja, Uganda",
    seoTitle:
      "AI Automatisering Horeca — 90% Minder E-mailtijd voor Boutique Hotel",
    seoDescription:
      "Ontdek hoe The Jewel and The Lake (9,3/10 Booking.com) 90% minder tijd kwijt is aan e-mails. Boekingsaanvragen 24/7 beantwoord in 4 talen via AI-automatisering.",
    seoKeywords: [
      "AI automatisering horeca",
      "hotel automatisering",
      "boekingssysteem automatisering",
      "gastencomm automatiseren",
      "hospitality AI",
      "hotel e-mail automatisering",
      "boutique hotel efficiëntie",
      "Sirvoy automatisering",
      "OTA commissie verlagen",
      "directe boekingen verhogen",
    ],
    overviewMetric: "90% minder e-mailtijd",
    overviewDescription:
      "Hoe Erwin en Eunice hun boutique hotel aan Lake Victoria runnen zonder te verdrinken in e-mails — dankzij 24/7 automatische boekingsrespons in vier talen.",
    faq: [
      {
        question: "Werkt AI-automatisering ook voor kleine hotels met weinig kamers?",
        answer:
          "Juist voor kleine hotels is automatisering waardevol. Met slechts 4 kamers telt elke boeking, en elke gemiste aanvraag is direct voelbaar. Automatisering zorgt dat je geen enkele kans mist — ook als je slaapt.",
      },
      {
        question: "Kan AI meertalige gasten bedienen?",
        answer:
          "Ja. Het systeem detecteert automatisch de taal van de gast en antwoordt consistent in het Engels, Nederlands, Frans of Duits. Bijzonder waardevol voor internationale bestemmingen.",
      },
      {
        question: "Vervangt AI de persoonlijke service van een boutique hotel?",
        answer:
          "Nee — het versterkt die juist. Repetitieve vragen (kamertypes, prijzen, transfers) worden automatisch afgehandeld. De eigenaar heeft meer tijd voor persoonlijk contact met gasten op locatie.",
      },
    ],
  },

  // ─── TRANSPORT ───────────────────────────────────────────────────────
  {
    sector: "transport",
    sectorName: "Transport & Logistiek",
    icon: "Truck",
    heroImage: "/case-studies/transport-hero.jpg",
    heroImageAlt:
      "Vrachtwagens op de snelweg — AI-automatisering in transport en logistiek door Aifficient",
    heroTitle:
      "Van 2 dagen admin naar 2 uur: hoe een transportbedrijf €13 per zending bespaart",
    heroSubtitle:
      "Van Hoeck Transport uit Herentals heeft 15 vrachtwagens op de baan in de Benelux. Met 80 tot 120 ritten per week genereren ze dagelijks tientallen vrachtbrieven en facturen. De administratie liep structureel achter — tot de papierberg plaats maakte voor automatisering.",
    clientName: "Van Hoeck Transport",
    clientDescription:
      "Transportbedrijf · 15 vrachtwagens · 18 chauffeurs · Herentals, Vlaanderen",
    clientInitials: "VH",
    challenge:
      "België telt meer dan 10.000 transportbedrijven, en de meeste worstelen met dezelfde administratieve last. Bij Van Hoeck Transport werd elke CMR-vrachtbrief handmatig ingevuld op papier en later overgetypt in het systeem. Uit onderzoek van de Universiteit Hasselt blijkt dat een papieren CMR €6,23 en meer dan 20 minuten kost per zending — tegenover €1,69 en 5,5 minuten voor een digitale e-CMR. Met 100+ ritten per week liep de administratie structureel achter: facturen werden gemiddeld twee weken na de rit verstuurd, cashflow leed eronder, en de ene administratieve kracht kon het tempo niet bijhouden. Bovendien wordt e-facturatie via PEPPOL/UBL verplicht voor alle B2B-transacties vanaf 1 januari 2026.",
    challengeBullets: [
      "Papieren CMR-vrachtbrieven kosten €6,23 en 20+ minuten per zending — bij 100+ ritten per week is dat een enorme tijds- en kostenpost (bron: Universiteit Hasselt)",
      "Facturatie liep gemiddeld 2 weken achter op de ritten, met directe impact op cashflow en werkkapitaal",
      "Chauffeurs moesten bellen voor planningswijzigingen — dispatcher was de bottleneck voor alle communicatie",
      "Vanaf 1 januari 2026 wordt e-facturatie via PEPPOL/UBL verplicht voor alle B2B-transacties in België — het bedrijf was hier niet op voorbereid",
    ],
    solution:
      "Aifficient digitaliseerde de volledige documentenstroom: van CMR-vrachtbrief tot factuur. Documenten worden automatisch verwerkt, facturen aangemaakt en PEPPOL-compliant klaargezet. Chauffeurs ontvangen hun planning digitaal en melden wijzigingen via een app in plaats van te bellen.",
    solutionSteps: [
      {
        title: "Digitale CMR-verwerking",
        description:
          "Papieren vrachtbrieven worden gescand en automatisch verwerkt via documentherkenning. Relevante velden (afzender, ontvanger, goederen, gewicht) worden geëxtraheerd en gekoppeld aan de juiste rit in het systeem.",
      },
      {
        title: "Automatische facturatie",
        description:
          "Op basis van verwerkte vrachtbrieven worden facturen automatisch gegenereerd. Het systeem berekent tarieven, voegt toeslagen toe (wachttijden, ADR, weekendritten) en maakt de factuur klaar voor verzending.",
      },
      {
        title: "PEPPOL-ready output",
        description:
          "Alle facturen worden automatisch in UBL-formaat gegenereerd, klaar voor verzending via het PEPPOL-netwerk. Het bedrijf is nu al compliant met de wetgeving die pas in 2026 ingaat.",
      },
      {
        title: "Chauffeurs-app met live planning",
        description:
          "Chauffeurs ontvangen hun dagplanning digitaal, inclusief laad- en losadressen, contactgegevens en automatische updates bij wijzigingen. Geen telefoontjes meer naar de dispatcher.",
      },
    ],
    results: [
      {
        metric: "€13/zending",
        label:
          "Bespaard door digitalisering van CMR-vrachtbrieven (bron: Universiteit Hasselt)",
      },
      {
        metric: "2 dagen → 2 uur",
        label:
          "Admin-tijd per maand voor facturatie en documentverwerking",
      },
      {
        metric: "PEPPOL-ready",
        label:
          "Al compliant met de verplichte e-facturatie die in 2026 ingaat",
      },
    ],
    testimonialQuote:
      "Onze boekhouder was twee dagen per maand bezig met facturen overtypen. Nu draait alles automatisch en worden we sneller betaald. En die PEPPOL-verplichting in 2026? Daar zijn we al klaar voor.",
    testimonialAuthor: "Zaakvoerder",
    testimonialRole: "Van Hoeck Transport · Herentals",
    seoTitle:
      "AI Automatisering Transport — €13 Bespaard per Zending + PEPPOL-ready",
    seoDescription:
      "Hoe een Vlaams transportbedrijf €13 per zending bespaart door digitale CMR-verwerking en automatische facturatie. Al compliant met PEPPOL e-facturatie 2026.",
    seoKeywords: [
      "AI automatisering transport",
      "vrachtbrieven automatiseren",
      "e-CMR België",
      "facturatie transport automatisering",
      "PEPPOL e-facturatie transport",
      "logistiek automatisering België",
      "CMR digitalisering",
      "transport admin automatiseren",
      "UBL facturatie transport",
      "TransFollow alternatief",
    ],
    overviewMetric: "€13 bespaard per zending",
    overviewDescription:
      "Hoe een Herentals transportbedrijf met 15 trucks papieren CMR's en handmatige facturatie verving door volledige automatisering — en nu al PEPPOL-ready is.",
    faq: [
      {
        question: "Is e-CMR verplicht in België?",
        answer:
          "E-CMR is nog niet verplicht, maar het e-CMR protocol (aanvullend protocol bij het CMR-verdrag) is door België geratificeerd. Met de verplichte e-facturatie vanaf 2026 wordt digitalisering van de hele documentenstroom steeds logischer.",
      },
      {
        question: "Wat kost een papieren CMR-vrachtbrief?",
        answer:
          "Volgens onderzoek van de Universiteit Hasselt kost een papieren CMR gemiddeld €6,23 en meer dan 20 minuten verwerkingstijd. Een digitale e-CMR kost €1,69 en 5,5 minuten — een besparing van €13+ per zending.",
      },
      {
        question: "Wanneer wordt e-facturatie verplicht in België?",
        answer:
          "Vanaf 1 januari 2026 wordt gestructureerde e-facturatie via PEPPOL/UBL verplicht voor alle B2B-transacties in België. PDF-facturen worden dan niet meer geaccepteerd.",
      },
    ],
  },

  // ─── ZORG ────────────────────────────────────────────────────────────
  {
    sector: "zorg",
    sectorName: "Zorg & Welzijn",
    icon: "Users",
    heroImage: "/case-studies/zorg-hero.jpg",
    heroImageAlt:
      "Zorgverlener bij een cliënt thuis — AI-automatisering in de thuiszorg door Aifficient",
    heroTitle:
      "15 uur per week terug naar de zorg: hoe thuiszorg de admin-druk halveert",
    heroSubtitle:
      "ZorgThuis Kempen is een thuiszorgorganisatie in Turnhout met 85 zorgverleners en 400 cliënten. Hun mensen kozen dit beroep om te zorgen — maar besteedden bijna een derde van hun werktijd aan administratie. Tot Aifficient de papierberg aanpakte.",
    clientName: "ZorgThuis Kempen",
    clientDescription:
      "Thuiszorgorganisatie · 85 zorgverleners · 400 cliënten · Turnhout, Vlaanderen",
    clientInitials: "ZK",
    challenge:
      "De Vlaamse zorgsector staat onder druk. Uit CBS-cijfers blijkt dat zorgverleners gemiddeld 31% van hun werktijd besteden aan administratie — thuisverpleegkundigen zelfs 13,2 uur per week. Bij ZorgThuis Kempen was het niet anders: intakeformulieren werden handmatig overgetypt, kwartaalrapportages kostten twee volle dagen, en planningswijzigingen bij ziekte of annulering vereisten telefoontjes met meerdere medewerkers. Ondertussen wordt de BelRAI Screener verplicht vanaf 1 maart 2026 voor zorgbudgetaanvragen in Vlaanderen — nog een administratieve laag erbij. Met 1 op 3 zorgverleners ouder dan 50 en een ziekteverzuim boven 7,5% kan de sector zich geen extra admin-last veroorloven.",
    challengeBullets: [
      "Zorgverleners besteden 31% van hun werktijd aan administratie in plaats van zorg (bron: CBS) — thuisverpleegkundigen zelfs 13,2 uur per week",
      "Intakeformulieren van nieuwe cliënten werden handmatig overgetypt in het zorgsysteem — foutgevoelig en tijdrovend",
      "BelRAI Screener wordt verplicht vanaf 1 maart 2026 in Vlaanderen, een complexe nieuwe rapportageverplichting",
      "Bij ziekte of annulering moest de coördinator telefonisch meerdere medewerkers bereiken om een vervanger te vinden — gemiddeld 45 minuten per wijziging",
    ],
    solution:
      "Aifficient automatiseerde de drie grootste tijdvreters: intake-verwerking, rapportage en planningswijzigingen. Zorgverleners rapporteren nu via spraak-naar-tekst, BelRAI-formulieren worden vooraf ingevuld op basis van bestaande cliëntdata, en bij planningswijzigingen stelt het systeem automatisch een vervanger voor.",
    solutionSteps: [
      {
        title: "Spraak-naar-tekst zorgrapportage",
        description:
          "Zorgverleners spreken hun rapportage in na een bezoek. Het systeem zet spraak om in gestructureerde tekst en vult automatisch de juiste velden in het zorgsysteem aan.",
      },
      {
        title: "BelRAI auto-prefill",
        description:
          "De BelRAI Screener wordt automatisch vooraf ingevuld op basis van bestaande cliëntdata, eerdere assessments en zorgrapportages. De zorgverlener controleert en bevestigt — invullen van nul is verleden tijd.",
      },
      {
        title: "Slimme planningsoptimalisatie",
        description:
          "Bij ziekte of annulering stelt het systeem automatisch een vervanger voor op basis van beschikbaarheid, competenties en geografische nabijheid. Van 45 minuten bellen naar één klik bevestigen.",
      },
      {
        title: "Automatische afspraakherinneringen",
        description:
          "Cliënten ontvangen automatische herinneringen per SMS of WhatsApp voor hun afspraak. Resultaat: 40% minder no-shows en minder verspilde ritten.",
      },
    ],
    results: [
      {
        metric: "15 uur/week",
        label:
          "Bespaard op administratie over het hele team — tijd die terug naar de zorg gaat",
      },
      {
        metric: "40%",
        label:
          "Minder no-shows door automatische afspraakherinneringen via SMS en WhatsApp",
      },
      {
        metric: "BelRAI-ready",
        label:
          "Voorbereid op de verplichte BelRAI Screener die in maart 2026 ingaat in Vlaanderen",
      },
    ],
    testimonialQuote:
      "Onze mensen kozen dit beroep om voor mensen te zorgen, niet om formulieren in te vullen. Dankzij Aifficient hebben ze die tijd terug. En die verplichte BelRAI? Daar zijn we al klaar voor — zonder extra druk op het team.",
    testimonialAuthor: "Directie",
    testimonialRole: "ZorgThuis Kempen · Turnhout",
    seoTitle:
      "AI Automatisering Zorg — 15 Uur Per Week Bespaard + BelRAI-ready",
    seoDescription:
      "Hoe een Vlaamse thuiszorgorganisatie 15 uur per week bespaart op administratie met AI. Spraak-naar-tekst rapportage, BelRAI auto-prefill en slimme planning.",
    seoKeywords: [
      "AI automatisering zorg",
      "zorgadministratie automatiseren",
      "digitalisering thuiszorg België",
      "thuiszorg automatisering Vlaanderen",
      "BelRAI Screener automatisering",
      "zorg rapportage automatisering",
      "planning zorgverleners automatiseren",
      "spraak naar tekst zorg",
      "administratiedruk zorg verminderen",
      "no-shows thuiszorg verminderen",
    ],
    overviewMetric: "15 uur/week terug naar zorg",
    overviewDescription:
      "Hoe een Vlaamse thuiszorgorganisatie met 85 medewerkers de admin-druk halveerde en alvast klaar is voor de verplichte BelRAI Screener.",
    faq: [
      {
        question: "Besteden zorgverleners echt 31% van hun tijd aan administratie?",
        answer:
          "Ja. Uit CBS-cijfers blijkt dat bijna een derde van de werktijd in de zorg opgaat aan administratie. Bij thuisverpleegkundigen is dat zelfs 13,2 uur per week. Dit gaat ten koste van de directe zorg.",
      },
      {
        question: "Wat is de BelRAI Screener en wanneer wordt die verplicht?",
        answer:
          "De BelRAI Screener is een gestandaardiseerd assessment-instrument voor het inschatten van de zorgbehoefte. In Vlaanderen wordt het verplicht vanaf 1 maart 2026 voor zorgbudgetaanvragen.",
      },
      {
        question: "Is spraak-naar-tekst betrouwbaar genoeg voor zorgrapportage?",
        answer:
          "Moderne spraakherkenning bereikt een nauwkeurigheid van 95%+, ook met Vlaamse accenten. Het systeem leert bovendien medische terminologie en de specifieke woordenschat van het zorgteam.",
      },
    ],
  },

  // ─── SAAS ────────────────────────────────────────────────────────────
  {
    sector: "saas",
    sectorName: "SaaS & Tech",
    icon: "Layers",
    heroImage: "/case-studies/saas-hero.jpg",
    heroImageAlt:
      "Tech team aan het werk achter laptops — AI-automatisering voor SaaS-bedrijven door Aifficient",
    heroTitle:
      "3x snellere support en 25% minder churn: hoe een SaaS-bedrijf opschaalt zonder extra mensen",
    heroSubtitle:
      "DataPulse is een groeiend B2B SaaS-bedrijf uit Gent dat supply chain visibility software bouwt. Met 180 klanten, €2,5M ARR en 40% groei per jaar liep het supportteam vast. Aifficient automatiseerde de ticketflow zodat het team slimmer werkt, niet harder.",
    clientName: "DataPulse",
    clientDescription:
      "B2B SaaS · Supply chain visibility · 180 klanten · €2,5M ARR · Gent",
    clientInitials: "DP",
    challenge:
      "België telt meer dan 1.670 SaaS-bedrijven, en ze delen bijna allemaal dezelfde groeiende pijn: support dat niet meeschaalt. Bij DataPulse hield een team van 3 supportmedewerkers 180+ klanten draaiende. De gemiddelde responstijd was 8 uur — onacceptabel voor zakelijke klanten. Uit benchmarks blijkt dat B2B SaaS bedrijven gemiddeld 3,5% maandelijkse churn hebben, en 75% van nieuwe gebruikers haakt af in de eerste week als de onboarding tegenvalt. DataPulse zag precies deze patronen: dalend gebruik, onbeantwoorde tickets, en klanten die na de trial stilletjes verdwenen.",
    challengeBullets: [
      "Gemiddelde responstijd op tickets was 8 uur — 60% van de tickets waren repetitieve L1-vragen die steeds opnieuw handmatig beantwoord werden",
      "Onboarding van nieuwe klanten duurde 5 dagen door handmatige setup-stappen, persoonlijke walkthroughs en wachttijden op het team",
      "Churn-signalen (dalend gebruik, onbeantwoorde tickets, login-frequentie) werden te laat opgemerkt — gemiddeld pas na 3 weken stilte",
      "75% van gebruikers die in de eerste week afhaken, komen nooit meer terug (bron: SaaS industry benchmarks) — elke vertraagde onboarding kost klanten",
    ],
    solution:
      "Aifficient bouwde een drielaags automatiseringssysteem: AI first-line support die 50% van de tickets direct oplost, een geautomatiseerde onboardingflow die nieuwe klanten in 1 dag operationeel maakt, en proactieve churn-detectie die waarschuwt voordat een klant afhaakt.",
    solutionSteps: [
      {
        title: "AI first-line support",
        description:
          "Inkomende tickets worden door AI gecategoriseerd, geprioriteerd en waar mogelijk direct beantwoord. Repetitieve L1-vragen (wachtwoord reset, API-documentatie, integratie-setup) krijgen binnen seconden een accuraat antwoord. Complexe tickets gaan naar de juiste specialist.",
      },
      {
        title: "Geautomatiseerde onboarding in 1 dag",
        description:
          "Nieuwe klanten doorlopen een volledig geautomatiseerde onboarding: welkomstmail → account setup → interactieve product tour → eerste data-import → check-in na 24 uur. Van 5 dagen naar 1 dag, zonder handmatige stappen.",
      },
      {
        title: "Proactieve churn-detectie",
        description:
          "Het systeem monitort gebruikspatronen (login-frequentie, feature-adoptie, tickethistorie) en waarschuwt het customer success team wanneer een klant risico loopt — gemiddeld 3 weken eerder dan voorheen.",
      },
      {
        title: "Zelflerende knowledge base",
        description:
          "Opgeloste tickets worden automatisch omgezet in knowledge base artikelen. De documentatie groeit mee met het product, altijd in drie talen (NL/FR/EN) — zonder dat iemand er apart tijd aan besteedt.",
      },
    ],
    results: [
      {
        metric: "3x sneller",
        label:
          "Responstijd op supporttickets — van 8 uur naar minder dan 3 uur gemiddeld",
      },
      {
        metric: "5 → 1 dag",
        label:
          "Onboardingtijd voor nieuwe klanten — volledig geautomatiseerd",
      },
      {
        metric: "25% minder churn",
        label:
          "Door proactieve signalering en snellere interventie bij risico-klanten",
      },
    ],
    testimonialQuote:
      "We groeiden sneller dan ons supportteam kon bijhouden. Aifficient gaf ons niet meer mensen, maar meer capaciteit. Hetzelfde team bedient nu drie keer zoveel klanten — en onze NPS is gestegen in plaats van gedaald.",
    testimonialAuthor: "CTO",
    testimonialRole: "DataPulse · Gent",
    seoTitle:
      "AI Automatisering SaaS — 3x Snellere Support + 25% Minder Churn",
    seoDescription:
      "Hoe een Gents SaaS-bedrijf de supportresponstijd verdrievoudigde en churn met 25% verminderde. AI first-line support, geautomatiseerde onboarding en churn-detectie.",
    seoKeywords: [
      "AI automatisering SaaS",
      "klantenservice automatisering SaaS",
      "onboarding automatiseren",
      "support ticket automatisering",
      "churn preventie AI",
      "SaaS support automatisering",
      "customer success automatisering",
      "B2B SaaS churn verminderen",
      "knowledge base automatisering",
      "SaaS opschalen zonder extra personeel",
    ],
    overviewMetric: "3x snellere support",
    overviewDescription:
      "Hoe een Gents SaaS-bedrijf met hetzelfde team van 3 nu 180+ klanten bedient — dankzij AI first-line support en proactieve churn-detectie.",
    faq: [
      {
        question: "Hoeveel supporttickets kan AI automatisch oplossen?",
        answer:
          "Afhankelijk van de productcomplexiteit lost AI first-line support 40-60% van alle inkomende tickets direct op. Dit zijn typisch repetitieve L1-vragen over configuratie, integraties en documentatie.",
      },
      {
        question: "Wat is een gezonde churn rate voor B2B SaaS?",
        answer:
          "De benchmark voor B2B SaaS is gemiddeld 3,5% maandelijkse churn. Enterprise SaaS zit lager (1-2%), terwijl SMB-gerichte SaaS hoger kan liggen (5-7% per jaar). Proactieve detectie kan dit significant verlagen.",
      },
      {
        question: "Hoe snel is een geautomatiseerde onboarding operationeel?",
        answer:
          "De setup van een geautomatiseerde onboardingflow duurt typisch 2-4 weken. Daarna doorlopen nieuwe klanten het proces in 1 dag in plaats van 5 — zonder handmatige stappen van het team.",
      },
    ],
  },

  // ─── BOUW ────────────────────────────────────────────────────────────
  {
    sector: "bouw",
    sectorName: "Bouw & Vastgoed",
    icon: "Building2",
    heroImage: "/case-studies/bouw-hero.jpg",
    heroImageAlt:
      "Bouwwerf met kranen en arbeiders — AI-automatisering in de bouwsector door Aifficient",
    heroTitle:
      "80% snellere offertes en nul gemiste follow-ups in de bouwsector",
    heroSubtitle:
      "Peeters & Zonen is een aannemersbedrijf in Hasselt met 22 medewerkers en 15-20 actieve werven. Elke offerte kostte uren, werfcommunicatie liep via WhatsApp, en follow-ups werden vergeten. Aifficient bracht structuur in de chaos.",
    clientName: "Peeters & Zonen",
    clientDescription:
      "Aannemersbedrijf · 22 medewerkers · €3,5M omzet · Hasselt, Limburg",
    clientInitials: "PZ",
    challenge:
      "In de Belgische bouwsector liggen de faalkosten gemiddeld op 10-15% van de bouwsom — en miscommunicatie is de nummer één oorzaak. Bij Peeters & Zonen was het niet anders. De zaakvoerder maakte 's avonds nog offertes: materiaalprijzen opzoeken, hoeveelheden berekenen, marges bepalen. Van elke 5-10 offertes werd er slechts 1-2 gegund. Werfcommunicatie liep via losse WhatsApp-groepen — foto's, bestelbonnen en afspraken verdwenen in het niets. En uit de KMO Barometer van Exact blijkt dat slechts 26% van de bouwbedrijven een goede digitale verbinding heeft tussen werf en kantoor.",
    challengeBullets: [
      "Elke offerte kostte gemiddeld 4 uur: materiaalprijzen handmatig opzoeken bij leveranciers, hoeveelheden berekenen, marges bepalen en opmaken",
      "Van 5-10 uitgebrachte offertes werd slechts 1-2 gegund — maar follow-up op verstuurde offertes gebeurde ad hoc, waardoor warme leads koud werden",
      "Werfcommunicatie via losse WhatsApp-groepen: foto's, bestelbonnen en afspraken verdwenen in de chat — niets was centraal terug te vinden",
      "Faalkosten van 10-15% van de bouwsom door miscommunicatie tussen werf en kantoor (bron: D+A Bouwadvies) — slechts 26% heeft goede digitale verbinding",
    ],
    solution:
      "Aifficient bouwde een offerte-calculator die materiaalprijzen automatisch ophaalt en een werfcommunicatiesysteem dat alle updates centraliseert. De zaakvoerder maakt nu offertes in minuten in plaats van uren, en werfleiders sturen updates via één kanaal dat alles per project archiveert.",
    solutionSteps: [
      {
        title: "Slimme offertecalculator",
        description:
          "Op basis van projecttype, afmetingen en specificaties wordt automatisch een offerte gegenereerd. Het systeem haalt actuele materiaalprijzen op bij leveranciers en past standaardmarges toe. De zaakvoerder controleert en personaliseert — het rekenwerk is gedaan.",
      },
      {
        title: "Live materiaalprijzen",
        description:
          "Materiaalprijzen worden regelmatig gesynchroniseerd met leveranciers. Geen verouderde prijzen meer in offertes, geen verrassingen bij de uitvoering. Het systeem waarschuwt bij significante prijswijzigingen.",
      },
      {
        title: "Gecentraliseerde werfcommunicatie",
        description:
          "Werfleiders sturen updates, foto's en bestelbonnen via één kanaal. Alles wordt automatisch per project gearchiveerd. De zaakvoerder krijgt dagelijks een samenvatting per werf — zonder zelf WhatsApp-groepen te moeten doorpluizen.",
      },
      {
        title: "Automatische offerte-opvolging",
        description:
          "Verstuurde offertes worden automatisch opgevolgd. Het systeem herinnert de projectleider wanneer een follow-up nodig is en stuurt desgewenst een geautomatiseerd herinnringsbericht naar de klant.",
      },
    ],
    results: [
      {
        metric: "80%",
        label:
          "Minder tijd aan het opmaken van offertes — van 4 uur naar minder dan 45 minuten",
      },
      {
        metric: "0 gemiste deals",
        label:
          "Door automatische opvolging van verstuurde offertes — geen warme lead wordt meer koud",
      },
      {
        metric: "1 dashboard",
        label:
          "Voor alle werfcommunicatie — geen WhatsApp-chaos meer, alles per project gearchiveerd",
      },
    ],
    testimonialQuote:
      "Ik was gewend om 's avonds na het eten nog offertes te tikken. Nu doet het systeem het rekenwerk en focus ik op het klantgesprek. En voor het eerst weet ik écht wat er op elke werf speelt — zonder 15 WhatsApp-groepen te moeten checken.",
    testimonialAuthor: "Zaakvoerder",
    testimonialRole: "Peeters & Zonen · Hasselt",
    seoTitle:
      "AI Automatisering Bouw — 80% Snellere Offertes + Werfcommunicatie",
    seoDescription:
      "Hoe een Limburgs aannemersbedrijf 80% minder tijd besteedt aan offertes en werfcommunicatie centraliseert. Offertecalculator, live materiaalprijzen en opvolging.",
    seoKeywords: [
      "AI automatisering bouw",
      "offertes automatiseren bouw",
      "werfopvolging automatiseren",
      "bouwsector digitalisering België",
      "aannemersbedrijf automatisering",
      "offertecalculator bouw",
      "bouw admin automatiseren",
      "werfcommunicatie digitaliseren",
      "faalkosten bouw verminderen",
      "Robaws alternatief",
    ],
    overviewMetric: "80% snellere offertes",
    overviewDescription:
      "Hoe een Limburgs aannemersbedrijf offertes nu in minuten maakt, werfcommunicatie centraliseert en nul follow-ups mist.",
    faq: [
      {
        question: "Hoe hoog zijn de faalkosten in de bouwsector?",
        answer:
          "Gemiddeld 10-15% van de totale bouwsom. Miscommunicatie tussen werf en kantoor is de voornaamste oorzaak. Digitalisering van werfcommunicatie kan dit significant verlagen.",
      },
      {
        question: "Kan een offertecalculator met verschillende leveranciers werken?",
        answer:
          "Ja. Het systeem synchroniseert prijzen met meerdere leveranciers en kan per materiaal de beste prijs voorstellen. Bij significante prijswijzigingen ontvang je een waarschuwing.",
      },
      {
        question: "Hoe vervangt dit WhatsApp op de werf?",
        answer:
          "Het vervangt WhatsApp niet volledig, maar centraliseert de informatiestroom. Updates worden via één kanaal verstuurd en automatisch per project gearchiveerd. De zaakvoerder krijgt dagelijks een samenvatting — geen chat-scrolling meer.",
      },
    ],
  },
];

export function getCaseStudy(sector: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.sector === sector);
}
