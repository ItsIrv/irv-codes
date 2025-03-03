import { WorkDetails } from '../models/WorkDetails';

export const QuVelKitWorkDetails: WorkDetails = {
  title: 'QuVel Kit',
  roleType: 'Full-Stack SaaS Boilerplate',
  description:
    'QuVel Kit is a Laravel + Quasar SSR boilerplate designed for multi-tenant SaaS applications. It provides a structured development environment with authentication, modular services, and a scalable architecture.',
  responsibilities: [
    'Developing a modular Laravel backend with a multi-tenant architecture.',
    'Building a Quasar SSR frontend with Tailwind CSS for styling.',
    'Implementing authentication with OAuth, API tokens, and session-based logins.',
    'Setting up a Traefik-based Docker environment for local development.',
    'Optimizing application security with structured logging and access control.',
  ],
  technologies: [
    {
      name: 'Laravel',
      description:
        'Backend framework handling API development and multi-tenancy.',
    },
    {
      name: 'Quasar SSR',
      description:
        'Vue-based frontend framework supporting SSR and SPA hydration.',
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework used for styling.',
    },
    {
      name: 'Traefik & Docker',
      description:
        'Reverse proxy and containerization setup for local development.',
    },
    {
      name: 'RBAC & OAuth',
      description: 'Role-Based Access Control and authentication system.',
    },
  ],
  keyAchievements: [
    'Created a structured SaaS boilerplate for multi-tenant applications.',
    'Set up a reproducible development environment with Docker and HTTPS.',
    'Designed an authentication system supporting multiple login methods.',
  ],
  challengesAndSolutions: [
    {
      challenge: 'Handling multi-tenant data separation.',
      solution:
        'Designed a modular structure allowing tenant-based extensions.',
    },
    {
      challenge: 'Ensuring SSR and SPA hydration consistency.',
      solution: 'Optimized Quasar SSR with proper state handling.',
    },
  ],
  resources: [
    {
      type: 'liveProject',
      label: 'GitHub Repository',
      url: 'https://github.com/ItsIrv/quvel-kit',
    },
    {
      type: 'repository',
      label: 'QuVel Kit Documentation',
      url: 'https://github.com/ItsIrv/quvel-kit/blob/main/docs/README.md',
    },
  ],
};

const personalExperience: WorkDetails[] = [QuVelKitWorkDetails];

export default personalExperience;
