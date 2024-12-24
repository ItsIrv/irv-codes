import React, { useState } from 'react';
import Layout from '@theme/Layout';

export interface SkillDetails {
  name: string;
  icon: string;
  description: string;
  highlights: string[];
  experiences: {
    company: string;
    role: string;
    period: string;
    summary: string;
  }[];
}

export const programmingLanguages: SkillDetails[] = [
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/php/php-original.svg',
    description:
      'PHP has been a core backend technology in my career, enabling the development of robust and scalable web applications. I’ve extensively leveraged its capabilities for API development, backend logic, and integration with databases.',
    highlights: [
      'Crafted RESTful APIs to support real-time applications.',
      'Integrated PHP with Laravel to deliver high-performing web solutions.',
      'Optimized server-side logic for enterprise-grade platforms.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Designed and implemented APIs and backend logic for hybrid mobile and web applications using PHP and Laravel.',
      },
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Enhanced backend performance for high-traffic marketing platforms, utilizing PHP to optimize database interactions and business logic.',
      },
      {
        company: 'Credit Saint',
        role: 'Software Developer',
        period: 'Dec 2020 - Feb 2022',
        summary:
          'Developed backend solutions and API integrations for financial dashboards, significantly improving application response times.',
      },
      {
        company: 'Whitman Partners',
        role: 'Software Developer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Maintained a legacy PHP application, optimizing database queries and ensuring application stability.',
      },
    ],
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/javascript/javascript-original.svg',
    description:
      'JavaScript has been integral to my work, enabling me to create dynamic, engaging user interfaces and scalable back-end systems. I have applied its versatility across a range of projects to deliver seamless user experiences.',
    highlights: [
      'Enhanced user engagement with interactive components in Vue.js and Nuxt.js applications.',
      'Optimized JavaScript logic, improving financial dashboard load times by 60% at Credit Saint.',
      'Delivered real-time functionality in hybrid applications using WebSocket integrations.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Created interactive front-end components and real-time integrations for hybrid applications using JavaScript.',
      },
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Built reusable JavaScript components for marketing platforms, optimizing performance and user satisfaction.',
      },
      {
        company: 'Credit Saint',
        role: 'Software Developer',
        period: 'Dec 2020 - Feb 2022',
        summary:
          'Refactored legacy JavaScript code to enhance maintainability and performance in financial applications.',
      },
      {
        company: 'Gamigo',
        role: 'Software Developer',
        period: 'Jun 2015 - Jul 2017',
        summary:
          'Implemented client-side JavaScript features for mobile games, improving user interaction and gameplay mechanics.',
      },
    ],
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/typescript/typescript-original.svg',
    description:
      'TypeScript has been crucial in ensuring scalability and maintainability in my projects, enabling strict type-checking and improved developer productivity. I’ve used it to create robust applications with consistent codebases.',
    highlights: [
      'Refactored Vue.js applications to TypeScript to enhance type safety and reduce runtime errors.',
      'Applied TypeScript in Node.js APIs for predictable and maintainable server-side development.',
      'Streamlined front-end and back-end development with type-safe interfaces.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Utilized TypeScript in hybrid projects, ensuring codebase consistency and reducing bugs in Vue.js and Node.js.',
      },
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Integrated TypeScript into Nuxt.js projects, enhancing developer productivity and application reliability.',
      },
    ],
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/python/python-original.svg',
    description:
      'Python has been a versatile tool for scripting, automation, and data processing in my work. It has enabled me to simplify complex workflows and support critical business operations.',
    highlights: [
      'Automated deployment pipelines and scripted workflows for operational efficiency.',
      'Created data scrapers to enhance revenue-generating processes.',
      'Streamlined data transformations for analytics dashboards.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Developed Python scripts for workflow automation and data processing, optimizing operational efficiency.',
      },
    ],
  },

  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/html5/html5-original.svg',
    description:
      'HTML has been the foundation of my front-end development, enabling me to structure and organize content for web and mobile applications effectively.',
    highlights: [
      'Crafted accessible and SEO-optimized HTML structures for marketing platforms.',
      'Utilized semantic HTML to enhance website usability and maintainability.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Developed clean, accessible HTML structures for hybrid web and mobile applications.',
      },
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Designed semantic HTML structures for marketing campaigns, improving user engagement and SEO performance.',
      },
      {
        company: 'Easeenet',
        role: 'Full Stack Engineer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Built interactive SPAs with a focus on semantic and structured HTML for a startup’s platform.',
      },
    ],
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/css3/css3-original.svg',
    description:
      'CSS has been vital for creating responsive, visually engaging designs that ensure seamless user experiences across devices.',
    highlights: [
      'Developed custom CSS for responsive and mobile-first web applications.',
      'Used advanced CSS techniques to implement modern design patterns and animations.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Crafted responsive layouts and micro-animations for hybrid applications using CSS.',
      },
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Designed and styled components for marketing platforms, ensuring visual consistency and responsiveness.',
      },
      {
        company: 'Easeenet',
        role: 'Full Stack Engineer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Developed CSS stylesheets to bring startup designs to life, focusing on usability and aesthetics.',
      },
    ],
  },
  {
    name: 'Sass',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/sass/sass-original.svg',
    description:
      'Sass has streamlined my development workflow by enabling me to write modular, maintainable, and reusable stylesheets for complex applications.',
    highlights: [
      'Utilized Sass to manage large-scale stylesheets with variables, mixins, and nested rules.',
      'Streamlined design consistency across projects by leveraging Sass partials and functions.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Implemented modular Sass stylesheets to create scalable designs for hybrid applications.',
      },
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Leveraged Sass to optimize and maintain stylesheets for marketing platforms, ensuring design consistency.',
      },
      {
        company: 'Easeenet',
        role: 'Full Stack Engineer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Designed and implemented Sass-based styles for dynamic user interfaces, enabling scalable and reusable code.',
      },
    ],
  },
  {
    name: 'SQL (MySQL, PostgreSQL)',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/mysql/mysql-original.svg',
    description:
      'SQL has been fundamental to my work in managing and optimizing relational databases, ensuring data integrity and performance for scalable applications.',
    highlights: [
      'Designed and optimized MySQL schemas for high-traffic applications.',
      'Improved query performance, reducing database load times by up to 60%.',
      'Integrated PostgreSQL with backend services for robust data operations.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Designed and maintained efficient database schemas, improving data processing and performance for marketing platforms.',
      },
      {
        company: 'Credit Saint',
        role: 'Software Developer',
        period: 'Dec 2020 - Feb 2022',
        summary:
          'Optimized MySQL queries to improve dashboard performance, reducing server load and response times.',
      },
      {
        company: 'Easeenet',
        role: 'Full Stack Engineer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Created and optimized MySQL schemas for a startup platform, ensuring data consistency and scalability.',
      },
    ],
  },
  {
    name: 'NoSQL (MongoDB, Redis)',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/mongodb/mongodb-original.svg',
    description:
      'I’ve utilized NoSQL databases like MongoDB and Redis for real-time data handling and caching, supporting scalable and high-performance applications.',
    highlights: [
      'Integrated Redis caching to enhance application performance.',
      'Designed MongoDB schemas for real-time applications.',
      'Used Redis to manage session storage and reduce server load.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Integrated Redis for caching and real-time data handling in high-traffic applications.',
      },
      {
        company: 'Whitman Partners',
        role: 'Software Developer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Created MongoDB schemas to support web scraping and analytics dashboards.',
      },
      {
        company: 'Gamigo',
        role: 'Software Developer',
        period: 'Jun 2015 - Jul 2017',
        summary:
          'Managed MongoDB and Redis for real-time data processing in mobile games.',
      },
    ],
  },
  {
    name: 'Bash/Shell Scripting',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/bash/bash-original.svg',
    description:
      'Bash scripting has been a vital tool for automating workflows, managing servers, and streamlining development and deployment tasks.',
    highlights: [
      'Automated deployment pipelines and server management with Bash scripts.',
      'Streamlined task scheduling and log management.',
      'Created custom scripts to monitor server health and performance.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Developed deployment scripts to automate server management and application updates.',
      },
      {
        company: 'Whitman Partners',
        role: 'Software Developer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Automated task scheduling and data processing workflows using Bash scripts.',
      },
      {
        company: 'Gamigo',
        role: 'Software Developer',
        period: 'Jun 2015 - Jul 2017',
        summary:
          'Created and maintained scripts to monitor server health and automate routine tasks.',
      },
    ],
  },
];

