'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useSidebar } from '@/hooks/useSidebar';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectUserState, setCurrentUser } from '@/store/userSlice';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Pages } from '@/config/pages';
import { ICON_SIZES } from '@/constants/constants';
import clsx from 'clsx';

export default function SidebarProfile() {
  const router = useRouter();
  const { users, currentUser } = useAppSelector(selectUserState);
  const dispatch = useAppDispatch();

  const { isSidebarOpen } = useSidebar();

  useEffect(() => {
    if (!currentUser && users.length > 0) {
      const randomIndex = Math.floor(Math.random() * users.length);
      dispatch(setCurrentUser(users[randomIndex]));
    }
  }, [currentUser, users, dispatch]);

  const handleLogout = () => {
    router.push(Pages.HOME);
    dispatch(setCurrentUser(null));
    sessionStorage.removeItem('authToken');
  };

  if (!currentUser) return null;

  return (
    <div
      className={clsx(
        'relative cursor-pointer flex items-center gap-2.5',
        isSidebarOpen ? 'flex-row' : 'flex-col',
      )}
    >
      <Image
        className='rounded-2xl'
        width={32}
        height={32}
        src={currentUser.image || ''}
        alt={currentUser.name}
      />

      {isSidebarOpen && (
        <div className='leading-snug'>
          <div className='font-medium'>{currentUser?.name}</div>
          <div className='opacity-60 text-xs font-medium'>{currentUser?.email}</div>
        </div>
      )}

      <div onClick={handleLogout} className='ml-1 cursor-pointer'>
        <LogOut size={ICON_SIZES.large} />
      </div>
    </div>
  );
}
