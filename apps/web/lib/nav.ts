export const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: 'layout' },
  { href: '/employees', label: 'Employees', icon: 'users' },
  { href: '/schedule', label: 'Schedule', icon: 'calendar' },
  { href: '/leaves', label: 'Leaves', icon: 'umbrella' },
  { href: '/reports', label: 'Reports', icon: 'bar-chart-2' },
  { href: '/settings', label: 'Settings', icon: 'settings' }
];

export const quickActions = [
  { label: 'New shift', href: '/schedule?new=shift' },
  { label: 'Invite employee', href: '/employees?modal=invite' },
  { label: 'Request leave', href: '/leaves?modal=request' }
];
