import { getProductBySlug } from '@/actions/product/get-product-by-slug';
import ProductDetails from '@/components/product/ProductDetails';
import ProductInformation from '@/components/product/ProductInformation';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import { notFound } from 'next/navigation';


interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProductDetailPage( { params }: Props) {  
  
  const { slug } = await params

  const { product, groupedAttributes } = await getProductBySlug({slug})

  // const prod : Product | undefined = products.find( e => e.slug === slug)  

  if (!product) {
    notFound()
  }

  return (
    <div className='flex xl:min-h-dvh justify-center items-center align-middle'>
      <div className='flex flex-col border border-[#637a91] xl:min-h-200 xl:mt-0 mt-20 p-12 xl:w-350 w-full rounded-2xl'>

        <ProductDetails prod={product}/>
        
        <hr className='text-[#637a9181] w-full my-12'></hr>

        {
          groupedAttributes && <ProductInformation attributes={groupedAttributes}/>
        }

      </div>
    </div>
  );
}