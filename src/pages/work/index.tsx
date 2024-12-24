import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { workExperience } from './blocksConfig';

/**
 * WorkPage Component
 * Displays detailed work experience with modals for further context and responsibilities.
 */
export default function WorkPage() {
  const [selectedWork, setSelectedWork] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setSelectedWork(null), 300);
  };

  return (
    <Layout
      title='Work Experience'
      description='Explore my professional work experience in detail.'
    >
      <main className='container mx-auto my-12'>
        <h1 className='text-4xl font-bold text-center mb-8 text-white'>
          Work Experience
        </h1>
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {workExperience.map((work, index) => (
            <div
              key={index}
              className='group relative bg-black/10 dark:bg-black/20 rounded-lg shadow-md p-6 hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer'
              onClick={() => openModal(work)}
            >
              <h3 className='text-2xl font-semibold mb-2 text-neutral-100'>
                {work.title}
              </h3>
              <p className='text-sm mb-1 text-neutral-400'>
                <strong>Company:</strong> {work.company}
              </p>
              <p className='text-sm mb-4 text-neutral-400'>
                <strong>Period:</strong> {work.timePeriod}
              </p>
              <p className='text-sm text-neutral-300 leading-relaxed'>
                {work.description}
              </p>
              <div className='flex flex-wrap gap-2 mt-4'>
                {work.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className='text-white px-2 py-1 text-xs font-medium bg-black/20 dark:bg-black/30 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {selectedWork && (
          <div
            className={`fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
              isModalVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div
              className={`relative m-6 bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto transition-transform duration-300 ${
                isModalVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
            >
              <button
                className='absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-transform transform hover:scale-110'
                onClick={closeModal}
              >
                &times;
              </button>
              <div>
                <h2 className='text-2xl font-extrabold mb-4 text-neutral-800 dark:text-neutral-100'>
                  {selectedWork.title}
                </h2>
                <p className='text-sm mb-4 text-neutral-600 dark:text-neutral-300'>
                  <strong>Company:</strong> {selectedWork.company}
                </p>
                <p className='text-sm mb-4 text-neutral-600 dark:text-neutral-300'>
                  <strong>Period:</strong> {selectedWork.timePeriod}
                </p>
                <p className='text-sm mb-6 text-neutral-600 dark:text-neutral-300 leading-relaxed'>
                  {selectedWork.description}
                </p>
                <div className='mb-6'>
                  <h3 className='text-lg font-bold mb-2 text-primary-dark dark:text-primary-light'>
                    Responsibilities
                  </h3>
                  <ul className='list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-2'>
                    {selectedWork.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-lg font-bold mb-2 text-primary-dark dark:text-primary-light'>
                    Technologies Used
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {selectedWork.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className='px-2 py-1 text-xs font-medium bg-black/10 dark:bg-black/20 rounded-full'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
