import { useAppDispatch } from '@/store/hooks';
import { onPlatformSelect } from '@/store/ui/builderSlice';

export const PlatformSelection = () => {
  
  const dispatch = useAppDispatch()
 
  const handlePlatformSelect = (platform: 'AMD' | 'Intel') => {
    dispatch(onPlatformSelect(platform))
  }

  return (
    <div className='flex flex-col justify-center items-center py-15 w-full'>
      <h1 className='titles text-2xl'>Choose your architecture</h1>
      <div className='flex flex-col justify-center mt-15 gap-20'>
        <button className='border p-10 titles text-5xl' onClick={ () => handlePlatformSelect('AMD') }>AMD</button>
        <button className='border p-10 titles text-5xl' onClick={ () => handlePlatformSelect('Intel') }>Intel</button>
      </div>
    </div>
  );
};
