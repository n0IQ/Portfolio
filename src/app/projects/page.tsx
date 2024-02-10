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

export default function Projects() {
  return (
    <div className="mt-32 mx-auto max-w-screen-2xl bg-red-300">
      <h1 className="text-4xl font-bold font-subHeading-800 mb-16">
        My Projects
      </h1>
      <div className="flex">
        {/* Left column */}
        <div>
          <div>
            <ProjectCard project={codeNitrixProject} isBigCard={true} />
          </div>
          <div className="flex gap-10">
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
        <div className="ml-10">
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
