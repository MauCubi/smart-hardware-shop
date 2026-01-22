import { useAppDispatch, useAppSelector } from '@/store/hooks';

import {
  onComponentSelectToggle,
  onPlatformSelect,
} from '@/store/ui/builderSlice';
import { ComponentSections } from './ComponentSections';
import { ComponentList } from './ComponentList';
import { ComponentSelectionDesktop } from './ComponentSelectionDesktop';
import { ComponentSelectionMobile } from './ComponentSelectionMobile';

export const ComponentSelection = () => {
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
      <div className='hidden xl:flex w-full'>
        <ComponentSelectionDesktop />
      </div>
      <div className='flex xl:hidden w-full'>
        <ComponentSelectionMobile />
      </div>
    </div>
  );
};
