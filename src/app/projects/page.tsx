import BigProjectCard from '@/components/Project/BigProjectCard';
import SmallProjectCard from '@/components/Project/SmallProjectCard';

export default function Projects() {
  return (
    <div className="mt-32 mx-auto max-w-screen-xl">
      <h1 className="text-4xl font-bold font-subHeading-800 mb-16">
        My Projects
      </h1>
      <div className="flex">
        <BigProjectCard />
        <SmallProjectCard />
      </div>
    </div>
  );
}
