'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import SkillItem from './SkillItem';
import { SkillInterface } from '@/interfaces/skillInterface';
import { useState } from 'react';

library.add(fab, faChevronDown, faChevronUp, faGithub, faCode);

export default function SkillCard({
  skillCard,
}: {
  skillCard: SkillInterface;
}) {
  const [showSkills, setShowSkills] = useState(false);

  const showLanguages = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="max-w-80 cursor-pointer" onClick={showLanguages}>
      <h3 className="text-xl font-secondaryContent font-medium">
        {skillCard.stackType}
      </h3>
      <div className="flex mt-2">
        <p className="max-w-72 font-content font-normal">
          {skillCard.desciption}
        </p>
        {showSkills ? (
          <FontAwesomeIcon icon={['fas', 'chevron-up']} className="w-5 mt-1" />
        ) : (
          <FontAwesomeIcon
            icon={['fas', 'chevron-down']}
            className="w-5 mt-1"
          />
        )}
      </div>

      {showSkills ? (
        <div className="mt-10">
          {skillCard.skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
