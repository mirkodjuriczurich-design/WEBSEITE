export const site = {
  name: "Swiss Longevity Labs AG",
  shortName: "Swiss Longevity Labs",
  acronym: "SLL",
  domain: "swisslongevitylab.com",
  url: "https://swisslongevitylab.com",
  description:
    "Schweizer Full-Solution-Partner für Longevity – Private Label, White Label, Full Service & R&D, Produktentwicklung, Regulatorik und Distribution unter einem Schweizer Dach.",
  positioning:
    "Schweizer Präzision für die Wissenschaft des längeren Lebens.",
  locale: "de-CH",
} as const;

export const nav = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Expertise", href: "/expertise" },
  { label: "Produkte", href: "/produkte" },
  { label: "Wissen", href: "/wissen" },
  { label: "Unternehmen", href: "/unternehmen" },
] as const;

export interface SubNavItem {
  label: string;
  href: string;
  description: string;
}

export interface NavGroup {
  label: string;
  href: string;
  intro: string;
  items: SubNavItem[];
}

export const navGroups: NavGroup[] = [
  {
    label: "Leistungen",
    href: "/leistungen",
    intro: "Sechs Säulen – einzeln oder integriert buchbar.",
    items: [
      { label: "Private Label", href: "/leistungen/private-label", description: "Eure Marke, unsere Rezeptur." },
      { label: "White Label", href: "/leistungen/white-label", description: "Unsere Rezeptur, eure Marke." },
      { label: "Full Service & R&D", href: "/leistungen/full-service-rd", description: "End-to-End unter einem Dach." },
      { label: "Produktentwicklung", href: "/leistungen/produktentwicklung", description: "Rezeptur, Galenik, Stabilität." },
      { label: "Regulatorik & Compliance", href: "/leistungen/regulatorik", description: "Swissmedic, EFSA, FDA, EU." },
      { label: "Distribution", href: "/leistungen/distribution", description: "Logistik weltweit, effizient & sicher." },
    ],
  },
  {
    label: "Expertise",
    href: "/expertise",
    intro: "Was uns als Schweizer Hersteller ausweist.",
    items: [
      { label: "Capabilities", href: "/expertise/capabilities", description: "Analytik, Galenik, Produktion." },
      { label: "Prozess", href: "/expertise/prozess", description: "Vom Konzept zum globalen Roll-out." },
      { label: "Qualität", href: "/expertise/qualitaet", description: "GMP, Swissmedic, ISO." },
      { label: "Standort", href: "/expertise/standort", description: "Eine Schweizer Adresse, eine Verantwortung." },
    ],
  },
  {
    label: "Produkte",
    href: "/produkte",
    intro: "Sechs Produkte unter Schweizer Eigenmarke.",
    items: [
      { label: "Night Repair", href: "/produkte/night-repair", description: "Schlaf als Anti-Aging-Strategie." },
      { label: "Brain Age", href: "/produkte/brain-age", description: "Neurale Langlebigkeit." },
      { label: "Resilience", href: "/produkte/resilience", description: "Stress trifft Adaptogen." },
      { label: "GLP-1 Armor", href: "/produkte/glp1-armor", description: "Für Anwender von GLP-1-Medikamenten." },
      { label: "Senolytic Cleanse", href: "/produkte/senolytic-cleanse", description: "Quartalsweiser Zell-Reset." },
      { label: "Spermidine Ritual", href: "/produkte/spermidine-ritual", description: "Autophagie in flüssiger Form." },
    ],
  },
  {
    label: "Wissen",
    href: "/wissen",
    intro: "Forschung, Partner und Editorial-Insights.",
    items: [
      { label: "Forschung", href: "/wissen/forschung", description: "Eigene Studien und Methoden-Reviews." },
      { label: "Akademische Partner", href: "/wissen/partner", description: "Universitäten und Spezial-Labore." },
      { label: "Insights", href: "/wissen/insights", description: "Editorial-Artikel aus Labor und Markt." },
    ],
  },
  {
    label: "Unternehmen",
    href: "/unternehmen",
    intro: "Hinter jeder Rezeptur stehen Menschen.",
    items: [
      { label: "Story", href: "/unternehmen/story", description: "Wie wir gestartet sind." },
      { label: "Team", href: "/unternehmen/team", description: "Wissenschaft, Produktion, Strategie." },
      { label: "Karriere", href: "/unternehmen/karriere", description: "Offene Positionen und Initiativbewerbungen." },
    ],
  },
];

