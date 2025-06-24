import type { MenuProps } from '@/shared/interfaces/components/menu.interface';
import {
  CalendarDays,
  ChartNoAxesColumn,
  LayoutGrid,
  MessageCircleMore,
  NotebookText,
  Settings,
  Users,
} from 'lucide-react';
import { Pages } from '@/config/pages';

export const MAIN_MENU: MenuProps[] = [
  {
    icon: LayoutGrid,
    label: 'Dashboard',
    href: Pages.DASHBOARD,
  },
  {
    icon: MessageCircleMore,
    label: 'Messages',
    href: Pages.MESSAGES,
  },
  {
    icon: ChartNoAxesColumn,
    label: 'Insight',
    href: Pages.INSIGHT,
  },
  {
    icon: Users,
    label: 'Team',
    href: Pages.TEAM,
  },
  {
    icon: CalendarDays,
    label: 'Schedule',
    href: Pages.SCHEDULE,
  },
  {
    icon: NotebookText,
    label: 'Report',
    href: Pages.REPORT,
  },
  {
    icon: Settings,
    label: 'Settings',
    href: Pages.SETTINGS,
  },
];
