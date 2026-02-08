'use client'
import { CartProducts, Product } from '@/data/products';
import { onAddProductToCart, onClearCart, onRemoveProductFromCart } from '@/store/cart/cartSlice';
// import { products } from '@/data/products';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { BiTrash } from 'react-icons/bi';
import { BsCartX } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';




export default function CartPage() {

  const { productsInCart, total, products } = useAppSelector( state => state.cart )

  const dispatch = useAppDispatch()

  const clearCart = () => dispatch(onClearCart()) 
  const removeProductFromCart = (id: number) => dispatch(onRemoveProductFromCart(id))

  const modifyQuantity = (prod: CartProducts, quantity: number) => {    
    if (!(prod.quantity + quantity > prod.max) && !(prod.quantity + quantity < 1) ) {      
      dispatch(onAddProductToCart({...prod, quantity: quantity}))       
    }
  }


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products))
  }, [products])
  

  return (
    <div className='flex p-5'>      


    {
      productsInCart === 0
      ?
      <div className='flex justify-center w-full'>
        <div className='flex justify-center align-middle items-center rounded-2xl w-[95%] xl:w-[50%] h-120 bg-[#121212]'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <BsCartX  color='#0A84FF' className='text-[70px] xl:text-[150px]'/>
            <h1 className='titles text-2xl xl:text-4xl'>Your cart is empty!</h1>
          </div>
        </div>
      </div> 
      :
      <div className='flex flex-col xl:flex-row w-full justify-between'>

        <div className='flex flex-col bg-[#121212] border border-[#637a91] mb-10 xl:mb-20 rounded xl:w-[65%] p-4 xl:mt-0 mt-20'>

          <div className='flex justify-center xl:justify-end p-2'>
            <button className='flex flex-row bg-red-900 rounded titles p-2 cursor-pointer hover:bg-red-950 gap-1 items-center' onClick={ clearCart }>
              <BiTrash size={20} />
              Empty Cart
            </button>
          </div>

          <div className='flex flex-col p-2'>

            {
              products.map( product => (

                <div key={product.id} className='flex flex-col xl:flex-row p-4 justify-between border-b border-b-[#0A84FF] gap-4 xl:gap-0'>

                  <div className='flex justify-center align-middle  w-[100] h-[100] self-center xl:self-start p-1 bg-white'>
                    <Image src={product.image} style={{ width: '100%', height: 'auto' }} width={120} height={120} className='object-contain' alt={product.name}/>
                  </div>

                  <div className='flex items-center justify-center align-middle xl:w-[25%]'>
                    <h1 className='titles'>{product.name}</h1>
                  </div>

                  <div className='flex flex-row align-middle items-center justify-center'>
                    <div className=' flex align-middle flex-row h-8'>
                      <button className='px-3 h-full rounded-l titles bg-[#445566] cursor-pointer' onClick={ () => modifyQuantity(product, -1)}>-</button>
                      <span className='titles px-3 h-full flex items-center border-y border-y-[#445566] cursor-default' >{ product.quantity }</span>
                      <button className='px-3 h-full rounded-r titles bg-[#445566] cursor-pointer' onClick={ () => modifyQuantity(product, 1)}>+</button>
                    </div>
                  </div>

                  <div className='flex xl:w-[20%] items-center justify-center'>
                    <h1 className='titles'>${product.price.toFixed(2)}</h1>
                  </div>

                  <div className='flex items-center justify-center'>
                    <button className='flex flex-row bg-[#445566] rounded titles p-2 cursor-pointer hover:bg-[#4455669d] gap-1 items-center' onClick={ () => removeProductFromCart(product.id) }>
                      <TiDeleteOutline size={25} />                  
                    </button>
                  </div>

                </div>
              ))
            }


            
          </div>
          
        </div>
        <div className='flex  xl:w-[32%]'>
          <div className='flex flex-col bg-[#121212] rounded border border-[#0A84FF] p-4 max-h-fit w-full'>
            <div className='border-b border-b-amber-50 p-2'>
              <h1 className='titles text-3xl'>Order</h1>
            </div>

            <div className='flex flex-row justify-between p-2 mt-4'>
              <h1 className='titles text-2xl'>Total</h1>
              <h1 className='titles text-2xl'>$ { total.toFixed(2) }</h1>
            </div>

            <div className='flex justify-center p-2 mt-2'>
              <button className='titles p-3 bg-[#0A84FF] rounded cursor-pointer hover:bg-[#016edb]' onClick={ () => toast('On development!', { icon: '🛠️' }) }>Continue to checkout</button>
            </div>
          </div>
        </div>
      </div>
    }






    </div>
  );
}