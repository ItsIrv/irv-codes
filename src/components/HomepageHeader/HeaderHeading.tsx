import React from 'react';
import HeaderTyping from './HeaderTyping';

/**
 * HeaderHeading Component
 */
export default function HeaderHeading() {
  return (
    <div className='z-10 max-w-xl w-[95%] text-center px-4 shadow-lg bg-black/50 backdrop-blur-md rounded-lg p-8'>
      <img
        src='/img/me.jpg'
        alt='Its a -- meeee'
        className='rounded mx-auto mb-4'
        width={96}
        height={96}
      />

      <h1 className='pb-4 text-5xl md:text-6xl lg:text-7xl font-bold'>
        Irving Gomez
      </h1>

      <h2 className='pb-4 text-3xl md:text-4xl lg:text-4xl font-sans font-medium'>
        Full Stack Engineer
      </h2>

      <HeaderTyping />
    </div>
  );
}
