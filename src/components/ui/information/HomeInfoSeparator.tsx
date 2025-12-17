import React from 'react';
import { BiShield } from 'react-icons/bi';
import { CiDeliveryTruck, CiLocationOn } from 'react-icons/ci';

export const HomeInfoSeparator = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center mx-auto my-20'>

      <div className='flex flex-row my-3 px-3 gap-2 items-center md:flex-col xl:flex-row'>
        <CiDeliveryTruck className='text-[50px] md:text-[65px] xl:text-[80px]' />
        <div className='flex flex-col'>
          <h1 className='text-lg xl:text-xl md:text-base font-bold titles'>
            Delivery to all the country
          </h1>
          <p className='titles'>You can receive the product at your house</p>
        </div>
      </div>

      <div className='flex flex-row my-3 md:border-l px-3 gap-2 items-center md:flex-col xl:flex-row'>
        <BiShield className='text-[50px] md:text-[65px] xl:text-[80px]' />
        <div className='flex flex-col'>
          <h1 className='text-lg xl:text-xl md:text-base font-bold titles'>Warranty</h1>
          <p className='titles'>All our products have up to 24 months warranty</p>
        </div>
      </div>

      <div className='flex flex-row my-3 px-3 gap-2 md:border-l items-center md:flex-col xl:flex-row'>
        <CiLocationOn className='text-[50px] md:text-[65px] xl:text-[80px]' />
        <div className='flex flex-col'>
          <h1 className='text-lg xl:text-xl md:text-base font-bold titles'>Free pickup</h1>
          <p className='titles'>
            You can pickup your products from our local at XXXXX
          </p>
        </div>
      </div>

    </div>
  );
};
