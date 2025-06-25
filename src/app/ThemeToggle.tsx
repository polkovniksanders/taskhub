'use client';

import { useTheme } from 'next-themes';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';

import themeSwitcher from './theme-switcher.json';
import { useRef } from 'react';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleClick = () => {
    const isDark = theme === 'dark';
    setTheme(isDark ? 'light' : 'dark');
    lottieRef.current?.setDirection(isDark ? -1 : 1);
    lottieRef.current?.stop();

    if (isDark) {
      lottieRef.current?.playSegments([0, 70], true);
    } else {
      lottieRef.current?.playSegments([71, 150], true);
    }
  };

  return (
    <div className={'mt-3.5 fixed right-8 bottom-8 z-50 cursor-pointer'}>
      <button
        /*className={
          'p-2 rounded-full dark:text-white bg-neutral-200 text-neutral-800 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors'
        }*/
        onClick={handleClick}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={themeSwitcher}
          loop={false}
          autoplay={false}
          style={{ width: 75, height: 75, pointerEvents: 'none' }}
        />
      </button>
    </div>
  );
}
