'use client';
import React, { useEffect, useState } from 'react';
import { NavInterface, navLinks } from '@/interfaces/navInterface';
import { NAV_FIXED_THRESHOLD, NAV_SHOW_THRESHOD } from '@/utils/constants';

export default function Navbar() {
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState(getCurrentPage());

  const handleScroll = () => {
    setWindowScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentPage(getCurrentPage());
  }, []);

  function getCurrentPage() {
    const currentPath: string = window.location.pathname;
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
              className="text-navLinks opacity-95 font-subHeading"
              key={navPage.name}
            >
              <a href={navPage.url}>
                <span
                  className={` hover:text-white
                  ${
                    currentPage === navPage.url.split('/')[1]
                      ? windowScrollY < NAV_FIXED_THRESHOLD
                        ? 'border rounded-full px-5 py-2'
                        : 'border rounded-full px-3 py-2'
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
