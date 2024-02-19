'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

library.add(fab, faArrowLeft, faArrowRight);

export default function ProjectPagination({
  projectId,
}: {
  projectId: string;
}) {
  const [hoverProjectName, setHoverProjectName] = useState('');

  return (
    <div className="w-64 p-10 bg-white rounded-lg">
      {/* Visible on hover */}
      <div className="bg-white">s</div>
      {/* Fixed content */}
      <div className="flex">
        <p className="font-subHeading font-medium text-xl mr-5">prev</p>
        <a href="" className="group">
          <FontAwesomeIcon
            icon={['fas', 'arrow-left']}
            className="w-5 mt-1 mr-5"
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={['fas', 'arrow-right']}
            className="w-5 mt-1 mr-5"
          />
        </a>

        <p className="font-subHeading font-medium text-xl">next</p>
      </div>
      {/* Visible on hover */}
      <div className="hidden bg-white group-hover:block">
        <h3 className="font-heading font-bold text-2xl mt-10">
          CodeNitrix: An Online Coding Platform
        </h3>
      </div>
    </div>
  );
}
