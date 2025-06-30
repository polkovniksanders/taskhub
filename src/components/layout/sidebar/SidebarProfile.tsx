'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import { generateUsers } from '@/app/users.data';
import Image from 'next/image';
import Chevron from '@/components/ui/chevron/Chevron';
import { useSidebar } from '@/hooks/useSidebar';

type UserDropdownItem = {
  label: string;
  value: string;
  id: string;
  email: string;
  image: string;
};

export default function SidebarProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const { isSidebarOpen } = useSidebar();

  const USERS = useMemo(() => generateUsers(9), []);

  const [currentUser, selectCurrentUser] = useState<UserDropdownItem | null>(null);

  useEffect(() => {
    if (USERS.length > 0) {
      const randomIndex = Math.floor(Math.random() * USERS.length);
      const randomUser = USERS[randomIndex];
      selectCurrentUser({
        label: randomUser.name,
        value: randomUser.email,
        ...randomUser,
      });
    }
  }, [USERS]);

  const handleSelectUser = (item: UserDropdownItem) => {
    selectCurrentUser({ ...item });
  };

  if (!currentUser) return null;

  return (
    <div
      ref={anchorRef}
      onClick={() => setIsOpen(!isOpen)}
      className='relative cursor-pointer flex items-center gap-2.5'
    >
      <Dropdown<UserDropdownItem>
        onSelect={handleSelectUser}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        list={USERS.map(user => ({
          label: user.name,
          value: user.email,
          ...user,
        }))}
        anchorRef={anchorRef}
      />

      <Image
        className='rounded-2xl'
        width={32}
        height={32}
        src={currentUser.image || ''}
        alt={currentUser.label}
      />

      {isSidebarOpen && (
        <div className='leading-snug'>
          <div className='font-medium'>{currentUser?.label}</div>
          <div className='opacity-60 text-xs font-medium'>{currentUser?.value}</div>
        </div>
      )}

      {isSidebarOpen && (
        <div className='ml-1'>
          <Chevron isOpen={isOpen} size={16} />
        </div>
      )}
    </div>
  );
}
