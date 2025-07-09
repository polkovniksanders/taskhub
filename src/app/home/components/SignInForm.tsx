'use client';

import { useForm } from 'react-hook-form';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import Input from '@/components/ui/form/Input';
import { useEffect } from 'react';
import type { User } from '@/shared/interfaces/user.interface';
import { useAppDispatch } from '@/store';
import { addUser } from '@/store/userSlice';
import Field from '@/components/ui/form/Field';
import { useRouter } from 'next/navigation';
import { Pages } from '@/config/pages';

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<User>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (data: User) => {
    dispatch(addUser(data));
    router.push(Pages.DASHBOARD);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form className={'flex flex-col gap-8'} onSubmit={handleSubmit(onSubmit)}>
      <Field error={errors.name?.message}>
        <Input<User> name='name' register={register} placeholder='Please enter your name' />
      </Field>

      <Field error={errors.email?.message}>
        <Input<User> name='email' register={register} placeholder='Please enter your email' />
      </Field>

      <PrimaryButton disabled={isSubmitting}>Save</PrimaryButton>
    </form>
  );
}
