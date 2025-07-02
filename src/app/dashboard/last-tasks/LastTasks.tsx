import Task from '@/components/ui/task/Task';
import LastTasksHeader from '@/app/dashboard/last-tasks/LastTasksHeader';
import { selectVisibleTasks } from '@/store/tasksSlice';
import { useAppSelector } from '@/store';

export default function LastTasks() {
  const tasks = useAppSelector(selectVisibleTasks);
  return (
    <div>
      <LastTasksHeader title={'Last Tasks'} count={tasks.length} />

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
