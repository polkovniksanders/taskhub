import React from 'react';
import type { Metadata } from 'next';
import Report from '@/app/report/Report';

export const metadata: Metadata = {
  title: 'Report',
};

export default function Page() {
  return <Report />;
}
