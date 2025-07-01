import type { ChartDataPoint } from '@/app/dashboard/project-chart/project-chart.interface';
import type { DropdownProps } from '@/shared/interfaces/commone.interface';

export const yearlyData: ChartDataPoint[] = [
  { period: 'Jan', value: 1500 },
  { period: 'Feb', value: 1700 },
  { period: 'Mar', value: 2000 },
  { period: 'Apr', value: 2300 },
  { period: 'May', value: 2600 },
  { period: 'June', value: 2800 },
  { period: 'July', value: 2700 },
  { period: 'Aug', value: 2500 },
  { period: 'Sept', value: 2200 },
  { period: 'Oct', value: 2100 },
  { period: 'Nov', value: 2300 },
  { period: 'Dec', value: 2600 },
];

export const monthlyData: ChartDataPoint[] = [
  { period: 'Week 1', value: 2000 },
  { period: 'Week 2', value: 2100 },
  { period: 'Week 3', value: 2200 },
  { period: 'Week 4', value: 2300 },
  { period: 'Week 5', value: 2400 },
];

export const weeklyData: ChartDataPoint[] = [
  { period: 'Mon', value: 1800 },
  { period: 'Tue', value: 2000 },
  { period: 'Wed', value: 2500 },
  { period: 'Thur', value: 2700 },
  { period: 'Fri', value: 2600 },
  { period: 'Sat', value: 2100 },
  { period: 'Sun', value: 1900 },
];

export const dailyData: ChartDataPoint[] = [
  { period: '00:00', value: 300 },
  { period: '01:00', value: 250 },
  { period: '02:00', value: 200 },
  { period: '03:00', value: 180 },
  { period: '04:00', value: 160 },
  { period: '05:00', value: 150 },
  { period: '06:00', value: 200 },
  { period: '07:00', value: 400 },
  { period: '08:00', value: 700 },
  { period: '09:00', value: 900 },
  { period: '10:00', value: 1200 },
  { period: '11:00', value: 1400 },
  { period: '12:00', value: 1600 },
  { period: '13:00', value: 1700 },
  { period: '14:00', value: 1800 },
  { period: '15:00', value: 1900 },
  { period: '16:00', value: 2000 },
  { period: '17:00', value: 2100 },
  { period: '18:00', value: 1800 },
  { period: '19:00', value: 1400 },
  { period: '20:00', value: 1000 },
  { period: '21:00', value: 700 },
  { period: '22:00', value: 500 },
  { period: '23:00', value: 400 },
];

export const timeRanges: DropdownProps[] = [
  { label: 'Yearly', value: 'year' },
  { label: 'Monthly', value: 'month' },
  { label: 'Weekly', value: 'week' },
  { label: 'Daily', value: 'day' },
];
