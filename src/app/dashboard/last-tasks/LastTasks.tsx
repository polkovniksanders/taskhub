import LastTasksTitle from '@/app/dashboard/last-tasks/LastTasksTitle';
import { TASKS } from '@/app/dashboard/last-tasks/last-tasks.data';
import Task from '@/components/ui/task/Task';

export default function LastTasks() {
  return (
    <div>
      <LastTasksTitle title={'Last Tasks'} count={TASKS.length} />

      <div
        className={
          'grid grid-cols-3 xl:grid-cols-3 2xl-grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6'
        }
      >
        {TASKS.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
