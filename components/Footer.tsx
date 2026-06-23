'use client';

import { useLang } from './LangProvider';
import { InstagramIcon } from './icons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, CONTACT_EMAIL } from '@/lib/config';

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-sand/10 bg-ink">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'url(/images/warehouse.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-700 uppercase tracking-[0.25em] text-sand">
              {t.hero.title}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/60">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-600 uppercase tracking-widest text-ember">
              {t.footer.follow}
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sand/80 transition-colors hover:text-ember"
            >
              <InstagramIcon className="h-5 w-5" />
              <span>@{INSTAGRAM_HANDLE}</span>
            </a>
          </div>

          <div>
            <p className="font-display text-sm font-600 uppercase tracking-widest text-ember">
              {t.footer.contact}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 block break-all text-sand/80 transition-colors hover:text-ember"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-sand/10 pt-6 text-sm text-sand/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t.hero.title}. {t.footer.rights}
          </p>
          <p className="font-display uppercase tracking-widest">
            {t.footer.eventsNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
