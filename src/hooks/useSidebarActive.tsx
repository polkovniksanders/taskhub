'use client';

import { usePathname } from 'next/navigation';

export function useSidebarActive(href: string) {
  const pathname = usePathname();
  return pathname === href;
}
