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
  if (!work) return null;

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
      title={work.title}
    >
      <div className='space-y-8'>
        {/* Company and Time Period */}
        <div>
          <p className='text-base text-neutral-700 dark:text-neutral-300'>
            <strong className='text-primary dark:text-primary-light'>
              Company:
            </strong>{' '}
            {work.company}
          </p>
          <p className='text-base text-neutral-700 dark:text-neutral-300'>
            <strong className='text-secondary dark:text-secondary-light'>
              Period:
            </strong>{' '}
            {work.timePeriod}
          </p>
        </div>

        {/* Description */}
        <div>
          <p className='text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl mx-auto'>
            {work.description}
          </p>
        </div>

        {/* Responsibilities */}
        {work.responsibilities && work.responsibilities.length > 0 && (
          <div>
            <h3 className='text-xl font-semibold text-accent dark:text-accent-light mb-4'>
              Responsibilities
            </h3>
            <ul className='list-disc list-inside space-y-3 text-neutral-700 dark:text-neutral-300'>
              {work.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className='text-sm leading-relaxed'
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
            <h3 className='text-xl font-semibold text-secondary dark:text-secondary-light mb-4'>
              Technologies Used
            </h3>
            <ul className='space-y-4 text-neutral-700 dark:text-neutral-300'>
              {work.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className='border-b border-neutral-200 dark:border-neutral-800 pb-2'
                >
                  <strong className='text-primary dark:text-primary-light'>
                    {tech}
                  </strong>
                  <p className='text-sm leading-relaxed mt-1'>
                    {/* Placeholder for description. Replace with actual content. */}
                    Details about how {tech} was used in this role will go here.
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
