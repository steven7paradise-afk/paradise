import { EmployeeTable } from '@/components/employees/employee-table';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

export default function EmployeesPage() {
  const { t } = useLocale();
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">{t('titleEmployees')}</h1>
          <p className="text-sm text-slate-500">{t('subtitleEmployees')}</p>
        </div>
        <div className="flex gap-2">
          <Input placeholder={t('searchPlaceholder')} className="w-56" />
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            {t('quickInvite')}
          </Button>
        </div>
      </div>
      <EmployeeTable />
      <Card className="p-4 text-sm text-slate-600 dark:text-slate-300">
        Tip: capture weekly availability and positions to prevent scheduling conflicts.
      </Card>
    </div>
  );
}
‘use client’;
