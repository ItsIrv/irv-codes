import React, { useState } from 'react';
import Layout from '@theme/Layout';
import WorkBlock from '@site/src/components/Work/WorkBlock';
import WorkModal from '@site/src/components/Work/WorkModal';
import { WorkDetails } from '@site/src/models/WorkDetails';

export const ExtrinsicStudioWorkDetails: WorkDetails = {
  title: 'Entry Web Developer',
  company: 'Extrinsic Studio LLC',
  timePeriod: 'Nov 2013 – Jun 2015',
  roleType: 'Full-Time',
  description:
    'Sole developer responsible for the virtual currency and monetization department, creating online cash shops and payment portals for online games.',
  responsibilities: [
    'Developed and maintained online cash shops and payment portals for multiple online games.',
    'Designed and implemented a custom PHP framework to power the backend systems.',
    'Integrated third-party payment APIs, including webhooks and instant payment notifications, ensuring seamless transaction processing.',
    'Built and optimized MySQL databases to support virtual currency systems, ensuring reliability and scalability.',
    'Created innovative features for the store, including limited-time sales and a raffle game to drive user engagement.',
    'Configured and maintained dedicated server infrastructure hosted on OVH, utilizing Microsoft IIS for web hosting.',
    'Implemented workflows to ensure semi-instant gratification for users purchasing virtual goods.',
  ],
  technologies: [
    {
      name: 'PHP',
      description: 'Developed backend systems using a custom-built framework.',
      impact: [
        'Streamlined backend operations with reusable components and efficient code.',
        'Supported rapid feature development and ensured scalability.',
      ],
    },
    {
      name: 'HTML/CSS',
      description: 'Created user interfaces for online cash shops.',
      impact: [
        'Built UI components for e-commerce features, enhancing user engagement.',
        'Ensured compatibility across major browsers and devices.',
      ],
    },
    {
      name: 'Bootstrap',
      description:
        'Used to build responsive and visually appealing user interfaces.',
      impact: [
        'Accelerated development of responsive web interfaces, improving user accessibility.',
      ],
    },
    {
      name: 'jQuery',
      description: 'Enhanced user interactivity with dynamic components.',
      impact: [
        'Implemented smooth user interactions and animations for the e-commerce platform.',
      ],
    },
    {
      name: 'MySQL',
      description:
        'Designed and maintained databases for virtual currency systems.',
      impact: [
        'Optimized database queries, reducing response times and improving overall performance.',
      ],
    },
    {
      name: 'Microsoft IIS',
      description: 'Configured and maintained server infrastructure.',
      impact: [
        'Ensured high availability and reliability for e-commerce services.',
      ],
    },
    {
      name: 'SVN',
      description: 'Used for source control and collaboration.',
      impact: [
        'Maintained version control for all projects, ensuring stability during deployments.',
      ],
    },
    {
      name: 'Dedicated Servers (OVH)',
      description: 'Managed hosting environments for production applications.',
      impact: [
        'Provided a reliable and scalable hosting solution to handle user traffic.',
      ],
    },
  ],
  keyAchievements: [
    'Boosted revenue through a self-conceived raffle game, increasing purchases by over 200%.',
    'Designed limited-time sales campaigns, significantly enhancing user engagement and sales.',
  ],
  challengesAndSolutions: [
    {
      challenge:
        'Building a seamless purchase-to-receipt workflow for virtual goods.',
      solution:
        'Developed efficient workflows based on payment processor capabilities, ensuring a smooth user experience.',
    },
  ],
  projectsOrInitiatives: [
    {
      name: 'Virtual Currency Platform',
      description: 'Developed the entire cash shop system for online games.',
      role: 'Sole Developer',
      impact: [
        'Generated all company revenue through the platform, supporting business growth.',
      ],
    },
    {
      name: 'Raffle Game',
      description: 'Created a raffle system within the cash shop.',
      role: 'Sole Developer',
      impact: ['Doubled user purchases on specific items, increasing revenue.'],
    },
  ],
};

