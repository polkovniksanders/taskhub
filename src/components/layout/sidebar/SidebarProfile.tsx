import { PROFILE } from '@/components/layout/sidebar/data/profile.data';
import { ChevronDown } from 'lucide-react';

export default function SidebarProfile() {
  return (
    <div className='mb-10 flex items-center gap-2.5'>
      <div className='w-8 h-8 bg-primary rounded-full shrink-0' />

      <div className='leading-snug'>
        <div className='font-medium'>{PROFILE.name}</div>
        <div className='opacity-60 text-xs font-medium'>{PROFILE.email}</div>
      </div>

      <div className='ml-1'>
        <ChevronDown size={16} className='opacity-60' />
      </div>
    </div>
  );
}
