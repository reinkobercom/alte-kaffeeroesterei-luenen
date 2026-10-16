// Zentrale Stammdaten der Website. Änderungen hier wirken auf allen Seiten.

export const site = {
  name: 'Alte Kaffeerösterei Lünen',
  url: 'https://www.alte-kaffee-roesterei.de',
  email: 'info@alte-kaffee-roesterei.de',
  phone: {
    display: '+49 2306 7811910',
    href: 'tel:+4923067811910',
  },
  address: {
    street: 'Cappenberger Straße 51',
    zip: '44534',
    city: 'Lünen',
    country: 'DE',
  },
  geo: { lat: 51.6248165, lon: 7.5256657 },
  // Feste Adresse: neue Speisekarte einfach unter public/speisekarte.pdf ersetzen
  menuPdf: '/speisekarte.pdf',
  social: {
    instagram: 'https://www.instagram.com/alte_kaffeeroesterei_luenen/',
    youtube: 'https://www.youtube.com/@altekaffeeroestereiluenen',
  },
  // Trustindex-Widget (Google-Bewertungen), 1:1 aus Onepage übernommen
  trustindexSrc: 'https://cdn.trustindex.io/loader.js?834d969839325775e14619c220d',
  keywords: 'cafe lünen, kaffeerösterei lünen, alte kaffeerösterei lünen,',
  footerText:
    'Lieber Freund und Gast der alten Kaffeerösterei Lünen! Wir freuen uns darauf, Ihnen mit unseren leckeren Kaffees, Kuchen, Torten und mehr schöne Stunden zu bereiten.',
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Frühstück', href: '/fruehstueck' },
  { label: 'Café', href: '/cafe' },
  { label: 'Gutscheine', href: '/gutscheine' },
  { label: 'Kontakt & Anfahrt', href: '/kontakt-anfahrt' },
  { label: 'Beerdigungen', href: '/beerdigungen' },
];

// Footer-Menü wie bei Onepage (ohne „Home“)
export const footerNav: NavItem[] = mainNav.filter((item) => item.href !== '/');

export const legalNav: NavItem[] = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];

// Öffnungszeiten – einzige Quelle für alle Anzeigen und die strukturierten Daten.
// day: 1 = Montag … 7 = Sonntag. open/close leer = geschlossen.
export type OpeningDay = { day: number; label: string; open?: string; close?: string };

export const openingHours: OpeningDay[] = [
  { day: 1, label: 'Montag' },
  { day: 2, label: 'Dienstag' },
  { day: 3, label: 'Mittwoch', open: '09:00', close: '17:30' },
  { day: 4, label: 'Donnerstag', open: '09:00', close: '17:30' },
  { day: 5, label: 'Freitag', open: '09:00', close: '17:30' },
  { day: 6, label: 'Samstag', open: '09:30', close: '17:30' },
  { day: 7, label: 'Sonntag', open: '09:30', close: '17:30' },
];
