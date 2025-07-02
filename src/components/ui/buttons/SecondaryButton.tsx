import type { PropsWithChildren } from 'react';

interface SecondaryButtonProps extends PropsWithChildren {
  onClick: () => void;
}
export default function SecondaryButton({ children, onClick }: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className='flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm rounded-2xl border border-neutral-200'
    >
      {children}
    </button>
  );
}
