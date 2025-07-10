import { CheckLine, Loader, Rocket, ScrollText } from 'lucide-react';
import type { TaskStatus } from '@/shared/interfaces/tasks.interface';
import type { ComponentType } from 'react';
import { ICON_SIZES } from '@/constants/constants';

interface LastTaskIconProps {
  status: TaskStatus;
}

type IconProps = { className?: string; size?: number };

const statusIconMap: Record<TaskStatus, ComponentType<IconProps>> = {
  done: CheckLine,
  progress: Loader,
  all: ScrollText,
  'not-start': Rocket,
};

export default function LastTaskIcon({ status }: LastTaskIconProps) {
  const Icon = statusIconMap[status];

  return <Icon className={'mr-2'} size={ICON_SIZES.medium} />;
}
