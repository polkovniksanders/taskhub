import React from 'react';
import type { Metadata } from 'next';
import Team from '@/app/team/Team';

export const metadata: Metadata = {
  title: 'Team',
};

export default function Page() {
  return <Team />;
}
