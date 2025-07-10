'use client';

import Link from 'next/link';
import { useSidebar } from '@/hooks/useSidebar';
import type { MenuProps } from '@/shared/interfaces/components/menu.interface';
import cn from 'clsx';
import type { ProjectsProps } from '@/shared/interfaces/components/projects.interface';
import { ICON_SIZES } from '@/constants/constants';

interface SidebarMenuItem extends MenuProps, ProjectsProps {}

export default function SidebarMenuItem({ item }: { item: SidebarMenuItem }) {
  const { isSidebarItemActive, isSidebarOpen } = useSidebar(item.href);

  return (
    <li>
      <Link
        href={item.href}
        className='text-neutral-500 dark:text-white flex items-center flex-start hover:text-neutral-900 hover:dark:text-primary transition-colors'
      >
        {item.color && <div className={cn(item.color, 'w-3 h-3')} />}

        {item.icon && (
          <span className='flex items-center gap-2'>
            <item.icon
              color={isSidebarItemActive ? 'var(--color-primary)' : 'var(--color-neutral-500)'}
              size={ICON_SIZES.medium}
            />
          </span>
        )}

        {isSidebarOpen && (
          <span className={`ml-4 ${isSidebarItemActive ? 'text-primary font-semibold' : ''}`}>
            {item.label}
          </span>
        )}

        {item.label === 'Messages' && (
          <span
            className={cn(
              { absolute: !isSidebarOpen },
              'text-primary bg-[#DCDEF6] rounded-lg ml-5 px-2 text-xs font-medium',
            )}
          >
            4
          </span>
        )}
      </Link>
    </li>
  );
}
