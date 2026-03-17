export const navItems = [
  { href: '/dashboard', label: 'navDashboard', icon: 'layout' },
  { href: '/employees', label: 'navEmployees', icon: 'users' },
  { href: '/schedule', label: 'navSchedule', icon: 'calendar' },
  { href: '/leaves', label: 'navLeaves', icon: 'umbrella' },
  { href: '/reports', label: 'navReports', icon: 'bar-chart-2' },
  { href: '/settings', label: 'navSettings', icon: 'settings' }
];

export const quickActions = [
  { label: 'quickNewShift', href: '/schedule?new=shift' },
  { label: 'quickInvite', href: '/employees?modal=invite' },
  { label: 'quickLeave', href: '/leaves?modal=request' }
];
