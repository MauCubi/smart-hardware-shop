import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { FaArrowDown, FaCartShopping, FaCheck, FaMapLocation, FaShield, FaTruck, FaX } from 'react-icons/fa6';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import Link from 'next/link';
import SlideShow from './SlideShow';
import { Product } from '@/data/products';


interface Props {
  prod: Product | undefined;
}


const ProductDetails = ({ prod }: Props) => {
  return (
    <div className='flex flex-col xl:flex-row'>
      <div className='w-full xl:w-[50%]'>
        <SlideShow />
      </div>

      <div className='xl:h-50 w-full xl:w-[50%]'>
        <div className='text-gray-300 flex gap-1 mb-4 text-xs xl:text-base wrap-normal'>
          <Link
            className='hover:text-[#637a91] transform duration-300'
            href='#'
          >
            Category
          </Link>
          <span className='text-gray-500'>&gt;</span>
          <Link
            className='hover:text-[#637a91] transform duration-300'
            href='#'
          >
            SubCategory
          </Link>
          <span className='text-gray-500'>&gt;</span>
          <span className='flex wrap-'>{prod?.name}</span>
        </div>

        <h1 className='titles mt-6 xl:mt-0 text-3xl xl:text-4xl'>{prod?.name}</h1>

        {prod?.stock === 0 ? (
          <div className='flex flex-row items-center mt-3 bg-red-600 rounded-md px-2 w-fit gap-1'>
            <FaX color='#F1F1F1' />
            <p className='titles'>Product out of Stock</p>
          </div>
        ) : (prod?.stock as number) > 5 ? (
          <div className='flex flex-row items-center mt-3 bg-green-600 rounded-md px-2 w-fit gap-1'>
            <FaCheck color='#F1F1F1' />
            <p className='titles'>Product in Stock</p>
          </div>
        ) : (
          <div className='flex flex-row items-center mt-3 bg-orange-600 rounded-md px-2 w-fit gap-1'>
            <FaArrowDown color='#F1F1F1' />
            <p className='titles'>Low on Stock</p>
          </div>
        )}

        <div className='flex my-8 justify-center'>
          <p className='titles text-3xl xl:text-5xl'>${prod?.price.toFixed(2)}</p>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-row border-b border-b-[#637a9181] titles items-center gap-2 p-3'>
            <FaTruck size={30} color='#637a91' />{' '}
            <p>Delivery to all the country</p>
          </div>
          <div className='flex flex-row border-b border-b-[#637a9181] titles items-center gap-2 p-3'>
            <FaMapLocation size={30} color='#637a91' />{' '}
            <p>Free Pickup at our store</p>
          </div>
          <div className='flex flex-row border-b border-b-[#637a9181] titles items-center gap-2 p-3'>
            <FaShield size={30} color='#637a91' /> <p>150 days warranty</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center xl:items-start xl:flex-row xl:justify-between'>
          <div className='flex flex-row items-center titles p-3 mt-4'>
            <p className='font-bold mr-6'>Quantity:</p>

            <button className='cursor-pointer'>
              <FaMinusCircle size={20} />
            </button>

            <div className='w-20 flex justify-center'>
              <p> 10 Units </p>
            </div>

            <button className='cursor-pointer'>
              <FaPlusCircle size={20} />
            </button>
          </div>

          <div className='flex flex-col xl:flex-row items-center mt-4 gap-3 w-full xl:w-auto'>
            <button className='cursor-pointer flex flex-row w-full xl:w-auto justify-center xl:justify-start items-center px-4 py-4 xl:py-2 gap-2 bg-[#0A84FF] rounded-lg text-[#F1F1F1] hover:bg-[#0a84ffad]'>
              <RiMoneyDollarCircleLine size={30} />{' '}
              <p className='font-bold'> Buy Now</p>
            </button>

            <button className='
              cursor-pointer flex flex-row w-full xl:w-auto items-center justify-center xl:justify-start px-4 py-4 xl:py-2 gap-2 border border-[#0A84FF] 
              rounded-lg text-[#0A84FF] hover:border-[#0a84ffad] hover:text-[#0a84ffad]'>
              <FaCartShopping size={30} />{' '}
              <p className='font-bold'> Add to Cart</p>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
