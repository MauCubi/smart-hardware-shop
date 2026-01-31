import { Product } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
// import { IoCartOutline } from 'react-icons/io5';

interface Props {
  product: Product;
}

export const ProductsGridCard = ({ product }: Props) => {
  return (
    <div className='w-full max-w-sm bg-gray-900 border border-[#0A84FF] hover:-translate-y-0.5 duration-300 hover:shadow-2xl hover:shadow-gray-600 ease-in-out rounded-lg shadow-sm px-0 pb-5'>
      <Link href={`/product/${product.slug}`}>
    <div className='pt-2 bg-white rounded-t-lg justify-center align-middle items-center flex'>
      
        <Image
          className='object-contain rounded-t-lg self-center place-self-center w-auto px-3 xl:w-full h-[180] xl:h-[250]'
          src={product.image[0]}
          alt='product image'
          width={500}
          height={500}   
        />
      
    </div>

      <div className='flex flex-col px-5 mt-4 items-center h-[60]'>
        
          <h5 className='text-md xl:text-lg font-semibold tracking-tight text-[#F1F1F1]'>
            {product.name}
          </h5>
        
      </div>

      <div className='flex flex-col justify-end items-center h-fit px-6 md:px-3 xl:px-6 mt-6 xl:mt-15 gap-3'>
        <span className='text-2xl xl:text-3xl font-bold text-[#F1F1F1]'>
          $ {product.price.toFixed(2)}
        </span>
        {/* <Link
          href='#'
          className='flex align-middle items-center justify-center gap-3 text-[#F1F1F1] bg-blue-700 w-full hover:bg-blue-800 focus:ring-4
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg md:text-sm xl:text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          { <IoCartOutline className='text-[26px] md:text-[20px] xl:text-[26px]'/> } Add to cart
        </Link> */}
      </div>
      </Link>
    </div>
  );
};
