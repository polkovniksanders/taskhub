import { useRouter } from 'next/navigation';

export default function useModal() {
  const router = useRouter();

  const open = (route: string, id: string) => {
    const cleanRoute = route.endsWith('/') ? route.slice(0, -1) : route;
    router.push(`${cleanRoute}/${id}`);
  };

  const close = () => {
    router.back();
  };

  return { open, close };
}
