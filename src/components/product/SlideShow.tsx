'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from 'react';
import Image from 'next/image';

const SlideShow = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='w-[450]'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties
      } 
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image src="/img/1024.png" alt='alt1' width={450} height={400} className='rounded-lg object-fill' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/monitor1.png" alt='alt2' width={450} height={400} className='rounded-lg object-fill'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/carousel1.jpg" alt='alt3' width={450} height={400} className='rounded-lg object-fill'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/carousel2.jpg" alt='alt4' width={450} height={400} className='rounded-lg object-fill'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/carousel3.jpg" alt='alt5' width={450} height={400} className='rounded-lg object-fill'/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SlideShow