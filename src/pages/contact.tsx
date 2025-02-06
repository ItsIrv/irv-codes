import React from 'react';
import PageLayout from '../components/PageLayout';

/**
 * ContactPage Component
 */
export default function ContactPage() {
  return (
    <PageLayout
      title='Contact'
      description='Get in touch with me.'
      sectionId='contact'
      heading='Contact'
    >
      {/* Contact Form */}
      <div className='max-w-xl mx-auto'>
        <div className='space-y-6'>
          <input
            type='text'
            placeholder='Your Name (optional)'
            className='w-full px-4 py-3 rounded-lg bg-black/20 dark:bg-black/30 text-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-primary-light'
          />
          <textarea
            placeholder='Your Message (optional)'
            className='w-full px-4 py-3 rounded-lg bg-black/20 dark:bg-black/30 text-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-primary-light'
            rows={5}
          ></textarea>
        </div>
        <div className='text-center mt-6'>
          <a
            href='mailto:gomirv.work@gmail.com?subject=Contact%20Request&body=Hi%20Irving%2C%0A%0AI%20would%20like%20to%20reach%20out%20regarding...'
            className='mt-6 px-6 py-3 font-mono font-medium rounded-lg shadow-md backdrop-blur-md overflow-hidden transition-all
                  bg-gradient-to-r from-black/80 via-gray-900/60 to-black/60 dark:from-black/60 dark:via-gray-800/60 dark:to-black/60
                text-neutral-light hover:scale-105 hover:text-white hover:from-blue-500/80 hover:to-teal-500/80
                 dark:hover:from-blue-500/80 dark:hover:to-teal-500/80'
          >
            Send Email
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className='mt-12 text-center'>
        <h2 className='text-2xl font-bold font-mono text-neutral-light mb-4'>
          Connect with Me
        </h2>
        <div className='flex justify-center space-x-6'>
          <a
            href='https://linkedin.com/in/itsirv'
            target='_blank'
            className='text-neutral-light hover:text-blue-400 text-xl transition-transform transform hover:scale-110'
          >
            LinkedIn
          </a>

          <a
            href='https://github.com/itsirv'
            target='_blank'
            className='text-neutral-light hover:text-blue-400 text-xl transition-transform transform hover:scale-110'
          >
            GitHub
          </a>

          <a
            href='/IrvingGomez-FullStackEnginner.pdf'
            target='_blank'
            className='text-neutral-light hover:text-blue-400 text-xl transition-transform transform hover:scale-110'
          >
            Resume
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
