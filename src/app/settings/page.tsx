import React from 'react';
import type { Metadata } from 'next';
import Settings from '@/app/settings/Settings';

export const metadata: Metadata = {
  title: 'Settings',
};

export default function Page() {
  return <Settings />;
}
