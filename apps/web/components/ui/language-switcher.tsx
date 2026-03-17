'use client';

import { useLocale } from '@/hooks/use-locale';

const options = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' }
] as const;

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 text-xs dark:border-slate-700">
      {options.map((opt) => (
        <button
          key={opt.code}
          onClick={() => setLocale(opt.code)}
          className={`rounded px-2 py-1 ${locale === opt.code ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          aria-label={`Switch to ${opt.label}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};
