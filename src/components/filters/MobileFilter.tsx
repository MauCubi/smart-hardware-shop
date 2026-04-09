'use client'
import { useFilter } from '@/hooks/useFilter';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { IoFilterSharp } from 'react-icons/io5';


interface Filters {
  id: string,
  name: string,
  count: number
}
interface Props {
  brandFilters: Filters[]
  subCategoryFilter: Filters[]
}

export const MobileFilter = ({ brandFilters, subCategoryFilter }: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { changeFilter, removeFilter } = useFilter()    

  const searchParams = useSearchParams()

  const arrayCheck = ['category', 'sort']
 
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
              <div className='flex mb-4 gap-2'>                   
                {
                  Array.from(searchParams.entries()).map( ([filter, value]) => (
                    // filter !== 'category' &&
                    !arrayCheck.includes(filter) && 
                    <div key={filter} className='flex flex-row w-fit bg-white py-1 px-2 rounded-lg gap-2'>
                      <p>{ value }</p>
                      <button className='font-bold cursor-pointer' onClick={ () => removeFilter(filter) } >x</button>
                    </div>
                  ) )
                }
              </div>

              <h1 className='titles text-2xl font-bold text-[#7eb7ef]'>
                Sub Categories
              </h1>
              {
                subCategoryFilter.map( subCategory => 
                <div key={subCategory.id} className='flex justify-between'>
                  <button className='cursor-pointer ' onClick={ () => changeFilter('subcategory', subCategory.name) }>
                    <p className='titles hover:text-blue-200 transform duration-300'>{subCategory.name}</p>
                  </button>
                  <span className='titles'>({subCategory.count})</span>
                </div>
                )
              } 
            </div>

            <div className='flex flex-col px-8'>
              <h1 className='titles text-2xl font-bold text-[#7eb7ef]'>
                Brand
              </h1>
              {
                brandFilters.map( brand => 
                <div key={brand.id} className='flex justify-between'>
                  <button className='cursor-pointer ' onClick={ () => changeFilter('brand', brand.name) }>
                    <p className='titles hover:text-blue-200 transform duration-300'>{brand.name}</p>
                  </button>
                  <span className='titles'>({brand.count})</span>
                </div>
                )
              } 
            </div>
          </div>
        :
        ''
      }
    </>
  );
};
