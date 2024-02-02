import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(fab, faLinkedinIn, faGithub, faTwitter, faFile, faEnvelope);

import {
  EMAIL_ADDRESS,
  FOOTER_TRADEMARK_SYMBOL,
  FOOTER_TRADEMARK_TEXT,
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from '@/utils/constants';

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="mt-64 grid grid-cols-3">
      <div className="col-span-2 ml-80">
        <span className="text-xl font-content">
          {FOOTER_TRADEMARK_SYMBOL + currentDate + FOOTER_TRADEMARK_TEXT}
        </span>
      </div>
      <div className="col-span-1 flex gap-32">
        <ul>
          <li className="footer-social-header">
            <a>Socials</a>
          </li>
          <li className="footer-social-links">
            <a href={LINKEDIN_URL} target="_blank" className="flex">
              <span>LinkedIn</span>
              <FontAwesomeIcon
                icon={['fab', 'linkedin-in']}
                className="w-5 ml-2"
              />
            </a>
          </li>
          <li className="footer-social-links">
            <a href={GITHUB_URL} target="_blank" className="flex">
              <span>Github</span>
              <FontAwesomeIcon icon={['fab', 'github']} className="w-5 ml-2" />
            </a>
          </li>
          <li className="footer-social-links">
            <a href={TWITTER_URL} target="_blank" className="flex">
              <span>Twitter</span>
              <FontAwesomeIcon icon={['fab', 'twitter']} className="w-5 ml-2" />
            </a>
          </li>
          <li className="footer-social-links">
            <a href="" target="_blank" className="flex">
              <span>CV</span>
              <FontAwesomeIcon icon={['fas', 'file']} className="w-4 ml-2" />
            </a>
          </li>
        </ul>
        <ul className="col-span-1">
          <li className="footer-social-header">Contact</li>
          <li className="footer-social-links">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              target="_blank"
              className="flex"
            >
              <span>Mail</span>
              <FontAwesomeIcon
                icon={['fas', 'envelope']}
                className="w-5 ml-2"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-64"></div>
    </footer>
  );
}
