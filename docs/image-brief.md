# Image Brief — Swiss Longevity Labs

> **Phase 3 Output** · Konkrete Prompts und Spezifikationen für die Bildproduktion.
> Status: **v1** · Stand 2026-05-28

In dieser Cloud-Umgebung sind alle externen AI-Image-APIs (Nano Banana, Midjourney, DALL-E, Pollinations) sowie Stock-Hosts (Unsplash, Pexels) durch die Network-Allowlist gesperrt. Dieser Brief ist so geschrieben, dass du jeden Prompt **direkt in Midjourney, Nano Banana 2 oder DALL-E 3 kopieren** kannst.

Nach der Generation: Bilder als `public/images/[name].avif` oder `.webp` ablegen — die Component-Hooks dazu sind unten gelistet.

---

## Globale Style-Direktive (in jeden Prompt einbauen)

```
editorial photography, warm desaturated palette, off-white background tones (#FAFAF7),
deep blacks not pure black, subtle film grain, magazine-quality composition,
intentional negative space, shot on Hasselblad medium format, natural soft light,
no neon, no over-saturation, no stock-photo cliches, no green or blue lab fluids
```

**Aspect Ratios pro Slot:**
- Hero: 4:5 portrait
- Section visuals: 16:9
- Testimonial portraits: 1:1
- Produkt-Stills: 4:5
- Video-Poster: 16:9

---

## 1. Hero — Schweizer Labor / Heritage

**Wo:** `src/components/sections/Hero.tsx` · rechte Spalte 4:5
**Dateiziel:** `public/images/hero-lab.avif`

**Prompt:**
```
Editorial photograph of a Swiss longevity laboratory interior at golden hour,
white walls and stainless steel, a single Caucasian woman scientist in her early 40s
with calm focused expression looking through laboratory glassware, soft natural
window light from the left, warm desaturated tones, intentional shallow depth of field,
subtle Alps visible through a frosted window in the background, shot on Hasselblad,
editorial magazine style, 4:5 aspect ratio
```

**Alternative (Heritage):**
```
Editorial photograph of pristine Alpine landscape at first light, gentle mist over
a clear glacial stream, soft warm desaturated tones, no human subjects, intentional
negative space in upper third, shot on medium format film, magazine quality, 4:5
```

---

## 2. Production-Video Poster

**Wo:** `src/components/sections/ProductionVideo.tsx` · 16:9 dark
**Dateiziel:** `public/images/production-video-poster.avif`

**Prompt:**
```
Cinematic still from a documentary about Swiss pharmaceutical production, dark
cinematography, dramatic side lighting on stainless steel machinery, a single
gloved hand holding a glass vial, deep blacks, single rim light, no faces visible,
shot on Arri Alexa, color graded warm-cool tension, 16:9 cinematic
```

**Plus echtes Video später:** 3:24 Minuten Werks-Tour durch Labor → Reinraum → Verpackung
mit Voiceover. Speichern als `public/videos/werks-tour.mp4` + Poster wie oben.

---

## 3. Testimonial-Portraits (4 Personen — "fröhliche Menschen")

**Wo:** `src/components/sections/SocialProof.tsx` · 4 × 1:1
**Dateiziel:** `public/images/portrait-[1-4].avif`

**Personen-Profile** (Namen aus dem Code übernehmen):

### Portrait 1 — Anna Berger · EU Mid-Cap Pharma Brand Manager
```
Editorial portrait of a confident Caucasian woman in her late 30s with shoulder-
length brown hair, soft genuine smile, wearing a tailored navy blazer over a
cream blouse, neutral warm office background slightly out of focus, natural
soft window light, shot on 85mm at f/1.8, editorial pharmaceutical magazine
style, warm desaturated tones, 1:1 square crop
```

### Portrait 2 — Jonas Keller · D2C-Founder DACH
```
Editorial portrait of a thoughtful man in his early 30s with short dark hair
and a few-day stubble, warm engaged smile, wearing a charcoal merino sweater,
clean concrete or off-white background, natural side light, shot on 85mm at
f/1.8, editorial startup-founder magazine style, warm tones, 1:1 square crop
```

### Portrait 3 — Dr. Lena Frei · Premium-Klinik Schweiz
```
Editorial portrait of a calm professional Caucasian woman in her mid 40s with
short silver-grey hair, gentle wise smile, wearing a crisp white coat over a
subtle grey turtleneck, soft clinical white background, natural diffused light,
shot on 85mm at f/2.0, editorial medical journal style, warm desaturated, 1:1
```

### Portrait 4 — Marc Hofmann · Family Office Health-Portfolio
```
Editorial portrait of a distinguished man in his early 50s with greying hair
swept back, contemplative warm smile, wearing a deep charcoal suit jacket over
an open-collared white shirt, deep dark background, side rim light, shot on
85mm at f/1.8, editorial finance magazine style, warm rich tones, 1:1 square
```

> **Konsistenz-Regel:** alle vier dürfen freundlich/fröhlich wirken, aber kein offenes Lachen, kein Stockfoto-Vibe. Editorial heisst: zurückhaltende Wärme, intelligente Augen, Würde.

---

## 4. Produkt-Stills (6 Produkte)

