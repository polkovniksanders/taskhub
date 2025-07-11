import React, { useMemo } from 'react';

interface LastTaskProgressProps {
  progress: number;
}

export default function ProgressBar({ progress }: LastTaskProgressProps) {
  const safeProgress = useMemo(() => Math.max(2, Math.min(progress, 100)), [progress]);

  return (
    <div className='w-full relative h-8'>
      <div
        role='progressbar'
        aria-valuenow={safeProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        className='w-full h-10 rounded-2xl bg-slate-800/10 shadow-sm relative overflow-hidden'
      >
        <div
          className={`
            progress-shimmer
            absolute left-0 top-0 h-full rounded-2xl
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            bg-gradient-to-r from-primary to-gray-300 shadow-md
          `}
          style={{ width: `${safeProgress}%` }}
        />
        <span className='absolute inset-0 flex items-center justify-center font-bold text-base text-slate-800 z-10 pointer-events-none select-none text-shadow'>
          {safeProgress === 100 ? 'Done' : `${safeProgress}%`}
        </span>
      </div>
    </div>
  );
}
