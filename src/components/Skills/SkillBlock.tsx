import { SkillDetails } from '@site/src/models/SkillDetails';
import React from 'react';

interface SkillBlockProps {
  skill: SkillDetails;
  onClick: (skill: SkillDetails) => void;
}

/**
 * A SkillBlock component that displays a skill with an icon and name.
 */
const SkillBlock: React.FC<SkillBlockProps> = ({ skill, onClick }) => {
  return (
    <div
      className='teal-hover group relative flex flex-col items-center justify-center rounded-lg bg-black/10 dark:bg-black/20 p-6 transition-transform transform hover:shadow-lg cursor-pointer'
      onClick={() => onClick(skill)}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className='w-16 h-16 mb-4 transition-opacity group-hover:opacity-90'
      />
      <p className='text-white text-lg font-medium'>{skill.name}</p>
    </div>
  );
};

export default SkillBlock;
