import { useForm } from 'react-hook-form';

const STATUS_OPTIONS = [
  { value: 'todo', label: 'To Do' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];

type FormValues = {
  title: string;
  status: string;
};

export default function TaskEditForm({
  initialTitle = '',
  initialStatus = 'todo',
  onSubmit,
}: {
  initialTitle?: string;
  initialStatus?: string;
  onSubmit: (data: FormValues) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: initialTitle,
      status: initialStatus,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div>
        <label className='block mb-1 font-medium'>Название</label>
        <input
          {...register('title', { required: 'Введите название' })}
          className='w-full rounded-lg border px-3 py-2'
        />
        {errors.title && <p className='text-red-500 text-sm mt-1'>{errors.title.message}</p>}
      </div>

      <div>
        <label className='block mb-1 font-medium'>Статус</label>
        <select
          {...register('status', { required: 'Выберите статус' })}
          className='w-full rounded-lg border px-3 py-2'
        >
          {STATUS_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.status && <p className='text-red-500 text-sm mt-1'>{errors.status.message}</p>}
      </div>

      <button type='submit' className='mt-2 bg-primary text-white rounded-lg px-4 py-2'>
        Сохранить
      </button>
    </form>
  );
}
