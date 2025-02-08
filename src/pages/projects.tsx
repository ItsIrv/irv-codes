import React from 'react';
import WorkBlock from '@site/src/components/Work/WorkBlock';
import WorkModal from '@site/src/components/Work/WorkModal';
import personalExperience from '@site/src/config/projects';
import ItemGridPage from '@site/src/components/ItemGridPage';
import { WorkDetails } from '@site/src/models/WorkDetails';

export default function ProjectsPage() {
  return (
    <ItemGridPage<WorkDetails>
      title='Projects'
      description='Learn more about my personal projects.'
      sectionId='projects'
      heading='Projects'
      headingDescription='These personal projects help me sharpen my skills and experiment with different technologies.'
      items={personalExperience}
      renderItem={(work, openModal) => (
        <WorkBlock
          key={work.title}
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
