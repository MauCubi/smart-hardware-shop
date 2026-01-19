import { useAppDispatch } from '@/store/hooks';

import { onPlatformSelect } from '@/store/ui/builderSlice';
import { BsDeviceSsd, BsMotherboard } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa6';
import { PiCpuDuotone, PiMemoryDuotone } from 'react-icons/pi';

export const ComponentSelection = () => {
  const dispatch = useAppDispatch();

  const resetPlatform = () => {
    dispatch(onPlatformSelect(null));
  };

  return (
    <div className='flex w-full'>
      <div className='flex flex-col w-full justify-center'>
        <button
          className='titles text-2xl p-4'
          onClick={() => resetPlatform()}
        >
          &larr; <span className='titles text-lg'>back</span>
        </button>        
        <h1 className='titles self-center'>
          Choose your PC components
        </h1>

        <div className='flex flex-col justify-center px-4 my-7'>

          <div className='flex p-4 flex-row bg-[#181818] w-full gap-4'>
            <BsMotherboard className='text-[27px] text-gray-600 self-center' />
            <div className='flex flex-col'>
              <div className='flex gap-1'>              
                <h1 className='titles text-md self-center'>Motherboard</h1>
              </div>
              <div className='flex'>
                <ul>
                  <li className='titles text-sm'>ASUS Super mega overpower op as shit</li>
                </ul>
              </div>
            </div>
            <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto'/>
          </div>

          <div className='flex p-4 flex-row bg-[#181818] w-full gap-4'>
            <PiCpuDuotone className='text-[27px] text-gray-600 self-center' />
            <div className='flex flex-col'>
              <div className='flex gap-1'>              
                <h1 className='titles text-md self-center'>Processor</h1>
              </div>
              <div className='flex'>
                <ul>
                  <li className='titles text-sm'>AMD Super mega overpower op as shit</li>
                </ul>
              </div>
            </div>
            <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto'/>
          </div>

          <div className='flex p-4 flex-row bg-[#181818] w-full gap-4'>
            <PiMemoryDuotone className='text-[27px] text-gray-600 self-center' />
            <div className='flex flex-col'>
              <div className='flex gap-1'>              
                <h1 className='titles text-md self-center'>Memory</h1>
              </div>
              <div className='flex'>
                <ul>
                  <li className='titles text-sm'>Kingston ram ddr3 super fast</li>
                  <li className='titles text-sm'>Kingston ram ddr3 super fast</li>
                  <li className='titles text-sm'>Kingston ram ddr3 super fast</li>
                  <li className='titles text-sm'>Kingston ram ddr3 super fast</li>
                </ul>
              </div>
            </div>
            <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto'/>
          </div>

          <div className='flex p-4 flex-row bg-[#181818] w-full gap-4'>
            <BsDeviceSsd className='text-[27px] text-gray-600 self-center' />
            <div className='flex flex-col'>
              <div className='flex gap-1'>              
                <h1 className='titles text-gray-400/80 text-md self-center'>Storage</h1>
              </div>
              <div className='flex'>
                <ul>
                </ul>
              </div>
            </div>
            <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto'/>
          </div>

        </div>
        
      </div>
    </div>
  );
};
