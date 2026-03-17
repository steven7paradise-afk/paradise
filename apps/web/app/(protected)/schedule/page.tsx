import { ShiftCalendar } from '@/components/schedule/shift-calendar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CalendarClock, Copy, Upload } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

export default function SchedulePage() {
  const { t } = useLocale();
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">{t('titleSchedule')}</h1>
          <p className="text-sm text-slate-500">{t('subtitleSchedule')}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" className="gap-2">
            <Copy className="h-4 w-4" />
            {t('quickNewShift')}
          </Button>
          <Button className="gap-2">
            <CalendarClock className="h-4 w-4" />
            Publish week
          </Button>
        </div>
      </div>
      <ShiftCalendar />
      <Card className="flex items-center justify-between p-4 text-sm text-slate-600 dark:text-slate-300">
        <span>Import templates or export this view.</span>
        <Button variant="ghost" size="sm" className="gap-2">
          <Upload className="h-4 w-4" />
          Export
        </Button>
      </Card>
    </div>
  );
}
‘use client’;
