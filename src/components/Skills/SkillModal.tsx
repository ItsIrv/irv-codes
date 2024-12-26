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
    >
      <div className='space-y-8 font-body text-neutral-800 dark:text-neutral-200'>
        {/* Header Section */}
        <div className='border-b pb-4'>
          <h2 className='text-2xl font-serif text-center text-primary dark:text-primary-light'>
            {skill.name}
          </h2>
          {skill.icon && (
            <img
              src={skill.icon}
              alt={skill.name}
              className='w-24 h-24 mx-auto mt-4 mb-6'
            />
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

        {/* Relevant Experiences */}
        {skill.experiences && skill.experiences.length > 0 && (
          <div>
            <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
              Relevant Experiences
            </h3>
            <ul className='space-y-6'>
              {skill.experiences.map((exp, idx) => (
                <li
                  key={idx}
                  className='border rounded-md p-4 bg-neutral-50 dark:bg-neutral-800 shadow-sm'
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
                    <strong className='text-accent dark:text-accent-light'>
                      {exp.company}
                    </strong>
                  </p>
                  <p className='text-sm mt-2 leading-relaxed'>{exp.summary}</p>
                  {exp.outcomes && (
                    <ul className='list-disc list-inside space-y-1 mt-2 text-sm'>
                      {exp.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Projects Section */}
        {skill.projects && skill.projects.length > 0 && (
          <div>
            <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
              Projects
            </h3>
            <div className='space-y-6'>
              {skill.projects.map((project, idx) => (
                <div
                  key={idx}
                  className='border rounded-md p-4 bg-neutral-50 dark:bg-neutral-800 shadow-sm'
                >
                  <h4 className='text-lg font-semibold text-secondary dark:text-secondary-light'>
                    {project.name}
                  </h4>
                  <p className='mt-2'>{project.description}</p>
                  <p className='mt-1'>
                    <strong>Role:</strong> {project.role}
                  </p>
                  <p className='mt-1'>
                    <strong>Impact:</strong> {project.impact.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges & Solutions */}
        {skill.challengesAndSolutions &&
          skill.challengesAndSolutions.length > 0 && (
            <div>
              <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
                Challenges & Solutions
              </h3>
              <div className='space-y-6'>
                {skill.challengesAndSolutions.map((item, idx) => (
                  <div
                    key={idx}
                    className='grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-lg p-4 bg-neutral-50 dark:bg-neutral-800 shadow-sm'
                  >
                    <div className='p-4 bg-accent/10 dark:bg-accent-light/10 rounded-lg'>
                      <h4 className='text-lg font-semibold text-accent dark:text-accent-light mb-2'>
                        Challenge
                      </h4>
                      <p className='leading-relaxed'>{item.challenge}</p>
                    </div>
                    <div className='p-4 bg-primary/10 dark:bg-primary-light/10 rounded-lg'>
                      <h4 className='text-lg font-semibold text-primary dark:text-primary-light mb-2'>
                        Solution
                      </h4>
                      <p className='leading-relaxed'>{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Learning Path Section */}
        {skill.learningPath && (
          <div>
            <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
              Learning Path
            </h3>
            <div>
              <h4 className='text-lg font-medium text-accent dark:text-accent-light mb-2'>
                Resources
              </h4>
              <ul className='list-disc list-inside space-y-1'>
                {skill.learningPath.resources.map((resource, idx) => (
                  <li key={idx}>{resource}</li>
                ))}
              </ul>
              <h4 className='text-lg font-medium text-accent dark:text-accent-light mt-4 mb-2'>
                Milestones
              </h4>
              <ul className='list-disc list-inside space-y-1'>
                {skill.learningPath.milestones.map((milestone, idx) => (
                  <li key={idx}>{milestone}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
