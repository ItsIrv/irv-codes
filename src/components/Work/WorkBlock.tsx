import { WorkDetails } from '@site/src/models/WorkDetails';
import React from 'react';

interface WorkBlockProps {
  work: WorkDetails;
  onClick: (work: WorkDetails) => void;
}

/**
 * A WorkBlock component that displays a work experience with a title, company,
 * period, and description.
 */
const WorkBlock: React.FC<WorkBlockProps> = ({ work, onClick }) => {
  return (
    <div
      className='group relative bg-black/30 dark:bg-black/30 rounded-lg shadow-md p-6 hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer'
      onClick={() => onClick(work)}
    >
      <h3 className='text-2xl font-semibold mb-2 text-neutral-100'>
        {work.title}
      </h3>
      <p className='text-sm mb-1 text-white'>
        <strong className='text-secondary-light'>Company:</strong>{' '}
        {work.company}
      </p>
      <p className='text-sm mb-4 text-white'>
        <strong className='text-secondary-light'>Period:</strong>{' '}
        {work.timePeriod}
      </p>
      <p className='text-sm text-white dark:text-gray-400 leading-relaxed'>
        {work.description}
      </p>
    </div>
  );
};

export default WorkBlock;
