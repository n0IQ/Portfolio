import { WorkExperienceInterface } from '@/interfaces/workExperienceInterface';
import AppFireLightLogo from '../../../public/images/appfire_logo_light.png';
import AppFireDarkLogo from '../../../public/images/appfire_logo_dark.png';
import TechCuratorsDarkLogo from '../../../public/images/techcurators_logo.png';

export default function WorkExperienceCard({
  card,
}: {
  card: WorkExperienceInterface;
}) {
  return (
    <div className="flex border-2 mb-16 border-slate-200 hover:border-orange-600 bg-black bg-opacity-80 opacity-95 rounded-xl p-5 max-w-screen-xl transition-transform ease-in-out delay-150 hover:scale-105 duration-300">
      <div className="flex items-center">
        <a href={card.link} target="_blank">
          <img
            src={
              card.companyName === 'Appfire'
                ? AppFireLightLogo.src
                : TechCuratorsDarkLogo.src
            }
            alt={`${card.companyName}-logo`}
            className="w-52 ml-2 hover:cursor-pointer"
          />
        </a>
      </div>
      <div className="ml-12">
        <h2 className="font-subHeading-800 text-2xl text-primary opacity-95 font-bold">
          {card.companyName}
        </h2>
        <h5 className="font-subHeading-800 text-base text-slate-300">
          {card.role}
        </h5>
        <h5 className="font-content text-xs text-slate-200">{card.timeline}</h5>
        <ul className="list-disc pt-2 pl-6 max-w-4xl">
          {card.description.map((descriptionItem: string, index: number) => {
            return (
              <li
                key={index}
                className="font-content text-base text-primary opacity-95"
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
