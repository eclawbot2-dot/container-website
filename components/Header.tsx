'use client';

import { useEffect, useState } from 'react';
import { useLang } from './LangProvider';
import { LangToggle } from './LangToggle';
import { InstagramIcon } from './icons';
import { INSTAGRAM_URL } from '@/lib/config';

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
          className="font-display text-lg font-700 uppercase tracking-[0.3em] text-sand"
        >
          {t.hero.title}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm font-medium uppercase tracking-widest text-sand/80 transition-colors hover:text-ember"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.hero.instagram}
            className="hidden text-sand/80 transition-colors hover:text-ember sm:block"
          >
            <InstagramIcon />
          </a>
          <LangToggle />
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
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
        <nav className="border-t border-sand/10 bg-ink/95 px-5 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-base uppercase tracking-widest text-sand/90"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