export const frontendFrameworks: SkillDetails[] = [
  {
    name: 'React.js',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/react/react-original.svg',
    description:
      'React.js has been instrumental in building reusable components and fast, interactive user interfaces. It has enabled me to deliver high-performance web and mobile applications.',
    highlights: [
      'Developed cross-platform mobile apps using React Native.',
      'Built modular React components to enhance maintainability.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Developed hybrid applications using React.js and React Native for seamless cross-platform experiences.',
      },
      {
        company: 'Easeenet',
        role: 'Full Stack Engineer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Built intuitive React components for browser extensions, streamlining workflows and user interaction.',
      },
    ],
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/vuejs/vuejs-original.svg',
    description:
      'Vue.js has been a go-to framework for crafting interactive and visually appealing interfaces. Its simplicity and flexibility have allowed me to deliver high-quality applications.',
    highlights: [
      'Developed interactive dashboards and reusable components for marketing platforms.',
      'Seamlessly integrated Vue.js with backend services for full-stack applications.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Implemented dynamic Vue.js components for marketing platforms, improving interactivity and user satisfaction.',
      },
      {
        company: 'Credit Saint',
        role: 'Software Developer',
        period: 'Dec 2020 - Feb 2022',
        summary:
          'Refactored a legacy application into a Vue.js SPA, reducing load times and enhancing user experience.',
      },
      {
        company: 'Easeenet',
        role: 'Full Stack Engineer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Designed custom Vue.js components to streamline user workflows in startup platforms.',
      },
    ],
  },
  {
    name: 'Nuxt.js',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/nuxtjs/nuxtjs-original.svg',
    description:
      'Nuxt.js has enabled me to deliver server-side rendered applications that prioritize SEO and performance for high-traffic platforms.',
    highlights: [
      'Optimized marketing platforms for SEO using server-side rendering.',
      'Improved load times and accessibility for enterprise-level applications.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Enhanced SEO and performance for marketing platforms by leveraging Nuxt.js server-side rendering.',
      },
    ],
  },
  {
    name: 'Quasar',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/quasar/quasar-original.svg',
    description:
      'Quasar Framework has been pivotal in developing hybrid web and mobile applications with a seamless user experience across devices.',
    highlights: [
      'Built cross-platform applications with Quasar and Capacitor.',
      'Delivered consistent experiences using Quasar’s mobile-first approach.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Developed hybrid applications using Quasar, ensuring seamless cross-platform compatibility and excellent performance.',
      },
    ],
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    description:
      'Tailwind CSS has been a key tool in crafting modern, responsive user interfaces with precision and consistency across projects.',
    highlights: [
      'Styled complex interfaces with utility-first CSS for responsive designs.',
      'Ensured design consistency across platforms using Tailwind.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Utilized Tailwind CSS for dynamic component styling, enhancing design consistency and responsiveness.',
      },
      {
        company: 'Easeenet',
        role: 'Full Stack Engineer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Designed polished, responsive layouts using Tailwind CSS for a startup’s SPA.',
      },
    ],
  },
];

