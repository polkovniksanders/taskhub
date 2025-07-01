import { AlignLeft, CheckLine, Loader, ScrollText } from 'lucide-react';
import type { TaskStatus } from '@/shared/interfaces/tasks.interface';
import type { ComponentType } from 'react';

interface LastTaskIconProps {
  status: TaskStatus;
}

type IconProps = { className?: string };

const statusIconMap: Record<TaskStatus, ComponentType<IconProps>> = {
  done: CheckLine,
  progress: Loader,
  all: ScrollText,
  'not-start': AlignLeft,
};

export default function LastTaskIcon({ status }: LastTaskIconProps) {
  const Icon = statusIconMap[status];

  return (
    <div className='bg-primary/20 rounded-full p-2 sm:p-3 flex items-center justify-center'>
      <Icon className='w-5 h-5 sm:w-6 sm:h-6 text-primary' />
    </div>
  );
}
