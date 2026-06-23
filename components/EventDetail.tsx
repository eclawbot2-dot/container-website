'use client';

import { useLang } from './LangProvider';
import { Header } from './Header';
import { Footer } from './Footer';
import { Reveal } from './Reveal';
import { ArrowIcon, PinIcon } from './icons';
import { formatEventDate, formatEventTime, eventBios } from '@/lib/i18n';
import {
  getEvent,
  MAPS_URL,
  mapEmbedUrl,
  type EventItem,
} from '@/lib/config';

const EVENT_IMAGES: Record<string, string> = {
  'anja-schneider': 'rave-crowd.jpg',
  cassy: 'crowd-lights.jpg',
};

export function EventDetail({ slug }: { slug: string }) {
  const { t, lang } = useLang();
  const ev = getEvent(slug) as EventItem | undefined;

  if (!ev) {
    return (
      <>
        <Header />
        <main id="main" className="relative flex min-h-[70vh] items-center justify-center px-5">
          <div className="text-center">
            <h1 className="font-display text-4xl font-700 uppercase text-sand">404</h1>
            <a
              href="/#lineup"
              className="mt-6 inline-flex items-center gap-2 font-display text-sm font-600 uppercase tracking-widest text-ember"
            >
              {t.event.backToEvents}
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const bio = eventBios[ev.id]?.[lang] ?? '';
  const img = EVENT_IMAGES[ev.id] ?? 'concert-silhouette.jpg';
  const dateLabel = formatEventDate(ev.dateISO, lang);

  return (
    <>
      <Header />
      <main id="main" className="relative">
        {/* Hero band */}
        <section className="relative flex min-h-[72svh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={`/images/${img}`}
              alt=""
              className="h-full w-full animate-slowZoom object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-transparent to-ink/40 rtl:bg-gradient-to-l" />
          </div>
          <div className="grain absolute inset-0" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
            <Reveal>
              <a
                href="/#lineup"
                className="group inline-flex items-center gap-2 font-display text-xs font-600 uppercase tracking-widest text-sand/70 transition-colors hover:text-ember"
              >
                <ArrowIcon className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1 rtl:rotate-0 rtl:group-hover:translate-x-1" />
                {t.event.backToEvents}
              </a>
            </Reveal>
            <p className="mt-6 font-display text-sm font-medium uppercase tracking-mega text-ember">
              {dateLabel}
            </p>
            <h1 className="mt-4 font-display text-[14vw] font-700 uppercase leading-[0.85] tracking-tight text-sand sm:text-[10vw] lg:text-[8rem]">
              {ev.artist}
            </h1>
            {ev.genre && (
              <p className="mt-5 font-display text-sm font-medium uppercase tracking-widest text-sand/60">
                {ev.genre}
              </p>
            )}
          </div>
        </section>

        {/* Detail body */}
        <section className="relative bg-ink py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              {/* Left: facts + bio */}
              <div>
                <div className="grid gap-px overflow-hidden border border-sand/10 sm:grid-cols-2">
                  <Reveal className="bg-steel p-6">
                    <h2 className="font-display text-lg font-600 uppercase tracking-wide text-ember">
                      {t.event.whenTitle}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-sand/75">{dateLabel}</p>
                    {ev.time && (
                      <p className="mt-1 text-sm leading-relaxed text-sand/75">
                        {t.event.doorsLabel}: {formatEventTime(ev.time, lang)}
                      </p>
                    )}
                  </Reveal>
                  <Reveal delay={80} className="bg-steel p-6">
                    <h2 className="font-display text-lg font-600 uppercase tracking-wide text-ember">
                      {t.event.whereTitle}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-sand/75">
                      {t.visit.address}
                    </p>
                  </Reveal>
                  {ev.genre && (
                    <Reveal delay={160} className="bg-steel p-6 sm:col-span-2">
                      <h2 className="font-display text-lg font-600 uppercase tracking-wide text-ember">
                        {t.event.genreTitle}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-sand/75">{ev.genre}</p>
                    </Reveal>
                  )}
                </div>

                {bio && (
                  <Reveal delay={120}>
                    <h2 className="mt-12 font-display text-2xl font-700 uppercase text-sand">
                      {t.event.aboutTitle}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand/75">
                      {bio}
                    </p>
                  </Reveal>
                )}

                <Reveal delay={160}>
                  <p className="mt-8 max-w-3xl border-l-2 border-ember pl-4 text-sm text-sand/50 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
                    {t.event.lineupNote}
                  </p>
                </Reveal>

                {/* Tickets — placeholder, NOT a link (no verified ticketer). */}
                <Reveal delay={180}>
                  <div className="mt-10 border border-dashed border-sand/25 p-6">
                    <h2 className="font-display text-lg font-600 uppercase tracking-wide text-ember">
                      {t.event.ticketsTitle}
                    </h2>
                    <p className="mt-3 inline-flex items-center gap-2 font-display text-sm font-600 uppercase tracking-widest text-sand/45">
                      {t.event.ticketsSoon}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="/#lineup"
                      className="group inline-flex min-h-[44px] items-center gap-2 border border-sand/40 px-6 py-3 font-display text-sm font-600 uppercase tracking-widest text-sand transition-colors hover:border-ember hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                    >
                      {t.event.backToEvents}
                    </a>
                    <a
                      href="/"
                      className="group inline-flex min-h-[44px] items-center gap-2 border border-sand/40 px-6 py-3 font-display text-sm font-600 uppercase tracking-widest text-sand transition-colors hover:border-ember hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                    >
                      {t.event.backHome}
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Right: map */}
              <Reveal delay={140} className="flex flex-col">
                <div className="flex flex-1 flex-col overflow-hidden border border-sand/10">
                  <div className="relative aspect-video w-full bg-steel lg:aspect-auto lg:flex-1">
                    <iframe
                      src={mapEmbedUrl(lang)}
                      title={t.visit.mapTitle}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0 grayscale-[0.35] contrast-[1.05]"
                    />
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2 border-t border-sand/10 bg-ink px-4 py-4 text-sand transition-colors hover:bg-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rtl:flex-row-reverse"
                  >
                    <span className="inline-flex items-center gap-2">
                      <PinIcon className="h-5 w-5 text-ember" />
                      <span className="font-display text-sm font-600 uppercase tracking-widest">
                        {t.event.mapCta}
                      </span>
                    </span>
                    <ArrowIcon className="h-5 w-5 text-ember transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
