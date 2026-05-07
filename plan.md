# Implementation Plan: Bilingual Dataset Introduction Website

## Architecture

Single-page static website with client-side i18n using JSON config files.

```
URT_SimReal_INTRO/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # All styles
├── js/
│   └── i18n.js          # Language switching + config loading
├── config/
│   ├── zh.json          # Chinese content
│   └── en.json          # English content
├── readme.md            # (existing)
└── dataset_manifest.json # (existing)
```

## Key Design Decisions

1. **No framework/build step** — pure HTML/CSS/JS for simplicity and easy deployment
2. **Config-driven content** — all text lives in `config/{lang}.json`, HTML uses `data-i18n` attributes
3. **Language toggle** — a button in the top-right corner, state stored in `localStorage`
4. **Responsive** — CSS Grid layout, mobile-first breakpoints
5. **Sections**: Hero/Header → Overview → Key Features → Scenarios → Dataset Structure → Channel Data → Download → Citation

## Config File Structure

Both `zh.json` and `en.json` share the same keys. Sections: `nav`, `hero`, `overview`, `features`, `scenarios`, `structure`, `channelData`, `download`, `citation`. Each section has `title` and content fields. Lists are arrays of strings/objects.

## How i18n Works

1. On page load, read `localStorage.lang` (default `'en'` or browser language)
2. Fetch `config/{lang}.json`
3. Walk all `[data-i18n]` elements and set `innerHTML`/`textContent` from config
4. Language toggle button re-fetches config and re-renders using same logic

## HTML Sections (in order)

1. **Nav bar** — sticky, logo/dataset name, nav links, language toggle
2. **Hero** — dataset title, short description, DOI badge, Zenodo link
3. **Overview** — abstract/introduction text
4. **Key Features** — grid of feature cards (frequency bands, modalities, 316K+ CSI records, sim+real, 11 scenarios)
5. **Scenarios** — 4 scenario categories with descriptions
6. **Dataset Structure** — folder tree (from readme)
7. **Channel Data** — H5 file structure, attributes table, datasets table
8. **Download** — Zenodo link with DOI
9. **Citation** — BibTeX and APA formats
10. **Footer** — maintainer info, license

## Files to Create

| File | Purpose |
|------|---------|
| `config/en.json` | English content |
| `config/zh.json` | Chinese content |
| `index.html` | Page structure with `data-i18n` attributes |
| `css/style.css` | Styling (academic, clean, blue/navy scheme) |
| `js/i18n.js` | Config loader + language switcher |
