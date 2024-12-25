import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { SkillDetails } from '@site/src/models/SkillDetails';
import SkillBlock from '@site/src/components/Skills/SkillBlock';
import SkillModal from '@site/src/components/Skills/SkillModal';

export const PHPDetails: SkillDetails = {
  name: 'PHP',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/php/php-original.svg', // Replace with an actual icon path or identifier
  description:
    'PHP is a versatile, server-side scripting language that I’ve extensively used to build APIs, backend systems, and full-stack applications. Its simplicity and flexibility make it a reliable choice for scalable and dynamic web applications.',
  highlights: [
    'Extensive use in building APIs, backend systems, and full-stack applications.',
    'Proficient with Laravel and custom PHP frameworks.',
    'Experience with performance optimization techniques, including caching and query optimization.',
    'Skilled in handling data securely using PHP’s encryption and validation capabilities.',
    'Integrated PHP seamlessly with frontends built in Vue.js, React.js, and more.',
  ],
  experiences: [
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Rebuilt a legacy system and developed a secure web application using PHP and Laravel.',
      outcomes: [
        'Improved platform scalability and security through Laravel’s encryption helpers.',
        'Reduced load times by implementing Redis caching.',
        'Designed an extensible database schema to support new features.',
      ],
    },
    {
      company: 'Whitman Partners',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Maintained a legacy PHP/jQuery CRM and developed a new suite of tools.',
      outcomes: [
        'Optimized legacy database queries, reducing execution times by over 50%.',
        'Developed a modular PHP backend for the new recruiter portal.',
        'Enabled automation through integration with dynamic web scraping tools.',
      ],
    },
    {
      company: 'Credit Saint',
      role: 'Full Stack Engineer',
      period: 'Dec 2020 – Feb 2022',
      summary:
        'Migrated a WordPress-based system to a Laravel backend for enhanced performance.',
      outcomes: [
        'Reduced page load times from ~2 seconds to 200ms.',
        'Developed secure APIs for data migration and analytics dashboards.',
        'Optimized MySQL queries, improving database performance significantly.',
      ],
    },
    {
      company: 'Gamigo',
      role: 'Software Developer',
      period: 'Jun 2015 – Jul 2017',
      summary:
        'Maintained and optimized a legacy PHP backend for an online flash-based game.',
      outcomes: [
        'Improved system reliability and scalability by refactoring legacy code.',
        'Migrated data from MongoDB to Cassandra using PHP-based scripts.',
      ],
    },
    {
      company: 'Extrinsic Studio LLC',
      role: 'Entry Web Developer',
      period: 'Nov 2013 – Jun 2015',
      summary:
        'Developed a virtual currency platform and online cash shops using PHP.',
      outcomes: [
        'Built a custom PHP framework for rapid development.',
        'Streamlined backend processes for online transactions.',
        'Increased revenue through innovative features like limited-time sales.',
      ],
    },
  ],
  certifications: ['PHP Zend Certified (if applicable)'], // Replace or remove if not relevant
  tools: ['Laravel', 'Composer', 'Symfony', 'PHPUnit', 'OPcache'],
  keywords: [
    'Server-side scripting',
    'Backend development',
    'API development',
    'Laravel',
    'Caching',
    'Database optimization',
    'Encryption',
    'Performance tuning',
  ],
  proficiencyLevel: 'Expert',
  industryApplications: [
    'Education (Plumbing Legend)',
    'Finance (Credit Squad)',
    'Recruitment (Whitman Partners)',
    'Gaming (Gamigo)',
    'E-commerce (Extrinsic Studio LLC)',
  ],
  trainingOrMentorship: [
    {
      description:
        'Mentored entry-level developers on best practices in PHP, including debugging, database optimization, and Laravel-specific techniques.',
      outcomes: [
        'Improved team productivity and code quality.',
        'Enhanced understanding of PHP frameworks among junior team members.',
      ],
    },
  ],
  projects: [
    {
      name: 'Legacy CRM Optimization',
      description:
        'Maintained and optimized a fragile PHP-based CRM for a recruitment company.',
      role: 'Full Stack Engineer',
      impact: [
        'Reduced query execution times by over 50%, improving system reliability.',
      ],
    },
    {
      name: 'Web Application Migration',
      description:
        'Migrated a WordPress-based application to a Laravel backend.',
      role: 'Lead Developer',
      impact: ['Achieved 10x faster page load times and enhanced security.'],
    },
  ],
  challengesAndSolutions: [
    {
      challenge:
        'Ensuring secure data handling and encryption in Laravel for sensitive user information.',
      solution:
        'Utilized Laravel’s built-in encryption helpers and validation mechanisms to maintain security and compliance.',
    },
    {
      challenge:
        'Addressing performance bottlenecks in a PHP-based legacy system.',
      solution:
        'Implemented caching strategies with Redis and OPcache, optimized database queries, and refactored high-usage code sections.',
    },
    {
      challenge: 'Managing N+1 query issues in Laravel.',
      solution:
        'Used Eloquent relationships and eager loading to minimize database calls and improve query efficiency.',
    },
  ],
  learningPath: {
    resources: [
      'PHP: The Right Way',
      'Laravel documentation',
      'PHPUnit testing guides',
    ],
    milestones: [
      'Built a custom PHP framework for an e-commerce platform.',
      'Migrated a WordPress site to Laravel with significant performance gains.',
      'Designed secure APIs for financial and educational applications.',
    ],
  },
};

export const LaravelDetails: SkillDetails = {
  name: 'Laravel',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/laravel/laravel-plain.svg',
  description:
    'Laravel is a robust PHP framework that I’ve used extensively to build secure, scalable, and maintainable web applications and APIs.',
  highlights: [
    'Built secure APIs with advanced authentication and authorization mechanisms.',
    "Utilized Laravel's encryption helpers to safeguard sensitive user data.",
    'Optimized performance with caching (Redis) and query tuning.',
    'Designed and implemented modular, reusable components for scalability.',
    'Integrated Laravel seamlessly with frontend frameworks like Vue.js.',
  ],
  experiences: [
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Developed a secure legacy vault product, including a web application and browser extension, leveraging Laravel for backend development.',
      outcomes: [
        'Built secure APIs for data management and user authentication.',
        'Implemented Redis caching to improve database query performance.',
        "Used Laravel's validation and encryption features to meet security standards.",
      ],
    },
    {
      company: 'Credit Saint',
      role: 'Full Stack Engineer',
      period: 'Dec 2020 – Feb 2022',
      summary:
        'Migrated Credit Squad from WordPress to Laravel, enhancing performance and scalability.',
      outcomes: [
        'Reduced page load times from ~2 seconds to an average of 200ms.',
        'Designed APIs for data migration and analytics dashboards.',
        'Ensured compliance with FinTech regulations using secure coding practices.',
      ],
    },
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Collaborated on building a CMS/CRM for digital marketing, handling email campaigns and data ingestion workflows.',
      outcomes: [
        'Developed scalable backend systems to support high-volume email and SMS campaigns.',
        'Integrated third-party APIs for Email Service Providers, ensuring seamless data flow.',
        'Used Laravel’s testing tools to deliver reliable features.',
      ],
    },
    {
      company: 'Plumbing Legend',
      role: 'Full Stack Engineer',
      period: 'Jan 2024 – Present',
      summary:
        'Built the backend for an educational app, enabling student tracking and AI-assisted learning.',
      outcomes: [
        'Implemented real-time data capabilities using WebSockets.',
        'Designed secure and extensible database schemas.',
        'Integrated Laravel APIs with an AI assistant powered by RAG techniques.',
      ],
    },
  ],
  tools: ['Redis', 'Eloquent ORM', 'PHPUnit', 'Blade Templates', 'Passport'],
  keywords: [
    'Backend development',
    'API development',
    'Authentication and authorization',
    'Caching',
    'Database optimization',
    'Encryption',
    'Testing',
  ],
  proficiencyLevel: 'Expert',
  industryApplications: [
    'Finance (Credit Squad)',
    'Education (Plumbing Legend)',
    'Recruitment (Easeenet, Whitman Partners)',
    'Digital Marketing (RXMG)',
  ],
  challengesAndSolutions: [
    {
      challenge:
        'Ensuring security in sensitive data handling for FinTech apps.',
      solution:
        'Leveraged Laravel’s encryption helpers and robust validation rules to maintain compliance.',
    },
    {
      challenge: 'Addressing N+1 query issues in high-traffic applications.',
      solution:
        'Implemented eager loading with Eloquent ORM to minimize database calls.',
    },
  ],
  projects: [
    {
      name: 'Credit Squad Redevelopment',
      description:
        'Migrated Credit Squad from WordPress to Laravel, significantly enhancing reliability and performance.',
      role: 'Lead Developer',
      impact: [
        'Reduced page load times by over 10x.',
        'Built a secure and scalable backend for long-term growth.',
      ],
    },
    {
      name: 'Plumbing Legend Backend',
      description:
        'Developed the backend for a multi-platform educational app using Laravel.',
      role: 'Sole Developer',
      impact: [
        'Enabled real-time student tracking and AI-assisted learning.',
        'Streamlined classroom management for educators.',
      ],
    },
  ],
  learningPath: {
    resources: ['Laravel Documentation', 'Laracasts (platform)'],
    milestones: [
      'Migrated a WordPress site to Laravel for a financial app.',
      'Implemented Redis caching for performance improvements.',
      'Built secure APIs for educational and FinTech applications.',
    ],
  },
};

export const JavaScriptDetails: SkillDetails = {
  name: 'JavaScript',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/javascript/javascript-original.svg',
  description:
    'JavaScript is a versatile and essential language I’ve used extensively for frontend and backend development. From building dynamic UIs to handling complex server-side logic, JavaScript has been central to many of my projects.',
  highlights: [
    'Developed dynamic, interactive user interfaces for web and mobile applications.',
    'Integrated JavaScript seamlessly with frameworks like Vue.js, React.js, and Node.js.',
    'Utilized JavaScript for data visualization, animations, and real-time updates.',
    'Applied best practices, including modular programming and ES6+ features.',
    'Optimized performance in high-traffic applications through efficient coding techniques.',
  ],
  experiences: [
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Used JavaScript in conjunction with Vue.js to develop an intuitive web application and browser extension.',
      outcomes: [
        'Created reusable, modular components for consistent UI development.',
        'Implemented dynamic form validation and real-time updates.',
        'Enhanced the user experience with smooth, interactive transitions.',
      ],
    },
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Developed user-friendly interfaces and reusable components for RXMG’s CMS/CRM platform.',
      outcomes: [
        'Designed interactive dashboards for real-time tracking and reporting.',
        'Established frontend coding guidelines to streamline development.',
        'Collaborated with backend teams to integrate APIs for email campaigns and data ingestion.',
      ],
    },
    {
      company: 'Propfact',
      role: 'Full Stack Engineer',
      period: 'Jun 2024 – Sep 2024',
      summary:
        'Refactored a poorly designed React Native codebase, focusing on maintainability and scalability.',
      outcomes: [
        'Improved code readability and reduced technical debt by applying modern JavaScript practices.',
        'Enabled seamless frontend-backend integration with a C# API.',
      ],
    },
    {
      company: 'Plumbing Legend',
      role: 'Full Stack Engineer',
      period: 'Jan 2024 – Present',
      summary:
        'Built dynamic UI components for an educational app using JavaScript and Quasar Vue.',
      outcomes: [
        'Created interactive chatrooms and real-time notifications using WebSockets.',
        'Implemented responsive designs for seamless cross-platform usage.',
      ],
    },
  ],
  tools: [
    'ES6+',
    'TypeScript',
    'Node.js',
    'Vue.js',
    'React.js',
    'Webpack',
    'Babel',
  ],
  keywords: [
    'Frontend development',
    'Dynamic UIs',
    'Real-time updates',
    'JavaScript frameworks',
    'Modular programming',
    'ES6+ features',
  ],
  proficiencyLevel: 'Expert',
  industryApplications: [
    'Education (Plumbing Legend)',
    'Real estate (Propfact)',
    'Recruitment (Whitman Partners)',
    'Digital Marketing (RXMG)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Optimizing performance in high-traffic web applications.',
      solution:
        'Applied efficient JavaScript coding practices, lazy loading, and asynchronous data handling.',
    },
    {
      challenge: 'Ensuring cross-browser compatibility for interactive UIs.',
      solution:
        'Used Babel and Webpack to transpile code and implemented rigorous browser testing.',
    },
  ],
  projects: [
    {
      name: 'Interactive Dashboards for RXMG',
      description:
        'Developed real-time tracking dashboards for a digital marketing platform.',
      role: 'Collaborative Developer',
      impact: [
        'Improved visibility into email and SMS campaign performance.',
        'Streamlined reporting workflows for stakeholders.',
      ],
    },
    {
      name: 'Browser Extension for Easeenet',
      description:
        'Developed a JavaScript-powered browser extension for secure data management.',
      role: 'Lead Developer',
      impact: [
        'Enabled seamless interaction with the web application.',
        'Added real-time data synchronization and custom user features.',
      ],
    },
  ],
  learningPath: {
    resources: [
      'JavaScript: The Definitive Guide',
      'Frontend Masters JavaScript Path',
      'MDN Web Docs',
    ],
    milestones: [
      'Mastered ES6+ features for cleaner and more efficient code.',
      'Built real-time chatrooms and notifications for multi-platform apps.',
      'Developed reusable UI components for scalable frontend architectures.',
    ],
  },
};

