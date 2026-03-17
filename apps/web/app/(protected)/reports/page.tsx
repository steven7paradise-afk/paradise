import { ChartCard } from '@/components/charts/chart-card';
import { ExportBar } from '@/components/reports/export-bar';
import { useLocale } from '@/hooks/use-locale';

const hoursData = [
  { name: 'Front', value: 240 },
  { name: 'Kitchen', value: 180 },
  { name: 'Bar', value: 120 }
];

export default function ReportsPage() {
  const { t } = useLocale();
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">{t('titleReports')}</h1>
        <p className="text-sm text-slate-500">{t('subtitleReports')}</p>
      </div>
      <ExportBar />
      <ChartCard
        title="Weekly hours by department"
        description="Helps with labor cost planning"
        data={hoursData}
        variant="bar"
      />
    </div>
  );
}
‘use client’;
