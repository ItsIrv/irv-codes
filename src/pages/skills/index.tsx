import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { skills } from './blocksConfig';

/**
 * SkillsPage Component
 * Displays a detailed grid of skills with modals for context, experiences, and highlights.
 */
export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setSelectedSkill(null), 300);
  };

  return (
    <Layout
      title='Skills'
      description='Explore my professional skills and experiences.'
    >
      <main className='container mx-auto my-12'>
        <h1 className='text-4xl font-bold text-center mb-8 text-white'>
          Skills
        </h1>
        <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='text-white group relative flex flex-col items-center justify-center bg-black/10 dark:bg-black/20 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer'
              onClick={() => openModal(skill)}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className='w-16 h-16 mb-4 transition-opacity group-hover:opacity-90'
              />
              <p className='text-lg font-medium'>{skill.name}</p>
            </div>
          ))}
        </section>

        {selectedSkill && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/80 via-black/50 to-black/80 backdrop-blur-md transition-opacity duration-300 ${
              isModalVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div
              className={`relative m-6 bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-auto transition-transform duration-300 ${
                isModalVisible ? 'scale-100' : 'scale-95'
              }`}
            >
              <button
                className='absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-transform transform hover:scale-110'
                onClick={closeModal}
              >
                &times;
              </button>
              <div className='text-center'>
                <img
                  src={selectedSkill.icon}
                  alt={selectedSkill.name}
                  className='w-20 h-20 mb-4 mx-auto'
                />
                <h2 className='text-2xl font-extrabold mb-4 text-neutral-800 dark:text-neutral-100'>
                  {selectedSkill.name}
                </h2>
                <p className='text-sm mb-6 text-neutral-600 dark:text-neutral-300 leading-relaxed'>
                  {selectedSkill.description}
                </p>
              </div>
              {selectedSkill.highlights && (
                <div className='mb-6'>
                  <h3 className='text-lg font-bold mb-2 text-primary-dark dark:text-primary-light'>
                    Key Highlights
                  </h3>
                  <ul className='list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-2'>
                    {selectedSkill.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h3 className='text-lg font-bold mb-2 text-primary-dark dark:text-primary-light'>
                  Relevant Experiences
                </h3>
                <ul className='text-sm text-neutral-700 dark:text-neutral-300 space-y-4 leading-relaxed'>
                  {selectedSkill.experiences.map((exp, idx) => (
                    <li
                      key={idx}
                      className='border-b border-neutral-200 pb-2'
                    >
                      <strong>{exp.role}</strong> at{' '}
                      <span className='text-primary-dark dark:text-primary-light'>
                        {exp.company}
                      </span>{' '}
                      ({exp.period})
                      <br />
                      {exp.summary}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
