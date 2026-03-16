import { ReactNode } from 'react';
import { PageShell } from '@/components/layout/page-shell';

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
