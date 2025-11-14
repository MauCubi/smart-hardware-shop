import React from 'react';
import { BiShield } from 'react-icons/bi';
import { CiDeliveryTruck, CiLocationOn } from 'react-icons/ci';

export const HomeInfoSeparator = () => {
  return (
    <div className='flex justify-center mx-auto my-20'>
      <div className='flex flex-row my-3 px-3 gap-2 items-center'>
        <CiDeliveryTruck size={80} />
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold titles'>
            Delivery to all the country
          </h1>
          <p className='titles'>You can receive the product at your house</p>
        </div>
      </div>

      <div className='flex flex-row my-3 border-l-2 px-3 gap-2 items-center'>
        <BiShield size={80} />
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold titles'>Warranty</h1>
          <p className='titles'>All our products have up to 24 months warranty</p>
        </div>
      </div>

      <div className='flex flex-row my-3 px-3 gap-2 border-l-2 items-center'>
        <CiLocationOn size={80} />
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold titles'>Free pickup</h1>
          <p className='titles'>
            You can pickup your products from our local at XXXXX
          </p>
        </div>
      </div>

    </div>
  );
};
