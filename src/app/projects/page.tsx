import ProjectCard from '@/components/Project/ProjectCard';
import {
  codeNitrixProject,
  cryptoTrackerProject,
  instaPinProject,
  jsDomGameProject,
  myPortfolioProject,
  toDoProject,
  tripBudsProject,
  urlShortenerProject,
} from '@/interfaces/projectInterface';
import { PROJECTS_HEADING } from '@/utils/constants';

export default function Projects() {
  return (
    <div className="mt-40 xl:mx-auto lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-2xl lg:ml-10">
      <h1 className="text-4xl md:text-5xl text-center lg:text-left text-lightPrimary dark:text-darkPrimary font-bold font-subHeading-800 mb-16">
        {PROJECTS_HEADING}
      </h1>
      <div className="lg:flex">
        {/* Left column */}
        <div>
          <div>
            <ProjectCard project={codeNitrixProject} isBigCard={true} />
          </div>
          <div className="lg:flex lg:gap-10">
            <div className="mt-10">
              <ProjectCard project={instaPinProject} isBigCard={false} />
            </div>
            <div className="mt-10">
              <ProjectCard project={urlShortenerProject} isBigCard={false} />
            </div>
          </div>
          <div className="mt-10">
            <ProjectCard project={tripBudsProject} isBigCard={true} />
          </div>
        </div>
        {/* Right rolumn */}
        <div className="mt-10 lg:-mt-0 lg:ml-10">
          <div>
            <ProjectCard project={myPortfolioProject} isBigCard={false} />
          </div>
          <div className="mt-10">
            <ProjectCard project={toDoProject} isBigCard={false} />
          </div>
          <div className="mt-10">
            <ProjectCard project={jsDomGameProject} isBigCard={false} />
          </div>
          <div className="mt-10">
            <ProjectCard project={cryptoTrackerProject} isBigCard={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
