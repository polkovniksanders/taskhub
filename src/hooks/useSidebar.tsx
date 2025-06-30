'use client';

import { usePathname } from 'next/navigation';
import { selectSidebarState } from '@/store/sidebarSlice';
import { useSelector } from 'react-redux';
import { toggleSidebar } from '@/store/sidebarSlice';

export function useSidebar(href?: string) {
  const pathname = usePathname();
  const isSidebarOpen = useSelector(selectSidebarState);

  const isSidebarItemActive = pathname === href || false;

  return { isSidebarItemActive, isSidebarOpen, toggleSidebar };
}
