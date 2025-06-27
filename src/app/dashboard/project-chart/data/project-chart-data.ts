import type {
  ChartDataPoint,
  TimeRageProps,
} from '@/app/dashboard/project-chart/project-chart.interface';

export const yearlyData: ChartDataPoint[] = [
  { period: 'Jan', value: 2400 },
  { period: 'Feb', value: 2210 },
  { period: 'Mar', value: 2290 },
  { period: 'Apr', value: 2000 },
  { period: 'May', value: 2180 },
  { period: 'Jun', value: 2500 },
  { period: 'Jul', value: 2100 },
  { period: 'Aug', value: 2300 },
  { period: 'Sep', value: 2450 },
  { period: 'Oct', value: 2100 },
  { period: 'Nov', value: 2220 },
  { period: 'Dec', value: 2350 },
];

export const monthlyData: ChartDataPoint[] = [
  { period: 'w1', value: 2450 },
  { period: 'w2', value: 2100 },
  { period: 'w3', value: 2220 },
  { period: 'w4', value: 2350 },
];

export const weeklyData: ChartDataPoint[] = [
  { period: 'w1', value: 2450 },
  { period: 'w2', value: 2100 },
  { period: 'w3', value: 2220 },
  { period: 'w4', value: 2350 },
];

export const dailyData: ChartDataPoint[] = [
  { period: 'Mon', value: 100 },
  { period: 'Tue', value: 150 },
  { period: 'Wed', value: 200 },
  { period: 'Thu', value: 250 },
  { period: 'Fri', value: 90 },
  { period: 'Sat', value: 400 },
  { period: 'Sun', value: 50 },
];

export const timeRanges: TimeRageProps[] = [
  { label: 'Yearly', value: 'year' },
  { label: 'Monthly', value: 'month' },
  { label: 'Weekly', value: 'week' },
  { label: 'Dayly', value: 'day' },
];
