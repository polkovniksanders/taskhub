'use client';

import Link from 'next/link';
import { useSidebarActive } from '@/hooks/useSidebarActive';
import type { MenuProps } from '@/shared/interfaces/components/menu.interface';
import cn from 'clsx';
import type { ProjectsProps } from '@/shared/interfaces/components/projects.interface';

interface SidebarMenuItem extends MenuProps, ProjectsProps {}

export default function SidebarMenuItem({ item }: { item: SidebarMenuItem }) {
  const isActive = useSidebarActive(item.href);

  return (
    <li>
      <Link
        href={item.href}
        className='text-neutral-500 dark:text-white flex items-center flex-start hover:text-neutral-900 hover:dark:text-primary transition-colors pl-2'
      >
        {item.color && <div className={cn(item.color, 'w-3 h-3')} />}

        {item.icon && (
          <span className='flex items-center gap-2'>
            <item.icon size={20} />
          </span>
        )}

        <span className={`ml-4 ${isActive ? 'text-primary font-semibold' : ''}`}>{item.label}</span>

        {item.label === 'Messages' && (
          <span className='ml-auto text-primary bg-[#DCDEF6] rounded-lg px-2 text-xs font-medium'>
            4
          </span>
        )}
      </Link>
    </li>
  );
}
