# Alte Kaffeerösterei Lünen – Website

Website von [www.alte-kaffee-roesterei.de](https://www.alte-kaffee-roesterei.de), migriert von Onepage nach
**Astro** (statische Seite) – gehostet auf **Vercel**, Code auf **GitHub**.

Alle URLs sind identisch zur bisherigen Onepage-Seite, daher sind keine Weiterleitungen nötig.

| URL | Datei |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/ueber-uns` | `src/pages/ueber-uns.astro` |
| `/fruehstueck` | `src/pages/fruehstueck.astro` |
| `/cafe` | `src/pages/cafe.astro` |
| `/gutscheine` | `src/pages/gutscheine.astro` |
| `/kontakt-anfahrt` | `src/pages/kontakt-anfahrt.astro` |
| `/beerdigungen` | `src/pages/beerdigungen.astro` |
| `/fruehstueck-in-dortmund`, `/fruehstueck-in-werne` | `src/components/LocalBreakfastPage.astro` (nicht im Menü) |
| `/impressum`, `/datenschutz` | `src/content/legal/*.md` |

---

## Inhalte pflegen

| Was | Wo |
| --- | --- |
| Telefon, Adresse, E-Mail, Social-Links, Menü | `src/data/site.ts` |
| Öffnungszeiten (alle Anzeigen + Google-Daten) | `src/data/site.ts` → `openingHours` |
| **Sektionen ein-/ausblenden** | `src/data/sections.ts` (`true` = sichtbar, `false` = ausgeblendet) |
| **Ankündigungen** (Events, Feiertage, Jobs) | `src/data/announcements.ts` |
| Speisekarte | Datei `public/speisekarte.pdf` ersetzen (Name beibehalten) |
| Bilder | `src/assets/images/`, Alt-Texte in `src/data/images.ts` |
| Impressum / Datenschutz | `src/content/legal/impressum.md`, `datenschutz.md` |
| Farben, Schriften | `src/styles/global.css` |

### Sektion ein- oder ausblenden

In `src/data/sections.ts` steht für jede Seite jede Sektion mit einem Schalter. `false` blendet sie aus, `true`
zeigt sie an. Wie bei Onepage ausgeblendet übernommen: „Lachs-Special“ und „Abkühlung gefällig?“ (Startseite),
„Abkühlung gefällig?“ (Café) und „Aktuelles Frühstücksangebot – Sommer 2023“ (Frühstück).

### Ankündigung einblenden

In `src/data/announcements.ts` bei einem Eintrag `visible: true` setzen (optional `visibleFrom` /
`visibleUntil` im Format `2026-12-24`). Commit → Vercel baut automatisch neu. Alle 8 Ankündigungen aus Onepage
sind übernommen und stehen auf `visible: false`.

Hinweis: Die Datumsprüfung passiert beim Build. Läuft eine Ankündigung per `visibleUntil` ab, verschwindet sie
mit dem nächsten Build (z. B. nächster Commit oder „Redeploy“ in Vercel).

---

## Lokal starten

Voraussetzung: Node.js ≥ 22.22

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

---

## Veröffentlichen auf Vercel

1. In Vercel **Add New → Project** und dieses GitHub-Repo importieren.
2. Framework wird automatisch als **Astro** erkannt. Build Command `npm run build`, Output `dist` – nichts ändern.
3. **Deploy**. Die Seite ist danach unter einer `*.vercel.app`-Adresse erreichbar → komplett durchklicken.
4. **Analytics**: Im Projekt unter *Analytics* → *Enable* (Vercel Web Analytics, cookielos). Der Code ist bereits
   eingebaut.

### Domain anbinden

1. In Vercel: *Settings → Domains* → `www.alte-kaffee-roesterei.de` hinzufügen und als Hauptdomain setzen.
   Zusätzlich `alte-kaffee-roesterei.de` hinzufügen mit Weiterleitung auf `www`.
2. **Vorher beim Domain-Anbieter alle DNS-Einträge notieren.** Die **MX-** und **TXT/SPF-Einträge** für
   `info@alte-kaffee-roesterei.de` dürfen **nicht** verändert werden, sonst kommt keine E-Mail mehr an.
3. Beim Domain-Anbieter nur die Einträge für `@` (A-Record) und `www` (CNAME) auf die Werte setzen, die Vercel im
   Domain-Dialog anzeigt.
4. Warten, bis Vercel beide Domains als „Valid“ anzeigt (SSL wird automatisch erstellt).
5. Erst danach die externe Domain in Onepage entfernen und das Onepage-Abo kündigen.
6. Google Search Console: Sitemap `https://www.alte-kaffee-roesterei.de/sitemap.xml` einreichen.

---

## Technik

- Astro 7, statisch (`build.format: 'file'`, `trailingSlash: 'never'` → URLs ohne Slash wie bisher)
- Bilder werden beim Build automatisch in WebP und mehrere Größen umgewandelt
- Schriften (Libre Baskerville, IBM Plex Sans/Serif) lokal eingebunden – keine Verbindung zu Google Fonts
- YouTube und OpenStreetMap laden erst nach Klick (`src/components/YouTubeLite.astro`, `OsmMap.astro`)
- Google-Bewertungen über das Trustindex-Script aus Onepage (`src/components/Reviews.astro`)
- Strukturierte Daten (`CafeOrCoffeeShop`) mit Adresse und Öffnungszeiten in `src/layouts/Base.astro`
- `vercel.json`: saubere URLs, Cache-Header

## Offene Punkte vor dem Go-live

- [ ] Impressum und Datenschutzerklärung aktualisieren (Texte sind 1:1 aus Onepage übernommen und veraltet:
      u. a. RStV/TMG, Facebook, Google Analytics, Newsletter; es fehlen Vercel, Vercel Analytics, Trustindex,
      YouTube, OpenStreetMap)
