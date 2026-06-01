# Internationalisation

Locale resources (Phase D of the migration plan, activated phase 2).

## Currently

Site is **de-CH only**. Strings live inline in components.

## Target

```
i18n/
├── de/
│   ├── common.json   # nav, CTAs, errors
│   ├── home.json
│   ├── leistungen.json
│   ├── produkte.json
│   ├── kontakt.json
│   └── legal.json
└── en/               # same shape, translated
```

Loader: `next-intl` middleware-based locale detection. Routes become
`/de/...` and `/en/...` with the existing German slugs renamed to English
equivalents (`/en/services`, `/en/products`, `/en/contact`, …).

## Migration safety net

Until next-intl is activated, this folder stays empty. Don't add references
to it from components.
