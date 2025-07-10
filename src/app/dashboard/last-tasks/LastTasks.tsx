import Task from '@/app/dashboard/last-tasks/Task';
import LastTasksHeader from '@/app/dashboard/last-tasks/LastTasksHeader';
import { selectTasksState, selectVisibleTasks } from '@/store/tasksSlice';
import { useAppSelector } from '@/store';

export default function LastTasks() {
  const tasks = useAppSelector(selectVisibleTasks);
  const { limit } = useAppSelector(selectTasksState);

  return (
    <div>
      <LastTasksHeader title={'Last Tasks'} count={limit} />

      <div
        className={
          'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl-grid-cols-3 gap-6'
        }
      >
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
