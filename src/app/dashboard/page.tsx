import React from 'react';
import type { Metadata } from 'next';
import Dashboard from '@/app/dashboard/Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Page() {
  return <Dashboard />;
}
