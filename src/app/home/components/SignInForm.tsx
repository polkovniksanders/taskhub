'use client';

import { useForm } from 'react-hook-form';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import Input from '@/components/ui/form/Input';
import { useEffect } from 'react';
import type { UserAuth } from '@/shared/interfaces/user.interface';
import { useAppDispatch } from '@/store';
import { addUser } from '@/store/userSlice';
import Field from '@/components/ui/form/Field';
import { useRouter } from 'next/navigation';
import { Pages } from '@/config/pages';
import { useToast } from '@/hooks/useToast';

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<UserAuth>();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const toast = useToast();

  const onSubmit = async (data: UserAuth) => {
    const payload = {
      id: '0',
      ...data,
    };
    dispatch(addUser(payload));

    sessionStorage.setItem('user', JSON.stringify(payload));

    const password = sessionStorage.getItem('authToken');
    const hashedPassword = btoa(data.password);

    if (password === hashedPassword) {
      console.log('correct password');
      router.push(Pages.DASHBOARD);
    } else {
      toast('Incorrect password');
    }
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form className={'flex flex-col gap-8'} onSubmit={handleSubmit(onSubmit)}>
      <Field error={errors.name?.message}>
        <Input<UserAuth>
          type={'text'}
          name='name'
          register={register}
          placeholder='Please enter your name'
        />
      </Field>

      <Field error={errors.email?.message}>
        <Input<UserAuth>
          type={'email'}
          name='email'
          register={register}
          placeholder='Please enter your email'
        />
      </Field>
      <Field error={errors.password?.message}>
        <Input<UserAuth>
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
