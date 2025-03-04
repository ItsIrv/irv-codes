import { SkillDetails } from '../models/SkillDetails';

export const PHPDetails: SkillDetails = {
  name: 'PHP',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/php/php-original.svg',
  description:
    'PHP is a versatile, server-side scripting language that I’ve extensively used to build APIs, backend systems, and full-stack applications. Its simplicity and flexibility make it a reliable choice for scalable and dynamic web applications.',
  highlights: [
    'Extensive use in building APIs, backend systems, and full-stack applications.',
    'Proficient with Laravel and custom PHP frameworks.',
    'Experience with performance optimization techniques, including caching and query optimization.',
    'Skilled in handling data securely using PHP’s encryption and validation capabilities.',
    'Integrated PHP seamlessly with frontends built in Vue.js, React.js, and more.',
  ],
  tools: ['Laravel', 'Composer', 'Symfony', 'PHPUnit', 'OPcache'],
  proficiencyLevel: 'Expert',
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
  tools: [
    'Eloquent ORM',
    'Jobs',
    'Events',
    'Queues',
    'Commands',
    'APIs',
    'Broadcasting',
  ],
  proficiencyLevel: 'Expert',
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
  tools: [
    'ES6+',
    'TypeScript',
    'Node.js',
    'Vue.js',
    'React.js',
    'Webpack',
    'Babel',
  ],
  proficiencyLevel: 'Expert',
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
  tools: ['React Native', 'Node.js', 'Vue.js', 'Express', 'Eslint', 'Prettier'],
  proficiencyLevel: 'Advanced',
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
  tools: ['Express', 'WebSockets', 'MongoDB', 'Postgres', 'Redis'],
  proficiencyLevel: 'Advanced',
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
  tools: ['Vuex', 'Quasar', 'Vuetify', 'Vue Router', 'Axios'],
  proficiencyLevel: 'Expert',
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
  tools: [
    'React Native CLI',
    'TypeScript',
    'Redux',
    'Axios',
    'Expo',
    'React Navigation',
  ],
  proficiencyLevel: 'Advanced',
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
  tools: ['Laravel', 'Node.js', 'Redis CLI', 'Pub/Sub'],
  proficiencyLevel: 'Advanced',
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
  tools: ['phpMyAdmin', 'Sequelize', 'Eloquent ORM', 'MySQL Workbench'],
  proficiencyLevel: 'Expert',
};

export const AWSDetails: SkillDetails = {
  name: 'AWS',
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
  tools: ['Elastic Beanstalk', 'RDS', 'S3', 'AWS Lambda', 'CloudFront', 'EC2'],
  proficiencyLevel: 'Advanced',
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
  tools: ['Quasar CLI', 'Vuex', 'Vue Router', 'Axios', 'WebSockets'],
  proficiencyLevel: 'Advanced',
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
  tools: ['React', 'React Native', 'Redux', 'Axios', 'React Navigation'],
  proficiencyLevel: 'Advanced',
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
  tools: ['pgAdmin', 'PostgreSQL CLI', 'Sequelize', 'Eloquent ORM'],
  proficiencyLevel: 'Advanced',
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
  tools: ['Nuxt.js CLI', 'Vuex', 'Axios', 'Vue Router'],
  proficiencyLevel: 'Advanced',
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
  tools: ['Tailwind CSS', 'Bootstrap', 'CSS Grid', 'Flexbox', 'PostCSS'],
  proficiencyLevel: 'Expert',
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
  tools: ['MongoDB Atlas', 'Mongoose', 'MongoDB CLI', 'Compass'],
  proficiencyLevel: 'Advanced',
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
  tools: ['Sass CLI', 'Preprocessors', 'CSS Modules', 'PostCSS'],
  proficiencyLevel: 'Advanced',
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
  tools: ['Socket.IO', 'Redis Pub/Sub', 'WebSocket API'],
  proficiencyLevel: 'Advanced',
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

  tools: ['Docker CLI', 'Docker Compose', 'Kubernetes (integration)'],
  proficiencyLevel: 'Advanced',
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
  tools: ['Nginx CLI', 'Certbot', 'Load Balancers'],
  proficiencyLevel: 'Advanced',
};

export const KubernetesDetails: SkillDetails = {
  name: 'Kubernetes',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/kubernetes/kubernetes-plain.svg',
  description:
    'Kubernetes is a container orchestration tool that I’ve worked with indirectly through GitLab pipelines and pre-configured infrastructure, providing exposure to workflows involving microservices and scalable environments.',
  highlights: [
    'Collaborated on workflows that utilized Kubernetes for microservice testing and deployment.',
    'Worked within GitLab CI/CD pipelines designed for Kubernetes-managed environments.',
    'Observed the use of Kubernetes for dynamic microservice testing workflows.',
    'Developed features tested on pre-configured Kubernetes environments managed by other teams.',
  ],
  tools: ['GitLab CI/CD', 'Pre-configured Kubernetes Clusters', 'Docker'],
  proficiencyLevel: 'Intermediate',
};

