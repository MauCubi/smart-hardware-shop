import { useAppDispatch, useAppSelector } from '@/store/hooks';

import {
  onComponentSelectToggle,
  onPlatformSelect,
} from '@/store/builder/builderSlice';
import { ComponentSections } from './ComponentSections';
import { ComponentList } from './ComponentList';

export const ComponentSelectionMobile = () => {
  const dispatch = useAppDispatch();

  const { componentSelect } = useAppSelector((state) => state.builder);

  const resetPlatform = () => {
    if (componentSelect) {
      dispatch(onComponentSelectToggle(null));
    } else {
      dispatch(onPlatformSelect(null));
    }
  };

  return (
    <div className='flex w-full'>
      <div className='flex flex-col w-full justify-center'>
        <div className='flex flex-col justify-center'>
          <button
            className='titles text-2xl p-4'
            onClick={() => resetPlatform()}
          >
            &larr; <span className='titles text-lg'>back</span>
          </button>
          <h1 className='titles self-center'>Choose your PC components</h1>
        </div>

        <div className='flex flex-col justify-center px-4 my-7'>
          {componentSelect ? <ComponentList /> : <ComponentSections />}
        </div>
      </div>
    </div>
  );
};
