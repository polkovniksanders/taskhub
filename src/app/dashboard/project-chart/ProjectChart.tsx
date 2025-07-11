import ProjectChartHeader from '@/app/dashboard/project-chart/ProjectChartHeader';
import Chart from '@/app/dashboard/project-chart/Chart';
import Card from '@/components/ui/card/Card';
import type { DropdownProps } from '@/shared/interfaces/commone.interface';
import { useAppSelector, useAppDispatch } from '@/store';
import { selectDataByPeriod, selectSelectedPeriod, setSelectedPeriod } from '@/store/projectsSlice';
import type { PeriodKey } from '@/shared/interfaces/components/projects.interface';

export default function ProjectChart() {
  const dispatch = useAppDispatch();

  const selectedPeriod = useAppSelector(selectSelectedPeriod);
  const dataByPeriod = useAppSelector(selectDataByPeriod);

  const selectRange: DropdownProps = {
    label: selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1) + 'ly',
    value: selectedPeriod,
  };

  const chartData = dataByPeriod[selectedPeriod as PeriodKey] || [];

  const handleChange = (dropdown: DropdownProps) => {
    dispatch(setSelectedPeriod(dropdown.value as PeriodKey));
  };

  return (
    <Card>
      <ProjectChartHeader period={selectRange} onChange={handleChange} />
      <Chart data={chartData} />
    </Card>
  );
}
