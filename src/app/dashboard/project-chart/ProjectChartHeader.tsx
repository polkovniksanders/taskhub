import { useRef, useState } from 'react';
import type { TimeRageProps } from '@/app/dashboard/project-chart/project-chart.interface';
import { timeRanges } from '@/app/dashboard/project-chart/data/project-chart-data';
import Chevron from '@/components/ui/chevron/Chevron';
import Dropdown from '@/components/ui/dropdown/Dropdown';

interface ProjectChartHeaderProps {
  onChange: (range: TimeRageProps) => void;
  period: TimeRageProps;
}
export default function ProjectChartHeader({ onChange, period }: ProjectChartHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const rangeChange = (range: TimeRageProps) => {
    onChange(range);
    setIsOpen(false);
  };

  return (
    <div className='flex items-center justify-between mb-6'>
      <h2 className='text-xl font-medium'>Projects Statistic</h2>
      <div className='relative' ref={anchorRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm rounded-2xl border border-neutral-200'
        >
          {period.label} <Chevron isOpen={isOpen} size={16} />
        </button>
        <Dropdown
          anchorRef={anchorRef}
          onSelect={rangeChange}
          list={timeRanges}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}
