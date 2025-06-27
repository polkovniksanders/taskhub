import { useEffect, useRef, useState } from 'react';
import type { TimeRageProps } from '@/app/dashboard/project-chart/project-chart.interface';
import { timeRanges } from '@/app/dashboard/project-chart/project-chart-data';
import Chevron from '@/components/ui/chevron/Chevron';

interface ProjectChartHeaderProps {
  onChange: (range: TimeRageProps) => void;
  period: TimeRageProps;
}
export default function ProjectChartHeader({ onChange, period }: ProjectChartHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const rangeChange = (range: TimeRageProps) => {
    onChange(range);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='flex items-center justify-between mb-6'>
      <h2 className='text-xl font-medium'>Projects Statistic</h2>
      <div className='relative' ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm rounded-2xl border border-neutral-200'
        >
          {period.label} <Chevron isOpen={isOpen} size={16} />
        </button>
        {isOpen && (
          <div
            className='absolute bg-white right-0 mt-2 w-32 rounded-2xl border border-neutral-200 py-1 z-10'
            onMouseLeave={() => setIsOpen(false)}
          >
            {timeRanges.map(range => (
              <button
                key={range.value}
                onClick={() => rangeChange(range)}
                className={`w-full px-3 cursor-pointer py-2 text-sm text-left transition-colors hover:text-primary ${
                  period.value === range.value ? 'text-primary font-semibold' : ''
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
