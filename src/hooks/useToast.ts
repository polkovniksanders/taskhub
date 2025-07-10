import toast, { toastConfig } from 'react-simple-toasts';
import { useEffect } from 'react';
import 'react-simple-toasts/dist/style.css';
import 'react-simple-toasts/dist/theme/dark.css';

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