export const backendFrameworks: SkillDetails[] = [
  {
    name: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/laravel/laravel-plain.svg',
    description:
      'Laravel has been integral to building scalable, robust backends, crafting clean APIs, and managing database interactions for various projects.',
    highlights: [
      'Built scalable RESTful APIs for financial platforms and hybrid applications.',
      'Optimized database queries and backend performance using Eloquent ORM.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Developed backend systems and APIs for hybrid web and mobile applications using Laravel.',
      },
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Enhanced backend scalability and performance by implementing robust features and adhering to tight performance standards.',
      },
      {
        company: 'Credit Saint',
        role: 'Software Developer',
        period: 'Dec 2020 - Feb 2022',
        summary:
          'Refactored a legacy backend to Laravel, improving performance and scalability of financial dashboards.',
      },
      {
        company: 'Easeenet',
        role: 'Full Stack Engineer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Designed and implemented backend logic using Laravel for a startup’s core platform.',
      },
    ],
  },
  {
    name: 'Express.js',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/express/express-original.svg',
    description:
      'Express.js has been a reliable choice for developing lightweight, efficient backend systems, especially for microservices and APIs.',
    highlights: [
      'Designed RESTful APIs to handle high-throughput data processing.',
      'Integrated third-party APIs and middleware to streamline workflows.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Developed lightweight REST APIs with Express.js to support real-time hybrid mobile applications.',
      },
      {
        company: 'Easeenet',
        role: 'Full Stack Engineer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Built microservices using Express.js, improving response times and modularity of the application architecture.',
      },
    ],
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/nodejs/nodejs-original.svg',
    description:
      'Node.js has been a core runtime for developing scalable server-side applications, enabling real-time capabilities and efficient data handling.',
    highlights: [
      'Built WebSocket-based features for real-time user interactions.',
      'Developed modular services for dynamic and high-performance architectures.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Implemented real-time features and backend services using Node.js for hybrid web and mobile applications.',
      },
      {
        company: 'Whitman Partners',
        role: 'Software Developer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Developed Node.js services for web scraping and real-time data processing in high-availability environments.',
      },
    ],
  },
  {
    name: 'GraphQL',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/graphql/graphql-plain.svg',
    description:
      'GraphQL has allowed me to create flexible, efficient APIs that adapt to diverse client needs, minimizing over-fetching and under-fetching of data.',
    highlights: [
      'Designed schema-first APIs tailored to client requirements.',
      'Optimized query performance with tools like complexity analysis.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Built GraphQL APIs to serve dynamic front-end clients, reducing API request overhead and enhancing data accessibility.',
      },
    ],
  },
  {
    name: 'WebSockets',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/socketio/socketio-original.svg', // Replace with preferred icon if needed
    description:
      'WebSocket integration has been critical for enabling real-time user experiences, including notifications, chat systems, and live updates.',
    highlights: [
      'Developed scalable WebSocket-based systems for concurrent users.',
      'Enabled real-time notifications and user interactions in hybrid applications.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Integrated WebSocket features to deliver real-time chat and notification systems in hybrid apps.',
      },
    ],
  },
];

