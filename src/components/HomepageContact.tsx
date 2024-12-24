import React from 'react';

/**
 * HomepageContact Component
 * Displays a "Contact" section with input fields and a mailto button.
 */
export default function HomepageContact() {
  return (
    <section
      id='contact'
      className='my-36 text-white'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-6'>
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
              className='inline-block px-6 py-3 font-mono font-medium bg-gradient-to-r from-black/50 via-gray-700/50 to-black/50 dark:from-black/50 dark:via-gray-800/50 dark:to-black/50 text-neutral-light rounded-lg backdrop-blur-md shadow-md overflow-hidden transition-all
              hover:scale-105 hover:shadow-lg hover:border hover:border-neutral-light relative group'
            >
              <span className='relative z-10'>Send Email</span>

              {/* Gradient animation */}
              <span className='absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
