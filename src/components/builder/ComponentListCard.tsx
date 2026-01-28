import { Product } from '@/data/products';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';


interface Props {
  product: Product;
}

export const ComponentListCard = ({ product }: Props) => {
  return (
    <div className='w-full max-w-sm bg-gray-900 border border-[#0A84FF] hover:-translate-y-0.5 duration-300 hover:shadow-2xl hover:shadow-gray-600 ease-in-out rounded-lg shadow-sm px-0 pb-5'>      

      <div className='pt-2 bg-white rounded-t-lg justify-center align-middle items-center flex'>
        <Image
          className='object-contain rounded-t-lg self-center place-self-center w-auto xl:w-full h-[100] xl:h-[250]'
          src={product.image[0]}
          alt='product image'
          width={500}
          height={500}
        />     

      </div>

      <div className='flex flex-col px-5 mt-4 items-center min-h-[60]'>
        <a href='#'>
          <h5 className='text-sm xl:text-md font-semibold tracking-tight text-[#F1F1F1]'>
            {product.name}
          </h5>
        </a>
      </div>

      <div className='flex flex-col justify-end items-center h-fit px-6 md:px-3 xl:px-6 xl:mt-4 gap-3'>
        <span className='text-sm xl:text-md font-bold text-[#F1F1F1]'>
          $ {product.price.toFixed(2)}
        </span>
        <button          
          className='flex align-middle items-center justify-center gap-3 text-[#F1F1F1] bg-blue-700 w-fit hover:bg-blue-800 focus:ring-4 hover:cursor-pointer
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-sm xl:text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          {
            <FaPlus className='text-[15px] md:text-[20px] xl:text-[26px]' />
          }{' '}
          Select
        </button>
      </div>
    </div>
  );
};
