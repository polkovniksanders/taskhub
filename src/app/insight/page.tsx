import React from 'react';
import type { Metadata } from 'next';
import Insight from '@/app/insight/Insight';

export const metadata: Metadata = {
  title: 'Insight',
};

export default function Page() {
  return <Insight />;
}
