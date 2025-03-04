import React from 'react';
import Modal from '@site/src/components/Modal';
import { SkillDetails } from '@site/src/models/SkillDetails';

interface SkillModalProps {
  isVisible: boolean;
  onClose: () => void;
  skill: SkillDetails | null;
}

/**
 * Skill Modal Component
 * Displays structured information about a skill, including key highlights and related tools.
 */
export default function SkillModal({
  isVisible,
  onClose,
  skill,
}: SkillModalProps) {
  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
    >
      {skill && (
        <div className='space-y-8 font-body text-neutral-800 dark:text-neutral-200'>
          {/* Header Section */}
          <div className='border-b pb-4 text-center'>
            <h2 className='text-2xl font-serif text-primary dark:text-primary-light'>
              {skill.name}
            </h2>

            {skill.icon && (
              <img
                src={skill.icon}
                alt={skill.name}
                className='w-24 h-24 mx-auto mt-4 mb-6'
              />
            )}

            {skill.yearsExperience && (
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                {skill.yearsExperience}+ years of experience
              </p>
            )}

            <p className='text-base leading-relaxed max-w-3xl mx-auto'>
              {skill.description}
            </p>
          </div>

          {/* Key Highlights */}
          {skill.highlights && skill.highlights.length > 0 && (
            <div>
              <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
                Key Highlights
              </h3>
              <ul className='list-disc list-inside space-y-3'>
                {skill.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className='leading-relaxed'
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools & Technologies */}
          {skill.tools && skill.tools.length > 0 && (
            <div>
              <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
                Tools & Technologies
              </h3>
              <ul className='flex flex-wrap gap-3'>
                {skill.tools.map((tool, idx) => (
                  <li
                    key={idx}
                    className='bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light px-3 py-1 rounded-md text-sm'
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}
