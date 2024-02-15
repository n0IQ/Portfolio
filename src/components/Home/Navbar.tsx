'use client';
import React, { useEffect, useState } from 'react';
import { NavInterface, navLinks } from '@/interfaces/navInterface';

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
        windowScrollY < 45
          ? 'fixed-nav'
          : windowScrollY < 475
          ? 'hide-nav'
          : 'show-nav'
      }`}
    >
      <nav>
        <ul className="flex justify-center gap-16 p-5">
          {navLinks.map((navPage: NavInterface) => (
            <li
              className="text-navLinks opacity-95 font-subHeading"
              key={navPage.name}
            >
              <a href={navPage.url}>
                <span
                  className={
                    currentPage === navPage.url.split('/')[1]
                      ? windowScrollY < 45
                        ? 'border rounded-full px-5 py-2'
                        : 'border rounded-full px-3 py-2'
                      : ''
                  }
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
