'use client'
import { useState } from 'react';
import { IoFilterSharp } from 'react-icons/io5';

export const MobileFilter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
 
  return (
    <>
      <div className='flex justify-center mt-4 items-center w-full'>
        <button className='flex gap-1 border border-white rounded-lg py-2 px-3' onClick={ () => setIsOpen(!isOpen) }>
          <IoFilterSharp className='titles text-2xl' />
          <h1 className='titles text-lg'>Filters</h1>
        </button>
      </div>

      {
        isOpen 
        ?
          <div className='w-full h-fit pb-8 bg-[#181818] absolute'>
            <h1 className='titles text-3xl p-8'>Filters</h1>

            <div className='flex flex-col px-8 mb-4'>
              <h1 className='titles text-2xl font-bold text-[#7eb7ef]'>
                Filter Title One
              </h1>
              <div className='flex justify-between'>
                <p className='titles'>Filter one</p>
                <span className='titles'>(2)</span>
              </div>
              <div className='flex justify-between'>
                <p className='titles'>Filter two</p>
                <span className='titles'>(4)</span>
              </div>
              <div className='flex justify-between'>
                <p className='titles'>Filter one</p>
                <span className='titles'>(1)</span>
              </div>
            </div>

            <div className='flex flex-col px-8'>
              <h1 className='titles text-2xl font-bold text-[#7eb7ef]'>
                Filter Title Two
              </h1>
              <div className='flex justify-between'>
                <p className='titles'>Filter one</p>
                <span className='titles'>(2)</span>
              </div>
              <div className='flex justify-between'>
                <p className='titles'>Filter two</p>
                <span className='titles'>(4)</span>
              </div>
              <div className='flex justify-between'>
                <p className='titles'>Filter one</p>
                <span className='titles'>(1)</span>
              </div>
            </div>
          </div>
        :
        ''
      }
    </>
  );
};
