import { getOrderById } from '@/actions/order/get-order-by-id';
import { formatPriceUSD } from '@/utils/formatPrice';
import Image from 'next/image';
import { FaCheck, FaX } from 'react-icons/fa6';


interface Props {
  params: Promise<{ id: string }>;
}

export default async function OrderPage({ params }: Props) {

  const { id } = await params

  const { order } = await getOrderById(id)

  return (
        <div className='flex justify-center items-center mb-72 px-10 sm:px-0'>


          {
            order
            ?
            <div className='flex flex-col  w-[1000px] '>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 titles'>
                {/* Carrito */}
                <div className='flex flex-col bg-[#121212] border border-[#637a91] mb-10 xl:mb-20 rounded-xl p-4 xl:mt-0 mt-20'>            

                  <div className='flex justify-between mb-2'>
                    { 
                      order.isPaid  
                      ? 
                      <div className='gap-2 bg-green-800 rounded-lg flex my-4 items-center w-full p-2 font-bold'>
                        <span className=''>Order Paid</span>
                        <FaCheck />
                      </div>
                      :
                      <div className='gap-2 bg-red-800 rounded-lg flex my-4 items-center w-full p-2 font-bold'>
                        <span className=''>Not Paid</span>
                        <FaX />
                      </div>
                    }
                  </div>

                  {/* Items */}
                  {
                  order.OrderItem.map((prod) => (
                          <div key={`${prod.product.slug}`} className='flex mb-5'>
                  
                            <Image
                              src={`${prod.product.images[0]}`}
                              width={100}
                              height={100}
                              style={{
                                width: '100px',
                                height: '100px',
                              }}
                              alt={prod.product.name}
                              className='object-fit mr-5'
                            />
                            {/* <div className='flex w-[100] h-[100] p-1 bg-white mr-5'>
                              <Image src={prod.image} style={{ width: '100%', height: 'auto' }} width={120} height={120} className='object-contain' alt={prod.name}/>
                            </div> */}
                  
                            <div>
                              <span>
                                {prod.product.name} ({prod.quantity})
                              </span>
                  
                              <p className='font-bold'> { formatPriceUSD(prod.price * prod.quantity)}</p>
                              
                            </div>
                          </div>
                        ))}
                </div>

                {/* checkout */}
                    <div className='titles flex flex-col bg-[#121212] rounded-xl border border-[#637a91] p-4 max-h-fit w-full'>
                      <h2 className='text-2xl font-bold mb-2'>Delivery Address</h2>
                        
                          <div className='mb-10'>
                            <p className='text-xl'>
                              { order.OrderAddress?.street } {order.OrderAddress?.streetNumber }
                            </p>
                            <p>{ order.OrderAddress?.city }, { order.OrderAddress?.state } { order.OrderAddress?.country.name }</p>
                            <p>{ order.OrderAddress?.zipCode }</p>
                            <hr className='my-2'/>
                            <p>{ order.OrderAddress?.name}</p>
                            <p>{ order.OrderAddress?.idNumber } </p>
                            <p>{ order.OrderAddress?.phone}</p>
                          </div>

                      {/* Divider */}
                      <div className='w-full h-0.5 rounded bg-gray-200 mb-10' />

                      <h2 className='text-2xl mb-2'>Order Summary</h2>

                      
                        <div className='grid grid-cols-2'>
                          <span>
                            N° Products
                          </span>
                          <span className='text-right'>
                            {order.itemsInOrder === 1
                              ? '1 item'
                              : `${order.itemsInOrder } items`}                    
                          </span>

                          <span>Subtotal</span>
                          <span className='text-right'>{formatPriceUSD(order.subTotal)}</span>

                          <span>Taxes (15%)</span>
                          <span className='text-right'>{formatPriceUSD(order.tax)}</span>

                          <span className='text-2xl'>Total</span>
                          <span className='text-right text-2xl'>
                            {formatPriceUSD(order.total)}
                          </span>
                        </div>
                      

                      <div className='mb-5 mt-5 w-full font-bold'>
                      
                        {/* <p className='text-red-500'>errorMessage</p> */}

                        <button 
                          className='flex justify-center w-full titles p-3 bg-[#09a210] rounded cursor-pointer hover:bg-[#08670d]'
                          
                        >
                          PAY
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