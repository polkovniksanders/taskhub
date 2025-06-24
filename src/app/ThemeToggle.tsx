'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className={'mt-3.5 fixed right-8 bottom-8 z-50'}>
      <button
        className={
          'p-2 rounded-full dark:text-white bg-neutral-200 text-neutral-800 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors'
        }
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
