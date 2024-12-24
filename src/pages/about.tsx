import Layout from '@theme/Layout';
import React from 'react';

/**
 * AboutPage Component
 */
export default function AboutPage() {
  return (
    <Layout
      title='About'
      description='Learn more about me.'
    >
      <main className='container mx-auto my-12'>
        <section
          id='about'
          className='my-36 text-white'
        >
          <div className='container mx-auto px-6 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold font-serif mb-6'>
              About Me
            </h2>
            <p className='text-lg max-w-3xl mx-auto'>
              Hello, I’m Irving Gomez, a Full Stack Engineer with over a decade
              of experience building scalable applications and leading impactful
              projects. When I’m not writing code, you can find me gaming,
              exploring music, or experimenting with AI and cutting-edge
              technologies.
            </p>
            <p className='text-lg max-w-3xl mx-auto mt-4'>
              My passion lies in solving problems and delivering innovative
              solutions that make life easier. I thrive in collaborative
              environments and am committed to continuous learning.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
