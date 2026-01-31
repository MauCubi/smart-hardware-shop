import ProductDetails from '@/components/product/ProductDetails';
import ProductInformation from '@/components/product/ProductInformation';
import { Product, products } from '@/data/products';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProductDetailPage( { params }: Props) {  

  const { slug } = await params
  const prod : Product | undefined = products.find( e => e.slug === slug)  

  if (!prod) {
    notFound()
  }

  return (
    <div className='flex xl:min-h-dvh justify-center items-center align-middle'>
      <div className='flex flex-col border border-[#637a91] xl:min-h-200 xl:mt-0 mt-20 p-12 xl:w-350 w-full rounded-2xl'>

        <ProductDetails prod={prod}/>
        
        <hr className='text-[#637a9181] w-full my-12'></hr>

        <ProductInformation />

      </div>
    </div>
  );
}