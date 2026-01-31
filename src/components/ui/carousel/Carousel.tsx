'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const Carousel = () => {
  const images: string[] = useMemo(
    () => ['carousel1', 'carousel2', 'carousel3'],
    []
  );

  return (
    <div className='flex justify-center'> 
      <div className='relative xl:rounded-4xl w-260 h-65 md:h-100 mt-11 xl:h-130 flex xl:items-center overflow-hidden'>

        <Swiper
          rewind
          navigation
          pagination={{ clickable: true }} 
          spaceBetween={10}
          autoplay={ { delay: 3000 } }
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            360: {
              
            }
          }}
          style={{ '--swiper-pagination-bullet-size': '12px', height: '100%'  } as React.CSSProperties
        }
        >
          {
            images.map( (image, i) => 
              <SwiperSlide key={i} className='swiper-slide-3'>
                <Image src={`/img/${image}.jpg`} alt={`carousel${i}`} className='xl:rounded-4xl ' fill sizes='(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw'/>
              </SwiperSlide>
            )
          }
        
        </Swiper>

      </div>
    </div>
  );
};
