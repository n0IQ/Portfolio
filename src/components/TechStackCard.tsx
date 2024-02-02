import { TechstackCardInterface } from '@/interfaces/techstackInterface';

export default function TeckStackCard({
  card,
}: {
  card: TechstackCardInterface;
}) {
  return (
    <div className="max-w-80 bg-gray-100 border rounded-2xl">
      <div className="flex-1">
        <h4 className="tech-stack-card">{card.stackType}</h4>
        <div className="flex flex-wrap mt-4 ">
          {card.skills.map((skill: string, index: number) => (
            <div key={index} className="skill-card bg-white">
              {skill}
            </div>
          ))}
        </div>
        <div className="pb-3"></div>
      </div>
    </div>
  );
}
