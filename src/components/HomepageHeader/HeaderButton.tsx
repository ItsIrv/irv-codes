import Link from '@docusaurus/Link';
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
  return (
    <Link
      href={target}
      className='mt-6 px-6 py-3 font-mono font-medium rounded-lg shadow-md backdrop-blur-md overflow-hidden transition-all
        bg-gradient-to-r from-black/80 via-gray-900/60 to-black/60 dark:from-black/60 dark:via-gray-800/60 dark:to-black/60
        text-neutral-light hover:scale-105 hover:text-white hover:from-blue-500/80 hover:to-teal-500/80
       dark:hover:from-blue-500/80 dark:hover:to-teal-500/80'
    >
      {text}
    </Link>
  );
}
