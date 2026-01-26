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

const SlideShow = () => {
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
        <SwiperSlide>
          <Image
            src='/img/products/mouse.png'
            alt='alt1'
            fill
            className='rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/10242.png'
            alt='alt2'
            fill
            className='rounded-lg object-fill'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/10243.png'
            alt='alt3'
            fill
            className='rounded-lg object-fill'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/10244.png'
            alt='alt4'
            fill
            className='rounded-lg object-fill'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/10245.png'
            alt='alt5'
            fill
            className='rounded-lg object-fill'
          />
        </SwiperSlide>
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
        <SwiperSlide>
          <Image
            src='/img/products/mousev2.png'
            alt='alt1'
            width={100}
            height={100}
            className='rounded-lg object-fill'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/10242.png'
            alt='alt2'
            width={100}
            height={100}
            className='rounded-lg object-fill'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/10243.png'
            alt='alt3'
            width={100}
            height={100}
            className='rounded-lg object-fill'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/10244.png'
            alt='alt4'
            width={100}
            height={100}
            className='rounded-lg object-fill'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/10245.png'
            alt='alt5'
            width={100}
            height={100}
            className='rounded-lg object-fill'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideShow;
