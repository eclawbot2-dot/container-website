import type { MetadataRoute } from 'next';
import { EVENT_PAGES } from '@/lib/config';

export const dynamic = 'force-static';

const SITE_URL = 'https://container.jahdev.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...EVENT_PAGES.map((e) => ({
      url: `${SITE_URL}/events/${e.id}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
