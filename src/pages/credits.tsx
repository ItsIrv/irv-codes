import Layout from '@theme/Layout';
import React from 'react';

/**
 * CreditsPage Component
 */
export default function CreditsPage() {
  return (
    <Layout
      title='Credits'
      description='Tools and resources I used to build this site.'
    >
      <main className='container mx-auto my-12'>
        <section
          id='about'
          className='my-36 text-white'
        >
          <div className='container mx-auto px-6 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold font-serif mb-6'>
              Credits
            </h2>
            <p className='text-lg max-w-3xl mx-auto'>
              This site was built using{' '}
              <a
                href='https://docusaurus.io'
                target='_blank'
                rel='noopener noreferrer'
                className='text-accent hover:underline'
              >
                Docusaurus
              </a>
              .
            </p>

            <p className='text-lg max-w-3xl mx-auto mt-4'>
              The site is hosted on{' '}
              <a
                href='https://vercel.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-accent hover:underline'
              >
                Vercel
              </a>
              .
            </p>

            <p className='text-lg max-w-3xl mx-auto mt-4'>
              The background particles are made with{' '}
              <a
                href='https://github.com/matteobruni/tsparticles'
                target='_blank'
                rel='noopener noreferrer'
                className='text-accent hover:underline'
              >
                tsparticles
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
