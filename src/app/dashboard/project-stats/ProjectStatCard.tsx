import Image from 'next/image';

import type { ProjectStatsProps } from '@/app/dashboard/project-stats/project-stats.interface';
import cn from 'clsx';

interface ProjectStatCardProps {
  projectStat: ProjectStatsProps;
}
export default function ProjectStatCard({ projectStat }: ProjectStatCardProps) {
  return (
    <div className={cn(projectStat.bgColor, 'rounded-2xl p-4 relative overflow-hidden')}>
      <div className={'flex items-center gap-2 justify-between relative z-10'}>
        <div className={'flex flex-col justify-between'}>
          <span className={'text-3xl font-semibold mb-1'}>{projectStat.content}</span>
          <span className={'text-sm'}>{projectStat.label}</span>
        </div>

        <div className={'flex-shrink-0 w-fit'}>
          <Image src={projectStat.icon} alt={projectStat.label} width={90} height={90} />
        </div>
      </div>
    </div>
  );
}
