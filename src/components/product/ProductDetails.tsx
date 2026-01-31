'use client'
import { FaArrowDown, FaCartShopping, FaCheck, FaMapLocation, FaShield, FaTruck, FaX } from 'react-icons/fa6';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import Link from 'next/link';
import SlideShow from './SlideShow';
import { CartProducts, Product } from '@/data/products';
import ProductQuantity from './ProductQuantity';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { onAddProductToCart, onClearError } from '@/store/cart/cartSlice';
import toast from 'react-hot-toast';
import { redirect, useRouter } from 'next/navigation';


interface Props {
  prod: Product;
}

const ProductDetails = ({ prod }: Props) => {
  
  const { status, products } = useAppSelector( state => state.cart )
  const [ quantity , setQuantity ] = useState(1)
  const dispatch = useAppDispatch()
  const router = useRouter();

  useEffect(() => {

    switch(status){
      case 'MAX_STOCK_REACHED': 
        toast.error('La cantidad a agregar a carrito supera el stock disponible')
        break
      case 'SUCCESS':
        toast.success('Producto agregado al carrito')
        break
    }

    dispatch(onClearError())

  }, [status, dispatch])


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products))
  }, [products])  
  

  const addProductToCart = ( buyNow: boolean) => {

    const cartProduct: CartProducts = {
      id: prod.id,
      name: prod.name,
      slug: prod.slug,
      price: prod.price,
      image: prod.image[0],
      quantity: buyNow? 1 : quantity,
      max: prod.stock
    }
    dispatch(onAddProductToCart(cartProduct))    

    if (buyNow) {
      router.push('/cart')      
    }
  }

  return (
    <div className='flex flex-col xl:flex-row xl:min-h-120'>
      <div className='w-full xl:w-[50%]'>
        <SlideShow images={prod?.image as string[]} />
      </div>

      <div className='xl:h-fit w-full xl:w-[50%]'>
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

        <div className='flex flex-col justify-center items-center xl:items-start h-fit xl:flex-row xl:justify-between'>
          <ProductQuantity quantity={quantity} max={prod?.stock as number} setQuantity={ setQuantity }/>

          <div className='flex flex-col xl:flex-row items-center mt-4 gap-3 w-full xl:w-auto'>
            <button className={`flex flex-row w-full xl:w-auto justify-center xl:justify-start items-center px-4 py-4 xl:py-2 gap-2 rounded-lg 
              ${ prod?.stock !== 0 ? 'cursor-pointer text-[#F1F1F1] bg-[#0A84FF] hover:bg-[#0a84ffad]' : 'text-[#F1F1F1] bg-[#545454]' }`}
              onClick={ () => addProductToCart(true) }
              >
              <RiMoneyDollarCircleLine size={30} />{' '}
              <p className='font-bold'> Buy Now</p>
            </button>

            <button className={`
              flex flex-row w-full xl:w-auto items-center justify-center xl:justify-start px-4 py-4 xl:py-2 gap-2 border rounded-lg 
              ${ prod?.stock !== 0 ? 'border-[#0A84FF] text-[#0A84FF] hover:border-[#0a84ffad] hover:text-[#0a84ffad] cursor-pointer' : 'border-[#545454] text-[#545454] disabled'  } `}
              onClick={ () => addProductToCart(false) }
              >
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
