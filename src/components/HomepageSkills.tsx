import React from 'react';

const skills = [
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/php/php-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React.js',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/mysql/mysql-original.svg',
  },
];

/**
 * HomepageSkills component.
 */
export default function HomepageSkills() {
  return (
    <section
      id='skills'
      className='container my-36 text-white'
    >
      <h2 className='text-4xl md:text-5xl font-bold text-center mb-12'>
        Skills
      </h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='group relative flex flex-col items-center justify-center bg-black/10 dark:bg-black/20 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg'
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className='w-16 h-16 mb-4 transition-opacity group-hover:opacity-90'
            />
            <span className='text-lg font-medium'>{skill.name}</span>

            {/* Hover effect overlay */}
            <div
              className='absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-black/10 dark:via-black/20 to-transparent rounded-lg group-hover:opacity-100 transition-opacity pointer-events-none'
              style={{ mixBlendMode: 'soft-light' }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
