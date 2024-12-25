import React from 'react';
import Modal from '@site/src/components/Modal';
import { SkillDetails } from '@site/src/models/SkillDetails';

interface SkillModalProps {
  isVisible: boolean;
  onClose: () => void;
  skill: SkillDetails | null;
}

/**
 * A modal component that displays the details of a skill.
 */
const SkillModal: React.FC<SkillModalProps> = ({
  isVisible,
  onClose,
  skill,
}) => {
  if (!skill) return null;

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
      title={skill.name}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className='w-20 h-20 mb-4 mx-auto'
      />
      <p className='text-sm mb-6 text-neutral-600 dark:text-neutral-300 leading-relaxed'>
        {skill.description}
      </p>
      {skill.highlights && (
        <div className='mb-6'>
          <h3 className='text-lg font-bold mb-2 text-primary-dark dark:text-primary-light'>
            Key Highlights
          </h3>
          <ul className='list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-2'>
            {skill.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3 className='text-lg font-bold mb-2 text-primary-dark dark:text-primary-light'>
          Relevant Experiences
        </h3>
        <ul className='text-sm text-neutral-700 dark:text-neutral-300 space-y-4 leading-relaxed'>
          {skill.experiences.map((exp, idx) => (
            <li
              key={idx}
              className='border-b border-neutral-200 pb-2'
            >
              <strong>{exp.role}</strong> at{' '}
              <span className='text-primary-dark dark:text-primary-light'>
                {exp.company}
              </span>{' '}
              ({exp.period})
              <br />
              {exp.summary}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default SkillModal;
