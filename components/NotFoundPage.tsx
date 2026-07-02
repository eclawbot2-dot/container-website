'use client';

import { useLang } from './LangProvider';
import { Header } from './Header';
import { Footer } from './Footer';

/** Branded bilingual 404 — replaces Next's default (black-on-black on our dark body). */
export function NotFoundPage() {
  const { t } = useLang();
  return (
    <>
      <Header />
      <main
        id="main"
        className="relative flex min-h-[70vh] items-center justify-center px-5 pt-24"
      >
        <div className="text-center">
          <p className="font-display text-sm font-medium uppercase tracking-mega text-ember">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-700 uppercase text-sand sm:text-6xl">
            {t.notFound.title}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-sand/70">
            {t.notFound.body}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="inline-flex min-h-[44px] items-center gap-2 border border-sand/40 px-6 py-3 font-display text-sm font-600 uppercase tracking-widest text-sand transition-colors hover:border-ember hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              {t.event.backHome}
            </a>
            <a
              href="/#lineup"
              className="inline-flex min-h-[44px] items-center gap-2 border border-sand/40 px-6 py-3 font-display text-sm font-600 uppercase tracking-widest text-sand transition-colors hover:border-ember hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              {t.event.backToEvents}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
