// ── Venue config — single place to confirm/swap real values ────────────────
//
// LINK POLICY: no fabricated destinations. Anything not independently verified
// is exposed in the UI as a clearly-labeled "coming soon" placeholder, never as
// a link to a guessed handle / ticketer / mailbox.

// TODO: real IG unknown — placeholder. No verified official Instagram handle
// exists for this venue (only unrelated decoy accounts). Do NOT link this out.
export const INSTAGRAM_HANDLE = 'coming-soon';
export const INSTAGRAM_VERIFIED = false;

// TODO: no ticket URL yet — placeholder until on sale. Render every Tickets CTA
// as a "coming soon" non-link until a real on-sale URL is confirmed.
export const TICKETS_URL = '';
export const TICKETS_VERIFIED = false;

// TODO: no real mailbox provisioned for info@container.jahdev.com — placeholder.
// Treat as not-yet-live; do not render an active mailto.
export const CONTACT_EMAIL = 'info@container.jahdev.com';
export const CONTACT_EMAIL_VERIFIED = false;

// Venue geo (Shams Container Terminal, Jeddah port, Red Sea coast) — VERIFIED.
export const VENUE_COORDS = { lat: 21.2727, lng: 39.1935 };

// Open the location in Google Maps — VERIFIED, keep working.
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
  /** Optional start time, 24h "HH:MM" local Jeddah time. */
  time?: string;
  /** Genre tag, shown on the lineup + detail page. */
  genre?: string;
  /** TBA placeholder card — has no detail page. */
  tba?: boolean;
};

// Real confirmed lineup (verified via Bandsintown/Shazam). Lineup subject to change.
// Per-event bios live in lib/i18n.ts (eventBios) so they can be bilingual.
export const EVENTS: EventItem[] = [
  {
    id: 'anja-schneider',
    dateISO: '2026-08-21',
    artist: 'Anja Schneider',
    time: '23:00',
    genre: 'house / techno',
  },
  {
    id: 'cassy',
    dateISO: '2026-09-11',
    artist: 'Cassy',
    genre: 'house / techno',
  },
  { id: 'tba-1', dateISO: '2026-10-16', artist: 'TBA', tba: true },
];

/** Events that get their own pre-rendered detail page. */
export const EVENT_PAGES = EVENTS.filter((e) => !e.tba);

/**
 * Look up an event by slug for the detail page.
 * Intentionally returns undefined for TBA placeholders even though they exist
 * in EVENTS — TBA events have no detail page (see EVENT_PAGES). This guarantees
 * getEvent's result matches generateStaticParams, so a TBA slug 404s rather
 * than rendering a half-empty page.
 */
export function getEvent(slug: string): EventItem | undefined {
  return EVENTS.find((e) => e.id === slug && !e.tba);
}