export const TailwindCSSDetails: SkillDetails = {
  name: 'Tailwind',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  description:
    'Tailwind CSS has been a key tool for crafting modern, responsive user interfaces with precision and consistency across projects.',
  highlights: [
    'Styled complex interfaces with utility-first CSS for responsive designs.',
    'Built reusable design components to maintain consistency.',
    "Enhanced UI development efficiency by leveraging Tailwind's design system.",
  ],
  tools: ['Tailwind CLI', 'PostCSS', 'DaisyUI'],
  proficiencyLevel: 'Expert',
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
  tools: ['Figma', 'Figma Plugins', 'Vue.js', 'React.js'],
  proficiencyLevel: 'Advanced',
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
  tools: ['Swagger UI', 'Swagger Hub', 'OpenAPI'],
  proficiencyLevel: 'Advanced',
};
export const CICDPipelinesDetails: SkillDetails = {
  name: 'CI & CD',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/gitlab/gitlab-original.svg',
  description:
    'CI/CD pipelines have been integral to my workflow, ensuring automated testing, integration, and deployment processes that maintain high-quality standards.',
  highlights: [
    'Streamlined feature delivery with automated testing and quality checks.',
    'Configured pipelines to build and deploy microservices efficiently.',
    'Enabled environment-specific testing and deployments in production workflows.',
    'Integrated CI/CD pipelines with GitLab for robust development cycles.',
  ],
  tools: ['GitLab CI', 'GitHub Actions', 'Docker', 'Jenkins'],
  proficiencyLevel: 'Advanced',
};

export const GCPDetails: SkillDetails = {
  name: 'GCP',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/googlecloud/googlecloud-original.svg',
  description:
    'Google Cloud Platform has been a key tool for deploying, managing, and scaling applications with serverless functions and efficient storage solutions.',
  highlights: [
    'Integrated GCP services into backend workflows for lightweight operations.',
    'Leveraged Cloud Storage for secure and scalable file storage.',
    'Used serverless GCP Functions to optimize backend processes.',
    'Streamlined deployment workflows using GCP tools and infrastructure.',
  ],
  tools: ['GCP Functions', 'Cloud Storage', 'BigQuery', 'Pub/Sub', 'Firestore'],
  proficiencyLevel: 'Advanced',
};

export const AzureDetails: SkillDetails = {
  name: 'Azure',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/azure/azure-original.svg',
  description:
    'Microsoft Azure has been instrumental in managing cloud infrastructure, deploying scalable applications, and ensuring secure operations for various projects.',
  highlights: [
    'Configured Azure environments for secure and scalable deployments.',
    'Used Azure Virtual Machines and App Services to host applications.',
    'Deployed APIs and microservices using Azure Functions.',
    'Implemented Azure Blob Storage for efficient file handling.',
  ],
  tools: [
    'Azure App Services',
    'Azure Functions',
    'Blob Storage',
    'Virtual Machines',
    'Azure DevOps',
  ],
  proficiencyLevel: 'Advanced',
};

export const HTML5Details: SkillDetails = {
  name: 'HTML5',
  icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/html5/html5-original.svg',
  description:
    'HTML5 has been the foundation of my front-end development, enabling me to create well-structured, accessible, and SEO-optimized web pages and applications.',
  highlights: [
    'Crafted accessible and SEO-friendly HTML structures for various projects.',
    'Used semantic HTML to enhance website usability and maintainability.',
    'Integrated HTML5 features like media elements and form validation.',
    'Developed modular, reusable templates for hybrid and multi-platform apps.',
  ],
  tools: [
    'HTML5 Validator',
    'Web Accessibility Tools',
    'Responsive Design Testing',
  ],
  proficiencyLevel: 'Expert',
};

export const skills: SkillDetails[] = [
  // Primary Programming & Framework Skills
  PHPDetails,
  LaravelDetails,
  VueJSDetails,
  JavaScriptDetails,
  TypeScriptDetails,
  NodeJSDetails,
  ReactNativeDetails,
  HTML5Details,
  QuasarVueDetails,
  NuxtJSDetails,
  TailwindCSSDetails,
  CSSDetails,
  SassDetails,

  // Database & Caching
  MySQLDetails,
  PostgreSQLDetails,
  RedisDetails,
  MongoDBDetails,

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
  // MonitoringLoggingDetails,

  // Collaboration & Methodologies
  // AgileDetails,
  // MentorshipDetails,
  // LeadershipDetails,
  // CodeReviewsDetails,
  // PairProgrammingDetails,

  // Specialized Tools & Techniques
  SwaggerDetails,
  FigmaDetails,
];

export default skills;
