import React from 'react';
import {
  FOOTER_TRADEMARK_SYMBOL,
  FOOTER_TRADEMARK_TEXT,
} from '@/app/utils/constants';

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="mt-64 grid grid-cols-3">
      <div className="col-span-2 ml-80">
        <span className="text-xl">
          {FOOTER_TRADEMARK_SYMBOL + currentDate + FOOTER_TRADEMARK_TEXT}
        </span>
      </div>
      <div className="col-span-1 flex gap-32">
        <ul>
          <li className="footer-social-header">
            <a>Socials</a>
          </li>
          <li className="footer-social-links">
            <a>LinkedIn</a>
          </li>
          <li className="footer-social-links">
            <a>Github</a>
          </li>
          <li className="footer-social-links">
            <a>Twitter</a>
          </li>
          <li className="footer-social-links">
            <a>CV</a>
          </li>
        </ul>
        <ul className="col-span-1">
          <li className="footer-social-header">Contact</li>
          <li className="footer-social-links">
            <a>Mail</a>
          </li>
        </ul>
      </div>
      <div className="mt-64"></div>
    </footer>
  );
}