export const GamigoWorkDetails: WorkDetails = {
  title: 'Software Developer',
  company: 'Gamigo',
  timePeriod: 'Jun 2015 – Jul 2017',
  roleType: 'Full-Time',
  description:
    'Sole backend developer responsible for maintaining and optimizing an online flash-based game backend, while building a new, scalable backend system to support future versions.',
  responsibilities: [
    'Maintained and optimized the legacy backend for an online flash-based game, addressing critical bugs and performance issues.',
    'Designed and developed a new backend codebase using PHP and Composer for dependency management.',
    'Migrated the database from MongoDB to Cassandra, designing and implementing schemas for scalability and reliability.',
    'Configured and maintained CentOS virtual machines to host backend systems.',
    'Integrated Splunk and HoneyTracks for monitoring and analytics, providing insights into system performance and user behavior.',
    'Optimized database queries, reducing feature processing times from seconds to milliseconds.',
    'Developed thorough API documentation and Postman collections for seamless integration with the Flash team.',
  ],
  technologies: [
    {
      name: 'PHP',
      description: 'Primary language for backend development and optimization.',
      impact: [
        'Enabled scalable and maintainable backend systems through OOP principles.',
        'Reduced technical debt by refactoring legacy code.',
      ],
    },
    {
      name: 'Composer',
      description: 'Used for managing dependencies in the new backend.',
      impact: [
        'Streamlined development by incorporating modern PHP libraries and packages.',
      ],
    },
    {
      name: 'Cassandra',
      description: 'Implemented as the new database for the game backend.',
      impact: [
        'Supported high-traffic scenarios with reliable, scalable data handling.',
        'Improved data consistency and performance for game features.',
      ],
    },
    {
      name: 'MongoDB',
      description: 'Maintained legacy database systems before the migration.',
      impact: [
        'Optimized queries to improve the performance of game features.',
      ],
    },
    {
      name: 'CentOS',
      description: 'Configured VMs to host backend applications.',
      impact: [
        'Provided a secure and stable environment for hosting the game backend.',
      ],
    },
    {
      name: 'Splunk & HoneyTracks',
      description: 'Integrated for monitoring and analytics.',
      impact: [
        'Provided actionable insights to improve system performance and detect issues early.',
      ],
    },
  ],
  keyAchievements: [
    'Reduced game feature processing times from seconds to ~500ms, significantly improving user experience.',
    'Built a new backend system capable of handling 4x the previous request volume.',
    'Improved game stability by resolving critical bugs and enhancing system reliability.',
  ],
  challengesAndSolutions: [
    {
      challenge:
        'Building a new backend while ensuring legacy system compatibility.',
      solution:
        'Created a detailed migration plan and maintained backward compatibility to ensure a seamless transition.',
    },
    {
      challenge: 'Migrating data from MongoDB to Cassandra without downtime.',
      solution:
        'Designed and executed phased migrations, validating data integrity at each step.',
    },
  ],
  projectsOrInitiatives: [
    {
      name: 'Backend Redesign',
      description:
        'Developed a new backend for the flash-based game with modern architecture.',
      role: 'Sole Backend Developer',
      impact: [
        'Increased scalability and stability for future game iterations.',
        'Enhanced observability with integrated monitoring tools.',
      ],
    },
    {
      name: 'Database Migration',
      description: 'Migrated game data from MongoDB to Cassandra.',
      role: 'Sole Backend Developer',
      impact: [
        'Enabled better performance monitoring and scalability for high traffic.',
      ],
    },
  ],
};

