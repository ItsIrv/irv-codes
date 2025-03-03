import React from 'react';
import SkillBlock from '@site/src/components/Skills/SkillBlock';
import SkillModal from '@site/src/components/Skills/SkillModal';
import skills from '@site/src/config/skills';
import { SkillDetails } from '@site/src/models/SkillDetails';
import ItemGrid from '../ItemGrid';

export default function SkillItems() {
  return (
    <ItemGrid<SkillDetails>
      items={skills}
      className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-0 !rounded-none border-0'
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
