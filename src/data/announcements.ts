// Ankündigungen (Termine, Sonderöffnungszeiten, Stellenanzeigen).
//
// Entspricht den ein-/ausgeblendeten Banner-Sektionen der Startseite in Onepage.
// Eine Ankündigung erscheint nur, wenn `visible: true` ist UND das heutige Datum
// (zum Zeitpunkt des Builds) zwischen `visibleFrom` und `visibleUntil` liegt.
// Beides ist optional. Nach dem Ändern einfach committen – Vercel baut neu.
//
// position: 'top'          = direkt unter dem Startseiten-Kopfbereich
//           'afterBooking' = nach den Reservierungsbedingungen
// tone:     Hintergrundfarbe des Banners (siehe src/styles/global.css)

import type { ImageMetadata } from 'astro';
import plakatOldies from '../assets/images/plakat-oldies-connection.jpg';

export type Announcement = {
  id: string;
  visible: boolean;
  visibleFrom?: string; // YYYY-MM-DD
  visibleUntil?: string; // YYYY-MM-DD (einschließlich)
  position: 'top' | 'afterBooking';
  tone: 'caramel' | 'sand' | 'roast' | 'espresso' | 'oat' | 'white';
  label?: string;
  title: string;
  /** Absätze als HTML (erlaubt: <b>, <br>, <a>) */
  paragraphs: string[];
  image?: { src: ImageMetadata; alt: string };
};

