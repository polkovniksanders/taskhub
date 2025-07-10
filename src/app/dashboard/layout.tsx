'use client';

import { Sidebar } from '@/components/layout/sidebar/Sidebar';

import type { ReactNode } from 'react';
import { useSidebar } from '@/hooks/useSidebar';
import { useAuthProtector } from '@/hooks/useAuthProtector';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isSidebarOpen } = useSidebar();
  useAuthProtector();

  return (
    <div
      className={`grid ${isSidebarOpen ? 'grid-cols-[230px_1fr]' : 'grid-cols-[80px_1fr]'} h-screen`}
    >
      <Sidebar />
      <main className='p-5 w-fit'>{children}</main>
    </div>
  );
}
