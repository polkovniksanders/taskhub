import { PROJECT_STATS_DATA } from '@/app/dashboard/project-stats/data/projects-stat.data';
import ProjectStatCard from '@/app/dashboard/project-stats/ProjectStatCard';

export default function ProjectStats() {
  return (
    <div className={'flex flex-col justify-between '}>
      {PROJECT_STATS_DATA.map(projectStat => (
        <ProjectStatCard key={projectStat.id} projectStat={projectStat} />
      ))}
    </div>
  );
}
