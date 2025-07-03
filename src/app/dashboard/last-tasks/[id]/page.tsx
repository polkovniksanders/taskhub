'use client';

import GenericModal from '@/components/ui/modal/GenericModal';
import { useAppSelector } from '@/store';
import { selectTaskById } from '@/store/tasksSlice';
import { useParams } from 'next/navigation';
import TaskEditForm from '@/app/dashboard/last-tasks/TaskForm';

export default function Page() {
  const params = useParams();
  const taskId = params.id as string;
  const task = useAppSelector(state => selectTaskById(state, taskId));

  console.log('task', task);
  if (!task) return null;

  return (
    <GenericModal title={`Edit task № ${task.id}`}>
      <TaskEditForm />
    </GenericModal>
  );
}
