import {
  TechstackCardInterface,
  techStacks,
} from '@/interfaces/techstackInterface';
import TeckStackCard from './TechStackCard';

export default function TeckStack() {
  return (
    <div className="mt-32">
      <h2 className="text-secondary text-center text-5xl font-subHeading-800 font-bold">
        My Skills
      </h2>

      <div className="flex justify-center gap-10 mt-16">
        {techStacks.map((card: TechstackCardInterface, index: number) => {
          return (
            <TeckStackCard key={`${card.stackType}-${index}`} card={card} />
          );
        })}
      </div>
    </div>
  );
}
