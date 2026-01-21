import { useAppDispatch, useAppSelector } from '@/store/hooks';

import {
  onComponentSelectToggle,
  onPlatformSelect,
} from '@/store/ui/builderSlice';
import { ComponentSections } from './ComponentSections';
import { ComponentList } from './ComponentList';


export const ComponentSelectionDesktop = () => {
  const dispatch = useAppDispatch();

  const { componentSelect } = useAppSelector((state) => state.builder);

  const resetPlatform = () => {    
      dispatch(onPlatformSelect(null));    
      dispatch(onComponentSelectToggle(null))
  };
  

  return (
    <div className='flex w-full'>
      <div className='flex flex-col w-full justify-center'>
        <div className='hidden md:flex flex-row px-35 gap-4'>
          <button
            className='titles text-3xl p-4'
            onClick={() => resetPlatform()}
          >
            &larr; <span className='titles text-2xl'>back</span>
          </button>
          <h1 className='titles text-2xl self-center'>Choose your { componentSelect ? <span className='font-bold text-gray-400'>{ componentSelect }</span> : 'PC Component' }</h1>
        </div>


        <div className='hidden md:flex flex-row justify-between px-35'>
          <ComponentSections />
          {
            componentSelect ? <ComponentList /> : ''
          }
        </div>
      </div>
    </div>
  );
};
