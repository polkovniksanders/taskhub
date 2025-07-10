'use client';

import React from 'react';
import { useAppSelector } from '@/store';
import { selectUserState } from '@/store/userSlice';
import Card from '@/components/ui/card/Card';
import Image from 'next/image';
import SubTitle from '@/components/ui/typography/SubTitle';

export default function Team() {
  const { users, currentUser } = useAppSelector(selectUserState);

  if (!users) return null;

  return (
    <div className={'grid w-full '}>
      <div className={'flex flex-col gap-6 '}>
        {currentUser && (
          <div>
            <Card>
              <div className={'flex flex-row gap-6'}>
                <Image width={100} height={100} src={currentUser.image} alt={currentUser.name} />

                <div className={'flex flex-col gap-2 justify-between'}>
                  <SubTitle title={currentUser.name} />
                  {currentUser.email}
                </div>
              </div>
            </Card>
          </div>
        )}

        <div className={'grid grid-cols-1 sm:grid-cols-2 gap-6'}>
          {users.map(user => (
            <Card className={'max-w-fit'} key={user.id}>
              <div className={'flex flex-row gap-6'}>
                <Image width={50} height={50} src={user.image} alt={user.name} />

                <div className={'flex flex-col gap-2 justify-between'}>
                  <SubTitle title={user.name} />
                  {user.email}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
