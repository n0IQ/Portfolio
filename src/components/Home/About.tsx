import { ABOUT_ME_HEADER, ABOUT_ME_SECTION_TEXT } from '@/utils/constants';

export default function About() {
  return (
    <div className="mt-32 max-w-6xl mx-auto">
      <h3 className="text-headingPrimary dark:text-headingPrimary text-center text-5xl font-secondaryHeading font-bold">
        {ABOUT_ME_HEADER}
      </h3>

      <div className="mt-16">
        <p className="font-content font-normal text-xl leading-8 text-darkBackground dark:text-lightBackground">
          {ABOUT_ME_SECTION_TEXT}
        </p>
      </div>
    </div>
  );
}
