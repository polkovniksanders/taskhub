import type { ProjectStatsProps } from '@/app/dashboard/project-stats/project-stats.interface';

export const PROJECT_STATS_DATA: ProjectStatsProps[] = [
  {
    id: 1,
    number: 92,
    label: 'Active Projects',
    bgColor: 'bg-violet-300',
    icon: '/images/icons/project-stats-icons/active-projects.svg',
  },
  {
    id: 2,
    number: 35,
    label: 'Active Projects',
    bgColor: 'bg-yellow-300',
    icon: '/images/icons/project-stats-icons/ongoing-projects.svg',
  },
  {
    id: 3,
    number: 1149,
    label: 'Active Projects',
    bgColor: 'bg-pink-300',
    icon: '/images/icons/project-stats-icons/working-hours.svg',
  },
];
