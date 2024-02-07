import BigProjectCard from '@/components/Project/BigProjectCard';
import SmallProjectCard from '@/components/Project/SmallProjectCard';

export default function Projects() {
  return (
    <div className="mt-32 mx-auto max-w-screen-2xl bg-red-300">
      <h1 className="text-4xl font-bold font-subHeading-800 mb-16">
        My Projects
      </h1>
      <div className="flex">
        <div>
          <div>
            <BigProjectCard />
          </div>
          <div className="flex gap-10">
            <div className="mt-10">
              <SmallProjectCard />
            </div>
            <div className="mt-10">
              <SmallProjectCard />
            </div>
          </div>
          <div className="mt-10">
            <BigProjectCard />
          </div>
        </div>
        {/* Right side rolumn */}
        <div className="ml-10">
          <div>
            <SmallProjectCard />
          </div>
          <div className="mt-10">
            <SmallProjectCard />
          </div>
          <div className="mt-10">
            <SmallProjectCard />
          </div>
          <div className="mt-10">
            <SmallProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}
