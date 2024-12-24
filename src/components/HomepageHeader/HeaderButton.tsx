import React from 'react';

/**
 * HeaderButton Component
 * A reusable button for the header section with smooth scrolling.
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
    <button
      className='mt-6 px-6 py-3 font-mono font-medium bg-black/50 dark:bg-black/50 text-neutral-light rounded-lg backdrop-blur-md shadow-md hover:bg-black/50 dark:hover:bg-black/50 transition-all'
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