**Wo:** `src/app/produkte/[slug]/page.tsx` + `src/components/sections/ProdukteShowcase.tsx`
**Dateiziele:** `public/images/produkt-[slug].avif`

### Base-Template-Prompt (für jedes Produkt anpassen)
```
Editorial product photograph of a premium Swiss supplement [BOTTLE/PACKAGE TYPE],
minimalist label in cream and deep red, sitting on warm beige Carrara marble surface
with single dried botanical accent, soft window light from left, shallow depth of field,
warm desaturated tones, magazine pharmacy editorial style, shot on Hasselblad with
80mm macro, 4:5 aspect ratio
```

### Spezifika pro Produkt (BOTTLE/PACKAGE TYPE in Template einsetzen):

| Slug | Produkt | Verpackung | Accent |
|---|---|---|---|
| `night-repair` | Night Repair | dark glass apothecary bottle | dried lavender sprig |
| `brain-age` | Brain Age | tall amber glass capsule jar | single ginkgo leaf |
| `resilience` | Resilience | minimalist white pharmaceutical bottle | small ashwagandha root |
| `glp1-armor` | GLP-1 Armor | clinical white pill container with discreet medical typography | crisp folded white linen background |
| `senolytic-cleanse` | Senolytic Cleanse | premium wooden gift box partly open showing glass vials inside | sprig of dried herb on top |
| `spermidine-ritual` | Spermidine Ritual | 30 ml dark glass ampoule with elegant dropper | single fresh wheat grain |

---

## 5. Section-Hintergründe / Mood-Shots

### Process-Story Header
```
Editorial photograph of clean Swiss laboratory equipment detail — close-up of
chrome HPLC analyser, soft directional light, deep blacks, warm metallic
highlights, no people, 16:9 aspect ratio
```

### Expertise · Capabilities
```
Wide editorial shot of an organized pharmaceutical analytics laboratory bench —
glass measuring instruments, stainless steel, neutral warm whites, no fluids,
no neon, single soft overhead light source, magazine style, 16:9
```

### Expertise · Standort
```
Architectural editorial photograph of a clean modern Swiss manufacturing facility
exterior, off-white concrete and frosted glass facade, snowy Alps in distant
background, blue-hour soft light, no people, no cars, shot on tilt-shift, 16:9
```

### Unternehmen · Story
```
Editorial photograph of a hand pouring fine white powder from a stainless steel
scoop into an apothecary glass, very shallow depth of field, soft window light,
warm tones, magazine pharmacy style, 16:9
```

### Wissen · Forschung
```
Editorial photograph of an open scientific journal with handwritten margin notes
and a vintage fountain pen on a warm wooden desk, soft window light, intentional
shallow depth of field, no faces, magazine library style, 16:9
```

---

## 6. Pflege-Hinweise nach der Generation

### Optimierung
```bash
# AVIF + WebP responsive set
npx sharp-cli resize 1600 -i public/images/hero-lab.png -o public/images/hero-lab@1600.avif
npx sharp-cli resize 800  -i public/images/hero-lab.png -o public/images/hero-lab@800.avif
npx sharp-cli resize 400  -i public/images/hero-lab.png -o public/images/hero-lab@400.avif
```

### Dann in Components einbauen
Suche und ersetze in den jeweiligen Files:

```diff
- <div className="absolute inset-0 grid place-items-center">
-   <span className="font-[var(--font-mono)] text-[10px] ...">
-     Editorial-Bild · Phase 3
-   </span>
- </div>
+ <Image
+   src="/images/hero-lab.avif"
+   alt="Swiss longevity laboratory"
+   fill
+   priority
+   className="object-cover"
+ />
```

### Slot-Mapping (welche Datei für welche Component)

| Component | Slot | Datei |
|---|---|---|
| Hero | hero rechts | `/images/hero-lab.avif` |
| ProductionVideo | video poster | `/images/production-video-poster.avif` |
| SocialProof | Portrait 1-4 | `/images/portrait-1.avif` … `portrait-4.avif` |
| ProdukteShowcase | je Card | `/images/produkt-[slug].avif` |
| `/produkte/[slug]` | Hero-Tile | `/images/produkt-[slug].avif` |
| `/expertise/[slug]` | Hero | `/images/expertise-[slug].avif` |
| `/wissen/insights/[slug]` | Hero-OG | `/images/insights-[slug].avif` |
| `/unternehmen/story` | Editorial-Foto | `/images/unternehmen-story.avif` |

---

## 7. Konsistenz-Checkliste vor Produktion

- [ ] Alle Bilder haben dieselbe Farbtemperatur (~ 5200K, leicht warm)
- [ ] Schwarzwerte einheitlich (nicht 0,0,0 — `#0B0B0B`-Vibe)
- [ ] Höchstwerte cream-tönig, nie reines #FFFFFF
- [ ] Komposition lässt Platz für Type-Overlay
- [ ] Keine erkennbaren Wettbewerber-Produkte im Hintergrund
- [ ] Keine offensichtlich generierten Hände/Gesichter (Generation Drei-Mal regenerieren wenn nötig)
- [ ] Diversität in Portraits ohne Tokenismus
- [ ] Final-Output mindestens 2K, besser 4K

---

*Erstellt von Claude · Stand 2026-05-28 · Image Brief v1*
