import React from 'react';

/**
 * HomepageAbout Component
 * Displays an "About Me" section with a personal introduction.
 */
export default function HomepageAbout() {
  return (
    <section
      id='about'
      className='my-36 text-white'
    >
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-4xl md:text-5xl font-bold mb-6'>About Me</h2>
        <p className='text-lg max-w-3xl mx-auto'>
          Hello, I’m Irving Gomez, a Full Stack Engineer with over a decade of
          experience building scalable applications and leading impactful
          projects. When I’m not writing code, you can find me gaming, exploring
          music, or experimenting with AI and cutting-edge technologies.
        </p>
        <p className='text-lg max-w-3xl mx-auto mt-4'>
          My passion lies in solving problems and delivering innovative
          solutions that make life easier. I thrive in collaborative
          environments and am committed to continuous learning.
        </p>
      </div>
    </section>
  );
}
