import { ChartCard } from '@/components/charts/chart-card';
import { EmployeeTable } from '@/components/employees/employee-table';
import { LeaveRequests } from '@/components/leaves/leave-requests';
import { NotificationCenter } from '@/components/notifications/notification-center';
import { StatCard } from '@/components/dashboard/stat-card';
import { Card } from '@/components/ui/card';
import { CalendarClock, Clock3, Users } from 'lucide-react';

const staffingData = [
  { name: 'Mon', value: 42 },
  { name: 'Tue', value: 48 },
  { name: 'Wed', value: 50 },
  { name: 'Thu', value: 47 },
  { name: 'Fri', value: 56 },
  { name: 'Sat', value: 62 },
  { name: 'Sun', value: 40 }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Employees" value="24" delta="+3 new" icon={<Users className="h-8 w-8" />} />
        <StatCard
          label="Shifts today"
          value="18"
          delta="2 open"
          icon={<CalendarClock className="h-8 w-8" />}
        />
        <StatCard label="Pending requests" value="4" delta="1 urgent" />
        <StatCard label="Weekly hours" value="612h" delta="+6% vs last week" icon={<Clock3 className="h-8 w-8" />} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <ChartCard
          title="Staffing overview"
          description="Hours scheduled per day"
          data={staffingData}
          variant="area"
          className="lg:col-span-2"
        />
        <Card className="p-4">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">Next shift</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Alice Martin • Barista • Today 12:00 - 18:00
          </p>
          <div className="mt-4 rounded-xl bg-gradient-to-br from-brand-50 to-white p-4 text-sm text-slate-700 shadow-inner dark:from-slate-800 dark:to-slate-900 dark:text-slate-200">
            Publish this week's schedule to notify the team.
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <EmployeeTable />
        <div className="space-y-4">
          <LeaveRequests />
          <NotificationCenter />
        </div>
      </div>
    </div>
  );
}
