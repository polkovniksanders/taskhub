'use client';

import SignInForm from '@/app/home/components/SignInForm';
import SubTitle from '@/components/ui/typography/SubTitle';

export default function Home() {
  return (
    <div className={'h-screen flex items-center justify-center'}>
      <div className={'w-fit p-6 bg-white rounded shadow flex flex-col gap-4'}>
        <SubTitle title={'Sign'} />
        <p className={'my-4'}>It&#39;s forever free and only takes less a minute</p>
        <SignInForm />
      </div>
    </div>
  );
}
