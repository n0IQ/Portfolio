import { WorkExperienceInterface } from '@/interfaces/workExperienceInterface';
import Image from 'next/image';

export default function WorkExperienceCard({
  card,
}: {
  card: WorkExperienceInterface;
}) {
  return (
    <div
      className={`md:flex border-2 mb-16 border-slate-200 dark:border-gray-200 hover:border-orange-600 dark:hover:border-orange-600 
      bg-[#F0F0F0] dark:bg-black rounded-xl p-5 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-screen-lg 2xl:max-w-screen-xl justify-center transition-transform ease-in-out delay-150 hover:scale-105 duration-300`}
    >
      <div
        className={`flex items-center ${
          card.companyName === 'Appfire'
            ? 'dark:filter dark:brightness-0 dark:invert'
            : ''
        }`}
      >
        <a href={card.link} target="_blank">
          <Image
            src={`${
              card.companyName === 'Appfire' ? `${card.image}` : card.image
            }`}
            width={208}
            height={100}
            alt={`${card.companyName}-logo`}
            className="ml-2 md:w-52 hover:cursor-pointer hidden sm:block"
          />
        </a>
      </div>
      {/* Contents */}
      <div className="md:ml-12">
        <h2 className="font-subHeading-800 text-base md:text-2xl text-lightPrimary dark:text-darkPrimary font-bold">
          {card.companyName}
        </h2>
        <h5 className="font-subHeading-800 text-sm md:text-base text-slate-700 dark:text-slate-300">
          {card.role}
        </h5>
        <h5 className="font-content text-xs text-slate-600 dark:text-slate-200">
          {card.timeline}
        </h5>
        <ul className="list-disc pt-2 pl-6 max-w-4xl">
          {card.description.map((descriptionItem: string, index: number) => {
            return (
              <li
                key={index}
                className="font-content text-xs md:text-base text-lightPrimary dark:text-darkPrimary"
              >
                {descriptionItem}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
