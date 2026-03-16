'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  Users,
  CalendarClock,
  Umbrella,
  BarChart2,
  Settings,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import { navItems } from '@/lib/nav';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/store/ui';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, React.ReactNode> = {
  layout: <LayoutGrid className="h-4 w-4" />,
  users: <Users className="h-4 w-4" />,
  calendar: <CalendarClock className="h-4 w-4" />,
  umbrella: <Umbrella className="h-4 w-4" />,
  'bar-chart-2': <BarChart2 className="h-4 w-4" />,
  settings: <Settings className="h-4 w-4" />
};

export const Sidebar = () => {
  const pathname = usePathname();
  const { sidebarOpen, toggleSidebar } = useUIStore();

  return (
    <aside
      className={cn(
        'bg-white/80 dark:bg-slate-950/70 border-r border-slate-200 dark:border-slate-800 backdrop-blur-md transition-all duration-200',
        sidebarOpen ? 'w-64' : 'w-20'
      )}
    >
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center font-semibold shadow-card">
            SF
          </div>
          {sidebarOpen && (
            <div>
              <p className="text-sm font-semibold">ShiftFlow</p>
              <p className="text-xs text-slate-500">Workforce OS</p>
            </div>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Toggle sidebar">
          {sidebarOpen ? <ChevronsLeft className="h-4 w-4" /> : <ChevronsRight className="h-4 w-4" />}
        </Button>
      </div>
      <nav className="mt-2 space-y-1 px-2">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
                active && 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
              )}
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-100">
                {iconMap[item.icon]}
              </span>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
