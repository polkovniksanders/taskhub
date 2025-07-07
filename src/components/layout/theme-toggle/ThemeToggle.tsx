import { useTheme } from 'next-themes';
import { Eye, EyeOff } from 'lucide-react';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type='button'
      aria-label='Toggle theme'
      className='cursor-pointer'
      onClick={toggleTheme}
    >
      {isDark ? <Eye /> : <EyeOff />}
    </button>
  );
}
