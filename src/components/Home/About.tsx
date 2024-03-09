import Image from 'next/image';
import { ABOUT_ME_HEADER, ABOUT_ME_SECTION_TEXT } from '@/utils/constants';
import MyImage from '../../../public/images/about/self.jpeg';

export default function About() {
  return (
    <div className="mt-32 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
      <h3 className="text-headingPrimary dark:text-headingPrimary text-center text-5xl font-secondaryHeading font-bold">
        {ABOUT_ME_HEADER}
      </h3>

      <div className="mt-16 md:flex justify-between">
        <Image
          src={MyImage.src}
          alt="my-image"
          width={300}
          height={300}
          className="rounded-md size-auto mx-auto mb-10"
        />
        <p className="max-w-96 md:max-w-80 lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl mx-auto md:-mt-1 lg:-mt-2 font-content font-normal text-base lg:text-xl leading-6 lg:leading-8 text-darkBackground dark:text-lightBackground">
          {ABOUT_ME_SECTION_TEXT}
        </p>
      </div>
    </div>
  );
}
