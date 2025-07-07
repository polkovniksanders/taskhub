import React from 'react';
import type { Metadata } from 'next';
import Schedule from '@/app/schedule/Schedule';

export const metadata: Metadata = {
  title: 'Schedule',
};

export default function Page() {
  return <Schedule />;
}
