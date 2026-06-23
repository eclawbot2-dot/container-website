'use client';

import { useEffect, useState } from 'react';
import { useLang } from './LangProvider';
import { LangToggle } from './LangToggle';
import { InstagramIcon } from './icons';

export function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#lineup', label: t.nav.lineup },
    { href: '#visit', label: t.nav.visit },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-sand/10 bg-ink/85 backdrop-blur-md'
          : 'bg-gradient-to-b from-ink/70 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-700 uppercase tracking-[0.3em] text-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
        >
          {t.hero.title}
        </a>

        <nav aria-label={t.navLabel} className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm font-medium uppercase tracking-widest text-sand/80 transition-colors hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* No verified official Instagram exists — placeholder, not a link. */}
          <span
            aria-label={t.hero.instagramSoon}
            title={t.hero.instagramSoon}
            className="hidden cursor-default text-sand/35 sm:block"
          >
            <InstagramIcon />
          </span>
          <LangToggle />
          <button
            type="button"
            aria-label={t.menu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            className="-mr-1.5 flex h-11 w-11 flex-col items-center justify-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember md:hidden rtl:-ml-1.5 rtl:mr-0"
          >
            <span
              className={`h-0.5 w-5 bg-sand transition-transform ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span className={`h-0.5 w-5 bg-sand transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-5 bg-sand transition-transform ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={t.navLabel}
          className="border-t border-sand/10 bg-ink/95 px-5 py-2 backdrop-blur-md md:hidden rtl:text-right"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] items-center font-display text-base uppercase tracking-widest text-sand/90 transition-colors hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
