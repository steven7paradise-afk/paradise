'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { defaultLocale, Locale, messages } from '@/lib/i18n';

type LocaleContextValue = {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (loc: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  t: (key) => messages[defaultLocale][key] || key,
  setLocale: () => {}
});

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = typeof document !== 'undefined' ? document.cookie.match(/locale=(\w+)/)?.[1] : null;
    if (stored === 'es' || stored === 'it' || stored === 'en') setLocaleState(stored);
  }, []);

  const setLocale = (loc: Locale) => {
    setLocaleState(loc);
    if (typeof document !== 'undefined') {
      document.cookie = `locale=${loc};path=/;max-age=${60 * 60 * 24 * 365}`;
    }
  };

  const t = (key: string) => messages[locale][key] || messages[defaultLocale][key] || key;

  return <LocaleContext.Provider value={{ locale, t, setLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => useContext(LocaleContext);
