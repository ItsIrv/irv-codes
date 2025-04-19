import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import workExperience from '@site/src/config/work';
import WorkBlock from '@site/src/components/Work/WorkBlock';
import WorkModal from '@site/src/components/Work/WorkModal';
import { WorkDetails } from '@site/src/models/WorkDetails';

export default function WorkItems() {
  const [selectedWork, setSelectedWork] = useState<WorkDetails | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (work: WorkDetails) => {
    setSelectedWork(work);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedWork(null);
    setIsModalVisible(false);
  };

  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        slidesPerGroup={1}
        speed={700}
        pagination={{
          clickable: true,
          el: '.work-pagination',
        }}
        navigation
        breakpoints={{
          500: { slidesPerView: 2, slidesPerGroup: 2 },
          768: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
        className='w-full mx-auto h-[350px] sm:h-auto'
      >
        {workExperience.map((work, index) => (
          <SwiperSlide key={index}>
            <WorkBlock
              work={work}
              className='h-auto sm:h-72'
              onClick={() => openModal(work)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Outside Swiper */}
      <div className='work-pagination custom-pagination pt-4 text-center h-10'></div>

      {/* Modal */}
      <WorkModal
        isVisible={isModalVisible}
        onClose={closeModal}
        work={selectedWork}
      />
    </>
  );
}
