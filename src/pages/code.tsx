import React from 'react';
import PageLayout from '@site/src/components/PageLayout';
import WorkBlock from '../components/Work/WorkBlock';
import { WorkDetails } from '../models/WorkDetails';
import Link from '@docusaurus/Link';

const codeBlocks: (WorkDetails & { url: string })[] = [
  {
    url: '/code/laravel-echo-sockets',
    title: 'Laravel WebSocket Utilities',
    roleType: 'TypeScript',
    description:
      'A useWebSocket composable for Vue, and a WebSocketService in TypeScript.',
  },
];

export default function CodePage() {
  return (
    <PageLayout
      title='Code'
      description='Explore my publicly available code contributions.'
      sectionId='code'
      heading='Code'
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {codeBlocks.map((work) => (
          <Link
            key={work.title}
            href={work.url}
          >
            <WorkBlock
              work={work}
              onClick={() => {}}
            />
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
