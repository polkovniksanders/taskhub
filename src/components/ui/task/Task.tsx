import Image from 'next/image';
import { MessageSquareMore, Link, Image as IconImage } from 'lucide-react';

import type { TaskProps } from '@/shared/interfaces/tasks.interface';
import TaskFooterIcons from '@/app/dashboard/last-tasks/TaskFooterIcons';
import TaskActions from '@/app/dashboard/last-tasks/TaskActions';

export default function Task({ task }: { task: TaskProps }) {
  const completedCount = task.subtasks.filter(item => item.isDone).length;
  const totalCount = task.subtasks.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  return (
    <div className='bg-white dark:bg-neutral-900 rounded-2xl p-3 sm:p-5 flex flex-col gap-3 sm:gap-5'>
      <div className='flex items-start justify-between gap-2 sm:gap-0'>
        <div className='flex gap-2 sm:gap-3 items-center'>
          <div className='bg-primary/20 rounded-full p-2 sm:p-3 flex items-center justify-center'>
            <task.icon className='w-5 h-5 sm:w-6 sm:h-6 text-primary' />
          </div>
          <div>
            <div className='font-semibold text-base sm:text-lg leading-5'>{task.title}</div>
            <div className='text-gray-400 text-xs sm:text-sm mt-1'>
              Due : {Math.ceil((+task.dueDate - Date.now()) / (1000 * 60 * 60 * 24))}days
            </div>
          </div>
        </div>
        <div className='flex -space-x-2 sm:-space-x-3'>
          {task.users.slice(0, 3).map(user => (
            <div key={user.id} className='border-2 border-white rounded-full'>
              <Image
                src={user.image || ''}
                alt={user.name}
                width={28}
                height={28}
                className='rounded-full object-cover sm:w-8 sm:h-8'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='w-full h-6 sm:h-7 bg-primary/10 rounded-full flex items-center relative'>
        <div
          className='h-full rounded-full bg-primary flex items-center justify-center transition-all'
          style={{
            width: `${progress}%`,
            minWidth: '2rem',
          }}
        >
          <span className='text-white text-xs sm:text-sm font-medium mx-auto'>{progress}%</span>
        </div>
      </div>

      <div className='flex items-center justify-between mt-2'>
        <div className='flex items-center gap-1 sm:gap-2 text-gray-400 text-sm sm:text-base'>
          <TaskFooterIcons icon={MessageSquareMore} count={task.comments.length || 0} />
          <TaskFooterIcons icon={Link} count={task.links.length || 0} />
          <TaskFooterIcons icon={IconImage} count={task.resources.length || 0} />
        </div>

        <TaskActions />
      </div>
    </div>
  );
}
