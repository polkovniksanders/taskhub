import { useForm } from 'react-hook-form';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import type { TaskProps } from '@/shared/interfaces/tasks.interface';
import { SAVE } from '@/constants/constants';
import { useToast } from '@/hooks/useToast';
import Input from '@/components/ui/form/Input';
import Field from '@/components/ui/form/Field';
import useModal from '@/app/dashboard/last-tasks/hooks/useModal';

type FormValues = {
  title: string;
  status: string;
  dueDate: number;
};

export type TaskEditFormProps = Pick<TaskProps, 'title' | 'status' | 'dueDate'>;

export default function TaskForm({ task }: { task: TaskEditFormProps }) {
  const toast = useToast();
  const { close } = useModal();

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
    close();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
      <Field error={errors.dueDate?.message}>
        <Input<FormValues>
          type={'text'}
          name='title'
          register={register}
          placeholder='Please enter title'
        />
      </Field>

      <Field error={errors.dueDate?.message}>
        <Input<FormValues>
          type={'number'}
          name='dueDate'
          register={register}
          placeholder='Please enter due date'
        />
      </Field>

      <PrimaryButton>{SAVE}</PrimaryButton>
    </form>
  );
}
