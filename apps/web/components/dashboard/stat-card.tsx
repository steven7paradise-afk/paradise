import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = {
  label: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
  className?: string;
};

export const StatCard = ({ label, value, delta, icon, className }: Props) => (
  <Card className={cn('flex items-center justify-between gap-3', className)}>
    <div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
      {delta && <p className="text-xs text-emerald-600 dark:text-emerald-400">↗ {delta}</p>}
    </div>
    {icon && <div className="text-slate-500">{icon}</div>}
  </Card>
);
