import { useState } from 'react';
import ProjectChartHeader from '@/app/dashboard/project-chart/ProjectChartHeader';
import type {
  ChartDataPoint,
  TimeRangeProps,
} from '@/app/dashboard/project-chart/project-chart.interface';
import {
  dailyData,
  monthlyData,
  weeklyData,
  yearlyData,
} from '@/app/dashboard/project-chart/data/project-chart-data';
import Chart from '@/app/dashboard/project-chart/Chart';
import Card from '@/components/ui/card/Card';

type PeriodKey = 'year' | 'month' | 'week' | 'day';

export default function ProjectChart() {
  const [selectRange, setSelectRange] = useState<TimeRangeProps>({
    label: 'Yearly',
    value: 'year',
  });

  const dataByPeriod: Record<PeriodKey, ChartDataPoint[]> = {
    year: yearlyData,
    month: monthlyData,
    week: weeklyData,
    day: dailyData,
  };

  const chartData = dataByPeriod[selectRange.value as PeriodKey] || [];

  return (
    <Card>
      <ProjectChartHeader period={selectRange} onChange={setSelectRange} />
      <Chart data={chartData} />
    </Card>
  );
}
