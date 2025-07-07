import type { PropsWithChildren } from 'react';

interface PrimaryButtonProps extends PropsWithChildren {
  onClick?: () => void;
}
export default function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className='flex cursor-pointer uppercase font-bold text-white items-center justify-center gap-2 px-3 py-3 text-sm rounded-2xl bg-primary'
    >
      {children}
    </button>
  );
}
