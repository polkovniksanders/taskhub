import { useForm } from 'react-hook-form';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import type { TaskProps } from '@/shared/interfaces/tasks.interface';
import 'react-simple-toasts/dist/style.css';
import 'react-simple-toasts/dist/theme/dark.css';
import { SAVE } from '@/constants/constants';
import { useToast } from '@/hooks/useToast';

type FormValues = {
  title: string;
  status: string;
  dueDate: number;
};

export type TaskEditFormProps = Pick<TaskProps, 'title' | 'status' | 'dueDate'>;

export default function TaskEditForm({ task }: { task: TaskEditFormProps }) {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: task.title || '',
      status: task.status || '',
      dueDate: task.dueDate || 0,
    },
  });

  const onSubmit = () => {
    toast('Successfully saved!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div>
        <label className='block mb-1 font-medium'>Title</label>
        <input
          {...register('title', { required: 'Entre title' })}
          className='w-full rounded-lg border px-3 py-2'
        />
        {errors.title && <p className='text-red-500 text-sm mt-1'>{errors.title.message}</p>}
      </div>

      <div>
        <label className='block mb-1 font-medium'>Due Date</label>
        <input
          min={1}
          max={90}
          maxLength={2}
          type={'number'}
          {...register('dueDate', { required: 'Enter due number' })}
          className='w-full rounded-lg border px-3 py-2'
        />
        {errors.dueDate && <p className='text-red-500 text-sm mt-1'>{errors.dueDate.message}</p>}
      </div>

      <PrimaryButton>{SAVE}</PrimaryButton>
    </form>
  );
}
