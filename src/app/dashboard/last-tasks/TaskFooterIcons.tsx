import type { LucideIcon } from 'lucide-react';

interface TaskFooterIconsProps {
  icon: LucideIcon;
  count: number;
}

export default function TaskFooterIcons({ icon: Icon, count }: TaskFooterIconsProps) {
  return (
    <div className='flex items-center gap-1'>
      <Icon size={14} />
      <span className='text-sm text-gray-700 dark:text-white'>{count}</span>
    </div>
  );
}
