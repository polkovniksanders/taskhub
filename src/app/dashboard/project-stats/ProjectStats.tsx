import ProjectStatCard from '@/app/dashboard/project-stats/ProjectStatCard';
import { getProjectStatsFromChart } from '@/app/dashboard/project-stats/data/projects-stat.data';
import { useAppSelector } from '@/store';
import { selectDataByPeriod, selectSelectedPeriod } from '@/store/projectsSlice';
import { useMemo } from 'react';

export default function ProjectStats() {
  const selectedPeriod = useAppSelector(selectSelectedPeriod);
  const dataByPeriod = useAppSelector(selectDataByPeriod);

  const stats = useMemo(
    () => getProjectStatsFromChart(dataByPeriod[selectedPeriod]),
    [dataByPeriod, selectedPeriod],
  );
  return (
    <div className={'flex flex-col justify-between '}>
      {stats.map(projectStat => (
        <ProjectStatCard key={projectStat.id} {...projectStat} />
      ))}
    </div>
  );
}
