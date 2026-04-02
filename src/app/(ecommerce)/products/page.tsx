import { getPaginatedProducts } from '@/actions/product/get-paginated-products';
import { getByCategory } from '@/actions/product/get-products-by-categories';
import { DesktopFilter } from '@/components/filters/DesktopFilter';
import { MobileFilter } from '@/components/filters/MobileFilter';
import { ProductsGrid } from '@/components/products/ProductsGrid';
import { products } from '@/data/products';
import { IoFilterSharp } from 'react-icons/io5';
import { Prisma } from '../../../../generated/prisma';

type SearchParams = Record<string, string | string[] | undefined>;

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function SearchPage({ searchParams }: Props) {
  const filters = await searchParams;  


  const category = Array.isArray(filters.category)
  ? filters.category[0]
  : filters.category;

  const subcategory = Array.isArray(filters.subcategory)
    ? filters.subcategory[0]
    : filters.subcategory;

  const brand = Array.isArray(filters.brand)
    ? filters.brand[0]
    : filters.brand;

  console.log(category, subcategory, brand)

  const andFilters: Prisma.ProductWhereInput[] = [];

  if (category) {
    andFilters.push({ subCategory: { category: { name: category } }});
  }

  if (subcategory) {
    andFilters.push({
      subCategory: { name: subcategory }
    });
  }

  if (brand) {
    andFilters.push({
      brands: { name: brand }
    });
  }

  const where: Prisma.ProductWhereInput = {
    AND: andFilters
  };
  
  // const value = (filters['category'] ? String(filters['category']): String(filters['subcategory']))
  // const field = filters['category'] ? 'category' : 'subCategory'
  
  const {products, brandFilter, subCategoryFilter} = await getByCategory(where, category as string)   

  console.log(products.length, brandFilter, subCategoryFilter)

  return (
    <div className='min-h-200 py-20 md:pt-14 xl:py-0'>

      <div className='flex flex-row'>

        <div className='hidden md:flex bg-[#181818]'>
          <DesktopFilter brandFilters={brandFilter} subCategoryFilter={subCategoryFilter}/>          
        </div>

        <div className='flex flex-col w-full md:pt-8 xl:pt-6'>
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

          {products.length > 0
          ?
          <ProductsGrid products={products} />
          :
          <div className='flex justify-center w-full'>
            <div className='flex justify-center align-middle items-center rounded-2xl w-[95%] xl:w-[50%] h-120 '>
              <div className='flex flex-col justify-center items-center gap-6'>
                <h1 className='titles text-2xl xl:text-4xl'>Not products found!</h1>
              </div>
            </div>
          </div> 
          }
        </div>

      </div>


      

      



    </div>
  );
}
