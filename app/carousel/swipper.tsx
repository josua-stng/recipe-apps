'use client';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
export default function SwipperFood({ slides, title, productId }: any) {
  return (
    <div className="mx-auto max-w-4xl p-5">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold text-lg font-mono">Popular Products</h1>
        <ul className="flex [&>*]:mx-1 [&>*]:px-2 [&>*]:border-2 [&>*]:border-yellow-500 [&>*]:rounded-lg">
          <li className="cursor-pointer hover:bg-yellow-300">Burger</li>
          <li className="cursor-pointer hover:bg-yellow-300">Pizza</li>
          <li className="cursor-pointer hover:bg-yellow-300">Sandwich</li>
          <li className="cursor-pointer hover:bg-yellow-300">Ice cream</li>
        </ul>
      </div>

      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((slide: any, index: number) => {
            return (
              <SwiperSlide
                key={slide}
                className="border-2 border-gray-200 p-5 rounded-md cursor-pointer hover:shadow-xl"
              >
                <Link href={`product-detail/${productId[index]}`} key={index}>
                  <Image
                    width={0}
                    height={0}
                    alt="image-slides"
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: '120px',
                      objectFit: 'cover',
                    }}
                    src={slide}
                  />
                  <p className="mt-2 truncate text-center font-bold font-sans">
                    {title[index]}
                  </p>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
