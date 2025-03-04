import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import skills from '@site/src/config/skills';
import SkillBlock from './SkillBlock';
import SkillModal from './SkillModal';

export default function SkillItems() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedSkill(null);
    setIsModalVisible(false);
  };

  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        slidesPerGroup={2}
        speed={600}
        pagination={{
          clickable: true,
          el: '.skill-pagination',
        }}
        navigation
        breakpoints={{
          320: {
            direction: 'vertical',
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          500: { direction: 'horizontal', slidesPerView: 3, slidesPerGroup: 3 },
          640: { slidesPerView: 4, slidesPerGroup: 4 },
          850: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            autoplay: { delay: 5000 },
          },
          1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            autoplay: { delay: 5000 },
          },
        }}
        className='w-full mx-auto'
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <SkillBlock
              skill={skill}
              onClick={() => openModal(skill)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Outside Swiper */}
      <div className='skill-pagination custom-pagination pt-4 text-center h-10'></div>

      {/* Modal */}
      <SkillModal
        isVisible={isModalVisible}
        onClose={closeModal}
        skill={selectedSkill}
      />
    </>
  );
}
