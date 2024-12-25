import React from 'react';
import Modal from '@site/src/components/Modal';
import { SkillDetails } from '@site/src/models/SkillDetails';

interface SkillModalProps {
  isVisible: boolean;
  onClose: () => void;
  skill: SkillDetails | null;
}

/**
 * A modernized modal component for displaying detailed skill information.
 */
export default function SkillModal({
  isVisible,
  onClose,
  skill,
}: SkillModalProps) {
  if (!skill) return null;

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
      title={skill.name}
    >
      <div className='space-y-8'>
        {/* Skill Icon and Description */}
        <div>
          <img
            src={skill.icon}
            alt={skill.name}
            className='w-24 h-24 mx-auto mb-6'
          />
          <p className='text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl mx-auto'>
            {skill.description}
          </p>
        </div>

        {/* Highlights Section */}
        {skill.highlights && (
          <div>
            <h3 className='text-xl font-semibold text-secondary dark:text-secondary-light mb-4'>
              Key Highlights
            </h3>
            <ul className='list-disc list-inside space-y-3 text-neutral-700 dark:text-neutral-300'>
              {skill.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className='text-sm leading-relaxed'
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Relevant Experiences Section */}
        {skill.experiences.length > 0 && (
          <div>
            <h3 className='text-xl font-semibold text-accent dark:text-accent-light mb-4'>
              Relevant Experiences
            </h3>
            <ul className='space-y-6'>
              {skill.experiences.map((exp, idx) => (
                <li
                  key={idx}
                  className='p-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 shadow-sm'
                >
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-lg font-medium text-neutral-800 dark:text-neutral-200'>
                      {exp.role}
                    </span>
                    <span className='text-sm text-neutral-500 dark:text-neutral-400'>
                      {exp.period}
                    </span>
                  </div>
                  <p className='text-neutral-700 dark:text-neutral-300'>
                    <strong className='text-primary dark:text-primary-light'>
                      {exp.company}
                    </strong>
                  </p>
                  <p className='text-sm mt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed'>
                    {exp.summary}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Modal>
  );
}
