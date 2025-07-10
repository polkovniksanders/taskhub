import cn from 'clsx';
import type { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-neutral-700 rounded-2xl p-3 sm:p-5 flex flex-col gap-3 sm:gap-5',
        className,
      )}
    >
      {children}
    </div>
  );
}