export const announcements: Announcement[] = [
  {
    id: 'live-musikabend-2026-07-04',
    visible: false,
    position: 'top',
    tone: 'caramel',
    label: 'Es ist wieder so weit!',
    title: 'Live Musikabend in der Alten Kaffeerösterei',
    paragraphs: [
      '<b>Samstag, 04.07.2026 – ab 18:00 Uhr</b><br>Eintritt: 5,– € + Hutumlage<br><br>Lust auf eine gemütliche Atmosphäre mit live Musik von „LASS\'SE - still hot for it!“ in der Alten Kaffeerösterei? Kommen Sie vorbei, bringen Sie Freunde mit und genießen Sie einen Abend voller guter Laune und Musik!',
      'Wir freuen uns auf Sie!',
    ],
  },
  {
    id: 'fronleichnam-2025',
    visible: false,
    position: 'top',
    tone: 'sand',
    title: 'Öffnungszeiten',
    paragraphs: ['Fronleichnam den 19.06.2025 bleibt die Alte Kaffeerösterei ab 13 Uhr geschlossen'],
  },
  {
    id: 'ostern',
    visible: false,
    position: 'top',
    tone: 'caramel',
    title: 'Öffnungszeiten rund um Ostern',
    paragraphs: [
      'Karfreitag haben wir geschlossen. Am Ostersonntag und Ostermontag bieten wir Ihnen ein tolles Frühstücksbuffet in der Zeit von 09.30 - 12.30 Uhr an.',
      'Bitte reservieren Sie rechtzeitig.',
    ],
  },
  {
    id: 'erster-mai-2026',
    visible: false,
    position: 'top',
    tone: 'caramel',
    title: 'Öffnungszeiten 01.05.2026',
    paragraphs: [
      'Am ersten Mai bieten wir Ihnen ein tolles Frühstück nach Karte in der Zeit von 09.30 - 12.30 Uhr an.',
      'Wir freuen uns auf Sie!',
    ],
  },
  {
    id: 'geschlossene-gesellschaft-2026-10-04',
    visible: false,
    position: 'top',
    tone: 'roast',
    title: 'Sonntag, 04.10.2026 +++ geschlossene Gesellschaft',
    paragraphs: [
      'Am Sonntag den 04.10.2026 haben wir bei uns eine geschlossene Gesellschaft. Vielen Dank für Ihr Verständnis.',
    ],
  },
  {
    id: 'feiertage-jahreswechsel',
    visible: false,
    position: 'top',
    tone: 'espresso',
    title: 'Öffnungszeiten zu den Feiertagen & Jahreswechsel',
    paragraphs: [
      'Liebe Gäste, wir möchten Sie über unsere Öffnungszeiten rund um die Feiertage informieren:',
      '<b>Wichtiger Hinweis vorab: Unsere generellen Öffnungszeiten gehen ab sofort bis 17:30 Uhr.</b><br><br><b>Unsere Feiertags-Planung:</b><br>Montag, den 22.12. bis Freitag, den 26.12.: Geschlossen<br><b>Samstag, den 27.12. &amp; Sonntag, den 28.12.: Unser beliebtes Wochenend-Frühstücksbuffet von 09:30 – 13:00 Uhr</b><br>Montag, den 29.12. &amp; Dienstag, den 30.12.: Geschlossen<br><b>Mittwoch, den 31.12. (Silvester): Silvester-Frühstücksbuffet von 09:30 – 13:00 Uhr</b><br>Donnerstag, den 01.01. bis einschließlich Dienstag, den 06.01.2026: Geschlossen<br><br><b>Ab Mittwoch, dem 07.01.2026, sind wir wieder wie gewohnt für Sie da.</b>',
      'Wir freuen uns auf Ihren Besuch und wünschen frohe Festtage und einen guten Rutsch ins neue Jahr!',
    ],
  },
  {
    id: 'aushilfe-gesucht',
    visible: false,
    position: 'top',
    tone: 'oat',
    title: 'Aushilfe (m/w/d) gesucht',
    paragraphs: [
      'Wir suchen ab sofort eine motivierte Aushilfe (m/w/d) zur Verstärkung unseres Teams im Vormittagsbereich. Bei der Alten Kaffeerösterei Lünen erwartet Sie ein freundliches, dynamisches Arbeitsumfeld, perfekt für Studenten oder als Nebenjob. Ihre Aufgaben sind die Zubereitung und das Servieren unseres Frühstücks, die Betreuung der Gäste und die Aufrechterhaltung der Ordnung im Café. Wir suchen jemanden mit Begeisterung für Kaffee und Gastronomie, freundlichem Auftreten sowie Zuverlässigkeit und Teamfähigkeit. Fühlen Sie sich vom Duft frischen Kaffees angezogen? Dann senden Sie eine kurze Mail an <a href="mailto:info@alte-kaffee-roesterei.de">info@alte-kaffee-roesterei.de</a> oder rufen Sie uns an: <a href="tel:+4923067811910">+49 2306 7811910</a>',
      'Wir freuen uns darauf, Sie kennenzulernen!',
    ],
  },
  {
    id: 'oldies-connection-2025-10-25',
    visible: false,
    position: 'afterBooking',
    tone: 'white',
    title: 'Live-Rockabend mit Oldies Connection – 60’s & 70’s Rockmusik',
    paragraphs: [
      'Am 25. Oktober 2025 verwandelt sich die Alte Kaffeerösterei Lünen in einen Ort purer Rock’n’Roll-Nostalgie! Die Band Oldies Connection bringt die größten Hits der 60er und 70er Jahre live auf die Bühne – mit authentischem Sound, Leidenschaft und jeder Menge Groove.',
      'Los geht’s um 18:00 Uhr in der Cappenberger Straße 51, 44534 Lünen. Der Eintritt kostet 5 Euro, inklusive 1 Glas Sekt gratis – und wer mag, darf gerne etwas in den Hut für die Band geben.',
      'Ein Abend voller Klassiker, guter Stimmung und echter Livemusik – für alle, die Rockgeschichte noch einmal hautnah erleben wollen!',
    ],
    image: {
      src: plakatOldies,
      alt: 'Plakat: Oldies Connection – 60’s & 70’s Live-Rockmusik in der Alten Kaffeerösterei am 25. Oktober 2025, Beginn 18 Uhr',
    },
  },
];

/** Liefert die aktuell sichtbaren Ankündigungen für eine Position. */
export function activeAnnouncements(position: Announcement['position'], today = new Date()) {
  const iso = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Berlin' }).format(today);
  return announcements.filter(
    (a) =>
      a.visible &&
      a.position === position &&
      (!a.visibleFrom || a.visibleFrom <= iso) &&
      (!a.visibleUntil || a.visibleUntil >= iso),
  );
}
