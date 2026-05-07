'use client'
import { placeOrder } from '@/actions/order/place-order';
import { CartProducts } from '@/components/checkout/CartProducts';
import { useAppSelector } from '@/store/hooks';
import { formatPriceUSD } from '@/utils/formatPrice';
import { getTotals } from '@/utils/getTotals';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import { useEffect } from 'react';




export default function SummaryPage() {

  const { currentAddress } = useAppSelector(state => state.address)
  const { productsInCart, total, products } = useAppSelector( state => state.cart )

  const totals = getTotals(total, 0.15)

  const router = useRouter()

  // useEffect(() => {
  //   if (!currentAddress || productsInCart === 0) {
  //     router.replace('/')
  //   }
  // }, [currentAddress, productsInCart, router]);

  const onPlaceOrder = async () => {

    const orderItems = products.map( product => ({
      id: product.id,
      quantity: product.quantity,
      price: product.price
    }))

    console.log(orderItems)
    
    if (currentAddress) {
      const resp = await placeOrder(orderItems, currentAddress)      

      if (!resp.ok) {
        console.log(resp.message)
        return
      }

      router.replace(`/orders/${resp.order?.id}`)
    }


  }

  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px-0'>


      {
        currentAddress || productsInCart > 0 
        ?
          <div className='flex flex-col  w-[1000px] '>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 titles'>
              {/* Carrito */}
              <div className='flex flex-col bg-[#121212] border border-[#637a91] mb-10 xl:mb-20 rounded-xl p-4 xl:mt-0 mt-20'>            

                <div className='flex justify-between mb-2'>
                  <h2 className='text-2xl font-bold'>Order items</h2>
                  <Link href='/cart' className='underline self-center'>
                    Edit cart
                  </Link>
                </div>

                {/* Items */}
                <CartProducts />
              </div>

              {/* checkout */}
                  <div className='titles flex flex-col bg-[#121212] rounded-xl border border-[#637a91] p-4 max-h-fit w-full'>
                    <h2 className='text-2xl font-bold mb-2'>Delivery Address</h2>
                      {
                        currentAddress
                        ?
                        <div className='mb-10'>
                          <p className='text-xl'>
                            { currentAddress?.street } {currentAddress.streetNumber }
                          </p>
                          <p>{ currentAddress.city }, { currentAddress.state } { currentAddress.country }</p>
                          <p>{ currentAddress.zipCode }</p>
                          <hr className='my-2'/>
                          <p>{ currentAddress.name}</p>
                          <p>{ currentAddress.idNumber } </p>
                          <p>{ currentAddress.phone}</p>
                        </div>
                        :''
                      }

                    {/* Divider */}
                    <div className='w-full h-0.5 rounded bg-gray-200 mb-10' />

                    <h2 className='text-2xl mb-2'>Order Summary</h2>

                    
                      <div className='grid grid-cols-2'>
                        <span>
                          N° Products
                        </span>
                        <span className='text-right'>
                          {productsInCart === 1
                            ? '1 item'
                            : `${productsInCart} items`}                    
                        </span>

                        <span>Subtotal</span>
                        <span className='text-right'>{formatPriceUSD(total)}</span>

                        <span>Taxes (15%)</span>
                        <span className='text-right'>{formatPriceUSD(totals.taxTotal)}</span>

                        <span className='text-2xl'>Total</span>
                        <span className='text-right text-2xl'>
                          {formatPriceUSD(totals.total)}
                        </span>
                      </div>
                    

                    <div className='mb-5 mt-5 w-full'>
                    
                      {/* <p className='text-red-500'>errorMessage</p> */}

                      <button 
                        className='flex justify-center w-full titles p-3 bg-[#0A84FF] rounded cursor-pointer hover:bg-[#016edb]'
                        onClick={onPlaceOrder}
                      >
                        Place order
                      </button>
                    </div>
                  </div>

            </div>
          </div>
          :
          ''
      }

    </div>
  );
}