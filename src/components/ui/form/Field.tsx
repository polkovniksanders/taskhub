'use client';
import type { PropsWithChildren } from 'react';

interface FieldProps extends PropsWithChildren {
  error?: string;
}
export default function Field({ children, error }: FieldProps) {
  return (
    <div className={'w-auto '}>
      {children}
      {error && <span className='text-red-500 text-xs'>{error}</span>}
    </div>
  );
}
