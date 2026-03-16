'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire Supabase workspace creation + invite
    setTimeout(() => setLoading(false), 600);
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Create your workspace</h1>
        <p className="text-sm text-slate-500">Set up ShiftFlow for your team in minutes.</p>
      </div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Company</label>
          <Input type="text" required placeholder="Cafe Aurora" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
          <Input type="email" required placeholder="you@company.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
          <Input type="password" required placeholder="••••••••" />
        </div>
        <Button className="w-full" disabled={loading}>
          {loading ? 'Creating...' : 'Create workspace'}
        </Button>
      </form>
      <p className="text-sm text-slate-500">
        Already have an account?{' '}
        <Link href="/login" className="text-brand-600 hover:underline">
          Sign in
        </Link>
      </p>
    </>
  );
}
