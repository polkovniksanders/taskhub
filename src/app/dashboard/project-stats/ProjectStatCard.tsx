import Image from 'next/image';

import type { ProjectStatsProps } from '@/app/dashboard/project-stats/project-stats.interface';
import cn from 'clsx';
import { formatMinutes } from '@/utils/format-minutes';

interface ProjectStatCardProps {
  projectStat: ProjectStatsProps;
}
export default function ProjectStatCard({ projectStat }: ProjectStatCardProps) {
  return (
    <div className={cn(projectStat.bgColor, 'rounded-2xl p-4 relative overflow-hidden')}>
      <div className={'flex items-center justify-between relative z-10'}>
        <div className={'flex flex-col'}>
          <span className={'text-4xl   font-semibold mb-1'}>
            {projectStat.id === 3 ? formatMinutes(projectStat.number) : projectStat.number}
          </span>
          <span className={'text-sm'}>{projectStat.label}</span>
        </div>

        <div className={'flex-shrink-0 ml-4'}>
          <Image src={projectStat.icon} alt={projectStat.label} width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
