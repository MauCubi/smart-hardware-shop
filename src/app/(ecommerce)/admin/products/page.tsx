import { getPaginatedTableProducts } from '@/actions/product/get-paginated-table-products';
import { ProductsTable } from '@/components/products/ProductsTable';
import { GeneralPagination } from '@/components/ui/pagination/GeneralPagination';


interface Props {
  searchParams: Promise<{ page?: string; discount?: string }>;
}

export default async function AdminProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  
    const page = params.page ? parseInt(params.page) : 1;
  
    const { products, maxPages } = await getPaginatedTableProducts({ page: page, take: 5 });
  
    return (
      <div>
        <div className='flex flex-col justify-center align-middle items-center my-15 xl:my-20 xl:px-25'>
          <div className='flex justify-between w-full px-2 xl:px-0'>
            <h1 className='titles text-3xl p-2 font-roboto'>
              Products List
            </h1>
            <button className='px-4 rounded bg-blue-500 titles font-roboto hover:bg-blue-700 cursor-pointer'>
              Add Product
            </button>
          </div>
          <ProductsTable products={products} title='Poducts List' />
          <GeneralPagination totalPages={maxPages} />
        </div>
  
      </div>
    );
}