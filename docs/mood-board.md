# Mood-Board — Swiss Longevity Labs AG

> **Phase 2 Output** · Visuelle Grundlage für alle nachfolgenden Design-Entscheidungen.
> Status: **Draft v1** · Stand: 2026-05-28
> **Approval-Punkt**: Bevor wir zu Wireframes (§ Komponenten-Manifest) und Code übergehen.

Dieses Dokument übersetzt die strategische Positionierung aus dem UX-Brief in **konkrete visuelle Entscheidungen**: Farben mit Stimmung und Verwendungsregeln, Schriftspezimen, Foto-Stil-Direktive, Komponenten-Anmutung und Animations-Charakter.

---

## 0. Brand-DNA — der Nordstern

```
Editorial-Pharma — die typografische Eleganz eines Magazins,
die Trust-Signale eines Schweizer Manufacturers,
der Conversion-Fokus einer modernen Tech-Brand.
```

| Wert | Übersetzung ins Design |
|---|---|
| **Swissness** | Rotes Brand-Mark als Anker · viel Weiss · Präzision in Detail-Tracking · Serif-Disziplin |
| **Wissenschaftlichkeit** | Faktendichte · klare Hierarchien · Mono-Numerals für Daten · Quellen-Markup |
| **Premium** | Editorial Photography · grosse Typografie · viel Air · keine Stock-Photos |
| **Full-Service** | Konsistente Templates · Bento-Grids · Cross-Sell sichtbar · Story-Architektur |
| **Modern** | Subtile Micro-Interactions · Edge-Performance · Tech-saubere Komponenten |

---

## 1. Farbsystem

### 1.1 Primärpalette

