import type { Metadata, Viewport } from 'next';
import { Oswald, Inter, Cairo } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/components/LangProvider';
import { EVENTS, VENUE_COORDS, INSTAGRAM_URL } from '@/lib/config';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-arabic',
  display: 'swap',
});

const SITE_URL = 'https://container.jahdev.com';
const OG_DESC =
  "Jeddah's industrial techno & house venue on the Red Sea port. Steel, concrete, water and sound.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The Container — Jeddah · Red Sea Port Techno & House',
    template: '%s · The Container Jeddah',
  },
  description:
    "The Container — Jeddah's raw, industrial techno & house venue inside Shams Container Terminal on the Red Sea port. Live electronic music from international and regional DJs.",
  keywords: [
    'The Container Jeddah',
    'techno Jeddah',
    'house music Saudi Arabia',
    'Shams Container Terminal',
    'Red Sea electronic music',
    'Anja Schneider Jeddah',
    'Cassy Jeddah',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    title: 'The Container — Jeddah · Red Sea Port',
    description: OG_DESC,
    url: SITE_URL,
    siteName: 'The Container',
    locale: 'en_US',
    alternateLocale: ['ar_SA'],
    images: [
      {
        url: '/images/hero-port.jpg',
        width: 1920,
        height: 2905,
        alt: 'The Container — shipping container terminal at dusk on the Red Sea, Jeddah',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Container — Jeddah · Red Sea Port',
    description: OG_DESC,
    images: ['/images/hero-port.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicVenue',
  name: 'The Container',
  alternateName: 'ذا كونتينر',
  description:
    "Jeddah's raw, industrial techno & house venue inside Shams Container Terminal on the Red Sea port.",
  url: SITE_URL,
  image: `${SITE_URL}/images/hero-port.jpg`,
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
  sameAs: [INSTAGRAM_URL],
  // Derived from the single source of truth (EVENTS); TBA placeholders excluded.
  event: EVENTS.filter((e) => !e.tba).map((e) => ({
    '@type': 'MusicEvent',
    name: `${e.artist} at The Container`,
    startDate: e.dateISO,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    performer: { '@type': 'PerformingGroup', name: e.artist },
    location: {
      '@type': 'MusicVenue',
      name: 'The Container',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jeddah',
        addressCountry: 'SA',
      },
    },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${inter.variable} ${cairo.variable} bg-ink text-sand`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
