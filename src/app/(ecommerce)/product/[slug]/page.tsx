import SlideShow from '@/components/product/SlideShow';
import { Product, products } from '@/data/products';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProductDetailPage( { params }: Props) {  

  const { slug } = await params

  const prod : Product | undefined = products.find( e => e.slug === slug)  

  return (
    <div className='flex min-h-dvh justify-center items-center align-middle'>
      <div className='flex flex-row border border-[#637a91] min-h-200 min-w-350 p-12 rounded-2xl'>
        <div className='w-[50%]'>
          <SlideShow />
        </div>

        <div className='h-50 w-[50%]'>

          <div className='text-gray-300 flex gap-1 mb-4'>
            <Link className='hover:text-[#637a91] transform duration-300' href='#'>Categoria</Link>
            <span className='text-gray-500'>&gt;</span>
            <Link className='hover:text-[#637a91] transform duration-300' href='#'>SubCategoria</Link>
            <span className='text-gray-500'>&gt;</span>
            <span>{ prod?.name }</span>
          </div>

          <h1 className='titles text-4xl'>{ prod?.name }</h1>
        </div>

      </div>
    </div>
  );
}