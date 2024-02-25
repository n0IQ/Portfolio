import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faLinkedinIn,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CodeforcesLogo from '../../../public/images/codeforces_logo.png';
import CodechefLogo from '../../../public/images/codechef_logo.png';
import LeetcodeLogo from '../../../public/images/leetcode_logo.png';

library.add(fab, faLinkedinIn, faGithub, faTwitter, faEnvelope);

import {
  CV_LINK,
  EMAIL_ADDRESS,
  FOOTER_TRADEMARK_SYMBOL,
  FOOTER_TRADEMARK_TEXT,
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from '@/utils/constants';
import Image from 'next/image';

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer id="footer" className="mt-64 grid grid-cols-5">
      <div className="col-span-3 ml-80">
        <div className="mb-10">
          <a href={CV_LINK} target="_blank">
            <button className="bg-blue-500 hover:bg-blue-600 text-primary font-bold font-secondaryContent text-xl py-3 px-5 rounded-md">
              Download CV
            </button>
          </a>
        </div>
        <span className="text-contents text-xl font-content">
          {FOOTER_TRADEMARK_SYMBOL + currentDate + FOOTER_TRADEMARK_TEXT}
        </span>
      </div>

      <div className="col-span-2 flex gap-20">
        {/* Social links */}
        <ul>
          <li className="footer-social-header">
            <span className="text-contents font-bold">Socials</span>
          </li>
          <li className="footer-social-links">
            <a href={LINKEDIN_URL} target="_blank" className="flex">
              <span className="text-contents footer-social-links-text">
                LinkedIn
              </span>
              <FontAwesomeIcon
                icon={['fab', 'linkedin-in']}
                className="w-5 ml-2 text-contents"
              />
            </a>
          </li>
          <li className="footer-social-links">
            <a href={GITHUB_URL} target="_blank" className="flex">
              <span className="text-contents footer-social-links-text">
                Github
              </span>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                className="w-5 ml-2 text-contents"
              />
            </a>
          </li>
          <li className="footer-social-links">
            <a href={TWITTER_URL} target="_blank" className="flex">
              <span className="text-contents footer-social-links-text">
                Twitter
              </span>
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                className="w-5 ml-2 text-contents"
              />
            </a>
          </li>
        </ul>
        {/* Coding Profile Links */}
        <ul className="col-span-2">
          <li className="footer-social-header">
            <span className="text-contents font-bold">Coding Profiles</span>
          </li>
          <li className="footer-social-links">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              target="_blank"
              className="flex"
            >
              <span className="text-contents footer-social-links-text">
                Codeforces
              </span>
              <Image
                src={CodeforcesLogo.src}
                width={20}
                height={100}
                alt="codeforces-logo"
                className="ml-2"
              />
            </a>
          </li>
          <li className="footer-social-links">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              target="_blank"
              className="flex"
            >
              <span className="text-contents footer-social-links-text">
                Codechef
              </span>
              <Image
                src={CodechefLogo.src}
                width={32}
                height={32}
                alt="codechef-logo"
                className="ml-2 size-8 bg-gray-300"
              />
              {/* Codechef icon by Icons8 */}
            </a>
          </li>
          <li className="footer-social-links">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              target="_blank"
              className="flex"
            >
              <span className="text-contents footer-social-links-text">
                Leetcode
              </span>
              <Image
                src={LeetcodeLogo.src}
                width={30}
                height={20}
                alt="leetcode-logo"
                className="ml-2 bg-white"
              />
            </a>
          </li>
        </ul>
        {/* Contact Me Links */}
        <ul className="col-span-2">
          <li className="footer-social-header">
            <span className="text-contents font-bold">Contact</span>
          </li>
          <li className="footer-social-links">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              target="_blank"
              className="flex"
            >
              <span className="text-contents footer-social-links-text">
                Mail
              </span>
              <FontAwesomeIcon
                icon={['fas', 'envelope']}
                className="w-5 ml-2 text-contents"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-64"></div>
    </footer>
  );
}
