'use client';

import { useLang } from './LangProvider';
import { Reveal } from './Reveal';
import { PinIcon, ArrowIcon } from './icons';
import { MAPS_URL, mapEmbedUrl } from '@/lib/config';

export function Visit() {
  const { t, lang } = useLang();

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
            <div className="flex flex-1 flex-col overflow-hidden border border-sand/10">
              <div className="relative aspect-video w-full bg-steel">
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
                    {t.visit.mapCta}
                  </span>
                </span>
                <ArrowIcon className="h-5 w-5 text-ember transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
