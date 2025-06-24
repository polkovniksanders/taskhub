import { MAIN_MENU } from '@/components/layout/sidebar/data/main-menu.data';
import Link from 'next/link';

export default function SidebarMenu() {
  return (
    <nav className={'mb-10 mt-3'}>
      <ul className={'space-y-4'}>
        {MAIN_MENU.map(item => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={
                'justify-between text-neutral-500 dark:hover:text-primary dark:text-white flex items-center hover:text-neutral-900 transition-colors pl-2'
              }
            >
              <span className={'flex items-center gap-2'}>
                <item.icon size={20} />
              </span>
              <span>{item.label}</span>

              {item.label === 'Messages' && (
                <span
                  className={
                    'text-primary bg-[#DCDEF6] rounded-lg px-2 text-xs font-medium '
                  }
                >
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
