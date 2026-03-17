'use client';

import Link from 'next/link';
import { Bell, Plus, Search } from 'lucide-react';
import { quickActions } from '@/lib/nav';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLocale } from '@/hooks/use-locale';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

export const Topbar = () => {
  const pathname = usePathname();
  const { t } = useLocale();
  const title = pathname.split('/')[1] || 'dashboard';

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/70">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-300">
          {title}
        </div>
        <div className="relative hidden md:block">
          <input
            className="h-10 w-64 rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none ring-brand-500 focus:border-brand-500 focus:ring-2 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            placeholder={t('searchPlaceholder')}
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2">
          {quickActions.map((action) => (
            <Link key={action.href} href={action.href}>
              <Button variant="secondary" size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                {t(action.label)}
              </Button>
            </Link>
          ))}
        </div>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-emerald-500" />
        </Button>
        <ThemeToggle />
        <LanguageSwitcher />
        <div
          className={cn(
            'ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-semibold text-white shadow-soft'
          )}
        >
          AM
        </div>
      </div>
    </header>
  );
};
