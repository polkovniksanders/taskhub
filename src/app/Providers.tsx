'use client';

import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { store } from '@/store';

const DynamicThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
});
export default function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
        <DynamicThemeToggle />
      </ThemeProvider>
    </Provider>
  );
}