export const mobileDevelopment: SkillDetails[] = [
  {
    name: 'React Native',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/react/react-original.svg',
    description:
      'React Native has enabled me to build performant cross-platform mobile applications, delivering consistent user experiences across Android and iOS.',
    highlights: [
      'Developed mobile applications with features like offline access and real-time notifications.',
      'Optimized mobile app performance for smooth interactions and animations.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Built a cross-platform mobile app using React Native, incorporating real-time features and offline support for enhanced user accessibility.',
      },
    ],
  },
];

export const infrastructureCloud: SkillDetails[] = [
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    description:
      'AWS has been pivotal in building scalable, secure, and reliable cloud infrastructures for web and mobile applications.',
    highlights: [
      'Configured Elastic Beanstalk for seamless application deployments.',
      'Leveraged AWS Lambda to support serverless architecture.',
      'Managed storage and CDN using S3 and CloudFront.',
    ],
    experiences: [
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Designed and managed AWS-based infrastructure for hybrid apps, ensuring scalability and cost efficiency.',
      },
      {
        company: 'Credit Saint',
        role: 'Software Developer',
        period: 'Dec 2020 - Feb 2022',
        summary:
          'Set up AWS Elastic Beanstalk and S3 for automated deployment and efficient storage management.',
      },
    ],
  },
  {
    name: 'Google Cloud',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/googlecloud/googlecloud-original.svg',
    description:
      'I have leveraged Google Cloud Platform for serverless functions and file storage, optimizing backend workflows and reducing operational overhead.',
    highlights: [
      'Integrated GCP functions for lightweight backend operations.',
      'Handled file storage and processing with GCP services.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Used GCP functions and storage services to streamline backend file processing and lightweight tasks.',
      },
    ],
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/docker/docker-original.svg',
    description:
      'Docker has been integral in creating consistent development environments and containerizing applications for smooth deployments.',
    highlights: [
      'Streamlined local development using Docker containers.',
      'Deployed multi-container applications with Docker Compose.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Maintained containerized environments for local development and production using Docker.',
      },
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Configured Docker containers to optimize development workflows and deployments.',
      },
    ],
  },
  {
    name: 'Nginx',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/nginx/nginx-original.svg',
    description:
      'Nginx has been a key tool in optimizing server performance and managing reverse proxy configurations for load balancing and secure communication.',
    highlights: [
      'Configured Nginx for high-performance web applications.',
      'Set up reverse proxy and load balancers for improved scalability.',
    ],
    experiences: [
      {
        company: 'Whitman Partners',
        role: 'Software Developer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Optimized Nginx configurations for scalable and secure web application deployments.',
      },
      {
        company: 'Easeenet',
        role: 'Full Stack Engineer',
        period: 'Jan 2018 - Dec 2020',
        summary:
          'Implemented Nginx setups to handle high-performance Single Page Applications (SPAs).',
      },
    ],
  },
  {
    name: 'Kubernetes',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/kubernetes/kubernetes-plain.svg',
    description:
      'I have gained hands-on exposure to Kubernetes in enterprise environments, understanding deployment workflows and workload management for Docker-based applications.',
    highlights: [
      'Explored Kubernetes integrations with Docker for scalable deployments.',
      'Worked within GitLab pipelines to manage Kubernetes-based microservices.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Explored Kubernetes in Docker-based applications, managing microservices and integrating with CI/CD pipelines.',
      },
    ],
  },
];