export const EaseenetWorkDetails: WorkDetails = {
  title: 'Full Stack Engineer',
  company: 'Easeenet',
  timePeriod: 'Jan 2018 – Dec 2020',
  roleType: 'Contract',
  description:
    'Contracted to develop and roll out a secure legacy vault product, including a web application, browser extension, and landing website.',
  responsibilities: [
    'Developed and deployed a web application and browser extension for storing and sharing sensitive user information.',
    'Designed and implemented database schemas in MySQL, integrating Redis for performance improvements.',
    'Configured production and development environments on DigitalOcean droplets.',
    'Collaborated closely with the CEO and CTO to adjust tasks and priorities on a daily basis.',
    'Ensured user data security by meeting industry standards and legal requirements.',
    'Built a landing page to market the product and attract users.',
    'Mentored an entry-level developer, fostering their growth in web development.',
  ],
  technologies: [
    {
      name: 'Vue.js',
      description:
        'Frontend framework used to build the user interface for the web application.',
      impact: [
        'Built an intuitive user interface without design documents, using iterative feedback from stakeholders.',
        'Implemented dynamic data handling for real-time updates to the user interface.',
        'Created reusable components to streamline development and ensure consistency across the application.',
      ],
    },
    {
      name: 'Laravel',
      description:
        'Backend framework used for secure and scalable server-side logic.',
      impact: [
        'Developed secure API endpoints for the web application and browser extension.',
        "Utilized Laravel's encryption helpers to securely handle sensitive user data, ensuring compliance with legal standards.",
        'Implemented robust authentication and authorization mechanisms for account security.',
        'Integrated Redis caching to improve query performance and reduce server load.',
        'Built background jobs for asynchronous tasks, such as data processing and notifications.',
      ],
    },
    {
      name: 'Redis',
      description: 'Implemented as a caching layer to improve performance.',
      impact: [
        'Reduced load times for frequently accessed data by implementing optimized caching strategies.',
        'Handled session storage for a scalable and fast user experience.',
      ],
    },
    {
      name: 'MySQL',
      description:
        'Primary database for the application, designed with security and scalability in mind.',
      impact: [
        'Designed and normalized the database schema to support complex relationships and future scalability.',
        'Wrote optimized queries to handle large datasets efficiently.',
        'Implemented backup strategies to ensure data integrity and reliability.',
      ],
    },
    {
      name: 'DigitalOcean',
      description:
        'Configured and managed DigitalOcean droplets for development and production environments.',
      impact: [
        'Set up secure and reliable environments for staging and production.',
        'Implemented server hardening techniques to minimize vulnerabilities.',
      ],
    },
    {
      name: 'Browser Extension',
      description:
        'Developed to integrate with the web app, allowing users to access features directly from their browser.',
      impact: [
        'Designed the extension to seamlessly sync with the web application for password and file management.',
        'Added custom features like one-click password retrieval and secure document access.',
        'Provided a streamlined user experience for both Chrome and Firefox browsers.',
      ],
    },
  ],
  keyAchievements: [
    'Delivered a secure, functional product that exceeded initial requirements.',
    'Enhanced ideas and improved the product beyond initial scope.',
    'Implemented strong security measures to protect sensitive user information.',
    'Built a robust browser extension to extend the functionality of the web app.',
    'Designed a scalable and secure database architecture for the legacy vault.',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Ensuring sensitive user information was stored securely.',
      solution:
        'Researched and implemented best practices for security, leveraging Laravel encryption helpers and Redis to handle sensitive data securely.',
    },
  ],
  projectsOrInitiatives: [
    {
      name: 'Legacy Vault Product',
      description:
        'Developed a web application, browser extension, and landing website for a secure legacy vault product.',
      role: 'Lead Developer',
      impact: [
        'Delivered a secure, scalable, and user-friendly product.',
        'Enabled seamless data sharing and inheritance for users.',
      ],
    },
  ],
};

