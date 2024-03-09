import WorkExperienceCard from '@/components/Work/WorkExperienceCard';
import {
  WorkExperienceInterface,
  workExperiences,
} from '@/interfaces/workExperienceInterface';
import { WORK_EXPERIENCE_HEADING } from '@/utils/constants';

export default function WorkExperience() {
  return (
    <div className="mt-40 flex justify-center">
      <div>
        <h1 className="text-3xl text-center md:text-left lg:text-5xl text-lightPrimary dark:text-darkPrimary font-bold font-subHeading-800">
          {WORK_EXPERIENCE_HEADING}
        </h1>
        <div className="mt-10">
          {workExperiences.map(
            (work: WorkExperienceInterface, index: number) => {
              return (
                <WorkExperienceCard
                  key={`${work.companyName}-${index}`}
                  card={work}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
