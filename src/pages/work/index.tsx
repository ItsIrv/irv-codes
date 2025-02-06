import React, { useState, useCallback, useMemo } from 'react';
import Layout from '@theme/Layout';
import WorkBlock from '@site/src/components/Work/WorkBlock';
import WorkModal from '@site/src/components/Work/WorkModal';
import { WorkDetails } from '@site/src/models/WorkDetails';
import workExperience from '@site/src/config/work';

/**
 * WorkPage Component
 * Displays detailed work experience with modals for further context and responsibilities.
 */
export default function WorkPage() {
  const [selectedWork, setSelectedWork] = useState<WorkDetails | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = useCallback((work: WorkDetails) => {
    setSelectedWork(work);
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedWork(null);
    setIsModalVisible(false);
  }, []);

  const workBlocks = useMemo(
    () =>
      workExperience.map((work) => (
        <WorkBlock
          key={work.company}
          work={work}
          onClick={openModal}
        />
      )),
    [workExperience, openModal]
  );

  return (
    <Layout
      title='Work Experience'
      description='Explore my professional work experience in detail.'
    >
      <main className='container mx-auto my-12'>
        <section>
          <h1 className='text-4xl font-bold text-center mb-8 text-white'>
            Work Experience
          </h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {workBlocks}
          </div>
        </section>

        {isModalVisible && selectedWork && (
          <WorkModal
            isVisible={isModalVisible}
            onClose={closeModal}
            work={selectedWork}
          />
        )}
      </main>
    </Layout>
  );
}
