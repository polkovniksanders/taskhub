import { timeRanges } from '@/app/dashboard/project-chart/data/project-chart-data';
import Chevron from '@/components/ui/chevron/Chevron';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import SubTitle from '@/components/ui/typography/SubTitle';
import type { DropdownProps } from '@/shared/interfaces/commone.interface';
import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import { useDropdown } from '@/hooks/useDropdown';

interface ProjectChartHeaderProps {
  onChange: (range: DropdownProps) => void;
  period: DropdownProps;
}
export default function ProjectChartHeader({ onChange, period }: ProjectChartHeaderProps) {
  const { dropdownRef, toggleDropdown, isOpen } = useDropdown();

  const rangeChange = (range: DropdownProps) => {
    onChange(range);
    toggleDropdown();
  };

  return (
    <div className='flex items-center justify-between mb-6'>
      <SubTitle title={'Projects Statistic'} />

      <div className='relative' ref={dropdownRef}>
        <SecondaryButton onClick={toggleDropdown}>
          {period.label} <Chevron isOpen={isOpen} />
        </SecondaryButton>

        <Dropdown
          anchorRef={dropdownRef}
          onSelect={rangeChange}
          list={timeRanges}
          isOpen={isOpen}
          setIsOpen={toggleDropdown}
          activeValue={period.value}
        />
      </div>
    </div>
  );
}
