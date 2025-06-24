import { MAIN_MENU } from '@/components/layout/sidebar/data/main-menu.data';
import Link from 'next/link';

export default function SidebarMenu() {
  return (
    <nav className='mb-10 mt-3'>
      <ul className='space-y-4'>
        {MAIN_MENU.map(item => (
          <li key={item.href}>
            <Link
              href={item.href}
              className='text-neutral-500 dark:text-white flex items-center flex-start hover:text-neutral-900 hover:dark:text-primary transition-colors pl-2'
            >
              <span className='flex items-center gap-2'>
                <item.icon size={20} />
              </span>
              <span className={'ml-4'}>{item.label}</span>

              {item.label === 'Messages' && (
                <span className='ml-auto text-primary bg-[#DCDEF6] rounded-lg px-2 text-xs font-medium'>
                  4
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
