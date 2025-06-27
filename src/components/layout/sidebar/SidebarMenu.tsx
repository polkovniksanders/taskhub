'use client';

import { MAIN_MENU } from '@/components/layout/sidebar/data/main-menu.data';

import SidebarMenuItem from '@/components/layout/sidebar/SidebarMenuItem';

export default function SidebarMenu() {
  return (
    <nav>
      <ul className={`space-y-6`}>
        {MAIN_MENU.map(item => {
          return <SidebarMenuItem key={item.label} item={item} />;
        })}
      </ul>
    </nav>
  );
}
