import React, { useState, useCallback, useMemo } from 'react';
import WorkBlock from '@site/src/components/Work/WorkBlock';
import WorkModal from '@site/src/components/Work/WorkModal';
import { WorkDetails } from '@site/src/models/WorkDetails';
import workExperience from '@site/src/config/work';
import PageLayout from '@site/src/components/PageLayout';

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
    setIsModalVisible(false);
    setTimeout(() => setSelectedWork(null), 300);
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
    <PageLayout
      title='Work Experience'
      description='Explore my professional work experience in detail.'
      sectionId='work'
      heading='Work Experience'
      headingDescription='My professional work experience.'
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {workBlocks}
      </div>

      {isModalVisible && selectedWork && (
        <WorkModal
          isVisible={isModalVisible}
          onClose={closeModal}
          work={selectedWork}
        />
      )}
    </PageLayout>
  );
}
