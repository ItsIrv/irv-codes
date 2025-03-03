import React from 'react';
import WorkBlock from '@site/src/components/Work/WorkBlock';
import WorkModal from '@site/src/components/Work/WorkModal';
import workExperience from '@site/src/config/work';
import { WorkDetails } from '@site/src/models/WorkDetails';
import ItemGrid from '../ItemGrid';

export default function WorkItems() {
  return (
    <ItemGrid<WorkDetails>
      items={workExperience}
      renderItem={(work, openModal) => (
        <WorkBlock
          key={work.company}
          work={work}
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
