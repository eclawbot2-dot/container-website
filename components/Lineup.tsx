'use client';

import { useLang } from './LangProvider';
import { formatEventDate } from '@/lib/i18n';
import { EVENTS } from '@/lib/config';
import { Reveal } from './Reveal';
import { ArrowIcon } from './icons';

const CARD_IMAGES = ['rave-crowd.jpg', 'crowd-lights.jpg', 'concert-silhouette.jpg'];

export function Lineup() {
  const { t, lang } = useLang();
  return (
    <section
      id="lineup"
      className="relative overflow-hidden bg-steel py-24 sm:py-32"
    >
      {/* Steel texture backdrop */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'url(/images/steel-texture.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-display text-sm font-medium uppercase tracking-mega text-ember">
            {t.lineup.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl font-700 uppercase leading-[0.95] text-sand sm:text-5xl lg:text-7xl">
            {t.lineup.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base text-sand/70 sm:text-lg">
            {t.lineup.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EVENTS.map((ev, i) => (
            <Reveal
              key={ev.id}
              delay={120 + i * 100}
              as="article"
              className="group relative flex flex-col overflow-hidden border border-sand/10 bg-ink"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`/images/${CARD_IMAGES[i % CARD_IMAGES.length]}`}
                  alt=""
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    ev.tba ? 'opacity-40 grayscale' : ''
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-display text-sm font-medium uppercase tracking-widest text-ember">
                  {formatEventDate(ev.dateISO, lang)}
                </p>
                <h3 className="mt-3 font-display text-3xl font-700 uppercase leading-none text-sand">
                  {ev.tba ? t.lineup.tba : ev.artist}
                </h3>

                {ev.genre && !ev.tba && (
                  <p className="mt-3 font-display text-xs font-medium uppercase tracking-widest text-sand/50">
                    {ev.genre}
                  </p>
                )}

                <div className="mt-auto flex flex-col gap-3 pt-7">
                  {ev.tba ? (
                    <span className="inline-flex items-center gap-2 font-display text-sm font-600 uppercase tracking-widest text-sand/40">
                      {t.lineup.tba}
                    </span>
                  ) : (
                    <>
                      <a
                        href={`/events/${ev.id}/`}
                        className="group/btn inline-flex min-h-[44px] items-center gap-2 border-b border-ember pb-1 font-display text-sm font-600 uppercase tracking-widest text-sand transition-colors hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
                      >
                        {t.lineup.detailsCta}
                        <ArrowIcon className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 rtl:rotate-180 rtl:group-hover/btn:-translate-x-1" />
                      </a>
                      {/* No ticket URL yet — visible "coming soon" placeholder, not a link. */}
                      <span
                        aria-disabled="true"
                        className="inline-flex min-h-[44px] cursor-default items-center gap-2 font-display text-xs font-600 uppercase tracking-widest text-sand/40"
                      >
                        {t.lineup.ticketsSoon}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 max-w-3xl border-l-2 border-ember pl-4 text-sm text-sand/50 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
            {t.lineup.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
