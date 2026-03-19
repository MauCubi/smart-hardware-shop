import { ComponentListCard } from './ComponentListCard';
import { useAppSelector } from '@/store/hooks';
import { getPaginatedProducts } from '@/actions/product/get-paginated-products';
import { useEffect } from 'react';
import { ComponentListGrid } from './ComponentListGrid';



export const ComponentList =  () => { 
  

  const { componentSelect } = useAppSelector( state => state.builder)

  return (
    <div>
      <h1 className='md:hidden titles text-2xl place-self-center'>{ componentSelect }</h1>
      <ComponentListGrid component={componentSelect}/>
    </div>
  );
};