export const leistungen = [
  {
    slug: "private-label",
    number: "01",
    title: "Private Label",
    tagline: "Eure Marke, unsere Rezeptur.",
    short:
      "Wir produzieren Ihre Rezepturen GMP-konform unter Ihrer Marke – von der ersten Pilot-Charge bis zur globalen Skalierung.",
  },
  {
    slug: "white-label",
    number: "02",
    title: "White Label",
    tagline: "Unsere Rezeptur, eure Marke.",
    short:
      "Erprobte SLL-Rezepturen, schneller Time-to-Market. Sie vermarkten unter Ihrer Brand, wir liefern die fertige Linie.",
  },
  {
    slug: "full-service-rd",
    number: "03",
    title: "Full Service & R&D",
    tagline: "End-to-End unter einem Dach.",
    short:
      "Von der ersten Idee bis zum globalen Launch. Strategische Begleitung mit eigenem R&D-Team, GMP-Produktion und Markteinführungs-Expertise.",
  },
  {
    slug: "produktentwicklung",
    number: "04",
    title: "Produktentwicklung",
    tagline: "Rezeptur, Galenik, Stabilität.",
    short:
      "Wissenschaftliches Engineering vom Wirkstoff zur stabilen Darreichungsform. Auch als eigenständige Leistung buchbar.",
  },
  {
    slug: "regulatorik",
    number: "05",
    title: "Regulatorik & Compliance",
    tagline: "Swissmedic, EFSA, FDA, EU.",
    short:
      "Marktzulassungen weltweit. Wir navigieren Health Claims, Notifizierungen und Compliance-Anforderungen vom ersten Dossier bis zur finalen Zulassung.",
  },
  {
    slug: "distribution",
    number: "06",
    title: "Distribution",
    tagline: "Logistik weltweit, effizient & sicher.",
    short:
      "Pharma-konforme Lagerung, Fulfillment und ein etabliertes Partner-Netzwerk für globale Distribution Ihrer Produkte.",
  },
] as const;

export type Leistung = (typeof leistungen)[number];

export interface Ingredient {
  name: string;
  dose: string;
  function: string;
}

export interface Produkt {
  slug: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  pitch: string;
  short: string;
  marketGap: string;
  description: string;
  ingredients: Ingredient[];
  positioning: string;
  strategicNotes: string[];
  targetGroup: string;
  channel: string;
  pricePerMonth: string;
  developmentTime: string;
  stufe: string;
  format?: string;
}