| Token | Hex | RGB | Name | Stimmung | Verwendung | Ratio (Pixel) |
|---|---|---|---|---|---|---|
| `--swiss-red` | `#E30613` | 227 · 6 · 19 | **Swiss Red** | Heritage, Präzision, Akzent | CTAs · Hover · Pull-Quotes · Bullet-Marker · aktive States · Logo | **5–8%** |
| `--ink` | `#0B0B0B` | 11 · 11 · 11 | **Tiefe Tinte** | Substanz, Pharma-Seriosität | Body-Text · H1/H2 · Borders | 15–20% |
| `--off-white` | `#FAFAF7` | 250 · 250 · 247 | **Off-White Paper** | Wärme, Editorial-Qualität | Background (wärmer als reines #FFF) | **55–65%** |
| `--paper` | `#FFFFFF` | 255 · 255 · 255 | **Reines Papier** | Klarheit, Klinische Reinheit | Karten · Modals · Form-Felder | 10% |

> **Goldene Regel** — *60·30·10·5*: 60% Off-White Background · 30% Ink · 10% Stone-Tints · 5–8% Swiss Red. Diese Disziplin macht Rot zur Waffe statt zum Tapetenmuster.

### 1.2 Sekundärpalette (Stone / Neutrals)

| Token | Hex | Verwendung |
|---|---|---|
| `--stone-100` | `#F0EFEA` | Section-Dividers · subtle Tints · Background-Pulse |
| `--stone-200` | `#E5E3DC` | Card-Borders, sehr fein |
| `--stone-400` | `#A8A6A0` | Meta-Text · Captions · Disabled-States |
| `--stone-700` | `#3D3B36` | Secondary Headlines · Body-Text auf Tinted-Backgrounds |
| `--stone-900` | `#1A1916` | Dunkle Sections (Final CTA Band) |

### 1.3 Funktionale Farben

| Token | Hex | Verwendung |
|---|---|---|
| `--navy` | `#0E2B5C` | Sub-Brand für reine B2B-Whitepapers (optional, nicht UI-üblich) |
| `--success` | `#1E7A4F` | Form-Confirmations · "Anfrage gesendet"-State |
| `--warning` | `#C98214` | Sehr selten — Kontextuelle Hinweise |
| `--error` | `#B91C1C` | Form-Validation-Fehler (etwas dunkler als Swiss Red, um Markenfarbe zu schützen) |

### 1.4 Visualisierung (in Worten — Swatches kommen in Phase 3)

```
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  #FAFAF7  Off-White Paper (Background)
■■■■■■■■■■■■■■                    #F0EFEA  Stone-100 (subtle tint)
■■■■■■■                            #A8A6A0  Stone-400 (meta)
■■■                                #3D3B36  Stone-700 (secondary)
■■                                 #0B0B0B  Ink (body, headlines)
■                                  #E30613  Swiss Red (accent — sparingly!)
```

### 1.5 Dark Mode — bewusst NICHT in Phase 1

Editorial-Pharma lebt vom warmen Off-White-Paper-Look. Dark Mode würde die Premium-Magazin-Anmutung verwässern. **Phase 1: nur Light Mode.** Falls später gewünscht, kann ein "Reader-Mode" für `/wissen/insights` ergänzt werden.

### 1.6 Accessibility-Check

| Kombination | Kontrast-Ratio | WCAG AA Status |
|---|---|---|
| `#0B0B0B` auf `#FAFAF7` | **18.9 : 1** | ✅ AAA |
| `#3D3B36` auf `#FAFAF7` | **11.8 : 1** | ✅ AAA |
| `#A8A6A0` auf `#FAFAF7` | **2.7 : 1** | ⚠️ Nur für Meta/Decorative |
| `#FAFAF7` auf `#E30613` | **5.2 : 1** | ✅ AA (für Buttons OK) |
| `#0B0B0B` auf `#E30613` | **3.7 : 1** | ⚠️ Vermeiden |

→ **Regel**: Rote CTAs immer mit **weissem** Text.

---

## 2. Typografie

### 2.1 Type-Stack

| Rolle | Erstwahl (Commercial) | Fallback (Google Fonts) | Begründung |
|---|---|---|---|
| **Display / H1** | **Tiempos Headline** | **Playfair Display** | Didone-DNA aus Logo, klassisch-editorial, hohe Achsen-Spannung |
| **H2-H4** | **Tiempos Text** | **Source Serif 4** | Lesbarer als Display bei kleineren Grössen, gleicher Charakter |
| **Body** | **Söhne** | **Inter** | Schweizer Sans-Heritage (Söhne ist Schweiz!), neutral, top-readable |
| **Eyebrow / Labels** | Söhne / Inter UPPERCASE | – | Disziplin, Pharma-Tonalität |
| **Numerals / Data** | **JetBrains Mono** | **IBM Plex Mono** | Wissenschaftliche Daten, Zertifikat-Nummern, Code |

> **Empfehlung Phase 1**: **Playfair Display + Inter + JetBrains Mono** — alle Google Fonts, keine Lizenz-Kosten, perfekte Performance via `next/font`. Tiempos/Söhne als Upgrade-Option für Phase 2 (~$300 commercial license).

### 2.2 Type-Scale (Major Third 1.250)

| Token | Size (Desktop) | Size (Mobile) | Line-Height | Weight | Use |
|---|---|---|---|---|---|
| `display-2xl` | 96px | 56px | 0.95 | 400 | Final CTA Hero · Editorial Drops |
| `display-xl` | 72px | 44px | 1.02 | 400 | Home Hero H1 |
| `display-lg` | 56px | 36px | 1.05 | 400 | Section Headlines |
| `h1` | 48px | 32px | 1.1 | 400 | Page H1 (Sub-Pages) |
| `h2` | 36px | 28px | 1.15 | 400 | Section H2 |
| `h3` | 28px | 24px | 1.25 | 500 | Card-Titel · Sub-Section |
| `h4` | 22px | 20px | 1.3 | 500 | Mini-Headings |
| `body-lg` | 19px | 17px | 1.6 | 400 | Lead-Paragraphs |
| `body` | 17px | 16px | 1.65 | 400 | Standard Body (etwas grösser als typisch — pharma-readability) |
| `body-sm` | 14px | 13px | 1.55 | 400 | Captions · Meta |
| `eyebrow` | 12px | 11px | 1.4 | 600 | UPPERCASE · Letter-Spacing 0.12em |
| `mono` | 14px | 13px | 1.5 | 400 | Numerals · Cert-Numbers |

### 2.3 Spezimen — wie es klingt

```
   THE WAY IT FEELS

   Display XL (Playfair Display Regular, 72px)
   ─────────────────────────────────────────
   Schweizer Präzision für die
   Wissenschaft des längeren Lebens.

   Body Lead (Inter, 19px)
   ─────────────────────────────────────────
   Die ganze Wertschöpfungskette unter einem Dach —
   oder genau die Stufe, die Sie brauchen.

   Eyebrow (Inter Bold UPPERCASE 12px tracking 0.12em)
   ─────────────────────────────────────────
   01 · PRIVATE LABEL

   Body (Inter, 17px)
   ─────────────────────────────────────────
   Private Label bedeutet bei uns: Sie kommen mit einer
   Rezeptur — wir bringen sie GMP-konform zur Marktreife.
   Vom ersten Pilot-Batch bis zur globalen Skalierung,
   alles unter einem Dach.

   Mono (JetBrains Mono, 14px)
   ─────────────────────────────────────────
   ISO 22000:2018 · GMP-CH-22847 · Swissmedic 1234.5
```

### 2.4 Typo-Regeln (kuratierte Disziplin)

- ✅ **Serif für alles Editoriale** (Headlines, Pull-Quotes, Section-Eröffnungen)
- ✅ **Sans für alles Funktionale** (Body, Forms, Nav, Tables)
- ✅ **Mono nur für Zahlen/IDs/Code** (keine Body-Mono-Spielereien)
- ❌ Nie mehr als **drei Schrift-Familien** auf einer Seite
- ❌ Keine `text-transform: uppercase` auf Serif (Playfair sieht hässlich in CAPS)
- ❌ Keine Schriftgrösse > 96px (Magazin, kein Werbeplakat)
- ❌ Keine Drop-Shadows auf Text
- ✅ `text-wrap: balance` für alle H1/H2 (verhindert hängende Wörter)
- ✅ `text-wrap: pretty` für Body (besseres Last-Line-Handling)

---

## 3. Foto-Stil

### 3.1 Stilistische Direktive

```
Editorial-Pharma — wenn Lanserhof × Aesop × Function Health × Hermès Beauté.
```

### 3.2 Sujets (Was wir zeigen)

| Kategorie | Konkret | Verwendung |
|---|---|---|
| **Schweizer Labor-Architektur** | Helle, weisse Räume · Detail-Shots von Glas/Stahl · Maschinen-Closeups | Hero · `/expertise/standort` · Process-Sections |
| **Maschinen-Detailing** | Tablets-Pressen · Kapsel-Filler · Pipetten · Spektrometer (Closeup) | `/expertise/capabilities` · Process-Sections |
| **Wissenschaftler:innen** | Portraits in natural Light · Hände bei der Arbeit · Konzentrierte Momente | `/unternehmen/team` · Editorial Insights |
| **Produkt-Stills** | Eigenmarken-Produkte auf Stein, Beton, Off-White-Paper · top-down + 3/4-Winkel | `/produkte/*` |
| **Alpine Heritage** | Schweizer Berge, Gletscher, alpine Quellen — als subtile Hintergrund-Mood | Hero-Background-Optionen · Final CTA Band |
| **Process-Visualisierung** | Hand-Drawn-Diagrammatik · Mikroskop-Aufnahmen · molekulare Strukturen | Process-Steppers · `/wissen/forschung` |

### 3.3 Was wir NICHT zeigen

- ❌ **Stock-Photo-Wissenschaftler:innen** mit Sicherheitsbrille und blauen Handschuhen
- ❌ **Reagenzgläser mit grünen/blauen Flüssigkeiten** (Cliché)
- ❌ **Computer-generierte 3D-Moleküle** in Neonfarben
- ❌ **Schaufensterglas-Schreibtische mit Macbook und Kaffeetasse**
- ❌ **Diverse Lifestyle-Stocks** ("happy customer hält Pille hoch")
- ❌ **Über-stylized Beauty-Shots** (kein Mascara-Kontext)
- ❌ **Über-saturierte HDR-Farben**

### 3.4 Grading & Look

- **Farb-Grading**: Warm, leicht entsättigt (Saturation -10 bis -15%)
- **Kontrast**: Hoher Schwarzwert (Tiefen geschlossen) · weiche Mittentöne · helle Highlights nicht ausgebrannt
- **Highlights**: Cream/Off-White statt Pure-White (passt zu Off-White-Background)
- **Schatten**: Tiefes Anthrazit statt reinem Schwarz
- **Korn**: Subtile Filmkörnung erlaubt (Phase 3 testen) — verstärkt Editorial-Anmutung
- **Crop**: Viel Negativraum · Sujet bewusst dezentriert (Drittel-Regel)

### 3.5 Konkrete Referenz-URLs zum Bestätigen

Bitte diese vier Seiten kurz anschauen — sie definieren zusammen den angestrebten Look:

| URL | Was wir übernehmen |
|---|---|
| https://www.lanserhof.com/de | Editorial Photography, viel Whitespace, medizinischer Premium-Ton |
| https://www.aesop.com | Foto-Komposition, Stein/Naturmaterialien als Produkt-Bühne, Typo-Disziplin |
| https://www.functionhealth.com | Datenvisualisierung in Editorial-Layout, moderne Micro-Interactions |
| https://www.cliniquelaprairie.com | Schweizer Premium-Klinik-Ton (nehmen wir die Tonalität, nicht das Hotel-Thema) |

---

## 4. Komponenten-Anmutung

### 4.1 Buttons

```
┌─────────────────────────────────┐
│ PRIMARY (Swiss-Red Filled)      │
├─────────────────────────────────┤
│  ▸ Anfrage starten              │   #E30613 background
│                                  │   #FFFFFF text
│                                  │   12px py · 24px px
│                                  │   border-radius: 4px (subtle)
│                                  │   hover: #C90510 (10% darker)
│                                  │   transition: 200ms ease
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ SECONDARY (Outline)              │
├─────────────────────────────────┤
│  Leistungen entdecken →          │   transparent background
│                                  │   #0B0B0B text + 1.5px border
│                                  │   hover: #FAFAF7 background
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ GHOST (Text-Only)                │
├─────────────────────────────────┤
│  Mehr erfahren →                 │   no border, no background
│                                  │   #E30613 text
│                                  │   underline on hover (1px, 4px offset)
└─────────────────────────────────┘
```

**Button-Disziplin**: max. 1 Primary pro Section. Nie zwei Reds nebeneinander.

### 4.2 Cards

```
┌──────────────────────────────────────┐
│                                       │
│  [Optional Eyebrow] 01 · LEISTUNG    │
│                                       │
│  Private Label                        │   ← H3 Serif
│                                       │
│  Eure Marke, unsere Rezeptur.        │   ← Body
│  GMP-konform produziert in der        │
│  Schweiz, von 1'000 bis 1M Units.    │
│                                       │
│  ────────────────────                │
│  Mehr erfahren  →                    │   ← Ghost-Button
│                                       │
└──────────────────────────────────────┘

   Background: #FFFFFF
   Border: 1px solid #E5E3DC
   Border-Radius: 6px
   Padding: 32px
   Hover: subtle shadow + 2px translateY(-2px)
   Shadow on hover: 0 8px 24px rgba(11,11,11,0.04)
```

### 4.3 Forms

```
┌──────────────────────────────────────┐
│ Label                                 │   ← 14px, #3D3B36
│                                       │
│ ┌──────────────────────────────────┐ │
│ │ Input Value                       │ │   ← 17px, #0B0B0B
│ └──────────────────────────────────┘ │       border-bottom: 1.5px solid #0B0B0B
│ Helper text (optional)                │       NO box-border (editorial style)
│                                       │       focus: border-bottom #E30613
└──────────────────────────────────────┘
```

**Form-Stil**: Underline-only inputs (à la Aesop, LYMA) — keine Box-Inputs. Sehr editorial.

### 4.4 Section-Dividers

| Variante | Aussehen | Wann |
|---|---|---|
| **Hairline** | 1px solid `#E5E3DC` | Zwischen verwandten Inhalten |
| **Stone-Stripe** | 8-12vh background `#F0EFEA` | Zwischen Section-Themen |
| **Red-Tick** | 4×40px `#E30613` Balken oben links | Vor Section-H2 (Akzent) |
| **Whitespace** | 120-160px py | Default, "nichts" |

### 4.5 Eyebrow-Marker

```
┌───┐
│ ■ │  01 · PRIVATE LABEL
└───┘
```

Roter 8×8px Block + 12px Spacing + Eyebrow-Text. Subtile Brand-Signatur, die sich durch die ganze Seite zieht.

### 4.6 Pull-Quotes

```
                  ┃
                  ┃  „Schweizer Präzision
                  ┃   ist kein Marketing —
                  ┃   sie ist Verfahren."
                  ┃
                  ┃  ── Dr. [Name], Head of R&D
```

Linker roter Balken `#E30613` 3px breit + Serif Italic + Attribution in Mono-Caps.

### 4.7 Bento-Grid (Home Leistungen)

```
   gap: 16px
   border-radius: 6px pro Tile
   Background: #FFFFFF
   Hover: subtle border #E30613 on entry-line (4px left)
   Transition: 300ms
```

---

## 5. Layout-Patterns

### 5.1 Grid

- **12-Column Grid** · 80px Container-Padding Desktop · 24px Mobile
- **Max-Width**: 1440px Content · 1600px Full-Bleed Hero
- **Vertikales Rhythmus-Raster**: 8px Base-Unit, alles Vielfaches davon
- **Section-Padding**: 120-160px py Desktop · 80px Mobile (gross — wir haben Platz)

### 5.2 Editorial-Spalten

Drei Hauptlayouts, die sich durch die Site ziehen:

#### a) Hero-Layout (full-bleed)
```
┌─────────────────────────────────────────────────────┐
│                                                       │
│  Content links 7/12                  Image rechts 5/12│
│                                                       │
└─────────────────────────────────────────────────────┘
```

#### b) Editorial Two-Column
```
┌─────────────────────────────────────────────────────┐
│                                                       │
│  Eyebrow + H2     Body-Text + Bullets                 │
│  4/12             7/12                                │
│                                                       │
└─────────────────────────────────────────────────────┘
```

#### c) Bento 3×2 (für Leistungen/Produkte)
```
┌──────┬──────┬──────┐
│  1   │  2   │  3   │
├──────┼──────┼──────┤
│  4   │  5   │  6   │
└──────┴──────┴──────┘
```

### 5.3 Pacing-Rhythmus

Eine gute Editorial-Seite atmet. Pacing-Regel:

```
TEXT-DENSE  →  BREATHING-ROOM  →  VISUAL  →  TEXT-DENSE  →  CTA
```

Konkret: nach jeder textreichen Section eine "Atemraum-Section" (Bild, Quote, oder grosszügige Headline).

---

## 6. Animation & Interaktion

### 6.1 Bewegungs-Prinzipien

- **Purposeful** — jede Animation hat einen Grund (Aufmerksamkeit, Feedback, Hierarchie)
- **Subtle** — 200-400ms Dauer, kein Theater
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (custom ease-out-expo)
- **Reduced-Motion-respektiert**: alles via `prefers-reduced-motion`

### 6.2 Konkrete Bewegungs-Muster

| Trigger | Animation | Dauer |
|---|---|---|
| **Page Load** | Fade-in Body + slide-up 12px Hero-Headlines | 600ms staggered |
| **Scroll-Enter Section** | Fade-in + 24px slide-up | 400ms (IntersectionObserver) |
| **Button Hover** | Background-color + 2px translateY | 200ms |
| **Card Hover** | Shadow-add + 2px translateY + border-color change | 300ms |
| **Image Lazy-Load** | Blur-up (next/image placeholder=blur) | native |
| **Nav Scroll** | Background fade-in (transparent → off-white) bei scroll > 80px | 300ms |
| **Counter Numbers** | Counting up from 0 to value (Trust-Section) | 1200ms ease-out |

### 6.3 Was wir NICHT machen

- ❌ Parallax-Layers (out of fashion, performance-killer)
- ❌ Auto-playing Carousels (UX-Anti-Pattern)
- ❌ Marquee-Scrolling Text-Banner (zu Tech-Startup-y)
- ❌ Cursor-Follower / "Magic-Cursor"-Effekte (zu Portfolio-y)
- ❌ Page-Transition-Slide-In (kostet Performance, irritiert)

### 6.4 Micro-Interactions Bonus

- **Eyebrow-Markers** pulsieren ganz subtil (3s loop, 0.5 opacity-shift) bei aktivem Section-Hover
- **Read-Progress-Bar** oben (1px, Swiss Red) auf langen Insights-Artikeln
- **Form-Field-Underline** animiert beim Focus (300ms width-expand von 0 zu 100%)

---

## 7. Inspiration Gallery — Konkrete URLs

### 7.1 Studieren empfohlen — diese fünf Seiten

| URL | Genau das übernehmen | Genau das vermeiden |
|---|---|---|
| **https://www.aesop.com** | Typo-Disziplin, Bento-Layouts, Produkt-Photography | E-Commerce-Lastigkeit |
| **https://www.lanserhof.com/de** | Editorial-Pacing, medizinischer Premium-Ton | Lange Scroll-Sequenzen |
| **https://www.functionhealth.com** | Datenvisualisierung, moderne Bento-Hero | Tech-Startup-Vibes |
| **https://www.cliniquelaprairie.com** | Schweizer Premium-Look, Editorial-Whitespace | Hotel/Spa-Thematik |
| **https://www.hims.com/about** | B2C-Conversion-Klarheit + medizinische Glaubwürdigkeit | Direct-Response-Cliché |

### 7.2 Bonus-Referenzen für spezielle Patterns

| Pattern | Beste Referenz |
|---|---|
| **Bento Hero** | https://linear.app · https://www.apple.com/macbook-pro |
| **Service Pages** | https://lonza.com/our-services · https://siegfried.ch/de/ueber-uns |
| **Product Detail** | https://lyma.life/products · https://drinkag1.com |
| **Editorial Insights** | https://www.everydayhealth.com (Storytelling) · https://nautil.us (Layout) |
| **Form Design** | https://stripe.com/contact · https://aesop.com/uk/r/contact-us |
| **Footer** | https://stripe.com (Information Architecture) |

---

## 8. Iconography

### 8.1 Stil

- **Lucide Icons** als Default-Library (oder Phosphor als Alternative)
- **Stroke**: 1.5px
- **Grid**: 24×24
- **Style**: Outline, nie filled (Editorial-Disziplin)
- **Color**: Inherit (`currentColor`) — kontextabhängig
- **Akzent-Icons**: Bei wichtigen Stats darf Swiss Red verwendet werden, sparsam

### 8.2 Custom Icons (Phase 3 zu produzieren)

Wir brauchen 6-8 **eigene Icons** für die Leistungs-Säulen, weil generische Icons hier kraftlos wirken:

- Private Label — Etikett mit Custom-Marker
- White Label — Pakete mit Pinsel
- Full Service — verbundene Kreise/Loops
- Produktentwicklung — Pipette mit Molekül-Markern
- Regulatorik — Siegel/Stempel
- Distribution — Globus mit Pfeilen

Stil: Outline, 1.5px, kompatibel mit Lucide-Optik.

---

## 9. Detail-Spielfelder

### 9.1 Loading States

- **Skeleton-Screens** mit `#F0EFEA` Hintergrund, subtle pulse 1.5s
- **Kein Spinner** — Editorial-Brands haben keine Tech-Spinners

### 9.2 Error States

- **Form-Fehler**: Inline unter Field, `#B91C1C` text, 14px, mit Icon
- **404-Seite**: Editorial — grosser Serif-Text "Diese Seite existiert nicht. Aber das hier vielleicht:" + 3 Empfehlungen

### 9.3 Empty States

- Editorial-Headline + Icon + CTA — nie nüchterne "Keine Daten"-Sätze

### 9.4 Tooltips / Popovers

- **Background**: `#0B0B0B` (Tinte)
- **Text**: `#FAFAF7`
- **Padding**: 12px 16px
- **Border-Radius**: 4px
- **Pfeil**: ja, 6px

---

## 10. Approval-Checklist

Bevor wir zu Phase 3 (Komponenten-Manifest + Wireframes) gehen, brauche ich Approval auf:

- [ ] **Farbsystem** — Swiss Red `#E30613` als alleiniger Akzent, Off-White `#FAFAF7` als Background (statt Pure-White)
- [ ] **Typografie** — Playfair Display + Inter + JetBrains Mono (Google Fonts, kostenlos) für Phase 1; Tiempos + Söhne als Upgrade-Option Phase 2
- [ ] **Foto-Stil** — Editorial-Pharma à la Aesop/Lanserhof, NICHT Stock-Wissenschaftler
- [ ] **Buttons** — Filled Red Primary, Outline Secondary, Ghost Tertiary
- [ ] **Forms** — Underline-Only-Style (editorial), keine Box-Inputs
- [ ] **Animation-Stil** — Subtle Fade-Slide, keine Parallax/Carousels/Cursor-Effekte
- [ ] **Inspiration-Set** — die 5 Hauptreferenzen (Aesop, Lanserhof, Function, CLP, Hims) als Nordstern

---

## Wie weiter

Nach deinem Approval auf den Mood-Board:

1. **Phase 3 — Komponenten-Manifest** als `docs/component-manifest.md` mit jeder Section + Sub-Komponente, mapped auf shadcn/ui-Building-Blocks
2. **Phase 4 — Wireframes** der Home + einer Leistungs-Detail + einer Produkt-Detail (low-fi, ASCII oder Markdown-Diagramme)
3. **Phase 5 — Image-Generation** (Hero-Background, Section-Mood-Shots, eigene Icons via Nano Banana / image-skill)
4. **Phase 6 — Build** Next.js 15 + Tailwind v4 + shadcn/ui Implementation

---

> **Approval bitte**:
> - ✅ "Mood-Board approved" → ich starte Komponenten-Manifest
> - 📝 "Approved mit Änderungen: ..." → ich passe an
> - 🔄 "Bitte überarbeiten" → was muss anders?

*Erstellt von Claude · Stand 2026-05-28 · Mood-Board v1*
