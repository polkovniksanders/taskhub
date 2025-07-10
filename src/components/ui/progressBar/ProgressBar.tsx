import React, { useMemo } from 'react';

interface LastTaskProgressProps {
  progress: number;
}

export default function ProgressBar({ progress }: LastTaskProgressProps) {
  const safeProgress = useMemo(() => Math.max(2, Math.min(progress, 100)), [progress]);
  return (
    <div
      role='progressbar'
      aria-valuenow={safeProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      className='w-full h-10 rounded-full bg-black/20 relative overflow-hidden'
    >
      <div
        className='h-full rounded-full transition-all duration-500 progress-stripes'
        style={{ width: `${safeProgress}%` }}
      />
      <span className='absolute inset-0 flex items-center justify-center text-md font-bold  z-10'>
        {safeProgress === 100 ? 'Done' : `${safeProgress}%`}
      </span>
    </div>
  );
}
