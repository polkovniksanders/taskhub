import type { InputHTMLAttributes } from 'react';
import type { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface InputProps<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: Path<T>;
  register: UseFormRegister<T>;
  type: string;
}

export default function Input<T extends FieldValues>({
  name,
  register,
  type,
  ...rest
}: InputProps<T>) {
  return (
    <div className={'flex flex-col px-4 py-2 bg-white rounded-full shadow-sm dark:bg-white/10'}>
      <input
        type={type}
        {...register(name, { required: 'Field is required' })}
        {...rest}
        className={
          'w-full bg-transparent focus:outline-none text-sm placeholder:text-neutral-400 text-neutral-800  dark:text-white'
        }
      />
    </div>
  );
}