export const TypeScriptDetails: SkillDetails = {
  name: 'TypeScript',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/typescript/typescript-original.svg',
  description:
    'TypeScript is a superset of JavaScript that adds static typing, enabling me to write more robust, scalable, and maintainable code. It’s been a critical tool in my frontend and backend projects, especially in complex applications.',
  highlights: [
    'Implemented type safety across React Native and Vue.js projects.',
    'Enhanced code reliability by catching errors during development.',
    'Improved developer experience with strong typing and IntelliSense support.',
    'Enabled modular architecture for scalable applications.',
    'Seamlessly integrated TypeScript with backend frameworks like Node.js and Express.',
  ],
  experiences: [
    {
      company: 'Propfact',
      role: 'Full Stack Engineer',
      period: 'Jun 2024 – Sep 2024',
      summary:
        'Used TypeScript extensively to refactor a React Native codebase for maintainability and scalability.',
      outcomes: [
        'Reduced runtime errors by applying strict typing across the application.',
        'Improved code readability and ensured consistent coding practices.',
      ],
    },
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Integrated TypeScript into the frontend of RXMG’s CMS/CRM for consistent and reliable development.',
      outcomes: [
        'Enabled efficient data handling with type-safe API integrations.',
        'Improved collaboration by standardizing TypeScript usage across the team.',
      ],
    },
    {
      company: 'Plumbing Legend',
      role: 'Full Stack Engineer',
      period: 'Jan 2024 – Present',
      summary:
        'Used TypeScript to build type-safe components and services for an educational app.',
      outcomes: [
        'Streamlined development with reusable, strongly-typed components.',
        'Improved maintainability by enforcing consistent type definitions across the codebase.',
      ],
    },
  ],
  tools: ['React Native', 'Node.js', 'Vue.js', 'Express', 'Eslint', 'Prettier'],
  keywords: [
    'Static typing',
    'Code reliability',
    'Modular architecture',
    'IntelliSense',
    'Type safety',
    'API integration',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Real estate (Propfact)',
    'Education (Plumbing Legend)',
    'Digital Marketing (RXMG)',
  ],
  challengesAndSolutions: [
    {
      challenge:
        'Refactoring a React Native codebase while ensuring existing features remained intact.',
      solution:
        'Introduced strict typing with TypeScript, enabling safer and faster development while maintaining functionality.',
    },
    {
      challenge:
        'Standardizing type definitions across a large team for a CMS/CRM platform.',
      solution:
        'Implemented shared TypeScript configurations and type libraries to ensure consistency.',
    },
  ],
  projects: [
    {
      name: 'React Native Refactor',
      description:
        'Refactored a poorly implemented React Native application with TypeScript for maintainability.',
      role: 'Lead Developer',
      impact: [
        'Improved code reliability and reduced runtime errors.',
        'Enhanced development efficiency through consistent typing.',
      ],
    },
    {
      name: 'Plumbing Legend Educational App',
      description:
        'Built type-safe components and services for a multi-platform educational app.',
      role: 'Sole Developer',
      impact: [
        'Ensured seamless cross-platform functionality with strongly-typed code.',
        'Simplified future development by enforcing clear type definitions.',
      ],
    },
  ],
  learningPath: {
    resources: [
      'TypeScript Handbook (official docs)',
      'Frontend Masters TypeScript Path',
    ],
    milestones: [
      'Refactored a React Native application with strict TypeScript implementation.',
      'Integrated TypeScript into large-scale CMS/CRM platforms for consistent data handling.',
      'Developed reusable type-safe components for multi-platform educational apps.',
    ],
  },
};

export const NodeJSDetails: SkillDetails = {
  name: 'Node.js',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/nodejs/nodejs-original.svg',
  description:
    'Node.js is a powerful runtime environment that I’ve used to build scalable backend systems and RESTful APIs. Its asynchronous capabilities have been instrumental in handling high-traffic applications and real-time data processing.',
  highlights: [
    'Developed RESTful APIs for multi-platform applications.',
    'Utilized Node.js with Express to build scalable server-side logic.',
    'Integrated with third-party APIs for enhanced functionality.',
    'Handled real-time features using WebSockets and asynchronous processing.',
    'Implemented robust error handling and logging for critical applications.',
  ],
  experiences: [
    {
      company: 'Whitman Partners',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Used Node.js with Express to build the backend for a modern suite of recruiter portals.',
      outcomes: [
        'Created scalable, maintainable server-side logic for the recruiter suite.',
        'Integrated APIs for dynamic job listing automation and real-time updates.',
      ],
    },
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Leveraged Node.js to support backend workflows for a CMS/CRM platform.',
      outcomes: [
        'Developed backend services to process high-volume email and SMS campaigns.',
        'Collaborated with the team to ensure seamless API integration.',
      ],
    },
  ],
  tools: ['Express', 'WebSockets', 'MongoDB', 'Postgres', 'Redis'],
  keywords: [
    'Backend development',
    'RESTful APIs',
    'Real-time data',
    'Third-party integrations',
    'Error handling',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Recruitment (Whitman Partners)',
    'Digital Marketing (RXMG)',
  ],
  challengesAndSolutions: [
    {
      challenge:
        'Handling high-traffic real-time updates for recruiter portals.',
      solution:
        'Implemented WebSockets and optimized asynchronous processes for better scalability.',
    },
    {
      challenge:
        'Integrating with complex third-party APIs in marketing systems.',
      solution:
        'Developed modular API handlers to streamline integration and ensure consistent data flow.',
    },
  ],
  projects: [
    {
      name: 'Recruiter Portal Backend',
      description:
        'Built the backend for a modern recruiter suite using Node.js and Express.',
      role: 'Collaborative Developer',
      impact: [
        'Enabled dynamic job listing discovery and automated workflows.',
        'Improved portal reliability for daily business operations.',
      ],
    },
  ],
  learningPath: {
    resources: ['Node.js Design Patterns (book)', 'Node.js Docs'],
    milestones: [
      'Built RESTful APIs for recruiter and marketing platforms.',
      'Integrated WebSocket-based real-time features into recruiter portals.',
    ],
  },
};

export const VueJSDetails: SkillDetails = {
  name: 'Vue.js',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/vuejs/vuejs-original.svg',
  description:
    'Vue.js is a versatile frontend framework I’ve used to build responsive, interactive web applications. Its simplicity and flexibility make it ideal for creating dynamic user interfaces and reusable components.',
  highlights: [
    'Developed user-friendly UIs with reusable components.',
    'Integrated Vue.js seamlessly with backend APIs for dynamic data handling.',
    'Built real-time features using WebSockets for chatrooms and notifications.',
    'Utilized Vuex for state management in complex applications.',
    'Designed responsive interfaces optimized for cross-platform usage.',
  ],
  experiences: [
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Used Vue.js to develop an intuitive web application and browser extension for a legacy vault product.',
      outcomes: [
        'Created reusable components for consistent UI development.',
        'Integrated real-time data handling for improved user experience.',
      ],
    },
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Built frontend interfaces for RXMG’s CMS/CRM platform using Vue.js.',
      outcomes: [
        'Designed interactive dashboards for real-time campaign tracking.',
        'Enhanced frontend consistency with reusable component patterns.',
      ],
    },
    {
      company: 'Plumbing Legend',
      role: 'Full Stack Engineer',
      period: 'Jan 2024 – Present',
      summary:
        'Built dynamic UI components for an educational app using Quasar Vue.',
      outcomes: [
        'Developed chatrooms and notifications using WebSockets.',
        'Ensured seamless cross-platform functionality for iOS, Android, and web.',
      ],
    },
  ],
  tools: ['Vuex', 'Quasar', 'Vuetify', 'Vue Router', 'Axios'],
  keywords: [
    'Frontend development',
    'Reusable components',
    'Dynamic UIs',
    'Real-time updates',
    'Responsive design',
  ],
  proficiencyLevel: 'Expert',
  industryApplications: [
    'Education (Plumbing Legend)',
    'Recruitment (Easeenet)',
    'Digital Marketing (RXMG)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Creating responsive, real-time UIs for multi-platform apps.',
      solution:
        'Utilized WebSockets and Quasar Vue to build dynamic interfaces optimized for all devices.',
    },
    {
      challenge: 'Maintaining UI consistency in large-scale applications.',
      solution:
        'Implemented reusable component libraries and standardized design patterns.',
    },
  ],
  projects: [
    {
      name: 'Educational App UI',
      description:
        'Built responsive and interactive UIs for an educational app using Quasar Vue.',
      role: 'Sole Developer',
      impact: [
        'Enhanced student engagement with real-time features.',
        'Streamlined educator workflows with intuitive interfaces.',
      ],
    },
    {
      name: 'CMS/CRM Frontend',
      description:
        'Developed dashboards and components for RXMG’s marketing platform.',
      role: 'Collaborative Developer',
      impact: [
        'Improved campaign tracking with interactive visualizations.',
        'Enhanced frontend maintainability with modular components.',
      ],
    },
  ],
  learningPath: {
    resources: ['Vue Mastery (platform)', 'Vue.js Docs'],
    milestones: [
      'Developed real-time features for multi-platform apps.',
      'Built reusable component libraries for large-scale applications.',
    ],
  },
};

