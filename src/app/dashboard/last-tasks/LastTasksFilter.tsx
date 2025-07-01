import Chevron from '@/components/ui/chevron/Chevron';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import { useRef, useState } from 'react';
import { filters } from '@/app/dashboard/last-tasks/data/last-tasks.data';
import type { DropdownProps } from '@/shared/interfaces/commone.interface';
import { setStatusFilter } from '@/store/tasksSlice';
import { useAppDispatch } from '@/store';

export default function LastTasksFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [currentFilter, setCurrentFilter] = useState({
    label: 'All',
    value: 'all',
  });

  const dispatch = useAppDispatch();

  const filterTasks = (item: DropdownProps) => {
    setCurrentFilter(item);
    dispatch(setStatusFilter(item.value));
    setIsOpen(false);
  };

  return (
    <div>
      <div
        style={{
          marginLeft: '300px',
        }}
        className='relative'
        ref={anchorRef}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm rounded-2xl border border-neutral-200'
        >
          {currentFilter.label} <Chevron isOpen={isOpen} size={16} />
        </button>
        <Dropdown
          anchorRef={anchorRef}
          onSelect={filterTasks}
          list={filters}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}
