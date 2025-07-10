import { useState } from 'react';
import SignInForm from '@/app/home/components/SignInForm';
import SignUpForm from '@/app/home/components/SignUpForm';
import SubTitle from '@/components/ui/typography/SubTitle';

export default function Sign() {
  const [switchForm, setSwitchForm] = useState<'signIn' | 'signUp'>('signIn');

  return (
    <div className='w-[400px]  p-6 bg-white rounded shadow flex flex-col gap-4'>
      <SubTitle title={switchForm === 'signIn' ? 'Sign In' : 'Sign Up'} />
      <p className='my-4'>
        {switchForm === 'signIn'
          ? "It's forever free and only takes less a minute"
          : 'Create your account to get started'}
      </p>

      {switchForm === 'signIn' ? <SignInForm /> : <SignUpForm />}

      <div className='flex justify-between items-center mt-4'>
        <p
          className='text-sm text-blue-400 cursor-pointer'
          onClick={() => setSwitchForm(switchForm === 'signIn' ? 'signUp' : 'signIn')}
        >
          {switchForm === 'signIn'
            ? 'New user? Create account'
            : 'Already have an account? Sign In'}
        </p>
      </div>
    </div>
  );
}
