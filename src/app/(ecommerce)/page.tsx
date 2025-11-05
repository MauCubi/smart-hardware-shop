import { ProductsGrid } from '@/components/products/ProductsGrid';
import { Carousel } from '@/components/ui/carousel/Carousel';


export default function Home() {
  return (
    <div className="font-sans px-4 text-[#7eb7ef]">
             
      <Carousel />    
      
      <ProductsGrid />

    </div>
  );
}
