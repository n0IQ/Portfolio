import Image from 'next/image';
import { ABOUT_ME_HEADER, ABOUT_ME_SECTION_TEXT } from '@/utils/constants';
import MyImage from '../../../public/images/about/self.jpeg';

export default function About() {
  return (
    <div className="mt-32 max-w-6xl mx-auto">
      <h3 className="text-headingPrimary dark:text-headingPrimary text-center text-5xl font-secondaryHeading font-bold">
        {ABOUT_ME_HEADER}
      </h3>

      <div className="mt-16 md:flex justify-between">
        <Image
          src={MyImage.src}
          alt="my-image"
          width={300}
          height={1000}
          className="rounded-md size-auto mx-auto md:mx-0 mb-10"
        />
        <p className="max-w-96 lg:max-w-3xl mx-auto font-content font-normal text-base lg:text-xl leading-6 lg:leading-8 text-darkBackground dark:text-lightBackground">
          {ABOUT_ME_SECTION_TEXT}
        </p>
      </div>
    </div>
  );
}
