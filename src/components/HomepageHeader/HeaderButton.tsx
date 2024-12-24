import React from 'react';

/**
 * HeaderButton Component
 * A reusable button for the header section with smooth scrolling and animated hover effects.
 */
export default function HeaderButton({
  text,
  target,
}: {
  text: string;
  target: string;
}) {
  const handleClick = () => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={target}
      className='mt-6 px-6 py-3 font-mono font-medium bg-gradient-to-r from-black/50 via-gray-700/50 to-black/50 dark:from-black/50 dark:via-gray-800/50 dark:to-black/50 text-neutral-light rounded-lg backdrop-blur-md shadow-md overflow-hidden transition-all
                 hover:scale-105 hover:shadow-lg hover:border hover:border-neutral-light relative group'
    >
      <span className='relative'>{text}</span>

      {/* Gradient animation */}
      <span className='absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></span>
    </a>
  );
}
