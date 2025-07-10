'use client';
import { useParams } from 'next/navigation';
import GenericModal from '@/components/ui/modal/GenericModal';
import TaskForm, { type TaskEditFormProps } from '@/app/dashboard/last-tasks/TaskForm';
import { selectTaskById } from '@/store/tasksSlice';
import { useAppSelector } from '@/store';

export default function ModalPage() {
  const params = useParams();
  const { slug } = params;

  const task = useAppSelector(state => selectTaskById(state, slug as string));

  const isCreate = slug === 'create';

  const initialTask: TaskEditFormProps = {
    title: '',
    dueDate: 1,
    status: 'progress',
  };

  return (
    <GenericModal title={isCreate ? `Create task` : `Edit task ${slug}`}>
      <TaskForm task={task ?? initialTask} />
    </GenericModal>
  );
}
