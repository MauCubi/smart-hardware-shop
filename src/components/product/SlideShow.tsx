'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperObject } from 'swiper';

import { Autoplay, FreeMode, Thumbs, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import { useState } from 'react';
import Image from 'next/image';

interface Props {
    images: string[];
}

const SlideShow = ( { images }: Props) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className='block w-full xl:w-[500]  xl:h-[450] select-none'>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, Autoplay]}
        className='mySwiper2'
      >
        {
          images.map( image => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt='alt1'
                fill
                className='rounded-lg'
              />
            </SwiperSlide> 
          ))
        }
      </Swiper>



      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs, Navigation]}
        className='mySwiper'
      >
        {
          images.map( image => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt='alt1'
                width={100}
                height={100}
                className='rounded-lg object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default SlideShow;
