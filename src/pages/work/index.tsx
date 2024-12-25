import React, { useState } from 'react';
import Layout from '@theme/Layout';
import WorkBlock from '@site/src/components/Work/WorkBlock';
import WorkModal from '@site/src/components/Work/WorkModal';
import { WorkDetails } from '@site/src/models/WorkDetails';

const workExperience = [
  {
    title: 'Full Stack Engineer',
    company: 'Freelance',
    timePeriod: 'Jan 2024 - Present',
    description:
      'Led the development of hybrid web and mobile applications, implemented scalable cloud solutions, and optimized CI/CD pipelines.',
    responsibilities: [
      'Designed and developed hybrid web and mobile applications using Quasar Framework and Capacitor.',
      'Implemented robust back-end services with Laravel, ensuring scalability and performance.',
      'Optimized CI/CD pipelines to streamline deployment workflows and reduce downtime.',
      'Deployed secure and scalable cloud solutions using AWS services such as S3, RDS, and Elastic Beanstalk.',
    ],
    technologies: ['PHP', 'Laravel', 'AWS', 'Docker', 'Quasar Framework'],
  },
  {
    title: 'Full Stack Engineer',
    company: 'RXMG',
    timePeriod: 'Mar 2022 - Jan 2024',
    description:
      'Enhanced platform scalability and user engagement by implementing robust features and adhering to tight performance standards.',
    responsibilities: [
      'Developed dynamic and reusable components for a high-traffic marketing platform using Vue.js and Nuxt.js.',
      'Collaborated on database optimization to improve query performance and reduce latency.',
      'Worked in a GitLab-driven CI/CD environment with rigorous code review and automated testing processes.',
      'Improved SEO and server-side rendering performance for web applications.',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Laravel', 'GitLab', 'Docker', 'GCP'],
  },
  {
    title: 'Software Developer',
    company: 'Credit Saint',
    timePeriod: 'Dec 2020 - Feb 2022',
    description:
      'Redeveloped a financial product into a Single Page Application, improving page load times by 60%.',
    responsibilities: [
      'Migrated a legacy WordPress solution to a Single Page Application using Vue.js and Laravel.',
      'Designed and optimized MySQL database schemas, reducing query response times by 40%.',
      'Integrated AWS services such as Elastic Beanstalk and Lambda for seamless deployment.',
      'Implemented RESTful APIs to support real-time dashboard updates and analytics.',
    ],
    technologies: ['Vue.js', 'Laravel', 'AWS', 'MySQL', 'Elastic Beanstalk'],
  },
  {
    title: 'Full Stack Engineer',
    company: 'Easeenet',
    timePeriod: 'Jan 2018 - Dec 2020',
    description:
      'Played a key role in developing the core product for a startup, improving system efficiency and user experience.',
    responsibilities: [
      'Developed a Single Page Application using Laravel and Vue.js to support dynamic workflows.',
      'Created a browser extension with JavaScript to integrate the product into third-party services.',
      'Collaborated with a mobile app team to ensure seamless API integration.',
      'Optimized database performance, reducing query response times by 30%.',
    ],
    technologies: ['Vue.js', 'Laravel', 'JavaScript', 'MySQL'],
  },
  {
    title: 'Software Developer',
    company: 'Whitman Partners',
    timePeriod: 'Jan 2018 - Dec 2020',
    description:
      'Created innovative software solutions for web scraping, data processing, and analytics.',
    responsibilities: [
      'Built a web-scraping robot to gather critical data, increasing operational efficiency.',
      'Developed internal dashboards with Vue.js and PHP to support analytics workflows.',
      'Implemented cloud infrastructure on DigitalOcean, reducing on-premise hardware reliance.',
      'Optimized MySQL databases to improve query performance for data-driven applications.',
    ],
    technologies: ['PHP', 'Vue.js', 'DigitalOcean', 'MySQL', 'Node.js'],
  },
  {
    title: 'Software Developer',
    company: 'Gamigo',
    timePeriod: 'Jun 2015 - Jul 2017',
    description:
      'Contributed to the development and maintenance of back-end systems for a mobile game platform.',
    responsibilities: [
      'Enhanced game backend functionality using PHP, improving user experience.',
      'Integrated and optimized MongoDB and Cassandra databases to support dynamic game features.',
      'Collaborated with the remote team to troubleshoot and optimize mobile features.',
    ],
    technologies: ['PHP', 'MongoDB', 'Cassandra'],
  },
  {
    title: 'Entry Web Developer',
    company: 'Extrinsic Studio LLC',
    timePeriod: 'Nov 2013 - Jun 2015',
    description:
      'Worked on building and integrating virtual currency and digital goods systems for online platforms.',
    responsibilities: [
      'Developed virtual goods systems using HTML, CSS, JavaScript, and Angular.',
      'Integrated payment processors to support microtransactions and real-time updates.',
      'Managed community support, troubleshooting customer issues with online systems.',
      'Tested and optimized applications for cross-browser compatibility.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap'],
  },
];

/**
 * WorkPage Component
 * Displays detailed work experience with modals for further context and responsibilities.
 */
export default function WorkPage() {
  const [selectedWork, setSelectedWork] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (work: WorkDetails) => {
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
            <WorkBlock
              key={index}
              work={work}
              onClick={openModal}
            />
          ))}
        </section>

        <WorkModal
          isVisible={isModalVisible}
          onClose={closeModal}
          work={selectedWork}
        />
      </main>
    </Layout>
  );
}
