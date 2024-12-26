import Layout from '@theme/Layout';
import React, { useState } from 'react';
import WorkBlock from '../components/Work/WorkBlock';
import { WorkDetails } from '../models/WorkDetails';
import WorkModal from '../components/Work/WorkModal';

export const BudgetFinderWorkDetails: WorkDetails = {
  title: 'Budget Finder',
  roleType: 'Budgeting & Shared Living',
  description:
    'Currently developing a budgeting application to help users manage shared expenses effectively. Budget Finder is designed for roommates, families, and shared households to track, split, and settle expenses seamlessly.',
  responsibilities: [
    'Designing and implementing a Laravel backend to handle user authentication, expense management, and reporting.',
    'Developing a responsive web application using Quasar Vue for desktop and mobile compatibility.',
    'Integrating a payment system for settling shared expenses through external APIs.',
    'Implementing real-time notifications using WebSockets for updates on shared expenses and transactions.',
    'Designing and optimizing a MySQL database schema for expense tracking and reporting.',
  ],
  technologies: [
    {
      name: 'Laravel',
      description: 'Used for backend development and API creation.',
      impact: [
        'Enabling secure authentication and efficient expense management.',
        'Streamlining backend operations and data handling.',
      ],
    },
    {
      name: 'Quasar Vue',
      description: 'Frontend framework for building responsive UIs.',
      impact: [
        'Delivering a user-friendly interface across devices.',
        'Providing a seamless experience for both web and mobile users.',
      ],
    },
    {
      name: 'WebSockets',
      description: 'Enabling real-time notifications and updates.',
      impact: ['Improving user engagement with instant expense tracking.'],
    },
    {
      name: 'MySQL',
      description: 'Database used for storing user and expense data.',
      impact: ['Optimizing queries for fast data retrieval and reporting.'],
    },
  ],
  keyAchievements: [
    'Building a fully responsive budgeting application supporting cross-platform use.',
    'Integrating secure payment processing for shared expense settlements.',
    'Achieving high user satisfaction through intuitive UI and robust features.',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Ensuring smooth cross-platform compatibility.',
      solution:
        'Utilizing Quasar Vue for responsive design and consistent user experience across devices.',
    },
    {
      challenge: 'Managing real-time updates for shared expenses.',
      solution: 'Integrating WebSockets for seamless real-time notifications.',
    },
  ],
  // resources: [
  //   {
  //     type: 'liveProject',
  //     label: 'Budget Finder Website',
  //     url: 'https://budgetfinder.app',
  //   },
  //   {
  //     type: 'liveProject',
  //     label: 'Budget Finder Help',
  //     url: 'https://help.budgetfinder.app/',
  //   },
  // ],
};

export const MabraiDetails: WorkDetails = {
  title: 'Mabrai',
  roleType: 'Payment Gateway',
  description:
    'Mabrai is a versatile donation and payment gateway, actively being developed to provide two distinct solutions: Mabrai Portals, designed for privacy, segregation, and advanced customization, and Mabrai Gateway, a streamlined global payment solution catering to streamers, online games, and virtual marketplaces.',
  responsibilities: [
    'Designing and implementing a NestJS backend with GraphQL for both Portals and Gateway.',
    'Developing a robust RBAC (Role-Based Access Control) system with granular permissions.',
    'Building API integrations to support third-party login systems and external services.',
    'Creating tools to support virtual currencies, community engagement, and shop-like features.',
    'Integrating fraud detection systems with minimal data sharing to ensure secure transactions.',
    'Optimizing for scalability and high transaction volumes while maintaining data segregation.',
    'Leveraging Next.js with the app router to deliver fast, server-rendered pages for the frontend.',
    'Implementing modern SEO best practices and efficient data-fetching strategies.',
  ],
  technologies: [
    {
      name: 'NestJS',
      description:
        'Backend framework for building scalable and modular systems.',
      impact: [
        'Ensuring maintainability and scalability of the backend architecture.',
        'Streamlining development with TypeScript and modularized components.',
      ],
    },
    {
      name: 'GraphQL (Apollo Fastify)',
      description: 'API technology for efficient front-end data querying.',
      impact: [
        'Improving front-end querying speed and flexibility with GraphQL.',
        'Enabling seamless integration for custom and third-party systems.',
      ],
    },
    {
      name: 'Next.js',
      description:
        'Frontend framework for building modern, server-rendered applications.',
      impact: [
        'Delivering performant, SEO-optimized pages with Server-Side Rendering (SSR).',
        'Streamlining frontend development with efficient routing and data-fetching mechanisms.',
        'Improving user experience with fast-loading, interactive pages.',
      ],
    },
    {
      name: 'RBAC',
      description: 'Role-Based Access Control for admin management.',
      impact: [
        'Providing Master Admins with non-delegable full permissions.',
        'Allowing granular control over Sub-Admin permissions for secure operations.',
      ],
    },
    {
      name: 'WebSockets',
      description: 'Real-time notifications and updates.',
      impact: [
        'Improving user experience with instant payment and notification updates.',
        'Supporting real-time interactions for donations and virtual currency management.',
      ],
    },
    {
      name: 'Fraud Detection',
      description: 'Integrated tools to minimize risks in payment processes.',
      impact: [
        'Protecting customers and Payees with robust fraud detection systems.',
        'Ensuring secure and reliable payment experiences across platforms.',
      ],
    },
  ],
  keyAchievements: [
    'Creating a scalable and modular system for handling global and segregated payment solutions.',
    'Building customizable Portals with theming, branding, and virtual currency support.',
    'Delivering a user-centric experience with real-time notifications and seamless API integrations.',
    'Developing a Next.js app with SSR and dynamic routing, ensuring performant and SEO-optimized user interfaces.',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Ensuring full privacy and data segregation for Portals.',
      solution:
        'Implementing instance-based architecture with dedicated databases and customizable logins.',
    },
    {
      challenge: 'Handling high transaction volumes with minimal latency.',
      solution:
        'Optimizing backend systems with NestJS and Apollo Fastify for efficient handling.',
    },
    {
      challenge: 'Providing intuitive tools for admins and payees.',
      solution:
        'Designing a user-friendly RBAC system and customizable admin interfaces.',
    },
    {
      challenge: 'Delivering a fast and SEO-friendly user interface.',
      solution:
        'Leveraging Next.js for server-side rendering and optimizing the application with modern best practices.',
    },
  ],
};

const personalExperience: WorkDetails[] = [
  BudgetFinderWorkDetails,
  MabraiDetails,
];

/**
 * PersonalsPage Component
 */
export default function PersonalsPage() {
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
      title='About'
      description='Learn more about me.'
    >
      <main className='container mx-auto mt-12'>
        <section>
          <h1 className='text-4xl text-center md:text-5xl font-bold font-serif mb-6'>
            Personals
          </h1>

          <div className='bg-black/20 rounded p-6 max-w-xl mx-auto mb-12'>
            <p className='text-lg md:text-xl font-body text-center text-neutral-light'>
              Beyond the code, explore the projects and passions that define me.
              From personal endeavors to creative pursuits, this page offers a
              glimpse into the unique interests that shape my journey as a
              developer and an individual.
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-8'>
            {personalExperience.map((work, index) => (
              <div
                key={index}
                className='w-full sm:w-1/2 lg:w-1/3'
              >
                <WorkBlock
                  work={work}
                  onClick={openModal}
                  className='h-64'
                />
              </div>
            ))}
          </div>
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
