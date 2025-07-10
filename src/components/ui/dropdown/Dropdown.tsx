import { type RefObject, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type DropdownItemBase = {
  label: string;
  value: string;
};

interface DropdownProps<T extends DropdownItemBase = DropdownItemBase> {
  isOpen: boolean;
  list: T[];
  setIsOpen: (isOpen: boolean) => void;
  onSelect: (item: T) => void;
  anchorRef: RefObject<HTMLElement | null>;
  activeValue?: string | number;
}

export default function Dropdown<T extends DropdownItemBase = DropdownItemBase>({
  isOpen,
  setIsOpen,
  list,
  onSelect,
  anchorRef,
  activeValue,
}: DropdownProps<T>) {
  const [coords, setCoords] = useState<{ left: number; top: number }>({ left: 0, top: 0 });

  useLayoutEffect(() => {
    if (isOpen && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setCoords({
        left: rect.left,
        top: rect.bottom + window.scrollY,
      });
    }
  }, [isOpen, anchorRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className='absolute bg-white dark:bg-neutral-900 mt-2 w-32 rounded-2xl border border-neutral-200 py-1 z-50 shadow-lg'
      style={{ left: coords.left, top: coords.top, position: 'absolute' }}
      onMouseLeave={() => setIsOpen(false)}
    >
      {list.map(item => (
        <button
          key={item.value}
          onClick={() => onSelect(item)}
          className={`w-full px-3 cursor-pointer py-2 text-sm text-left transition-colors hover:text-primary ${
            activeValue?.toString() === item.value.toString()
              ? 'text-primary font-bold'
              : 'text-neutral-500'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>,
    document.body,
  );
}
