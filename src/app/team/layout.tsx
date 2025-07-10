'use client';

import { Sidebar } from '@/components/layout/sidebar/Sidebar';

import type { ReactNode } from 'react';
import { useSidebar } from '@/hooks/useSidebar';

export default function Layout({ children }: { children: ReactNode }) {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`grid ${isSidebarOpen ? 'grid-cols-[230px_1fr]' : 'grid-cols-[80px_1fr]'} h-screen`}
    >
      <Sidebar />
      <main className='p-5 w-full'>{children}</main>
    </div>
  );
}
