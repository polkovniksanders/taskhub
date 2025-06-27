import { useState } from 'react';
import ProjectChartHeader from '@/app/dashboard/project-chart/ProjectChartHeader';
import type {
  ChartDataPoint,
  TimeRageProps,
} from '@/app/dashboard/project-chart/project-chart.interface';
import {
  dailyData,
  monthlyData,
  weeklyData,
  yearlyData,
} from '@/app/dashboard/project-chart/project-chart-data';
import Chart from '@/app/dashboard/project-chart/Chart';

type PeriodKey = 'yearly' | 'month' | 'week' | 'day';

export default function ProjectChart() {
  const [selectRange, setSelectRange] = useState<TimeRageProps>({
    label: 'Yearly',
    value: 'yearly',
  });

  const dataByPeriod: Record<PeriodKey, ChartDataPoint[]> = {
    yearly: yearlyData,
    month: monthlyData,
    week: weeklyData,
    day: dailyData,
  };

  const chartData = dataByPeriod[selectRange.value as PeriodKey] || [];

  return (
    <div className={'h-full bg-white p-5 rounded-2xl'}>
      <ProjectChartHeader period={selectRange} onChange={setSelectRange} />
      <Chart data={chartData} />
    </div>
  );
}
