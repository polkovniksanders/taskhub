import React, { type PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ChevronsUp, X } from 'lucide-react';
import useModal from '@/app/dashboard/last-tasks/hooks/useModal';

interface ModalProps extends PropsWithChildren {
  readonly title: string;
  readonly headerAction?: () => void;
  readonly buttonText?: string;
}

export default function GenericModal({ children, title, buttonText, headerAction }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const { close } = useModal();

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mounted]);

  if (!mounted) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <div className='fixed inset-0 flex w-full items-end justify-end bg-black/10 z-[999]'>
      <div className='bg-white top-0 right-0 h-screen w-4/5 rounded-[30px]  mx-4 p-4 pt-0 pb-6 sm:max-w-lg'>
        <div className='flex flex-row justify-between bg-white items-center px-4 pt-2 pb-6 border-b'>
          <div className='flex gap-4 items-center'>
            {headerAction && <ChevronsUp />}
            {title && title}
          </div>
          <div onClick={close}>
            <X />
          </div>
        </div>
        <div className='mt-4 px-4 pb-4'>{children}</div>
        {buttonText && <div className='px-4'>{buttonText}</div>}
      </div>
    </div>,
    modalRoot,
  );
}
