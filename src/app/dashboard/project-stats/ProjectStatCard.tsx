import type { ProjectStatsProps } from '@/app/dashboard/project-stats/project-stats.interface';
import { ChartColumnStacked, ThumbsUp, TrendingDown } from 'lucide-react';

export default function ProjectStatCard({ id, content, label }: ProjectStatsProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'total':
        return ChartColumnStacked;
      case 'best':
        return ThumbsUp;
      case 'worst':
        return TrendingDown;
      default:
        return ChartColumnStacked;
    }
  };

  const Icon = getIcon(id);

  const bgClass = (() => {
    switch (id) {
      case 'total':
        return 'bg-[var(--color-primary)]';
      case 'best':
        return 'bg-[var(--color-success)]';
      case 'worst':
        return 'bg-[var(--color-error)]';
      default:
        return '';
    }
  })();

  return (
    <div className={`${bgClass} rounded-2xl p-3 sm:p-5 flex flex-col gap-3 sm:gap-5`}>
      <div className={'flex items-center gap-2 justify-between relative z-10'}>
        <div className={'flex flex-col justify-between'}>
          <span className={'text-3xl font-semibold mb-1'}>{content}</span>
          <span className={'text-sm'}>{label}</span>
        </div>

        <div className={`flex-shrink-0 w-fit`}>
          <Icon size={40} />
        </div>
      </div>
    </div>
  );
}
