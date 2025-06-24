'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className={'mt-3.5 flex right-10 bottom-10 z-50'}>
      <button
        className={
          'p-2 rounded-full bg-neutral-50 dark:text-white text-neutral-800 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
        }
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
