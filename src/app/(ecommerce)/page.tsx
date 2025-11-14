import { ProductsGrid } from '@/components/products/ProductsGrid';
import { Carousel } from '@/components/ui/carousel/Carousel';
import { HomeInfoSeparator } from '@/components/ui/information/HomeInfoSeparator';
import { BiShield } from 'react-icons/bi';
import { CiDeliveryTruck, CiLocationOn } from 'react-icons/ci';


export default function Home() {
  return (
    <div className="font-sans px-4 text-[#7eb7ef]">
             
      <Carousel />    

      <div className='flex flex-col w-full mt-15'>
        <h1 className='text-3xl antialiased titles mx-auto'>Check our <span className='font-bold'>latest products</span></h1>
        <ProductsGrid />
      </div>

      <HomeInfoSeparator />

      <div className='flex flex-col w-full mt-15'>
        <h1 className='text-3xl antialiased titles mx-auto'>Check our <span className='font-bold'>Disccounts</span></h1>
        <ProductsGrid />
      </div>      

    </div>
  );
}
