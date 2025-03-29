import { CalendarClock, LayoutDashboard, UserRoundPen } from 'lucide-react';

export const patientsNav = [
  {
    label: 'Dashboard',
    url: '/patient/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Book Appointment',
    url: '/patient/book-appointment',
    icon: CalendarClock,
  },
  {
    label: 'Profile',
    url: '/patient/profile',
    icon: UserRoundPen,
  },
];
