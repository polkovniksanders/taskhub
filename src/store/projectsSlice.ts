import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ChartDataPoint } from '@/app/dashboard/project-chart/project-chart.interface';
import {
  dailyData,
  monthlyData,
  weeklyData,
  yearlyData,
} from '@/app/dashboard/project-chart/data/project-chart-data';
import type { RootState } from '@/store/index';
import type { PeriodKey } from '@/shared/interfaces/components/projects.interface';

interface ProjectChartState {
  dataByPeriod: Record<PeriodKey, ChartDataPoint[]>;
  selectedPeriod: PeriodKey;
}

const initialState: ProjectChartState = {
  dataByPeriod: {
    year: yearlyData,
    month: monthlyData,
    week: weeklyData,
    day: dailyData,
  },
  selectedPeriod: 'year',
};

export const projectChartSlice = createSlice({
  name: 'projectChart',
  initialState,
  reducers: {
    setSelectedPeriod(state, action: PayloadAction<PeriodKey>) {
      state.selectedPeriod = action.payload;
    },
  },
});

export const { setSelectedPeriod } = projectChartSlice.actions;

export const selectDataByPeriod = (state: RootState) => state.projectChart.dataByPeriod;
export const selectSelectedPeriod = (state: RootState) => state.projectChart.selectedPeriod;

export default projectChartSlice.reducer;
