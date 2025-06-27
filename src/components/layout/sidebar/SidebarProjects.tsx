import { PROJECTS } from '@/components/layout/sidebar/data/projects.data';
import React from 'react';
import SidebarMenuItem from '@/components/layout/sidebar/SidebarMenuItem';

export default function SidebarProjects() {
  return (
    <ul className={`space-y-6`}>
      {PROJECTS.map(project => (
        <SidebarMenuItem key={project.label} item={project} />
      ))}
    </ul>
  );
}
