import React from 'react';
import SidebarHeading from '@/components/layout/sidebar/SidebarHeading';
import SidebarProfile from '@/components/layout/sidebar/SidebarProfile';
import SidebarMenu from '@/components/layout/sidebar/SidebarMenu';
import SidebarItem from '@/widgets/sidebar/SidebarItem';
import dynamic from 'next/dynamic';
import MenuSwitcher from '@/components/layout/menu-switcher/MenuSwitcher';
import { useSidebar } from '@/hooks/useSidebar';

const SidebarProjects = dynamic(() => import('@/components/layout/sidebar/SidebarProjects'), {
  ssr: true,
});

const DynamicThemeToggle = dynamic(() => import('../theme-toggle/ThemeToggle'), {
  ssr: false,
});

export const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <aside
      role='complementary'
      aria-label='Sidebar'
      className={`flex flex-col ${isSidebarOpen ? 'items-start ' : 'items-center'} justify-start  p-5 bg-white dark:bg-neutral-900 gap-9`}
    >
      <div className={'flex flex-row gap-2'}>
        <MenuSwitcher />
        <DynamicThemeToggle />
      </div>

      <SidebarItem>
        {isSidebarOpen && <SidebarHeading title={'Account'} />}
        <SidebarProfile />
      </SidebarItem>
      <SidebarItem>
        {isSidebarOpen && <SidebarHeading title={'Menu'} />}
        <SidebarMenu />
      </SidebarItem>
      <SidebarItem>
        {isSidebarOpen && <SidebarHeading title={'Projects'} />}
        <SidebarProjects />
      </SidebarItem>
    </aside>
  );
};
