import React, { useState, useCallback, useMemo } from 'react';
import WorkBlock from '@site/src/components/Work/WorkBlock';
import { WorkDetails } from '@site/src/models/WorkDetails';
import WorkModal from '@site/src/components/Work/WorkModal';
import personalExperience from '@site/src/config/projects';
import PageLayout from '@site/src/components/PageLayout';

/**
 * ProjectsPage Component
 * Displays a list of personal projects with modals for details.
 */
export default function ProjectsPage() {
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

  const projectBlocks = useMemo(
    () =>
      personalExperience.map((work) => (
        <div
          key={work.title}
          className='w-full sm:w-1/2 lg:w-1/3'
        >
          <WorkBlock
            work={work}
            onClick={openModal}
            className='h-64'
          />
        </div>
      )),
    [personalExperience, openModal]
  );

  return (
    <PageLayout
      title='Projects'
      description='Learn more about my personal projects.'
      sectionId='projects'
      heading='Projects'
      headingDescription='These are personal projects that I use to keep my skills sharp and experiment with different strategies and technology.'
    >
      <div className='flex flex-wrap justify-center gap-8'>{projectBlocks}</div>

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
