import { skills } from '@/interfaces/skillInterface';
import SkillCard from './SkillCard';
import { SKILLS_HEADER } from '@/utils/constants';

export default function MySkill() {
  return (
    <div className="mt-32 flex justify-center">
      <div className="max-w-5xl">
        <h2 className="text-center text-5xl text-headingPrimary font-secondaryHeading font-bold">
          {SKILLS_HEADER}
        </h2>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-40 xl:gap-80 mb-10 lg:mb-16">
            <SkillCard skillCard={skills[0]} />
            <SkillCard skillCard={skills[1]} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-40 xl:gap-80">
            <SkillCard skillCard={skills[2]} />
            <SkillCard skillCard={skills[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}