export const WhitmanPartnersWorkDetails: WorkDetails = {
  title: 'Full Stack Engineer',
  company: 'Whitman Partners',
  timePeriod: 'Jan 2018 – Dec 2020',
  roleType: 'Contract',
  description:
    'Contracted to maintain and enhance a fragile legacy CRM while building a modernized suite of portals for candidates, clients, and recruiters. Designed a web scraping bot that became a key driver of company growth.',
  responsibilities: [
    'Maintained and optimized the legacy PHP/jQuery CRM system used by the company.',
    'Developed a modern suite of portals using NodeJS, Express, and Vue.js, supporting candidates, clients, and recruiters.',
    'Designed and implemented a web scraping bot capable of dynamic JavaScript parsing and custom DOM selector configuration.',
    'Set up and maintained Microsoft Azure cloud infrastructure for the new suite and web scraping bot.',
    'Collaborated daily with stakeholders to prioritize tasks and deliver critical features.',
    'Mentored two junior developers, providing technical guidance and code reviews.',
    'Optimized database queries and restructured schemas to resolve performance bottlenecks in the legacy system.',
  ],
  technologies: [
    {
      name: 'PHP',
      description: 'Maintained the legacy CRM backend.',
      impact: [
        'Resolved critical performance issues and stabilized the system.',
        'Improved reliability for daily business operations.',
      ],
    },
    {
      name: 'NodeJS & Express',
      description: 'Built the backend for the modern suite of portals.',
      impact: [
        'Delivered a scalable, maintainable backend that met enterprise requirements.',
        'Enabled seamless integration with frontend portals and third-party systems.',
      ],
    },
    {
      name: 'Vue.js',
      description: 'Developed the front-end for the new portals.',
      impact: [
        'Created user-friendly interfaces with a focus on accessibility.',
        'Implemented dynamic dashboards featuring stats, graphs, and reports for recruiters.',
      ],
    },
    {
      name: 'Web Scraper',
      description: 'Developed a custom web scraping bot.',
      impact: [
        'Automated job listing discovery, increasing daily listings from zero to over ten.',
        'Reduced manual labor and significantly boosted company revenue.',
      ],
    },
    {
      name: 'Redis',
      description: 'Implemented caching for performance optimization.',
      impact: [
        'Reduced server load and improved response times for frequently accessed data.',
      ],
    },
    {
      name: 'MySQL',
      description: 'Maintained and optimized the legacy database.',
      impact: [
        'Resolved query inefficiencies and improved overall system performance.',
      ],
    },
    {
      name: 'Microsoft Azure',
      description:
        'Configured and deployed the new suite on Azure cloud infrastructure.',
      impact: [
        'Ensured a secure, scalable hosting environment for the new suite and web scraper.',
      ],
    },
  ],
  keyAchievements: [
    'Eliminated manual labor and increased job listing discovery to over ten new listings per day with a custom web scraper.',
    'Developed a modernized suite of portals that became critical to daily business operations.',
    'Resolved long-standing performance bottlenecks in the legacy CRM system.',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Maintaining and enhancing a fragile legacy PHP system.',
      solution:
        'Refactored critical components, optimized queries, and improved stability without disrupting operations.',
    },
    {
      challenge:
        'Building an enterprise backend with NodeJS and Express for the first time.',
      solution:
        'Researched best practices and applied SOLID principles to ensure scalability and maintainability.',
    },
  ],
  projectsOrInitiatives: [
    {
      name: 'Recruiter Suite',
      description:
        'Built a comprehensive suite of portals for candidates, clients, and recruiters.',
      role: 'Lead Developer',
      impact: [
        'Enabled streamlined operations and increased productivity for all stakeholders.',
        'Became the central tool used by the company daily.',
      ],
    },
    {
      name: 'Web Scraping Bot',
      description:
        'Designed and implemented a bot to automate job listing discovery.',
      role: 'Lead Developer',
      impact: [
        'Increased daily job listings from none to over ten, driving company growth.',
        'Streamlined manual workflows, saving employee time and effort.',
      ],
    },
  ],
};

export const CreditSaintWorkDetails: WorkDetails = {
  title: 'Full Stack Engineer',
  company: 'Credit Saint',
  timePeriod: 'Dec 2020 – Feb 2022',
  roleType: 'Full-Time',
  description:
    'Led the redevelopment of Credit Squad, transitioning it from WordPress to Laravel while building key analytics tools and ensuring compliance with FinTech regulations. Built ETL pipelines for Amazon QuickSight dashboards and initiated development of a mobile application.',
  responsibilities: [
    'Migrated Credit Squad from WordPress to Laravel, improving performance and scalability.',
    'Built an ETL pipeline in Python to process and migrate data to Amazon QuickSight dashboards, ensuring PII removal.',
    'Created stakeholder-requested analytics dashboards to display key business metrics.',
    'Optimized MySQL and Postgres databases during migration to improve performance.',
    'Configured GitHub Workflows for CI/CD, including feature branch testing and release pipelines.',
    'Developed the foundation for Credit Squad’s mobile application using Angular and AWS Lambda.',
    'Ensured compliance with FinTech regulations like SOC2 by securing sensitive user data.',
    'Collaborated with stakeholders and used Agile methodologies for efficient task management.',
  ],
  technologies: [
    {
      name: 'Laravel',
      description:
        'Rebuilt the Credit Squad platform from WordPress to Laravel.',
      impact: [
        'Enhanced system reliability, scalability, and performance.',
        'Improved page load times from ~2 seconds to an average of 200ms.',
      ],
    },
    {
      name: 'Python',
      description: 'Used for building ETL pipelines for Amazon QuickSight.',
      impact: [
        'Processed large datasets efficiently, enabling interactive dashboards for stakeholders.',
        'Ensured compliance by removing PII from data during processing.',
      ],
    },
    {
      name: 'Amazon QuickSight',
      description: 'Developed analytics dashboards for business insights.',
      impact: [
        'Provided stakeholders with actionable insights through dynamic dashboards.',
        'Improved decision-making with real-time analytics and visualizations.',
      ],
    },
    {
      name: 'Angular',
      description:
        'Used to lay the foundation for the Credit Squad mobile application.',
      impact: [
        'Enabled cross-platform compatibility and future scalability for mobile users.',
      ],
    },
    {
      name: 'AWS Beanstalk',
      description: 'Managed infrastructure for Credit Squad deployments.',
      impact: [
        'Provided a reliable and scalable hosting environment for the Laravel platform.',
      ],
    },
    {
      name: 'GitHub Workflows',
      description: 'Configured CI/CD pipelines for testing and deployment.',
      impact: [
        'Streamlined development workflows with automated checks and release pipelines.',
      ],
    },
  ],
  keyAchievements: [
    'Reduced page load times from ~2 seconds to an average of 200ms after migrating to Laravel.',
    'Built an ETL pipeline in Python, enabling seamless data migration and compliance with SOC2 regulations.',
    'Developed interactive dashboards on Amazon QuickSight, providing stakeholders with actionable insights.',
  ],
  challengesAndSolutions: [
    {
      challenge: 'First time using Python to build an enterprise ETL system.',
      solution:
        'Quickly learned Python and built a robust pipeline to process large datasets and ensure PII compliance.',
    },
    {
      challenge: 'Ensuring compliance with FinTech regulations like SOC2.',
      solution:
        'Studied and adhered to SOC2 standards, particularly around secure data handling and PII removal.',
    },
  ],
  projectsOrInitiatives: [
    {
      name: 'Credit Squad Redevelopment',
      description:
        'Rebuilt Credit Squad from WordPress to Laravel and optimized system performance.',
      role: 'Lead Developer',
      impact: [
        'Improved platform reliability and user experience.',
        'Reduced page load times significantly, enhancing customer satisfaction.',
      ],
    },
    {
      name: 'ETL Pipeline',
      description:
        'Built an enterprise ETL system in Python to migrate data to Amazon QuickSight.',
      role: 'Lead Developer',
      impact: [
        'Enabled efficient data processing and actionable analytics for stakeholders.',
      ],
    },
    {
      name: 'Amazon QuickSight Dashboards',
      description:
        'Developed interactive dashboards to display key metrics and analytics.',
      role: 'Lead Developer',
      impact: [
        'Provided real-time insights for better business decision-making.',
      ],
    },
  ],
};

