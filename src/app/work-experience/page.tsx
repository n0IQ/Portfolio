import WorkExperienceCard from '@/components/Work/WorkExperienceCard';
import {
  WorkExperienceInterface,
  workExperiences,
} from '@/interfaces/workExperienceInterface';
import { WORK_EXPERIENCE_HEADING } from '@/utils/constants';

export default function WorkExperience() {
  return (
    <div className="mt-32 ml-64">
      <h1 className="text-5xl text-primary opacity-95 font-bold font-subHeading-800">
        {WORK_EXPERIENCE_HEADING}
      </h1>
      <div className="mt-10">
        {workExperiences.map((work: WorkExperienceInterface, index: number) => {
          return (
            <WorkExperienceCard
              key={`${work.companyName}-${index}`}
              card={work}
            />
          );
        })}
      </div>
    </div>
  );
}
