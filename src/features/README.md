# Features

Feature-folder layout (Phase C of the migration plan).

## Currently

Sections still live in `src/components/sections/`. This folder is the destination.

## Target

```
features/
├── home/             # sections only used on /
├── leistungen/       # leistungs-detail template + sub-components
├── produkte/         # produkt-detail template + sub-components
├── kontakt/          # form with intent routing
└── shared/           # cross-feature primitives (e.g. SocialProof if reused)
```

Each feature folder may contain `sections/`, `components/`, `hooks/`, `lib/`
as needed. Keep things vertical: one feature, one folder, no horizontal cuts
across features.
