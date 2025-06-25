'use client';

import Heading from '@/components/ui/Heading';
import SearchField from '@/components/ui/search-field/SearchField';
import React from 'react';
import ProjectStats from '@/app/dashboard/project-stats/ProjectStats';

export default function Dashboard() {
  return (
    <div className={'grid grid-cols-[2.7fr_1fr]'}>
      <div>
        <div className={'flex items-center justify-between mb-6'}>
          <Heading>Dashboard</Heading>
          <SearchField value={''} onChange={() => {}} />
        </div>

        <div className={'grid grid-cols-[25%_75%] gap-6'}>
          <ProjectStats />
          <div> CHART </div>
        </div>
      </div>

      <div className={'p-5 bg-violet-300 h-screen flex items-center justify-center'}>CHAT</div>
    </div>
  );
}
