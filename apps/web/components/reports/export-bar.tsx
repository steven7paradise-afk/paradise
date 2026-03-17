import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileDown, FileText } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

export const ExportBar = () => {
  const { t } = useLocale();
  return (
    <Card className="flex flex-wrap items-center justify-between gap-3 p-4">
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{t('titleReports')}</p>
        <p className="text-xs text-slate-500">{t('subtitleReports')}</p>
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
};