export const ReactNativeDetails: SkillDetails = {
  name: 'React Native',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/react/react-original.svg',
  description:
    'React Native is a cross-platform mobile framework that I’ve used to build scalable and maintainable mobile applications. It allows for efficient development and seamless deployment across iOS and Android.',
  highlights: [
    'Refactored and optimized existing codebases for scalability and maintainability.',
    'Implemented cross-platform features, ensuring consistency on iOS and Android.',
    'Improved code readability and reduced technical debt in legacy projects.',
    'Integrated React Native with backend APIs for real-time data synchronization.',
    'Utilized TypeScript to ensure type safety and minimize runtime errors.',
  ],
  experiences: [
    {
      company: 'Propfact',
      role: 'Full Stack Engineer',
      period: 'Jun 2024 – Sep 2024',
      summary:
        'Refactored and rebuilt a poorly implemented React Native application for a real-estate app.',
      outcomes: [
        'Enhanced code maintainability and scalability with modular architecture.',
        'Improved performance and user experience by addressing technical debt.',
      ],
    },
  ],
  tools: [
    'React Native CLI',
    'TypeScript',
    'Redux',
    'Axios',
    'Expo',
    'React Navigation',
  ],
  keywords: [
    'Cross-platform development',
    'Mobile applications',
    'Modular architecture',
    'Type safety',
    'Backend integration',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: ['Real estate (Propfact)', 'Finance (Credit Squad)'],
  challengesAndSolutions: [
    {
      challenge: 'Refactoring a large legacy codebase in React Native.',
      solution:
        'Applied modern coding practices and modularized components to simplify future development.',
    },
    {
      challenge:
        'Ensuring seamless integration between React Native and backend systems.',
      solution:
        'Collaborated with backend engineers and used API testing to guarantee smooth data flow.',
    },
  ],
  projects: [
    {
      name: 'Propfact Mobile App Refactor',
      description:
        'Refactored and optimized a real-estate app for scalability and performance.',
      role: 'Lead Developer',
      impact: [
        'Improved code reliability and reduced technical debt.',
        'Enabled future scalability with a cleaner codebase.',
      ],
    },
    {
      name: 'Credit Squad Mobile Application',
      description:
        'Built the foundation for a finance-focused mobile app using React Native.',
      role: 'Collaborative Developer',
      impact: [
        'Delivered essential cross-platform functionality for seamless user experiences.',
      ],
    },
  ],
  learningPath: {
    resources: ['React Native Docs'],
    milestones: [
      'Refactored a legacy React Native codebase for a real-estate app.',
      'Developed reusable components and navigational flows for finance apps.',
    ],
  },
};

export const RedisDetails: SkillDetails = {
  name: 'Redis',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/redis/redis-original.svg',
  description:
    'Redis is a high-performance, in-memory data structure store that I’ve used to improve caching, session management, and real-time data handling across various applications.',
  highlights: [
    'Implemented Redis for session storage and caching in high-traffic applications.',
    'Optimized database performance by reducing load on primary data stores.',
    'Configured Redis with Laravel and Node.js to enhance data retrieval speeds.',
    'Used Redis Pub/Sub for real-time features like notifications and chatrooms.',
  ],
  experiences: [
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Integrated Redis as a caching layer to optimize application performance.',
      outcomes: [
        'Reduced query load on MySQL by implementing Redis for frequently accessed data.',
        'Improved session handling for scalable user authentication.',
      ],
    },
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Configured Redis for data-intensive operations in a digital marketing platform.',
      outcomes: [
        'Reduced server load by implementing caching strategies for API responses.',
        'Enabled real-time email campaign tracking with Redis Pub/Sub.',
      ],
    },
    {
      company: 'Plumbing Legend',
      role: 'Full Stack Engineer',
      period: 'Jan 2024 – Present',
      summary:
        'Used Redis to support real-time features in an educational app.',
      outcomes: [
        'Enhanced real-time chatrooms and notifications using Redis Pub/Sub.',
        'Improved data retrieval speeds by caching frequently accessed queries.',
      ],
    },
  ],
  tools: ['Laravel', 'Node.js', 'Redis CLI', 'Pub/Sub'],
  keywords: [
    'Caching',
    'Session management',
    'Real-time features',
    'Data optimization',
    'High-performance systems',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Education (Plumbing Legend)',
    'Digital Marketing (RXMG)',
    'Recruitment (Easeenet)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Optimizing database performance for high-traffic systems.',
      solution:
        'Configured Redis as a caching layer to reduce load on MySQL and Postgres databases.',
    },
    {
      challenge: 'Implementing real-time features with minimal latency.',
      solution:
        'Used Redis Pub/Sub to power notifications and chatrooms, ensuring low-latency updates.',
    },
  ],
  projects: [
    {
      name: 'Educational App Real-Time Features',
      description:
        'Developed real-time chatrooms and notifications for an educational platform.',
      role: 'Sole Developer',
      impact: [
        'Improved classroom engagement with responsive communication tools.',
      ],
    },
    {
      name: 'RXMG Campaign Tracking',
      description:
        'Used Redis to enable real-time email and SMS campaign tracking.',
      role: 'Collaborative Developer',
      impact: [
        'Streamlined tracking workflows with low-latency updates.',
        'Reduced server load by caching campaign data efficiently.',
      ],
    },
  ],
  learningPath: {
    resources: ['Redis Docs'],
    milestones: [
      'Integrated Redis caching in Laravel and Node.js applications.',
      'Implemented Pub/Sub for real-time notifications and chatrooms.',
    ],
  },
};

export const MySQLDetails: SkillDetails = {
  name: 'MySQL',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/mysql/mysql-original.svg',
  description:
    'MySQL is a reliable relational database management system I’ve used extensively for structuring, storing, and optimizing data in high-performance applications.',
  highlights: [
    'Designed and normalized database schemas for scalable applications.',
    'Optimized queries and added indexes to improve database performance.',
    'Implemented backup strategies to ensure data integrity and reliability.',
    'Configured MySQL with Laravel, Node.js, and other frameworks.',
    'Handled complex migrations and ensured seamless data transitions.',
  ],
  experiences: [
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Designed and normalized MySQL schemas to support user data and secure file management.',
      outcomes: [
        'Reduced query response times by optimizing database structures.',
        'Integrated Redis caching to minimize repetitive queries.',
      ],
    },
    {
      company: 'Credit Saint',
      role: 'Full Stack Engineer',
      period: 'Dec 2020 – Feb 2022',
      summary:
        'Migrated and optimized MySQL databases during the transition from WordPress to Laravel.',
      outcomes: [
        'Improved data retrieval speeds, reducing page load times by 10x.',
        'Enhanced data integrity through consistent schema validations.',
      ],
    },
    {
      company: 'Plumbing Legend',
      role: 'Full Stack Engineer',
      period: 'Jan 2024 – Present',
      summary:
        'Used MySQL to store and manage student progress, quizzes, and lecture content for an educational app.',
      outcomes: [
        'Designed schemas for scalability and real-time data interactions.',
        'Improved performance through optimized queries and caching.',
      ],
    },
  ],
  tools: ['phpMyAdmin', 'Sequelize', 'Eloquent ORM', 'MySQL Workbench'],
  keywords: [
    'Database design',
    'Query optimization',
    'Schema normalization',
    'Data migrations',
    'Data integrity',
  ],
  proficiencyLevel: 'Expert',
  industryApplications: [
    'Education (Plumbing Legend)',
    'Finance (Credit Squad)',
    'Recruitment (Easeenet)',
    'Digital Marketing (RXMG)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Reducing query response times in high-traffic applications.',
      solution:
        'Optimized queries with indexes and implemented Redis caching to minimize database load.',
    },
    {
      challenge: 'Managing complex data migrations between platforms.',
      solution:
        'Developed automated migration scripts and performed rigorous testing to ensure seamless transitions.',
    },
  ],
  projects: [
    {
      name: 'Credit Squad Migration',
      description:
        'Migrated WordPress data to a normalized MySQL schema for Laravel.',
      role: 'Lead Developer',
      impact: [
        'Improved data performance and reliability.',
        'Enabled scalability for future feature development.',
      ],
    },
    {
      name: 'Plumbing Legend Student Progress Tracking',
      description:
        'Designed and implemented MySQL schemas to store and analyze student progress data.',
      role: 'Sole Developer',
      impact: [
        'Enhanced app performance with optimized queries.',
        'Streamlined educator workflows with real-time data updates.',
      ],
    },
  ],
  learningPath: {
    resources: ['MySQL Docs'],
    milestones: [
      'Designed scalable schemas for multi-platform apps.',
      'Implemented optimized queries for high-traffic applications.',
      'Handled seamless data migrations between major platforms.',
    ],
  },
};

export const AWSDetails: SkillDetails = {
  name: 'Amazon Web Services (AWS)',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  description:
    'AWS is a cloud computing platform that I’ve used to deploy, manage, and scale web applications. Its robust services have been essential for hosting, storage, and serverless solutions.',
  highlights: [
    'Deployed scalable web applications using Elastic Beanstalk and EC2.',
    'Configured RDS for reliable and secure database hosting.',
    'Built serverless functions with AWS Lambda for lightweight processes.',
    'Used S3 for secure file storage and content delivery.',
    'Implemented load balancing and caching for performance optimization.',
  ],
  experiences: [
    {
      company: 'Credit Saint',
      role: 'Full Stack Engineer',
      period: 'Dec 2020 – Feb 2022',
      summary:
        'Utilized AWS to deploy and manage Credit Squad’s Laravel-based platform.',
      outcomes: [
        'Configured Elastic Beanstalk for reliable and scalable hosting.',
        'Used RDS to handle secure and high-performance database operations.',
      ],
    },
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Collaborated on cloud infrastructure for RXMG’s CMS/CRM platform using AWS.',
      outcomes: [
        'Optimized content delivery with CloudFront and S3.',
        'Automated workflows using AWS Lambda for backend processes.',
      ],
    },
    {
      company: 'Plumbing Legend',
      role: 'Full Stack Engineer',
      period: 'Jan 2024 – Present',
      summary:
        'Planned AWS migration to improve scalability and reliability for an educational platform.',
      outcomes: [
        'Set up infrastructure strategies for AWS-hosted multi-platform applications.',
      ],
    },
  ],
  tools: ['Elastic Beanstalk', 'RDS', 'S3', 'AWS Lambda', 'CloudFront', 'EC2'],
  keywords: [
    'Cloud computing',
    'Scalable hosting',
    'Serverless functions',
    'Database management',
    'Content delivery',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Finance (Credit Squad)',
    'Education (Plumbing Legend)',
    'Digital Marketing (RXMG)',
  ],
  challengesAndSolutions: [
    {
      challenge:
        'Handling large-scale deployments for high-traffic applications.',
      solution:
        'Used Elastic Beanstalk and load balancers to ensure uptime and scalability.',
    },
    {
      challenge: 'Optimizing file storage and delivery for large assets.',
      solution:
        'Implemented S3 and CloudFront for secure and fast content delivery.',
    },
  ],
  projects: [
    {
      name: 'Credit Squad Deployment',
      description:
        'Deployed Credit Squad’s Laravel-based platform using AWS Elastic Beanstalk.',
      role: 'Lead Developer',
      impact: [
        'Ensured secure and scalable infrastructure for platform growth.',
      ],
    },
    {
      name: 'RXMG Cloud Infrastructure',
      description:
        'Collaborated on cloud solutions for RXMG’s CMS/CRM platform.',
      role: 'Collaborative Developer',
      impact: [
        'Streamlined backend workflows with serverless functions.',
        'Improved content delivery efficiency for high-volume campaigns.',
      ],
    },
  ],
  learningPath: {
    resources: [
      'AWS Certified Developer Guide',
      'AWS Well-Architected Framework',
      'AWS Elastic Beanstalk Docs',
    ],
    milestones: [
      'Deployed multiple applications using Elastic Beanstalk and Lambda.',
      'Configured secure and reliable databases with RDS.',
      'Optimized content delivery with CloudFront and S3.',
    ],
  },
};

