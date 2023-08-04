'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function SwipperFood() {
  return (
    <>
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
        className="mt-10"
      >
        <SwiperSlide>
          <Image
            width={600}
            height={300}
            className=" h-full object-cover mx-auto rounded-md"
            src={'https://i.ytimg.com/vi/mnCDSmooRxA/maxresdefault.jpg'}
            alt={''}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            width={600}
            height={300}
            className=" h-full object-cover mx-auto rounded-md"
            src={
              'https://graphicsfamily.com/wp-content/uploads/edd/2020/11/Tasty-Food-Web-Banner-Design-1180x664.jpg'
            }
            alt={''}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            width={600}
            height={300}
            className=" h-full object-cover mx-auto rounded-md"
            src={
              'https://graphicsfamily.com/wp-content/uploads/edd/2023/05/Website-Food-Banner-Design-scaled.jpg'
            }
            alt={''}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            width={600}
            height={300}
            className=" h-full object-cover mx-auto rounded-md"
            src={
              'https://graphicsfamily.com/wp-content/uploads/edd/2022/09/Food-Web-Banner-Design-1180x664.jpg'
            }
            alt={''}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
