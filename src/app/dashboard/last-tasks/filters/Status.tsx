import Chevron from '@/components/ui/chevron/Chevron';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import { useState } from 'react';
import { filters } from '@/app/dashboard/last-tasks/data/last-tasks.data';
import type { DropdownProps } from '@/shared/interfaces/commone.interface';
import { setStatusFilter } from '@/store/tasksSlice';
import { useAppDispatch } from '@/store';
import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import { useDropdown } from '@/hooks/useDropdown';

export default function Status() {
  const dispatch = useAppDispatch();
  const { dropdownRef, toggleDropdown, isOpen } = useDropdown();

  const [currentFilter, setCurrentFilter] = useState({
    label: 'All',
    value: 'all',
  });

  const filterTasks = (item: DropdownProps) => {
    setCurrentFilter(item);
    dispatch(setStatusFilter(item.value));
    toggleDropdown();
  };

  return (
    <div>
      <div className='relative' ref={dropdownRef}>
        <SecondaryButton onClick={toggleDropdown}>
          {currentFilter.label} <Chevron isOpen={isOpen} />
        </SecondaryButton>

        <Dropdown
          anchorRef={dropdownRef}
          onSelect={filterTasks}
          list={filters}
          isOpen={isOpen}
          setIsOpen={toggleDropdown}
          activeValue={currentFilter.value}
        />
      </div>
    </div>
  );
}
