'use client';

import { useLang } from './LangProvider';
import { Reveal } from './Reveal';

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div>
            <Reveal>
              <p className="font-display text-sm font-medium uppercase tracking-mega text-ember">
                {t.about.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-4xl font-700 uppercase leading-[0.95] text-sand sm:text-5xl lg:text-6xl">
                {t.about.title}
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {t.about.body.map((p, i) => (
                <Reveal key={i} delay={120 + i * 80}>
                  <p className="text-base leading-relaxed text-sand/75 sm:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-sand/10 sm:grid-cols-3">
              {t.about.stats.map((s, i) => (
                <Reveal key={i} delay={200 + i * 90} className="bg-steel p-6">
                  <p className="font-display text-2xl font-700 uppercase text-ember">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-sand/60">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 gap-4">
            <Reveal className="col-span-2 aspect-[16/10] overflow-hidden">
              <img
                src="/images/containers-dusk.jpg"
                alt="Stacked shipping containers at dusk"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120} className="aspect-square overflow-hidden">
              <img
                src="/images/dj-decks.jpg"
                alt="DJ performing on stage with decks and lasers above the crowd"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={200} className="aspect-square overflow-hidden">
              <img
                src="/images/waterfront-night.jpg"
                alt="Night festival crowd with confetti and stage lights"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
