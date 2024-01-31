import { TechstackCardInterface } from '@/interfaces/techstackInterface';

export default function TeckStackCard({
  card,
}: {
  card: TechstackCardInterface;
}) {
  return (
    <div className="max-w-80 bg-red-200 border rounded-lg">
      <div className="flex-1">
        <h4 className="tech-stack-card">{card.stackType}</h4>
        <div className="flex flex-wrap gap-2 mt-4">
          {card.skills.map((skill: string) => (
            <div className="skill-card">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
