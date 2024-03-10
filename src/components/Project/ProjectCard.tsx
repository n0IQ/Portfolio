import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ProjectCardInterface } from '@/interfaces/projectInterface';

library.add(fab, faGithub, faYoutube, faLink);

export default function ProjectCard({
  project,
  isBigCard,
}: {
  project: ProjectCardInterface;
  isBigCard: boolean;
}) {
  return (
    <div
      className={`${
        isBigCard
          ? 'max-w-sm md:max-w-2xl lg:max-w-bigCardLargeView xl:max-w-bigCard h-96 md:h-auto'
          : 'max-w-sm md:max-w-2xl lg:max-w-smallCardLargeView xl:max-w-smallCard lg:h-60 xl:h-64 2xl:h-smallCard'
      } mx-auto lg:mx-0 bg-projectCardBg border-2 border-gray-500 dark:border-white rounded-xl overflow-hidden relative group`}
    >
      <div>
        <Image
          src={project.images[0]}
          alt="codenitrix-cover-image"
          width={1000}
          height={350}
          quality={100}
        />
      </div>
      <div className="py-8 group-hover:block">
        <h3
          className={`font-subHeading font-bold ${
            isBigCard
              ? 'text-2xl md:text-3xl'
              : 'text-2xl md:text-3xl lg:text-xl'
          } text-primary px-8`}
        >
          {project.title}
        </h3>
        {/* description and links on hover */}
        <div className="hidden group-hover:block absolute top-0 left-0 p-8 lg:p-4 2xl:p-8 w-full h-full bg-projectCardHoverBg">
          <h3
            className={`font-subHeading-900 ${
              isBigCard
                ? 'text-sm md:text-2xl'
                : 'text-sm md:text-2xl lg:text-base 2xl:text-xl'
            } text-primary font-bold max-w-2xl`}
          >
            {project.title}
          </h3>
          <p
            className={`text-primary font-secondaryHeading font-normal  ${
              isBigCard
                ? 'text-xs md:text-base lg:text-base 2xl:text-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl'
                : 'text-xs md:text-base lg:text-xs 2xl:text-base'
            } max-w-2xl py-5 lg:py-2`}
          >
            {project.coverDescription}
          </p>
          <a href={`/projects/${project.id}`}>
            <p
              className={`text-primary font-secondaryContent font-bold ${
                isBigCard
                  ? 'text-sm md:text-lg xl:text-lg 2xl:text-xl xl:mt-12 hover:translate-x-6'
                  : 'text-sm md:text-lg lg:text-xs 2xl:text-lg mt-3 lg:mt-2 hover:translate-x-3'
              } transform hover:scale-105 duration-300 hover:text-orange-500`}
            >
              View Project
            </p>
          </a>
          <hr className="mt-2 lg:mt-1" />

          <ul className="flex mt-2 2xl:mt-5 -ml-0.5">
            <li
              className={`project-card-link-icons ${isBigCard ? '' : 'xl:w-5'}`}
            >
              <a href={project.githubLink}>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
            <li
              className={`project-card-link-icons mt-0.5 ${
                isBigCard ? '' : 'xl:w-5'
              }`}
            >
              <a href={project.youtubeLink}>
                <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a>
            </li>
            <li
              className={`project-card-link-icons mt-1 ${
                isBigCard ? '' : 'xl:w-5'
              }`}
            >
              <a href={project.projectLink}>
                <FontAwesomeIcon icon={['fas', 'link']} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
