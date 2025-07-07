import toast, { toastConfig } from 'react-simple-toasts';
import { useEffect } from 'react';

export function useToast() {
  useEffect(() => {
    toastConfig({
      theme: 'dark',
      zIndex: 1200,
      position: 'top-center',
    });
  }, []);

  return toast;
}
