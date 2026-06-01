# Deploy-Anleitung — Swiss Longevity Labs

## Vercel — Empfohlene Variante

### 1. Erste Deploy-Verbindung (einmalig)

#### A) Per Vercel Dashboard
1. Auf https://vercel.com/new gehen
2. **Import Git Repository** → das GitHub-Repo `mirkodjuriczurich-design/WEBSEITE` auswählen
3. Vercel erkennt automatisch:
   - Framework: **Next.js**
   - Build Command: `next build` (aus `vercel.json`)
   - Output Directory: `.next`
4. **Deploy** klicken — der erste Build läuft an, dauert ~2 Min
5. Nach erfolgreichem Build: Preview-URL wird angezeigt (`https://webseite-xxxxx.vercel.app`)

#### B) Per Vercel CLI (Alternative, lokal)
```bash
npm install -g vercel
cd /pfad/zum/repo
vercel login
vercel link          # Verknüpft mit Vercel-Projekt
vercel               # Preview-Deploy
vercel --prod        # Production-Deploy auf main
```

### 2. Automatische Deploys (eingerichtet nach Import)

Vercel deployt automatisch:
- **Jeder Push auf den `main`-Branch** → Production-Deploy
- **Jeder PR-Push** → eigene Preview-URL pro Pull-Request

### 3. Domain konfigurieren

Sobald Live-URL akzeptiert ist:

1. In Vercel-Projekt-Settings → **Domains**
2. `swisslongevitylab.com` hinzufügen
3. DNS bei Registrar (Cloudflare, Gandi, etc.) konfigurieren:
   ```
   A     @         76.76.21.21      (Vercel IP)
   CNAME www       cname.vercel-dns.com
   ```
4. SSL-Zertifikat wird von Vercel automatisch ausgestellt (Let's Encrypt)
5. Verifizierung dauert ~10-30 Min

### 4. Environment Variables (für Phase 2)

Wenn wir Form-Backend / Analytics / CMS einbauen:

```bash
# Resend für Form-Submissions
RESEND_API_KEY=re_...

# Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=swisslongevitylab.com

# Sanity CMS (Phase 2)
NEXT_PUBLIC_SANITY_PROJECT_ID=...
SANITY_API_TOKEN=...

# Shopify (Phase 2 - E-Commerce)
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=...
SHOPIFY_STOREFRONT_API_TOKEN=...
```

In Vercel: **Settings → Environment Variables** für `Production`, `Preview` und `Development` einzeln setzen.

---

## Was bereits konfiguriert ist

### `vercel.json`
- **Region**: Frankfurt (`fra1`) — niedrige Latenz Schweiz/EU
- **Security-Headers**: HSTS, X-Frame-Options, Permissions-Policy, Referrer-Policy
- **Caching**: 1 Jahr für statische Assets, 1 Stunde für robots/llms/sitemap
- **Redirects**: `/services` → `/leistungen`, `/products` → `/produkte`, `/about` → `/unternehmen`, `/contact` → `/kontakt`

### `next.config.ts`
- React Strict Mode
- AVIF + WebP Image-Formate

### SEO/GEO Foundation
- `/robots.txt` mit AI-Crawler-Allowlist
- `/llms.txt` für LLM-Zitate
- Dynamische `/sitemap.xml`
- JSON-LD `Organization` + `Manufacturer` im Root-Layout
- `FAQPage` + `Article` + `Product` Schema auf relevanten Seiten

---

## Pre-Launch Checkliste

### Vor dem ersten Production-Deploy
- [ ] `.env.production.local` mit echten API-Keys auf Vercel hinterlegt
- [ ] `swisslongevitylab.com` als Custom-Domain verbunden + SSL aktiv
- [ ] `Hidden-Branch` für Pre-Launch-Review angelegt (Vercel: Password Protection auf Preview)
- [ ] Echte Texte für Impressum, Datenschutz, AGB (statt der Platzhalter)
- [ ] Echte Zertifikat-Nummern in Footer + Schema.org
- [ ] Bilder aus `docs/image-brief.md` produziert und in `public/images/` abgelegt
- [ ] Production-Video gedreht und in `public/videos/` abgelegt
- [ ] Form-Backend (Resend / Formspree) angebunden
- [ ] Analytics (Plausible) integriert
- [ ] Booking-Tool (Cal.com) eingebunden für Beratungstermine

### Nach dem ersten Production-Deploy
- [ ] **Google Search Console** verifiziert (DNS-TXT-Record oder HTML-File)
- [ ] **Bing Webmaster Tools** verifiziert (für ChatGPT-Quellen!)
- [ ] **Google Business Profile** angelegt mit Schweizer Adresse
- [ ] `sitemap.xml` bei beiden Search-Engines eingereicht
- [ ] LinkedIn-Company-Page mit Verlinkung
- [ ] LLM-Self-Test in ChatGPT, Claude, Perplexity:
  - "Wer ist Swiss Longevity Labs?"
  - "Schweizer Hersteller für Longevity-Produkte?"
  - "GMP CDMO Switzerland?"

---

## Performance-Targets

Quelle: UX-Brief § 11

| Metrik | Ziel | Status |
|---|---|---|
| **LCP** | < 2.0 s | TBD nach Image-Production |
| **CLS** | < 0.05 | ✓ (next/font + size-set Images) |
| **INP** | < 200 ms | ✓ (Minimal Client-JS, primär SSG) |
| **Lighthouse Performance** | ≥ 95 | TBD |
| **Lighthouse SEO** | ≥ 95 | sollte mit Schema.org + Meta erfüllt sein |
| **Lighthouse Accessibility** | ≥ 95 | TBD |
| **Initial JS Bundle** | < 150 KB | aktuell ~752 KB total chunks · per-Page < 150 KB |
