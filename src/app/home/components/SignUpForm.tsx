'use client';

import { useForm } from 'react-hook-form';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import Input from '@/components/ui/form/Input';
import { useEffect } from 'react';
import type { UserCreate } from '@/shared/interfaces/user.interface';
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
  } = useForm<UserCreate>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (data: UserCreate) => {
    dispatch(addUser(data));
    router.push(Pages.DASHBOARD);
    const hashedPassword = btoa(data.password);

    sessionStorage.setItem('authToken', hashedPassword);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form className={'flex flex-col gap-8'} onSubmit={handleSubmit(onSubmit)}>
      <Field error={errors.name?.message}>
        <Input<UserCreate>
          type={'tel'}
          name='name'
          register={register}
          placeholder='Please enter your name'
        />
      </Field>

      <Field error={errors.email?.message}>
        <Input<UserCreate>
          type={'email'}
          name='email'
          register={register}
          placeholder='Please enter your email'
        />
      </Field>

      <Field error={errors.password?.message}>
        <Input<UserCreate>
          type={'password'}
          name='password'
          register={register}
          placeholder='Please enter your password'
        />
      </Field>

      <PrimaryButton disabled={isSubmitting}>SEND</PrimaryButton>
    </form>
  );
}
