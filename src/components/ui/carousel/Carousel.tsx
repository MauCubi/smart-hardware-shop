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
      <div className='relative md:rounded-4xl w-260 h-65 mt-11 md:h-130 flex md:items-center overflow-hidden'>

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
              <SwiperSlide key={i}>
                <Image src={`/img/${image}.jpg`} alt={`carousel${i}`} className='md:rounded-4xl ' fill/>
              </SwiperSlide>
            )
          }
        
        </Swiper>

      </div>
    </div>
  );
};
