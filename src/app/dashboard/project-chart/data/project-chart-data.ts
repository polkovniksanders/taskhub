import type { ChartDataPoint } from '@/app/dashboard/project-chart/project-chart.interface';
import type { DropdownProps } from '@/shared/interfaces/commone.interface';

export const yearlyData: ChartDataPoint[] = [
  { period: '2010', value: 150 },
  { period: '2011', value: 170 },
  { period: '2012', value: 200 },
  { period: '2013', value: 230 },
  { period: '2014', value: 260 },
  { period: '2015', value: 280 },
  { period: '2016', value: 270 },
  { period: '2017', value: 250 },
  { period: '2018', value: 220 },
  { period: '2019', value: 210 },
  { period: '2020', value: 150 },
  { period: '2021', value: 260 },
  { period: '2022', value: 260 },
  { period: '2023', value: 110 },
  { period: '2024', value: 260 },
  { period: '2025', value: 100 },
];

export const monthlyData: ChartDataPoint[] = [
  { period: 'Jan', value: 150 },
  { period: 'Feb', value: 170 },
  { period: 'Mar', value: 200 },
  { period: 'Apr', value: 230 },
  { period: 'May', value: 260 },
  { period: 'June', value: 280 },
  { period: 'July', value: 270 },
  { period: 'Aug', value: 250 },
  { period: 'Sept', value: 220 },
  { period: 'Oct', value: 210 },
  { period: 'Nov', value: 230 },
  { period: 'Dec', value: 260 },
];

export const weeklyData: ChartDataPoint[] = [
  { period: 'Mon', value: 180 },
  { period: 'Tue', value: 200 },
  { period: 'Wed', value: 250 },
  { period: 'Thur', value: 270 },
  { period: 'Fri', value: 260 },
  { period: 'Sat', value: 210 },
  { period: 'Sun', value: 190 },
];

export const dailyData: ChartDataPoint[] = [
  { period: '00:00', value: 30 },
  { period: '01:00', value: 25 },
  { period: '02:00', value: 20 },
  { period: '03:00', value: 18 },
  { period: '04:00', value: 16 },
  { period: '05:00', value: 15 },
  { period: '06:00', value: 20 },
  { period: '07:00', value: 40 },
  { period: '08:00', value: 70 },
  { period: '09:00', value: 90 },
  { period: '10:00', value: 120 },
  { period: '11:00', value: 140 },
  { period: '12:00', value: 160 },
  { period: '13:00', value: 170 },
  { period: '14:00', value: 180 },
  { period: '15:00', value: 190 },
  { period: '16:00', value: 200 },
  { period: '17:00', value: 210 },
  { period: '18:00', value: 180 },
  { period: '19:00', value: 140 },
  { period: '20:00', value: 100 },
  { period: '21:00', value: 70 },
  { period: '22:00', value: 50 },
  { period: '23:00', value: 40 },
];

export const timeRanges: DropdownProps[] = [
  { label: 'Yearly', value: 'year' },
  { label: 'Monthly', value: 'month' },
  { label: 'Weekly', value: 'week' },
  { label: 'Daily', value: 'day' },
];
