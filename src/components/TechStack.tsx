import {
  TechstackCardInterface,
  techStackCards,
} from '@/interfaces/techstackInterface';
import TeckStackCard from './TechStackCard';

export default function TeckStack() {
  return (
    <div className="mt-32">
      <h2 className="text-center text-3xl">TechStack</h2>

      <div className="flex justify-around mt-12">
        {techStackCards.map((card: TechstackCardInterface, index: number) => {
          return (
            <TeckStackCard key={`${card.stackType}-${index}`} card={card} />
          );
        })}
      </div>
    </div>
  );
}
