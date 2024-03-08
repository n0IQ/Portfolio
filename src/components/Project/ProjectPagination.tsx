'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { projects } from '@/interfaces/projectInterface';

library.add(fab, faArrowLeft, faArrowRight);

export default function ProjectPagination({
  projectId,
}: {
  projectId: number;
}) {
  const [previewProject, setPreviewProject] = useState(projects[projectId]);
  const [isHovered, setIsHovered] = useState(false);

  const showPrevProjectPreview = () => {
    if (projectId > 0) {
      setPreviewProject(projects[projectId - 1]);
      setIsHovered(true);
    }
  };

  const showNextProjectPreview = () => {
    if (projectId < projects.length - 1) {
      setPreviewProject(projects[projectId + 1]);
      setIsHovered(true);
    }
  };

  return (
    <div className="w-64 relative">
      {/* Visible on hover */}
      <div
        className={`w-full -mb-2 h-24 overflow-hidden rounded-t-lg transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={previewProject.images[0]}
          alt="project-cover-image"
          width={256}
          height={96}
        />
      </div>

      {/* Fixed content */}
      <div className="w-64 bg-[#2C2C2E] dark:bg-lightBackground p-10 rounded-lg flex">
        {projectId > 0 && (
          <div className={`flex`}>
            <p className="font-secondaryContent font-normal text-xl mr-5 text-darkPrimary dark:text-lightPrimary">
              prev
            </p>
            <a
              href={`/projects/${projectId === 0 ? projectId + 1 : projectId}`} // 0 based indexing for projectId, dont change if its 0
              onMouseEnter={() => showPrevProjectPreview()}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FontAwesomeIcon
                icon={['fas', 'arrow-left']}
                className="w-5 mt-2 mr-5 text-darkPrimary dark:text-lightPrimary"
              />
            </a>
          </div>
        )}
        {projectId < projects.length - 1 && (
          <div className="flex">
            <a
              href={`/projects/${
                projectId === projects.length - 1
                  ? projectId + 1
                  : projectId + 2
              }`}
              onMouseEnter={() => showNextProjectPreview()}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FontAwesomeIcon
                icon={['fas', 'arrow-right']}
                className="w-5 mt-2 mr-5 text-darkPrimary dark:text-lightPrimary"
              />
            </a>
            <p className="font-secondaryContent font-normal text-darkPrimary dark:text-lightPrimary text-xl">
              next
            </p>
          </div>
        )}
      </div>

      {/* Visible on hover */}
      <div
        className={`w-full h-20 bg-[#2C2C2E] dark:bg-lightBackground -mt-5 rounded-lg pb-5 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="font-secondaryHeading font-medium text-darkPrimary dark:text-lightPrimary max-w-60 text-lg pl-10">
          {previewProject.title}
        </h3>
      </div>
    </div>
  );
}
