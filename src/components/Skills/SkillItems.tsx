import React, { useState, useEffect } from 'react';
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
  const [isVertical, setIsVertical] = useState(
    typeof window !== 'undefined' && window.innerWidth < 500
  );

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 500);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        direction={isVertical ? 'vertical' : 'horizontal'}
        spaceBetween={10}
        slidesPerView={isVertical ? 2 : 3}
        slidesPerGroup={isVertical ? 2 : 3}
        speed={600}
        pagination={{
          clickable: true,
          el: '.skill-pagination',
        }}
        navigation
        breakpoints={{
          500: { slidesPerView: 3, slidesPerGroup: 3 },
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
        className='w-full mx-auto h-[400px]'
      >
        {isVertical
          ? skills
              .reduce((rows, skill, index) => {
                if (index % 2 === 0) rows.push([skill]);
                else rows[rows.length - 1].push(skill);
                return rows;
              }, [])
              .map((pair, index) => (
                <SwiperSlide key={index}>
                  <div className='grid grid-cols-2 gap-4'>
                    {pair.map((skill) => (
                      <SkillBlock
                        key={skill.name}
                        skill={skill}
                        onClick={() => openModal(skill)}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              ))
          : skills.map((skill, index) => (
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
