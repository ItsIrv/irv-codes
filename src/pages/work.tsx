import React from 'react';
import WorkBlock from '@site/src/components/Work/WorkBlock';
import WorkModal from '@site/src/components/Work/WorkModal';
import workExperience from '@site/src/config/work';
import ItemGridPage from '@site/src/components/ItemGridPage';
import { WorkDetails } from '@site/src/models/WorkDetails';

export default function WorkPage() {
  return (
    <ItemGridPage<WorkDetails>
      title='Work Experience'
      description='Explore my professional work experience in detail.'
      sectionId='work'
      heading='Work Experience'
      headingDescription='My professional work experience.'
      items={workExperience}
      renderItem={(work, openModal) => (
        <WorkBlock
          key={work.company}
          work={work}
          onClick={() => openModal(work)}
        />
      )}
      renderModal={(selectedWork, isVisible, closeModal) =>
        selectedWork && (
          <WorkModal
            isVisible={isVisible}
            onClose={closeModal}
            work={selectedWork}
          />
        )
      }
    />
  );
}
