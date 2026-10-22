// ------------------------------------------------------------------
// SEKTIONEN EIN- UND AUSBLENDEN
//
// Jede Sektion jeder Seite hat hier einen Schalter:
//   true  = sichtbar
//   false = ausgeblendet (bleibt im Code erhalten, wird nur nicht angezeigt)
//
// Ändern → speichern → committen. Vercel veröffentlicht automatisch neu.
// Termine/Hinweise (Feiertage, Events, Jobs) werden separat in
// src/data/announcements.ts geschaltet.
//
// Stand der Übernahme: wie auf der Onepage-Seite (16.10.2026) – dort
// ausgeblendete Sektionen stehen hier auf false.
// ------------------------------------------------------------------

export const sections = {
  startseite: {
    fruehstuecksbuffet: true, // „Frühstücksgenuss am Wochenende …“
    reservierungsbedingungen: true,
    reservierungen: false, // „Reservierungen … Ihre Andrea“
    reinkommen: true, // „Reinkommen, wohlfühlen & genießen.“
    zwischentitel: true, // „Frühstück, Kaffee & Kuchen.“
    regional: true, // „Regional, nachhaltig & fair.“
    wohlfuehlort: true, // „Ihr Wohlfühlort in Lünen.“
    zitat: true, // Zitat Andrea Tomaszik
    galerie: true, // „Leckerer Kaffee & Kuchen …“
    lachsSpecial: false, // „Für alle Lachsliebhaber: Unser Freitags-Special“ (in Onepage ausgeblendet)
    trauerfeiern: true, // „In schwierigen Zeiten sind wir für Sie da.“
    gutscheine: true, // „Das perfekte Geschenk: Zeit!“
    eis: false, // „Abkühlung gefällig?“ (in Onepage ausgeblendet)
    getraenke: true, // „Für alle, die den Kaffee schon auf haben!“
    youtube: true, // YouTube-Kanal + Video + 3 Shorts
    bewertungen: true, // „Das sagen unsere Besucher über uns“ (Trustindex)
    oeffnungszeiten: true,
  },
  ueberUns: {
    historie: true,
  },
  fruehstueck: {
    lieblingsfruehstueck: true, // „Ihr Morgen, Ihr Lieblingsfrühstück.“
    aktuellesAngebot: false, // „Aktuelles Frühstücksangebot – Sommer 2023“ (in Onepage ausgeblendet)
    speisekarte: true, // „Unsere Speisekarte finden Sie hier.“
    oeffnungszeiten: true,
  },
  cafe: {
    kaffeepause: true,
    galerie: true,
    getraenke: true, // „Für alle, die den Kaffee schon auf haben!“
    eis: false, // „Abkühlung gefällig?“ (in Onepage ausgeblendet)
    oeffnungszeiten: true,
  },
  gutscheine: {
    geschenk: true, // „Das perfekte Geschenk: Zeit!“
  },
  kontaktAnfahrt: {
    kontaktinfos: true, // Telefon / Öffnungszeiten / Anfahrt
    lage: true, // „Im Herzen von Lünen.“ + Karte
  },
  beerdigungen: {
    trauerfeiern: true,
  },
  // gilt für „Frühstück in Dortmund“ und „Frühstück in Werne“
  fruehstueckOrt: {
    lieblingsfruehstueck: true,
    speisekarte: true,
    oeffnungszeiten: true,
  },
  // Elemente, die auf allen Seiten erscheinen
  global: {
    mobileAktionsleiste: true, // feste Leiste unten am Handy (Reservierung / Speisekarte)
    telefonImHeader: true, // Telefon-Button in der Navigation
  },
} as const;
