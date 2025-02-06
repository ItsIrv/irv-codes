import React, { useState, useCallback, useMemo } from 'react';
import Layout from '@theme/Layout';
import { SkillDetails } from '@site/src/models/SkillDetails';
import SkillBlock from '@site/src/components/Skills/SkillBlock';
import SkillModal from '@site/src/components/Skills/SkillModal';
import skills from '@site/src/config/skills';

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
    <Layout
      title='Skills'
      description='Explore my professional skills and experiences.'
    >
      <main className='container mx-auto my-12'>
        <section>
          <h1 className='text-4xl font-bold text-center mb-8 text-white'>
            Skills
          </h1>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {skillBlocks}
          </div>
        </section>

        {isModalVisible && selectedSkill && (
          <SkillModal
            isVisible={isModalVisible}
            onClose={closeModal}
            skill={selectedSkill}
          />
        )}
      </main>
    </Layout>
  );
}
