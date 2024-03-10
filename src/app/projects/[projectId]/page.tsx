import Image from 'next/image';
import { projects } from '@/interfaces/projectInterface';
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
      <div className="fixed bottom-10 right-20 z-10">
        <ProjectPagination projectId={parseInt(params.projectId) - 1} />
      </div>

      <div className="mt-40 md:mt-48 xl:mt-64 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl md:mx-auto text-center md:text-left">
        <div className="md:grid md:grid-cols-2">
          <div className="md:col-span-1">
            <h1 className="font-heading-900 text-4xl mx-auto lg:mx-0 xl:text-5xl 2xl:text-6xl max-w-sm xl:max-w-2xl font-bold text-lightPrimary dark:text-darkPrimary ">
              {project.title}
            </h1>
            <p className="font-content max-w-xs lg:max-w-md xl:max-w-lg text-base md:text-xl xl:text-lg text-left mx-auto xl:mx-0 mt-12 lg:mt-20 font-medium text-lightPrimary dark:text-darkPrimary ">
              {project.description}
            </p>
          </div>

          <div className="col-span-1 flex flex-col justify-end">
            <div className="flex gap-20 md:gap-10 2xl:gap-24">
              <div className="mx-auto">
                <hr className="mt-10 w-32 md:w-32 lg:w-40 border-2 border-headingPrimary dark:border-headingPrimary" />
                <h3 className="font-secondaryContent font-medium text-base md:text-base xl:text-xl mt-5 text-lightPrimary dark:text-darkPrimary">
                  Source
                </h3>
                <div className="flex mt-1 justify-center md:justify-start">
                  <a
                    href={project.youtubeLink}
                    className="transform duration-300 hover:scale-105"
                  >
                    <p className="project-view-source-text">Youtube, </p>
                    <FontAwesomeIcon
                      icon={['fab', 'youtube']}
                      size="lg"
                      className="ml-5 text-lightPrimary dark:text-darkPrimary"
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
                      className="ml-5 text-lightPrimary dark:text-darkPrimary"
                    ></FontAwesomeIcon>
                  </a>
                </div>
              </div>
              <div>
                <hr className="w-32 md:w-32 lg:w-40 mt-10 xl:w-52 2xl:w-80 border-2 border-headingPrimary dark:border-headingPrimary" />
                <h3 className="font-secondaryContent font-medium text-base xl:text-xl mt-5 text-center md:text-left text-lightPrimary dark:text-darkPrimary">
                  Technologies
                </h3>
                <div className="mt-1 font-content font-normal max-w-32 md:max-w-32 lg:max-w-44 xl:max-w-48 2xl:max-w-72 text-sm xl:text-base text-center md:text-left text-lightPrimary dark:text-darkPrimary">
                  {project.technologies}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* images */}
        <div className="mt-20 2xl:mt-40 mx-auto ml-10 md:ml-0">
          {project.images.map((image: string, index: number) => (
            <div className="mt-5 border-2 border-gray-500" key={image + index}>
              <Image
                src={project.images[index]}
                alt=""
                width={1280}
                height={300}
                className="w-[384px] md:w-[672px] lg:w-[896px] xl:w-[1152px] 2xl:w-[1280px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
