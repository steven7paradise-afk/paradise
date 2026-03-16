import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const sampleLeaves = [
  { name: 'Alice Martin', type: 'Vacation', range: 'Mar 18 - Mar 20', status: 'pending' },
  { name: 'Clara Lee', type: 'Sick', range: 'Mar 17', status: 'approved' }
];

export const LeaveRequests = () => (
  <Card className="p-4">
    <div className="flex items-center justify-between">
      <h3 className="text-base font-semibold text-slate-900 dark:text-white">Leave requests</h3>
    </div>
    <div className="mt-4 space-y-3">
      {sampleLeaves.map((leave) => (
        <div key={leave.name} className="flex items-center justify-between rounded-lg border border-slate-100 p-3 dark:border-slate-800">
          <div>
            <p className="font-medium text-slate-900 dark:text-white">{leave.name}</p>
            <p className="text-xs text-slate-500">
              {leave.type} • {leave.range}
            </p>
          </div>
          <Badge
            variant={
              leave.status === 'approved' ? 'success' : leave.status === 'pending' ? 'warning' : 'muted'
            }
          >
            {leave.status}
          </Badge>
        </div>
      ))}
    </div>
  </Card>
);
