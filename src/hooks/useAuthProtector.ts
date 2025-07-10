import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Pages } from '@/config/pages';

export function useAuthProtector() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = sessionStorage.getItem('authToken');

      if (!token) {
        router.replace(Pages.HOME);
      }
    }
  }, [router]);
}
