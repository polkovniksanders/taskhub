'use client';
import { Menu } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useSidebar } from '@/hooks/useSidebar';
import { ICON_SIZES } from '@/constants/constants';

export default function MenuSwitcher() {
  const { toggleSidebar } = useSidebar();
  const dispatch = useDispatch();

  const switchMenu = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={'w-fit '} onClick={switchMenu}>
      <Menu size={ICON_SIZES.large} className={'cursor-pointer'} />
    </div>
  );
}
