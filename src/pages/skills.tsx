import React, { useState, useCallback, useMemo } from 'react';
import { SkillDetails } from '@site/src/models/SkillDetails';
import SkillBlock from '@site/src/components/Skills/SkillBlock';
import SkillModal from '@site/src/components/Skills/SkillModal';
import skills from '@site/src/config/skills';
import PageLayout from '@site/src/components/PageLayout';

/**
 * SkillsPage Component
 * Displays a detailed grid of skills with modals for context, experiences, and highlights.
 */
export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetails | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = useCallback((skill: SkillDetails) => {
    setSelectedSkill(skill);
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedSkill(null);
    setIsModalVisible(false);
  }, []);

  const skillBlocks = useMemo(
    () =>
      skills.map((skill) => (
        <SkillBlock
          key={skill.name}
          skill={skill}
          onClick={openModal}
        />
      )),
    [skills, openModal]
  );

  return (
    <PageLayout
      title='Skills'
      description='Explore my professional skills and experiences.'
      sectionId='skills'
      heading='Skills'
      headingDescription='My technical expertise and professional skills.'
    >
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>{skillBlocks}</div>

      {isModalVisible && selectedSkill && (
        <SkillModal
          isVisible={isModalVisible}
          onClose={closeModal}
          skill={selectedSkill}
        />
      )}
    </PageLayout>
  );
}