export const produkte: Produkt[] = [
  {
    slug: "night-repair",
    number: "01",
    name: "Night Repair",
    category: "Schlaf · Anti-Aging",
    tagline:
      "Das erste Supplement weltweit, das Schlaf als Anti-Aging-Waffe positioniert – nicht als Sedativum.",
    pitch:
      "Schlaf ist der biologisch mächtigste Erneuerungsprozess, den der menschliche Körper besitzt.",
    short:
      "NMN, Magnesium L-Threonat und Glycin für Tiefschlaf-getriebene DNA-Reparatur – die nächtliche Anti-Aging-Strategie.",
    marketGap:
      "Der globale Markt für Schlafsupplemente ist über 8 Milliarden Dollar wert. Dennoch kommuniziert kein Produkt Schlaf als zentrale Strategie für gesundes Altern – die gesamte Kategorie wartet auf den Ersten, der diesen Schritt wagt.",
    description:
      "In der Tiefschlafphase wird DNA repariert, Proteine werden korrekt gefaltet und metabolischer Abfall wird über das glymphatische System aus dem Gehirn gespült. Kein Produkt auf dem Markt adressiert Schlafqualität und zelluläre Regeneration als integrierte Strategie. Alle bestehenden Lösungen sind Sedativa zum Einschlafen.",
    ingredients: [
      { name: "NMN", dose: "500 mg", function: "Zelluläre DNA-Reparatur während der nächtlichen Erholung" },
      { name: "Magnesium L-Threonat", dose: "1000 mg", function: "Durchdringt die Blut-Hirn-Schranke" },
      { name: "Glycin", dose: "3000 mg", function: "Senkt die Körpertemperatur für tiefen Schlaf" },
      { name: "Ashwagandha KSM-66", dose: "600 mg", function: "Cortisolreduktion, zertifizierte Form" },
      { name: "Safran Affron", dose: "28 mg", function: "Klinisch bestätigte Schlafarchitektur" },
      { name: "Apigenin", dose: "50 mg", function: "Natürlicher GABA-Modulator, anxiolytisch" },
      { name: "L-Theanin", dose: "200 mg", function: "Entspannung ohne Schläfrigkeit" },
    ],
    positioning: "„Schlaf ist dein mächtigstes Anti-Aging-Werkzeug.“ Premium, nicht Wellness.",
    strategicNotes: [
      "Elegante Nachtkapsel oder rituelles warmes Getränk (Vanille / Kakao).",
      "B2B-Bedeutung: Miniaturformat für Luxushotels – Premium-Amenity auf dem Kissen.",
      "Abonnementmodell mit hoher Retentionsrate dank täglicher Verwendung.",
    ],
    targetGroup: "35–65 · Premium-Segment",
    channel: "DTC + Luxushotels + Longevity-Kliniken",
    pricePerMonth: "CHF 60–90",
    developmentTime: "Sofort verfügbar",
    stufe: "Stufe 1 · sofort",
    format: "Kapsel oder Getränk",
  },
  {
    slug: "brain-age",
    number: "02",
    name: "Brain Age",
    category: "Neurale Langlebigkeit",
    tagline:
      "Strukturelle Gehirngesundheit in den kommenden zwanzig Jahren – kein kurzfristiger Fokus.",
    pitch:
      "Dein Gehirn altert schneller als dein Körper. Wir verlangsamen das.",
    short:
      "Lion's Mane, Magnesium L-Threonat und Lithium Orotat für Neurogenese, synaptische Dichte und Demenz-Prävention.",
    marketGap:
      "Mehr als 55 Millionen Menschen weltweit leben mit einer Form von Demenz. Die Angst vor kognitivem Verfall ist als grösste Gesundheitsangst von Menschen über 45 dokumentiert. Kein bestehendes Produkt adressiert diese Angst mit wissenschaftlicher Autorität.",
    description:
      "Der Markt für Gehirn-Supplemente ist enorm und gleichzeitig eine Innovationswüste. Bestehende Lösungen sind Koffein, B-Vitamine und symbolische Dosen bekannter Pflanzenextrakte. Was wirklich fehlt, ist ein ernsthaftes Protokoll zur Prävention neurodegenerativer Veränderungen – eine Antwort auf die tiefe Angst der Konsumenten vor Alzheimer und kognitivem Verfall.",
    ingredients: [
      { name: "Lion's Mane", dose: "1500 mg", function: "NGF-Produktion, Neurogenese" },
      { name: "Magnesium L-Threonat", dose: "1500 mg", function: "Die einzige Magnesiumform, die ins Gehirn gelangt" },
      { name: "Phosphatidylserin", dose: "300 mg", function: "Klinisch bestätigt für das Gedächtnis, FDA-anerkannt" },
      { name: "Bacopa Monnieri", dose: "300 mg", function: "Langzeitgedächtnis, neuroprotektiv" },
      { name: "PQQ", dose: "20 mg", function: "Mitochondriale Biogenese im Gehirngewebe" },
      { name: "Lithium Orotat", dose: "5 mg", function: "Neuroprotektiv, BDNF-Verstärker (niedrige Dosis)" },
      { name: "DHA aus Algenöl", dose: "1000 mg", function: "Strukturfett des Gehirns" },
      { name: "Uridin-Monophosphat", dose: "250 mg", function: "Wachstum und Dichte der Synapsen" },
    ],
    positioning: "„Dein Gehirn altert schneller als dein Körper. Wir verlangsamen das.“",
    strategicNotes: [
      "Lithium Orotat in einem Konsumentenprodukt – kein Konkurrent wagt das.",
      "B2B-Kanal: Neurologen, Anti-Aging-Kliniken, Gedächtniskliniken.",
      "Ärztliche Empfehlung eliminiert die Preisempfindlichkeit.",
    ],
    targetGroup: "45–70 + hochfunktionale 30-Jährige",
    channel: "Ärzte + DTC + Neurologie",
    pricePerMonth: "CHF 80–110",
    developmentTime: "Sofort verfügbar",
    stufe: "Stufe 1 · sofort",
  },
  {
    slug: "resilience",
    number: "03",
    name: "Resilience",
    category: "Stress · Adaptogen",
    tagline:
      "Für eine Burnout-Generation – die wissenschaftliche Verknüpfung von chronischem Stress und beschleunigtem biologischem Altern.",
    pitch: "Du stehst unter Druck. Werde stärker dadurch.",
    short:
      "Ashwagandha KSM-66, Rhodiola und NMN gegen Cortisol-Schäden – das erste Produkt, das Stress explizit mit Alterung verknüpft.",
    marketGap:
      "Die Ausgaben für Corporate Wellness in Europa übersteigen jährlich CHF 1,8 Milliarden. Das meiste fliesst in Fitnessstudio-Mitgliedschaften und Meditations-Apps. Ein direktes nutrazeutisches Produkt für den Corporate-Markt existiert noch nicht.",
    description:
      "Vierzig Prozent der Generation Z stehen chronisch unter Stress. Chronischer Stress ist einer der stärksten Beschleuniger des biologischen Alterns: Er verbraucht NAD⁺, zerstört Mitochondrien, erhöht Cortisol und beschleunigt messbar die epigenetische Alterung. Kein Produkt verbindet Stress und Langlebigkeit in seiner Positionierung. Der Corporate-Wellness-Sektor – milliardenschwer – funktioniert ohne ein wirklich wirksames Produkt.",
    ingredients: [
      { name: "Ashwagandha KSM-66", dose: "600 mg", function: "Cortisolreduktion um 28%" },
      { name: "Rhodiola Rosea", dose: "400 mg", function: "Mentale Ausdauer, Adaptogen" },
      { name: "NMN", dose: "300 mg", function: "Wiederherstellung der NAD⁺-Reserven" },
      { name: "Schisandra chinensis", dose: "500 mg", function: "Regulation der HPA-Achse" },
      { name: "L-Theanin", dose: "200 mg", function: "Ruhe ohne Schläfrigkeit" },
      { name: "Reishi", dose: "500 mg", function: "Parasympathisches Nervensystem" },
      { name: "Pantothensäure", dose: "300 mg", function: "Unterstützung der Nebennieren" },
    ],
    positioning: "„Du stehst unter Druck. Werde stärker dadurch.“ Ohne Wellness-Klischees.",
    strategicNotes: [
      "B2B-Goldkanal: Corporate-Einkauf – Sachets mit Firmenlogo.",
      "HR-Abteilungen zahlen CHF 30–50 pro Mitarbeiter – ohne Preisempfindlichkeit.",
      "Das erste Produkt, das chronischen Stress explizit mit beschleunigtem Altern verknüpft.",
    ],
    targetGroup: "25–45 · Corporate · Gen Z / Millennials",
    channel: "Corporate HR + DTC",
    pricePerMonth: "CHF 40–70",
    developmentTime: "Sofort verfügbar",
    stufe: "Stufe 1 · sofort",
  },
  {
    slug: "glp1-armor",
    number: "04",
    name: "GLP-1 Armor",
    category: "Medikamenten-Begleitung",
    tagline:
      "Das einzige Supplement weltweit, das spezifisch für Anwender von GLP-1-Medikamenten entwickelt wurde.",
    pitch: "Du nimmst GLP-1. Dein Körper braucht das.",
    short:
      "Kreatin, EAA, Urolithin A und Mikronährstoffe gegen Muskelverlust und Nährstoffdefizite unter GLP-1-Medikation.",
    marketGap:
      "Der globale Markt für GLP-1-Medikamente wird bis 2030 über 150 Milliarden Dollar übersteigen. Begleitende nutrazeutische Produkte sind ein praktisch nicht existierender Markt. Das ist keine Nische – das ist eine Struktur, die auf den ersten ernsthaften Akteur wartet.",
    description:
      "Zig Millionen Menschen weltweit nehmen GLP-1-Medikamente (Ozempic, Wegovy, Mounjaro) zur Gewichtsreduktion ein. Was Pharmaunternehmen nicht adressieren: Anwender verlieren bis zu 30% ihrer Muskelmasse, leiden unter schweren Nährstoffdefiziten durch drastisch reduzierte Nahrungsaufnahme und erleben chronische Müdigkeit, Haarausfall und einen Rückgang der Knochendichte. Kein bestehendes Produkt ist klinisch spezifisch an GLP-1-Anwendern getestet.",
    ingredients: [
      { name: "Kreatin-Monohydrat", dose: "5000 mg", function: "Erhalt der Muskelmasse" },
      { name: "EAA + Leucin", dose: "6000 mg", function: "Verhinderung von Katabolismus" },
      { name: "Urolithin A", dose: "500 mg", function: "Mitochondriale Funktion + Muskelausdauer" },
      { name: "Kollagenpeptide", dose: "10 g", function: "Integrität von Bindegewebe, Haut und Knochen" },
      { name: "B12, Folat, Fe, Zn", dose: "Komplex", function: "Nährstoffdefizite bei GLP-1-Anwendern" },
      { name: "Vitamin D3 + K2", dose: "Hochdosiert", function: "Knochengesundheit" },
      { name: "Magnesium-Glycinat", dose: "400 mg", function: "Muskelkrämpfe sind unter GLP-1 häufig" },
    ],
    positioning: "Kristallklare Positionierung: „Du nimmst GLP-1. Dein Körper braucht das.“",
    strategicNotes: [
      "B2B-Distribution: Endokrinologen, Allgemeinmediziner, Kliniken zur Gewichtsreduktion.",
      "Ärztliche Empfehlung eliminiert den Preiswiderstand.",
      "Weltweit der Erste – struktureller Vorteil durch Kategoriebesetzung.",
    ],
    targetGroup: "GLP-1-Anwender · Ärztliche Empfehlung",
    channel: "Ärzte + Kliniken zur Gewichtsreduktion + Apotheken",
    pricePerMonth: "CHF 100–140",
    developmentTime: "3–4 Monate",
    stufe: "Stufe 2 · 3–4 Monate",
  },
  {
    slug: "senolytic-cleanse",
    number: "05",
    name: "Senolytic Cleanse",
    category: "Senolytika · Quartals-Reset",
    tagline:
      "Vierteljährlicher Reset der Zombie-Zellen – Langlebigkeit im Quartalsrhythmus, nicht in der täglichen Routine.",
    pitch: "Dein Körper braucht vier Resets pro Jahr. Nicht mehr.",
    short:
      "Fisetin und Quercetin in pulsierender Hochdosis – das einzige Senolytikum nach klinischem Studienprotokoll, nicht nach Abo-Logik.",
    marketGap:
      "Die Marktlogik der gesamten Supplement-Industrie ist der tägliche Konsum. Niemand bietet Senolytika im klinischen Modell pulsierender Dosierung an. Diese kontraintuitive Position wird unsere stärkste Marketing-Geschichte sein.",
    description:
      "Seneszente Zellen – sogenannte „Zombie-Zellen“ – sind Zellen, die aufgehört haben, sich zu teilen, aber sich weigern zu sterben. Sie sondern unaufhörlich entzündliche Signale ab (SASP-Cocktail), die das Altern jeder umliegenden Zelle beschleunigen. Senolytika werden nicht täglich eingenommen – sie werden in kurzen, hochdosierten Impulsen verabreicht, wie klinische Studien zeigen. Kein Unternehmen tut das, denn tägliche Einnahme bedeutet mehr Umsatz. Wir bauen für die Biologie, nicht für die Psychologie des Abonnements.",
    ingredients: [
      { name: "Fisetin", dose: "1000 mg", function: "Stärkstes natürliches Senolytikum" },
      { name: "Quercetin", dose: "1000 mg", function: "Synergie mit Fisetin, verstärkt die Wirkung" },
      { name: "Piperin", dose: "10 mg", function: "Bioverfügbarkeit × 20" },
      { name: "Bromelain", dose: "500 mg", function: "Entzündungshemmender Absorptions-Cofaktor" },
      { name: "EGCG", dose: "400 mg", function: "Modulation des Seneszenz-Pfades" },
      { name: "FMD-Protokoll", dose: "Inkl.", function: "Leitfaden für die Fasting-Mimicking-Diät" },
    ],
    positioning: "„Dein Körper braucht vier Resets pro Jahr. Nicht mehr.“",
    strategicNotes: [
      "Luxuriöse saisonale Box, quartalsweise geliefert – biologisches Ritual.",
      "Höchste Zahlungsbereitschaft aufgrund von Seltenheit und rituellem Charakter.",
      "Premium-Verpackung: Holzbox, Protokoll-Tagebuch, Fasten-Leitfaden.",
    ],
    targetGroup: "35–65 · Biohacker · Longevity-Enthusiasten",
    channel: "DTC + Longevity-Kliniken",
    pricePerMonth: "CHF 180–280 / Box",
    developmentTime: "3–4 Monate",
    stufe: "Stufe 2 · 3–4 Monate",
    format: "Quartals-Box · 3-Tages-Puls · 4× jährlich",
  },
  {
    slug: "spermidine-ritual",
    number: "06",
    name: "Spermidine Ritual",
    category: "Autophagie · Ritual",
    tagline:
      "Das heisseste Longevity-Molekül der Wissenschaft – endlich in stabiler Getränkeform.",
    pitch: "Spermidin in flüssiger Form, klinisch dosiert. Technisch bisher ungelöst.",
    short:
      "Spermidin liposomal in einer 30-ml-Glasampulle als luxuriöses Morgenritual – kombiniert mit NMN, Urolithin A und Resveratrol.",
    marketGap:
      "Spermidin in Pulver- und Kapselform existiert, jedoch in Dosierungen, die weit unter den klinisch relevanten liegen. Eine stabile flüssige Formulierung mit einer wahrnehmbaren Dosis ist ein technisch ungelöstes Problem – das für uns die Eintrittsbarriere darstellt.",
    description:
      "Spermidin ist eines der meisterforschten Longevity-Moleküle der modernen Wissenschaft. Es aktiviert die Autophagie – den zellulären Selbstreinigungsprozess, der beschädigte Proteine und Organellen entfernt. Epidemiologische Daten aus Japan zeigen, dass Bevölkerungen mit hoher Spermidin-Zufuhr messbar länger leben. Das Problem ist technischer Natur: Eine stabile Supplementierung in klinisch relevanten Mengen in flüssiger Form ist äusserst schwierig. Oxidation, pH-Empfindlichkeit und Komplexität der Formulierung haben alle gestoppt. Unser Produktentwickler löst dies.",
    ingredients: [
      { name: "Spermidin", dose: "5–10 mg", function: "Aus Weizenkeim-Extrakt" },
      { name: "NMN liposomal", dose: "200 mg", function: "Stabil in flüssiger Matrix" },
      { name: "Urolithin A", dose: "250 mg", function: "Mitophagie-Synergist" },
      { name: "Hyaluronsäure", dose: "100 mg", function: "Zelluläre Feuchtigkeit" },
      { name: "Resveratrol liposomal", dose: "50 mg", function: "Sirtuin-Aktivator" },
      { name: "Elektrolyte", dose: "Komplettes Profil", function: "Mineralhaushalt" },
    ],
    positioning: "Elegante 30-ml-Glasampulle – luxuriöses Morgenritual.",
    strategicNotes: [
      "B2B: Longevity-Spas und 5-Sterne-Hotels als Signature Morning Ritual.",
      "Premium-Verpackung signalisiert Qualität, bevor das Produkt konsumiert wird.",
      "Hohe technische Barriere = struktureller Wettbewerbsvorteil.",
    ],
    targetGroup: "Premium · 35–70 · Longevity-bewusst",
    channel: "DTC-Abonnement + Spas + Luxushotels",
    pricePerMonth: "CHF 120–180",
    developmentTime: "4–6 Monate",
    stufe: "Stufe 2 · 4–6 Monate",
    format: "30-ml-Glasampulle",
  },
];

export type ProduktType = (typeof produkte)[number];
