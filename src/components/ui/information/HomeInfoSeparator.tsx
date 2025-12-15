import React from 'react';
import { BiShield } from 'react-icons/bi';
import { CiDeliveryTruck, CiLocationOn } from 'react-icons/ci';

export const HomeInfoSeparator = () => {
  return (
    <div className='flex flex-col xl:flex-row justify-center mx-auto my-20'>

      <div className='flex flex-row my-3 px-3 gap-2 items-center'>
        <CiDeliveryTruck className='text-[50px] xl:text-[80px]' />
        <div className='flex flex-col'>
          <h1 className='text-lg xl:text-xl font-bold titles'>
            Delivery to all the country
          </h1>
          <p className='titles'>You can receive the product at your house</p>
        </div>
      </div>

      <div className='flex flex-row my-3 xl:border-l-2 px-3 gap-2 items-center'>
        <BiShield className='text-[50px] xl:text-[80px]' />
        <div className='flex flex-col'>
          <h1 className='text-lg xl:text-xl font-bold titles'>Warranty</h1>
          <p className='titles'>All our products have up to 24 months warranty</p>
        </div>
      </div>

      <div className='flex flex-row my-3 px-3 gap-2 xl:border-l-2 items-center'>
        <CiLocationOn className='text-[50px] xl:text-[80px]' />
        <div className='flex flex-col'>
          <h1 className='text-lg xl:text-xl font-bold titles'>Free pickup</h1>
          <p className='titles'>
            You can pickup your products from our local at XXXXX
          </p>
        </div>
      </div>

    </div>
  );
};
