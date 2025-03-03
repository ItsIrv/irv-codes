import { WorkDetails } from '@site/src/models/WorkDetails';
import React from 'react';

interface WorkBlockProps {
  work: WorkDetails;
  onClick: (work: WorkDetails) => void;
  className?: string; // Add an optional className prop
}

/**
 * A WorkBlock component that displays a work experience with a title, company,
 * period, description, and role type badge.
 */
const WorkBlock: React.FC<WorkBlockProps> = ({
  work,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={`teal-hover h-72 group relative bg-black/30 dark:bg-black/30 rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-transform transform cursor-pointer ${className}`}
      onClick={() => onClick(work)}
    >
      {/* Title */}
      <h3 className='text-2xl font-semibold mb-2 text-neutral-100'>
        {work.title}
      </h3>

      {/* Company */}
      {work.company && (
        <p className='text-sm mb-1 text-white'>
          <strong className='text-secondary-light'>Company:</strong>{' '}
          {work.company}
        </p>
      )}

      {/* Period */}
      {work.timePeriod && (
        <p className='text-sm mb-1 text-white'>
          <strong className='text-secondary-light'>Period:</strong>{' '}
          {work.timePeriod}
        </p>
      )}

      {/* Role Type */}
      <p className='text-sm mb-4 text-white'>
        <strong className='text-secondary-light'>Type:</strong> {work.roleType}
      </p>

      {/* Description */}
      <p className='text-sm text-white leading-relaxed'>{work.description}</p>
    </div>
  );
};

export default WorkBlock;
