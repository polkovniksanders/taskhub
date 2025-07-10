import Image from 'next/image';
import SubTitle from '@/components/ui/typography/SubTitle';
import Card from '@/components/ui/card/Card';
import React from 'react';
import type { User } from '@/shared/interfaces/user.interface';

export default function TeamMember({ name, image, email }: User) {
  return (
    <Card className={'w-full'}>
      <div className={'flex flex-row gap-6'}>
        <Image width={50} height={50} src={image} alt={name} />

        <div className={'flex flex-col gap-2 justify-between'}>
          <SubTitle title={name} />
          {email}
        </div>
      </div>
    </Card>
  );
}
