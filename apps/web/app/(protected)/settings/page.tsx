import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/use-locale';

export default function SettingsPage() {
  const { t } = useLocale();
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">{t('titleSettings')}</h1>
        <p className="text-sm text-slate-500">{t('subtitleSettings')}</p>
      </div>
      <Card className="space-y-4 p-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Company name</label>
          <Input placeholder="Cafe Aurora" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Notification email</label>
          <Input placeholder="alerts@cafeaurora.com" />
        </div>
        <Button className="mt-2">Save changes</Button>
      </Card>
    </div>
  );
}
‘use client’;
