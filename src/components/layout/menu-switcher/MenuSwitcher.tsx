'use client';
import { Menu } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { toggleSidebar } from '@/store/sidebarSlice';

export default function MenuSwitcher() {
  const open = useSelector((state: RootState) => state.sidebar.open);
  const dispatch = useDispatch();

  /*
  if (!open) return null;
*/

  const switchMenu = () => {
    dispatch(toggleSidebar());

    console.log('switchMenu', open);
  };

  return (
    <div className={'w-fit '} onClick={switchMenu}>
      <Menu className={'cursor-pointer'} />
    </div>
  );
}
