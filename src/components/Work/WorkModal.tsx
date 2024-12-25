import React from 'react';
import { WorkDetails } from '@site/src/models/WorkDetails';

interface WorkModalProps {
  isVisible: boolean;
  onClose: () => void;
  work: WorkDetails | null;
}

/**
 * A modal component that displays the details of a work experience.
 */
const WorkModal: React.FC<WorkModalProps> = ({ isVisible, onClose, work }) => {
  if (!work) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`relative m-6 bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto transition-transform duration-300 ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        <button
          className='absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-transform transform hover:scale-110'
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className='text-2xl font-extrabold mb-4 text-neutral-800 dark:text-neutral-100'>
          {work.title}
        </h2>
        <p className='text-sm mb-4 text-neutral-600 dark:text-neutral-300'>
          <strong>Company:</strong> {work.company}
        </p>
        <p className='text-sm mb-4 text-neutral-600 dark:text-neutral-300'>
          <strong>Period:</strong> {work.timePeriod}
        </p>
        <p className='text-sm mb-6 text-neutral-600 dark:text-neutral-300 leading-relaxed'>
          {work.description}
        </p>
        <div className='mb-6'>
          <h3 className='text-lg font-bold mb-2 text-primary-dark dark:text-primary-light'>
            Responsibilities
          </h3>
          <ul className='list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-2'>
            {work.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-2 text-primary-dark dark:text-primary-light'>
            Technologies Used
          </h3>
          <div className='flex flex-wrap gap-2'>
            {work.technologies.map((tech, idx) => (
              <span
                key={idx}
                className='px-2 py-1 text-xs font-medium bg-black/10 dark:bg-black/20 rounded-full'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
