import BigProjectCard from '@/components/Project/BigProjectCard';
import SmallProjectCard from '@/components/Project/SmallProjectCard';
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
            <BigProjectCard project={codeNitrixProject} />
          </div>
          <div className="flex gap-10">
            <div className="mt-10">
              <SmallProjectCard project={instaPinProject} />
            </div>
            <div className="mt-10">
              <SmallProjectCard project={urlShortenerProject} />
            </div>
          </div>
          <div className="mt-10">
            <BigProjectCard project={tripBudsProject} />
          </div>
        </div>
        {/* Right rolumn */}
        <div className="ml-10">
          <div>
            <SmallProjectCard project={myPortfolioProject} />
          </div>
          <div className="mt-10">
            <SmallProjectCard project={toDoProject} />
          </div>
          <div className="mt-10">
            <SmallProjectCard project={jsDomGameProject} />
          </div>
          <div className="mt-10">
            <SmallProjectCard project={cryptoTrackerProject} />
          </div>
        </div>
      </div>
    </div>
  );
}
