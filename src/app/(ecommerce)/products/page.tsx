import { DesktopFilter } from '@/components/filters/DesktopFilter';
import { MobileFilter } from '@/components/filters/MobileFilter';
import { ProductsGrid } from '@/components/products/ProductsGrid';
import { IoFilterSharp } from 'react-icons/io5';

type SearchParams = Record<string, string | string[] | undefined>;

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function SearchPage({ searchParams }: Props) {
  const filters = await searchParams;

  

  return (
    <div className='min-h-200 py-20 md:pt-14 xl:py-0'>

      <div className='flex flex-row'>

        <div className='hidden md:flex bg-[#181818]'>
          <DesktopFilter />          
        </div>

        <div className='flex flex-col justify-center w-full md:pt-8 xl:pt-6'>
          <h1 className='text-3xl titles px-8 mb-2'>{ filters['subcategory'] ? JSON.stringify(filters['subcategory'], null, 2).replace(/"/g, "") : JSON.stringify(filters['category'], null, 2).replace(/"/g, "") }</h1>

          <div className='flex flex-col justify-center px-8'>
            <label htmlFor="sort" className="block mb-2.5 text-sm font-bold text-heading titles">Order By</label>
            <select
              id='sort'
              className='block w-full px-3 py-2.5  border border-default-medium border-[#0A84FF] rounded titles text-heading text-sm rounded-base shadow-xs'          
            >          
              <option className='text-gray-900 rounded' value='US'>All</option>
              <option className='text-gray-900 rounded' value='CA'>Highest Price</option>
              <option className='text-gray-900 rounded' value='FR'>Lowest Price</option>          
            </select>
          </div>


          <div className='md:hidden'>
            <MobileFilter />
          </div>

          <ProductsGrid />
        </div>

      </div>


      

      



    </div>
  );
}
