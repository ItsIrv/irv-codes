import Layout from '@theme/Layout';
import React from 'react';
import WorkBlock from '../components/Work/WorkBlock';
import { WorkDetails } from '../models/WorkDetails';
import Link from '@docusaurus/Link';

const codeBlocks: (WorkDetails & { url: string })[] = [
  {
    url: '/code/laravel-echo-sockets#websocketservice-class',
    title: 'Laravel Echo WebSockets',
    roleType: 'TypeScript',
    description:
      'Overhauled the React Native codebase for improved performance and scalability.',
  },
];

/**
 * CodePage Component
 */
export default function CodePage() {
  return (
    <Layout
      title='About'
      description='Learn more about me.'
    >
      <main className='container mx-auto mt-12'>
        <section>
          <h1 className='text-4xl text-center md:text-5xl font-bold font-serif mb-6'>
            Code
          </h1>

          <div className='bg-black/20 rounded p-6 max-w-xl mx-auto mb-12'>
            <p className='text-lg md:text-xl font-body text-center text-neutral-light'>
              Dive into the technical side of my journey. This page features a
              curated selection of code snippets, solutions, and tools I’ve
              shared with the developer community. Whether it’s innovative
              scripts or practical examples, discover the technologies and
              thought processes behind my contributions.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {codeBlocks.map((work, index) => (
              <Link
                key={index}
                href={work.url}
              >
                <WorkBlock
                  key={index}
                  work={work}
                  onClick={() => {}}
                />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
