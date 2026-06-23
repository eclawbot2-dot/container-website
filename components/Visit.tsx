'use client';

import { useLang } from './LangProvider';
import { Reveal } from './Reveal';
import { PinIcon, ArrowIcon } from './icons';
import { MAPS_URL, STATIC_MAP_URL } from '@/lib/config';

export function Visit() {
  const { t } = useLang();

  const blocks = [
    { title: t.visit.addressTitle, body: t.visit.address },
    { title: t.visit.gettingThereTitle, body: t.visit.gettingThere },
    { title: t.visit.hoursTitle, body: t.visit.hours },
    { title: t.visit.entryTitle, body: t.visit.entry },
  ];

  return (
    <section id="visit" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-display text-sm font-medium uppercase tracking-mega text-ember">
            {t.visit.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl font-700 uppercase leading-[0.95] text-sand sm:text-5xl lg:text-7xl">
            {t.visit.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Info blocks */}
          <div className="grid gap-px overflow-hidden border border-sand/10 sm:grid-cols-2">
            {blocks.map((b, i) => (
              <Reveal key={i} delay={100 + i * 80} className="bg-steel p-6">
                <h3 className="font-display text-lg font-600 uppercase tracking-wide text-ember">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/70">
                  {b.body}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Map */}
          <Reveal delay={160} className="flex flex-col">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block flex-1 overflow-hidden border border-sand/10"
              aria-label={t.visit.mapCta}
            >
              <img
                src={STATIC_MAP_URL}
                alt="Map of the Jeddah port area on the Red Sea coast"
                className="h-full min-h-[280px] w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rtl:flex-row-reverse">
                <span className="inline-flex items-center gap-2 text-sand">
                  <PinIcon className="h-5 w-5 text-ember" />
                  <span className="font-display text-sm font-600 uppercase tracking-widest">
                    {t.visit.mapCta}
                  </span>
                </span>
                <ArrowIcon className="h-5 w-5 text-ember transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
