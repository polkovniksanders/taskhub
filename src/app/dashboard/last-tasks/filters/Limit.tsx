'use client';

import { selectTasksState, setLimit } from '@/store/tasksSlice';
import { useAppDispatch, useAppSelector } from '@/store';
import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import Chevron from '@/components/ui/chevron/Chevron';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import type { DropdownProps } from '@/shared/interfaces/commone.interface';
import { useDropdown } from '@/hooks/useDropdown';

const limits = [
  { label: '3', value: '3' },
  { label: '6', value: '6' },
  { label: '9', value: '9' },
  { label: 'All', value: '0' },
];

export default function Limit() {
  const dispatch = useAppDispatch();
  const { limit } = useAppSelector(selectTasksState);

  const { dropdownRef, toggleDropdown, isOpen } = useDropdown();

  const changeLimit = (item: DropdownProps) => {
    dispatch(setLimit(+item.value));
    toggleDropdown();
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <SecondaryButton onClick={toggleDropdown}>
        {limit === 0 ? 'All' : limit} <Chevron isOpen={isOpen} />
      </SecondaryButton>

      <Dropdown
        anchorRef={dropdownRef}
        onSelect={changeLimit}
        list={limits}
        isOpen={isOpen}
        setIsOpen={toggleDropdown}
        activeValue={limit}
      />
    </div>
  );
}
