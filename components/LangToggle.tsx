'use client';

import { useLang } from './LangProvider';
import { GlobeIcon } from './icons';

export function LangToggle({ compact = false }: { compact?: boolean }) {
  const { t, toggle } = useLang();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.langToggle.switchTo}
      title={t.langToggle.switchTo}
      className={`group inline-flex min-h-[44px] items-center gap-2 border border-sand/30 bg-ink/40 px-3 py-2 font-display text-sm font-medium uppercase tracking-widest text-sand backdrop-blur transition-colors hover:border-ember hover:bg-ember hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
        compact ? '' : 'min-w-[5.5rem] justify-center'
      }`}
    >
      <GlobeIcon className="h-4 w-4 opacity-80 transition-transform group-hover:rotate-12" />
      <span>{t.langToggle.label}</span>
    </button>
  );
}
