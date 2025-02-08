import React from 'react';
import Modal from '@site/src/components/Modal';
import { WorkDetails } from '@site/src/models/WorkDetails';

interface WorkModalProps {
  isVisible: boolean;
  onClose: () => void;
  work: WorkDetails | null;
}

/**
 * A modernized modal component for displaying detailed work experience information.
 */
export default function WorkModal({
  isVisible,
  onClose,
  work,
}: WorkModalProps) {
  let liveProject = null;

  if (work) {
    liveProject = work.resources?.find(
      (resource) => resource.type === 'liveProject'
    );
  }

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
    >
      {work && (
        <div className='space-y-8 font-body text-neutral-800 dark:text-neutral-200'>
          {/* Header Section */}
          <div className='border-b pb-4'>
            <h2 className='text-2xl font-serif text-primary dark:text-primary-light'>
              {work.title}
            </h2>

            {work.company && (
              <p className='text-lg text-secondary dark:text-secondary-light mt-2'>
                {work.company}
              </p>
            )}

            {work.timePeriod && (
              <p className='text-neutral-600 dark:text-neutral-400'>
                {work.timePeriod}
              </p>
            )}

            {/* Display Live Website Link */}
            {liveProject && (
              <p className='text-neutral-600 dark:text-neutral-400 mt-2'>
                <a
                  href={liveProject.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent dark:text-accent-light underline hover:text-primary dark:hover:text-primary-light'
                >
                  Live Website
                </a>
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <p className='text-base leading-relaxed max-w-3xl mx-auto'>
              {work.description}
            </p>
          </div>

          {/* Responsibilities */}
          {work.responsibilities && work.responsibilities.length > 0 && (
            <div>
              <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
                Responsibilities
              </h3>
              <ul className='list-disc list-inside space-y-3'>
                {work.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className='leading-relaxed'
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          {work.technologies && work.technologies.length > 0 && (
            <div>
              <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
                Technologies Used
              </h3>
              <div className='space-y-6'>
                {work.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className='border rounded-md p-4 bg-neutral-50 dark:bg-neutral-800 shadow-sm'
                  >
                    <h4 className='text-lg font-semibold text-accent dark:text-accent-light'>
                      {tech.name}
                    </h4>
                    <p className='text-neutral-700 dark:text-neutral-300 mt-2'>
                      {tech.description}
                    </p>
                    {tech.impact && (
                      <ul className='list-disc list-inside mt-2 space-y-1 text-neutral-600 dark:text-neutral-400'>
                        {tech.impact.map((impact, idx) => (
                          <li key={idx}>{impact}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Achievements */}
          {work.keyAchievements && work.keyAchievements.length > 0 && (
            <div>
              <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
                Key Achievements
              </h3>
              <ul className='space-y-4'>
                {work.keyAchievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className='text-lg leading-relaxed border-l-4 border-accent pl-4'
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Solutions */}
          {work.challengesAndSolutions &&
            work.challengesAndSolutions.length > 0 && (
              <div>
                <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
                  Challenges & Solutions
                </h3>
                <div className='space-y-6'>
                  {work.challengesAndSolutions.map((item, idx) => (
                    <div
                      key={idx}
                      className='grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-lg p-4 bg-neutral-50 dark:bg-neutral-800 shadow-sm'
                    >
                      <div className='p-4 bg-accent/10 dark:bg-accent-light/10 rounded-lg'>
                        <h4 className='text-lg font-semibold text-accent dark:text-accent-light mb-2'>
                          Challenge
                        </h4>
                        <p className='text-neutral-800 dark:text-neutral-200 leading-relaxed'>
                          {item.challenge}
                        </p>
                      </div>
                      <div className='p-4 bg-primary/10 dark:bg-primary-light/10 rounded-lg'>
                        <h4 className='text-lg font-semibold text-primary dark:text-primary-light mb-2'>
                          Solution
                        </h4>
                        <p className='text-neutral-800 dark:text-neutral-200 leading-relaxed'>
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Projects */}
          {work.projectsOrInitiatives &&
            work.projectsOrInitiatives.length > 0 && (
              <div>
                <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
                  Projects & Initiatives
                </h3>
                <div className='space-y-6'>
                  {work.projectsOrInitiatives.map((project, idx) => (
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

          {/* Resources */}
          {work.resources && work.resources.length > 0 && (
            <div>
              <h3 className='text-xl font-semibold text-primary dark:text-primary-light mb-4'>
                Resources
              </h3>
              <ul className='space-y-2'>
                {work.resources.map((resource, idx) => (
                  <li key={idx}>
                    <a
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-accent dark:text-accent-light underline hover:text-primary dark:hover:text-primary-light'
                    >
                      {resource.label}
                    </a>
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
