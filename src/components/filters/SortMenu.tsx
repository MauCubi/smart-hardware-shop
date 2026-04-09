'use client'

import { useFilter } from '@/hooks/useFilter'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'



export const SortMenu = () => {  

  const searchParams = useSearchParams()
  const sort = searchParams.get('sort')
  
  const { changeSort } = useFilter()   


  return (
        <div className='flex flex-col justify-center px-8'>
          <label htmlFor="sort" className="block mb-2.5 text-sm font-bold text-heading titles">Order By</label>
          <select
            id='sort'
            className='block w-full pl-3 py-2.5  border border-default-medium border-[#0A84FF] rounded titles text-heading text-sm rounded-base shadow-xs'      
            onChange={ (e) => changeSort(e) } 
            value={sort as string || 'new' }
          >          
            <option className='text-gray-900 rounded' value='new'>Newest</option>
            <option className='text-gray-900 rounded' value='highprice'>Highest Price</option>
            <option className='text-gray-900 rounded' value='lowprice'>Lowest Price</option>          
          </select>
        </div>
  )
}
