'use client';

import React, { useMemo } from 'react';
import { useAppSelector } from '@/store';
import { selectUserState } from '@/store/userSlice';
import TeamMember from '@/app/team/components/TeamMember';
import Heading from '@/components/ui/Heading';

export default function Team() {
  const { users, currentUser } = useAppSelector(selectUserState);

  const team = useMemo(
    () => users.filter(user => user.id !== currentUser?.id),
    [users, currentUser?.id],
  );

  if (!users) return null;

  return (
    <div className={'flex flex-col gap-10'}>
      <Heading>Our team</Heading>

      <div className={'grid w-full '}>
        <div className={'flex grid-cols-1 flex-col gap-6 '}>
          {currentUser && <TeamMember {...currentUser} />}

          <div className={'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
            {team.map(user => (
              <TeamMember key={user.id} {...user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
