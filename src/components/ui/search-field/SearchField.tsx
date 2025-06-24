import { Search } from 'lucide-react';

interface SearchProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}
export default function SearchField({ placeholder = 'Search', value, onChange }: SearchProps) {
  return (
    <div
      className={
        'flex items-center w-full max-w-sm px-4 py-2 bg-white rounded-full shadow-sm dark:bg-white/10'
      }
    >
      <Search size={20} className={'text-neutral-500, mr-2'} />
      <input
        className={
          'w-full bg-transparent focus:outline-none text-sm placeholder:text-neutral-400 text-neutral-800  dark:text-white'
        }
        placeholder={placeholder}
        type={'search'}
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
    </div>
  );
}
