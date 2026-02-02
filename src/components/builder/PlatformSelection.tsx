import { useAppDispatch } from '@/store/hooks';
import { onPlatformSelect } from '@/store/builder/builderSlice';
import Image from 'next/image';

export const PlatformSelection = () => {
  const dispatch = useAppDispatch();

  const handlePlatformSelect = (platform: 'AMD' | 'Intel') => {
    dispatch(onPlatformSelect(platform));
  };

  return (
    <div className='flex flex-col justify-center items-center pt-25 pb-40 w-full'>
      <h1 className='titles text-2xl md:text-4xl'>Choose your architecture</h1>
      <div className='flex flex-col md:flex-row justify-center mt-15 gap-20'>
        <button
          className='border h-[100px] md:h-[150px] px-5 md:px-12 justify-center items-center flex titles text-5xl xl:hover:border-[#0A84FF] hover:bg-gray-900 transform duration-400 cursor-pointer hover:shadow-lg/60 shadow-gray-700'
          onClick={() => handlePlatformSelect('AMD')}
        >
          <Image src={'/img/amd.png'} width={100} height={100} alt='amd' />
        </button>
        <button
          className='border h-[100px] md:h-[150px] px-5 md:px-12 justify-center items-center flex titles text-5xl xl:hover:border-[#0A84FF] hover:bg-gray-900 transform duration-400 cursor-pointer hover:shadow-lg/60 shadow-gray-700'
          onClick={() => handlePlatformSelect('Intel')}
        >
          <Image src={'/img/Intel.png'} width={100} height={100} alt='intel' />
        </button>
      </div>
    </div>
  );
};
