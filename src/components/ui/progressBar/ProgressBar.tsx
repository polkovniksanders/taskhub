interface LastTaskProgressProps {
  progress: number;
}
export default function ProgressBar({ progress }: LastTaskProgressProps) {
  return (
    <div
      className='h-12 sm:h-12 rounded-full bg-primary flex items-center justify-center transition-all relative overflow-hidden bg-stripes-animate'
      style={{
        width: `${progress}%`,
        background: `
          repeating-linear-gradient(
            90deg,
            var(--color-primary) 0 20px,
            var(--color-violet-400) 20px 40px
          )
          0 0 / 40px 40px
        `,
      }}
    >
      <span className='text-white text-xs sm:text-sm font-medium mx-auto z-10'>
        {progress === 100 ? 'Done' : `${progress}%`}
      </span>
      <div className='absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none' />
    </div>
  );
}
