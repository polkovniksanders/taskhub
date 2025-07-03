import { Edit3, Plus } from 'lucide-react';
import useModal from '@/app/dashboard/last-tasks/hooks/useModal';

export default function TaskActions({ taskId }: { taskId: string }) {
  const { open } = useModal();

  return (
    <div className='flex items-center gap-2'>
      <button className='bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-primary/80 transition'>
        <Plus size={14} />
      </button>
      <button
        onClick={() => open('/dashboard/last-tasks', taskId)}
        className='border border-primary text-primary rounded-full w-9 h-9 flex items-center justify-center hover:bg-primary/10 transition'
      >
        <Edit3 size={14} />
      </button>
    </div>
  );
}
