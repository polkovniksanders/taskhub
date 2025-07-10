import type { LucideIcon } from 'lucide-react';
import { ICON_SIZES } from '@/constants/constants';

interface TaskFooterIconsProps {
  icon: LucideIcon;
  count: number;
}

export default function TaskFooterIcons({ icon: Icon, count }: TaskFooterIconsProps) {
  return (
    <div className='flex items-center gap-1'>
      <Icon size={ICON_SIZES.small} />
      <span className='text-sm text-gray-700 dark:text-white'>{count}</span>
    </div>
  );
}
