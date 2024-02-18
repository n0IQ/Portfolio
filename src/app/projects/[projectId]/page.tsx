import { projects } from '@/interfaces/projectInterface';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faGithub, faYoutube);

export default function ProjectView({
  params,
}: {
  params: {
    projectId: string;
  };
}) {
  const project = projects[parseInt(params.projectId) - 1];

  return (
    <div className="mt-64 max-w-7xl mx-auto">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h1 className="text-primary opacity-95 font-heading-900 text-6xl max-w-2xl font-bold">
            {project.title}
          </h1>
          <p className="text-primary opacity-95 font-content max-w-lg mt-20 text-lg font-medium">
            {project.description}
          </p>
        </div>

        <div className="col-span-1 flex flex-col justify-end">
          <div className="flex gap-24">
            <div className="">
              <hr className="w-40 text-white opacity-95" />
              <h3 className="text-white opacity-95 font-subHeading font-medium text-xl mt-5">
                Source
              </h3>
              <div className="flex mt-1">
                <a
                  href={project.youtubeLink}
                  className="transform duration-300 hover:scale-105"
                >
                  <span className="project-view-source-text">Youtube, </span>
                  <FontAwesomeIcon
                    icon={['fab', 'youtube']}
                    className="w-7 ml-5 text-contents opacity-95"
                  ></FontAwesomeIcon>
                </a>
                <a
                  href={project.githubLink}
                  className="transform duration-300 hover:scale-105"
                >
                  <span className="project-view-source-text ml-1">Github</span>
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className="w-6 ml-5 text-primary opacity-95"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div>
              <hr className="w-80 text-white opacity-95" />
              <h3 className="text-white opacity-95 font-subHeading font-medium text-xl mt-5">
                Technologies
              </h3>
              <div className="text-contents opacity-85 font-content font-normal mt-1 max-w-72">
                {project.technologies}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* images */}
      <div className="mt-32">
        <Image src={''} alt="" width={1280} height={100} />
      </div>
    </div>
  );
}
