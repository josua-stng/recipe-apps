'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function ContextData() {
  return (
    <div className="mt-20 mb-24 mx-5 sm:mx-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full sm:h-80 sm:max-w-6xl"
      >
        <SwiperSlide>
          <Image
              unoptimized
            width={450}
            height={300}
            className="w-full h-full object-cover  mx-auto rounded-md"
            src={'https://i.ytimg.com/vi/mnCDSmooRxA/maxresdefault.jpg'}
            alt={''}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
              unoptimized
            width={450}
            height={300}
            className="w-full h-full object-cover mx-auto rounded-md"
            src={
              'https://graphicsfamily.com/wp-content/uploads/edd/2020/11/Tasty-Food-Web-Banner-Design-1180x664.jpg'
            }
            alt={''}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
              unoptimized
            width={450}
            height={300}
            className="w-full h-full object-cover mx-auto rounded-md"
            src={
              'https://graphicsfamily.com/wp-content/uploads/edd/2023/05/Website-Food-Banner-Design-scaled.jpg'
            }
            alt={''}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
              unoptimized
            width={450}
            height={300}
            className="w-full h-full object-cover mx-auto rounded-md"
            src={
              'https://graphicsfamily.com/wp-content/uploads/edd/2022/09/Food-Web-Banner-Design-1180x664.jpg'
            }
            alt={''}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