export const QuasarVueDetails: SkillDetails = {
  name: 'Quasar Vue',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/quasar/quasar-original.svg', // Reusing Vue.js icon
  description:
    'Quasar Vue is a frontend framework that I’ve used to develop responsive and cross-platform applications, delivering seamless user experiences across web, iOS, and Android platforms.',
  highlights: [
    'Built multi-platform applications with a unified codebase.',
    'Designed responsive UIs optimized for web and mobile devices.',
    'Integrated Quasar Vue with Laravel APIs for dynamic data handling.',
    'Implemented WebSockets for real-time features like chatrooms and notifications.',
    'Streamlined development with reusable and modular components.',
  ],
  experiences: [
    {
      company: 'Plumbing Legend',
      role: 'Full Stack Developer',
      period: 'Jan 2024 – Present',
      summary:
        'Used Quasar Vue to develop a responsive educational application for web, iOS, and Android.',
      outcomes: [
        'Delivered consistent user experiences across platforms with a unified codebase.',
        'Implemented real-time chatrooms and notifications using WebSockets.',
        'Created interactive components to display lecture content and track student progress.',
      ],
    },
  ],
  tools: ['Quasar CLI', 'Vuex', 'Vue Router', 'Axios', 'WebSockets'],
  keywords: [
    'Cross-platform development',
    'Responsive design',
    'Real-time updates',
    'Reusable components',
    'Mobile-friendly UIs',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: ['Education (Plumbing Legend)'],
  challengesAndSolutions: [
    {
      challenge:
        'Ensuring consistent performance across web, iOS, and Android platforms.',
      solution:
        'Leveraged Quasar’s cross-platform capabilities to maintain a unified codebase and implemented performance optimizations for each platform.',
    },
    {
      challenge: 'Implementing real-time chatrooms and notifications.',
      solution:
        'Used WebSockets to enable instant communication and notifications, improving engagement.',
    },
  ],
  projects: [
    {
      name: 'Plumbing Legend Educational App',
      description:
        'Developed a responsive educational app for web, iOS, and Android using Quasar Vue.',
      role: 'Sole Developer',
      impact: [
        'Streamlined classroom management and enhanced student engagement.',
        'Delivered a seamless multi-platform experience for educators and students.',
      ],
    },
  ],
  learningPath: {
    resources: ['Quasar Framework Docs', 'Vue.js Docs'],
    milestones: [
      'Developed a real-time educational app using Quasar Vue.',
      'Built reusable components to streamline cross-platform development.',
    ],
  },
};

export const ReactDetails: SkillDetails = {
  name: 'React',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/react/react-original.svg',
  description:
    'React is a powerful frontend library I’ve used to develop dynamic and modular user interfaces. Its component-based architecture has been integral to building scalable and maintainable web and mobile applications.',
  highlights: [
    'Refactored and optimized poorly implemented React Native codebases.',
    'Built reusable and modular components for scalable frontend applications.',
    'Integrated React with backend APIs for dynamic data updates.',
    'Used state management tools like Redux for complex applications.',
  ],
  experiences: [
    {
      company: 'Propfact',
      role: 'Full Stack Engineer',
      period: 'Jun 2024 – Sep 2024',
      summary:
        'Refactored and rebuilt a poorly designed React Native application for a real-estate platform.',
      outcomes: [
        'Improved code maintainability and reduced technical debt with modular components.',
        'Enhanced performance and usability across iOS and Android platforms.',
      ],
    },
  ],
  tools: ['React', 'React Native', 'Redux', 'Axios', 'React Navigation'],
  keywords: [
    'Frontend development',
    'Modular components',
    'State management',
    'Dynamic UIs',
    'Cross-platform applications',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: ['Real Estate (Propfact)'],
  challengesAndSolutions: [
    {
      challenge:
        'Refactoring a legacy React Native codebase while maintaining feature parity.',
      solution:
        'Implemented modular and reusable components to simplify maintenance and ensure consistency.',
    },
    {
      challenge: 'Ensuring smooth frontend-backend integration.',
      solution:
        'Collaborated with backend engineers and used API testing to ensure seamless data flow.',
    },
  ],
  projects: [
    {
      name: 'Propfact React Native Refactor',
      description:
        'Refactored and optimized a React Native app for a real-estate platform.',
      role: 'Lead Developer',
      impact: [
        'Improved maintainability and scalability of the codebase.',
        'Enhanced user experience with optimized navigation and components.',
      ],
    },
  ],
  learningPath: {
    resources: ['React Docs', 'React Native Docs'],
    milestones: [
      'Refactored and optimized React Native applications for better performance.',
      'Developed modular components for scalable frontend applications.',
    ],
  },
};

export const PostgreSQLDetails: SkillDetails = {
  name: 'PostgreSQL',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/postgresql/postgresql-original.svg',
  description:
    'PostgreSQL is a powerful relational database I’ve used for secure and scalable data storage in high-performance applications. Its advanced features have enabled me to handle complex data requirements efficiently.',
  highlights: [
    'Designed normalized schemas for scalable and secure applications.',
    'Optimized queries with indexing and partitioning to improve performance.',
    'Integrated PostgreSQL with Laravel and Node.js for dynamic data handling.',
    'Handled complex migrations and ensured data integrity across systems.',
  ],
  experiences: [
    {
      company: 'Credit Saint',
      role: 'Full Stack Engineer',
      period: 'Dec 2020 – Feb 2022',
      summary:
        'Utilized PostgreSQL to store and manage data for Credit Squad’s analytics dashboards and legacy vault platform.',
      outcomes: [
        'Improved query performance by optimizing indexes and partitioning.',
        'Designed a scalable schema for real-time data ingestion and reporting.',
      ],
    },
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Used PostgreSQL for RXMG’s CMS/CRM platform, handling campaign tracking and data ingestion.',
      outcomes: [
        'Improved database performance by writing optimized queries.',
        'Enhanced data reliability through regular maintenance and monitoring.',
      ],
    },
  ],
  tools: ['pgAdmin', 'PostgreSQL CLI', 'Sequelize', 'Eloquent ORM'],
  keywords: [
    'Database optimization',
    'Schema design',
    'Data migrations',
    'Indexing',
    'High-performance data storage',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: ['Finance (Credit Squad)', 'Digital Marketing (RXMG)'],
  challengesAndSolutions: [
    {
      challenge: 'Managing complex data migrations for analytics applications.',
      solution:
        'Designed automated migration scripts and validated data integrity at each stage.',
    },
    {
      challenge: 'Optimizing database queries for high-traffic systems.',
      solution:
        'Implemented advanced indexing and partitioning strategies to improve performance.',
    },
  ],
  projects: [
    {
      name: 'Credit Squad Analytics',
      description:
        'Built and optimized PostgreSQL schemas for real-time reporting dashboards.',
      role: 'Lead Developer',
      impact: [
        'Enabled seamless data visualization with optimized queries.',
        'Enhanced system scalability for increasing data loads.',
      ],
    },
    {
      name: 'RXMG Campaign Data Storage',
      description:
        'Designed and managed PostgreSQL databases for CMS/CRM applications.',
      role: 'Collaborative Developer',
      impact: ['Improved data reliability and query response times.'],
    },
  ],
  learningPath: {
    resources: ['PostgreSQL Docs'],
    milestones: [
      'Designed scalable schemas for analytics and marketing platforms.',
      'Optimized queries to handle high-traffic data processing.',
    ],
  },
};

export const NuxtJSDetails: SkillDetails = {
  name: 'Nuxt.js',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/nuxtjs/nuxtjs-original.svg',
  description:
    'Nuxt.js is a framework I’ve used for building performant, server-side rendered (SSR) applications and static sites. It enabled me to prefetch data and deliver ready-to-go pages for internal applications, enhancing performance and user experience.',
  highlights: [
    'Utilized server-side rendering for improved initial load times.',
    'Prefetched and cached data for fast-loading pages.',
    'Streamlined routing and modularized components for maintainable codebases.',
    'Built dynamic dashboards with ready-to-use data pipelines.',
    'Optimized applications for internal employee workflows under a VPN.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Built internal applications using Nuxt.js to prefetch data and deliver optimized pages for employee use.',
      outcomes: [
        'Improved employee productivity by reducing page load times with server-side rendering and preloaded data.',
        'Streamlined internal workflows by building modular components and integrating dynamic routing.',
      ],
    },
  ],
  tools: ['Nuxt.js CLI', 'Vuex', 'Axios', 'Vue Router'],
  keywords: [
    'Server-side rendering',
    'Data prefetching',
    'Dynamic routing',
    'Component modularity',
    'Internal tools development',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: ['Internal Tools (RXMG)'],
  challengesAndSolutions: [
    {
      challenge:
        'Reducing load times and improving performance for data-heavy internal applications.',
      solution:
        'Used Nuxt.js SSR and data prefetching to deliver ready-to-go pages with preloaded content.',
    },
    {
      challenge:
        'Maintaining a modular and scalable codebase for internal tools under a VPN.',
      solution:
        'Designed reusable components and followed best practices for maintainability and scalability.',
    },
  ],
  projects: [
    {
      name: 'Employee Workflow Platform',
      description:
        'Developed an internal platform using Nuxt.js to optimize employee workflows with preloaded data and ready-to-go pages.',
      role: 'Collaborative Developer',
      impact: [
        'Reduced data fetching delays, improving employee efficiency.',
        'Delivered a seamless user experience with pre-rendered pages and dynamic components.',
      ],
    },
  ],
  learningPath: {
    resources: ['Nuxt.js Docs'],
    milestones: [
      'Built preloaded pages for internal tools using Nuxt.js.',
      'Optimized dynamic routing and data pipelines for performance improvements.',
    ],
  },
};

export const CSSDetails: SkillDetails = {
  name: 'CSS',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/css3/css3-original.svg',
  description:
    'CSS has been vital for creating responsive, visually engaging designs that ensure seamless user experiences across devices. I’ve applied modern techniques to build scalable and maintainable styles for various projects.',
  highlights: [
    'Created responsive and mobile-first designs for web and hybrid applications.',
    'Used advanced CSS techniques to implement modern design patterns and animations.',
    'Leveraged frameworks like Tailwind CSS and Bootstrap to accelerate development.',
    'Focused on cross-browser compatibility and accessibility in designs.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Styled dynamic components for marketing platforms, ensuring visual consistency and responsiveness.',
      outcomes: [
        'Improved engagement rates with pixel-perfect, responsive designs.',
        'Streamlined development by adhering to reusable design patterns.',
      ],
    },
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Crafted custom CSS stylesheets for SPAs, focusing on usability and modern aesthetics.',
      outcomes: [
        'Enhanced user satisfaction with clean, accessible interfaces.',
        'Reduced development time by integrating reusable CSS modules.',
      ],
    },
  ],
  tools: ['Tailwind CSS', 'Bootstrap', 'CSS Grid', 'Flexbox', 'PostCSS'],
  keywords: [
    'Responsive design',
    'Cross-browser compatibility',
    'Animations',
    'CSS frameworks',
    'Accessibility',
  ],
  proficiencyLevel: 'Expert',
  industryApplications: [
    'Marketing Platforms (RXMG)',
    'Startup Platforms (Easeenet)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Creating responsive designs for hybrid applications.',
      solution:
        'Utilized CSS Grid and Flexbox to ensure layout adaptability across devices.',
    },
    {
      challenge: 'Maintaining cross-browser compatibility for custom designs.',
      solution:
        'Used PostCSS and browser testing tools to validate and optimize styles.',
    },
  ],
  projects: [
    {
      name: 'Marketing Platform UI',
      description:
        'Styled interactive dashboards and components for RXMG’s marketing campaigns.',
      role: 'Collaborative Developer',
      impact: [
        'Enhanced visual appeal and user engagement.',
        'Ensured consistency across devices and screen sizes.',
      ],
    },
  ],
  learningPath: {
    resources: ['CSS Tricks (website)', 'MDN CSS Docs'],
    milestones: [
      'Built pixel-perfect responsive layouts for marketing campaigns.',
      'Implemented modern animations and transitions for engaging UIs.',
    ],
  },
};

