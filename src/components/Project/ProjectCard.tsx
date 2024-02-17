import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import CodeNitrixCoverImage from '../../../public/images/codenitrix_cover.png';
import Image from 'next/image';
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
        isBigCard ? 'max-w-bigCard' : 'max-w-smallCard'
      } bg-projectCardBg border rounded-xl overflow-hidden relative group`}
    >
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
        <h3
          className={`font-subHeading font-bold ${
            isBigCard ? 'text-2xl' : 'text-xl'
          } text-primary px-8`}
        >
          {project.title}
        </h3>
        {/* description and links on hover */}
        <div className="hidden group-hover:block absolute top-0 left-0 p-8 w-full h-full bg-projectCardHoverBg">
          <h3
            className={`font-subHeading-900 ${
              isBigCard ? 'text-2xl' : 'text-xl'
            } text-white font-bold max-w-2xl`}
          >
            {project.title}
          </h3>
          <p
            className={`text-white font-content ${
              isBigCard ? 'text-xl max-w-4xl' : ' text-base'
            } max-w-2xl py-5`}
          >
            {project.coverDescription}
          </p>
          <a href={`/projects/${project.id}`}>
            <p
              className={`text-white font-subHeading font-bold ${
                isBigCard
                  ? 'text-xl mt-12 hover:translate-x-6'
                  : 'text-lg mt-3 hover:translate-x-3'
              } transform hover:scale-105 duration-300 hover:text-yellow-500`}
            >
              View Project
            </p>
          </a>
          <hr className="mt-2" />

          <ul className="flex mt-5 -ml-0.5">
            <li className="project-card-link-icons">
              <a href={project.githubLink}>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
            <li className="project-card-link-icons mt-0.5">
              <a href={project.youtubeLink}>
                <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a>
            </li>
            <li className="project-card-link-icons mt-1">
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
