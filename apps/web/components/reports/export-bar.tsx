import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileDown, FileText } from 'lucide-react';

export const ExportBar = () => (
  <Card className="flex flex-wrap items-center justify-between gap-3 p-4">
    <div>
      <p className="text-sm font-semibold text-slate-900 dark:text-white">Export reports</p>
      <p className="text-xs text-slate-500">Download schedule, hours, and attendance</p>
    </div>
    <div className="flex gap-2">
      <Button variant="outline" size="sm" className="gap-2">
        <FileText className="h-4 w-4" />
        PDF
      </Button>
      <Button variant="secondary" size="sm" className="gap-2">
        <FileDown className="h-4 w-4" />
        CSV
      </Button>
    </div>
  </Card>
);