export const toolsAndPlatforms: SkillDetails[] = [
  {
    name: 'Git & Version Control',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/git/git-original.svg',
    description:
      'Version control has been central to my workflows, ensuring code quality, collaboration, and efficient release processes through GitHub and GitLab.',
    highlights: [
      'Managed code repositories with GitLab for rigorous version control.',
      'Streamlined workflows using Git branches and pull requests for code reviews.',
      'Contributed to CI/CD pipelines integrated with GitLab repositories.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Used GitLab for version control, contributing to structured code reviews and repository management.',
      },
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Managed GitHub repositories for personal and client projects, maintaining clean commit histories and structured workflows.',
      },
    ],
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/figma/figma-original.svg',
    description:
      'Figma has enabled me to collaborate with design teams, ensuring seamless transitions from prototypes to fully developed interfaces.',
    highlights: [
      'Reviewed UI/UX prototypes to align development with design goals.',
      'Worked closely with designers to ensure pixel-perfect implementations.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Collaborated with design teams via Figma, ensuring accurate implementation of design specifications in Vue.js components.',
      },
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Used Figma to translate client design requirements into fully functional web interfaces.',
      },
    ],
  },
  {
    name: 'Postman & Swagger',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/postman/postman-original.svg',
    description:
      'API testing and documentation have been streamlined with tools like Postman and Swagger, enabling efficient API integrations and debugging.',
    highlights: [
      'Tested API endpoints and workflows with Postman.',
      'Created Swagger documentation for streamlined API consumption by frontend teams.',
    ],
    experiences: [
      {
        company: 'Credit Saint',
        role: 'Software Developer',
        period: 'Dec 2020 - Feb 2022',
        summary:
          'Tested RESTful API workflows and shared Swagger documentation to facilitate smooth frontend-backend integration.',
      },
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Utilized Postman to test API endpoints and ensure functionality before deployment.',
      },
    ],
  },
];
export const teamAndMethodologies: SkillDetails[] = [
  {
    name: 'Agile (Scrum & Kanban)',
    icon: '/img/favicon-96.png',
    description:
      'Agile methodologies have been a key part of my work, enabling me to collaborate effectively and deliver incremental improvements while aligning with business objectives.',
    highlights: [
      'Participated in sprint planning, stand-ups, and retrospectives to drive iterative development.',
      'Adapted to dynamic priorities with Kanban boards for streamlined task management.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Collaborated in Agile Scrum ceremonies, including sprint planning and retrospectives, to prioritize features and resolve bottlenecks.',
      },
      {
        company: 'Credit Saint',
        role: 'Software Developer',
        period: 'Dec 2020 - Feb 2022',
        summary:
          'Used Kanban for daily task tracking and Agile sprints to deliver high-priority features in a timely manner.',
      },
    ],
  },
  {
    name: 'Code Reviews & Pair Programming',
    icon: '/img/favicon-96.png',
    description:
      'Code reviews and pair programming sessions have been invaluable for improving code quality, fostering collaboration, and sharing knowledge.',
    highlights: [
      'Conducted peer reviews to ensure maintainable and efficient codebases.',
      'Engaged in pair programming to troubleshoot complex issues and share best practices.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Performed detailed code reviews to maintain quality and actively participated in pair programming for critical features.',
      },
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Collaborated with clients and team members on pair programming sessions to enhance technical solutions.',
      },
    ],
  },
  {
    name: 'Test-Driven Development (TDD)',
    icon: '/img/favicon-96.png',
    description:
      'I adhere to TDD principles to ensure robust, maintainable code by writing comprehensive unit and integration tests before development.',
    highlights: [
      'Reduced bug incidence by following TDD practices during API development.',
      'Improved test coverage and reduced deployment risks through rigorous test suites.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Wrote extensive unit tests and integration tests to ensure reliability across Vue.js and Laravel services.',
      },
      {
        company: 'Credit Saint',
        role: 'Software Developer',
        period: 'Dec 2020 - Feb 2022',
        summary:
          'Applied TDD principles to backend development, improving code stability and reducing regressions.',
      },
    ],
  },
  {
    name: 'Mentorship & Knowledge Sharing',
    icon: '/img/favicon-96.png',
    description:
      'Mentorship has allowed me to share expertise, guide team members, and create a collaborative and supportive work environment.',
    highlights: [
      'Onboarded new developers and provided technical guidance.',
      'Led knowledge-sharing sessions to upskill team members on modern practices.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Mentored junior developers through code reviews and collaborative projects, improving team cohesion and skillsets.',
      },
      {
        company: 'Freelance',
        role: 'Full Stack Engineer',
        period: 'Jan 2024 - Present',
        summary:
          'Provided mentorship to aspiring developers by reviewing portfolios and conducting mock technical interviews.',
      },
    ],
  },
];

