import React from 'react';

const workExperience = [
  {
    title: 'Full Stack Developer',
    company: 'Freelance',
    description:
      'Led the development of hybrid web and mobile applications, implemented scalable cloud solutions, and optimized CI/CD pipelines.',
    technologies: ['PHP', 'Laravel', 'AWS', 'Docker'],
    timePeriod: 'Jan 2024 - Present',
  },
  {
    title: 'Full Stack Engineer',
    company: 'RXMG',
    description:
      'Enhanced platform scalability and user engagement by implementing robust features and adhering to tight performance standards.',
    technologies: ['Vue.js', 'Nuxt.js', 'Laravel', 'GitLab'],
    timePeriod: 'Mar 2022 - Jan 2024',
  },
  {
    title: 'Software Developer',
    company: 'Credit Saint',
    description:
      'Redeveloped a financial product into a Single Page Application, improving page load times by 60%.',
    technologies: ['Vue.js', 'Laravel', 'AWS', 'Elastic Beanstalk'],
    timePeriod: 'Dec 2020 - Feb 2022',
  },
];

/**
 * HomepageWork Component
 */
export default function HomepageWork() {
  return (
    <section
      id='work'
      className='container my-36 text-white'
    >
      <h2 className='text-4xl md:text-5xl font-bold text-center mb-12'>Work</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {workExperience.map((work, index) => (
          <div
            key={index}
            className='group relative bg-black/10 dark:bg-black/20 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'
          >
            <h3 className='text-2xl font-semibold mb-2'>{work.title}</h3>

            <p className='text-sm mb-1 text-neutral-light'>
              <strong>Company:</strong> {work.company}
            </p>

            <p className='text-sm mb-4 text-neutral-light'>
              <strong>Period:</strong> {work.timePeriod}
            </p>

            <p className='text-sm mb-4 text-neutral-light'>
              {work.description}
            </p>

            <div className='flex flex-wrap gap-2 mt-2'>
              {work.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='px-2 py-1 text-xs font-medium bg-black/20 dark:bg-black/30 rounded-full'
                >
                  {tech}
                </span>
              ))}
            </div>

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
