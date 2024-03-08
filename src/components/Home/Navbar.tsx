'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { NavInterface, navLinks } from '@/interfaces/navInterface';
import { NAV_FIXED_THRESHOLD, NAV_SHOW_THRESHOD } from '@/utils/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState(getCurrentPage());

  useEffect(() => {
    const handleScroll = () => {
      setWindowScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function getCurrentPage() {
    const currentPath: string = pathname;
    const paths: string[] = currentPath.split('/');
    return paths[1];
  }

  return (
    <header
      className={`default-nav ${
        windowScrollY < NAV_FIXED_THRESHOLD
          ? 'fixed-nav'
          : windowScrollY < NAV_SHOW_THRESHOD
          ? 'hide-nav'
          : 'show-nav'
      }`}
    >
      <nav>
        <ul className="flex justify-center gap-10 p-5">
          {navLinks.map((navPage: NavInterface) => (
            <li
              className="text-headingPrimary font-secondaryContent font-medium"
              key={navPage.name}
            >
              <a href={navPage.url}>
                <span
                  className={`hover:text-black dark:hover:text-darkPrimary dark:hover:text-darkText
                  ${
                    currentPage === navPage.url.split('/')[1]
                      ? windowScrollY < NAV_FIXED_THRESHOLD
                        ? 'border rounded-full border-orange-500 dark:border-darkPrimary px-5 py-2 text-black dark:text-darkPrimary'
                        : 'border rounded-full border-orange-500 dark:border-darkPrimary px-3 py-2 text-black dark:text-darkPrimary'
                      : ''
                  }
                      `}
                >
                  {navPage.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
