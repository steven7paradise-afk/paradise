import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => (
  <div className={cn('glass-card p-4', className)} {...props} />
);