export const devOpsAndAutomation: SkillDetails[] = [
  {
    name: 'CI/CD Pipelines',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/gitlab/gitlab-original.svg', // Replace with preferred icon
    description:
      'CI/CD pipelines have been integral to my workflow, ensuring automated testing, integration, and deployment processes that maintain high-quality standards.',
    highlights: [
      'Ensured code adhered to rigorous pipeline standards with automated testing and quality checks.',
      'Streamlined deployment workflows using GitLab buttons to spin up micro-environments.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Worked with GitLab pipelines to deploy features, validate environments, and ensure compliance with automated tests.',
      },
      {
        company: 'Credit Saint',
        role: 'Software Developer',
        period: 'Dec 2020 - Feb 2022',
        summary:
          'Integrated automated testing and deployment steps into pipelines, reducing release cycles by 50%.',
      },
    ],
  },
  {
    name: 'Monitoring & Logging (Sentry, Datadog)',
    icon: '/img/favicon-96.png',
    description:
      'Monitoring and logging tools have been essential in maintaining system reliability, identifying issues, and optimizing application performance.',
    highlights: [
      'Used Sentry for error monitoring and alerting across web and mobile platforms.',
      'Tracked application performance metrics with Datadog to identify bottlenecks.',
    ],
    experiences: [
      {
        company: 'RXMG',
        role: 'Full Stack Engineer',
        period: 'Mar 2022 - Jan 2024',
        summary:
          'Monitored system performance and resolved production issues using Sentry and Datadog.',
      },
      {
        company: 'Credit Saint',
        role: 'Software Developer',
        period: 'Dec 2020 - Feb 2022',
        summary:
          'Set up monitoring dashboards with Sentry and optimized performance with Datadog insights.',
      },
    ],
  },
];

export const skills: SkillDetails[] = [
  ...programmingLanguages,
  ...frontendFrameworks,
  ...backendFrameworks,
  ...mobileDevelopment,
  ...infrastructureCloud,
  ...toolsAndPlatforms,
  ...teamAndMethodologies,
  ...devOpsAndAutomation,
];

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
