import React from 'react';
import HeaderTyping from './HeaderTyping';

/**
 * HeaderHeading Component
 */
export default function HeaderHeading() {
  return (
    <div className='max-w-xl text-center px-4 shadow-lg bg-black/50 backdrop-blur-md rounded-lg p-8'>
      <h1 className='pb-4 text-5xl md:text-6xl lg:text-7xl font-sans font-bold'>
        Irving Gomez
      </h1>

      <h2 className='pb-4 text-3xl md:text-4xl lg:text-4xl font-mono font-medium'>
        Full Stack Engineer
      </h2>

      <div className='max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl md:text-2xl lg:text-2xl font-mono font-medium'>
        <HeaderTyping />
      </div>
    </div>
  );
}
