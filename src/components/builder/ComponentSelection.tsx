import { useAppDispatch } from '@/store/hooks';

import { onPlatformSelect } from '@/store/ui/builderSlice';

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
        
      </div>
    </div>
  );
};
