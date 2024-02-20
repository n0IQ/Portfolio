import { TechstackCardInterface } from '@/interfaces/techstackInterface';

export default function TeckStackCard({
  card,
}: {
  card: TechstackCardInterface;
}) {
  const skillBorderColors: { [key: string]: string } = {
    'C / C++': 'border-sky-400',
    Java: 'border-amber-900',
    Javascript: 'border-yellow-500',
    Typescript: 'border-blue-500',
    'React.js': 'border-sky-800',
    'Next.js': 'border-gray-600',
    SQL: 'border-cyan-600',
    GraphQL: 'border-pink-500',
    HTML: 'border-red-500',
    CSS: 'border-indigo-600',
    'Tailwind CSS': 'border-[#0EA5E9]',
    'Spring / Springboot': 'border-green-600',
    JDBC: 'border-rose-400',
    'Hibernate / JPA': 'border-amber-400',
    'Node.js': 'border-green-300',
    'Express.js': 'border-indigo-400',
    MongoDB: 'border-emerald-400',
    MySQL: 'border-cyan-700',
    PostgreSQL: 'border-sky-900',
    DynamoDB: 'border-orange-400',
    Git: 'border-orange-600',
    Github: 'border-gray-600',
    Bitbucket: 'border-violet-600',
    AWS: 'border-red-600',
    Gherkin: 'border-purple-400',
    'Cucumber.js': 'border-green-600',
    'selenium-webdriver-js': 'border-pink-500',
  };

  return (
    <div className="max-w-80 bg-projectCardBg border rounded-2xl">
      <div className="flex-1">
        <h4 className="tech-stack-card">{card.stackType}</h4>
        <div className="flex flex-wrap mt-4">
          {card.skills.map((skill: string, index: number) => (
            <div
              key={index}
              className={`skill-card ${skillBorderColors[skill]}`}
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="pb-3"></div>
      </div>
    </div>
  );
}
