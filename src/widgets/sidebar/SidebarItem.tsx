import type { PropsWithChildren } from 'react';
import { useSidebar } from '@/hooks/useSidebar';

export default function SidebarItem({ children }: PropsWithChildren) {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className={`flex flex-col ${isSidebarOpen ? 'items-start ' : 'items-center'} gap-2`}>
      {children}
    </div>
  );
}