export const MongoDBDetails: SkillDetails = {
  name: 'MongoDB',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/mongodb/mongodb-original.svg',
  description:
    'MongoDB is a NoSQL database I’ve used for real-time data handling and flexible schema designs in modern applications.',
  highlights: [
    'Designed dynamic MongoDB schemas for real-time applications.',
    'Integrated MongoDB with Node.js and Laravel backends for efficient data operations.',
    'Optimized query performance for high-traffic applications.',
    'Used MongoDB’s aggregation framework for analytics and reporting.',
  ],
  experiences: [
    {
      company: 'Whitman Partners',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Used MongoDB to support web scraping and analytics for recruiter portals.',
      outcomes: [
        'Enabled efficient data storage and retrieval for job listings.',
        'Streamlined data ingestion workflows using MongoDB’s aggregation pipeline.',
      ],
    },
    {
      company: 'Gamigo',
      role: 'Software Developer',
      period: 'Jun 2015 – Jul 2017',
      summary: 'Managed MongoDB databases for real-time game feature tracking.',
      outcomes: [
        'Improved game data storage performance by optimizing schema designs.',
        'Enhanced analytics accuracy through efficient data queries.',
      ],
    },
  ],
  tools: ['MongoDB Atlas', 'Mongoose', 'MongoDB CLI', 'Compass'],
  keywords: [
    'NoSQL databases',
    'Dynamic schemas',
    'Aggregation pipelines',
    'Real-time data',
    'Database optimization',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: ['Recruitment (Whitman Partners)', 'Gaming (Gamigo)'],
  challengesAndSolutions: [
    {
      challenge: 'Optimizing data storage for real-time analytics.',
      solution:
        'Designed schemas with indexed fields and optimized queries using MongoDB’s aggregation framework.',
    },
    {
      challenge: 'Ensuring scalability for high-traffic systems.',
      solution:
        'Utilized MongoDB Atlas for scalable deployments and managed indexing strategies.',
    },
  ],
  projects: [
    {
      name: 'Recruiter Portal Analytics',
      description:
        'Implemented MongoDB schemas and queries to power analytics dashboards.',
      role: 'Collaborative Developer',
      impact: [
        'Enhanced data visibility and reporting capabilities for recruiters.',
      ],
    },
    {
      name: 'Real-Time Game Tracking',
      description:
        'Managed MongoDB databases for tracking game events and player interactions.',
      role: 'Sole Developer',
      impact: ['Improved system reliability and data accuracy.'],
    },
  ],
  learningPath: {
    resources: [
      'MongoDB University',
      'MongoDB Docs',
      'MongoDB Aggregation Framework (guides)',
    ],
    milestones: [
      'Designed schemas for real-time game tracking.',
      'Optimized MongoDB aggregation pipelines for data analytics.',
    ],
  },
};

export const SassDetails: SkillDetails = {
  name: 'Sass',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/sass/sass-original.svg',
  description:
    'Sass has streamlined my development workflow by enabling me to write modular, maintainable, and reusable stylesheets for complex applications.',
  highlights: [
    'Utilized Sass to manage large-scale stylesheets with variables, mixins, and nested rules.',
    'Streamlined design consistency across projects by leveraging Sass partials and functions.',
    'Integrated Sass with frontend frameworks like Vue.js and React.js for dynamic styling.',
  ],
  experiences: [
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Developed Sass-based styles for dynamic user interfaces in a secure legacy vault product.',
      outcomes: [
        'Enhanced maintainability with reusable and modular Sass components.',
        'Improved styling consistency by using global variables and mixins.',
      ],
    },
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Leveraged Sass to optimize and maintain stylesheets for marketing platforms.',
      outcomes: [
        'Simplified complex stylesheets for scalable design systems.',
        'Reduced style conflicts by using namespaced partials.',
      ],
    },
  ],
  tools: ['Sass CLI', 'Preprocessors', 'CSS Modules', 'PostCSS'],
  keywords: [
    'CSS preprocessor',
    'Reusable styles',
    'Variables and mixins',
    'Modular stylesheets',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Startup Platforms (Easeenet)',
    'Marketing Platforms (RXMG)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Managing large, dynamic stylesheets for complex UIs.',
      solution:
        'Utilized Sass partials and variables to modularize and streamline styles.',
    },
    {
      challenge: 'Maintaining style consistency across large teams.',
      solution:
        'Created a global style guide using Sass to ensure a consistent look and feel.',
    },
  ],
  projects: [
    {
      name: 'Dynamic User Interfaces',
      description:
        'Styled responsive and engaging interfaces using Sass for a legacy vault product.',
      role: 'Lead Developer',
      impact: [
        'Improved styling maintainability and consistency across the application.',
      ],
    },
  ],
  learningPath: {
    resources: ['Sass Docs', 'Sass Guidelines (website)'],
    milestones: [
      'Designed modular Sass components for scalable UIs.',
      'Leveraged Sass variables and mixins to enhance development efficiency.',
    ],
  },
};

export const WebSocketsDetails: SkillDetails = {
  name: 'WebSockets',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/socketio/socketio-original.svg', // Replace with preferred WebSocket icon if needed
  description:
    'WebSockets have been essential for enabling real-time communication in applications, providing instant updates, notifications, and interactive features.',
  highlights: [
    'Integrated WebSocket-based real-time chatrooms and notifications.',
    'Designed scalable WebSocket architectures for high-concurrency scenarios.',
    'Implemented Pub/Sub systems with Redis to manage real-time message queues.',
    'Enabled instant feedback and live data updates in educational and marketing platforms.',
  ],
  experiences: [
    {
      company: 'Plumbing Legend',
      role: 'Full Stack Developer',
      period: 'Jan 2024 – Present',
      summary:
        'Built real-time chatrooms and notification systems using WebSockets to enhance student and educator interaction.',
      outcomes: [
        'Improved engagement through instant communication features.',
        'Ensured reliability and scalability for live chat in multi-classroom environments.',
      ],
    },
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Used WebSockets for live updates and notifications in a digital marketing platform.',
      outcomes: [
        'Enabled real-time campaign tracking and reporting.',
        'Reduced latency for critical alerts and data changes.',
      ],
    },
  ],
  tools: ['Socket.IO', 'Redis Pub/Sub', 'WebSocket API'],
  keywords: [
    'Real-time communication',
    'Notifications',
    'Live updates',
    'Scalable WebSocket architecture',
    'Instant feedback',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Education (Plumbing Legend)',
    'Digital Marketing (RXMG)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Handling high-concurrency real-time updates in classrooms.',
      solution:
        'Used Redis Pub/Sub to manage concurrent message delivery, ensuring low-latency performance.',
    },
    {
      challenge:
        'Ensuring reliable WebSocket connections in high-traffic environments.',
      solution:
        'Implemented reconnection strategies and load balancing to maintain uptime and responsiveness.',
    },
  ],
  projects: [
    {
      name: 'Classroom Chatrooms',
      description:
        'Built real-time chatrooms for an educational app to facilitate student-teacher communication.',
      role: 'Sole Developer',
      impact: [
        'Increased student engagement with instant communication features.',
      ],
    },
    {
      name: 'Real-Time Campaign Tracking',
      description:
        'Used WebSockets for live updates in RXMG’s digital marketing dashboards.',
      role: 'Collaborative Developer',
      impact: [
        'Enhanced campaign monitoring with instant notifications and feedback.',
      ],
    },
  ],
  learningPath: {
    resources: ['MDN WebSocket API Docs', 'Socket.IO Documentation'],
    milestones: [
      'Implemented real-time chatrooms for multi-platform educational apps.',
      'Developed scalable WebSocket systems for high-traffic applications.',
    ],
  },
};

export const DockerDetails: SkillDetails = {
  name: 'Docker',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/docker/docker-original.svg',
  description:
    'Docker has been integral in creating consistent development environments and containerizing applications for smooth deployments.',
  highlights: [
    'Streamlined local development with Docker containers.',
    'Containerized multi-service applications for efficient deployment.',
    'Deployed scalable, production-ready containers using Docker Compose.',
    'Collaborated on CI/CD pipelines with Docker for automated builds and testing.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Managed containerized environments for local development and production workflows.',
      outcomes: [
        'Improved consistency between development and production environments.',
        'Simplified multi-service deployments with Docker Compose.',
      ],
    },
    {
      company: 'Freelance',
      role: 'Full Stack Engineer',
      period: 'Jan 2024 – Present',
      summary:
        'Used Docker to optimize local development workflows for hybrid applications.',
      outcomes: [
        'Reduced onboarding time for new developers by providing pre-configured containers.',
        'Minimized deployment risks with consistent containerized environments.',
      ],
    },
  ],
  tools: ['Docker CLI', 'Docker Compose', 'Kubernetes (integration)'],
  keywords: [
    'Containerization',
    'Deployment',
    'Environment consistency',
    'CI/CD integration',
    'Multi-service applications',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Digital Marketing (RXMG)',
    'Freelance Hybrid Applications',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Maintaining consistency between development and production.',
      solution:
        'Used Docker containers to standardize environments across all stages of development.',
    },
    {
      challenge:
        'Simplifying multi-service deployments for production workflows.',
      solution:
        'Used Docker Compose to orchestrate containerized services and ensure reliable deployments.',
    },
  ],
  projects: [
    {
      name: 'Containerized Development Workflow',
      description:
        'Streamlined local development for hybrid applications using Docker.',
      role: 'Lead Developer',
      impact: ['Improved developer productivity with consistent environments.'],
    },
  ],
  learningPath: {
    resources: ['Docker Docs', 'Docker Mastery (Udemy)'],
    milestones: [
      'Containerized multi-service applications for seamless deployment.',
      'Integrated Docker into CI/CD pipelines for automated builds and tests.',
    ],
  },
};

export const NginxDetails: SkillDetails = {
  name: 'Nginx',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/nginx/nginx-original.svg',
  description:
    'Nginx has been a key tool in optimizing server performance, managing reverse proxy configurations, and improving application scalability.',
  highlights: [
    'Configured Nginx as a reverse proxy for secure, load-balanced applications.',
    'Optimized server performance with caching and compression.',
    'Implemented SSL/TLS certificates to enhance application security.',
    'Set up virtual hosts for multi-domain applications.',
  ],
  experiences: [
    {
      company: 'Whitman Partners',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Configured Nginx for secure, scalable web application deployments.',
      outcomes: [
        'Reduced server load and improved response times with caching strategies.',
        'Enabled secure communication with SSL/TLS configuration.',
      ],
    },
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Implemented Nginx setups to handle high-performance Single Page Applications (SPAs).',
      outcomes: [
        'Enhanced application scalability with load balancing.',
        'Improved uptime with robust reverse proxy configurations.',
      ],
    },
  ],
  tools: ['Nginx CLI', 'Certbot', 'Load Balancers'],
  keywords: [
    'Reverse proxy',
    'Load balancing',
    'Caching',
    'Compression',
    'SSL/TLS configuration',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Recruitment Platforms (Whitman Partners)',
    'Startup Platforms (Easeenet)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Optimizing response times for high-traffic SPAs.',
      solution:
        'Configured caching and compression to reduce server load and improve performance.',
    },
    {
      challenge: 'Ensuring secure communication for sensitive user data.',
      solution:
        'Implemented SSL/TLS certificates and enforced secure connections via Nginx.',
    },
  ],
  projects: [
    {
      name: 'Scalable Web Application Deployment',
      description:
        'Configured Nginx as a reverse proxy for secure and scalable deployments.',
      role: 'Collaborative Developer',
      impact: [
        'Improved application reliability and scalability.',
        'Reduced server response times with optimized configurations.',
      ],
    },
  ],
  learningPath: {
    resources: ['Nginx Docs'],
    milestones: [
      'Configured reverse proxy and load balancing for web applications.',
      'Improved server performance with caching and compression.',
    ],
  },
};