export const RXMGWorkDetails: WorkDetails = {
  title: 'Full Stack Engineer',
  company: 'RXMG',
  timePeriod: 'Mar 2022 – Jan 2024',
  roleType: 'Full-Time',
  description:
    'Collaborated with a 25-person Scrum team to develop and maintain a CMS/CRM for RXMG’s digital marketing platform, including email & SMS campaign management, data ingestion, and system tracking.',
  responsibilities: [
    'Collaborated on email campaign management and data ingestion systems for RXMG’s CMS/CRM.',
    'Integrated new Email Service Providers into the platform, handling third-party APIs and system tracking.',
    'Delivered critical bug fixes to ensure system reliability and stakeholder satisfaction.',
    'Set frontend guidelines and crafted elegant, reusable UI components.',
    'Performed database migrations, schema design, and query optimizations across multiple database systems.',
    'Supported rigorous GitLab pipelines for code reviews, static analysis, and micro-environment testing.',
    'Engaged in weekly pair programming, knowledge-sharing sessions, and team book clubs.',
  ],
  technologies: [
    {
      name: 'Laravel',
      description:
        'Backend framework for CMS/CRM and email campaign management.',
      impact: [
        'Enabled scalable API integrations and seamless backend processing.',
        'Provided secure and robust features for email campaign workflows.',
      ],
    },
    {
      name: 'Nuxt.js & Vue.js',
      description:
        'Frontend frameworks for building interactive and reusable UI components.',
      impact: [
        'Created consistent and user-friendly UIs with frontend innovation.',
        'Set reusable component patterns for streamlined development.',
      ],
    },
    {
      name: 'Redis',
      description: 'Implemented caching for data-intensive operations.',
      impact: [
        'Reduced server load and response times, improving system performance.',
      ],
    },
    {
      name: 'Postgres & MongoDB',
      description: 'Primary databases for application data storage.',
      impact: [
        'Designed schemas and optimized queries for high-performance operations.',
      ],
    },
    {
      name: 'InfluxDB',
      description: 'Used for time-series data tracking and analytics.',
      impact: [
        'Enabled efficient data storage and retrieval for tracking email clicks and opens.',
      ],
    },
    {
      name: 'Kubernetes',
      description: 'Collaborated on microservice deployment pipelines.',
      impact: [
        'Supported a containerized architecture for seamless scalability.',
      ],
    },
    {
      name: 'GitLab Pipelines',
      description: 'Ensured rigorous CI/CD workflows for feature delivery.',
      impact: [
        'Enabled static analysis, code quality checks, and ticket-specific environments.',
      ],
    },
  ],
  keyAchievements: [
    'Integrated multiple Email Service Providers, expanding system capabilities and stakeholder satisfaction.',
    'Contributed to frontend innovations that improved UI consistency and usability.',
    'Gained hands-on experience with Redis, Terraform, Kubernetes, and GCP in a complex environment.',
  ],
  challengesAndSolutions: [
    {
      challenge:
        'Understanding and navigating a massive, complex codebase with intricate logic.',
      solution:
        'Studied the codebase extensively, asked questions proactively, and engaged in team-wide knowledge-sharing sessions.',
    },
    {
      challenge:
        'Integrating APIs for new Email Service Providers with varying requirements.',
      solution:
        'Collaborated with stakeholders, thoroughly tested integrations, and ensured seamless workflows with third-party systems.',
    },
  ],
  projectsOrInitiatives: [
    {
      name: 'Email Service Provider Integration',
      description:
        'Integrated multiple third-party Email Service Providers into the CMS/CRM platform.',
      role: 'Collaborative Engineer',
      impact: [
        'Expanded system capabilities, supporting diverse business needs.',
        'Enhanced email tracking and targeting workflows.',
      ],
    },
    {
      name: 'Frontend Guidelines',
      description:
        'Established reusable component patterns and guidelines for frontend development.',
      role: 'Collaborative Engineer',
      impact: [
        'Improved development efficiency and UI consistency across the platform.',
      ],
    },
  ],
};

