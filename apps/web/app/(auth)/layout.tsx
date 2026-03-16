import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white/80 p-8 shadow-card backdrop-blur dark:bg-slate-900/80">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center font-semibold shadow-card">
            SF
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">ShiftFlow</p>
            <p className="text-xs text-slate-500">Workforce management</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
