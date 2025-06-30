import React from 'react';
import SidebarHeading from '@/components/layout/sidebar/SidebarHeading';
import SidebarProfile from '@/components/layout/sidebar/SidebarProfile';
import SidebarMenu from '@/components/layout/sidebar/SidebarMenu';
import SidebarItem from '@/widgets/sidebar/SidebarItem';
import dynamic from 'next/dynamic';
import MenuSwitcher from '@/components/layout/menu-switcher/MenuSwitcher';

const SidebarProjects = dynamic(() => import('@/components/layout/sidebar/SidebarProjects'), {
  ssr: true,
});

export const Sidebar = () => {
  return (
    <aside
      role='complementary'
      aria-label='Sidebar'
      className='flex flex-col justify-start items-center p-5 bg-white dark:bg-neutral-900 gap-9'
    >
      <MenuSwitcher />
      <SidebarItem>
        <SidebarHeading title={'Account'} />
        <SidebarProfile />
      </SidebarItem>
      <SidebarItem>
        <SidebarHeading title={'Main Menu'} />
        <SidebarMenu />
      </SidebarItem>
      <SidebarItem>
        <SidebarHeading title={'Projects'} />
        <SidebarProjects />
      </SidebarItem>
    </aside>
  );
};
