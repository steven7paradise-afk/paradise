import { Card } from '@/components/ui/card';

const sampleNotifs = [
  { message: 'Schedule published for next week', time: '5m ago' },
  { message: 'Bob accepted open shift - Mar 18, 12:00', time: '12m ago' },
  { message: 'Leave approved: Clara (Mar 17)', time: '1h ago' }
];

export const NotificationCenter = () => (
  <Card className="p-4">
    <h3 className="text-base font-semibold text-slate-900 dark:text-white">Notifications</h3>
    <div className="mt-3 space-y-3">
      {sampleNotifs.map((notif) => (
        <div
          key={notif.message}
          className="rounded-lg border border-slate-100 bg-white/50 px-3 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200"
        >
          <p>{notif.message}</p>
          <p className="text-xs text-slate-400">{notif.time}</p>
        </div>
      ))}
    </div>
  </Card>
);