export const KubernetesDetails: SkillDetails = {
  name: 'Kubernetes',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/kubernetes/kubernetes-plain.svg',
  description:
    'Kubernetes has been instrumental in managing containerized applications at scale, enabling seamless orchestration, load balancing, and deployment in cloud environments.',
  highlights: [
    'Managed containerized applications and services with Kubernetes.',
    'Collaborated on microservices architecture deployments.',
    'Streamlined CI/CD workflows with Kubernetes-based environments.',
    'Explored Kubernetes integration with Docker for scalable applications.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Deployed and managed microservices using Kubernetes in a CI/CD pipeline.',
      outcomes: [
        'Improved scalability and reliability of marketing platforms with container orchestration.',
        'Streamlined deployments by integrating Kubernetes with GitLab pipelines.',
      ],
    },
  ],
  tools: ['kubectl', 'Helm', 'Docker', 'GitLab CI/CD'],
  keywords: [
    'Container orchestration',
    'Microservices',
    'Load balancing',
    'Scaling',
    'Cloud deployment',
  ],
  proficiencyLevel: 'Intermediate',
  industryApplications: ['Digital Marketing (RXMG)'],
  challengesAndSolutions: [
    {
      challenge: 'Ensuring high availability for containerized microservices.',
      solution:
        'Used Kubernetes auto-scaling and load balancing to distribute workloads efficiently.',
    },
    {
      challenge: 'Integrating Kubernetes with existing CI/CD workflows.',
      solution:
        'Configured GitLab pipelines to build and deploy containers to Kubernetes clusters automatically.',
    },
  ],
  projects: [
    {
      name: 'Kubernetes Microservices Deployment',
      description:
        'Collaborated on deploying marketing platform microservices using Kubernetes.',
      role: 'Collaborative Developer',
      impact: [
        'Enhanced platform reliability and reduced downtime.',
        'Enabled streamlined containerized deployments with automated scaling.',
      ],
    },
  ],
  learningPath: {
    resources: ['Kubernetes Docs'],
    milestones: [
      'Deployed containerized applications with Kubernetes in production environments.',
      'Integrated Kubernetes into CI/CD pipelines for seamless deployments.',
    ],
  },
};

export const TailwindCSSDetails: SkillDetails = {
  name: 'Tailwind CSS',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  description:
    'Tailwind CSS has been a key tool for crafting modern, responsive user interfaces with precision and consistency across projects.',
  highlights: [
    'Styled complex interfaces with utility-first CSS for responsive designs.',
    'Built reusable design components to maintain consistency.',
    "Enhanced UI development efficiency by leveraging Tailwind's design system.",
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Utilized Tailwind CSS for dynamic component styling, enhancing design consistency and responsiveness.',
      outcomes: [
        'Improved design system efficiency with utility-first CSS.',
        'Delivered polished, responsive layouts for marketing dashboards.',
      ],
    },
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Designed polished, responsive layouts using Tailwind CSS for a startup’s SPA.',
      outcomes: [
        'Streamlined frontend development with reusable design components.',
        'Improved accessibility and responsiveness of the platform.',
      ],
    },
  ],
  tools: ['Tailwind CLI', 'PostCSS', 'DaisyUI'],
  keywords: [
    'Utility-first CSS',
    'Responsive design',
    'Reusable components',
    'Modern design patterns',
  ],
  proficiencyLevel: 'Expert',
  industryApplications: [
    'Marketing Platforms (RXMG)',
    'Startup Platforms (Easeenet)',
  ],
  challengesAndSolutions: [
    {
      challenge:
        'Maintaining consistent styling across a large-scale platform.',
      solution:
        'Utilized Tailwind’s utility classes and extended the design system with custom configurations.',
    },
    {
      challenge: 'Building responsive layouts for complex UIs.',
      solution:
        'Leveraged Tailwind’s grid and flex utilities to create adaptable and modern interfaces.',
    },
  ],
  projects: [
    {
      name: 'Marketing Dashboard UI',
      description:
        'Styled dynamic dashboards using Tailwind CSS for RXMG’s marketing platform.',
      role: 'Collaborative Developer',
      impact: [
        'Enhanced design consistency and responsiveness.',
        'Improved development speed with reusable components.',
      ],
    },
  ],
  learningPath: {
    resources: ['Tailwind CSS Docs'],
    milestones: [
      'Created scalable, responsive UIs for marketing and startup platforms.',
      'Streamlined frontend development with reusable Tailwind components.',
    ],
  },
};

export const FigmaDetails: SkillDetails = {
  name: 'Figma',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/figma/figma-original.svg',
  description:
    'Figma has been a vital tool for collaborating with design teams, ensuring seamless transitions from prototypes to fully developed interfaces.',
  highlights: [
    'Collaborated with designers to review and implement UI/UX prototypes.',
    'Maintained pixel-perfect design fidelity during frontend development.',
    'Integrated design specifications into Vue.js and React.js components.',
    'Used Figma for wireframing and gathering stakeholder feedback.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Collaborated with design teams to implement Figma-based prototypes into Vue.js components.',
      outcomes: [
        'Reduced implementation time by ensuring clear alignment with designs.',
        'Delivered visually consistent and responsive user interfaces.',
      ],
    },
  ],
  tools: ['Figma', 'Figma Plugins', 'Vue.js', 'React.js'],
  keywords: [
    'UI/UX design',
    'Wireframing',
    'Prototyping',
    'Design-to-code transition',
    'Responsive design',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Marketing Platforms (RXMG)',
    'Freelance Web Applications',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Ensuring design consistency during frontend implementation.',
      solution:
        'Used Figma plugins to extract precise measurements and specifications, ensuring accuracy.',
    },
    {
      challenge: 'Collaborating with remote design teams efficiently.',
      solution:
        'Leveraged Figma’s real-time collaboration features to streamline feedback loops.',
    },
  ],
  projects: [
    {
      name: 'Marketing Dashboard UI',
      description:
        'Collaborated with design teams to build a marketing dashboard UI using Figma and Vue.js.',
      role: 'Collaborative Developer',
      impact: [
        'Reduced time-to-delivery with clear design-to-code workflows.',
        'Enhanced user satisfaction with polished interfaces.',
      ],
    },
  ],
  learningPath: {
    resources: ['Figma Docs'],
    milestones: [
      'Integrated Figma prototypes into Vue.js and React applications.',
      'Streamlined design-to-code transitions for various projects.',
    ],
  },
};

export const SwaggerDetails: SkillDetails = {
  name: 'Swagger',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/swagger/swagger-original.svg',
  description:
    'Swagger has been an indispensable tool for API documentation and testing, enabling seamless collaboration between frontend and backend teams.',
  highlights: [
    'Created comprehensive API documentation using Swagger.',
    'Defined and validated RESTful API contracts for consistency.',
    'Improved collaboration by sharing clear and accessible API specifications.',
    'Used Swagger UI for testing and debugging API endpoints.',
  ],
  experiences: [
    {
      company: 'Credit Saint',
      role: 'Full Stack Engineer',
      period: 'Dec 2020 – Feb 2022',
      summary:
        'Generated Swagger documentation for APIs powering financial dashboards and data pipelines.',
      outcomes: [
        'Reduced integration errors by providing clear API specifications.',
        'Enhanced developer productivity with organized, interactive documentation.',
      ],
    },
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Used Swagger to document and test APIs for the legacy vault product.',
      outcomes: [
        'Streamlined frontend-backend integration through interactive API documentation.',
        'Improved API usability for third-party developers with clear contract definitions.',
      ],
    },
  ],
  tools: ['Swagger UI', 'Swagger Hub', 'OpenAPI'],
  keywords: [
    'API documentation',
    'API testing',
    'RESTful APIs',
    'Interactive API specifications',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Finance (Credit Saint)',
    'Startup Platforms (Easeenet)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Maintaining consistent API specifications across teams.',
      solution:
        'Defined contracts using Swagger and shared interactive documentation to align teams.',
    },
    {
      challenge: 'Testing APIs without extensive custom scripts.',
      solution:
        'Used Swagger UI to validate endpoint functionality and streamline debugging.',
    },
  ],
  projects: [
    {
      name: 'Financial Dashboard API Documentation',
      description:
        'Generated detailed API documentation using Swagger for Credit Squad.',
      role: 'Lead Developer',
      impact: [
        'Improved team collaboration and reduced integration issues.',
        'Provided stakeholders with clear insights into API capabilities.',
      ],
    },
  ],
  learningPath: {
    resources: ['Swagger Docs', 'OpenAPI Specification Guide'],
    milestones: [
      'Documented RESTful APIs with interactive Swagger specifications.',
      'Streamlined API testing workflows for multiple teams.',
    ],
  },
};

export const AgileDetails: SkillDetails = {
  name: 'Agile',
  icon: '/img/favicon-96.png', // Replace with Agile-specific icon if available
  description:
    'Agile methodologies have been a core part of my workflow, enabling me to collaborate effectively, deliver iterative improvements, and align closely with business objectives.',
  highlights: [
    'Participated in sprint planning, stand-ups, and retrospectives.',
    'Used Agile principles to deliver incremental improvements efficiently.',
    'Adapted to changing priorities with dynamic task management tools like Kanban.',
    'Collaborated cross-functionally with stakeholders to ensure alignment on deliverables.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Engaged in Agile ceremonies, including daily stand-ups and retrospectives, to maintain alignment and prioritize high-impact tasks.',
      outcomes: [
        'Improved feature delivery speed through effective sprint planning.',
        'Enhanced team productivity by resolving blockers collaboratively during stand-ups.',
      ],
    },
    {
      company: 'Credit Saint',
      role: 'Full Stack Engineer',
      period: 'Dec 2020 – Feb 2022',
      summary:
        'Used Agile sprints to prioritize and deliver key features for financial dashboards.',
      outcomes: [
        'Achieved high-priority goals consistently within sprint timelines.',
        'Enhanced collaboration with stakeholders through clear and transparent communication.',
      ],
    },
  ],
  tools: ['Jira', 'Confluence', 'Trello'],
  keywords: [
    'Scrum',
    'Kanban',
    'Retrospectives',
    'Sprint planning',
    'Collaboration',
  ],
  proficiencyLevel: 'Expert',
  industryApplications: [
    'Marketing Platforms (RXMG)',
    'Financial Platforms (Credit Saint)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Balancing conflicting priorities during sprints.',
      solution:
        'Used Agile frameworks to prioritize tasks based on impact and feasibility, ensuring timely delivery of critical features.',
    },
    {
      challenge: 'Maintaining team alignment in dynamic work environments.',
      solution:
        'Facilitated regular stand-ups and retrospectives to improve communication and resolve blockers efficiently.',
    },
  ],
  projects: [
    {
      name: 'Sprint Management for RXMG',
      description:
        'Managed sprints and collaborated with cross-functional teams to deliver marketing platform features.',
      role: 'Scrum Team Member',
      impact: [
        'Increased team velocity and reduced blockers through Agile processes.',
      ],
    },
  ],
  learningPath: {
    resources: ['Scrum Guide', 'Agile Manifesto (website)'],
    milestones: [
      'Participated in Agile ceremonies for efficient sprint execution.',
      'Collaborated with cross-functional teams to deliver high-priority tasks.',
    ],
  },
};

