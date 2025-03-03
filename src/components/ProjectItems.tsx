import React from 'react';
import WorkBlock from '@site/src/components/Work/WorkBlock';
import WorkModal from '@site/src/components/Work/WorkModal';
import personalExperience from '@site/src/config/projects';
import { WorkDetails } from '@site/src/models/WorkDetails';
import ItemGrid from './ItemGrid';

export default function ProjectItems() {
  return (
    <ItemGrid<WorkDetails>
      items={personalExperience}
      renderItem={(work, openModal) => (
        <WorkBlock
          key={work.title}
          work={work}
          className='!h-64'
          onClick={() => openModal(work)}
        />
      )}
      renderModal={(selectedWork, isVisible, closeModal) => (
        <WorkModal
          isVisible={isVisible}
          onClose={closeModal}
          work={selectedWork}
        />
      )}
    />
  );
}
