'use client';

import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';

import type { PropsWithChildren } from 'react';
import type { RootState } from '@/store';
import { selectSidebarState } from '@/store/sidebarSlice';
import MenuSwitcher from '@/components/layout/menu-switcher/MenuSwitcher';

export default function DashboardLayout({ children }: PropsWithChildren) {
  const open = useSelector(selectSidebarState);

  return (
    <div className={`grid ${open ? 'grid-cols-[230px_1fr] ' : 'grid-cols-[80px_1fr]'} h-screen`}>
      <Sidebar />
      <main className='p-5 w-fit'>{children}</main>
    </div>
  );
}
