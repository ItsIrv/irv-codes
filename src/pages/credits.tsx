import Layout from '@theme/Layout';
import React from 'react';
import PageLayout from '../components/PageLayout';

/**
 * CreditsPage Component
 */
export default function CreditsPage() {
  return (
    <PageLayout
      title='Credits'
      description='Tools and resources I used to build this site.'
      sectionId='credits'
      sectionStyle='text-center'
      heading='Credits'
    >
      <p className='text-lg max-w-3xl mx-auto'>
        This site is built using{' '}
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
    </PageLayout>
  );
}
