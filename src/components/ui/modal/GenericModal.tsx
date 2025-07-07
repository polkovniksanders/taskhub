import React, { type PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronsUp, X } from 'lucide-react';
import useModal from '@/app/dashboard/last-tasks/hooks/useModal';
import Card from '@/components/ui/card/Card';

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
    <div className='fixed inset-0 z-[999] flex items-center justify-center bg-black/50 transition-opacity backdrop-blur-sm animate-fade-in'>
      <Card>
        <div className='relative rounded-3xl w-[90vw] max-w-xl sm:max-w-lg  flex flex-col animate-modal-pop'>
          <button
            onClick={close}
            className='cursor-pointer absolute top-0 right-0 p-1 rounded-full transition'
            aria-label='close'
          >
            <X size={22} />
          </button>
          <div className='flex items-center gap-3 mb-6'>
            {headerAction && (
              <button
                onClick={headerAction}
                className='text-gray-400 hover:text-primary transition'
                aria-label='Action'
              >
                <ChevronsUp />
              </button>
            )}
            <h2 className='text-lg sm:text-xl font-bold '>{title}</h2>
          </div>
          {/* Контент */}
          <div className='flex-1 overflow-y-auto custom-scroll pb-2'>{children}</div>
          {/* Кнопка действия */}
          {buttonText && (
            <div className='mt-8 flex justify-end'>
              <button
                className='bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-xl shadow transition'
                onClick={close}
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>
        {/* Анимации */}
        <style jsx global>{`
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fade-in {
            animation: fade-in 0.22s ease;
          }
          @keyframes modal-pop {
            from {
              transform: translateY(32px) scale(0.97);
              opacity: 0.7;
            }
            to {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
          }
          .animate-modal-pop {
            animation: modal-pop 0.26s cubic-bezier(0.4, 1.6, 0.6, 1);
          }
          .custom-scroll::-webkit-scrollbar {
            width: 6px;
            background: transparent;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: #e3e3e3;
            border-radius: 3px;
          }
        `}</style>
      </Card>
    </div>,
    modalRoot,
  );
}
