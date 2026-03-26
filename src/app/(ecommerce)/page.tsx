import { getPaginatedDiscounts } from '@/actions/product/get-paginated-discounts';
import { getPaginatedProducts } from '@/actions/product/get-paginated-products';
import { ProductsGrid } from '@/components/products/ProductsGrid';
import { Carousel } from '@/components/ui/carousel/Carousel';
import { HomeInfoSeparator } from '@/components/ui/information/HomeInfoSeparator';
import { Pagination } from '@/components/ui/pagination/Pagination';
// import { products } from '@/data/products';

interface Props {
  searchParams: Promise<{ page?: string, discount?: string }>  
}

export default async function Home({ searchParams }: Props) {

  // const PRODUCTS_PER_PAGE = 8
  const params = await searchParams

  const page = params.page ? parseInt(params.page) : 1
  // const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE)  
  // const paginatedProducts = products.slice((page - 1) * PRODUCTS_PER_PAGE, PRODUCTS_PER_PAGE * page)

  
  const discountPage = params.discount ? parseInt(params.discount) : 1
  // const totalDiscounts = Math.ceil(products.length / PRODUCTS_PER_PAGE) 
  // const paginatedDiscounts = products.slice((discountPage - 1) * PRODUCTS_PER_PAGE, PRODUCTS_PER_PAGE * discountPage)

  const { products, maxPages }  = await getPaginatedProducts({page})
  const { discounts, discountPages }  = await getPaginatedDiscounts({discountPage})
  

  return (
    <>
      {
        products
        ?
      <div className="font-sans xl:px-4 text-[#7eb7ef]">
        <Carousel />    

        <div className='flex flex-col w-full mt-15'>
          <h1 className='text-2xl md:text-3xl antialiased titles mx-auto'>Check our <span className='font-bold'>latest products</span></h1>
          <ProductsGrid products={products}/>
          <Pagination totalPages={ maxPages } prodList='normal'/>
        </div>

        <HomeInfoSeparator />

        <div className='flex flex-col w-full mt-15'>
          <h1 className='text-2xl md:text-3xl antialiased titles mx-auto'>Check our <span className='font-bold'>Discounts</span></h1>
          <ProductsGrid products={discounts}/>
          <Pagination totalPages={ discountPages } prodList='discount'/>
        </div>   
      </div>
      :''
      }
    </>
  );
}
