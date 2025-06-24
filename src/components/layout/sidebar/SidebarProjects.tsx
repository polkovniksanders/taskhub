import { PROJECTS } from '@/components/layout/sidebar/data/projects.data';
import React from 'react';
import cn from 'clsx';

export default function SidebarProjects() {
  return (
    <div>
      <ul className={'space-y-3 pl-4 mt-2.5'}>
        {PROJECTS.map(project => (
          <li key={project.name} className='flex items-center gap-2'>
            <div className={cn(project.color, 'w-3 h-3')} />

            <span className={'text-neutral-500 dark:text-white'}>
              {project.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
