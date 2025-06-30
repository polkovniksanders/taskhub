interface LastTaskProgressProps {
  progress: number;
}
export default function LastTaskProgress({ progress }: LastTaskProgressProps) {
  return (
    <div
      className='h-12 sm:h-13 rounded-full bg-primary flex items-center justify-center transition-all relative overflow-hidden bg-stripes-animate'
      style={{
        width: `${progress}%`,
        minWidth: '2rem',
        background: `
      repeating-linear-gradient(
        -45deg,
        var(--color-primary) 0 20px,
        var(--color-violet-400) 20px 30px
      )
    `,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0',
      }}
    >
      <span className='text-white text-xs sm:text-sm font-medium mx-auto z-10'>
        {progress === 100 ? 'Done' : `${progress}%`}
      </span>
      <div className='absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none' />
    </div>
  );
}