export const PropfactWorkDetails: WorkDetails = {
  title: 'Full Stack Engineer',
  company: 'Propfact',
  timePeriod: 'March 2024 – Aug 2024',
  roleType: 'Contract',
  description:
    'Contracted to refactor and rebuild the codebase for a real-estate app similar to Zillow, focusing on establishing a solid foundation for the React Native application.',
  responsibilities: [
    'Rebuilt and restructured a poorly designed React Native codebase.',
    'Collaborated closely with a C# principal engineer to align the application with the backend systems.',
    'Established scalable coding practices and modular architecture for future development.',
    'Identified and resolved critical technical debt in the existing codebase.',
    'Improved the overall performance, maintainability, and reliability of the application.',
  ],
  technologies: [
    {
      name: 'React Native',
      description: 'Refactored the mobile application for iOS and Android.',
      impact: [
        'Enhanced code readability and modularity for future scalability.',
        'Improved application performance and user experience.',
      ],
    },
    {
      name: 'TypeScript',
      description: 'Implemented type safety across the React Native codebase.',
      impact: [
        'Reduced runtime errors and improved code reliability.',
        'Enabled consistent and maintainable coding practices.',
      ],
    },
    {
      name: 'C#',
      description:
        'Collaborated on integrating the frontend application with a C# backend.',
      impact: [
        'Ensured seamless communication between the React Native app and backend systems.',
        'Improved API utilization for dynamic real-estate data.',
      ],
    },
    {
      name: 'GitHub',
      description: 'Used for version control and collaborative development.',
      impact: [
        'Maintained organized and efficient code versioning throughout the project.',
      ],
    },
  ],
  keyAchievements: [
    'Successfully refactored and optimized a poorly implemented React Native codebase.',
    'Established a maintainable foundation for future development, aligning with best practices.',
    'Enhanced collaboration with backend engineers to ensure seamless integration.',
  ],
  challengesAndSolutions: [
    {
      challenge:
        'Managing extensive technical debt in the React Native codebase.',
      solution:
        'Systematically refactored and modularized components to improve performance and maintainability.',
    },
    {
      challenge:
        'Ensuring frontend and backend alignment in a distributed team environment.',
      solution:
        'Maintained consistent communication with the backend engineer and implemented API testing to verify integration.',
    },
  ],
  projectsOrInitiatives: [
    {
      name: 'React Native Codebase Overhaul',
      description:
        'Refactored the React Native codebase for improved performance and scalability.',
      role: 'Lead Developer',
      impact: [
        'Improved maintainability and future-proofed the application for new features.',
      ],
    },
    {
      name: 'Frontend-Backend Integration',
      description:
        'Collaborated with a C# engineer to align the mobile app with backend systems.',
      role: 'Collaborative Developer',
      impact: [
        'Ensured robust API communication and improved data flow between systems.',
      ],
    },
  ],
  leadershipOrMentorship: [
    'Provided recommendations for best practices in React Native development to ensure long-term maintainability.',
  ],
  trainingOrCertificationsAcquired: [
    'Gained deeper insight into real-estate domain-specific application development.',
  ],
};

