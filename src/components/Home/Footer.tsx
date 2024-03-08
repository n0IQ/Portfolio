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
import CodeforcesLogo from '../../../public/images/footer/codeforces_logo.png';
import CodechefLogo from '../../../public/images/footer/codechef_logo.png';
import LeetcodeLogo from '../../../public/images/footer/leetcode_logo.png';

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
import FooterLines from './FooterLines';

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-headingPrimary">
      <div className="mt-64 grid grid-cols-6">
        <div className="py-20 col-span-3 ml-80">
          <div className="mb-10">
            <a href={CV_LINK} target="_blank">
              <button className="bg-white hover:bg-gray-300 dark:bg-white dark:hover:bg-gray-100 text-orange-600 font-bold font-secondaryContent text-xl py-3 px-5 rounded-md">
                Download CV
              </button>
            </a>
          </div>
          <span className="text-darkText dark:text-darkText text-xl font-content font-medium">
            {FOOTER_TRADEMARK_SYMBOL + currentDate + FOOTER_TRADEMARK_TEXT}
          </span>
        </div>

        <div className="py-20 col-span-2 flex gap-20">
          {/* Social links */}
          <ul>
            <li className="footer-social-header">
              <span>Socials</span>
            </li>
            <li className="footer-social-links">
              <a href={LINKEDIN_URL} target="_blank" className="flex">
                <span className="footer-social-links-text">LinkedIn</span>
                <FontAwesomeIcon
                  icon={['fab', 'linkedin-in']}
                  className="size-5 mt-1 ml-2 footer-icons"
                />
              </a>
            </li>
            <li className="footer-social-links">
              <a href={GITHUB_URL} target="_blank" className="flex">
                <span className="footer-social-links-text">Github</span>
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  className="size-5 mt-1 ml-2 footer-icons"
                />
              </a>
            </li>
            <li className="footer-social-links">
              <a href={TWITTER_URL} target="_blank" className="flex">
                <span className="footer-social-links-text">Twitter</span>
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  className="size-5 mt-1 ml-2 footer-icons"
                />
              </a>
            </li>
          </ul>
          {/* Coding Profile Links */}
          <ul className="col-span-2">
            <li className="footer-social-header">
              <span>Coding</span>
            </li>
            <li className="footer-social-links">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                target="_blank"
                className="flex"
              >
                <span className="footer-social-links-text">Codeforces</span>
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
                <span className="footer-social-links-text">Codechef</span>
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
                <span className="footer-social-links-text">Leetcode</span>
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
              <span>Contact</span>
            </li>
            <li className="footer-social-links">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                target="_blank"
                className="flex"
              >
                <span className="footer-social-links-text">Mail</span>
                <FontAwesomeIcon
                  icon={['fas', 'envelope']}
                  className="size-5 mt-1 ml-2 footer-icons"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="mt-32 pb-32 flex items-end justify-center max-h-24">
        <div className="border-l-2 mr-10 transition-all duration-300 group-hover:h-16"></div>
      </div> */}

      <FooterLines />
    </footer>
  );
}
