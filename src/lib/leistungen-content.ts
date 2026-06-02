import type { ReactNode } from "react";

export interface CaseStudy {
  branche: string;
  aufgabe: string;
  loesung: string;
  resultat: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface DeliverableRow {
  output: string;
  timing: string;
  format: string;
  qualityGate: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface UseCase {
  label: string;
  body: string;
}

export interface LeistungsContent {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  lead: string;
  whatWeOffer: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  process: ProcessStep[];
  useCases: UseCase[];
  deliverables: DeliverableRow[];
  cases: CaseStudy[];
  crossSell: string[]; // slugs
  faqs: FAQ[];
}

export const leistungsContent: Record<string, LeistungsContent> = {
  "private-label": {
    slug: "private-label",
    number: "01",
    title: "Private Label",
    eyebrow: "Eure Marke, unsere Rezeptur",
    lead:
      "Sie kommen mit einer Rezeptur, einem Konzept oder einer klaren Vorstellung. Wir bringen sie GMP-konform zur Marktreife – vom ersten Pilot-Batch bis zur globalen Skalierung, alles unter Schweizer Dach.",
    whatWeOffer: [
      {
        heading: "Was Private Label bei Swiss Longevity Labs bedeutet",
        paragraphs: [
          "Private Label heisst bei uns: Sie behalten die volle Hoheit über Marke, Positionierung und Markt – wir übernehmen die wissenschaftliche und produktionstechnische Verantwortung dafür, dass Ihr Produkt exakt nach Ihren Vorgaben und gleichzeitig nach unseren Schweizer Standards entsteht.",
          "Wir arbeiten dabei in jeder Tiefe, die Sie brauchen. Vom reinen Lohnauftrag auf Basis einer fertigen Rezeptur über die Anpassung bestehender Formeln an Ihre regulatorischen oder sensorischen Anforderungen bis zur vollständigen Neuentwicklung einer Custom-Formel, die ausschliesslich Ihnen gehört.",
        ],
      },
      {
        heading: "Skalierung von der ersten Charge bis zum globalen Roll-out",
        paragraphs: [
          "Unsere Produktionslinien sind so ausgelegt, dass Sie mit kleinen Mengen testen können – und mit derselben Rezeptur, denselben Prozessen und derselben Qualitätssicherung in den fünf- oder sechsstelligen Bereich skalieren. Keine Brüche, keine Re-Qualifizierungen, keine bösen Überraschungen beim Wachstum.",
          "Jede Charge wird vollständig dokumentiert, rückverfolgbar und auditierbar. Das ist nicht nur Compliance – es ist die Grundlage dafür, dass Sie gegenüber Endkund:innen, Distributoren und Behörden jederzeit sprechfähig sind.",
        ],
        bullets: [
          "Mindestbestellmengen ab 1’000 Einheiten für Pilotchargen",
          "Skalierung bis 1’000’000 Einheiten ohne Wechsel des Produktionsstandorts",
          "Vollständige Batch-Dokumentation und Stabilitätsdaten",
          "Eigentum an Custom-Rezepturen liegt bei Ihnen",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Briefing",
        body:
          "Wir verstehen Ihre Marke, Ihre Zielgruppe und Ihre regulatorischen Märkte. Ergebnis: ein klares Lastenheft.",
      },
      {
        step: "02",
        title: "Rezeptur-Anpassung",
        body:
          "Wir adaptieren bestehende Formeln oder entwickeln neu – mit Fokus auf Wirksamkeit, Stabilität und Compliance.",
      },
      {
        step: "03",
        title: "Pilot-Batch",
        body:
          "Erste Produktion im Labormassstab. Sensorik, Galenik und Stabilität werden hier final validiert.",
      },
      {
        step: "04",
        title: "Skalierung",
        body:
          "Übertragung auf die kommerzielle Linie. Identische Spezifikation, dokumentierter Tech-Transfer.",
      },
      {
        step: "05",
        title: "Lieferung",
        body:
          "Verpackung, Etikettierung, Logistik. Auf Wunsch inklusive Vorbereitung der Markteinführung.",
      },
    ],
    useCases: [
      {
        label: "Sie haben bereits eine Marke",
        body: "und wollen das Sortiment um ein Longevity-Produkt mit eindeutig schweizerischer Herkunft erweitern.",
      },
      {
        label: "Sie haben eine Rezeptur-Idee",
        body: "die ein erfahrener Partner zur stabilen, marktreifen Form bringen soll – ohne IP-Transfer-Risiko.",
      },
      {
        label: "Sie suchen einen Hersteller",
        body: "der nicht nur produziert, sondern Sie auch durch die Regulatorik der Zielmärkte begleitet.",
      },
      {
        label: "Sie wachsen aus Ihrer aktuellen Lieferkette heraus",
        body: "und brauchen einen Partner, der von kleinen Pilot-Chargen bis zur globalen Skalierung mitwächst.",
      },
      {
        label: "Sie wollen unter NDA arbeiten",
        body: "und benötigen einen vertrauenswürdigen Partner mit jahrzehntelanger CDMO-Erfahrung.",
      },
    ],
    deliverables: [
      { output: "Lastenheft & Spezifikation", timing: "Woche 1–2", format: "PDF, signiert", qualityGate: "Briefing-Approval" },
      { output: "Rezeptur-Konzept", timing: "Woche 3–6", format: "Wissenschaftlicher Bericht", qualityGate: "Sign-off durch Kunde + R&D" },
      { output: "Pilot-Batch", timing: "Monat 3–4", format: "Mind. 1’000 Einheiten", qualityGate: "QC, Sensorik, Stabilität" },
      { output: "Stabilitätsdaten", timing: "fortlaufend", format: "CoA + Studienbericht", qualityGate: "Swissmedic / EU GMP konform" },
      { output: "Serienproduktion", timing: "ab Monat 5", format: "Skaliert nach Bedarf", qualityGate: "Audit-fähig dokumentiert" },
    ],
    cases: [
      {
        branche: "Schweizer Premium-Cosmeceutical-Brand",
        aufgabe:
          "Erweiterung des Sortiments um eine orale Anti-Aging-Linie mit NMN-Basis. Bestehende Rezeptur, unzureichende Stabilität.",
        loesung:
          "Re-Formulierung der NMN-Matrix mit verbesserter Verkapselung. Validierung über 18 Monate, Tech-Transfer auf unsere Linie.",
        resultat:
          "Markteintritt in DACH und Beneluxx innerhalb von 9 Monaten. Stabilität nun über 30 Monate dokumentiert.",
      },
      {
        branche: "Europäische Apothekenkette",
        aufgabe:
          "Eigene Longevity-Linie mit drei Kern-Produkten. Voller IP-Schutz, hohe Reinheit, regulatorische Sicherheit für 11 Märkte.",
        loesung:
          "Komplette Custom-Entwicklung von drei Formeln (NAD⁺-Komplex, Spermidin, Senolytika) plus Begleitung der Marktzulassung.",
        resultat:
          "Linie seit 2024 in 11 EU-Märkten gelistet. Pro Markt unter 4 Monate Notifizierungs-Zeit dank vorbereiteter Dossiers.",
      },
    ],
    crossSell: ["produktentwicklung", "regulatorik", "distribution"],
    faqs: [
      {
        q: "Behalten wir die Rechte an der Custom-Rezeptur?",
        a: "Ja. Wenn Sie eine Custom-Rezeptur bei uns entwickeln lassen, gehört das Eigentum an der Formel Ihnen. Wir produzieren ausschliesslich für Sie, vertraglich abgesichert.",
      },
      {
        q: "Wie hoch ist die minimale Bestellmenge?",
        a: "Für Pilot-Batches starten wir ab 1’000 Einheiten. Für Serienproduktion liegen typische MOQs zwischen 5’000 und 50’000 Einheiten, abhängig von Darreichungsform und Verpackung.",
      },
      {
        q: "In welchen Märkten können Sie unterstützen?",
        a: "Wir produzieren GMP-konform für die Schweiz, die EU, den UK-Markt, die USA und mehrere asiatische Märkte. Regulatorische Begleitung übernehmen wir auf Wunsch zusätzlich.",
      },
      {
        q: "Wie lange dauert ein typisches Private-Label-Projekt?",
        a: "Von Briefing bis Serienproduktion liegen wir bei einer bestehenden Rezeptur bei 4–6 Monaten, bei voller Custom-Entwicklung bei 9–12 Monaten – abhängig von Komplexität und Regulatorik.",
      },
      {
        q: "Arbeiten Sie unter NDA?",
        a: "Standardmässig ja. Vor jeder inhaltlichen Diskussion schliessen wir eine beidseitige Vertraulichkeitsvereinbarung ab.",
      },
    ],
  },

  "white-label": {
    slug: "white-label",
    number: "02",
    title: "White Label",
    eyebrow: "Unsere Rezeptur, eure Marke",
    lead:
      "Erprobte SLL-Rezepturen, sofort verfügbar. Sie vermarkten unter Ihrer Brand, wir liefern die fertige Linie – kürzeste Time-to-Market bei vollem Qualitätsanspruch.",
    whatWeOffer: [
      {
        heading: "Time-to-Market in Wochen statt Quartalen",
        paragraphs: [
          "Unsere White-Label-Linie besteht aus einer kuratierten Auswahl belegter Longevity-Formeln, die wir intern entwickelt, klinisch begleitet und in Serie produziert haben. Sie wählen aus diesem Katalog – und können innerhalb weniger Wochen mit Ihrer eigenen Marke in den Markt.",
          "Das macht White Label zur idealen Wahl für D2C-Brands, die schnell launchen wollen, für Retailer mit eigener Premium-Linie und für etablierte Health-Marken, die das Longevity-Segment ohne langwierige R&D-Phase erschliessen.",
        ],
      },
      {
        heading: "Branding-Flexibilität auf der Verpackung, nicht in der Rezeptur",
        paragraphs: [
          "Bei White Label bleibt die Rezeptur unverändert – das ist der Grund für Geschwindigkeit und Preis. Sie haben aber volle gestalterische Freiheit bei Verpackung, Etikett, Produktname, Sprachversionen und der gesamten Marketing-Ebene.",
          "Wir liefern ab Werk fertig konfektioniert – auf Wunsch auch direkt in Ihr Fulfillment-Zentrum. Sie sparen sich Lager, Konfektionierung und Logistik in der frühen Phase Ihres Markenaufbaus.",
        ],
        bullets: [
          "Aktuell sechs validierte Kern-Rezepturen verfügbar",
          "Exklusivität pro Markt und Vertriebskanal verhandelbar",
          "Verpackung, Etikett, Beipackzettel komplett auf Ihre Marke",
          "Ab Lager innerhalb von 4–6 Wochen lieferbar",
        ],
      },
    ],
    process: [
      { step: "01", title: "Katalog-Sichtung", body: "Sie sichten unseren White-Label-Katalog und wählen die passende Rezeptur." },
      { step: "02", title: "Branding-Briefing", body: "Sie liefern Markenidentität, Verpackungs-Design und Texte; wir prüfen Konformität." },
      { step: "03", title: "Muster", body: "Wir produzieren ein Verpackungs-Muster zur finalen Freigabe vor Serienstart." },
      { step: "04", title: "Produktion", body: "Serienproduktion mit Ihrer Verpackung. Vollständige Dokumentation pro Charge." },
      { step: "05", title: "Auslieferung", body: "Versand an Ihr Lager oder direkt an Ihr Fulfillment – auf Wunsch in mehreren Tranchen." },
    ],
    useCases: [
      { label: "Sie launchen eine neue D2C-Marke", body: "und brauchen schnellen Marktzugang ohne eigene Rezeptur-Entwicklung." },
      { label: "Sie sind Retailer mit Premium-Anspruch", body: "und wollen eine eigene Longevity-Linie ohne Aufbau eines R&D-Teams." },
      { label: "Sie sind etablierte Health-Brand", body: "und möchten Longevity strategisch ergänzen, ohne 12 Monate zu warten." },
      { label: "Sie wollen testen", body: "bevor Sie in eine Custom-Entwicklung investieren – White Label als MVP-Phase." },
      { label: "Sie brauchen Schweizer Glaubwürdigkeit", body: "auf Ihrem Etikett – wir liefern das mit Swiss-Made-Zertifikat." },
    ],
    deliverables: [
      { output: "Katalog & Specs", timing: "Sofort", format: "PDF + CoA pro Rezeptur", qualityGate: "Vorab geprüft" },
      { output: "Verpackungs-Muster", timing: "Woche 2–3", format: "Physisches Sample", qualityGate: "Approval Kunde" },
      { output: "Erstcharge", timing: "Woche 4–6", format: "Ab 3’000 Einheiten", qualityGate: "QC + Verpackungs-Audit" },
      { output: "Nachlieferungen", timing: "Auf Abruf", format: "Innerhalb 2 Wochen", qualityGate: "Bestandsgesteuert" },
    ],
    cases: [
      {
        branche: "D2C-Startup im Bio-Hacking-Segment",
        aufgabe: "Markteinführung einer NAD⁺-Linie binnen 60 Tagen, mit Schweizer Herkunfts-Claim und vollem Branding.",
        loesung: "White-Label NAD⁺ Boost mit Custom-Verpackung und mehrsprachigem Etikett (DE, EN, FR).",
        resultat: "Live-Launch nach 49 Tagen. Erste Charge ausverkauft in 6 Wochen, Re-Order x3.",
      },
      {
        branche: "Skandinavische Apotheken-Kooperation",
        aufgabe: "Eigene Senolytika-Linie für 280 Apotheken-Standorte, ohne eigenes R&D-Budget.",
        loesung: "White-Label Senolytic Complex, lokalisiertes Etikett und Verpackungs-Customization für vier Märkte.",
        resultat: "Distribution über alle 280 Standorte in 4 Monaten. Skandinavien wurde so unser zweitgrösster Markt.",
      },
    ],
    crossSell: ["distribution", "regulatorik"],
    faqs: [
      {
        q: "Was ist der Unterschied zu Private Label?",
        a: "Bei White Label nutzen Sie eine bestehende SLL-Rezeptur. Bei Private Label entwickeln oder adaptieren wir eine Custom-Formel exklusiv für Sie. White Label ist schneller und günstiger, Private Label ist exklusiver und IP-geschützt.",
      },
      {
        q: "Bin ich exklusiv für meinen Markt?",
        a: "Auf Wunsch – ja. Wir vergeben Exklusivität pro Land und Vertriebskanal. Das ist Teil der Konditionen-Verhandlung.",
      },
      {
        q: "Können wir die Rezeptur nachträglich anpassen?",
        a: "Ja, dann wechseln wir in einen Private-Label-Modus. Anpassungen an der Formel führen zu einer separaten Custom-Entwicklung und entsprechenden Konditionen.",
      },
      {
        q: "Wie schnell ist die Erstcharge verfügbar?",
        a: "Bei verfügbarer Rezeptur und freigegebenem Verpackungs-Design liegen wir typisch bei 4–6 Wochen ab Bestellung.",
      },
    ],
  },

  "full-service-rd": {
    slug: "full-service-rd",
    number: "03",
    title: "Full Service & R&D",
    eyebrow: "End-to-End unter einem Dach",
    lead:
      "Von der ersten Idee bis zum globalen Launch. Strategische Begleitung mit eigenem R&D-Team, GMP-Produktion, regulatorischer Expertise und Distribution – orchestriert als eine integrierte Wertschöpfungskette.",
    whatWeOffer: [
      {
        heading: "Eine Verantwortung, ein Ansprechpartner",
        paragraphs: [
          "Full Service & R&D ist unser Premium-Modell: Sie übergeben uns das gesamte Produkt-Vorhaben, wir liefern es marktreif zurück. Statt fünf Lieferanten und drei Koordinatoren haben Sie einen Projektpartner und ein klares Lieferversprechen.",
          "Das ist nicht nur bequemer – es ist substantiell schneller und sicherer. Weil unser R&D-Team von Anfang an mit den Produktions- und Regulatorik-Verantwortlichen am selben Tisch sitzt, fallen Schnittstellen-Reibungen weg. Eine Entscheidung im Labor wird sofort gegen Produzierbarkeit und Compliance gespiegelt.",
        ],
      },
      {
        heading: "Was alles dazugehört",
        paragraphs: [
          "Strategische Konzeption und Marktanalyse stehen am Anfang. Daraus entstehen Produktidee, Zielgruppen-Profil und Positionierung. Unsere Wissenschaftler:innen entwickeln dann die Rezeptur, unsere Galeniker die Darreichungsform, unsere Stabilitäts-Spezialist:innen die belastbare Marktreife.",
          "Parallel arbeitet das Regulatorik-Team an Health-Claims, EFSA-Dossiers und Notifizierungen in den Zielmärkten. Die GMP-Produktion läuft in unseren eigenen Schweizer Linien. Distribution, Logistik und teilweise auch Launch-Marketing können wir integrieren.",
        ],
        bullets: [
          "Dediziertes Projektteam mit klar definiertem Lead",
          "Wissenschaftlicher Beirat aus Schweizer Forschung",
          "Vollständige IP-Übertragung an Sie nach Projektabschluss",
          "Optionale Beteiligung an erfolgsabhängiger Vergütung",
        ],
      },
    ],
    process: [
      { step: "01", title: "Strategie", body: "Zielmarkt, Positionierung, Wettbewerb. Wir definieren gemeinsam, was Erfolg konkret heisst." },
      { step: "02", title: "Wissenschaft", body: "Wirkstoff-Auswahl, Studienlage, mechanistische Begründung. Output: Whitepaper." },
      { step: "03", title: "Entwicklung", body: "Rezeptur, Galenik, Stabilität – bis zur produktionsreifen Spezifikation." },
      { step: "04", title: "Regulatorik", body: "Health-Claims, Notifizierungen, Dossiers für alle Zielmärkte." },
      { step: "05", title: "Produktion & Launch", body: "Skalierte Serie, Distribution, optional Launch-Begleitung." },
    ],
    useCases: [
      { label: "Sie wollen eine ganz neue Marke", body: "im Longevity-Segment etablieren – von der Idee bis zur ersten Charge." },
      { label: "Sie sind ein Investor", body: "und brauchen einen Operating-Partner für ein Portfolio-Unternehmen im Health-Bereich." },
      { label: "Sie sind etablierter Player", body: "in einem benachbarten Markt und wollen Longevity strategisch ohne eigenes Team angehen." },
      { label: "Sie haben einen Erfolgs-Wirkstoff", body: "aus eigener Forschung und brauchen den industriellen Pfad in den Markt." },
      { label: "Sie wollen schnell wachsen", body: "und brauchen einen Partner, der Komplexität reduziert statt vermehrt." },
    ],
    deliverables: [
      { output: "Strategie-Paper", timing: "Monat 1", format: "Markt-, Wettbewerbs- und Positionierungs-Analyse", qualityGate: "Strategie-Workshop" },
      { output: "Wissenschafts-Dossier", timing: "Monat 2–3", format: "Whitepaper + Studienlandkarte", qualityGate: "Wissenschaftlicher Beirat" },
      { output: "Produktreife Rezeptur", timing: "Monat 4–8", format: "Vollständige Spec + Stabilitätsdaten", qualityGate: "GMP-Audit" },
      { output: "Regulatorik-Dossiers", timing: "Monat 6–10", format: "Pro Markt eigenes Dossier", qualityGate: "Behörden-Submission" },
      { output: "Erste Markt-Charge", timing: "Monat 10–14", format: "Serienreif konfektioniert", qualityGate: "Launch-Approval" },
    ],
    cases: [
      {
        branche: "Schweizer Investor mit Longevity-Portfolio",
        aufgabe: "Aufbau einer Eigenmarke aus null, in 18 Monaten zum globalen Launch. Wissenschaftlich glaubwürdig, regulatorisch wasserdicht.",
        loesung: "Full-Service-Mandat über alle Stufen. Wissenschaftlicher Beirat, Custom-Rezeptur, parallele Marktzulassungen.",
        resultat: "Launch in CH und DE nach 16 Monaten. EU-weite Rollout-Phase aktuell laufend.",
      },
      {
        branche: "Wissenschaftlerin mit Forschungs-Wirkstoff",
        aufgabe: "Eigener patentierter Wirkstoff aus Universitäts-Forschung soll als Premium-Supplement vermarktet werden.",
        loesung: "Übernahme von Galenik, klinischer Validierung, Produktion und Markteinführung. Wissenschafterin bleibt CSO.",
        resultat: "Markteintritt mit drei Produkten innerhalb von 22 Monaten. Erfolgsbeteiligung statt klassische Margenstruktur.",
      },
    ],
    crossSell: ["produktentwicklung", "regulatorik", "distribution", "private-label"],
    faqs: [
      {
        q: "Was kostet ein Full-Service-Mandat?",
        a: "Wir arbeiten typischerweise mit Phasen-basierten Honoraren plus erfolgsabhängiger Komponente. Konkrete Zahlen geben wir nach einem ersten Briefing-Workshop.",
      },
      {
        q: "Wem gehört am Ende die Marke und das IP?",
        a: "Ihnen. Wir sind Entwicklungs- und Produktionspartner – alle Marken- und IP-Rechte werden vertraglich an Sie übertragen.",
      },
      {
        q: "Wie lang dauert ein Full-Service-Projekt typischerweise?",
        a: "Von der ersten Strategie-Sitzung bis zum globalen Launch rechnen wir mit 14–22 Monaten, abhängig von Anzahl Zielmärkte und Tiefe der Wissenschaft.",
      },
      {
        q: "Können wir auch nur eine Stufe buchen?",
        a: "Ja – jede unserer sechs Leistungen ist auch einzeln buchbar. Full Service ist die orchestrierte Kombination.",
      },
    ],
  },

  "produktentwicklung": {
    slug: "produktentwicklung",
    number: "04",
    title: "Produktentwicklung",
    eyebrow: "Rezeptur, Galenik, Stabilität",
    lead:
      "Wissenschaftliches Engineering vom Wirkstoff zur stabilen, marktreifen Darreichungsform – auch als eigenständige Leistung, ohne dass wir produzieren müssen.",
    whatWeOffer: [
      {
        heading: "Das Handwerk, aus dem Longevity-Produkte werden",
        paragraphs: [
          "Eine Studie zu lesen ist eine Sache. Daraus ein stabiles, schmackhaftes, bioverfügbares und regulatorisch zulässiges Produkt zu machen ist eine ganz andere. Genau in dieser Übersetzung liegt unsere Kernkompetenz.",
          "Wir entwickeln Rezepturen für Sie auch dann, wenn Sie woanders produzieren lassen – als reine R&D-Leistung. Sie erhalten eine vollständig dokumentierte Spezifikation, übertragbar auf jeden GMP-zertifizierten Hersteller.",
        ],
      },
      {
        heading: "Drei Säulen der Entwicklung",
        paragraphs: [
          "Rezeptur: Wirkstoff-Auswahl, Dosierung, Co-Faktoren, Synergie-Optimierung. Wir kombinieren Studienlage mit eigenen Erfahrungswerten aus tausenden produzierten Chargen.",
          "Galenik: Darreichungsform, Verkapselung, Verträglichkeit, Bioverfügbarkeit. Magensaftresistente Kapseln, liposomale Komplexe, sublinguale Formate – was Ihre Wirkstoffe wirklich brauchen.",
          "Stabilität: Belastungstests, Real-Time-Stabilität, Verpackungs-Wechselwirkungen. Wir garantieren, dass Ihr Produkt am Tag X+24 noch das tut, was es am Tag 0 versprochen hat.",
        ],
        bullets: [
          "Eigenes Labor mit HPLC, Massenspektrometrie, mikrobiologischer Diagnostik",
          "Wissenschaftliches Netzwerk mit Schweizer Universitäten",
          "Tech-Transfer-Pakete für externe Hersteller",
          "Reine R&D-Aufträge ab CHF 35’000 Projekt-Pauschale",
        ],
      },
    ],
    process: [
      { step: "01", title: "Konzept-Workshop", body: "Sie bringen Wirkstoff oder Wirkung, wir bringen Galenik-Optionen. Output: Konzept-Skizze." },
      { step: "02", title: "Literatur-Synthese", body: "Aktuelle Studienlage, mechanistische Plausibilität, Wettbewerbsanalyse." },
      { step: "03", title: "Labor-Formulierung", body: "Erste Rezeptur-Iterationen, Stabilitäts-Vortests, Sensorik-Profile." },
      { step: "04", title: "Validierung", body: "Belastungstest, Real-Time-Stabilität über 6+ Monate, Bioverfügbarkeit." },
      { step: "05", title: "Tech-Transfer", body: "Vollständige Spec + Produktionsanleitung. Übertragbar auf jede GMP-Linie." },
    ],
    useCases: [
      { label: "Sie haben einen Wirkstoff", body: "und wissen nicht, in welcher Galenik er funktionieren würde." },
      { label: "Sie haben eine bestehende Rezeptur", body: "die instabil ist, schlecht schmeckt oder nicht bioverfügbar genug ist." },
      { label: "Sie produzieren extern", body: "und brauchen eine R&D-Partnerschaft, die Tech-Transfer-Pakete liefert." },
      { label: "Sie sind Startup", body: "ohne eigenes Labor – und brauchen Wissenschafts-Kompetenz für Ihre erste Linie." },
      { label: "Sie wollen Bioverfügbarkeit verbessern", body: "in einem bestehenden Produkt – wir analysieren und optimieren gezielt." },
    ],
    deliverables: [
      { output: "Konzept-Skizze", timing: "Woche 1–2", format: "Wissenschaftlicher Vorschlag", qualityGate: "Workshop-Abschluss" },
      { output: "Literatur-Synthese", timing: "Woche 3–4", format: "Strukturierter Review", qualityGate: "Wissenschafts-Review" },
      { output: "Rezeptur-Prototyp", timing: "Monat 2–4", format: "Labor-Charge + Spec", qualityGate: "Internes Stabilitäts-Gate" },
      { output: "Stabilitäts-Daten", timing: "Monat 4–10", format: "Real-Time + Stress-Tests", qualityGate: "Validierungs-Audit" },
      { output: "Tech-Transfer-Paket", timing: "Monat 10–11", format: "Vollständige Übergabe-Doku", qualityGate: "GMP-Konformität" },
    ],
    cases: [
      {
        branche: "Bestehende Premium-Brand mit Stabilitäts-Problem",
        aufgabe: "Eine NMN-Rezeptur verlor nach 6 Monaten 40% Wirkstoff. Verpackung und Galenik waren der Verdacht.",
        loesung: "Analyse der Wechselwirkung zwischen Verpackung, Hilfsstoffen und NMN. Neue Verkapselung, neue Folie.",
        resultat: "Stabilität nun über 24 Monate dokumentiert. Reklamationen um 90% reduziert.",
      },
      {
        branche: "Startup mit Universitäts-Lizenz",
        aufgabe: "Wirkstoff aus universitärer Forschung soll erstmals als Supplement formuliert werden.",
        loesung: "Galenik-Konzept, Bioverfügbarkeits-Optimierung, drei Iterationen Labor-Tests.",
        resultat: "Produktionsreife Rezeptur nach 11 Monaten. Übergabe an externen Hersteller des Kunden.",
      },
    ],
    crossSell: ["regulatorik", "private-label"],
    faqs: [
      {
        q: "Können wir Produktentwicklung buchen, ohne bei Ihnen zu produzieren?",
        a: "Ja, ausdrücklich. Reine R&D-Aufträge sind ein bewusst angebotener Service. Sie erhalten ein Tech-Transfer-Paket für Ihren Wunsch-Hersteller.",
      },
      {
        q: "Wie lange dauert eine vollständige Rezeptur-Entwicklung?",
        a: "Für eine produktionsreife, real-time-stabilitäts-validierte Rezeptur planen Sie 8–12 Monate. Schneller geht es, wenn beschleunigte Stabilität akzeptabel ist.",
      },
      {
        q: "Wem gehört die entwickelte Rezeptur?",
        a: "Ihnen. Bei reinen R&D-Aufträgen liegt das Eigentum vollständig beim Auftraggeber, vertraglich abgesichert.",
      },
      {
        q: "Was kostet typischerweise eine Entwicklung?",
        a: "Pauschalen beginnen bei CHF 35’000 für einfache Single-Compound-Rezepturen. Komplexe Multi-Wirkstoff-Formeln liegen typisch zwischen CHF 80’000 und CHF 250’000.",
      },
    ],
  },

  "regulatorik": {
    slug: "regulatorik",
    number: "05",
    title: "Regulatorik & Compliance",
    eyebrow: "Swissmedic, EFSA, FDA, EU",
    lead:
      "Marktzulassungen weltweit. Wir navigieren Health Claims, Notifizierungen und Compliance-Anforderungen vom ersten Dossier bis zur finalen Zulassung – auch ohne dass wir produzieren müssen.",
    whatWeOffer: [
      {
        heading: "Was zwischen Idee und Markt steht",
        paragraphs: [
          "Ein gutes Produkt ohne Marktzulassung ist ein teures Hobby. Regulatorik ist das unsichtbare Rückgrat jedes Longevity-Geschäfts – und gleichzeitig dort, wo die meisten Vorhaben verlangsamt oder ganz gestoppt werden.",
          "Wir kennen die Behördenpfade in den relevanten Märkten und arbeiten dort seit Jahren mit Verifikationen, Notifizierungen und Health-Claim-Dossiers. Das verkürzt Zeit und reduziert Risiko – sowohl bei eigenen Produkten als auch bei denen unserer Kunden.",
        ],
      },
      {
        heading: "Märkte, die wir abdecken",
        paragraphs: [
          "Schweiz: Swissmedic-Konformität, Lebensmittelrecht, Health-Claim-Verzeichnis. EU: EFSA Health-Claims, Notifizierung in den Mitgliedstaaten, Article 13 und 14. UK: MHRA-Konformität nach Brexit-Anpassung. USA: FDA, Structure/Function Claims, NDI-Notifikationen.",
          "Asien teilweise abgedeckt – Japan, Singapur, ausgewählte ASEAN-Märkte. Für China, Korea und Naher Osten kooperieren wir mit spezialisierten Partnern, die wir steuern.",
        ],
        bullets: [
          "Vollständige Dossier-Erstellung für jedes Markt-Set",
          "Health-Claim-Strategie statt nur Compliance-Reaktion",
          "Behörden-Kommunikation aus einer Hand",
          "Audit-Begleitung bei externen GMP-Prüfungen",
        ],
      },
    ],
    process: [
      { step: "01", title: "Markt-Mapping", body: "Welche Märkte, welche Behörden, welche Claims. Output: Regulatorik-Strategie." },
      { step: "02", title: "Dossier-Aufbau", body: "Wissenschaftliche Begründung, Wirkstoff-Profile, Sicherheitsdaten." },
      { step: "03", title: "Submission", body: "Einreichung bei den Behörden, formal korrekt und vollständig." },
      { step: "04", title: "Behörden-Dialog", body: "Rückfragen, Nachforderungen, Klarstellungen – wir übernehmen die Kommunikation." },
      { step: "05", title: "Zulassung & Monitoring", body: "Listing-Bestätigung, laufende Compliance-Überwachung." },
    ],
    useCases: [
      { label: "Sie wollen in einen neuen Markt", body: "und brauchen eine seriöse Vorab-Einschätzung der regulatorischen Pfade." },
      { label: "Sie haben einen Health Claim", body: "in Aussicht und brauchen eine professionelle EFSA-Begründung." },
      { label: "Sie wurden von einer Behörde beanstandet", body: "und brauchen schnelle Nachbesserung Ihres Dossiers." },
      { label: "Sie planen ein neues Produkt", body: "und wollen Regulatorik schon in der R&D-Phase mitdenken." },
      { label: "Sie sind etablierter Player", body: "und wollen Regulatorik aus dem Haus geben, um Inhouse-Kapazität freizustellen." },
    ],
    deliverables: [
      { output: "Markt-Strategie", timing: "Woche 1–3", format: "Strategie-Dokument pro Markt", qualityGate: "Strategie-Sign-off" },
      { output: "Wissenschafts-Dossier", timing: "Monat 1–3", format: "Pro Markt eigenes Dokument", qualityGate: "Wissenschaftliches Peer-Review" },
      { output: "Submission-Paket", timing: "Monat 3–4", format: "Formelle Einreichung", qualityGate: "Behörden-Eingangsbestätigung" },
      { output: "Behörden-Korrespondenz", timing: "fortlaufend", format: "Dokumentierte Kommunikation", qualityGate: "Audit-fähig protokolliert" },
      { output: "Zulassungs-Bestätigung", timing: "Monat 4–9", format: "Offizielles Listing", qualityGate: "Marktzulassung" },
    ],
    cases: [
      {
        branche: "Skandinavischer Longevity-Brand",
        aufgabe: "EFSA-Konforme Health-Claim-Begründung für eine NMN-NR-Kombi für drei EU-Märkte.",
        loesung: "Strukturiertes Dossier mit Mechanistik, Studien und Sicherheits-Profil. Vorabstimmung mit Behörden.",
        resultat: "Notifizierung in DE, FR und NL innerhalb von 4 Monaten ohne Nachforderungen.",
      },
      {
        branche: "US-Brand mit Schweizer Produktionswunsch",
        aufgabe: "Spiegelung einer NDI-konformen Linie auf Swissmedic-konforme Variante für den DACH-Markt.",
        loesung: "Re-Mapping der Spezifikation, Anpassung der Dosis-Bereiche, eigenes Schweizer Dossier.",
        resultat: "Markteintritt in der Schweiz innerhalb von 6 Monaten, parallel Vorbereitung von 5 weiteren EU-Märkten.",
      },
    ],
    crossSell: ["produktentwicklung", "distribution"],
    faqs: [
      {
        q: "Übernehmen Sie auch die Behörden-Kommunikation?",
        a: "Ja, das ist Kern unserer Leistung. Sie haben einen Ansprechpartner, wir sprechen mit den Behörden.",
      },
      {
        q: "Können Sie auch reine Health-Claim-Beratung leisten?",
        a: "Ja. Ohne dass wir produzieren oder entwickeln müssen – Health-Claim-Strategie ist eine eigenständige Leistung.",
      },
      {
        q: "Wie lang dauert eine typische EU-Notifizierung?",
        a: "Bei sauber vorbereitetem Dossier rechnen wir mit 3–6 Monaten pro Markt. Bei Health Claims nach Article 14 mit 9–18 Monaten.",
      },
      {
        q: "Welche Märkte können Sie abdecken?",
        a: "CH, EU, UK, USA direkt. Japan, Singapur und ausgewählte ASEAN-Märkte über kuratierte Partner. China, Korea, Naher Osten über spezialisierte Kooperationen.",
      },
    ],
  },

  "distribution": {
    slug: "distribution",
    number: "06",
    title: "Distribution",
    eyebrow: "Logistik weltweit, effizient & sicher",
    lead:
      "Pharma-konforme Lagerung, Fulfillment und ein etabliertes Partner-Netzwerk für die globale Distribution Ihrer Longevity-Produkte – auch wenn wir nicht produziert haben.",
    whatWeOffer: [
      {
        heading: "Warum Distribution bei Longevity speziell ist",
        paragraphs: [
          "Longevity-Produkte sind sensible Ware. Temperatur-Toleranz, Feuchtigkeits-Schutz, Light-Protection – was im Labor klappt, muss auch nach 14 Tagen im Container und drei Tagen im Distributionslager noch funktionieren.",
          "Wir haben Lager- und Logistik-Infrastruktur aufgebaut, die das gewährleistet – und über die Jahre ein Netzwerk an Distributions-Partnern in Europa, Nordamerika und ausgewählten Asien-Märkten kuratiert.",
        ],
      },
      {
        heading: "Was wir konkret übernehmen",
        paragraphs: [
          "Klimatisiertes Lager in der Schweiz mit pharmazeutischer Validierung. Pick-and-Pack-Fulfillment in den Konfigurationen Stück, Pack und Karton. Anbindung an Ihre E-Commerce-Plattform oder ERP-System. Internationale Versand-Steuerung inklusive Zoll-Dokumentation.",
          "Bei B2B-Distribution arbeiten wir mit 14 bewährten Distributoren in der EU, drei in UK, vier in den USA und mit kuratierten Partnern in Japan, Singapur und Hongkong. Wir steuern sie zentral – Sie haben einen Reporting-Punkt.",
        ],
        bullets: [
          "GxP-validiertes Lager in der Zentralschweiz",
          "Direkte E-Commerce-Anbindung (Shopify, WooCommerce, Custom)",
          "Mehrsprachige Beipack-Materialien (DE, EN, FR, IT, ES)",
          "Konsolidiertes Reporting über alle Vertriebskanäle",
        ],
      },
    ],
    process: [
      { step: "01", title: "Bedarfs-Analyse", body: "Volumen, Märkte, Kanäle, Saisonalität. Output: Logistik-Konzept." },
      { step: "02", title: "Onboarding", body: "Stammdaten, Schnittstellen-Setup, Verpackungs-Validierung." },
      { step: "03", title: "Pilot-Phase", body: "Erste Lieferungen im realen Betrieb, mit engem Monitoring." },
      { step: "04", title: "Skalierung", body: "Ausweitung auf alle Zielmärkte und Kanäle." },
      { step: "05", title: "Optimierung", body: "Laufende KPI-Analyse, Bestands-Steuerung, Cost-to-Serve-Verbesserung." },
    ],
    useCases: [
      { label: "Sie launchen eine D2C-Marke", body: "und brauchen pharma-tauglichen 3PL-Service ab Stunde eins." },
      { label: "Sie wachsen über mehrere Märkte", body: "und brauchen einen Logistik-Knoten statt fünf parallele Logistiker." },
      { label: "Sie produzieren extern", body: "und wollen die Distribution professionalisieren – auch wenn wir nicht produzieren." },
      { label: "Sie expandieren in die USA", body: "und brauchen Zoll-Erfahrung und US-Distributoren-Anbindung." },
      { label: "Sie haben B2B-Pflegekunden", body: "die termingenaue Anlieferungen brauchen – wir orchestrieren das." },
    ],
    deliverables: [
      { output: "Logistik-Konzept", timing: "Woche 1–2", format: "Konzept-Dokument", qualityGate: "Kunde + Operations" },
      { output: "ERP-Anbindung", timing: "Woche 3–6", format: "API-Integration", qualityGate: "Testflows produktiv" },
      { output: "Pilot-Sendungen", timing: "Woche 6–10", format: "Reale Aufträge", qualityGate: "SLA-Erfüllung" },
      { output: "Skalierter Betrieb", timing: "ab Monat 3", format: "Voller Live-Modus", qualityGate: "KPI-Reporting monatlich" },
      { output: "Quartals-Review", timing: "alle 3 Monate", format: "Strategischer Review", qualityGate: "Optimierungs-Roadmap" },
    ],
    cases: [
      {
        branche: "D2C-Brand im DACH-Raum",
        aufgabe: "Wechsel vom generischen 3PL zu pharma-validiertem Fulfillment für eine NAD⁺-Linie mit Kühlpflicht.",
        loesung: "Validierter Lagerbereich, neue Verpackungs-Konzepte, optimierter Versand mit Kühlbegleitern.",
        resultat: "Reklamationen wegen Wirkstoff-Verlust auf null. Lieferzeit DACH unter 48h.",
      },
      {
        branche: "Schweizer Brand mit US-Expansion",
        aufgabe: "Markteintritt in den US-Markt, Zoll, FDA-konforme Lagerung, US-Distributoren-Anbindung.",
        loesung: "Lager-Partner in New Jersey, Zoll-Setup, Anbindung an zwei US-Distributoren und einen E-Commerce-Hub.",
        resultat: "US-Launch nach 5 Monaten. Inzwischen 28% des Gesamtumsatzes über US-Distribution.",
      },
    ],
    crossSell: ["private-label", "white-label", "regulatorik"],
    faqs: [
      {
        q: "Übernehmen Sie auch die Distribution, wenn wir woanders produzieren?",
        a: "Ja. Distribution ist eine eigenständige Leistung – wir können auch fertige Ware aus externer Produktion einlagern und versenden.",
      },
      {
        q: "Welche Märkte können Sie abdecken?",
        a: "Direkt: CH, EU, UK, USA. Über Partner-Netzwerk: Japan, Singapur, Hongkong, ausgewählte ASEAN-Märkte.",
      },
      {
        q: "Wie ist die Kostenstruktur?",
        a: "Setup-Pauschale plus monatlicher Grundpreis für Lagerplatz und Service, dazu transaktionale Kosten pro Sendung. Skaleneffekte ab 5’000 Einheiten/Monat.",
      },
      {
        q: "Bekommen wir Echtzeit-Zugriff auf Bestände?",
        a: "Ja. Dashboard plus API-Anbindung an Ihr ERP oder Ihre E-Commerce-Plattform. SLA für Datenfrische unter 15 Minuten.",
      },
    ],
  },
};

export const leistungsSlugs = Object.keys(leistungsContent);
