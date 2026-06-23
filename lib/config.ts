// ── Venue config — single place to confirm/swap real values ────────────────
// TODO: confirm real handle
export const INSTAGRAM_HANDLE = 'thecontainer.jed';
// TODO: confirm real contact email
export const CONTACT_EMAIL = 'info@container.jahdev.com';

export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

// Venue geo (Al Moulysaa district, Jeddah port, Red Sea coast)
export const VENUE_COORDS = { lat: 21.2727, lng: 39.1935 };

// Open the location in Google Maps
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${VENUE_COORDS.lat},${VENUE_COORDS.lng}`;

// Responsive Google Maps embed iframe — no API key required.
// hl localizes the map UI to the active language.
export function mapEmbedUrl(lang: 'en' | 'ar' = 'en'): string {
  return `https://www.google.com/maps?q=${VENUE_COORDS.lat},${VENUE_COORDS.lng}&z=15&hl=${lang}&output=embed`;
}

export type EventItem = {
  id: string;
  dateISO: string; // for sorting / datetime attr
  artist: string;
  tba?: boolean;
};

// Real confirmed lineup (verified via Bandsintown/Shazam). Lineup subject to change.
export const EVENTS: EventItem[] = [
  { id: 'anja-schneider', dateISO: '2026-08-21', artist: 'Anja Schneider' },
  { id: 'cassy', dateISO: '2026-09-11', artist: 'Cassy' },
  { id: 'tba-1', dateISO: '2026-10-16', artist: 'TBA', tba: true },
];
