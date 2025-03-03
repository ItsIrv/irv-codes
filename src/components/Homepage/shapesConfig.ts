const width = 32;
const height = 32;

// List of required icons with their Devicon CDN paths
const shapesConfig = [
  { name: 'php', src: 'php-original.svg' },
  { name: 'composer', src: 'composer-original.svg' },
  { name: 'symfony', src: 'symfony-original.svg' },
  { name: 'javascript', src: 'javascript-original.svg' },
  { name: 'typescript', src: 'typescript-original.svg' },
  { name: 'python', src: 'python-original.svg' },
  { name: 'html5', src: 'html5-original.svg' },
  { name: 'css3', src: 'css3-original.svg' },
  { name: 'sass', src: 'sass-original.svg' },
  { name: 'laravel', src: 'laravel-plain.svg' },
  { name: 'react', src: 'react-original.svg' },
  { name: 'vuejs', src: 'vuejs-original.svg' },
  { name: 'nodejs', src: 'nodejs-original.svg' },
  { name: 'express', src: 'express-original.svg' },
  { name: 'tailwindcss', src: 'tailwindcss-plain.svg' },
  { name: 'mysql', src: 'mysql-original.svg' },
  { name: 'postgresql', src: 'postgresql-original.svg' },
  { name: 'mongodb', src: 'mongodb-original.svg' },
  { name: 'redis', src: 'redis-original.svg' },
  { name: 'docker', src: 'docker-original.svg' },
  { name: 'amazonwebservices', src: 'amazonwebservices-original.svg' },
  { name: 'googlecloud', src: 'googlecloud-original.svg' },
  { name: 'azure', src: 'azure-original.svg' },
];

// Map names to the full CDN URL
const cdnBaseUrl = 'https://cdn.jsdelivr.net/npm/devicon/icons';
const shapesWithUrls = shapesConfig.map((shape) => ({
  src: `${cdnBaseUrl}/${shape.name}/${shape.src}`,
  width,
  height,
}));

export default shapesWithUrls;