export const PlumbingLegendWorkDetails: WorkDetails = {
  title: 'Full Stack Engineer',
  company: 'Plumbing Legend (Clackamas Community College)',
  timePeriod: 'Jan 2024 – Present',
  roleType: 'Contract',
  description:
    'Developed a multi-platform educational application to track student progress, deliver lectures, and facilitate communication. Integrated an AI assistant for plumbing guidance based on the Oregon Plumbers Specialty Code.',
  responsibilities: [
    'Built a Laravel backend to handle API endpoints, user authentication, and data management.',
    'Developed a responsive web app and cross-platform iOS/Android apps using Quasar Vue.',
    'Implemented real-time capabilities with WebSockets for classroom chatrooms and notifications.',
    'Created an AI assistant using Retrieval-Augmented Generation (RAG) for plumbing-related questions.',
    'Designed and implemented database schemas in MySQL to manage student progress and classroom content.',
    'Currently deployed on a digital cloud infrastructure with plans for AWS migration.',
    'Managed all development tasks independently with minimal client direction.',
  ],
  technologies: [
    {
      name: 'Laravel',
      description: 'Backend framework for managing APIs and data.',
      impact: [
        'Provided a robust foundation for user management, content delivery, and student progress tracking.',
      ],
    },
    {
      name: 'Quasar Vue',
      description: 'Frontend framework for building web and mobile apps.',
      impact: [
        'Enabled cross-platform compatibility and a seamless user experience.',
      ],
    },
    {
      name: 'WebSockets',
      description: 'Implemented for real-time chat and notifications.',
      impact: [
        'Enhanced classroom communication and engagement with real-time features.',
      ],
    },
    {
      name: 'AI & RAG',
      description:
        'Created a plumbing-focused AI assistant using RAG techniques.',
      impact: [
        'Provided accurate and domain-specific responses to student questions.',
        'Improved learning by integrating the Oregon Plumbers Specialty Code into the assistant.',
      ],
    },
    {
      name: 'MySQL',
      description:
        'Structured database for storing classroom and student data.',
      impact: [
        'Designed for extensibility to support future features and scalability.',
      ],
    },
    {
      name: 'Digital Cloud Infrastructure',
      description: 'Currently hosting the application.',
      impact: [
        'Supports real-time features and multi-platform deployments.',
        'Planned migration to AWS for better scalability and reliability.',
      ],
    },
  ],
  keyAchievements: [
    'Delivered a multi-platform app tailored for educational use.',
    'Integrated a domain-specific AI assistant with RAG methodologies.',
    'Implemented real-time chat and notifications to enhance classroom engagement.',
  ],
  challengesAndSolutions: [
    {
      challenge: 'First time working with AI agents and RAG methodologies.',
      solution:
        'Researched and implemented AI techniques to deliver accurate plumbing-specific guidance.',
    },
    {
      challenge:
        'Managing real-time features for a multi-platform application.',
      solution:
        'Utilized WebSocket technology to provide seamless chat and notifications.',
    },
  ],
  projectsOrInitiatives: [
    {
      name: 'Educational App Development',
      description:
        'Built an app to track student progress, deliver content, and facilitate classroom communication.',
      role: 'Sole Developer',
      impact: [
        'Streamlined classroom management and enhanced learning experiences.',
      ],
    },
    {
      name: 'AI Assistant',
      description:
        'Developed an AI-powered assistant to provide plumbing guidance.',
      role: 'Sole Developer',
      impact: [
        'Enabled domain-specific learning through the integration of the Oregon Plumbers Specialty Code.',
      ],
    },
  ],
};

const workExperience = [
  ExtrinsicStudioWorkDetails,
  GamigoWorkDetails,
  EaseenetWorkDetails,
  WhitmanPartnersWorkDetails,
  CreditSaintWorkDetails,
  RXMGWorkDetails,
  PropfactWorkDetails,
  PlumbingLegendWorkDetails,
].reverse();

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
