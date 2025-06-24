'use client';

import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';

const DynamicThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
});
export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
      <DynamicThemeToggle />
    </ThemeProvider>
  );
}
