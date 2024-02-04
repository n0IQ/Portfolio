import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import CodeNitrixCoverImage from '../../../public/images/codenitrix_cover.png';
import Image from 'next/image';

library.add(fab, faGithub, faYoutube, faLink);

export default function BigProjectCard() {
  return (
    <div className="mt-16 max-w-screen-md border rounded-xl overflow-hidden relative group">
      <div>
        <Image
          src={CodeNitrixCoverImage}
          alt="codenitrix-cover-image"
          width={1000}
          height={0}
          quality={100}
        />
      </div>
      <div className="py-8 group-hover:block">
        <h3 className="font-subHeading text-2xl px-8">
          CodeNitrix - A Coding Assessment Platform
        </h3>
        {/* description and links on hover */}
        <div className="hidden group-hover:block absolute top-0 left-0 p-8 w-full h-full bg-[#000000bf]">
          <h3 className="font-subHeading-900 text-2xl text-white font-bold max-w-2xl">
            CodeNitrix - A Coding Assessment Platform
          </h3>
          <p className="text-white font-content max-w-2xl py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="">
            <p className="text-white font-subHeading font-bold text-xl mt-12 transform hover:scale-105 hover:translate-x-5 duration-300 hover:text-yellow-500">
              Show Project
            </p>
          </a>
          <hr className="mt-2" />

          <ul className="flex mt-5 -ml-0.5">
            <li className="w-8 text-white mx-2">
              <a href="">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
            <li className="w-8 text-white mx-2 mt-0.5">
              <a href="">
                <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a>
            </li>
            <li className="w-8 text-white mx-2 mt-1">
              <a href="">
                <FontAwesomeIcon icon={['fas', 'link']} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
