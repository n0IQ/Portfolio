import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faLinkedinIn,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CodeforcesLogo from '../../public/images/codeforces_logo.png';
import CodechefLogo from '../../public/images/codechef_logo.png';
import LeetcodeLogo from '../../public/images/leetcode_logo.png';

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
    <footer id="footer" className="mt-64 grid grid-cols-5">
      <div className="col-span-3 ml-80">
        <span className="text-contents text-xl font-content">
          {FOOTER_TRADEMARK_SYMBOL + currentDate + FOOTER_TRADEMARK_TEXT}
        </span>
      </div>
      <div className="col-span-2 flex gap-20">
        {/* Social links */}
        <ul>
          <li className="footer-social-header">
            <span>Socials</span>
          </li>
          <li className="footer-social-links">
            <a href={LINKEDIN_URL} target="_blank" className="flex">
              <span className="text-contents">LinkedIn</span>
              <FontAwesomeIcon
                icon={['fab', 'linkedin-in']}
                className="w-5 ml-2"
              />
            </a>
          </li>
          <li className="footer-social-links">
            <a href={GITHUB_URL} target="_blank" className="flex">
              <span className="text-contents">Github</span>
              <FontAwesomeIcon icon={['fab', 'github']} className="w-5 ml-2" />
            </a>
          </li>
          <li className="footer-social-links">
            <a href={TWITTER_URL} target="_blank" className="flex">
              <span className="text-contents">Twitter</span>
              <FontAwesomeIcon icon={['fab', 'twitter']} className="w-5 ml-2" />
            </a>
          </li>
          <li className="footer-social-links">
            <a href="" target="_blank" className="flex">
              <span className="text-contents">Resume</span>
              <FontAwesomeIcon icon={['fas', 'file']} className="w-4 ml-2" />
            </a>
          </li>
        </ul>
        {/* Coding Profile Links */}
        <ul className="col-span-2">
          <li className="footer-social-header">
            <span>Coding Profiles</span>
          </li>
          <li className="footer-social-links">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              target="_blank"
              className="flex"
            >
              <span className="text-contents">Codeforces</span>
              <img
                src={CodeforcesLogo.src}
                alt="codeforces-logo"
                className="wl-5 ml-2"
              />
            </a>
          </li>
          <li className="footer-social-links">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              target="_blank"
              className="flex"
            >
              <span className="text-contents">Codechef</span>
              <img src={CodechefLogo.src} className="ml-2 size-8" />
              {/* Codechef icon by Icons8 */}
            </a>
          </li>
          <li className="footer-social-links">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              target="_blank"
              className="flex"
            >
              <span className="text-contents">Leetcode</span>
              <img
                src={LeetcodeLogo.src}
                alt="leetcode-logo"
                className="ml-2"
              />
            </a>
          </li>
        </ul>
        {/* Contact Me Links */}
        <ul className="col-span-2">
          <li className="footer-social-header">
            <span>Contact</span>
          </li>
          <li className="footer-social-links">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              target="_blank"
              className="flex"
            >
              <span className="text-contents">Mail</span>
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
