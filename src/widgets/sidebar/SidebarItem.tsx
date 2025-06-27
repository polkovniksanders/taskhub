import type { PropsWithChildren } from 'react';

export default function SidebarItem({ children }: PropsWithChildren) {
  return <div className={'flex flex-col gap-2'}>{children}</div>;
}
