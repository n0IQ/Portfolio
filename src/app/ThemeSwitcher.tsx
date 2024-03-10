'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      className="fixed -left-5 top-1/2 -rotate-90 flex  border rounded-full cursor-pointer bg-[#efefef] z-10"
      onClick={handleThemeChange}
    >
      <div
        className={`px-2 py-1 border rounded-full text-sm font-secondaryContent ${
          theme === 'dark' ? 'bg-white text-lightPrimary' : 'text-gray-500'
        }`}
      >
        Dark
      </div>
      <div
        className={`px-2 py-1 border rounded-full text-sm font-secondaryContent
          ${theme === 'light' ? 'bg-white text-lightPrimary' : 'text-gray-500'}
          `}
      >
        Light
      </div>
    </div>
  );
}
