import {
  MAIN_INTRO_FIRST_PARA,
  MAIN_INTRO_SECOND_PARA,
  SUB_INTRO,
} from '@/utils/constants';

export default function Intro() {
  return (
    <div className="text-center mt-64">
      <h1 className="text-8xl font-heading-900 font-bold text-lightText dark:text-darkText drop-shadow-custom">
        {MAIN_INTRO_FIRST_PARA}
      </h1>
      <h1 className="text-7xl font-heading-900 font-bold text-lightText dark:text-darkText drop-shadow-custom">
        {MAIN_INTRO_SECOND_PARA}
      </h1>
      <div className="mx-auto max-w-3xl mt-20">
        <p className="text-2xl font-content font-medium text-lightText dark:text-darkText">
          {SUB_INTRO}
        </p>
      </div>
    </div>
  );
}
