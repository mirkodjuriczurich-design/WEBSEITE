export const site = {
  name: "Swiss Longevity Labs AG",
  shortName: "Swiss Longevity Labs",
  acronym: "SLL",
  domain: "swisslongevitylabs.com",
  url: "https://swisslongevitylabs.com",
  description:
    "Schweizer Full-Service-Partner für Longevity – Private Label, White Label, Full Service & R&D, Produktentwicklung, Regulatorik und Distribution unter einem Schweizer Dach.",
  positioning:
    "Schweizer Präzision für die Wissenschaft des längeren Lebens.",
  locale: "de-CH",
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Expertise", href: "/expertise" },
  { label: "Produkte", href: "/#produkte" },
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
    label: "Services",
    href: "/services",
    intro: "Sechs Säulen – einzeln oder integriert buchbar.",
    items: [
      { label: "Private Label", href: "/services/private-label", description: "Eure Marke, unsere Rezeptur." },
      { label: "White Label", href: "/services/white-label", description: "Unsere Rezeptur, eure Marke." },
      { label: "Full Service & R&D", href: "/services/full-service-rd", description: "End-to-End unter einem Dach." },
      { label: "Produktentwicklung", href: "/services/produktentwicklung", description: "Rezeptur, Galenik, Stabilität." },
      { label: "Regulatorik & Compliance", href: "/services/regulatorik", description: "Swissmedic, EFSA, FDA, EU." },
      { label: "Distribution", href: "/services/distribution", description: "Logistik weltweit, effizient & sicher." },
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
    href: "/#produkte",
    intro: "Drei Produkte unter Schweizer Eigenmarke.",
    items: [
      { label: "Deep Sleep", href: "/#produkte", description: "Schlaf · Anti-Aging" },
      { label: "ResilienceRX21", href: "/#produkte", description: "Stress · Adaptogen" },
      { label: "RenewXA", href: "/#produkte", description: "Autophagie · Ritual" },
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
    slug: "deep-sleep",
    number: "01",
    name: "Deep Sleep",
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
    slug: "resiliencerx21",
    number: "02",
    name: "ResilienceRX21",
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
    slug: "renewxa",
    number: "03",
    name: "RenewXA",
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
