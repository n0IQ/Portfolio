import {
  MAIN_INTRO_FIRST_PARA,
  MAIN_INTRO_SECOND_PARA,
  SUB_INTRO,
} from '@/utils/constants';

export default function Intro() {
  return (
    <div className="text-center mt-52 lg:mt-64">
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading-900 font-bold text-lightPrimary dark:text-darkPrimary dark:drop-shadow-custom">
        {MAIN_INTRO_FIRST_PARA}
      </h1>
      <h1 className="text-3xl md:text-6xl lg:text-7xl font-heading-900 font-bold text-lightPrimary dark:text-darkPrimary dark:drop-shadow-custom">
        {MAIN_INTRO_SECOND_PARA}
      </h1>
      <div className="mx-auto max-w-sm md:max-w-xl lg:max-w-3xl 2xl:max-w-3xl mt-10 md:mt-20">
        <p className="text-base md:text-2xl lg:text-3xl lg:leading-10 font-content font-medium text-lightPrimary dark:text-darkPrimary">
          {SUB_INTRO}
        </p>
      </div>
    </div>
  );
}
