'use client';

import { useLang } from './LangProvider';
import { InstagramIcon, ArrowIcon } from './icons';

export function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-port.jpg"
          alt="Crowd with hands raised before a steel-rigged open-air stage under purple lights at night"
          className="h-full w-full animate-slowZoom object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40 rtl:bg-gradient-to-l" />
      </div>
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <p className="animate-fadeUp font-display text-sm font-medium uppercase tracking-mega text-ember opacity-0">
          {t.hero.kicker}
        </p>

        <h1
          className="mt-5 animate-fadeUp font-display text-[16vw] font-700 uppercase leading-[0.85] tracking-tight text-sand opacity-0 sm:text-[12vw] lg:text-[10rem]"
          style={{ animationDelay: '0.1s' }}
        >
          {t.hero.title}
        </h1>

        <p
          className="mt-6 max-w-2xl animate-fadeUp text-base leading-relaxed text-sand/85 opacity-0 sm:text-lg"
          style={{ animationDelay: '0.2s' }}
        >
          {t.hero.tagline}
        </p>

        <div
          className="mt-10 flex animate-fadeUp flex-wrap items-center gap-4 opacity-0"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#lineup"
            className="group inline-flex items-center gap-3 bg-ember px-7 py-4 font-display text-sm font-600 uppercase tracking-widest text-ink transition-colors hover:bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
          >
            {t.hero.cta}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>
          {/* No verified Instagram yet — visible placeholder, not a link. */}
          <span
            title={t.hero.instagramSoon}
            className="inline-flex cursor-default items-center gap-3 border border-dashed border-sand/25 px-7 py-4 font-display text-sm font-600 uppercase tracking-widest text-sand/45"
          >
            <InstagramIcon className="h-4 w-4" />
            {t.hero.instagramSoon}
          </span>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-sand/10 bg-ink/60 py-3 backdrop-blur-sm">
        <p className="px-5 text-center font-display text-xs uppercase tracking-mega text-sand/50 sm:px-8">
          {t.footer.eventsNote}
        </p>
      </div>
    </section>
  );
}
