import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const sampleEmployees = [
  { name: 'Alice Martin', role: 'Barista', email: 'alice@shiftflow.app', status: 'Active' },
  { name: 'Bob Smith', role: 'Server', email: 'bob@shiftflow.app', status: 'Active' },
  { name: 'Clara Lee', role: 'Sous-chef', email: 'clara@shiftflow.app', status: 'On leave' }
];

export const EmployeeTable = () => (
  <Card className="p-4">
    <div className="flex items-center justify-between">
      <h3 className="text-base font-semibold text-slate-900 dark:text-white">Employees</h3>
    </div>
    <div className="mt-4 overflow-auto">
      <table className="min-w-full text-sm">
        <thead className="text-left text-slate-500">
          <tr>
            <th className="pb-2">Name</th>
            <th className="pb-2">Role</th>
            <th className="pb-2">Email</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {sampleEmployees.map((emp) => (
            <tr key={emp.email} className="text-slate-800 dark:text-slate-200">
              <td className="py-3">{emp.name}</td>
              <td className="py-3">{emp.role}</td>
              <td className="py-3">{emp.email}</td>
              <td className="py-3">
                <Badge variant={emp.status === 'Active' ? 'success' : 'warning'}>{emp.status}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
