import React from 'react';
import SkillBlock from '@site/src/components/Skills/SkillBlock';
import SkillModal from '@site/src/components/Skills/SkillModal';
import skills from '@site/src/config/skills';
import ItemGridPage from '@site/src/components/ItemGridPage';
import { SkillDetails } from '@site/src/models/SkillDetails';

export default function SkillsPage() {
  return (
    <ItemGridPage<SkillDetails>
      title='Skills'
      description='Explore my professional skills and experiences.'
      sectionId='skills'
      heading='Skills'
      headingDescription='My technical expertise and professional skills.'
      items={skills}
      dense={true}
      renderItem={(skill, openModal) => (
        <SkillBlock
          key={skill.name}
          skill={skill}
          onClick={() => openModal(skill)}
        />
      )}
      renderModal={(selectedSkill, isVisible, closeModal) => (
        <SkillModal
          isVisible={isVisible}
          onClose={closeModal}
          skill={selectedSkill}
        />
      )}
    />
  );
}
