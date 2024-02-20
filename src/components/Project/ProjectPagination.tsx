'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CodeNitrixCoverImage from '../../../public/images/codenitrix_cover.png';

library.add(fab, faArrowLeft, faArrowRight);

export default function ProjectPagination({
  projectId,
}: {
  projectId: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-64 relative">
      {/* Visible on hover */}
      <div
        className={`w-full -mb-2 h-24 overflow-hidden rounded-t-lg transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={CodeNitrixCoverImage.src}
          alt="project-cover-image"
          width={256}
          height={96}
        />
      </div>

      {/* Fixed content */}
      <div className="w-64 bg-primary p-10 rounded-lg flex">
        <p className="font-subHeading font-medium text-xl mr-5">prev</p>
        <a
          href=""
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon
            icon={['fas', 'arrow-left']}
            className="w-5 mt-2 mr-5"
          />
        </a>
        <a
          href=""
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon
            icon={['fas', 'arrow-right']}
            className="w-5 mt-2 mr-5"
          />
        </a>
        <p className="font-subHeading font-medium text-xl">next</p>
      </div>

      {/* Visible on hover */}
      <div
        className={`w-full bg-primary -mt-5 rounded-lg pb-5 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="font-secondaryHeading font-medium max-w-60 text-lg pl-10">
          CodeNitrix: An Online Coding Platform
        </h3>
      </div>
    </div>
  );
}