export const MentorshipDetails: SkillDetails = {
  name: 'Mentorship',
  icon: '/img/favicon-96.png', // Replace with mentorship-specific icon if available
  description:
    'Mentorship has been an enriching part of my career, enabling me to share expertise, guide team members, and foster collaborative growth within teams.',
  highlights: [
    'Onboarded new developers, helping them adapt to team workflows and standards.',
    'Provided technical guidance during code reviews and pair programming sessions.',
    'Conducted knowledge-sharing sessions on modern tools and best practices.',
    'Supported junior developers in improving their coding and debugging skills.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Mentored junior developers through code reviews and collaborative programming sessions, improving team cohesion.',
      outcomes: [
        "Enhanced junior team members' understanding of scalable coding practices.",
        'Reduced onboarding time for new hires through structured mentorship.',
      ],
    },
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Provided mentorship to an entry-level developer, fostering their growth in full-stack development.',
      outcomes: [
        'Improved mentee productivity and understanding of project requirements.',
        'Fostered a collaborative and supportive team environment.',
      ],
    },
  ],
  tools: ['Code Reviews', 'Pair Programming', 'Knowledge Sharing Sessions'],
  keywords: [
    'Onboarding',
    'Code reviews',
    'Collaboration',
    'Knowledge sharing',
    'Skill development',
  ],
  proficiencyLevel: 'Expert',
  industryApplications: [
    'Marketing Platforms (RXMG)',
    'Startup Platforms (Easeenet)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Guiding new developers unfamiliar with complex codebases.',
      solution:
        'Used pair programming sessions to walk through critical sections and explain best practices.',
    },
    {
      challenge:
        'Maintaining team morale and motivation during tight deadlines.',
      solution:
        'Offered consistent feedback and support to junior team members, ensuring their confidence and growth.',
    },
  ],
  projects: [
    {
      name: 'Mentorship Program at RXMG',
      description:
        'Mentored junior developers and conducted knowledge-sharing sessions to upskill the team.',
      role: 'Mentor',
      impact: [
        'Improved team productivity and collaboration through structured mentorship.',
      ],
    },
  ],
  learningPath: {
    resources: ['Mentoring for Success (articles)'],
    milestones: [
      'Guided junior developers through onboarding and complex tasks.',
      'Fostered team growth through regular knowledge-sharing initiatives.',
    ],
  },
};

export const TDDDetails: SkillDetails = {
  name: 'Test-Driven Development (TDD)',
  icon: '/img/favicon-96.png', // Replace with TDD-specific icon if available
  description:
    'Test-Driven Development has been a key practice in my work, ensuring robust, maintainable code by writing comprehensive tests before implementation.',
  highlights: [
    'Reduced bugs and deployment risks by adhering to TDD principles.',
    'Improved test coverage through unit, integration, and end-to-end tests.',
    'Enhanced code reliability by addressing edge cases during the development cycle.',
    'Used automated testing frameworks to streamline workflows.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Followed TDD practices to develop APIs and ensure reliability in high-volume marketing platforms.',
      outcomes: [
        'Improved system reliability with 90%+ test coverage across APIs and core services.',
        'Reduced production bugs by catching issues during development.',
      ],
    },
    {
      company: 'Credit Saint',
      role: 'Full Stack Engineer',
      period: 'Dec 2020 – Feb 2022',
      summary:
        'Applied TDD to refactor backend services for financial dashboards.',
      outcomes: [
        'Enhanced maintainability and scalability of backend services.',
        'Achieved consistent functionality with rigorous unit and integration tests.',
      ],
    },
  ],
  tools: ['Jest', 'Mocha', 'PHPUnit', 'Cypress'],
  keywords: [
    'Unit testing',
    'Integration testing',
    'End-to-end testing',
    'Bug prevention',
    'Automation',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Marketing Platforms (RXMG)',
    'Financial Dashboards (Credit Saint)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Ensuring high test coverage in complex applications.',
      solution:
        'Wrote unit and integration tests incrementally, focusing on edge cases and core functionality.',
    },
    {
      challenge: 'Reducing regression bugs during frequent deployments.',
      solution:
        'Implemented automated end-to-end tests to validate functionality before every release.',
    },
  ],
  projects: [
    {
      name: 'API Testing for RXMG',
      description:
        'Developed rigorous test suites for API endpoints using Jest and Mocha.',
      role: 'Collaborative Developer',
      impact: [
        'Improved API reliability and reduced bug incidence in production.',
      ],
    },
  ],
  learningPath: {
    resources: [
      'Test-Driven Development by Example (book)',
      'Clean Code (book)',
    ],
    milestones: [
      'Achieved 90%+ test coverage in large-scale applications.',
      'Implemented automated end-to-end tests for critical systems.',
    ],
  },
};

export const CodeReviewsDetails: SkillDetails = {
  name: 'Code Reviews',
  icon: '/img/favicon-96.png', // Replace with code review-specific icon if available
  description:
    'Code reviews have been instrumental in improving code quality, fostering collaboration, and maintaining team alignment on best practices.',
  highlights: [
    'Conducted peer reviews to ensure clean, maintainable codebases.',
    'Provided constructive feedback on coding standards and design patterns.',
    'Identified and resolved potential issues during the review process.',
    'Mentored team members by sharing insights and best practices during reviews.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Participated in regular code reviews to maintain quality and ensure adherence to best practices.',
      outcomes: [
        'Improved team productivity by identifying inefficiencies early.',
        'Enhanced code maintainability with clear, actionable feedback.',
      ],
    },
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Led code reviews for a legacy vault platform, ensuring scalability and security.',
      outcomes: [
        'Reduced technical debt by refactoring poorly written code.',
        'Standardized coding practices across the team.',
      ],
    },
  ],
  tools: ['GitHub PRs', 'GitLab Merge Requests', 'Bitbucket'],
  keywords: [
    'Peer reviews',
    'Code quality',
    'Mentorship',
    'Best practices',
    'Collaboration',
  ],
  proficiencyLevel: 'Expert',
  industryApplications: [
    'Marketing Platforms (RXMG)',
    'Startup Platforms (Easeenet)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Maintaining quality in a fast-paced development environment.',
      solution:
        'Implemented structured review processes and established coding standards.',
    },
    {
      challenge: 'Balancing review time with development tasks.',
      solution:
        'Streamlined the process with clear checklists and focused on critical areas first.',
    },
  ],
  projects: [
    {
      name: 'Code Review Practices for RXMG',
      description:
        'Reviewed and approved merge requests to maintain code quality in marketing platforms.',
      role: 'Collaborative Reviewer',
      impact: [
        'Reduced bugs and improved maintainability across repositories.',
      ],
    },
  ],
  learningPath: {
    resources: ['Effective Code Reviews (article series)'],
    milestones: [
      'Reviewed and approved critical features for large-scale applications.',
      'Mentored junior developers during code review sessions.',
    ],
  },
};

export const PairProgrammingDetails: SkillDetails = {
  name: 'Pair Programming',
  icon: '/img/favicon-96.png', // Replace with pair programming-specific icon if available
  description:
    'Pair programming has been a valuable collaboration technique, enabling efficient problem-solving, knowledge sharing, and team bonding.',
  highlights: [
    'Collaborated on complex problems during weekly pair programming sessions.',
    'Improved code quality by combining perspectives and expertise.',
    'Enhanced team cohesion and knowledge transfer through frequent collaboration.',
    'Mentored junior developers by pairing on real-world tasks and challenges.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Engaged in pair programming sessions to troubleshoot and implement critical features for marketing platforms.',
      outcomes: [
        'Resolved blockers faster by leveraging collective expertise.',
        'Improved team understanding of challenging codebase areas.',
      ],
    },
    {
      company: 'Whitman Partners',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Used pair programming to onboard new developers and troubleshoot legacy systems.',
      outcomes: [
        'Accelerated onboarding by providing hands-on guidance.',
        'Enhanced team collaboration through regular pairing sessions.',
      ],
    },
  ],
  tools: ['Visual Studio Live Share', 'Zoom', 'Git'],
  keywords: [
    'Collaboration',
    'Problem-solving',
    'Knowledge sharing',
    'Onboarding',
    'Team bonding',
  ],
  proficiencyLevel: 'Expert',
  industryApplications: [
    'Marketing Platforms (RXMG)',
    'Recruitment Platforms (Whitman Partners)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Balancing individual productivity with collaborative tasks.',
      solution:
        'Scheduled focused pair programming sessions for complex or high-priority features.',
    },
    {
      challenge: 'Onboarding new team members unfamiliar with the codebase.',
      solution:
        'Used pair programming to walk through code structure and best practices.',
    },
  ],
  projects: [
    {
      name: 'Pair Programming for Onboarding',
      description:
        'Facilitated onboarding sessions using pair programming for new team members.',
      role: 'Mentor and Collaborator',
      impact: ['Reduced onboarding time and improved developer confidence.'],
    },
  ],
  learningPath: {
    resources: ['Pair Programming Best Practices (articles)'],
    milestones: [
      'Mentored new developers through structured pair programming.',
      'Collaborated on resolving critical blockers in legacy systems.',
    ],
  },
};

export const CICDPipelinesDetails: SkillDetails = {
  name: 'CI/CD Pipelines',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/gitlab/gitlab-original.svg',
  description:
    'CI/CD pipelines have been integral to my workflow, ensuring automated testing, integration, and deployment processes that maintain high-quality standards.',
  highlights: [
    'Streamlined feature delivery with automated testing and quality checks.',
    'Configured pipelines to build and deploy microservices efficiently.',
    'Enabled environment-specific testing and deployments in production workflows.',
    'Integrated CI/CD pipelines with GitLab for robust development cycles.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Worked with GitLab CI/CD pipelines to automate feature delivery and ensure code quality.',
      outcomes: [
        'Reduced deployment errors by implementing automated testing and validations.',
        'Improved developer productivity with efficient pipeline configurations.',
      ],
    },
    {
      company: 'Credit Saint',
      role: 'Full Stack Engineer',
      period: 'Dec 2020 – Feb 2022',
      summary:
        'Integrated automated testing and deployment steps into GitHub workflows.',
      outcomes: [
        'Reduced release cycles by 50% through streamlined CI/CD processes.',
        'Enhanced reliability of deployments with pre-merge checks.',
      ],
    },
  ],
  tools: ['GitLab CI', 'GitHub Actions', 'Docker', 'Jenkins'],
  keywords: [
    'Automated testing',
    'Deployment workflows',
    'Microservices',
    'Environment-specific builds',
    'Continuous integration',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Marketing Platforms (RXMG)',
    'Financial Dashboards (Credit Saint)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Automating deployment processes for microservices.',
      solution:
        'Used GitLab CI/CD pipelines to build, test, and deploy services efficiently.',
    },
    {
      challenge: 'Ensuring environment-specific configurations in pipelines.',
      solution:
        'Configured dynamic pipeline variables for testing and deployment across different environments.',
    },
  ],
  projects: [
    {
      name: 'CI/CD Pipeline Implementation',
      description:
        'Developed and managed GitLab pipelines for RXMG’s marketing platform.',
      role: 'Collaborative Engineer',
      impact: [
        'Improved deployment consistency and reduced release time by 40%.',
      ],
    },
  ],
  learningPath: {
    resources: ['GitLab CI/CD Docs'],
    milestones: [
      'Configured dynamic pipelines for microservices.',
      'Reduced deployment errors through automated validations.',
    ],
  },
};

