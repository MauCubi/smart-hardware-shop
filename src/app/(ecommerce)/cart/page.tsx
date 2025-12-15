import ScrollToTop from '@/components/ui/scroll/ScrollToTop';
import { products } from '@/data/products';
import Image from 'next/image';
import { BiTrash } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti';




export default function CartPage() {

  return (
    <div className='flex p-5'>      

      {/* <div className='flex justify-center w-full'>
        <div className='flex justify-center align-middle items-center rounded-2xl w-[95%] xl:w-[50%] h-120 bg-[#121212]'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <BsCartX  color='#0A84FF' className='text-[70px] xl:text-[150px]'/>
            <h1 className='titles text-2xl xl:text-4xl'>Your cart is empty!</h1>
          </div>
        </div>
      </div> */}

      <div className='flex flex-col xl:flex-row w-full justify-between'>

        <div className='flex flex-col bg-[#121212] border border-[#637a91] mb-10 xl:mb-20 rounded xl:w-[65%] p-4 xl:mt-0 mt-20'>

          <div className='flex justify-center xl:justify-end p-2'>
            <button className='flex flex-row bg-red-900 rounded titles p-2 cursor-pointer hover:bg-red-950 gap-1 items-center'>
              <BiTrash size={20} />
              Empty Cart
            </button>
          </div>

          <div className='flex flex-col p-2'>

            <div className='flex flex-col xl:flex-row p-4 justify-between border-b border-b-[#0A84FF] gap-4 xl:gap-0'>

              <div className='flex justify-center align-middle xl:w-auto w-[60%] self-center xl:self-start'>
                <Image src={products[0].image} style={{ width: '100%', height: 'auto' }} width={120} height={120} alt={products[0].name}/>
              </div>

              <div className='flex items-center justify-center align-middle xl:w-[25%]'>
                <h1 className='titles'>{products[0].name}</h1>
              </div>

              <div className='flex flex-row align-middle items-center justify-center'>
                <div className=' flex align-middle flex-row h-8'>
                  <button className='px-3 h-full rounded-l titles bg-[#445566] cursor-pointer'>-</button>
                  <span className='titles px-3 h-full flex items-center border-y border-y-[#445566] cursor-default'>1</span>
                  <button className='px-3 h-full rounded-r titles bg-[#445566] cursor-pointer'>+</button>
                </div>
              </div>

              <div className='flex xl:w-[20%] items-center justify-center'>
                <h1 className='titles'>${products[0].price.toFixed(2)}</h1>
              </div>

              <div className='flex items-center justify-center'>
                <button className='flex flex-row bg-[#445566] rounded titles p-2 cursor-pointer hover:bg-[#4455669d] gap-1 items-center'>
                  <TiDeleteOutline size={25} />                  
                </button>
              </div>

            </div>

            <div className='flex flex-col xl:flex-row p-4  justify-between border-b border-b-[#0A84FF] gap-4 xl:gap-0'>

              <div className='flex justify-center align-middle xl:w-auto w-[60%] self-center xl:self-start'>
                <Image src={products[1].image} style={{ width: '100%', height: 'auto' }} width={120} height={120} alt={products[0].name}/>
              </div>

              <div className='flex items-center justify-center align-middle xl:w-[25%]'>
                <h1 className='titles'>{products[1].name}</h1>
              </div>

              <div className='flex flex-row align-middle items-center justify-center'>
                <div className=' flex align-middle flex-row h-8'>
                  <button className='px-3 h-full rounded-l titles bg-[#445566] cursor-pointer'>-</button>
                  <span className='titles px-3 h-full flex items-center border-y border-y-[#445566] cursor-default'>1</span>
                  <button className='px-3 h-full rounded-r titles bg-[#445566] cursor-pointer'>+</button>
                </div>
              </div>

              <div className='flex xl:w-[20%] items-center justify-center'>
                <h1 className='titles'>${products[1].price.toFixed(2)}</h1>
              </div>

              <div className='flex items-center justify-center'>
                <button className='flex flex-row bg-[#445566] rounded titles p-2 cursor-pointer hover:bg-[#4455669d] gap-1 items-center'>
                  <TiDeleteOutline size={25} />                  
                </button>
              </div>

            </div>

            
          </div>
          
        </div>



        <div className='flex  xl:w-[32%]'>
          <div className='flex flex-col bg-[#121212] rounded border border-[#0A84FF] p-4 max-h-fit w-full'>
            <div className='border-b border-b-amber-50 p-2'>
              <h1 className='titles text-3xl'>Order</h1>
            </div>

            <div className='flex flex-row justify-between p-2 mt-4'>
              <h1 className='titles text-2xl'>Total</h1>
              <h1 className='titles text-2xl'>$ { (products[0].price + products[1].price).toFixed(2) }</h1>
            </div>

            <div className='flex justify-center p-2 mt-2'>
              <button className='titles p-3 bg-[#0A84FF] rounded cursor-pointer hover:bg-[#016edb]'>Continue to checkout</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}