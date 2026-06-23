import type { Metadata, Viewport } from 'next';
import { Oswald, Inter, Cairo } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/components/LangProvider';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://container.jahdev.com'),
  title: 'The Container — Jeddah · Red Sea Port Techno & House',
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
  openGraph: {
    title: 'The Container — Jeddah · Red Sea Port',
    description:
      "Jeddah's industrial techno & house venue on the Red Sea port. Steel, concrete, water and sound.",
    url: 'https://container.jahdev.com',
    siteName: 'The Container',
    images: [{ url: '/images/hero-port.jpg', width: 1920, height: 1280 }],
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
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
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
