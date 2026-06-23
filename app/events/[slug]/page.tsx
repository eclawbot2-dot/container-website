import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EventDetail } from '@/components/EventDetail';
import { EVENT_PAGES, getEvent, VENUE_COORDS } from '@/lib/config';
import { dict, eventBios, formatEventDate } from '@/lib/i18n';

const SITE_URL = 'https://container.jahdev.com';

// Pre-render one static page per real (non-TBA) event.
export function generateStaticParams() {
  return EVENT_PAGES.map((e) => ({ slug: e.id }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const ev = getEvent(params.slug);
  if (!ev) return { title: 'Event not found' };
  const t = dict.en;
  const dateEN = formatEventDate(ev.dateISO, 'en');
  const title = t.event.metaTitle(ev.artist);
  const description = t.event.metaDesc(ev.artist, dateEN);
  const url = `${SITE_URL}/events/${ev.id}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · The Container Jeddah`,
      description,
      url,
      siteName: 'The Container',
      locale: 'en_US',
      alternateLocale: ['ar_SA'],
      images: ['/images/hero-port.jpg'],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} · The Container Jeddah`,
      description,
      images: ['/images/hero-port.jpg'],
    },
  };
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const ev = getEvent(params.slug);
  if (!ev) notFound();

  const url = `${SITE_URL}/events/${ev.id}/`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: `${ev.artist} at The Container`,
    url,
    description: eventBios[ev.id]?.en,
    startDate: ev.time ? `${ev.dateISO}T${ev.time}:00+03:00` : ev.dateISO,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    performer: { '@type': 'PerformingGroup', name: ev.artist },
    image: `${SITE_URL}/images/hero-port.jpg`,
    location: {
      '@type': 'MusicVenue',
      name: 'The Container',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shams Container Terminal, Al Moulysaa district, Jeddah port area',
        addressLocality: 'Jeddah',
        addressRegion: 'Makkah Province',
        addressCountry: 'SA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: VENUE_COORDS.lat,
        longitude: VENUE_COORDS.lng,
      },
    },
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ember focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:uppercase focus:tracking-widest focus:text-ink"
      >
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventDetail slug={ev.id} />
    </>
  );
}
