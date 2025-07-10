import { ChevronDown, ChevronUp } from 'lucide-react';
import { ICON_SIZES } from '@/constants/constants';

interface ChevronProps {
  isOpen: boolean;
}

export default function Chevron({ isOpen }: ChevronProps) {
  return isOpen ? <ChevronDown size={ICON_SIZES.small} /> : <ChevronUp size={ICON_SIZES.small} />;
}
