import { CalendarArrowDown, CalendarArrowUp } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setSortDirection } from '@/store/tasksSlice';
import { ICON_SIZES } from '@/constants/constants';

export default function Sort() {
  const dispatch = useAppDispatch();
  const sortDirection = useAppSelector(state => state.tasks.sortDirection);

  const isAsc = sortDirection === 'asc';
  const Icon = isAsc ? CalendarArrowDown : CalendarArrowUp;
  const nextDirection = isAsc ? 'desc' : 'asc';

  const handleSort = () => {
    dispatch(setSortDirection(nextDirection));
  };

  return (
    <div className='flex cursor-pointer gap-2'>
      <Icon
        size={ICON_SIZES.large}
        className={'hover:text-primary text-neutral-500'}
        onClick={handleSort}
      />
    </div>
  );
}
