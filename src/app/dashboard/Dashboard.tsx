'use client';

import Heading from '@/components/ui/Heading';
import SearchField from '@/components/ui/search-field/SearchField';
import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <div className={'flex items-center justify-between mb-6'}>
        <Heading>Dashboard</Heading>
        <SearchField value={''} onChange={() => {}} />
      </div>
    </div>
  );
}
