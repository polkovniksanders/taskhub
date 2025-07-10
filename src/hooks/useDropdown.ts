import { useRef, useState } from 'react';

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, setIsOpen, dropdownRef, toggleDropdown };
};
