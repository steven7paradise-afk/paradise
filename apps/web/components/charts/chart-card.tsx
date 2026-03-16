'use client';
/* eslint-disable react/jsx-key */

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar
} from 'recharts';

type Props = {
  title: string;
  description?: string;
  data: { name: string; value: number }[];
  variant?: 'area' | 'bar';
  className?: string;
};

export const ChartCard = ({ title, description, data, variant = 'area', className }: Props) => (
  <Card className={cn('space-y-3', className)}>
    <div>
      <p className="text-sm font-semibold text-slate-900 dark:text-white">{title}</p>
      {description && <p className="text-xs text-slate-500">{description}</p>}
    </div>
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        {variant === 'area' ? (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4178ff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#4178ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4178ff"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        ) : (
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="value" fill="#4178ff" radius={[8, 8, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  </Card>
);
