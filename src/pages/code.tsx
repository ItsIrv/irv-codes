import Layout from '@theme/Layout';
import React, { useState } from 'react';
import WorkBlock from '../components/Work/WorkBlock';
import { WorkDetails } from '../models/WorkDetails';
import WorkModal from '../components/Work/WorkModal';

const codeBlocks: WorkDetails[] = [];

/**
 * CodePage Component
 */
export default function CodePage() {
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
              <WorkBlock
                key={index}
                work={work}
                onClick={openModal}
              />
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
