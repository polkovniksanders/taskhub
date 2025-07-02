import { CalendarArrowDown, CalendarArrowUp } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setSortDirection } from '@/store/tasksSlice';

export default function LastTasksSort() {
  const dispatch = useAppDispatch();
  const sortDirection = useAppSelector(state => state.tasks.sortDirection);

  const handleSort = (type: 'asc' | 'desc') => {
    dispatch(setSortDirection(type));
  };

  return (
    <div className='flex cursor-pointer gap-2'>
      {sortDirection === 'asc' ? (
        <CalendarArrowDown
          className={sortDirection === 'asc' ? 'text-primary' : 'text-muted'}
          onClick={() => handleSort('desc')}
        />
      ) : (
        <CalendarArrowUp
          className={sortDirection === 'desc' ? 'text-primary' : 'text-muted'}
          onClick={() => handleSort('asc')}
        />
      )}
    </div>
  );
}
