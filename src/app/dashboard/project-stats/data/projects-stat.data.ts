import type { ChartDataPoint } from '@/app/dashboard/project-chart/project-chart.interface';
import type { ProjectStatsProps } from '@/app/dashboard/project-stats/project-stats.interface';

export function getProjectStatsFromChart(data: ChartDataPoint[]): ProjectStatsProps[] {
  if (!data.length) {
    throw new Error('Empty data');
  }
  let total = 0;
  let max = data[0];
  let min = data[0];
  for (const point of data) {
    total += point.value;
    if (point.value > max.value) max = point;
    if (point.value < min.value) min = point;
  }
  return [
    {
      id: 'total',
      content: String(total),
      label: 'Total Projects',
    },
    {
      id: 'best',
      content: max.period,
      label: 'First Best Period',
    },
    {
      id: 'worst',
      content: min.period,
      label: ' Worst Period',
    },
  ];
}
