import { LeaveRequests } from '@/components/leaves/leave-requests';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CalendarPlus } from 'lucide-react';

export default function LeavesPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Leave management</h1>
          <p className="text-sm text-slate-500">Approve requests and track absences.</p>
        </div>
        <Button className="gap-2">
          <CalendarPlus className="h-4 w-4" />
          New request
        </Button>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <LeaveRequests />
        <Card className="p-4 text-sm text-slate-600 dark:text-slate-300">
          Calendar view will live-update via Supabase Realtime when approvals happen.
        </Card>
      </div>
    </div>
  );
}
