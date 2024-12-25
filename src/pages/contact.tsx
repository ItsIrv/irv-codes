import Layout from '@theme/Layout';
import React from 'react';

/**
 * ContactPage Component
 */
export default function ContactPage() {
  return (
    <Layout
      title='Contact'
      description='Get in touch with me.'
    >
      <main className='container mx-auto my-12'>
        <section
          id='contact'
          className='my-36 text-white'
        >
          <div className='container mx-auto px-6'>
            <h2 className='text-4xl md:text-5xl font-bold font-serif text-center mb-6'>
              Contact
            </h2>

            <div className='max-w-xl mx-auto'>
              {/* Input fields for aesthetic purposes */}
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

              {/* Mailto Button */}
              <div className='text-center mt-6'>
                <a
                  href='mailto:gomirv.work@gmail.com?subject=Contact%20Request&body=Hi%20Irving%2C%0A%0AI%20would%20like%20to%20reach%20out%20regarding...'
                  className='mt-6 px-6 py-3 font-mono font-medium rounded-lg shadow-md backdrop-blur-md overflow-hidden transition-all
                  bg-gradient-to-r from-black/80 via-gray-900/60 to-black/60 dark:from-black/60 dark:via-gray-800/60 dark:to-black/60
                text-neutral-light hover:scale-105 hover:text-white hover:from-blue-500/80 hover:to-teal-500/80
                 dark:hover:from-blue-500/80 dark:hover:to-teal-500/80'
                >
                  <span className='relative'>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
