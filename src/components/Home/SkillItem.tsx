import Image from 'next/image';

export default function SkillItem({
  skill,
}: {
  skill: { name: string; image: string };
}) {
  const selectedSkill = ['Next.js', 'Express.js', 'Github'];

  return (
    <div className="max-w-72 mb-5">
      <div className="flex justify-between mb-3">
        <div
          className={`${
            selectedSkill.includes(skill.name)
              ? 'dark:filter dark:brightness-0 dark:invert'
              : ''
          }
          `}
        >
          <Image
            src={skill.image}
            alt={`${skill.name}-icon`}
            width={40}
            height={40}
          />
        </div>

        <span className="text-xl">{skill.name}</span>
      </div>
      <div className="h-[0.35rem] rounded-lg bg-orange-400"></div>
    </div>
  );
}
