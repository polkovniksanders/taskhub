import { useRef, useState } from 'react';
import { timeRanges } from '@/app/dashboard/project-chart/data/project-chart-data';
import Chevron from '@/components/ui/chevron/Chevron';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import SubTitle from '@/components/ui/typography/SubTitle';
import type { DropdownProps } from '@/shared/interfaces/commone.interface';

interface ProjectChartHeaderProps {
  onChange: (range: DropdownProps) => void;
  period: DropdownProps;
}
export default function ProjectChartHeader({ onChange, period }: ProjectChartHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const rangeChange = (range: DropdownProps) => {
    onChange(range);
    setIsOpen(false);
  };

  return (
    <div className='flex items-center justify-between mb-6'>
      <SubTitle title={'Projects Statistic'} />

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
