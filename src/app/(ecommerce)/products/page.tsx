import { getByCategory } from '@/actions/product/get-products-by-categories';
import { DesktopFilter } from '@/components/filters/DesktopFilter';
import { MobileFilter } from '@/components/filters/MobileFilter';
import { ProductsGrid } from '@/components/products/ProductsGrid';
import { Prisma } from '../../../../generated/prisma';
import { SortMenu } from '@/components/filters/SortMenu';

type SearchParams = Record<string, string | string[] | undefined>;

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function SearchPage({ searchParams }: Props) {
  const filters = await searchParams;  

  const { sort } = filters

  const category = Array.isArray(filters.category)
  ? filters.category[0]
  : filters.category;

  const subcategory = Array.isArray(filters.subcategory)
    ? filters.subcategory[0]
    : filters.subcategory;

  const brand = Array.isArray(filters.brand)
    ? filters.brand[0]
    : filters.brand;

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
  
  const {products, brandFilter, subCategoryFilter} = await getByCategory(where, category as string, sort as string)   

  return (
    <div className='min-h-200 py-20 md:pt-14 xl:py-0'>

      <div className='flex flex-row'>

        <div className='hidden md:flex bg-[#181818]'>
          <DesktopFilter brandFilters={brandFilter} subCategoryFilter={subCategoryFilter}/>          
        </div>

        <div className='flex flex-col w-full md:pt-8 xl:pt-6'>
          <h1 className='text-3xl titles px-8 mb-2'>{ filters['subcategory'] ? JSON.stringify(filters['subcategory'], null, 2).replace(/"/g, "") : JSON.stringify(filters['category'], null, 2).replace(/"/g, "") }</h1>

          <SortMenu />


          <div className='md:hidden'>
            <MobileFilter brandFilters={brandFilter} subCategoryFilter={subCategoryFilter}/>
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
