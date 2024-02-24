import { projects } from '@/interfaces/projectInterface';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectPagination from '@/components/Project/ProjectPagination';
// import NotFound from '@/app/not-found/page';

library.add(fab, faGithub, faYoutube);

export default function ProjectView({
  params,
}: {
  params: {
    projectId: string;
  };
}) {
  // if (
  //   parseInt(params.projectId) < 1 ||
  //   parseInt(params.projectId) > projects.length
  // ) {
  //   return <NotFound />;
  // }

  const project = projects[parseInt(params.projectId) - 1];

  return (
    <div>
      {/* Project Pagination */}
      <div className=" fixed bottom-10 right-20 z-10">
        <ProjectPagination projectId={parseInt(params.projectId) - 1} />
      </div>

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
                <hr className="w-40 text-primary opacity-95" />
                <h3 className="text-primary opacity-95 font-subHeading font-medium text-xl mt-5">
                  Source
                </h3>
                <div className="flex mt-1">
                  <a
                    href={project.youtubeLink}
                    className="transform duration-300 hover:scale-105"
                  >
                    <p className="project-view-source-text">Youtube, </p>
                    <FontAwesomeIcon
                      icon={['fab', 'youtube']}
                      size="lg"
                      className="ml-5 text-contents opacity-95"
                    ></FontAwesomeIcon>
                  </a>
                  <a
                    href={project.githubLink}
                    className="transform duration-300 hover:scale-105"
                  >
                    <p className="project-view-source-text ml-1">Github</p>
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      size="lg"
                      className="ml-5 text-primary opacity-95"
                    ></FontAwesomeIcon>
                  </a>
                </div>
              </div>
              <div>
                <hr className="w-80 text-primary opacity-95" />
                <h3 className="text-primary opacity-95 font-subHeading font-medium text-xl mt-5">
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
        <div className="mt-40">
          {project.images.map((image: string, index: number) => (
            <div className="mt-5 border-2 border-gray-500" key={image + index}>
              <Image
                src={project.images[index]}
                alt=""
                width={1280}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