export const MonitoringLoggingDetails: SkillDetails = {
  name: 'Monitoring & Logging',
  icon: '/img/favicon-96.png', // Replace with a monitoring/logging-specific icon
  description:
    'Monitoring and logging tools have been essential in maintaining system reliability, identifying issues, and optimizing application performance.',
  highlights: [
    'Monitored application health and performance using Sentry and Datadog.',
    'Implemented log aggregation for scalable error tracking and debugging.',
    'Used dashboards to visualize key performance metrics and identify bottlenecks.',
    'Set up alerts for real-time notifications of critical issues.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Monitored system performance and resolved production issues using Sentry and Datadog.',
      outcomes: [
        'Reduced mean time to resolution (MTTR) by 30% through proactive monitoring.',
        'Improved platform reliability with actionable performance insights.',
      ],
    },
    {
      company: 'Credit Saint',
      role: 'Full Stack Engineer',
      period: 'Dec 2020 – Feb 2022',
      summary:
        'Set up monitoring dashboards to track API performance and system health.',
      outcomes: [
        'Identified and resolved database bottlenecks using Datadog analytics.',
        'Minimized downtime by monitoring critical application metrics.',
      ],
    },
  ],
  tools: ['Sentry', 'Datadog', 'Grafana', 'Prometheus'],
  keywords: [
    'Error tracking',
    'Performance optimization',
    'Log aggregation',
    'Alerting',
    'Dashboards',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Marketing Platforms (RXMG)',
    'Financial Platforms (Credit Saint)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Identifying root causes in complex application failures.',
      solution:
        'Used log aggregation and detailed stack traces in Sentry to pinpoint issues.',
    },
    {
      challenge: 'Monitoring high-traffic systems for performance bottlenecks.',
      solution:
        'Set up real-time dashboards in Datadog to track key metrics and resolve issues proactively.',
    },
  ],
  projects: [
    {
      name: 'Monitoring & Logging for RXMG',
      description:
        'Implemented Sentry and Datadog to monitor marketing platform health and performance.',
      role: 'Collaborative Engineer',
      impact: [
        'Improved system reliability and reduced debugging time by 40%.',
      ],
    },
  ],
  learningPath: {
    resources: ['Sentry Docs', 'Datadog Learning Center'],
    milestones: [
      'Set up monitoring dashboards for high-traffic applications.',
      'Reduced debugging time with aggregated logs and error tracking.',
    ],
  },
};

export const LeadershipDetails: SkillDetails = {
  name: 'Leadership',
  icon: '/img/favicon-96.png', // Replace with a leadership-specific icon if available
  description:
    'Leadership has been a key aspect of my career, where I’ve taken initiative in guiding projects, mentoring team members, and driving collaboration to achieve impactful results.',
  highlights: [
    'Led project development independently, ensuring timely delivery of key features.',
    'Mentored junior developers, fostering skill growth and improving team productivity.',
    'Collaborated with stakeholders to prioritize tasks and align on objectives.',
    'Provided technical direction to ensure scalable and maintainable solutions.',
    'Facilitated knowledge sharing through code reviews and collaborative programming.',
  ],
  experiences: [
    {
      company: 'Plumbing Legend',
      role: 'Full Stack Engineer',
      period: 'Jan 2024 – Present',
      summary:
        'Owned the development of a multi-platform educational app, taking full responsibility for technical decisions and execution.',
      outcomes: [
        'Delivered a robust application independently, incorporating AI and real-time features.',
        'Streamlined communication with stakeholders to align project goals.',
      ],
    },
    {
      company: 'Whitman Partners',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Mentored two developers, provided code reviews, and guided the development of a recruiter portal suite.',
      outcomes: [
        'Improved team productivity through structured mentorship and guidance.',
        'Standardized coding practices, reducing technical debt and improving maintainability.',
      ],
    },
    {
      company: 'Easeenet',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Managed development of a legacy vault product, collaborating closely with the CEO and CTO for direction.',
      outcomes: [
        'Enhanced project scope by proposing and implementing additional features.',
        'Mentored an entry-level developer, fostering their growth in web development.',
      ],
    },
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Played a leadership role in maintaining development standards through code reviews and collaborative programming sessions.',
      outcomes: [
        'Elevated code quality by providing detailed feedback during reviews.',
        'Fostered team growth with knowledge-sharing initiatives and weekly pair programming.',
      ],
    },
  ],
  tools: ['Code Reviews', 'Jira', 'Confluence', 'Knowledge Sharing Sessions'],
  keywords: [
    'Mentorship',
    'Project ownership',
    'Team collaboration',
    'Technical guidance',
    'Stakeholder communication',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: [
    'Education (Plumbing Legend)',
    'Recruitment (Whitman Partners)',
    'Startup Platforms (Easeenet)',
    'Marketing Platforms (RXMG)',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Driving projects independently with minimal direction.',
      solution:
        'Proactively communicated with stakeholders to clarify objectives and ensure alignment on deliverables.',
    },
    {
      challenge: 'Improving team coding standards and reducing technical debt.',
      solution:
        'Conducted thorough code reviews and implemented standardized practices for maintainable solutions.',
    },
  ],
  projects: [
    {
      name: 'Educational App Development',
      description:
        'Led the development of a multi-platform app for Plumbing Legend, managing all aspects of the project.',
      role: 'Project Lead',
      impact: [
        'Delivered an AI-integrated app that improved classroom engagement and learning outcomes.',
      ],
    },
    {
      name: 'Recruiter Portal Suite',
      description:
        'Guided the development of a modern recruiter portal for Whitman Partners, mentoring junior developers.',
      role: 'Team Lead',
      impact: [
        'Improved recruiter workflows and streamlined operations with intuitive tools.',
      ],
    },
  ],
  learningPath: {
    resources: ['Effective Technical Leadership (articles)'],
    milestones: [
      'Mentored junior developers across multiple teams.',
      'Owned full-stack projects independently from inception to delivery.',
      'Collaborated with stakeholders to align on project goals and timelines.',
    ],
  },
};

export const GCPDetails: SkillDetails = {
  name: 'Google Cloud Platform (GCP)',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/googlecloud/googlecloud-original.svg',
  description:
    'Google Cloud Platform has been a key tool for deploying, managing, and scaling applications with serverless functions and efficient storage solutions.',
  highlights: [
    'Integrated GCP services into backend workflows for lightweight operations.',
    'Leveraged Cloud Storage for secure and scalable file storage.',
    'Used serverless GCP Functions to optimize backend processes.',
    'Streamlined deployment workflows using GCP tools and infrastructure.',
  ],
  experiences: [
    {
      company: 'RXMG',
      role: 'Full Stack Engineer',
      period: 'Mar 2022 – Jan 2024',
      summary:
        'Utilized GCP services for managing file storage and backend processing in a CMS/CRM platform.',
      outcomes: [
        'Improved system reliability and performance with GCP Functions.',
        'Optimized data workflows by leveraging GCP Cloud Storage.',
      ],
    },
  ],
  tools: ['GCP Functions', 'Cloud Storage', 'BigQuery', 'Pub/Sub', 'Firestore'],
  keywords: [
    'Serverless architecture',
    'File storage',
    'Data processing',
    'Cloud infrastructure',
    'Lightweight operations',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: ['Marketing Platforms (RXMG)'],
  challengesAndSolutions: [
    {
      challenge: 'Optimizing backend workflows for scalable data processing.',
      solution:
        'Used GCP Functions to create lightweight, serverless tasks that reduced operational costs.',
    },
    {
      challenge:
        'Ensuring secure and reliable file storage in high-traffic applications.',
      solution:
        'Integrated GCP Cloud Storage for efficient and secure handling of large data volumes.',
    },
  ],
  projects: [
    {
      name: 'GCP Integration for RXMG',
      description:
        'Implemented GCP services to streamline backend workflows and file storage.',
      role: 'Collaborative Developer',
      impact: [
        'Reduced operational overhead with serverless architecture.',
        'Improved data management with scalable storage solutions.',
      ],
    },
  ],
  learningPath: {
    resources: ['GCP Docs'],
    milestones: [
      'Integrated GCP Functions into high-traffic workflows.',
      'Optimized file storage and data processing with Cloud Storage.',
    ],
  },
};

export const AzureDetails: SkillDetails = {
  name: 'Microsoft Azure',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/azure/azure-original.svg',
  description:
    'Microsoft Azure has been instrumental in managing cloud infrastructure, deploying scalable applications, and ensuring secure operations for various projects.',
  highlights: [
    'Configured Azure environments for secure and scalable deployments.',
    'Used Azure Virtual Machines and App Services to host applications.',
    'Deployed APIs and microservices using Azure Functions.',
    'Implemented Azure Blob Storage for efficient file handling.',
  ],
  experiences: [
    {
      company: 'Whitman Partners',
      role: 'Full Stack Engineer',
      period: 'Jan 2018 – Dec 2020',
      summary:
        'Set up and maintained Azure infrastructure to support a recruiter portal suite and web scraping bot.',
      outcomes: [
        'Improved scalability and reliability of web applications with Azure App Services.',
        'Optimized file storage workflows using Azure Blob Storage.',
      ],
    },
  ],
  tools: [
    'Azure App Services',
    'Azure Functions',
    'Blob Storage',
    'Virtual Machines',
    'Azure DevOps',
  ],
  keywords: [
    'Cloud infrastructure',
    'File storage',
    'Microservices',
    'Virtual Machines',
    'Scalable deployments',
  ],
  proficiencyLevel: 'Advanced',
  industryApplications: ['Recruitment (Whitman Partners)'],
  challengesAndSolutions: [
    {
      challenge: 'Scaling infrastructure for high-demand web applications.',
      solution:
        'Used Azure App Services to deploy and manage scalable microservices.',
    },
    {
      challenge: 'Efficiently managing large volumes of files and data.',
      solution:
        'Implemented Azure Blob Storage for secure and scalable file handling.',
    },
  ],
  projects: [
    {
      name: 'Azure Infrastructure for Whitman Partners',
      description:
        'Set up and maintained cloud infrastructure for recruiter portals and web scraping tools.',
      role: 'Collaborative Developer',
      impact: [
        'Enhanced reliability and scalability of the platform.',
        'Streamlined workflows with secure file storage solutions.',
      ],
    },
  ],
  learningPath: {
    resources: [
      'Microsoft Azure Docs',
      'Azure Fundamentals (course)',
      'Azure Architecture Guide',
    ],
    milestones: [
      'Configured Azure App Services for scalable application hosting.',
      'Integrated Azure Blob Storage for secure and efficient file handling.',
    ],
  },
};

export const skills: SkillDetails[] = [
  // Primary Programming & Framework Skills
  PHPDetails,
  LaravelDetails,
  JavaScriptDetails,
  TypeScriptDetails,
  NodeJSDetails,
  VueJSDetails,
  ReactDetails,
  ReactNativeDetails,

  // Database & Caching
  MySQLDetails,
  PostgreSQLDetails,
  RedisDetails,
  MongoDBDetails,

  // Frontend Frameworks & Styling
  QuasarVueDetails,
  NuxtJSDetails,
  TailwindCSSDetails,
  CSSDetails,
  SassDetails,

  // Cloud Platforms & Infrastructure
  AWSDetails,
  GCPDetails,
  AzureDetails,

  // DevOps & Deployment
  DockerDetails,
  KubernetesDetails,
  NginxDetails,
  CICDPipelinesDetails,

  // Real-Time & Advanced Features
  WebSocketsDetails,
  MonitoringLoggingDetails,

  // Collaboration & Methodologies
  AgileDetails,
  MentorshipDetails,
  LeadershipDetails,
  CodeReviewsDetails,
  PairProgrammingDetails,

  // Specialized Tools & Techniques
  SwaggerDetails,
  FigmaDetails,
  TDDDetails,
];

/**
 * SkillsPage Component
 * Displays a detailed grid of skills with modals for context, experiences, and highlights.
 */
export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetails | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (skill: SkillDetails) => {
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
            <SkillBlock
              key={index}
              skill={skill}
              onClick={openModal}
            />
          ))}
        </section>

        <SkillModal
          isVisible={isModalVisible}
          onClose={closeModal}
          skill={selectedSkill}
        />
      </main>
    </Layout>
  );
}
