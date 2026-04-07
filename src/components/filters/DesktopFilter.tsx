'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface Filters {
  id: string,
  name: string,
  count: number
}
interface Props {
  brandFilters: Filters[]
  subCategoryFilter: Filters[]
}



export const DesktopFilter = ({ brandFilters, subCategoryFilter }: Props) => {


    
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  const router = useRouter()

  
  
  const changeFilter = (filter: string, value: string) => {
    
    params.set(filter, value)

    console.log(params.toString())

    router.push(pathname + '?' + params)
    
  }

  const removeFilter = (filter: string) => {

    params.delete(filter)

    router.push(pathname + '?' + params)
  }



  return (
    <div className='h-full w-60 lg:w-100'>
      <h1 className='titles text-3xl p-8 font-bold'>Filters</h1>

      <div className='flex flex-col px-8 mb-4'>
        <div className='flex mb-4 gap-2'>                   
          {
            Array.from(searchParams.entries()).map( ([filter, value]) => (
              filter !== 'category' && 
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
  );
};
