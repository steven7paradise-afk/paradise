import { ChartCard } from '@/components/charts/chart-card';
import { ExportBar } from '@/components/reports/export-bar';

const hoursData = [
  { name: 'Front', value: 240 },
  { name: 'Kitchen', value: 180 },
  { name: 'Bar', value: 120 }
];

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Reports</h1>
        <p className="text-sm text-slate-500">Export hours, schedules, and attendance.</p>
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
