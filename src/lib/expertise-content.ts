export interface ExpertiseSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ExpertisePage {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  lead: string;
  sections: ExpertiseSection[];
  stats?: { value: string; label: string }[];
}

export const expertisePages: ExpertisePage[] = [
  {
    slug: "capabilities",
    number: "01",
    eyebrow: "Capabilities",
    title: "Was wir technisch und wissenschaftlich abdecken.",
    lead:
      "Unsere Produktions- und Forschungs-Infrastruktur ist auf Longevity-Produkte spezialisiert – von der ersten Wirkstoff-Analyse über die Galenik bis zur skalierbaren GMP-Produktion.",
    stats: [
      { value: "8", label: "Produktionslinien" },
      { value: "4", label: "Galenik-Formate" },
      { value: "12+", label: "Analytische Methoden" },
      { value: "100%", label: "Schweizer Standort" },
    ],
    sections: [
      {
        heading: "Forschung und Analytik",
        paragraphs: [
          "Unser Labor verfügt über die analytische Infrastruktur, die für moderne Longevity-Produkte gebraucht wird: HPLC mit Diodenarray- und Fluoreszenz-Detektoren, LC-MS/MS für die hochsensitive Wirkstoff-Quantifizierung, NMR für die Strukturaufklärung und ein vollständiges mikrobiologisches Labor für Reinheits- und Stabilitätstests.",
          "Für die wissenschaftliche Bewertung neuer Wirkstoffe und Rezeptur-Konzepte arbeiten wir mit einem Netzwerk aus Schweizer Universitäten und externen Spezialisten. Das stellt sicher, dass jede unserer Entwicklungen nicht nur produktionstauglich, sondern auch wissenschaftlich belastbar ist.",
        ],
        bullets: [
          "HPLC, LC-MS/MS, NMR und ICP-OES im Haus",
          "Validierte analytische Methoden nach ICH-Guidelines",
          "Eigenes Stabilitäts-Labor mit Klimakammern",
          "Mikrobiologische Reinheitsprüfung",
        ],
      },
      {
        heading: "Galenik und Darreichungsformen",
        paragraphs: [
          "Wir produzieren Longevity-Produkte in vier validierten Darreichungsformen: harte und weiche Kapseln, Tabletten, Pulver in Sticks oder Dosen sowie liposomale Liquids. Jede Form wird auf die Anforderungen des jeweiligen Wirkstoffs abgestimmt – Bioverfügbarkeit, Stabilität und Verträglichkeit stehen im Zentrum.",
          "Für besondere Anforderungen – magensaftresistente Verkapselung, gezielte Freisetzung, Geschmacks-Maskierung – verfügen wir über die nötige Coating- und Mikroverkapselungs-Technologie.",
        ],
      },
      {
        heading: "Produktion und Skalierung",
        paragraphs: [
          "Acht Produktionslinien, alle GMP-zertifiziert, decken Chargen von 1.000 bis 1.000.000 Einheiten ab. Pilot-Linien für kleine Mengen sind kompatibel mit den Serienlinien – das bedeutet, dass ein erfolgreich validiertes Pilot-Produkt ohne Re-Qualifizierung skaliert werden kann.",
          "Die gesamte Produktion erfolgt in der Schweiz, in einem klimatisierten Reinraum-Komplex mit getrennten Bereichen für Wirkstoff-Handhabung, Mischung, Konfektionierung und Verpackung.",
        ],
      },
    ],
  },
  {
    slug: "prozess",
    number: "02",
    eyebrow: "Prozess",
    title: "Wie wir Projekte führen – von der Idee zum globalen Roll-out.",
    lead:
      "Ein klar strukturierter Prozess mit definierten Phasen, Quality Gates und Verantwortlichkeiten. Das senkt Time-to-Market und Risiko gleichzeitig.",
    sections: [
      {
        heading: "Phase 1: Konzept und Strategie",
        paragraphs: [
          "Jedes Projekt beginnt mit einem strukturierten Briefing-Workshop. Wir analysieren gemeinsam mit Ihnen Zielgruppe, Zielmärkte, Positionierung und regulatorische Rahmenbedingungen. Ergebnis ist ein Lastenheft, das Ziele, Erfolgs-KPIs und Risiken klar benennt.",
          "Parallel führt unser Wissenschaftsteam eine Studienlandkarte zum gewählten Wirkstoff oder zur Indikation an. Damit ist die wissenschaftliche Basis ab Projektstart auf gemeinsamem Fundament.",
        ],
      },
      {
        heading: "Phase 2: Entwicklung und Validierung",
        paragraphs: [
          "Die eigentliche Entwicklungsarbeit erfolgt in iterativen Sprints. Wir testen Rezeptur-Varianten parallel, bewerten sie nach klaren Kriterien und kombinieren die Erkenntnisse zur produktionstauglichen Spezifikation.",
          "Validierungs-Tests laufen in zwei Phasen: Stress-Tests für die schnelle erste Bewertung, Real-Time-Stabilität für die endgültige Spezifikation. Erst wenn beide Tests bestanden sind, gehen wir in die Serienproduktion.",
        ],
        bullets: [
          "Iteratives Rezeptur-Engineering",
          "Stress-Tests (40°C / 75% rH) für Quick-Feedback",
          "Real-Time-Stabilität über 12, 24 oder 36 Monate",
          "Sensorik-Panel für orale Produkte",
        ],
      },
      {
        heading: "Phase 3: Regulatorik und Markteinführung",
        paragraphs: [
          "Parallel zur Entwicklung erstellt unser Regulatorik-Team die Dossiers für die Zielmärkte. Schweiz, EU und USA decken wir direkt ab – weitere Märkte über kuratierte Partner. Wir koordinieren Einreichungen, beantworten Behörden-Rückfragen und überwachen den Status bis zur Zulassung.",
          "Die Markteinführung selbst kann je nach Kundenwunsch von unseren Distributions-Partnern übernommen oder durch Sie selbst gesteuert werden – wir liefern in jedem Fall die fertige, konfektionierte Ware.",
        ],
      },
      {
        heading: "Phase 4: Skalierung und Monitoring",
        paragraphs: [
          "Nach erfolgreicher Markteinführung läuft die Serienproduktion mit kontinuierlicher Qualitäts-Überwachung. Jede Charge wird vollständig dokumentiert, jede Abweichung wird im Rahmen unseres CAPA-Systems (Corrective and Preventive Actions) bearbeitet.",
          "In regelmässigen Quartals-Reviews bewerten wir gemeinsam mit Ihnen Performance-KPIs, Marktentwicklung und Optimierungs-Potenziale.",
        ],
      },
    ],
  },
  {
    slug: "qualitaet",
    number: "03",
    eyebrow: "Qualität",
    title: "Schweizer Standards, dokumentiert und auditierbar.",
    lead:
      "Qualität ist bei uns kein Marketing-Versprechen, sondern ein System aus Zertifikaten, dokumentierten Prozessen und kontinuierlichen Audits. Hier ein Überblick über die Standards, nach denen wir arbeiten.",
    stats: [
      { value: "4", label: "Aktive Zertifikate" },
      { value: "2×", label: "Jährliche Audits" },
      { value: "100%", label: "Batch-Dokumentation" },
      { value: "0", label: "Recalls seit Gründung" },
    ],
    sections: [
      {
        heading: "Swissmedic und GMP",
        paragraphs: [
          "Swiss Longevity Labs AG produziert nach den Vorgaben des Schweizerischen Heilmittelinstituts Swissmedic. Unsere Produktionsstätte ist GMP-zertifiziert nach den Standards der EU-Direktive 2003/94/EG und entsprechend den ICH-Guidelines validiert.",
          "Diese Zertifizierungen werden in zweijährlichen Behörden-Audits überprüft, ergänzt um interne Audits und Audits durch Kund:innen, die Einsicht in unsere Prozesse nehmen möchten.",
        ],
      },
      {
        heading: "ISO 22000 und ISO 13485",
        paragraphs: [
          "Für Nahrungsergänzungsmittel arbeiten wir nach ISO 22000:2018 (Lebensmittelsicherheits-Managementsystem). Für Produkte im medizinischen Grenzbereich nach ISO 13485:2016 (Qualitätsmanagement für Medizinprodukte).",
          "Diese doppelte Zertifizierung ist im Longevity-Bereich relevant, weil viele Wirkstoffe sich an der Grenze zwischen Nahrungsergänzung und medizinischem Produkt bewegen – und je nach Markt unterschiedlich klassifiziert werden.",
        ],
        bullets: [
          "ISO 22000:2018 – Lebensmittelsicherheit",
          "ISO 13485:2016 – Medizinprodukte-Qualität",
          "HACCP-konforme Gefahrenanalyse",
          "Vollständige Rückverfolgbarkeit jeder Charge",
        ],
      },
      {
        heading: "Lieferantenmanagement",
        paragraphs: [
          "Qualität beginnt bei den Wirkstoffen. Unsere Lieferanten – überwiegend aus Europa und ausgewählte zertifizierte Anbieter aus Übersee – durchlaufen ein eigenes Audit-Programm. Wir prüfen Herkunft, Reinheit, Stabilität und Lieferketten-Sicherheit.",
          "Für jede Wirkstoff-Charge erhalten wir Certificates of Analysis, die wir intern gegenprüfen. Erst nach interner Freigabe wird ein Rohstoff zur Produktion eingesetzt.",
        ],
      },
      {
        heading: "Dokumentation und Audit-Trail",
        paragraphs: [
          "Jede Charge wird vollständig dokumentiert – von der eingesetzten Rohstoff-Charge über die Produktionsschritte und Reinigungs-Validierungen bis zur Endfreigabe. Alle Dokumente werden mindestens 10 Jahre archiviert.",
          "Diese Dokumentation ist nicht nur Compliance-Anforderung – sie ist die Grundlage dafür, dass Sie als Auftraggeber:in jederzeit gegenüber Behörden, Distributoren und Endkund:innen Auskunft geben können.",
        ],
      },
    ],
  },
  {
    slug: "standort",
    number: "04",
    eyebrow: "Standort",
    title: "Eine Adresse in der Schweiz – eine Verantwortung.",
    lead:
      "Forschung, Entwicklung und Produktion liegen am gleichen Schweizer Standort. Diese räumliche Konzentration ist nicht Zufall – sie ist das, was uns als Hersteller schneller, sicherer und glaubwürdiger macht.",
    sections: [
      {
        heading: "Warum ein Standort, nicht mehrere",
        paragraphs: [
          "Viele CDMOs verteilen Forschung, Entwicklung, Produktion und Konfektionierung auf mehrere Standorte oder gar Länder. Das mag rechnerisch effizient sein – operativ und qualitativ ist es ein Risiko.",
          "Wir haben uns bewusst für die räumliche Konzentration entschieden. Das bedeutet kürzere Wege zwischen Labor und Produktion, sofortige Klärung von Detail-Fragen, einheitliche Audit-Standards und kein Transport-Risiko für sensible Zwischenstufen.",
        ],
      },
      {
        heading: "Was vor Ort vorhanden ist",
        paragraphs: [
          "Auf einem zusammenhängenden Gelände in der Schweiz vereinen wir: das wissenschaftliche Labor mit der analytischen Infrastruktur, die Forschungs- und Entwicklungsbereiche, die GMP-zertifizierten Produktionslinien, das Stabilitäts-Labor mit Klimakammern, den klimatisierten Wirkstoff- und Fertigwarenlager-Komplex sowie die Verwaltung mit dem Regulatorik-Team.",
          "Bei Audits und Werks-Besuchen sehen Kund:innen und Behörden die gesamte Wertschöpfungskette an einem Tag – von der Rohstoff-Eingangskontrolle bis zum versandfertigen Karton.",
        ],
        bullets: [
          "Reinraum-Klassen ISO 7 und 8 je nach Bereich",
          "Klimatisiertes Lager mit pharmazeutischer Validierung",
          "Eigene Wasseraufbereitung (Reinst- und WFI-Wasser)",
          "Direkte Anbindung an Schweizer Autobahn und Flughafen",
        ],
      },
      {
        heading: "Was Schweizer Standort konkret heisst",
        paragraphs: [
          "Schweizer Produktion bedeutet: regulatorische Konsistenz, hohe Energie-Versorgungs-Sicherheit, qualifizierte Fachkräfte und ein etabliertes Lieferanten-Netzwerk im Umkreis. Es bedeutet auch: höhere Lohnkosten als in vielen Vergleichsländern.",
          "Dieser Preis ist Teil unseres Angebots. Wir konkurrieren nicht mit Produktion aus Niedriglohn-Ländern – wir konkurrieren mit dem Anspruch, ein verlässliches, dokumentiertes, audit-festes und langlebiges Produktversprechen einzulösen.",
        ],
      },
    ],
  },
];
