'use client';

import Image from 'next/image';
import { MessageSquareMore, Link, Image as IconImage, CalendarClock } from 'lucide-react';

import type { TaskProps } from '@/shared/interfaces/tasks.interface';
import TaskFooterIcons from '@/app/dashboard/last-tasks/TaskFooterIcons';
import TaskActions from '@/app/dashboard/last-tasks/TaskActions';
import Card from '@/components/ui/card/Card';
import LastTaskIcon from '@/app/dashboard/last-tasks/LastTaskIcon';
import ProgressBar from '@/components/ui/progressBar/ProgressBar';
import { ICON_SIZES } from '@/constants/constants';
import { getDueDateColor } from '@/utils/getDueColor';

export default function Task({ task }: { task: TaskProps }) {
  const completedCount = task.subtasks.filter(item => item.isDone).length;
  const totalCount = task.subtasks.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  return (
    <Card>
      <div className='flex items-start justify-between gap-2 sm:gap-0 w-full'>
        <div className='flex gap-2 sm:gap-3 items-center w-full'>
          <div className={'flex flex-col gap-2 w-full'}>
            <div className='font-semibold text-base sm:text-lg leading-5'>{task.title}</div>

            <div className={'flex flex-row justify-between'}>
              <div className='text-gray-400 flex flex-row items-center gap-1 text-xs sm:text-sm'>
                <LastTaskIcon status={task.status} />
                <CalendarClock className={getDueDateColor(task.dueDate)} size={ICON_SIZES.medium} />
                {+task.dueDate} days
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
          </div>
        </div>
      </div>
      <ProgressBar progress={progress} />
      <div className='flex items-center justify-between mt-2'>
        <div className='flex items-center gap-1 sm:gap-2 text-gray-400 text-sm sm:text-base'>
          <TaskFooterIcons icon={MessageSquareMore} count={task.comments.length || 0} />
          <TaskFooterIcons icon={Link} count={task.links.length || 0} />
          <TaskFooterIcons icon={IconImage} count={task.resources.length || 0} />
        </div>

        <TaskActions taskId={task.id} />
      </div>
    </Card>
  );
}
