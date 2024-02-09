import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import CodeNitrixCoverImage from '../../../public/images/codenitrix_cover.png';
import Image from 'next/image';
import { ProjectCardInterface } from '@/interfaces/projectInterface';

library.add(fab, faGithub, faYoutube, faLink);

export default function BigProjectCard({
  project,
}: {
  project: ProjectCardInterface;
}) {
  return (
    <div className="max-w-smallCard max-h-96 border rounded-xl overflow-hidden relative group">
      <div>
        <Image
          src={CodeNitrixCoverImage}
          alt="codenitrix-cover-image"
          width={480}
          height={0}
          quality={100}
        />
      </div>
      <div className="py-8 group-hover:block">
        <h3 className="font-subHeading text-xl px-8">{project.title} </h3>
        {/* description and links on hover */}
        <div className="hidden group-hover:block absolute top-0 left-0 p-8 w-full h-full bg-[#000000bf]">
          <h3 className="font-subHeading-900 text-xl text-white font-bold max-w-2xl">
            {project.title}
          </h3>
          <p className="text-white font-content max-w-2xl py-5">
            {project.description}
          </p>
          <a href="">
            <p className="text-white font-subHeading font-bold text-xl mt-12 transform hover:scale-105 hover:translate-x-5 duration-300 hover:text-yellow-500">
              Show Project
            </p>
          </a>
          <hr />

          <ul className="flex mt-5 -ml-0.5">
            <li className="w-8 text-white mx-2">
              <a href={project.githubLink}>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
            <li className="w-8 text-white mx-2 mt-0.5">
              <a href={project.youtubeLink}>
                <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a>
            </li>
            <li className="w-8 text-white mx-2 mt-1">
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
