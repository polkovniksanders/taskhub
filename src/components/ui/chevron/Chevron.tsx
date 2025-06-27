import { ChevronDown, ChevronUp } from 'lucide-react';

interface ChevronProps {
  isOpen: boolean;
  size: number;
}

export default function Chevron({ isOpen, size = 16 }: ChevronProps) {
  return isOpen ? <ChevronDown size={size} /> : <ChevronUp size={size} />;
}
