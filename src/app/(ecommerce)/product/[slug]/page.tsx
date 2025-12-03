import ProductDetails from '@/components/product/ProductDetails';
import ProductInformation from '@/components/product/ProductInformation';
import { Product, products } from '@/data/products';

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProductDetailPage( { params }: Props) {  

  const { slug } = await params
  const prod : Product | undefined = products.find( e => e.slug === slug)  

  return (
    <div className='flex min-h-dvh justify-center items-center align-middle'>
      <div className='flex flex-col border border-[#637a91] min-h-200  p-12 min-w-350 rounded-2xl'>

        <ProductDetails prod={prod}/>
        
        <hr className='text-[#637a9181] w-full my-12'></hr>

        <ProductInformation />

      </div>
    </div>
  );
}