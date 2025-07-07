'use client';

import Heading from '@/components/ui/Heading';
import SearchField from '@/components/ui/search-field/SearchField';
import React from 'react';
import ProjectStats from '@/app/dashboard/project-stats/ProjectStats';
import ProjectChart from '@/app/dashboard/project-chart/ProjectChart';
import Chat from '@/app/dashboard/chat/Chat';
import TodayTasks from '@/app/dashboard/today-tasks/TodayTasks';
import LastTasks from '@/app/dashboard/last-tasks/LastTasks';

export default function Dashboard() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[2.7fr_1fr]  gap-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <Heading>Dashboard</Heading>
          <SearchField value={''} onChange={() => {}} />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6'>
          <ProjectStats />
          <ProjectChart />
        </div>

        <LastTasks />
        <TodayTasks />
      </div>

      <div className='flex items-start justify-center min-h-[200px] lg:h-screen'>
        <Chat />
      </div>
    </div>
  );
}
