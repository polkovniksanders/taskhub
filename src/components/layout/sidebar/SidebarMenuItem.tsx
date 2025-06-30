'use client';

import Link from 'next/link';
import { useSidebar } from '@/hooks/useSidebar';
import type { MenuProps } from '@/shared/interfaces/components/menu.interface';
import cn from 'clsx';
import type { ProjectsProps } from '@/shared/interfaces/components/projects.interface';

interface SidebarMenuItem extends MenuProps, ProjectsProps {}

export default function SidebarMenuItem({ item }: { item: SidebarMenuItem }) {
  const { isSidebarItemActive, isSidebarOpen } = useSidebar(item.href);

  return (
    <li>
      <Link
        href={item.href}
        className='text-neutral-500 dark:text-white flex items-center flex-start hover:text-neutral-900 hover:dark:text-primary transition-colors pl-2'
      >
        {item.color && <div className={cn(item.color, 'w-3 h-3')} />}

        {item.icon && (
          <span className='flex items-center gap-2'>
            <item.icon
              color={isSidebarItemActive ? 'var(--color-primary)' : 'var(--color-neutral-500)'}
              size={20}
            />
          </span>
        )}

        {isSidebarOpen && (
          <span className={`ml-4 ${isSidebarItemActive ? 'text-primary font-semibold' : ''}`}>
            {item.label}
          </span>
        )}

        {item.label === 'Messages' && (
          <span className=' text-primary bg-[#DCDEF6] rounded-lg ml-4 px-2 text-xs font-medium'>
            4
          </span>
        )}
      </Link>
    </li>
  );
}
